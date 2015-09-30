(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/add.js":[function(require,module,exports){
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/clone.js":[function(require,module,exports){
module.exports = clone

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new Float32Array(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/copy.js":[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/create.js":[function(require,module,exports){
module.exports = create

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new Float32Array(2)
    out[0] = 0
    out[1] = 0
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/cross.js":[function(require,module,exports){
module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/distance.js":[function(require,module,exports){
module.exports = distance

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/divide.js":[function(require,module,exports){
module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/dot.js":[function(require,module,exports){
module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/forEach.js":[function(require,module,exports){
module.exports = forEach

var vec = require('./create')()

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
    var i, l
    if(!stride) {
        stride = 2
    }

    if(!offset) {
        offset = 0
    }
    
    if(count) {
        l = Math.min((count * stride) + offset, a.length)
    } else {
        l = a.length
    }

    for(i = offset; i < l; i += stride) {
        vec[0] = a[i]
        vec[1] = a[i+1]
        fn(vec, vec, arg)
        a[i] = vec[0]
        a[i+1] = vec[1]
    }
    
    return a
}
},{"./create":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/create.js"}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/fromValues.js":[function(require,module,exports){
module.exports = fromValues

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new Float32Array(2)
    out[0] = x
    out[1] = y
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/index.js":[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , add: require('./add')
  , subtract: require('./subtract')
  , multiply: require('./multiply')
  , divide: require('./divide')
  , min: require('./min')
  , max: require('./max')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , squaredDistance: require('./squaredDistance')
  , length: require('./length')
  , squaredLength: require('./squaredLength')
  , negate: require('./negate')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat2: require('./transformMat2')
  , transformMat2d: require('./transformMat2d')
  , transformMat3: require('./transformMat3')
  , transformMat4: require('./transformMat4')
  , forEach: require('./forEach')
}
},{"./add":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/add.js","./clone":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/clone.js","./copy":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/copy.js","./create":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/create.js","./cross":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/cross.js","./distance":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/distance.js","./divide":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/divide.js","./dot":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/dot.js","./forEach":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/forEach.js","./fromValues":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/fromValues.js","./length":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/length.js","./lerp":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/lerp.js","./max":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/max.js","./min":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/min.js","./multiply":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/multiply.js","./negate":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/negate.js","./normalize":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/normalize.js","./random":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/random.js","./scale":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/scale.js","./scaleAndAdd":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/scaleAndAdd.js","./set":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/set.js","./squaredDistance":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/squaredDistance.js","./squaredLength":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/squaredLength.js","./subtract":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/subtract.js","./transformMat2":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat2.js","./transformMat2d":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat2d.js","./transformMat3":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat3.js","./transformMat4":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat4.js"}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/length.js":[function(require,module,exports){
module.exports = length

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/lerp.js":[function(require,module,exports){
module.exports = lerp

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/max.js":[function(require,module,exports){
module.exports = max

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/min.js":[function(require,module,exports){
module.exports = min

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/multiply.js":[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/negate.js":[function(require,module,exports){
module.exports = negate

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/normalize.js":[function(require,module,exports){
module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/random.js":[function(require,module,exports){
module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
    scale = scale || 1.0
    var r = Math.random() * 2.0 * Math.PI
    out[0] = Math.cos(r) * scale
    out[1] = Math.sin(r) * scale
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/scale.js":[function(require,module,exports){
module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/scaleAndAdd.js":[function(require,module,exports){
module.exports = scaleAndAdd

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/set.js":[function(require,module,exports){
module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/squaredDistance.js":[function(require,module,exports){
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return x*x + y*y
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/squaredLength.js":[function(require,module,exports){
module.exports = squaredLength

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1]
    return x*x + y*y
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/subtract.js":[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat2.js":[function(require,module,exports){
module.exports = transformMat2

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y
    out[1] = m[1] * x + m[3] * y
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat2d.js":[function(require,module,exports){
module.exports = transformMat2d

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y + m[4]
    out[1] = m[1] * x + m[3] * y + m[5]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat3.js":[function(require,module,exports){
module.exports = transformMat3

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[3] * y + m[6]
    out[1] = m[1] * x + m[4] * y + m[7]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/transformMat4.js":[function(require,module,exports){
module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
},{}],"/Users/gregtatum/Google Drive/lemmas/springs/worker.js":[function(require,module,exports){
'use strict';

var Vec2 = require('gl-vec2');

var current = {
	config: {},
	isInit: false,
	triangles: [],
	points: [],
	velocities: [],
	transferables: {
		points: null, // Float32Array
		velocities: null, //Float32Array
		triangleIndices: null, // Uint32Array
		pointsCount: 0,
		trianglesCount: 0
	}
};

function _sizeArrays(array, count) {

	var difference = count - array.length;

	if (difference > 0) {
		for (var i = 0; i < difference; i++) {
			array.push([0, 0]);
		}
	} else if (difference < 0) {
		array.splice(count);
	}
}

function _unpackVectors(array, buffer, count) {

	for (var i = 0; i < count; i++) {
		array[i][0] = buffer[i * 2 + 0];
		array[i][1] = buffer[i * 2 + 1];
	}
}

function _unpackIndices(triangles, points, indices, count) {

	for (var i = 0; i < count; i++) {
		triangles[i][0] = points[indices[i * 3 + 0]];
		triangles[i][1] = points[indices[i * 3 + 1]];
		triangles[i][2] = points[indices[i * 3 + 2]];
	}
}

function _packVectors(array, buffer) {

	for (var i = 0; i < array.length; i++) {
		buffer[i * 2 + 0] = array[i][0];
		buffer[i * 2 + 1] = array[i][1];
	}
}

function _updateData(data) {
	// Explicitely copy over the data

	_sizeArrays(current.points, data.pointsCount);
	_sizeArrays(current.velocities, data.pointsCount);
	_sizeArrays(current.triangles, data.trianglesCount);

	_unpackVectors(current.points, data.points, data.pointsCount);
	_unpackIndices(current.triangles, current.points, data.triangleIndices, data.trianglesCount);
}

var _updateSpring = (function () {

	var force = [];

	return function _updateSpring(config, pointA, pointB, velocityA, velocityB) {

		var separation = Vec2.distance(pointA, pointB);

		// Constrain the effect to not allow ridiculous values
		var limitSeparation = separation;
		limitSeparation = Math.min(config.restingLength * config.maxSeparation, limitSeparation);
		limitSeparation = Math.max(config.restingLength * config.minSeparation, limitSeparation);

		var forceMagnitude = (limitSeparation - config.restingLength) * config.springStrength;

		// Magnitude => force vector
		Vec2.copy(force, pointA);
		Vec2.subtract(force, force, pointB);
		Vec2.scale(force, force, forceMagnitude / separation);

		// Add/subtract the force to the velocities
		Vec2.subtract(velocityA, velocityA, force);
		Vec2.add(velocityB, velocityB, force);

		// Friction / spring dampening
		Vec2.scale(velocityA, velocityA, config.springDamper);
		Vec2.scale(velocityB, velocityB, config.springDamper);

		// Apply the velocity
		Vec2.add(pointA, pointA, velocityA);
		Vec2.add(pointB, pointB, velocityB);
	};
})();

function _postResults(transferables) {

	_packVectors(current.points, transferables.points);

	// Post message and specify transferable buffers
	postMessage(transferables, [transferables.points.buffer, transferables.triangleIndices.buffer]);
}

function _update() {

	var count = current.transferables.trianglesCount;
	var indices = current.transferables.triangleIndices;
	var point = [];

	for (var i = 0; i < count; i++) {

		var offset = i * 3;

		for (var j = 0; j < 3; j++) {

			var indexA = indices[offset + j];
			var indexB = indices[offset + (j + 1) % 3];

			var pointA = current.points[indexA];
			var pointB = current.points[indexB];
			var velocityA = current.velocities[indexA];
			var velocityB = current.velocities[indexB];

			_updateSpring(current.config, pointA, pointB, velocityA, velocityB);
		}
	}
}

onmessage = function (e) {

	if (e.data.config) {
		current.config = e.data.config;
		return;
	}

	if (e.data.needsUpdate) {
		_updateData(e.data);
	}

	current.transferables.points = e.data.points;
	current.transferables.velocities = e.data.velocities;
	current.transferables.triangleIndices = e.data.triangleIndices;
	current.transferables.pointsCount = e.data.pointsCount;
	current.transferables.trianglesCount = e.data.trianglesCount;

	_update();

	_postResults(current.transferables);
};

},{"gl-vec2":"/Users/gregtatum/Google Drive/lemmas/springs/node_modules/gl-vec2/index.js"}]},{},["/Users/gregtatum/Google Drive/lemmas/springs/worker.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvYWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY3Jvc3MuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9sZXJwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbWF4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbWluLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9yYW5kb20uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NjYWxlQW5kQWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3F1YXJlZERpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3F1YXJlZExlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0Mi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDJkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0My5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDQuanMiLCIvVXNlcnMvZ3JlZ3RhdHVtL0dvb2dsZSBEcml2ZS9sZW1tYXMvc3ByaW5ncy93b3JrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xCQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7O0FBRTdCLElBQUksT0FBTyxHQUFHO0FBQ2IsT0FBTSxFQUFHLEVBQUU7QUFDWCxPQUFNLEVBQUcsS0FBSztBQUNkLFVBQVMsRUFBRyxFQUFFO0FBQ2QsT0FBTSxFQUFHLEVBQUU7QUFDWCxXQUFVLEVBQUcsRUFBRTtBQUNmLGNBQWEsRUFBRztBQUNmLFFBQU0sRUFBWSxJQUFJO0FBQ3RCLFlBQVUsRUFBUSxJQUFJO0FBQ3RCLGlCQUFlLEVBQUcsSUFBSTtBQUN0QixhQUFXLEVBQU8sQ0FBQztBQUNuQixnQkFBYyxFQUFLLENBQUM7RUFDcEI7Q0FDRCxDQUFBOztBQUVELFNBQVMsV0FBVyxDQUFFLEtBQUssRUFBRSxLQUFLLEVBQUc7O0FBRXBDLEtBQUksVUFBVSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBOztBQUVyQyxLQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUc7QUFDcEIsT0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRztBQUNuQyxRQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FDakI7RUFDRCxNQUFNLElBQUssVUFBVSxHQUFHLENBQUMsRUFBRztBQUM1QixPQUFLLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFBO0VBQ3JCO0NBQ0Q7O0FBRUQsU0FBUyxjQUFjLENBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUc7O0FBRS9DLE1BQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUc7QUFDOUIsT0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzNCLE9BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtFQUMzQjtDQUNEOztBQUVELFNBQVMsY0FBYyxDQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRzs7QUFFNUQsTUFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRztBQUM5QixXQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFFLENBQUE7QUFDMUMsV0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFBO0FBQzFDLFdBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUUsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQTtFQUMxQztDQUNEOztBQUVELFNBQVMsWUFBWSxDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUc7O0FBRXRDLE1BQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHO0FBQ3JDLFFBQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQixRQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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SSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRztBQUN4QixhQUFXLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFBO0VBQ3JCOztBQUVELFFBQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0FBQ3JELFFBQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO0FBQ3pELFFBQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFBO0FBQzlELFFBQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFBO0FBQzFELFFBQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFBOztBQUU3RCxRQUFPLEVBQUUsQ0FBQTs7QUFFVCxhQUFZLENBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBRSxDQUFBO0NBQ3JDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBhZGRcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgyKVxuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY29weVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMyXG4gKlxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMilcbiAgICBvdXRbMF0gPSAwXG4gICAgb3V0WzFdID0gMFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyb3NzXG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICogTm90ZSB0aGF0IHRoZSBjcm9zcyBwcm9kdWN0IG11c3QgYnkgZGVmaW5pdGlvbiBwcm9kdWNlIGEgM0QgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgICB2YXIgeiA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF1cbiAgICBvdXRbMF0gPSBvdXRbMV0gPSAwXG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSlcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpdmlkZVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAvIGJbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkb3RcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHZlYyA9IHJlcXVpcmUoJy4vY3JlYXRlJykoKVxuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGxcbiAgICBpZighc3RyaWRlKSB7XG4gICAgICAgIHN0cmlkZSA9IDJcbiAgICB9XG5cbiAgICBpZighb2Zmc2V0KSB7XG4gICAgICAgIG9mZnNldCA9IDBcbiAgICB9XG4gICAgXG4gICAgaWYoY291bnQpIHtcbiAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBhLmxlbmd0aFxuICAgIH1cblxuICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgdmVjWzBdID0gYVtpXVxuICAgICAgICB2ZWNbMV0gPSBhW2krMV1cbiAgICAgICAgZm4odmVjLCB2ZWMsIGFyZylcbiAgICAgICAgYVtpXSA9IHZlY1swXVxuICAgICAgICBhW2krMV0gPSB2ZWNbMV1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21WYWx1ZXNcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKVxuICAsIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJylcbiAgLCBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgc2V0OiByZXF1aXJlKCcuL3NldCcpXG4gICwgYWRkOiByZXF1aXJlKCcuL2FkZCcpXG4gICwgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJylcbiAgLCBtaW46IHJlcXVpcmUoJy4vbWluJylcbiAgLCBtYXg6IHJlcXVpcmUoJy4vbWF4JylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKVxuICAsIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJylcbiAgLCBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJylcbiAgLCBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJylcbiAgLCBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKVxuICAsIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKVxuICAsIG5vcm1hbGl6ZTogcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxuICAsIGRvdDogcmVxdWlyZSgnLi9kb3QnKVxuICAsIGNyb3NzOiByZXF1aXJlKCcuL2Nyb3NzJylcbiAgLCBsZXJwOiByZXF1aXJlKCcuL2xlcnAnKVxuICAsIHJhbmRvbTogcmVxdWlyZSgnLi9yYW5kb20nKVxuICAsIHRyYW5zZm9ybU1hdDI6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MicpXG4gICwgdHJhbnNmb3JtTWF0MmQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MmQnKVxuICAsIHRyYW5zZm9ybU1hdDM6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MycpXG4gICwgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JylcbiAgLCBmb3JFYWNoOiByZXF1aXJlKCcuL2ZvckVhY2gnKVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwXG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdXG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheClcbiAgICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG1heFxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pXG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtaW5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHlcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAqIGJbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBuZWdhdGVcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF1cbiAgICBvdXRbMV0gPSAtYVsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICB2YXIgbGVuID0geCp4ICsgeSp5XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgICAgIG91dFswXSA9IGFbMF0gKiBsZW5cbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlblxuICAgIH1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByYW5kb21cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wXG4gICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMi4wICogTWF0aC5QSVxuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGVcbiAgICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHNjYWxlXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJcbiAgICBvdXRbMV0gPSBhWzFdICogYlxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzZXRcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV1cbiAgICByZXR1cm4geCp4ICsgeSp5XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIHJldHVybiB4KnggKyB5Knlcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRyYWN0XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQyXG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0Mn0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MihvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQyZFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJkXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQyZH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MmQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeSArIG1bNV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQzXG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0M1xuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzRdICogeSArIG1bN11cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQ0XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgXG4gICAgICAgIHkgPSBhWzFdXG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bMTJdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdXG4gICAgcmV0dXJuIG91dFxufSIsInZhciBWZWMyID0gcmVxdWlyZSgnZ2wtdmVjMicpXG5cbnZhciBjdXJyZW50ID0ge1xuXHRjb25maWcgOiB7fSxcblx0aXNJbml0IDogZmFsc2UsXG5cdHRyaWFuZ2xlcyA6IFtdLFxuXHRwb2ludHMgOiBbXSxcblx0dmVsb2NpdGllcyA6IFtdLFxuXHR0cmFuc2ZlcmFibGVzIDoge1xuXHRcdHBvaW50cyAgICAgICAgICA6IG51bGwsIC8vIEZsb2F0MzJBcnJheVxuXHRcdHZlbG9jaXRpZXMgICAgICA6IG51bGwsIC8vRmxvYXQzMkFycmF5XG5cdFx0dHJpYW5nbGVJbmRpY2VzIDogbnVsbCwgLy8gVWludDMyQXJyYXlcblx0XHRwb2ludHNDb3VudCAgICAgOiAwLFxuXHRcdHRyaWFuZ2xlc0NvdW50ICAgOiAwLFxuXHR9XG59XG5cbmZ1bmN0aW9uIF9zaXplQXJyYXlzKCBhcnJheSwgY291bnQgKSB7XG5cdFxuXHR2YXIgZGlmZmVyZW5jZSA9IGNvdW50IC0gYXJyYXkubGVuZ3RoXG5cdFxuXHRpZiggZGlmZmVyZW5jZSA+IDAgKSB7XG5cdFx0Zm9yKCB2YXIgaT0wOyBpIDwgZGlmZmVyZW5jZTsgaSsrICkge1xuXHRcdFx0YXJyYXkucHVzaChbMCwwXSlcblx0XHR9XG5cdH0gZWxzZSBpZiAoIGRpZmZlcmVuY2UgPCAwICkge1xuXHRcdGFycmF5LnNwbGljZSggY291bnQgKVxuXHR9XG59XG5cbmZ1bmN0aW9uIF91bnBhY2tWZWN0b3JzKCBhcnJheSwgYnVmZmVyLCBjb3VudCApIHtcblx0XG5cdGZvciggdmFyIGk9MDsgaSA8IGNvdW50OyBpKysgKSB7XG5cdFx0YXJyYXlbaV1bMF0gPSBidWZmZXJbaSoyKzBdXG5cdFx0YXJyYXlbaV1bMV0gPSBidWZmZXJbaSoyKzFdXG5cdH1cbn1cblxuZnVuY3Rpb24gX3VucGFja0luZGljZXMoIHRyaWFuZ2xlcywgcG9pbnRzLCBpbmRpY2VzLCBjb3VudCApIHtcblx0XG5cdGZvciggdmFyIGk9MDsgaSA8IGNvdW50OyBpKysgKSB7XG5cdFx0dHJpYW5nbGVzW2ldWzBdID0gcG9pbnRzWyBpbmRpY2VzW2kqMyswXSBdXG5cdFx0dHJpYW5nbGVzW2ldWzFdID0gcG9pbnRzWyBpbmRpY2VzW2kqMysxXSBdXG5cdFx0dHJpYW5nbGVzW2ldWzJdID0gcG9pbnRzWyBpbmRpY2VzW2kqMysyXSBdXG5cdH1cdFxufVxuXG5mdW5jdGlvbiBfcGFja1ZlY3RvcnMoIGFycmF5LCBidWZmZXIgKSB7XG5cdFxuXHRmb3IoIHZhciBpPTA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApIHtcblx0XHRidWZmZXJbaSoyKzBdID0gYXJyYXlbaV1bMF1cblx0XHRidWZmZXJbaSoyKzFdID0gYXJyYXlbaV1bMV1cblx0fVxufVxuXG5mdW5jdGlvbiBfdXBkYXRlRGF0YSggZGF0YSApIHtcblx0Ly8gRXhwbGljaXRlbHkgY29weSBvdmVyIHRoZSBkYXRhXG5cdFxuXHRfc2l6ZUFycmF5cyggY3VycmVudC5wb2ludHMsIGRhdGEucG9pbnRzQ291bnQgKVxuXHRfc2l6ZUFycmF5cyggY3VycmVudC52ZWxvY2l0aWVzLCBkYXRhLnBvaW50c0NvdW50IClcblx0X3NpemVBcnJheXMoIGN1cnJlbnQudHJpYW5nbGVzLCBkYXRhLnRyaWFuZ2xlc0NvdW50IClcblx0XG5cdF91bnBhY2tWZWN0b3JzKCBjdXJyZW50LnBvaW50cywgICAgICBkYXRhLnBvaW50cywgICAgIGRhdGEucG9pbnRzQ291bnQgKVxuXHRfdW5wYWNrSW5kaWNlcyhcdGN1cnJlbnQudHJpYW5nbGVzLCAgIGN1cnJlbnQucG9pbnRzLCAgZGF0YS50cmlhbmdsZUluZGljZXMsIGRhdGEudHJpYW5nbGVzQ291bnQgKVxuXG59XG5cbnZhciBfdXBkYXRlU3ByaW5nID0gKGZ1bmN0aW9uKCkge1xuXHRcblx0dmFyIGZvcmNlID0gW11cblx0XG5cdHJldHVybiBmdW5jdGlvbiBfdXBkYXRlU3ByaW5nKCBjb25maWcsIHBvaW50QSwgcG9pbnRCLCB2ZWxvY2l0eUEsIHZlbG9jaXR5QiApIHtcblx0XG5cdFx0dmFyIHNlcGFyYXRpb24gPSBWZWMyLmRpc3RhbmNlKCBwb2ludEEsIHBvaW50QiApXG5cblx0XHQvLyBDb25zdHJhaW4gdGhlIGVmZmVjdCB0byBub3QgYWxsb3cgcmlkaWN1bG91cyB2YWx1ZXNcblx0XHR2YXIgbGltaXRTZXBhcmF0aW9uID0gc2VwYXJhdGlvblxuXHRcdCAgICBsaW1pdFNlcGFyYXRpb24gPSBNYXRoLm1pbiggY29uZmlnLnJlc3RpbmdMZW5ndGggKiBjb25maWcubWF4U2VwYXJhdGlvbiwgbGltaXRTZXBhcmF0aW9uIClcblx0XHQgICAgbGltaXRTZXBhcmF0aW9uID0gTWF0aC5tYXgoIGNvbmZpZy5yZXN0aW5nTGVuZ3RoICogY29uZmlnLm1pblNlcGFyYXRpb24sIGxpbWl0U2VwYXJhdGlvbiApXG5cblx0XHR2YXIgZm9yY2VNYWduaXR1ZGUgPSAobGltaXRTZXBhcmF0aW9uIC0gY29uZmlnLnJlc3RpbmdMZW5ndGgpICogY29uZmlnLnNwcmluZ1N0cmVuZ3RoXG5cblx0XHQvLyBNYWduaXR1ZGUgPT4gZm9yY2UgdmVjdG9yXG5cdFx0VmVjMi5jb3B5ICAgICAoIGZvcmNlLCBwb2ludEEgKVxuXHRcdFZlYzIuc3VidHJhY3QgKCBmb3JjZSwgZm9yY2UsIHBvaW50QiApXG5cdFx0VmVjMi5zY2FsZSAgICAoIGZvcmNlLCBmb3JjZSwgZm9yY2VNYWduaXR1ZGUgLyBzZXBhcmF0aW9uICkgXG5cblx0XHQvLyBBZGQvc3VidHJhY3QgdGhlIGZvcmNlIHRvIHRoZSB2ZWxvY2l0aWVzXG5cdFx0VmVjMi5zdWJ0cmFjdCAoIHZlbG9jaXR5QSwgdmVsb2NpdHlBLCBmb3JjZSApXG5cdFx0VmVjMi5hZGQgICAgICAoIHZlbG9jaXR5QiwgdmVsb2NpdHlCLCBmb3JjZSApXG5cblx0XHQvLyBGcmljdGlvbiAvIHNwcmluZyBkYW1wZW5pbmdcblx0XHRWZWMyLnNjYWxlICAgICggdmVsb2NpdHlBLCB2ZWxvY2l0eUEsIGNvbmZpZy5zcHJpbmdEYW1wZXIgKVxuXHRcdFZlYzIuc2NhbGUgICAgKCB2ZWxvY2l0eUIsIHZlbG9jaXR5QiwgY29uZmlnLnNwcmluZ0RhbXBlciApXG5cblx0XHQvLyBBcHBseSB0aGUgdmVsb2NpdHlcblx0XHRWZWMyLmFkZCAgICAgICggcG9pbnRBLCBwb2ludEEsIHZlbG9jaXR5QSApXG5cdFx0VmVjMi5hZGQgICAgICAoIHBvaW50QiwgcG9pbnRCLCB2ZWxvY2l0eUIgKVxuXHR9XG59KSgpXG5cbmZ1bmN0aW9uIF9wb3N0UmVzdWx0cyggdHJhbnNmZXJhYmxlcyApIHtcblx0XG5cdF9wYWNrVmVjdG9ycyggY3VycmVudC5wb2ludHMsICAgICAgdHJhbnNmZXJhYmxlcy5wb2ludHMgKVxuXHRcblx0Ly8gUG9zdCBtZXNzYWdlIGFuZCBzcGVjaWZ5IHRyYW5zZmVyYWJsZSBidWZmZXJzXG5cdHBvc3RNZXNzYWdlKCB0cmFuc2ZlcmFibGVzLCBbXG5cdFx0dHJhbnNmZXJhYmxlcy5wb2ludHMuYnVmZmVyLFxuXHRcdHRyYW5zZmVyYWJsZXMudHJpYW5nbGVJbmRpY2VzLmJ1ZmZlcixcblx0XSlcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZSgpIHtcblx0XG5cdHZhciBjb3VudCA9IGN1cnJlbnQudHJhbnNmZXJhYmxlcy50cmlhbmdsZXNDb3VudFxuXHR2YXIgaW5kaWNlcyA9IGN1cnJlbnQudHJhbnNmZXJhYmxlcy50cmlhbmdsZUluZGljZXNcblx0dmFyIHBvaW50ID0gW11cblx0XG5cdGZvciggdmFyIGk9MDsgaSA8IGNvdW50OyBpKysgKSB7XG5cdFx0XG5cdFx0dmFyIG9mZnNldCA9IGkgKiAzXG5cdFx0XG5cdFx0Zm9yKCB2YXIgaj0wOyBqIDwgMzsgaisrICkge1xuXHRcdFx0XG5cdFx0XHR2YXIgaW5kZXhBID0gaW5kaWNlc1sgb2Zmc2V0ICsgaiBdXG5cdFx0XHR2YXIgaW5kZXhCID0gaW5kaWNlc1sgb2Zmc2V0ICsgKGorMSklMyBdXG5cdFx0XHRcblx0XHRcdHZhciBwb2ludEEgPSBjdXJyZW50LnBvaW50c1sgaW5kZXhBIF1cblx0XHRcdHZhciBwb2ludEIgPSBjdXJyZW50LnBvaW50c1sgaW5kZXhCIF1cblx0XHRcdHZhciB2ZWxvY2l0eUEgPSBjdXJyZW50LnZlbG9jaXRpZXNbIGluZGV4QSBdXG5cdFx0XHR2YXIgdmVsb2NpdHlCID0gY3VycmVudC52ZWxvY2l0aWVzWyBpbmRleEIgXVxuXHRcdFx0XG5cdFx0XHRfdXBkYXRlU3ByaW5nKCBjdXJyZW50LmNvbmZpZywgcG9pbnRBLCBwb2ludEIsIHZlbG9jaXR5QSwgdmVsb2NpdHlCIClcblx0XHR9XG5cdH1cbn1cblxub25tZXNzYWdlID0gZnVuY3Rpb24oZSkge1xuXHRcblx0aWYoIGUuZGF0YS5jb25maWcgKSB7XG5cdFx0Y3VycmVudC5jb25maWcgPSBlLmRhdGEuY29uZmlnXG5cdFx0cmV0dXJuXG5cdH1cblx0XG5cdGlmKCBlLmRhdGEubmVlZHNVcGRhdGUgKSB7XG5cdFx0X3VwZGF0ZURhdGEoIGUuZGF0YSApXG5cdH1cblx0XG5cdGN1cnJlbnQudHJhbnNmZXJhYmxlcy5wb2ludHMgICAgICAgICAgPSBlLmRhdGEucG9pbnRzXG5cdGN1cnJlbnQudHJhbnNmZXJhYmxlcy52ZWxvY2l0aWVzICAgICAgPSBlLmRhdGEudmVsb2NpdGllc1xuXHRjdXJyZW50LnRyYW5zZmVyYWJsZXMudHJpYW5nbGVJbmRpY2VzID0gZS5kYXRhLnRyaWFuZ2xlSW5kaWNlc1xuXHRjdXJyZW50LnRyYW5zZmVyYWJsZXMucG9pbnRzQ291bnQgICAgID0gZS5kYXRhLnBvaW50c0NvdW50XG5cdGN1cnJlbnQudHJhbnNmZXJhYmxlcy50cmlhbmdsZXNDb3VudCAgPSBlLmRhdGEudHJpYW5nbGVzQ291bnRcblxuXHRfdXBkYXRlKClcblx0XG5cdF9wb3N0UmVzdWx0cyggY3VycmVudC50cmFuc2ZlcmFibGVzIClcbn0iXX0=
