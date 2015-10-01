var CreateTriangles = require('delaunay-triangulate')
var TAU = Math.PI * 2
var Vec2 = require('gl-vec2')
var Dat = require('dat-gui')
var OnTap = require('@tatumcreative/on-tap')
var Lerp = require('lerp')

function _prepCanvasAndGetCtx() {
	
	var canvas = $('canvas')[0]
	
	function resize() {
		canvas.width = window.innerWidth * devicePixelRatio
		canvas.height = window.innerHeight * devicePixelRatio
	}
	
	$(window).on('resize', resize)
	resize()
	
	return canvas.getContext('2d')
}

function _clickToCreatePoints( current, draw ) {
	
	var options = { devicePixelRatio : true }
	
	OnTap( document.getElementsByTagName('canvas'), function(e) {
		
		var point = [e.x,e.y]

		current.points.push(point)
		current.triangleIndices = CreateTriangles( current.points )
		current.triangles = current.triangleIndices.map(function( indices ) {
			
			var pt1 = current.points[indices[0]]
			var pt2 = current.points[indices[1]]
			var pt3 = current.points[indices[2]]
			
			return [pt1, pt2, pt3]
		})
		
		var pointOffset = current.points.length * 2
		current.targetPoints[pointOffset - 2] = point[0]
		current.targetPoints[pointOffset - 1] = point[1]
		
		draw()
		return false
		
	}, options)
}

function _drawTriangles( ctx, config, triangles, points ) {

	ctx.lineWidth = config.lineWidth * devicePixelRatio
	ctx.strokeStyle = config.lineColor

	ctx.beginPath()
	triangles.forEach(function( triangle ) {
		
		ctx.moveTo( triangle[0][0], triangle[0][1] )
		ctx.lineTo( triangle[1][0], triangle[1][1] )

		ctx.moveTo( triangle[1][0], triangle[1][1] )
		ctx.lineTo( triangle[2][0], triangle[2][1] )

		ctx.moveTo( triangle[2][0], triangle[2][1] )
		ctx.lineTo( triangle[0][0], triangle[0][1] )
	})
	
	ctx.stroke()
	ctx.closePath()
}

function _drawPoints( ctx, config, points ) {
	
	var size = config.pointSize * devicePixelRatio
	var halfSize = config.pointSize / 2 * devicePixelRatio
	
	ctx.fillStyle = config.pointColor

	points.forEach(function( pt ) {
		
		ctx.beginPath()
		ctx.arc( pt[0],	pt[1], config.pointSize, 0, TAU )
		ctx.fill()
	})
}

function _updateFn( config, current, worker ) {
	
	var target = current.targetPoints
	
	return function update() {
		
		current.points.forEach( (point, i) => {
			
			point[0] = Lerp( point[0], target[i*2+0], config.lerpTowardsTarget )
			point[1] = Lerp( point[1], target[i*2+1], config.lerpTowardsTarget )
		})
		
		_postToWorker( worker, current.transferables )
	}
}

function _drawFn( ctx, config, current ) {
	
	return function draw() {
		
		ctx.clearRect(
			0, 0,
			window.innerWidth * devicePixelRatio,
			window.innerHeight * devicePixelRatio
		)
		
		_drawTriangles( ctx, config, current.triangles, current.points )
		_drawPoints( ctx, config, current.points )
	}
}

function _loopFn( update, draw ) {
	
	function loop() {
		update()
		draw()
		requestAnimationFrame( loop )
	}
	
	return loop
}

function _initDatGui( config, worker ) {
	
	var gui = new Dat.GUI({autoPlace: false})
	var $gui = $(gui.domElement)
	
	function updateWorker() {
		worker.postMessage({
			config: config
		})
	}
	gui.add( config, 'springStrength', 0, 0.2 )  .onChange( updateWorker )
	gui.add( config, 'springDamper', 0, 1 )      .onChange( updateWorker )
	gui.add( config, 'restingLength', 1, 500 )   .onChange( updateWorker )
	gui.add( config, 'maxSeparation', 1, 8 )     .onChange( updateWorker )
	gui.add( config, 'minSeparation', 0.001, 1 ) .onChange( updateWorker )
	
	$('body').append(gui.domElement)
	
	$gui.css({
		position: "absolute",
		top : 0,
		left : 0
	})
}

function _createWorker( config, current ) {
	
	var worker = new Worker('assets/build/worker.bundle.js')
	
	// Pass over the config
	worker.postMessage({
		config: config
	})
	worker.onmessage = _receiveWorkerMessageFn( current, worker )
	
	return worker
}

function _receiveWorkerMessageFn( current, worker ) {
	
	var transferables = current.transferables
	
	return function receiveWorkerMessage( e ) {
		
		// Copy back the buffers to the current object
		transferables.points = e.data.points
		transferables.triangleIndices = e.data.triangleIndices
		
		// TODO - optimize the following:
		
		// Copy over the target points calculated in the worker
		for( var i=0; i < transferables.pointsCount * 2; i++ ) {
			current.targetPoints[i] = transferables.points[i]
		}
		
		// Copy any newly created triangle indices over to the worker
		for( var i = 0; i < current.triangleIndices.length; i++ ) {
			transferables.triangleIndices[i*3+0] = current.triangleIndices[i][0]
			transferables.triangleIndices[i*3+1] = current.triangleIndices[i][1]
			transferables.triangleIndices[i*3+2] = current.triangleIndices[i][2]
		}
		
		// Copy any newly created points over to the worker
		for( var i = Math.max(0, transferables.pointsCount - 1); i < current.points.length; i++ ) {
			transferables.points[i*2+0] = current.points[i][0]
			transferables.points[i*2+1] = current.points[i][1]
		}

		if(
			transferables.trianglesCount !== current.triangleIndices.length ||
			transferables.pointsCount    !== current.points.length
		) {
			transferables.needsUpdate    = true
			transferables.trianglesCount = current.triangleIndices.length
			transferables.pointsCount    = current.points.length
		}
		
		var pts = transferables.points
	}
}

function _postToWorker( worker, transferables ) {
	
	var hasDataToPost = transferables.points.length > 0
	
	if( hasDataToPost ) {
		
		worker.postMessage( transferables, [
			transferables.points.buffer,
			transferables.triangleIndices.buffer,
		])
		
		transferables.needsUpdate = false
	}
}

function init() {
	
	var ctx = _prepCanvasAndGetCtx()
	
	var config = {
		pointSize         : 4,
		pointColor        : "#fff",
		lineWidth         : 2,
		lineColor         : "#208FF3",
		restingLength     : 0.1 * Vec2.length([window.innerWidth, window.innerHeight]),
		springStrength    : 0.01,
		springDamper      : 0.9,
		maxSeparation     : 4,
		minSeparation     : 0.01,
		maxPointCount     : 1000,
		lerpTowardsTarget : 0.01,
	}
	
	var current = {
		count           : 0,
		points          : [],
		targets         : [],
		triangles       : [],
		triangleIndices : [],
		targetPoints    : new Float32Array( config.maxPointCount * 2 ),
		transferables   : {
			points          : new Float32Array( config.maxPointCount * 2 ),
			triangleIndices : new Uint32Array( config.maxPointCount * 3 ),
			pointsCount     : 0,
			trianglesCount  : 0,
			needsUpdate     : true,
		}
	}

	var worker = _createWorker( config, current )
	var update = _updateFn( config, current, worker )
	var draw = _drawFn( ctx, config, current )
	
	// Create and start loop
	_loopFn( update, draw )()
	
	_clickToCreatePoints( current, draw )
	
	_initDatGui( config, worker )
}

jQuery(init)