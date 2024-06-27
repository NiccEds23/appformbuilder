(this["fb_mf"] = this["fb_mf"] || []).push([[80],{

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}
/* harmony default export */ __webpack_exports__["a"] = (useCommittedRef);

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {}
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};
module.exports = invariant;

/***/ }),

/***/ 1452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useUncontrolled; });

// UNUSED EXPORTS: useUncontrolledProp, uncontrollable

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1331);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/utils.js

var noop = function noop() {};
function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;
    if (false) { var handler; }
  });
  return propTypes;
}
function utils_isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function utils_canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/hook.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = Object(react["useRef"])(propValue !== undefined);
  var _useState = Object(react["useState"])(defaultValue),
    stateValue = _useState[0],
    setState = _useState[1];
  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, Object(react["useCallback"])(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}

function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;
    var _ref = result,
      defaultValue = _ref[defaultKey(fieldName)],
      propsValue = _ref[fieldName],
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
      value = _useUncontrolledProp[0],
      handler = _useUncontrolledProp[1];
    return Object(esm_extends["a" /* default */])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(853);

// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = utils_canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? undefined : browser_default()(false) : void 0;
  var UncontrolledComponent = /*#__PURE__*/
  function (_React$Component) {
    Object(inheritsLoose["a" /* default */])(UncontrolledComponent, _React$Component);
    function UncontrolledComponent() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;
            var values = _ref.values;
            return {
              values: Object(esm_extends["a" /* default */])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };
    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
        prevProps = _ref2.prevProps;
      var nextState = {
        values: Object(esm_extends["a" /* default */])(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];
        if (!utils_isProp(props, key) && utils_isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        innerRef = _this$props2.innerRef,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent;
  }(react_default.a.Component);
  Object(react_lifecycles_compat_es["polyfill"])(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = Object(esm_extends["a" /* default */])({
    innerRef: function innerRef() {}
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (react_default.a.forwardRef) {
    WrappedComponent = react_default.a.forwardRef(function (props, ref) {
      return react_default.a.createElement(UncontrolledComponent, Object(esm_extends["a" /* default */])({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, Object(esm_extends["a" /* default */])({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
// CONCATENATED MODULE: ./node_modules/uncontrollable/lib/esm/index.js



/***/ }),

/***/ 1848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1330);


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ 1849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ 2290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(1848);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useUpdateEffect.js

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = Object(react["useRef"])(true);
  Object(react["useEffect"])(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
/* harmony default export */ var esm_useUpdateEffect = (useUpdateEffect);
// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useCommittedRef.js
var useCommittedRef = __webpack_require__(1330);

// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useMounted.js
var useMounted = __webpack_require__(1849);

// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useUpdatedRef.js

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}
// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useWillUnmount.js


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  Object(react["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}
// CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useTimeout.js



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */

function useTimeout() {
  var isMounted = Object(useMounted["a" /* default */])(); // types are confused between node and web here IDK

  var handleRef = Object(react["useRef"])();
  useWillUnmount(function () {
    return clearTimeout(handleRef.current);
  });
  return Object(react["useMemo"])(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };
    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }
      if (!isMounted()) return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set: set,
      clear: clear
    };
  }, []);
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(96);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(714);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(61);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/uncontrollable/lib/esm/index.js + 3 modules
var esm = __webpack_require__(1452);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js + 1 modules
var createWithBsPrefix = __webpack_require__(1156);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CarouselCaption.js

/* harmony default export */ var CarouselCaption = (Object(createWithBsPrefix["a" /* default */])('carousel-caption'));
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CarouselItem.js


var _excluded = ["as", "bsPrefix", "children", "className"];



var CarouselItem = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
    Component = _ref$as === void 0 ? 'div' : _ref$as,
    bsPrefix = _ref.bsPrefix,
    children = _ref.children,
    className = _ref.className,
    props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, _excluded);
  var finalClassName = classnames_default()(className, Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, props, {
    className: finalClassName
  }), children);
});
CarouselItem.displayName = 'CarouselItem';
/* harmony default export */ var esm_CarouselItem = (CarouselItem);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ElementChildren.js

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  var index = 0;
  return react_default.a.Children.map(children, function (child) {
    return /*#__PURE__*/react_default.a.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */

function forEach(children, func) {
  var index = 0;
  react_default.a.Children.forEach(children, function (child) {
    if ( /*#__PURE__*/react_default.a.isValidElement(child)) func(child, index++);
  });
}

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/SafeAnchor.js
var SafeAnchor = __webpack_require__(1286);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/transitionEndListener.js + 5 modules
var transitionEndListener = __webpack_require__(1148);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js
var triggerBrowserReflow = __webpack_require__(958);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Carousel.js


var Carousel_excluded = ["as", "bsPrefix", "slide", "fade", "controls", "indicators", "activeIndex", "onSelect", "onSlide", "onSlid", "interval", "keyboard", "onKeyDown", "pause", "onMouseOver", "onMouseOut", "wrap", "touch", "onTouchStart", "onTouchMove", "onTouchEnd", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"];
















var SWIPE_THRESHOLD = 40;
var propTypes = {
  /**
   * @default 'carousel'
   */
  bsPrefix: prop_types_default.a.string,
  as: prop_types_default.a.elementType,
  /**
   * Enables animation on the Carousel as it transitions between slides.
   */
  slide: prop_types_default.a.bool,
  /** Animates slides with a crossfade animation instead of the default slide animation */
  fade: prop_types_default.a.bool,
  /**
   * Show the Carousel previous and next arrows for changing the current slide
   */
  controls: prop_types_default.a.bool,
  /**
   * Show a set of slide position indicators
   */
  indicators: prop_types_default.a.bool,
  /**
   * Controls the current visible slide
   *
   * @controllable onSelect
   */
  activeIndex: prop_types_default.a.number,
  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: number, event: Object | null) => void
   * ```
   *
   * @controllable activeIndex
   */
  onSelect: prop_types_default.a.func,
  /**
   * Callback fired when a slide transition starts.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlide: prop_types_default.a.func,
  /**
   * Callback fired when a slide transition ends.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlid: prop_types_default.a.func,
  /**
   * The amount of time to delay between automatically cycling an item. If `null`, carousel will not automatically cycle.
   */
  interval: prop_types_default.a.number,
  /** Whether the carousel should react to keyboard events. */
  keyboard: prop_types_default.a.bool,
  /**
   * If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.
   *
   * On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.
   */
  pause: prop_types_default.a.oneOf(['hover', false]),
  /** Whether the carousel should cycle continuously or have hard stops. */
  wrap: prop_types_default.a.bool,
  /**
   * Whether the carousel should support left/right swipe interactions on touchscreen devices.
   */
  touch: prop_types_default.a.bool,
  /** Override the default button icon for the "previous" control */
  prevIcon: prop_types_default.a.node,
  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: prop_types_default.a.string,
  /** Override the default button icon for the "next" control */
  nextIcon: prop_types_default.a.node,
  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: prop_types_default.a.string
};
var defaultProps = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/react_default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  var elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}
function CarouselFunc(uncontrolledProps, ref) {
  var _useUncontrolled = Object(esm["a" /* useUncontrolled */])(uncontrolledProps, {
      activeIndex: 'onSelect'
    }),
    _useUncontrolled$as = _useUncontrolled.as,
    Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
    bsPrefix = _useUncontrolled.bsPrefix,
    slide = _useUncontrolled.slide,
    fade = _useUncontrolled.fade,
    controls = _useUncontrolled.controls,
    indicators = _useUncontrolled.indicators,
    activeIndex = _useUncontrolled.activeIndex,
    onSelect = _useUncontrolled.onSelect,
    onSlide = _useUncontrolled.onSlide,
    onSlid = _useUncontrolled.onSlid,
    interval = _useUncontrolled.interval,
    keyboard = _useUncontrolled.keyboard,
    onKeyDown = _useUncontrolled.onKeyDown,
    pause = _useUncontrolled.pause,
    onMouseOver = _useUncontrolled.onMouseOver,
    onMouseOut = _useUncontrolled.onMouseOut,
    wrap = _useUncontrolled.wrap,
    touch = _useUncontrolled.touch,
    onTouchStart = _useUncontrolled.onTouchStart,
    onTouchMove = _useUncontrolled.onTouchMove,
    onTouchEnd = _useUncontrolled.onTouchEnd,
    prevIcon = _useUncontrolled.prevIcon,
    prevLabel = _useUncontrolled.prevLabel,
    nextIcon = _useUncontrolled.nextIcon,
    nextLabel = _useUncontrolled.nextLabel,
    className = _useUncontrolled.className,
    children = _useUncontrolled.children,
    props = Object(objectWithoutPropertiesLoose["a" /* default */])(_useUncontrolled, Carousel_excluded);
  var prefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'carousel');
  var nextDirectionRef = Object(react["useRef"])(null);
  var _useState = Object(react["useState"])('next'),
    direction = _useState[0],
    setDirection = _useState[1];
  var _useState2 = Object(react["useState"])(false),
    paused = _useState2[0],
    setPaused = _useState2[1];
  var _useState3 = Object(react["useState"])(false),
    isSliding = _useState3[0],
    setIsSliding = _useState3[1];
  var _useState4 = Object(react["useState"])(activeIndex || 0),
    renderedActiveIndex = _useState4[0],
    setRenderedActiveIndex = _useState4[1];
  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
    }
    if (slide) {
      setIsSliding(true);
    }
    setRenderedActiveIndex(activeIndex || 0);
  }
  Object(react["useEffect"])(function () {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  var numChildren = 0;
  var activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  forEach(children, function (child, index) {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  var activeChildIntervalRef = Object(useCommittedRef["a" /* default */])(activeChildInterval);
  var prev = Object(react["useCallback"])(function (event) {
    if (isSliding) {
      return;
    }
    var nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = 'prev';
    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  var next = Object(useEventCallback["a" /* default */])(function (event) {
    if (isSliding) {
      return;
    }
    var nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = 'next';
    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  });
  var elementRef = Object(react["useRef"])();
  Object(react["useImperativeHandle"])(ref, function () {
    return {
      element: elementRef.current,
      prev: prev,
      next: next
    };
  }); // This is used in the setInterval, so it should not invalidate.

  var nextWhenVisible = Object(useEventCallback["a" /* default */])(function () {
    if (!document.hidden && isVisible(elementRef.current)) {
      next();
    }
  });
  var slideDirection = direction === 'next' ? 'left' : 'right';
  esm_useUpdateEffect(function () {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }
    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }
    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [renderedActiveIndex]);
  var orderClassName = prefix + "-item-" + direction;
  var directionalClassName = prefix + "-item-" + slideDirection;
  var handleEnter = Object(react["useCallback"])(function (node) {
    Object(triggerBrowserReflow["a" /* default */])(node);
    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }
  }, [onSlide, renderedActiveIndex, slideDirection]);
  var handleEntered = Object(react["useCallback"])(function () {
    setIsSliding(false);
    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [onSlid, renderedActiveIndex, slideDirection]);
  var handleKeyDown = Object(react["useCallback"])(function (event) {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prev(event);
          return;
        case 'ArrowRight':
          event.preventDefault();
          next(event);
          return;
        default:
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [keyboard, onKeyDown, prev, next]);
  var handleMouseOver = Object(react["useCallback"])(function (event) {
    if (pause === 'hover') {
      setPaused(true);
    }
    if (onMouseOver) {
      onMouseOver(event);
    }
  }, [pause, onMouseOver]);
  var handleMouseOut = Object(react["useCallback"])(function (event) {
    setPaused(false);
    if (onMouseOut) {
      onMouseOut(event);
    }
  }, [onMouseOut]);
  var touchStartXRef = Object(react["useRef"])(0);
  var touchDeltaXRef = Object(react["useRef"])(0);
  var touchUnpauseTimeout = useTimeout();
  var handleTouchStart = Object(react["useCallback"])(function (event) {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === 'hover') {
      setPaused(true);
    }
    if (onTouchStart) {
      onTouchStart(event);
    }
  }, [pause, onTouchStart]);
  var handleTouchMove = Object(react["useCallback"])(function (event) {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    if (onTouchMove) {
      onTouchMove(event);
    }
  }, [onTouchMove]);
  var handleTouchEnd = Object(react["useCallback"])(function (event) {
    if (touch) {
      var touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === 'hover') {
      touchUnpauseTimeout.set(function () {
        setPaused(false);
      }, interval || undefined);
    }
    if (onTouchEnd) {
      onTouchEnd(event);
    }
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  var shouldPlay = interval != null && !paused && !isSliding;
  var intervalHandleRef = Object(react["useRef"])();
  Object(react["useEffect"])(function () {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return undefined;
    }
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : next, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return function () {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, next, activeChildIntervalRef, interval, nextWhenVisible]);
  var indicatorOnClicks = Object(react["useMemo"])(function () {
    return indicators && Array.from({
      length: numChildren
    }, function (_, index) {
      return function (event) {
        if (onSelect) {
          onSelect(index, event);
        }
      };
    });
  }, [indicators, numChildren, onSelect]);
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: elementRef
  }, props, {
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: classnames_default()(className, prefix, slide && 'slide', fade && prefix + "-fade")
  }), indicators && /*#__PURE__*/react_default.a.createElement("ol", {
    className: prefix + "-indicators"
  }, map(children, function (_child, index) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: index,
      className: index === renderedActiveIndex ? 'active' : undefined,
      onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined
    });
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: prefix + "-inner"
  }, map(children, function (child, index) {
    var isActive = index === renderedActiveIndex;
    return slide ? /*#__PURE__*/react_default.a.createElement(Transition["e" /* default */], {
      in: isActive,
      onEnter: isActive ? handleEnter : undefined,
      onEntered: isActive ? handleEntered : undefined,
      addEndListener: transitionEndListener["a" /* default */]
    }, function (status) {
      return /*#__PURE__*/react_default.a.cloneElement(child, {
        className: classnames_default()(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
      });
    }) : /*#__PURE__*/react_default.a.cloneElement(child, {
      className: classnames_default()(child.props.className, isActive && 'active')
    });
  })), controls && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, (wrap || activeIndex !== 0) && /*#__PURE__*/react_default.a.createElement(SafeAnchor["a" /* default */], {
    className: prefix + "-control-prev",
    onClick: prev
  }, prevIcon, prevLabel && /*#__PURE__*/react_default.a.createElement("span", {
    className: "sr-only"
  }, prevLabel)), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/react_default.a.createElement(SafeAnchor["a" /* default */], {
    className: prefix + "-control-next",
    onClick: next
  }, nextIcon, nextLabel && /*#__PURE__*/react_default.a.createElement("span", {
    className: "sr-only"
  }, nextLabel))));
}
var Carousel = /*#__PURE__*/react_default.a.forwardRef(CarouselFunc);
Carousel.displayName = 'Carousel';
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
Carousel.Caption = CarouselCaption;
Carousel.Item = esm_CarouselItem;
/* harmony default export */ var esm_Carousel = __webpack_exports__["a"] = (Carousel);

/***/ }),

/***/ 2292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(96);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/uncontrollable/lib/esm/index.js + 3 modules
var esm = __webpack_require__(1452);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/SelectableContext.js
 // TODO (apparently this is a bare "onSelect"?)

var SelectableContext = /*#__PURE__*/react_default.a.createContext(null);
var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ var esm_SelectableContext = (SelectableContext);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AccordionContext.js

var context = /*#__PURE__*/react_default.a.createContext(null);
context.displayName = 'AccordionContext';
/* harmony default export */ var AccordionContext = (context);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AccordionToggle.js


var _excluded = ["as", "children", "eventKey", "onClick"];



function useAccordionToggle(eventKey, onClick) {
  var contextEventKey = Object(react["useContext"])(AccordionContext);
  var onSelect = Object(react["useContext"])(esm_SelectableContext);
  return function (e) {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}
var AccordionToggle = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
    Component = _ref$as === void 0 ? 'button' : _ref$as,
    children = _ref.children,
    eventKey = _ref.eventKey,
    onClick = _ref.onClick,
    props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, _excluded);
  var accordionOnClick = useAccordionToggle(eventKey, onClick);
  if (Component === 'button') {
    props.type = 'button';
  }
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});
/* harmony default export */ var esm_AccordionToggle = (AccordionToggle);
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(1149);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(714);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/transitionEndListener.js + 5 modules
var transitionEndListener = __webpack_require__(1148);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createChainedFunction.js
var createChainedFunction = __webpack_require__(1287);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js
var triggerBrowserReflow = __webpack_require__(958);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Collapse.js


var Collapse_excluded = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"];
var _collapseStyles;







var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};
function getDefaultDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value +
  // @ts-ignore
  parseInt(Object(css["a" /* default */])(elem, margins[0]), 10) +
  // @ts-ignore
  parseInt(Object(css["a" /* default */])(elem, margins[1]), 10);
}
var collapseStyles = (_collapseStyles = {}, _collapseStyles[Transition["c" /* EXITED */]] = 'collapse', _collapseStyles[Transition["d" /* EXITING */]] = 'collapsing', _collapseStyles[Transition["b" /* ENTERING */]] = 'collapsing', _collapseStyles[Transition["a" /* ENTERED */]] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
var Collapse = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
    onEntering = _ref.onEntering,
    onEntered = _ref.onEntered,
    onExit = _ref.onExit,
    onExiting = _ref.onExiting,
    className = _ref.className,
    children = _ref.children,
    _ref$dimension = _ref.dimension,
    dimension = _ref$dimension === void 0 ? 'height' : _ref$dimension,
    _ref$getDimensionValu = _ref.getDimensionValue,
    getDimensionValue = _ref$getDimensionValu === void 0 ? getDefaultDimensionValue : _ref$getDimensionValu,
    props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, Collapse_excluded);

  /* Compute dimension */
  var computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  var handleEnter = Object(react["useMemo"])(function () {
    return Object(createChainedFunction["a" /* default */])(function (elem) {
      elem.style[computedDimension] = '0';
    }, onEnter);
  }, [computedDimension, onEnter]);
  var handleEntering = Object(react["useMemo"])(function () {
    return Object(createChainedFunction["a" /* default */])(function (elem) {
      var scroll = "scroll" + computedDimension[0].toUpperCase() + computedDimension.slice(1);
      elem.style[computedDimension] = elem[scroll] + "px";
    }, onEntering);
  }, [computedDimension, onEntering]);
  var handleEntered = Object(react["useMemo"])(function () {
    return Object(createChainedFunction["a" /* default */])(function (elem) {
      elem.style[computedDimension] = null;
    }, onEntered);
  }, [computedDimension, onEntered]);
  /* -- Collapsing -- */

  var handleExit = Object(react["useMemo"])(function () {
    return Object(createChainedFunction["a" /* default */])(function (elem) {
      elem.style[computedDimension] = getDimensionValue(computedDimension, elem) + "px";
      Object(triggerBrowserReflow["a" /* default */])(elem);
    }, onExit);
  }, [onExit, getDimensionValue, computedDimension]);
  var handleExiting = Object(react["useMemo"])(function () {
    return Object(createChainedFunction["a" /* default */])(function (elem) {
      elem.style[computedDimension] = null;
    }, onExiting);
  }, [computedDimension, onExiting]);
  return /*#__PURE__*/react_default.a.createElement(Transition["e" /* default */] // @ts-ignore
  , Object(esm_extends["a" /* default */])({
    ref: ref,
    addEndListener: transitionEndListener["a" /* default */]
  }, props, {
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting
  }), function (state, innerProps) {
    return /*#__PURE__*/react_default.a.cloneElement(children, Object(esm_extends["a" /* default */])({}, innerProps, {
      className: classnames_default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    }));
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps;
/* harmony default export */ var esm_Collapse = (Collapse);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AccordionCollapse.js


var AccordionCollapse_excluded = ["children", "eventKey"];




var AccordionCollapse = /*#__PURE__*/react_default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    eventKey = _ref.eventKey,
    props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, AccordionCollapse_excluded);
  var contextEventKey = Object(react["useContext"])(AccordionContext); // Empty SelectableContext is to prevent elements in the collapse
  // from collapsing the accordion when clicked.

  return /*#__PURE__*/react_default.a.createElement(esm_SelectableContext.Provider, {
    value: null
  }, /*#__PURE__*/react_default.a.createElement(esm_Collapse, Object(esm_extends["a" /* default */])({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/react_default.a.createElement("div", null, react_default.a.Children.only(children))));
});
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ var esm_AccordionCollapse = (AccordionCollapse);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Accordion.js


var Accordion_excluded = ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"];








var Accordion = /*#__PURE__*/react_default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(esm["a" /* useUncontrolled */])(props, {
      activeKey: 'onSelect'
    }),
    _useUncontrolled$as = _useUncontrolled.as,
    Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
    activeKey = _useUncontrolled.activeKey,
    bsPrefix = _useUncontrolled.bsPrefix,
    children = _useUncontrolled.children,
    className = _useUncontrolled.className,
    onSelect = _useUncontrolled.onSelect,
    controlledProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_useUncontrolled, Accordion_excluded);
  var finalClassName = classnames_default()(className, Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'accordion'));
  return /*#__PURE__*/react_default.a.createElement(AccordionContext.Provider, {
    value: activeKey || null
  }, /*#__PURE__*/react_default.a.createElement(esm_SelectableContext.Provider, {
    value: onSelect || null
  }, /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, controlledProps, {
    className: finalClassName
  }), children)));
});
Accordion.displayName = 'Accordion';
Accordion.Toggle = esm_AccordionToggle;
Accordion.Collapse = esm_AccordionCollapse;
/* harmony default export */ var esm_Accordion = __webpack_exports__["a"] = (Accordion);

/***/ })

}]);
//# sourceMappingURL=vendors~SECTION.206a1eb7ce06e390fcfe.js.map