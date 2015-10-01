(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function add(d,e,n){return d[0]=e[0]+n[0],d[1]=e[1]+n[1],d}module.exports=add;

},{}],2:[function(require,module,exports){
function clone(e){var n=new Float32Array(2);return n[0]=e[0],n[1]=e[1],n}module.exports=clone;

},{}],3:[function(require,module,exports){
function copy(o,c){return o[0]=c[0],o[1]=c[1],o}module.exports=copy;

},{}],4:[function(require,module,exports){
function create(){var e=new Float32Array(2);return e[0]=0,e[1]=0,e}module.exports=create;

},{}],5:[function(require,module,exports){
function cross(r,o,s){var c=o[0]*s[1]-o[1]*s[0];return r[0]=r[1]=0,r[2]=c,r}module.exports=cross;

},{}],6:[function(require,module,exports){
function distance(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}module.exports=distance;

},{}],7:[function(require,module,exports){
function divide(d,e,i){return d[0]=e[0]/i[0],d[1]=e[1]/i[1],d}module.exports=divide;

},{}],8:[function(require,module,exports){
function dot(o,t){return o[0]*t[0]+o[1]*t[1]}module.exports=dot;

},{}],9:[function(require,module,exports){
function forEach(e,c,r,v,t,a){var n,o;for(c||(c=2),r||(r=0),o=v?Math.min(v*c+r,e.length):e.length,n=r;o>n;n+=c)vec[0]=e[n],vec[1]=e[n+1],t(vec,vec,a),e[n]=vec[0],e[n+1]=vec[1];return e}module.exports=forEach;var vec=require("./create")();

},{"./create":4}],10:[function(require,module,exports){
function fromValues(r,e){var o=new Float32Array(2);return o[0]=r,o[1]=e,o}module.exports=fromValues;

},{}],11:[function(require,module,exports){
module.exports={create:require("./create"),clone:require("./clone"),fromValues:require("./fromValues"),copy:require("./copy"),set:require("./set"),add:require("./add"),subtract:require("./subtract"),multiply:require("./multiply"),divide:require("./divide"),min:require("./min"),max:require("./max"),scale:require("./scale"),scaleAndAdd:require("./scaleAndAdd"),distance:require("./distance"),squaredDistance:require("./squaredDistance"),length:require("./length"),squaredLength:require("./squaredLength"),negate:require("./negate"),normalize:require("./normalize"),dot:require("./dot"),cross:require("./cross"),lerp:require("./lerp"),random:require("./random"),transformMat2:require("./transformMat2"),transformMat2d:require("./transformMat2d"),transformMat3:require("./transformMat3"),transformMat4:require("./transformMat4"),forEach:require("./forEach")};

},{"./add":1,"./clone":2,"./copy":3,"./create":4,"./cross":5,"./distance":6,"./divide":7,"./dot":8,"./forEach":9,"./fromValues":10,"./length":12,"./lerp":13,"./max":14,"./min":15,"./multiply":16,"./negate":17,"./normalize":18,"./random":19,"./scale":20,"./scaleAndAdd":21,"./set":22,"./squaredDistance":23,"./squaredLength":24,"./subtract":25,"./transformMat2":26,"./transformMat2d":27,"./transformMat3":28,"./transformMat4":29}],12:[function(require,module,exports){
function length(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n)}module.exports=length;

},{}],13:[function(require,module,exports){
function lerp(r,e,l,n){var o=e[0],p=e[1];return r[0]=o+n*(l[0]-o),r[1]=p+n*(l[1]-p),r}module.exports=lerp;

},{}],14:[function(require,module,exports){
function max(a,m,t){return a[0]=Math.max(m[0],t[0]),a[1]=Math.max(m[1],t[1]),a}module.exports=max;

},{}],15:[function(require,module,exports){
function min(n,i,m){return n[0]=Math.min(i[0],m[0]),n[1]=Math.min(i[1],m[1]),n}module.exports=min;

},{}],16:[function(require,module,exports){
function multiply(l,t,u){return l[0]=t[0]*u[0],l[1]=t[1]*u[1],l}module.exports=multiply;

},{}],17:[function(require,module,exports){
function negate(e,n){return e[0]=-n[0],e[1]=-n[1],e}module.exports=negate;

},{}],18:[function(require,module,exports){
function normalize(r,e){var n=e[0],o=e[1],t=n*n+o*o;return t>0&&(t=1/Math.sqrt(t),r[0]=e[0]*t,r[1]=e[1]*t),r}module.exports=normalize;

},{}],19:[function(require,module,exports){
function random(a,n){n=n||1;var o=2*Math.random()*Math.PI;return a[0]=Math.cos(o)*n,a[1]=Math.sin(o)*n,a}module.exports=random;

},{}],20:[function(require,module,exports){
function scale(e,c,l){return e[0]=c[0]*l,e[1]=c[1]*l,e}module.exports=scale;

},{}],21:[function(require,module,exports){
function scaleAndAdd(d,e,n,A){return d[0]=e[0]+n[0]*A,d[1]=e[1]+n[1]*A,d}module.exports=scaleAndAdd;

},{}],22:[function(require,module,exports){
function set(e,t,n){return e[0]=t,e[1]=n,e}module.exports=set;

},{}],23:[function(require,module,exports){
function squaredDistance(e,r){var a=r[0]-e[0],n=r[1]-e[1];return a*a+n*n}module.exports=squaredDistance;

},{}],24:[function(require,module,exports){
function squaredLength(e){var r=e[0],n=e[1];return r*r+n*n}module.exports=squaredLength;

},{}],25:[function(require,module,exports){
function subtract(t,r,u){return t[0]=r[0]-u[0],t[1]=r[1]-u[1],t}module.exports=subtract;

},{}],26:[function(require,module,exports){
function transformMat2(r,t,a){var n=t[0],o=t[1];return r[0]=a[0]*n+a[2]*o,r[1]=a[1]*n+a[3]*o,r}module.exports=transformMat2;

},{}],27:[function(require,module,exports){
function transformMat2d(r,t,a){var n=t[0],o=t[1];return r[0]=a[0]*n+a[2]*o+a[4],r[1]=a[1]*n+a[3]*o+a[5],r}module.exports=transformMat2d;

},{}],28:[function(require,module,exports){
function transformMat3(r,t,a){var n=t[0],o=t[1];return r[0]=a[0]*n+a[3]*o+a[6],r[1]=a[1]*n+a[4]*o+a[7],r}module.exports=transformMat3;

},{}],29:[function(require,module,exports){
function transformMat4(r,t,a){var n=t[0],o=t[1];return r[0]=a[0]*n+a[4]*o+a[12],r[1]=a[1]*n+a[5]*o+a[13],r}module.exports=transformMat4;

},{}],30:[function(require,module,exports){
"use strict";function _sizeArrays(t,n){var e=n-t.length;if(e>0)for(var r=0;e>r;r++)t.push([0,0]);else 0>e&&t.splice(n)}function _unpackVectors(t,n,e){for(var r=0;e>r;r++)t[r][0]=n[2*r+0],t[r][1]=n[2*r+1]}function _unpackIndices(t,n,e,r){for(var a=0;r>a;a++)t[a][0]=n[e[3*a+0]],t[a][1]=n[e[3*a+1]],t[a][2]=n[e[3*a+2]]}function _packVectors(t,n){for(var e=0;e<t.length;e++)n[2*e+0]=t[e][0],n[2*e+1]=t[e][1]}function _updateData(t){_sizeArrays(current.points,t.pointsCount),_sizeArrays(current.velocities,t.pointsCount),_sizeArrays(current.triangles,t.trianglesCount),_unpackVectors(current.points,t.points,t.pointsCount),_unpackIndices(current.triangles,current.points,t.triangleIndices,t.trianglesCount)}function _postResults(t){_packVectors(current.points,t.points),postMessage(t,[t.points.buffer,t.triangleIndices.buffer])}function _update(){for(var t=current.transferables.trianglesCount,n=current.transferables.triangleIndices,e=0;t>e;e++)for(var r=3*e,a=0;3>a;a++){var s=n[r+a],i=n[r+(a+1)%3],c=current.points[s],o=current.points[i],u=current.velocities[s],p=current.velocities[i];_updateSpring(current.config,c,o,u,p)}}var Vec2=require("gl-vec2"),current={config:{},isInit:!1,triangles:[],points:[],velocities:[],transferables:{points:null,triangleIndices:null,pointsCount:0,trianglesCount:0}},_updateSpring=function(){var t=[];return function(n,e,r,a,s){var i=Vec2.distance(e,r),c=i;c=Math.min(n.restingLength*n.maxSeparation,c),c=Math.max(n.restingLength*n.minSeparation,c);var o=(c-n.restingLength)*n.springStrength;Vec2.copy(t,e),Vec2.subtract(t,t,r),Vec2.scale(t,t,o/i),Vec2.subtract(a,a,t),Vec2.add(s,s,t),Vec2.scale(a,a,n.springDamper),Vec2.scale(s,s,n.springDamper),Vec2.add(e,e,a),Vec2.add(r,r,s)}}();onmessage=function(t){return t.data.config?void(current.config=t.data.config):(t.data.needsUpdate&&_updateData(t.data),current.transferables.points=t.data.points,current.transferables.triangleIndices=t.data.triangleIndices,current.transferables.pointsCount=t.data.pointsCount,current.transferables.trianglesCount=t.data.trianglesCount,_update(),void _postResults(current.transferables))};

},{"gl-vec2":11}]},{},[30])
//# sourceMappingURL=worker.bundle.js.map
