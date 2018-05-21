// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      backgroundColor: "rgb(240,240,240)",
      height: "1px",
      marginLeft: "20px"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["message"]
  }, [_vm._v("Now, let's use Vue.js to build yosdsdsdsdsur Weex app.")]), _c('text', [_vm._v("hello ni hao a zhen de shi ni ma ")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/voidxin/Desktop/voidxinProject_file/helloworld-project/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0de31479"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "tab-panels": {
    "position": "relative",
    "width": 3750,
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "stretch",
    "backgroundColor": "#F5F5F5",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "tab-panels": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    }
  },
  "title": {
    "fontSize": "32"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = __webpack_require__(11);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _BottomLine = __webpack_require__(12);

var _BottomLine2 = _interopRequireDefault(_BottomLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  components: {
    HelloWorld: _HelloWorld2.default,
    BottomLine: _BottomLine2.default
  },
  data: function data() {
    return {
      imageurl: 'https://cdn.dribbble.com/users/179241/screenshots/1829868/nerfwarrior_dribbble.png',
      text: '最新调查显示独立开发者最不喜欢Xbox平台,新闻新闻这是新闻是是是是是',
      titleArray: [{ title: '头条', tcolor: 'rgb(30,165,227)' }, { title: '汽车科技', tcolor: 'rgb(120,120,120)' }, { title: '排行版', tcolor: 'rgb(120,120,120)' }, { title: 'Apple', tcolor: 'rgb(120,120,120)' }, { title: '资讯', tcolor: 'rgb(120,120,120)' }],
      // titleArray:['头条','汽车科技','排行版','Apple','资讯'],
      dataArray: [1, 2, 3, 4, 5, 6, 7, 6, 6, 6, 6, 4, 3, 2, 1, 2, 2, 2, 3, 3, 3, 33, 3, 3],
      posters: ['https://gw.alicdn.com/tfs/TB1u1gjkY1YBuNjSszhXXcUsFXa-1080-1518.jpg', 'https://gw.alicdn.com/tfs/TB1TKvQk79WBuNjSspeXXaz5VXa-900-1312.jpg', 'https://gw.alicdn.com/tfs/TB1nDsrkYSYBuNjSspfXXcZCpXa-1080-1575.jpg', 'https://gw.alicdn.com/tfs/TB1MqHJkVuWBuNjSszbXXcS7FXa-1080-1574.jpg'],
      pageArray: [1, 2],
      screenW: 750,
      screenH: 0,
      activeTab: 0
    };
  },

  methods: {
    itemClick: function itemClick(i) {
      var self = this;
      self.activeTab = i;
      var content = self.titleArray[i];
      content.tcolor = 'rgb(30,165,227)';
      self.titleArray[i] = content;
      for (var a = 0; a < self.titleArray.length; a++) {
        if (i != a) {
          var content = self.titleArray[a];
          content.tcolor = 'rgb(120,120,120)';
          self.titleArray[a] = content;
        }
      }
    }
  },
  created: function created() {

    var self = this;
    var config = self.$getConfig();
    //宽度
    //在5s或se上获取的宽度用在slider上有bug，宽度不够
    /*
    if(config.env.deviceWidth == 640){
      self.screenW = 750;
    }else{
      self.screenW = config.env.deviceWidth;
    }
     self.screenH = config.env.deviceHeight;
    console.log(self.screenW);
    */
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(1)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/voidxin/Desktop/voidxinProject_file/helloworld-project/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(0)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/voidxin/Desktop/voidxinProject_file/helloworld-project/src/components/BottomLine.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _c('div', {
    staticStyle: {
      height: "1px",
      backgroundColor: "rgb(240,240,240)",
      marginTop: "90px"
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, _vm._l((_vm.titleArray), function(content, i) {
    return _c('div', {
      key: i,
      staticStyle: {
        height: "88px",
        justifyContent: "center"
      },
      on: {
        "click": function($event) {
          _vm.itemClick(i)
        }
      }
    }, [_c('div', {
      staticStyle: {
        justifyContent: "center",
        alignItems: "center",
        width: "150px",
        height: "60px"
      }
    }, [_c('text', {
      staticClass: ["title"],
      style: {
        color: content.tcolor
      }
    }, [_vm._v(_vm._s(content.title))])])])
  })), _c('div', {
    staticClass: ["tab-panels"],
    style: {
      left: _vm.activeTab * -750 + 'px'
    }
  }, _vm._l((_vm.titleArray), function(content, i) {
    return _c('div', {
      key: i,
      staticStyle: {
        width: "750px"
      }
    }, [(i == 0) ? _c('div', {
      staticStyle: {
        height: "350px"
      }
    }, [_c('slider', {
      staticClass: ["slider"],
      style: {
        height: 350 + 'px',
        width: _vm.screenW + 'px'
      },
      attrs: {
        "autoPlay": "true"
      }
    }, [_vm._l((_vm.posters), function(src) {
      return _c('div', [_c('image', {
        style: {
          height: 350 + 'px',
          width: _vm.screenW + 'px'
        },
        attrs: {
          "resize": "stretch",
          "src": src
        }
      })])
    }), _c('indicator', {
      staticStyle: {
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        itemColor: "#DDDDDD",
        itemSelectedColor: "rgb(0, 180, 255)"
      }
    })], 2)]) : _vm._e(), _c('list', _vm._l((_vm.dataArray), function(i) {
      return _c('cell', {
        key: i,
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      }, [_c('div', [_c('div', {
        staticStyle: {
          height: "200px",
          flexDirection: "row",
          marginTop: "20px"
        }
      }, [_c('div', {
        staticStyle: {
          width: "230px",
          marginLeft: "20px"
        }
      }, [(_vm.imageurl) ? _c('image', {
        staticStyle: {
          width: "230px",
          height: "180px"
        },
        attrs: {
          "resize": "stretch",
          "src": _vm.imageurl
        }
      }) : _vm._e()]), _c('div', {
        staticStyle: {
          flexDirection: "column",
          flex: "1",
          marginLeft: "20px"
        }
      }, [_c('div', {
        staticStyle: {
          flex: "0.6",
          marginRight: "10px"
        }
      }, [_c('text', {
        staticStyle: {
          color: "black",
          fontSize: "30px"
        }
      }, [_vm._v(_vm._s(_vm.text))])]), _vm._m(1, true)])])]), _c('BottomLine')], 1)
    }))])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      height: "88px",
      position: "absolute",
      right: "0",
      left: "0",
      top: "0"
    }
  }, [_c('div', {
    staticStyle: {
      justifyContent: "center",
      alignItems: "center",
      flex: "1"
    }
  }, [_c('image', {
    staticStyle: {
      width: "300px",
      height: "40px"
    },
    attrs: {
      "src": "http://7xwl0f.com1.z0.glb.clouddn.com/pconline_top_title@2x.png"
    }
  })]), _c('div', {
    staticStyle: {
      position: "absolute",
      right: "25px",
      top: "20px"
    }
  }, [_c('image', {
    staticStyle: {
      height: "40px",
      width: "40px"
    },
    attrs: {
      "resize": "stretch",
      "src": "http://7xwl0f.com1.z0.glb.clouddn.com/btn_search_icon@2x.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flex: "0.4",
      flexDirection: "row",
      alignItems: "center"
    }
  }, [_c('div', {
    staticStyle: {
      flex: "0.5"
    }
  }, [_c('text', {
    staticStyle: {
      color: "gray",
      width: "80px",
      fontSize: "24px"
    }
  }, [_vm._v("资讯")])]), _c('div', {
    staticStyle: {
      flex: "0.5",
      marginRight: "10px"
    }
  }, [_c('text', {
    staticStyle: {
      color: "gray",
      textAlign: "right",
      fontSize: "24px"
    }
  }, [_vm._v("10评论")])])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);