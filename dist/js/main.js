/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (() => {

eval("function drawSwissFlag() {\n  var swissFlag = document.getElementById('Swiss-flag');\n  var ctxSf = swissFlag.getContext('2d');\n  var rectangle = {\n    width: 250,\n    height: 50\n  };\n  ctxSf.fillStyle = 'red';\n  ctxSf.fillRect(0, 0, swissFlag.width, swissFlag.height);\n  ctxSf.fillStyle = 'white';\n  ctxSf.fillRect(swissFlag.width / 2 - rectangle.height / 2, swissFlag.height / 2 - rectangle.width / 2, rectangle.height, rectangle.width);\n  ctxSf.fillRect(swissFlag.width / 2 - rectangle.width / 2, swissFlag.height / 2 - rectangle.height / 2, rectangle.width, rectangle.height);\n}\n\n;\ndrawSwissFlag();\nvar fondHome = document.getElementById('home');\nvar ctxHome = fondHome.getContext('2d');\nctxHome.fillStyle = 'white';\nctxHome.fillRect(0, 0, fondHome.width, fondHome.height);\nctxHome.moveTo(40, 80);\nctxHome.lineTo(80, 40);\nctxHome.lineTo(120, 80);\nctxHome.moveTo(60, 80);\nctxHome.lineTo(60, 120);\nctxHome.lineTo(100, 120);\nctxHome.lineTo(100, 80);\nctxHome.rect(75, 100, 10, 20);\nctxHome.strokeStyle = \"red\";\nctxHome.lineWidth = 3;\nctxHome.stroke();\nctxHome.beginPath();\nctxHome.strokeStyle = \"LimeGreen\";\nctxHome.moveTo(20, 120);\nctxHome.arcTo(20, 30, 160, 120, 20);\nctxHome.stroke();\nctxHome.fillStyle = \"yellow\";\nctxHome.strokeStyle = \"orange\";\nctxHome.beginPath();\nctxHome.arc(150, 40, 30, 0, Math.PI * 2, true);\nctxHome.fill();\nctxHome.stroke();\nctxHome.strokeStyle = \"turquoise\";\nctxHome.beginPath();\nctxHome.moveTo(20, 150);\nctxHome.bezierCurveTo(80, 130, 80, 180, 140, 150);\nctxHome.moveTo(20, 170);\nctxHome.bezierCurveTo(80, 150, 80, 200, 140, 170);\nctxHome.stroke();\nctxHome.beginPath();\nctxHome.strokeStyle = \"orange\";\nctxHome.moveTo(130, 40);\nctxHome.quadraticCurveTo(150, 70, 170, 40);\nctxHome.stroke();\nvar fondMaster = document.getElementById('master-card');\nvar ctxMc = fondMaster.getContext('2d');\nctxMc.fillStyle = 'black';\nctxMc.fillRect(0, 0, fondMaster.width, fondMaster.height);\nctxMc.beginPath();\nctxMc.fillStyle = \"red\";\nctxMc.arc(fondMaster.width * 1.5 / 4, fondMaster.height / 2 - 35, fondMaster.height / 3, 0, Math.PI * 2);\nctxMc.fillStyle = \"yellow\";\nctxMc.arc(fondMaster.width * 2.5 / 4, fondMaster.height / 2 - 35, fondMaster.height / 3, 0, Math.PI * 2);\nctxMc.closePath();\nctxMc.fill();\nctxMc.stroke();\nctxMc.font = \"50px Century\";\nctxMc.fillStyle = \"white\";\nctxMc.textAlign = \"center\";\nctxMc.fillText(\"mastercard\", fondMaster.width / 2, fondMaster.height * 7 / 8);\nvar fondTriangle = document.getElementById('triangle');\nvar ctxTriangle = fondTriangle.getContext('2d');\nctxTriangle.fillStyle = 'grey';\nctxTriangle.fillRect(0, 0, fondTriangle.width, fondTriangle.height);\nctxTriangle.fillStyle = \"black\";\nctxTriangle.beginPath();\nctxTriangle.moveTo(fondTriangle.width / 2, fondTriangle.height / 5);\nctxTriangle.lineTo(fondTriangle.width / 2 - 100, fondTriangle.height / 1.2);\nctxTriangle.lineTo(fondTriangle.width / 2 + 100, fondTriangle.height / 1.2);\nctxMc.fillStyle = \"white\";\nctxMc.arc(fondTriangle.width / 4, fondTriangle.height / 2, fondTriangle.height / 3, 0, Math.PI * 2);\nctxTriangle.closePath();\nctxTriangle.fill();\nctxTriangle.stroke();\nctxMc.beginPath();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBWjtBQUNBVSxLQUFLLENBQUNULFNBQU4iLCJuYW1lcyI6WyJkcmF3U3dpc3NGbGFnIiwic3dpc3NGbGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eFNmIiwiZ2V0Q29udGV4dCIsInJlY3RhbmdsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb25kSG9tZSIsImN0eEhvbWUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJyZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJiZWdpblBhdGgiLCJhcmNUbyIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJiZXppZXJDdXJ2ZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImZvbmRNYXN0ZXIiLCJjdHhNYyIsImNsb3NlUGF0aCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImZvbmRUcmlhbmdsZSIsImN0eFRyaWFuZ2xlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5aW5nLXdpdGgtc2hhcGVzLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0RyYXBlYXUgU3Vpc3NlXHJcbmZ1bmN0aW9uIGRyYXdTd2lzc0ZsYWcoKXtcclxuICAgIHR5cGUgcmVjdGFuZ2xlVHlwZSA9IHtcclxuICAgICAgICB3aWR0aDpudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0Om51bWJlcixcclxuICAgIH1cclxuICAgIGNvbnN0IHN3aXNzRmxhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTd2lzcy1mbGFnJyk7XHJcbiAgICBsZXQgY3R4U2YgPSBzd2lzc0ZsYWcuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnN0IHJlY3RhbmdsZSA6IHJlY3RhbmdsZVR5cGUgPXtcclxuICAgICAgICB3aWR0aDoyNTAsXHJcbiAgICAgICAgaGVpZ2h0OjUwLFxyXG4gICAgfVxyXG4gICAgY3R4U2YuZmlsbFN0eWxlPSAncmVkJztcclxuICAgIGN0eFNmLmZpbGxSZWN0KDAsMCxzd2lzc0ZsYWcud2lkdGgsc3dpc3NGbGFnLmhlaWdodCk7XHJcblxyXG4gICAgY3R4U2YuZmlsbFN0eWxlPSAnd2hpdGUnO1xyXG4gICAgY3R4U2YuZmlsbFJlY3QoKHN3aXNzRmxhZy53aWR0aC8yKS0ocmVjdGFuZ2xlLmhlaWdodC8yKSwoc3dpc3NGbGFnLmhlaWdodC8yKS0ocmVjdGFuZ2xlLndpZHRoLzIpLCByZWN0YW5nbGUuaGVpZ2h0LCByZWN0YW5nbGUud2lkdGgpO1xyXG4gICAgY3R4U2YuZmlsbFJlY3QoKHN3aXNzRmxhZy53aWR0aC8yKS0ocmVjdGFuZ2xlLndpZHRoLzIpLChzd2lzc0ZsYWcuaGVpZ2h0LzIpLShyZWN0YW5nbGUuaGVpZ2h0LzIpLCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQ7XHJcblxyXG59O1xyXG5kcmF3U3dpc3NGbGFnKCk7XHJcblxyXG4vL0hvbWVcclxuY29uc3QgZm9uZEhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xyXG5sZXQgY3R4SG9tZSA9IGZvbmRIb21lLmdldENvbnRleHQoJzJkJyk7XHJcbmN0eEhvbWUuZmlsbFN0eWxlPSd3aGl0ZSc7XHJcbmN0eEhvbWUuZmlsbFJlY3QoMCwwLGZvbmRIb21lLndpZHRoLGZvbmRIb21lLmhlaWdodCk7XHJcbi8vIFRvaXRcclxuY3R4SG9tZS5tb3ZlVG8oNDAsIDgwKTtcclxuY3R4SG9tZS5saW5lVG8oODAsIDQwKTtcclxuY3R4SG9tZS5saW5lVG8oMTIwLCA4MCk7XHJcbi8vIE11cnNcclxuY3R4SG9tZS5tb3ZlVG8oNjAsIDgwKTtcclxuY3R4SG9tZS5saW5lVG8oNjAsIDEyMCk7XHJcbmN0eEhvbWUubGluZVRvKDEwMCwgMTIwKTtcclxuY3R4SG9tZS5saW5lVG8oMTAwLCA4MCk7XHJcbmN0eEhvbWUucmVjdCg3NSwxMDAsMTAsMjApO1xyXG5jdHhIb21lLnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcclxuY3R4SG9tZS5saW5lV2lkdGggPSAzO1xyXG5jdHhIb21lLnN0cm9rZSgpO1xyXG4vLyBQYWxtaWVyXHJcbmN0eEhvbWUuYmVnaW5QYXRoKCk7XHJcbmN0eEhvbWUuc3Ryb2tlU3R5bGUgPSBcIkxpbWVHcmVlblwiO1xyXG5jdHhIb21lLm1vdmVUbygyMCwxMjApO1xyXG5jdHhIb21lLmFyY1RvKDIwLDMwLDE2MCwxMjAsMjApO1xyXG5jdHhIb21lLnN0cm9rZSgpO1xyXG4vLyBTb2xlaWxcclxuY3R4SG9tZS5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xyXG5jdHhIb21lLnN0cm9rZVN0eWxlID0gXCJvcmFuZ2VcIjtcclxuY3R4SG9tZS5iZWdpblBhdGgoKTtcclxuY3R4SG9tZS5hcmMoMTUwLDQwLDMwLDAsTWF0aC5QSSoyLHRydWUpO1xyXG5jdHhIb21lLmZpbGwoKTtcclxuY3R4SG9tZS5zdHJva2UoKTtcclxuLy8gVmFndWVsZXR0ZXNcclxuY3R4SG9tZS5zdHJva2VTdHlsZSA9IFwidHVycXVvaXNlXCI7XHJcbmN0eEhvbWUuYmVnaW5QYXRoKCk7XHJcbmN0eEhvbWUubW92ZVRvKDIwLCAxNTApO1xyXG5jdHhIb21lLmJlemllckN1cnZlVG8oODAsMTMwLDgwLDE4MCwxNDAsMTUwKTtcclxuY3R4SG9tZS5tb3ZlVG8oMjAsIDE3MCk7XHJcbmN0eEhvbWUuYmV6aWVyQ3VydmVUbyg4MCwxNTAsODAsMjAwLDE0MCwxNzApO1xyXG5jdHhIb21lLnN0cm9rZSgpO1xyXG4vLyBTb3VyaXJlXHJcbmN0eEhvbWUuYmVnaW5QYXRoKCk7XHJcbmN0eEhvbWUuc3Ryb2tlU3R5bGUgPSBcIm9yYW5nZVwiO1xyXG5jdHhIb21lLm1vdmVUbygxMzAsIDQwKTtcclxuY3R4SG9tZS5xdWFkcmF0aWNDdXJ2ZVRvKDE1MCw3MCwxNzAsNDApO1xyXG5jdHhIb21lLnN0cm9rZSgpO1xyXG4vL01hc3RlcmNhcmRcclxuXHJcbmNvbnN0IGZvbmRNYXN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGVyLWNhcmQnKTtcclxubGV0IGN0eE1jID0gZm9uZE1hc3Rlci5nZXRDb250ZXh0KCcyZCcpO1xyXG5jdHhNYy5maWxsU3R5bGU9J2JsYWNrJztcclxuY3R4TWMuZmlsbFJlY3QoMCwwLGZvbmRNYXN0ZXIud2lkdGgsZm9uZE1hc3Rlci5oZWlnaHQpO1xyXG4vL0RvdWJsZSBjZXJjbGVcclxuY3R4TWMuYmVnaW5QYXRoKCk7XHJcbmN0eE1jLmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbmN0eE1jLmFyYygoZm9uZE1hc3Rlci53aWR0aCoxLjUvNCksKGZvbmRNYXN0ZXIuaGVpZ2h0LzIpLTM1LChmb25kTWFzdGVyLmhlaWdodC8zKSwwLE1hdGguUEkqMik7XHJcbmN0eE1jLmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XHJcbmN0eE1jLmFyYygoZm9uZE1hc3Rlci53aWR0aCoyLjUvNCksKGZvbmRNYXN0ZXIuaGVpZ2h0LzIpLTM1LChmb25kTWFzdGVyLmhlaWdodC8zKSwwLE1hdGguUEkqMik7XHJcbmN0eE1jLmNsb3NlUGF0aCgpO1xyXG5jdHhNYy5maWxsKCk7XHJcbmN0eE1jLnN0cm9rZSgpO1xyXG4vL1RleHRlXHJcbmN0eE1jLmZvbnQgPSBcIjUwcHggQ2VudHVyeVwiO1xyXG5jdHhNYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbmN0eE1jLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbmN0eE1jLmZpbGxUZXh0KFwibWFzdGVyY2FyZFwiLCBmb25kTWFzdGVyLndpZHRoLzIsIGZvbmRNYXN0ZXIuaGVpZ2h0KjcvOCk7XHJcblxyXG4vL1RyaWFuZ2xlXHJcblxyXG5jb25zdCBmb25kVHJpYW5nbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpYW5nbGUnKTtcclxubGV0IGN0eFRyaWFuZ2xlID0gZm9uZFRyaWFuZ2xlLmdldENvbnRleHQoJzJkJyk7XHJcbmN0eFRyaWFuZ2xlLmZpbGxTdHlsZT0nZ3JleSc7XHJcbmN0eFRyaWFuZ2xlLmZpbGxSZWN0KDAsMCxmb25kVHJpYW5nbGUud2lkdGgsZm9uZFRyaWFuZ2xlLmhlaWdodCk7XHJcbi8vVHJpYW5nbGVcclxuY3R4VHJpYW5nbGUuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG5jdHhUcmlhbmdsZS5iZWdpblBhdGgoKTtcclxuY3R4VHJpYW5nbGUubW92ZVRvKGZvbmRUcmlhbmdsZS53aWR0aC8yLGZvbmRUcmlhbmdsZS5oZWlnaHQvNSk7XHJcbmN0eFRyaWFuZ2xlLmxpbmVUbygoZm9uZFRyaWFuZ2xlLndpZHRoLzIpLTEwMCxmb25kVHJpYW5nbGUuaGVpZ2h0LzEuMik7XHJcbmN0eFRyaWFuZ2xlLmxpbmVUbygoZm9uZFRyaWFuZ2xlLndpZHRoLzIpKzEwMCxmb25kVHJpYW5nbGUuaGVpZ2h0LzEuMik7XHJcbmN0eE1jLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4TWMuYXJjKChmb25kVHJpYW5nbGUud2lkdGgvNCksKGZvbmRUcmlhbmdsZS5oZWlnaHQvMiksKGZvbmRUcmlhbmdsZS5oZWlnaHQvMyksMCxNYXRoLlBJKjIpO1xyXG5jdHhUcmlhbmdsZS5jbG9zZVBhdGgoKTtcclxuY3R4VHJpYW5nbGUuZmlsbCgpO1xyXG5jdHhUcmlhbmdsZS5zdHJva2UoKTtcclxuY3R4TWMuYmVnaW5QYXRoKCk7XHJcbiJdfQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWluZy13aXRoLXNoYXBlcy8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplaying_with_shapes"] = self["webpackChunkplaying_with_shapes"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;