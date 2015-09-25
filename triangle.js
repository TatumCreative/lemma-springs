var CreateTriangles = require('delaunay-triangulate')
var TAU = Math.PI * 2
var Vec2 = require('gl-vec2')
var Dat = require('dat-gui')

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
	
	
	$('canvas').click(function(e) {
		
		e.preventDefault()
		e.stopImmediatePropagation()
		
		var x = e.pageX * devicePixelRatio
		var y = e.pageY * devicePixelRatio
		
		var point = [x,y]
		
		current.points.push(point)
		current.velocities.push([0,0])
		current.triangleIndices = CreateTriangles( current.points )
		current.triangles = current.triangleIndices.map(function( indices ) {
			
			var pt1 = current.points[indices[0]]
			var pt2 = current.points[indices[1]]
			var pt3 = current.points[indices[2]]
			
			return [pt1, pt2, pt3]
		})
		
		draw()
		
		return false
	})
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

function _updateSpring( config, pointA, pointB, velocityA, velocityB ) {
	
	var separation = Vec2.distance( pointA, pointB )
	
	var limitSeparation = separation
	    limitSeparation = Math.min( config.restingLength * 4, limitSeparation )
	    limitSeparation = Math.max( config.restingLength * 0.01, limitSeparation )

	var stretch = (limitSeparation - config.restingLength) * config.springStrength
	
	var forceX = (pointA[0] - pointB[0]) / separation
	var forceY = (pointA[1] - pointB[1]) / separation
	
	forceX *= stretch
	forceY *= stretch

	velocityA[0] = (velocityA[0] - forceX) * config.springDamper
	velocityA[1] = (velocityA[1] - forceY) * config.springDamper
	velocityB[0] = (velocityB[0] + forceX) * config.springDamper
	velocityB[1] = (velocityB[1] + forceY) * config.springDamper

	pointA[0] += velocityA[0]
	pointA[1] += velocityA[1]

	pointB[0] += velocityB[0]
	pointB[1] += velocityB[1]
}

function _updateFn( config, current ) {
	
	return function update() {
		
		current.triangleIndices.forEach( indices => {
			
			indices.forEach( ( indexA, i ) => {
				
				var indexB = indices[ (i + 1) % 3 ]
				
				var pointA = current.points[ indexA ]
				var pointB = current.points[ indexB ]
				var velocityA = current.velocities[ indexA ]
				var velocityB = current.velocities[ indexB ]
				
				_updateSpring( config, pointA, pointB, velocityA, velocityB )
			})
		})
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

function _initDatGui( config ) {
	
	var gui = new Dat.GUI()
	
	gui.add( config, 'springStrength', 0, 0.2 )
	gui.add( config, 'springDamper', 0, 1 )
	gui.add( config, 'restingLength', 1, 500 )
	
}

function init() {
	
	var ctx = _prepCanvasAndGetCtx()
	
	var config = {
		pointSize      : 4,
		pointColor     : "#fff",
		lineWidth      : 2,
		lineColor      : "#208FF3",
		restingLength  : 0.1 * Vec2.length([window.innerWidth, window.innerHeight]),
		springStrength : 0.01,
		springDamper   : 0.9,
	}
	
	var current = {
		points : [],
		velocities : [],
		triangles : [],
		triangleIndices : [],
	}
	
	var update = _updateFn( config, current )
	var draw = _drawFn( ctx, config, current )
	
	// Create and start loop
	_loopFn( update, draw )()
	
	_clickToCreatePoints( current, draw )
	
	_initDatGui( config )
}

jQuery(init)