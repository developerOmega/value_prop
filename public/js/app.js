/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/authenticate_execute.js":
/*!*******************************************!*\
  !*** ./assets/js/authenticate_execute.js ***!
  \*******************************************/
/*! exports provided: LoginAuthExecute, LogoutAuthExecute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginAuthExecute\", function() { return LoginAuthExecute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoutAuthExecute\", function() { return LogoutAuthExecute; });\n/* harmony import */ var _execute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./execute */ \"./assets/js/execute.js\");\n/* harmony import */ var _components_authenticate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authenticate */ \"./assets/js/components/authenticate.js\");\n\n\n\nclass AuthExecute extends _execute__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pathname) {\n    super(pathname);\n    this.auth = new _components_authenticate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n}\n\nclass LoginAuthExecute extends AuthExecute {\n  constructor(pathname) {\n    super(pathname);\n  }\n\n  execute() {\n    const self = this;\n    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {\n      e.preventDefault();\n      self.auth.login(this);\n    });\n  }\n\n}\n\nclass LogoutAuthExecute extends AuthExecute {\n  constructor(pathname) {\n    super(pathname);\n  }\n\n  execute() {\n    const self = this;\n    document.getElementById('logout_user').addEventListener('submit', function (e) {\n      e.preventDefault();\n      self.auth.logout(this);\n    });\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./assets/js/authenticate_execute.js?");

/***/ }),

/***/ "./assets/js/belongings_execute.js":
/*!*****************************************!*\
  !*** ./assets/js/belongings_execute.js ***!
  \*****************************************/
/*! exports provided: BelongingGetExecute, BelongingPostExecute, BelongingUpdateExecute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BelongingGetExecute\", function() { return BelongingGetExecute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BelongingPostExecute\", function() { return BelongingPostExecute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BelongingUpdateExecute\", function() { return BelongingUpdateExecute; });\n/* harmony import */ var _execute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./execute */ \"./assets/js/execute.js\");\n/* harmony import */ var _components_belonging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/belonging */ \"./assets/js/components/belonging.js\");\n\n\n\nclass BelongingExecute extends _execute__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pathname) {\n    super(pathname);\n    this.belonging = new _components_belonging__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#table_beloning');\n  }\n\n}\n\nclass BelongingGetExecute extends BelongingExecute {\n  constructor(pathname) {\n    super(pathname);\n  }\n\n  execute() {\n    this.belonging.get();\n  }\n\n}\n\nclass BelongingPostExecute extends BelongingExecute {\n  constructor(pathname) {\n    super(pathname);\n  }\n\n  execute() {\n    const self = this;\n    document.getElementById('form_belonging').addEventListener('submit', function (e) {\n      e.preventDefault();\n      self.belonging.post({\n        name: this.name.value,\n        value: this.value.value,\n        quantity: this.quantity.value,\n        active: this.active.checked,\n        value_active: this.value_active.value\n      });\n      self.belonging.get();\n    });\n  }\n\n}\n\nclass BelongingUpdateExecute extends BelongingExecute {\n  constructor(pathname) {\n    super(pathname);\n  }\n\n  execute() {\n    const self = this;\n    document.getElementById('edit_belonging').addEventListener('submit', function (e) {\n      e.preventDefault();\n      self.belonging.put(this.id.value, {\n        name: this.name.value,\n        value: this.value.value,\n        quantity: this.quantity.value,\n        active: this.active.checked,\n        value_active: this.value_active.value\n      }); // this.submit();\n\n      location.replace('/belongings');\n    });\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./assets/js/belongings_execute.js?");

/***/ }),

/***/ "./assets/js/components/authenticate.js":
/*!**********************************************!*\
  !*** ./assets/js/components/authenticate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./assets/js/components/data.js\");\n\nclass Auth extends _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(url) {\n    super(url);\n  }\n\n  login(self) {\n    let url = `${this.url}/api/v1/login`;\n    let params = {\n      method: 'POST',\n      headers: {\n        \"Content-type\": \"application/x-www-form-urlencoded; charset=UTF-8\"\n      },\n      body: `email=${self.email.value}&password=${self.password.value}`\n    };\n    fetch(url, params).then(resp => resp.json()).then(data => {\n      console.log(data);\n      localStorage.setItem('tokenLogin', JSON.stringify(data.token));\n      self.submit();\n    }).catch(err => console.log(err));\n  }\n\n  logout(self) {\n    if (this.token == '') {\n      return self.submit();\n    }\n\n    localStorage.removeItem('tokenLogin');\n    return self.submit();\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/authenticate.js?");

/***/ }),

/***/ "./assets/js/components/belonging.js":
/*!*******************************************!*\
  !*** ./assets/js/components/belonging.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Belonging; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./assets/js/components/data.js\");\n\nclass Belonging extends _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(selector, url) {\n    super(url);\n    this.selector = selector;\n  }\n\n  get() {\n    let content = document.querySelector(this.selector);\n    let urlData = `${this.url}/api/v1/belongings`;\n    let h = new Headers();\n    h.append('Authorization', this.token);\n    let req = new Request(urlData, {\n      method: 'GET',\n      mode: 'cors',\n      headers: h\n    });\n    fetch(req).then(resp => resp.json()).then(result => {\n      content.innerHTML = '<tr><th>Nombre</th><th>Valor</th><th>Cantidad</th><th>Activo</th><th>Valor por mes</th><th>Editar</th><th>Eliminar</th></tr>';\n      result.belongings.forEach(belonging => {\n        let tr = document.createElement('tr');\n        let form = document.createElement('form');\n        let tdForm = document.createElement('td');\n        form.setAttribute('action', `/api/v1/belongings/${belonging._id}?_method=DELETE`);\n        form.setAttribute('method', 'POST');\n        form.innerHTML = `<input type=\"hidden\" name=\"id\" value=${belonging._id}><input type=\"submit\" value=\"Eliminar\">`;\n        tdForm.appendChild(form);\n        tr.innerHTML += `<td>${belonging.name}</td>`;\n        tr.innerHTML += `<td>${belonging.value}</td>`;\n        tr.innerHTML += `<td>${belonging.quantity}</td>`;\n        tr.innerHTML += `<td>${belonging.active == true ? 'Si' : 'No'}</td>`;\n        tr.innerHTML += `<td>${belonging.value_active}</td>`;\n        tr.innerHTML += `<td> <a href=\"/belongings/${belonging._id}/edit\"> Edtiar </a> </td>`;\n        tr.appendChild(tdForm);\n        content.appendChild(tr);\n      });\n      let tableBeloning = document.getElementById('table_beloning');\n      let self = this;\n\n      for (let i = 1; i < tableBeloning.children.length; i++) {\n        tableBeloning.children[i].children[6].children[0].addEventListener('click', function (e) {\n          e.preventDefault();\n          self.delete(this.id.value);\n          self.get();\n        });\n      }\n    });\n  }\n\n  post(value) {\n    let urlData = `${this.url}/api/v1/belongings`;\n    let params = {\n      method: \"POST\",\n      headers: {\n        \"Content-type\": \"application/x-www-form-urlencoded; charset=UTF-8\",\n        \"Authorization\": `${this.token}`\n      },\n      body: `name=${value.name}&value=${value.value}&quantity=${value.quantity}&active=${value.active}&value_active=${value.value_active}`\n    };\n    fetch(urlData, params).then(resp => resp.json()).then(data => {\n      console.log(data);\n    }).catch(err => {\n      console.log(err);\n    });\n  }\n\n  put(belonging_id = '', value) {\n    let urlData = `${this.url}/api/v1/belongings/${belonging_id}`;\n    let params = {\n      method: 'PUT',\n      headers: {\n        \"Content-type\": \"application/x-www-form-urlencoded; charset=UTF-8\",\n        \"Authorization\": `${this.token}`\n      },\n      body: `name=${value.name}&value=${value.value}&quantity=${value.quantity}&active=${value.active}&value_active=${value.value_active}`\n    };\n    fetch(urlData, params).then(resp => resp.json()).then(data => {\n      console.log(data);\n    }).catch(err => console.log(err));\n  }\n\n  delete(belonging_id = '') {\n    let urlData = `${this.url}/api/v1/belongings/${belonging_id}`;\n    let h = new Headers();\n    h.append('Authorization', `${this.token}`);\n    let params = {\n      method: 'DELETE',\n      headers: h\n    };\n    fetch(urlData, params).then(resp => resp.json()).then(data => {\n      console.log(data);\n    }).catch(err => {\n      console.error(err);\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/belonging.js?");

/***/ }),

/***/ "./assets/js/components/data.js":
/*!**************************************!*\
  !*** ./assets/js/components/data.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Data; });\nclass Data {\n  constructor(url) {\n    this.url = 'http://localhost:3000';\n    this.token = !localStorage.getItem('tokenLogin') || localStorage.getItem('tokenLogin') == undefined ? '' : JSON.parse(localStorage.getItem('tokenLogin'));\n  }\n\n  get() {\n    return this.url;\n  }\n\n  post() {\n    return this.url;\n  }\n\n  put() {\n    return this.url;\n  }\n\n  delete() {\n    return this.url;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/data.js?");

/***/ }),

/***/ "./assets/js/execute.js":
/*!******************************!*\
  !*** ./assets/js/execute.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Execute; });\nclass Execute {\n  constructor(pathname) {\n    this.pathname = pathname;\n  }\n\n  execute() {\n    return this.pathname;\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/execute.js?");

/***/ }),

/***/ "./assets/js/execute_all.js":
/*!**********************************!*\
  !*** ./assets/js/execute_all.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExecuteAll; });\nclass ExecuteAll {\n  constructor(content) {\n    this.content = content;\n  }\n\n  index() {\n    this.content.forEach(data => {\n      if (data.pathname == window.location.pathname) {\n        data.execute();\n      }\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/execute_all.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authenticate_execute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticate_execute */ \"./assets/js/authenticate_execute.js\");\n/* harmony import */ var _belongings_execute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belongings_execute */ \"./assets/js/belongings_execute.js\");\n/* harmony import */ var _execute_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./execute_all */ \"./assets/js/execute_all.js\");\n\n\n\nconst content = [new _authenticate_execute__WEBPACK_IMPORTED_MODULE_0__[\"LoginAuthExecute\"]('/login'), new _belongings_execute__WEBPACK_IMPORTED_MODULE_1__[\"BelongingGetExecute\"]('/belongings'), new _belongings_execute__WEBPACK_IMPORTED_MODULE_1__[\"BelongingPostExecute\"]('/belongings')];\nlet pathnameArr = window.location.pathname.split('/');\n\nif (pathnameArr[1] !== '' && pathnameArr[1] !== 'login') {\n  const logoutExecute = new _authenticate_execute__WEBPACK_IMPORTED_MODULE_0__[\"LogoutAuthExecute\"]('/');\n  logoutExecute.execute();\n}\n\nif (pathnameArr.includes('belongings') && pathnameArr.includes('edit')) {\n  const belongingUpdateExecute = new _belongings_execute__WEBPACK_IMPORTED_MODULE_1__[\"BelongingUpdateExecute\"]('/');\n  belongingUpdateExecute.execute();\n}\n\nconst executeAll = new _execute_all__WEBPACK_IMPORTED_MODULE_2__[\"default\"](content);\nexecuteAll.index();\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ })

/******/ });