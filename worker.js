var Vec2 = require('gl-vec2')

var current = {
	config : {},
	isInit : false,
	triangles : [],
	points : [],
	velocities : [],
	transferables : {
		points          : null, // Float32Array
		triangleIndices : null, // Uint32Array
		pointsCount     : 0,
		trianglesCount   : 0,
	}
}

function _sizeArrays( array, count ) {
	
	var difference = count - array.length
	
	if( difference > 0 ) {
		for( var i=0; i < difference; i++ ) {
			array.push([0,0])
		}
	} else if ( difference < 0 ) {
		array.splice( count )
	}
}

function _unpackVectors( array, buffer, count ) {
	
	for( var i=0; i < count; i++ ) {
		array[i][0] = buffer[i*2+0]
		array[i][1] = buffer[i*2+1]
	}
}

function _unpackIndices( triangles, points, indices, count ) {
	
	for( var i=0; i < count; i++ ) {
		triangles[i][0] = points[ indices[i*3+0] ]
		triangles[i][1] = points[ indices[i*3+1] ]
		triangles[i][2] = points[ indices[i*3+2] ]
	}	
}

function _packVectors( array, buffer ) {
	
	for( var i=0; i < array.length; i++ ) {
		buffer[i*2+0] = array[i][0]
		buffer[i*2+1] = array[i][1]
	}
}

function _updateData( data ) {
	
	_sizeArrays( current.points, data.pointsCount )
	_sizeArrays( current.velocities, data.pointsCount )
	_sizeArrays( current.triangles, data.trianglesCount )
	
	// TODO - optimize unpacking
	
	_unpackVectors( current.points,      data.points,     data.pointsCount )
	_unpackIndices(	current.triangles,   current.points,  data.triangleIndices, data.trianglesCount )

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

function _postResults( transferables ) {
	
	_packVectors( current.points,      transferables.points )
	
	// Post message and specify transferable buffers
	postMessage( transferables, [
		transferables.points.buffer,
		transferables.triangleIndices.buffer,
	])
}

function _update() {
	
	var count = current.transferables.trianglesCount
	var indices = current.transferables.triangleIndices
	var point = []
	
	for( var i=0; i < count; i++ ) {
		
		var offset = i * 3
		
		for( var j=0; j < 3; j++ ) {
			
			var indexA = indices[ offset + j ]
			var indexB = indices[ offset + (j+1)%3 ]
			
			var pointA = current.points[ indexA ]
			var pointB = current.points[ indexB ]
			var velocityA = current.velocities[ indexA ]
			var velocityB = current.velocities[ indexB ]
			
			_updateSpring( current.config, pointA, pointB, velocityA, velocityB )
		}
	}
}

onmessage = function(e) {
	
	if( e.data.config ) {
		current.config = e.data.config
		return
	}
	
	if( e.data.needsUpdate ) {
		_updateData( e.data )
	}
	
	// Explicitely copy over the transferables
	current.transferables.points          = e.data.points
	current.transferables.triangleIndices = e.data.triangleIndices
	current.transferables.pointsCount     = e.data.pointsCount
	current.transferables.trianglesCount  = e.data.trianglesCount

	_update()
	
	_postResults( current.transferables )
}