webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./pages/index.js":
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function(module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName = "/Users/briangouws/workspace/blog/pages/index.js";

        var Index = function Index() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 2
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 3
                },
                __self: this
              },
              "Hello Next.js, the time is ",
              Date.now()
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Index;
        (function(Component, route) {
          if (!Component) return;
          if (false) {
          }
          module.hot.accept();
          Component.__route = route;

          if (module.hot.status() === "idle") return;

          var components = next.router.components;
          for (var r in components) {
            if (!components.hasOwnProperty(r)) continue;

            if (components[r].Component.__route === route) {
              next.router.update(r, Component);
            }
          }
        })(
          typeof __webpack_exports__ !== "undefined"
            ? __webpack_exports__.default
            : module.exports.default || module.exports,
          "/"
        );

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js"
        )(module)
      ));

      /***/
    }
});
//# sourceMappingURL=index.js.ff620a27e295a9ef1a66.hot-update.js.map
