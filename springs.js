var CreateTriangles = require('delaunay-triangulate')
var TAU = Math.PI * 2
var Vec2 = require('gl-vec2')
var Dat = require('dat-gui')
var OnTap = require('@tatumcreative/on-tap')

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

var _updateSpring = (function() {
	
	var force = []
	
	return function _updateSpring( config, pointA, pointB, velocityA, velocityB ) {
	
		var separation = Vec2.distance( pointA, pointB )

		// Constrain the effect to not allow ridiculous values
		var limitSeparation = separation
		    limitSeparation = Math.min( config.restingLength * config.maxSeparation, limitSeparation )
		    limitSeparation = Math.max( config.restingLength * config.minSeparation, limitSeparation )

		var forceMagnitude = (limitSeparation - config.restingLength) * config.springStrength

		// Magnitude => force vector
		Vec2.copy     ( force, pointA )
		Vec2.subtract ( force, force, pointB )
		Vec2.scale    ( force, force, forceMagnitude / separation ) 

		// Add/subtract the force to the velocities
		Vec2.subtract ( velocityA, velocityA, force )
		Vec2.add      ( velocityB, velocityB, force )

		// Friction / spring dampening
		Vec2.scale    ( velocityA, velocityA, config.springDamper )
		Vec2.scale    ( velocityB, velocityB, config.springDamper )

		// Apply the velocity
		Vec2.add      ( pointA, pointA, velocityA )
		Vec2.add      ( pointB, pointB, velocityB )
	}
})()

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
	
	var gui = new Dat.GUI({autoPlace: false})
	var $gui = $(gui.domElement)
	
	gui.add( config, 'springStrength', 0, 0.2 )
	gui.add( config, 'springDamper', 0, 1 )
	gui.add( config, 'restingLength', 1, 500 )
	gui.add( config, 'maxSeparation', 1, 8 )
	gui.add( config, 'minSeparation', 0.001, 1 )
	
	$('body').append(gui.domElement)
	
	$gui.css({
		position: "absolute",
		top : 0,
		left : 0
	})
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
		maxSeparation  : 4,
		minSeparation  : 0.01
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