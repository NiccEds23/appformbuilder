(this["fb_mf"] = this["fb_mf"] || []).push([[78],{

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistance = __webpack_require__(940);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelative = __webpack_require__(941);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var localize = __webpack_require__(942);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var match = __webpack_require__(943);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
var buildFormatLongFn = __webpack_require__(679);

// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-GB/_lib/formatLong/index.js

var dateFormats = {
  full: 'EEEE, d MMMM yyyy',
  long: 'd MMMM yyyy',
  medium: 'd MMM yyyy',
  short: 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(buildFormatLongFn["a" /* default */])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(buildFormatLongFn["a" /* default */])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(buildFormatLongFn["a" /* default */])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ var _lib_formatLong = (formatLong);
// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/en-GB/index.js





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United Kingdom).
 * @language English
 * @iso-639-2 eng
 * @author Alex [@glintik]{@link https://github.com/glintik}
 */
var locale = {
  code: 'en-GB',
  formatDistance: formatDistance["a" /* default */],
  formatLong: _lib_formatLong,
  formatRelative: formatRelative["a" /* default */],
  localize: localize["a" /* default */],
  match: match["a" /* default */],
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
};
/* harmony default export */ var en_GB = __webpack_exports__["a"] = (locale);

/***/ }),

/***/ 1853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1854);
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask_core__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _class, _temp2;
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



var KEYCODE_Z = 90;
var KEYCODE_Y = 89;
function isUndo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Y : KEYCODE_Z);
}
function isRedo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEYCODE_Z : KEYCODE_Y);
}
function getSelection(el) {
  var start = void 0,
    end = void 0;
  if (el.selectionStart !== undefined) {
    start = el.selectionStart;
    end = el.selectionEnd;
  } else {
    try {
      el.focus();
      var rangeEl = el.createTextRange();
      var clone = rangeEl.duplicate();
      rangeEl.moveToBookmark(document.selection.createRange().getBookmark());
      clone.setEndPoint('EndToStart', rangeEl);
      start = clone.text.length;
      end = start + rangeEl.text.length;
    } catch (e) {/* not focused or not visible */}
  }
  return {
    start: start,
    end: end
  };
}
function setSelection(el, selection) {
  try {
    if (el.selectionStart !== undefined) {
      el.focus();
      el.setSelectionRange(selection.start, selection.end);
    } else {
      el.focus();
      var rangeEl = el.createTextRange();
      rangeEl.collapse(true);
      rangeEl.moveStart('character', selection.start);
      rangeEl.moveEnd('character', selection.end - selection.start);
      rangeEl.select();
    }
  } catch (e) {/* not focused or not visible */}
}
var MaskedInput = (_temp2 = _class = function (_React$Component) {
  _inherits(MaskedInput, _React$Component);
  function MaskedInput() {
    var _temp, _this, _ret;
    _classCallCheck(this, MaskedInput);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._onChange = function (e) {
      // console.log('onChange', JSON.stringify(getSelection(this.input)), e.target.value)

      var maskValue = _this.mask.getValue();
      var incomingValue = e.target.value;
      if (incomingValue !== maskValue) {
        // only modify mask if form contents actually changed
        _this._updateMaskSelection();
        _this.mask.setValue(incomingValue); // write the whole updated value into the mask
        e.target.value = _this._getDisplayValue(); // update the form with pattern applied to the value
        _this._updateInputSelection();
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    }, _this._onKeyDown = function (e) {
      // console.log('onKeyDown', JSON.stringify(getSelection(this.input)), e.key, e.target.value)

      if (isUndo(e)) {
        e.preventDefault();
        if (_this.mask.undo()) {
          e.target.value = _this._getDisplayValue();
          _this._updateInputSelection();
          if (_this.props.onChange) {
            _this.props.onChange(e);
          }
        }
        return;
      } else if (isRedo(e)) {
        e.preventDefault();
        if (_this.mask.redo()) {
          e.target.value = _this._getDisplayValue();
          _this._updateInputSelection();
          if (_this.props.onChange) {
            _this.props.onChange(e);
          }
        }
        return;
      }
      if (e.key === 'Backspace') {
        e.preventDefault();
        _this._updateMaskSelection();
        if (_this.mask.backspace()) {
          var value = _this._getDisplayValue();
          e.target.value = value;
          if (value) {
            _this._updateInputSelection();
          }
          if (_this.props.onChange) {
            _this.props.onChange(e);
          }
        }
      }
    }, _this._onKeyPress = function (e) {
      // console.log('onKeyPress', JSON.stringify(getSelection(this.input)), e.key, e.target.value)

      // Ignore modified key presses
      // Ignore enter key to allow form submission
      if (e.metaKey || e.altKey || e.ctrlKey || e.key === 'Enter') {
        return;
      }
      e.preventDefault();
      _this._updateMaskSelection();
      if (_this.mask.input(e.key || e.data)) {
        e.target.value = _this.mask.getValue();
        _this._updateInputSelection();
        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      }
    }, _this._onPaste = function (e) {
      // console.log('onPaste', JSON.stringify(getSelection(this.input)), e.clipboardData.getData('Text'), e.target.value)

      e.preventDefault();
      _this._updateMaskSelection();
      // getData value needed for IE also works in FF & Chrome
      if (_this.mask.paste(e.clipboardData.getData('Text'))) {
        e.target.value = _this.mask.getValue();
        // Timeout needed for IE
        setTimeout(function () {
          return _this._updateInputSelection();
        }, 0);
        if (_this.props.onChange) {
          _this.props.onChange(e);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  MaskedInput.prototype.componentWillMount = function componentWillMount() {
    var options = {
      pattern: this.props.mask,
      value: this.props.value,
      formatCharacters: this.props.formatCharacters
    };
    if (this.props.placeholderChar) {
      options.placeholderChar = this.props.placeholderChar;
    }
    this.mask = new inputmask_core__WEBPACK_IMPORTED_MODULE_1___default.a(options);
  };
  MaskedInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.mask !== nextProps.mask && this.props.value !== nextProps.mask) {
      // if we get a new value and a new mask at the same time
      // check if the mask.value is still the initial value
      // - if so use the nextProps value
      // - otherwise the `this.mask` has a value for us (most likely from paste action)
      if (this.mask.getValue() === this.mask.emptyValue) {
        this.mask.setPattern(nextProps.mask, {
          value: nextProps.value
        });
      } else {
        this.mask.setPattern(nextProps.mask, {
          value: this.mask.getRawValue()
        });
      }
    } else if (this.props.mask !== nextProps.mask) {
      this.mask.setPattern(nextProps.mask, {
        value: this.mask.getRawValue()
      });
    } else if (this.props.value !== nextProps.value) {
      this.mask.setValue(nextProps.value);
    }
  };
  MaskedInput.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    if (nextProps.mask !== this.props.mask) {
      this._updatePattern(nextProps);
    }
  };
  MaskedInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.mask !== this.props.mask && this.mask.selection.start) {
      this._updateInputSelection();
    }
  };
  MaskedInput.prototype._updatePattern = function _updatePattern(props) {
    this.mask.setPattern(props.mask, {
      value: this.mask.getRawValue(),
      selection: getSelection(this.input)
    });
  };
  MaskedInput.prototype._updateMaskSelection = function _updateMaskSelection() {
    this.mask.selection = getSelection(this.input);
  };
  MaskedInput.prototype._updateInputSelection = function _updateInputSelection() {
    setSelection(this.input, this.mask.selection);
  };
  MaskedInput.prototype._getDisplayValue = function _getDisplayValue() {
    var value = this.mask.getValue();
    return value === this.mask.emptyValue ? '' : value;
  };
  MaskedInput.prototype._keyPressPropName = function _keyPressPropName() {
    if (typeof navigator !== 'undefined') {
      return navigator.userAgent.match(/Android/i) ? 'onBeforeInput' : 'onKeyPress';
    }
    return 'onKeyPress';
  };
  MaskedInput.prototype._getEventHandlers = function _getEventHandlers() {
    var _ref;
    return _ref = {
      onChange: this._onChange,
      onKeyDown: this._onKeyDown,
      onPaste: this._onPaste
    }, _ref[this._keyPressPropName()] = this._onKeyPress, _ref;
  };
  MaskedInput.prototype.focus = function focus() {
    this.input.focus();
  };
  MaskedInput.prototype.blur = function blur() {
    this.input.blur();
  };
  MaskedInput.prototype.render = function render() {
    var _this2 = this;
    var ref = function ref(r) {
      _this2.input = r;
    };
    var maxLength = this.mask.pattern.length;
    var value = this._getDisplayValue();
    var eventHandlers = this._getEventHandlers();
    var _props = this.props,
      _props$size = _props.size,
      size = _props$size === undefined ? maxLength : _props$size,
      _props$placeholder = _props.placeholder,
      placeholder = _props$placeholder === undefined ? this.mask.emptyValue : _props$placeholder;
    var _props2 = this.props,
      placeholderChar = _props2.placeholderChar,
      formatCharacters = _props2.formatCharacters,
      cleanedProps = _objectWithoutProperties(_props2, ['placeholderChar', 'formatCharacters']); // eslint-disable-line no-unused-vars

    var inputProps = _extends({}, cleanedProps, eventHandlers, {
      ref: ref,
      maxLength: maxLength,
      value: value,
      size: size,
      placeholder: placeholder
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', inputProps);
  };
  return MaskedInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _class.defaultProps = {
  value: ''
}, _temp2);
MaskedInput.propTypes =  false ? undefined : {};
/* unused harmony default export */ var _unused_webpack_default_export = (MaskedInput);

/***/ }),

/***/ 1854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function extend(dest, src) {
  if (src) {
    var props = Object.keys(src);
    for (var i = 0, l = props.length; i < l; i++) {
      dest[props[i]] = src[props[i]];
    }
  }
  return dest;
}
function copy(obj) {
  return extend({}, obj);
}

/**
 * Merge an object defining format characters into the defaults.
 * Passing null/undefined for en existing format character removes it.
 * Passing a definition for an existing format character overrides it.
 * @param {?Object} formatCharacters.
 */
function mergeFormatCharacters(formatCharacters) {
  var merged = copy(DEFAULT_FORMAT_CHARACTERS);
  if (formatCharacters) {
    var chars = Object.keys(formatCharacters);
    for (var i = 0, l = chars.length; i < l; i++) {
      var char = chars[i];
      if (formatCharacters[char] == null) {
        delete merged[char];
      } else {
        merged[char] = formatCharacters[char];
      }
    }
  }
  return merged;
}
var ESCAPE_CHAR = '\\';
var DIGIT_RE = /^\d$/;
var LETTER_RE = /^[A-Za-z]$/;
var ALPHANNUMERIC_RE = /^[\dA-Za-z]$/;
var DEFAULT_PLACEHOLDER_CHAR = '_';
var DEFAULT_FORMAT_CHARACTERS = {
  '*': {
    validate: function validate(char) {
      return ALPHANNUMERIC_RE.test(char);
    }
  },
  '1': {
    validate: function validate(char) {
      return DIGIT_RE.test(char);
    }
  },
  'a': {
    validate: function validate(char) {
      return LETTER_RE.test(char);
    }
  },
  'A': {
    validate: function validate(char) {
      return LETTER_RE.test(char);
    },
    transform: function transform(char) {
      return char.toUpperCase();
    }
  },
  '#': {
    validate: function validate(char) {
      return ALPHANNUMERIC_RE.test(char);
    },
    transform: function transform(char) {
      return char.toUpperCase();
    }
  }
};

/**
 * @param {string} source
 * @patam {?Object} formatCharacters
 */
function Pattern(source, formatCharacters, placeholderChar, isRevealingMask) {
  if (!(this instanceof Pattern)) {
    return new Pattern(source, formatCharacters, placeholderChar);
  }

  /** Placeholder character */
  this.placeholderChar = placeholderChar || DEFAULT_PLACEHOLDER_CHAR;
  /** Format character definitions. */
  this.formatCharacters = formatCharacters || DEFAULT_FORMAT_CHARACTERS;
  /** Pattern definition string with escape characters. */
  this.source = source;
  /** Pattern characters after escape characters have been processed. */
  this.pattern = [];
  /** Length of the pattern after escape characters have been processed. */
  this.length = 0;
  /** Index of the first editable character. */
  this.firstEditableIndex = null;
  /** Index of the last editable character. */
  this.lastEditableIndex = null;
  /** Lookup for indices of editable characters in the pattern. */
  this._editableIndices = {};
  /** If true, only the pattern before the last valid value character shows. */
  this.isRevealingMask = isRevealingMask || false;
  this._parse();
}
Pattern.prototype._parse = function parse() {
  var sourceChars = this.source.split('');
  var patternIndex = 0;
  var pattern = [];
  for (var i = 0, l = sourceChars.length; i < l; i++) {
    var char = sourceChars[i];
    if (char === ESCAPE_CHAR) {
      if (i === l - 1) {
        throw new Error('InputMask: pattern ends with a raw ' + ESCAPE_CHAR);
      }
      char = sourceChars[++i];
    } else if (char in this.formatCharacters) {
      if (this.firstEditableIndex === null) {
        this.firstEditableIndex = patternIndex;
      }
      this.lastEditableIndex = patternIndex;
      this._editableIndices[patternIndex] = true;
    }
    pattern.push(char);
    patternIndex++;
  }
  if (this.firstEditableIndex === null) {
    throw new Error('InputMask: pattern "' + this.source + '" does not contain any editable characters.');
  }
  this.pattern = pattern;
  this.length = pattern.length;
};

/**
 * @param {Array<string>} value
 * @return {Array<string>}
 */
Pattern.prototype.formatValue = function format(value) {
  var valueBuffer = new Array(this.length);
  var valueIndex = 0;
  for (var i = 0, l = this.length; i < l; i++) {
    if (this.isEditableIndex(i)) {
      if (this.isRevealingMask && value.length <= valueIndex && !this.isValidAtIndex(value[valueIndex], i)) {
        break;
      }
      valueBuffer[i] = value.length > valueIndex && this.isValidAtIndex(value[valueIndex], i) ? this.transform(value[valueIndex], i) : this.placeholderChar;
      valueIndex++;
    } else {
      valueBuffer[i] = this.pattern[i];
      // Also allow the value to contain static values from the pattern by
      // advancing its index.
      if (value.length > valueIndex && value[valueIndex] === this.pattern[i]) {
        valueIndex++;
      }
    }
  }
  return valueBuffer;
};

/**
 * @param {number} index
 * @return {boolean}
 */
Pattern.prototype.isEditableIndex = function isEditableIndex(index) {
  return !!this._editableIndices[index];
};

/**
 * @param {string} char
 * @param {number} index
 * @return {boolean}
 */
Pattern.prototype.isValidAtIndex = function isValidAtIndex(char, index) {
  return this.formatCharacters[this.pattern[index]].validate(char);
};
Pattern.prototype.transform = function transform(char, index) {
  var format = this.formatCharacters[this.pattern[index]];
  return typeof format.transform == 'function' ? format.transform(char) : char;
};
function InputMask(options) {
  if (!(this instanceof InputMask)) {
    return new InputMask(options);
  }
  options = extend({
    formatCharacters: null,
    pattern: null,
    isRevealingMask: false,
    placeholderChar: DEFAULT_PLACEHOLDER_CHAR,
    selection: {
      start: 0,
      end: 0
    },
    value: ''
  }, options);
  if (options.pattern == null) {
    throw new Error('InputMask: you must provide a pattern.');
  }
  if (typeof options.placeholderChar !== 'string' || options.placeholderChar.length > 1) {
    throw new Error('InputMask: placeholderChar should be a single character or an empty string.');
  }
  this.placeholderChar = options.placeholderChar;
  this.formatCharacters = mergeFormatCharacters(options.formatCharacters);
  this.setPattern(options.pattern, {
    value: options.value,
    selection: options.selection,
    isRevealingMask: options.isRevealingMask
  });
}

// Editing

/**
 * Applies a single character of input based on the current selection.
 * @param {string} char
 * @return {boolean} true if a change has been made to value or selection as a
 *   result of the input, false otherwise.
 */
InputMask.prototype.input = function input(char) {
  // Ignore additional input if the cursor's at the end of the pattern
  if (this.selection.start === this.selection.end && this.selection.start === this.pattern.length) {
    return false;
  }
  var selectionBefore = copy(this.selection);
  var valueBefore = this.getValue();
  var inputIndex = this.selection.start;

  // If the cursor or selection is prior to the first editable character, make
  // sure any input given is applied to it.
  if (inputIndex < this.pattern.firstEditableIndex) {
    inputIndex = this.pattern.firstEditableIndex;
  }

  // Bail out or add the character to input
  if (this.pattern.isEditableIndex(inputIndex)) {
    if (!this.pattern.isValidAtIndex(char, inputIndex)) {
      return false;
    }
    this.value[inputIndex] = this.pattern.transform(char, inputIndex);
  }

  // If multiple characters were selected, blank the remainder out based on the
  // pattern.
  var end = this.selection.end - 1;
  while (end > inputIndex) {
    if (this.pattern.isEditableIndex(end)) {
      this.value[end] = this.placeholderChar;
    }
    end--;
  }

  // Advance the cursor to the next character
  this.selection.start = this.selection.end = inputIndex + 1;

  // Skip over any subsequent static characters
  while (this.pattern.length > this.selection.start && !this.pattern.isEditableIndex(this.selection.start)) {
    this.selection.start++;
    this.selection.end++;
  }

  // History
  if (this._historyIndex != null) {
    // Took more input after undoing, so blow any subsequent history away
    this._history.splice(this._historyIndex, this._history.length - this._historyIndex);
    this._historyIndex = null;
  }
  if (this._lastOp !== 'input' || selectionBefore.start !== selectionBefore.end || this._lastSelection !== null && selectionBefore.start !== this._lastSelection.start) {
    this._history.push({
      value: valueBefore,
      selection: selectionBefore,
      lastOp: this._lastOp
    });
  }
  this._lastOp = 'input';
  this._lastSelection = copy(this.selection);
  return true;
};

/**
 * Attempts to delete from the value based on the current cursor position or
 * selection.
 * @return {boolean} true if the value or selection changed as the result of
 *   backspacing, false otherwise.
 */
InputMask.prototype.backspace = function backspace() {
  // If the cursor is at the start there's nothing to do
  if (this.selection.start === 0 && this.selection.end === 0) {
    return false;
  }
  var selectionBefore = copy(this.selection);
  var valueBefore = this.getValue();

  // No range selected - work on the character preceding the cursor
  if (this.selection.start === this.selection.end) {
    if (this.pattern.isEditableIndex(this.selection.start - 1)) {
      this.value[this.selection.start - 1] = this.placeholderChar;
    }
    this.selection.start--;
    this.selection.end--;
  }
  // Range selected - delete characters and leave the cursor at the start of the selection
  else {
    var end = this.selection.end - 1;
    while (end >= this.selection.start) {
      if (this.pattern.isEditableIndex(end)) {
        this.value[end] = this.placeholderChar;
      }
      end--;
    }
    this.selection.end = this.selection.start;
  }

  // History
  if (this._historyIndex != null) {
    // Took more input after undoing, so blow any subsequent history away
    this._history.splice(this._historyIndex, this._history.length - this._historyIndex);
  }
  if (this._lastOp !== 'backspace' || selectionBefore.start !== selectionBefore.end || this._lastSelection !== null && selectionBefore.start !== this._lastSelection.start) {
    this._history.push({
      value: valueBefore,
      selection: selectionBefore,
      lastOp: this._lastOp
    });
  }
  this._lastOp = 'backspace';
  this._lastSelection = copy(this.selection);
  return true;
};

/**
 * Attempts to paste a string of input at the current cursor position or over
 * the top of the current selection.
 * Invalid content at any position will cause the paste to be rejected, and it
 * may contain static parts of the mask's pattern.
 * @param {string} input
 * @return {boolean} true if the paste was successful, false otherwise.
 */
InputMask.prototype.paste = function paste(input) {
  // This is necessary because we're just calling input() with each character
  // and rolling back if any were invalid, rather than checking up-front.
  var initialState = {
    value: this.value.slice(),
    selection: copy(this.selection),
    _lastOp: this._lastOp,
    _history: this._history.slice(),
    _historyIndex: this._historyIndex,
    _lastSelection: copy(this._lastSelection)
  };

  // If there are static characters at the start of the pattern and the cursor
  // or selection is within them, the static characters must match for a valid
  // paste.
  if (this.selection.start < this.pattern.firstEditableIndex) {
    for (var i = 0, l = this.pattern.firstEditableIndex - this.selection.start; i < l; i++) {
      if (input.charAt(i) !== this.pattern.pattern[i]) {
        return false;
      }
    }

    // Continue as if the selection and input started from the editable part of
    // the pattern.
    input = input.substring(this.pattern.firstEditableIndex - this.selection.start);
    this.selection.start = this.pattern.firstEditableIndex;
  }
  for (i = 0, l = input.length; i < l && this.selection.start <= this.pattern.lastEditableIndex; i++) {
    var valid = this.input(input.charAt(i));
    // Allow static parts of the pattern to appear in pasted input - they will
    // already have been stepped over by input(), so verify that the value
    // deemed invalid by input() was the expected static character.
    if (!valid) {
      if (this.selection.start > 0) {
        // XXX This only allows for one static character to be skipped
        var patternIndex = this.selection.start - 1;
        if (!this.pattern.isEditableIndex(patternIndex) && input.charAt(i) === this.pattern.pattern[patternIndex]) {
          continue;
        }
      }
      extend(this, initialState);
      return false;
    }
  }
  return true;
};

// History

InputMask.prototype.undo = function undo() {
  // If there is no history, or nothing more on the history stack, we can't undo
  if (this._history.length === 0 || this._historyIndex === 0) {
    return false;
  }
  var historyItem;
  if (this._historyIndex == null) {
    // Not currently undoing, set up the initial history index
    this._historyIndex = this._history.length - 1;
    historyItem = this._history[this._historyIndex];
    // Add a new history entry if anything has changed since the last one, so we
    // can redo back to the initial state we started undoing from.
    var value = this.getValue();
    if (historyItem.value !== value || historyItem.selection.start !== this.selection.start || historyItem.selection.end !== this.selection.end) {
      this._history.push({
        value: value,
        selection: copy(this.selection),
        lastOp: this._lastOp,
        startUndo: true
      });
    }
  } else {
    historyItem = this._history[--this._historyIndex];
  }
  this.value = historyItem.value.split('');
  this.selection = historyItem.selection;
  this._lastOp = historyItem.lastOp;
  return true;
};
InputMask.prototype.redo = function redo() {
  if (this._history.length === 0 || this._historyIndex == null) {
    return false;
  }
  var historyItem = this._history[++this._historyIndex];
  // If this is the last history item, we're done redoing
  if (this._historyIndex === this._history.length - 1) {
    this._historyIndex = null;
    // If the last history item was only added to start undoing, remove it
    if (historyItem.startUndo) {
      this._history.pop();
    }
  }
  this.value = historyItem.value.split('');
  this.selection = historyItem.selection;
  this._lastOp = historyItem.lastOp;
  return true;
};

// Getters & setters

InputMask.prototype.setPattern = function setPattern(pattern, options) {
  options = extend({
    selection: {
      start: 0,
      end: 0
    },
    value: ''
  }, options);
  this.pattern = new Pattern(pattern, this.formatCharacters, this.placeholderChar, options.isRevealingMask);
  this.setValue(options.value);
  this.emptyValue = this.pattern.formatValue([]).join('');
  this.selection = options.selection;
  this._resetHistory();
};
InputMask.prototype.setSelection = function setSelection(selection) {
  this.selection = copy(selection);
  if (this.selection.start === this.selection.end) {
    if (this.selection.start < this.pattern.firstEditableIndex) {
      this.selection.start = this.selection.end = this.pattern.firstEditableIndex;
      return true;
    }
    // Set selection to the first editable, non-placeholder character before the selection
    // OR to the beginning of the pattern
    var index = this.selection.start;
    while (index >= this.pattern.firstEditableIndex) {
      if (this.pattern.isEditableIndex(index - 1) && this.value[index - 1] !== this.placeholderChar || index === this.pattern.firstEditableIndex) {
        this.selection.start = this.selection.end = index;
        break;
      }
      index--;
    }
    return true;
  }
  return false;
};
InputMask.prototype.setValue = function setValue(value) {
  if (value == null) {
    value = '';
  }
  this.value = this.pattern.formatValue(value.split(''));
};
InputMask.prototype.getValue = function getValue() {
  return this.value.join('');
};
InputMask.prototype.getRawValue = function getRawValue() {
  var rawValue = [];
  for (var i = 0; i < this.value.length; i++) {
    if (this.pattern._editableIndices[i] === true) {
      rawValue.push(this.value[i]);
    }
  }
  return rawValue.join('');
};
InputMask.prototype._resetHistory = function _resetHistory() {
  this._history = [];
  this._historyIndex = null;
  this._lastOp = null;
  this._lastSelection = copy(this.selection);
};
InputMask.Pattern = Pattern;
module.exports = InputMask;

/***/ }),

/***/ 1856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment-hijri.js
// author: Suhail Alkowaileet
// This is a modified version of moment-jalaali by Behrang Noruzi Niya
// license: MIT



/************************************
    Expose Moment Hijri
************************************/
(function (root, factory) {
  /* global define */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(119)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (moment) {
      root.moment = factory(moment);
      return root.moment;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (moment) {
  // jshint ignore:line

  if (moment == null) {
    throw new Error('Cannot find moment');
  }

  /************************************
       Constants
   ************************************/

  var ummalqura = {
    ummalquraData: [28607, 28636, 28665, 28695, 28724, 28754, 28783, 28813, 28843, 28872, 28901, 28931, 28960, 28990, 29019, 29049, 29078, 29108, 29137, 29167, 29196, 29226, 29255, 29285, 29315, 29345, 29375, 29404, 29434, 29463, 29492, 29522, 29551, 29580, 29610, 29640, 29669, 29699, 29729, 29759, 29788, 29818, 29847, 29876, 29906, 29935, 29964, 29994, 30023, 30053, 30082, 30112, 30141, 30171, 30200, 30230, 30259, 30289, 30318, 30348, 30378, 30408, 30437, 30467, 30496, 30526, 30555, 30585, 30614, 30644, 30673, 30703, 30732, 30762, 30791, 30821, 30850, 30880, 30909, 30939, 30968, 30998, 31027, 31057, 31086, 31116, 31145, 31175, 31204, 31234, 31263, 31293, 31322, 31352, 31381, 31411, 31441, 31471, 31500, 31530, 31559, 31589, 31618, 31648, 31676, 31706, 31736, 31766, 31795, 31825, 31854, 31884, 31913, 31943, 31972, 32002, 32031, 32061, 32090, 32120, 32150, 32180, 32209, 32239, 32268, 32298, 32327, 32357, 32386, 32416, 32445, 32475, 32504, 32534, 32563, 32593, 32622, 32652, 32681, 32711, 32740, 32770, 32799, 32829, 32858, 32888, 32917, 32947, 32976, 33006, 33035, 33065, 33094, 33124, 33153, 33183, 33213, 33243, 33272, 33302, 33331, 33361, 33390, 33420, 33450, 33479, 33509, 33539, 33568, 33598, 33627, 33657, 33686, 33716, 33745, 33775, 33804, 33834, 33863, 33893, 33922, 33952, 33981, 34011, 34040, 34069, 34099, 34128, 34158, 34187, 34217, 34247, 34277, 34306, 34336, 34365, 34395, 34424, 34454, 34483, 34512, 34542, 34571, 34601, 34631, 34660, 34690, 34719, 34749, 34778, 34808, 34837, 34867, 34896, 34926, 34955, 34985, 35015, 35044, 35074, 35103, 35133, 35162, 35192, 35222, 35251, 35280, 35310, 35340, 35370, 35399, 35429, 35458, 35488, 35517, 35547, 35576, 35605, 35635, 35665, 35694, 35723, 35753, 35782, 35811, 35841, 35871, 35901, 35930, 35960, 35989, 36019, 36048, 36078, 36107, 36136, 36166, 36195, 36225, 36254, 36284, 36314, 36343, 36373, 36403, 36433, 36462, 36492, 36521, 36551, 36580, 36610, 36639, 36669, 36698, 36728, 36757, 36786, 36816, 36845, 36875, 36904, 36934, 36963, 36993, 37022, 37052, 37081, 37111, 37141, 37170, 37200, 37229, 37259, 37288, 37318, 37347, 37377, 37406, 37436, 37465, 37495, 37524, 37554, 37584, 37613, 37643, 37672, 37701, 37731, 37760, 37790, 37819, 37849, 37878, 37908, 37938, 37967, 37997, 38027, 38056, 38085, 38115, 38144, 38174, 38203, 38233, 38262, 38292, 38322, 38351, 38381, 38410, 38440, 38469, 38499, 38528, 38558, 38587, 38617, 38646, 38676, 38705, 38735, 38764, 38794, 38823, 38853, 38882, 38912, 38941, 38971, 39001, 39030, 39059, 39089, 39118, 39148, 39178, 39208, 39237, 39267, 39297, 39326, 39355, 39385, 39414, 39444, 39473, 39503, 39532, 39562, 39592, 39621, 39650, 39680, 39709, 39739, 39768, 39798, 39827, 39857, 39886, 39916, 39946, 39975, 40005, 40035, 40064, 40094, 40123, 40153, 40182, 40212, 40241, 40271, 40300, 40330, 40359, 40389, 40418, 40448, 40477, 40507, 40536, 40566, 40595, 40625, 40655, 40685, 40714, 40744, 40773, 40803, 40832, 40862, 40892, 40921, 40951, 40980, 41009, 41039, 41068, 41098, 41127, 41157, 41186, 41216, 41245, 41275, 41304, 41334, 41364, 41393, 41422, 41452, 41481, 41511, 41540, 41570, 41599, 41629, 41658, 41688, 41718, 41748, 41777, 41807, 41836, 41865, 41894, 41924, 41953, 41983, 42012, 42042, 42072, 42102, 42131, 42161, 42190, 42220, 42249, 42279, 42308, 42337, 42367, 42397, 42426, 42456, 42485, 42515, 42545, 42574, 42604, 42633, 42662, 42692, 42721, 42751, 42780, 42810, 42839, 42869, 42899, 42929, 42958, 42988, 43017, 43046, 43076, 43105, 43135, 43164, 43194, 43223, 43253, 43283, 43312, 43342, 43371, 43401, 43430, 43460, 43489, 43519, 43548, 43578, 43607, 43637, 43666, 43696, 43726, 43755, 43785, 43814, 43844, 43873, 43903, 43932, 43962, 43991, 44021, 44050, 44080, 44109, 44139, 44169, 44198, 44228, 44258, 44287, 44317, 44346, 44375, 44405, 44434, 44464, 44493, 44523, 44553, 44582, 44612, 44641, 44671, 44700, 44730, 44759, 44788, 44818, 44847, 44877, 44906, 44936, 44966, 44996, 45025, 45055, 45084, 45114, 45143, 45172, 45202, 45231, 45261, 45290, 45320, 45350, 45380, 45409, 45439, 45468, 45498, 45527, 45556, 45586, 45615, 45644, 45674, 45704, 45733, 45763, 45793, 45823, 45852, 45882, 45911, 45940, 45970, 45999, 46028, 46058, 46088, 46117, 46147, 46177, 46206, 46236, 46265, 46295, 46324, 46354, 46383, 46413, 46442, 46472, 46501, 46531, 46560, 46590, 46620, 46649, 46679, 46708, 46738, 46767, 46797, 46826, 46856, 46885, 46915, 46944, 46974, 47003, 47033, 47063, 47092, 47122, 47151, 47181, 47210, 47240, 47269, 47298, 47328, 47357, 47387, 47417, 47446, 47476, 47506, 47535, 47565, 47594, 47624, 47653, 47682, 47712, 47741, 47771, 47800, 47830, 47860, 47890, 47919, 47949, 47978, 48008, 48037, 48066, 48096, 48125, 48155, 48184, 48214, 48244, 48273, 48303, 48333, 48362, 48392, 48421, 48450, 48480, 48509, 48538, 48568, 48598, 48627, 48657, 48687, 48717, 48746, 48776, 48805, 48834, 48864, 48893, 48922, 48952, 48982, 49011, 49041, 49071, 49100, 49130, 49160, 49189, 49218, 49248, 49277, 49306, 49336, 49365, 49395, 49425, 49455, 49484, 49514, 49543, 49573, 49602, 49632, 49661, 49690, 49720, 49749, 49779, 49809, 49838, 49868, 49898, 49927, 49957, 49986, 50016, 50045, 50075, 50104, 50133, 50163, 50192, 50222, 50252, 50281, 50311, 50340, 50370, 50400, 50429, 50459, 50488, 50518, 50547, 50576, 50606, 50635, 50665, 50694, 50724, 50754, 50784, 50813, 50843, 50872, 50902, 50931, 50960, 50990, 51019, 51049, 51078, 51108, 51138, 51167, 51197, 51227, 51256, 51286, 51315, 51345, 51374, 51403, 51433, 51462, 51492, 51522, 51552, 51582, 51611, 51641, 51670, 51699, 51729, 51758, 51787, 51816, 51846, 51876, 51906, 51936, 51965, 51995, 52025, 52054, 52083, 52113, 52142, 52171, 52200, 52230, 52260, 52290, 52319, 52349, 52379, 52408, 52438, 52467, 52497, 52526, 52555, 52585, 52614, 52644, 52673, 52703, 52733, 52762, 52792, 52822, 52851, 52881, 52910, 52939, 52969, 52998, 53028, 53057, 53087, 53116, 53146, 53176, 53205, 53235, 53264, 53294, 53324, 53353, 53383, 53412, 53441, 53471, 53500, 53530, 53559, 53589, 53619, 53648, 53678, 53708, 53737, 53767, 53796, 53825, 53855, 53884, 53913, 53943, 53973, 54003, 54032, 54062, 54092, 54121, 54151, 54180, 54209, 54239, 54268, 54297, 54327, 54357, 54387, 54416, 54446, 54476, 54505, 54535, 54564, 54593, 54623, 54652, 54681, 54711, 54741, 54770, 54800, 54830, 54859, 54889, 54919, 54948, 54977, 55007, 55036, 55066, 55095, 55125, 55154, 55184, 55213, 55243, 55273, 55302, 55332, 55361, 55391, 55420, 55450, 55479, 55508, 55538, 55567, 55597, 55627, 55657, 55686, 55716, 55745, 55775, 55804, 55834, 55863, 55892, 55922, 55951, 55981, 56011, 56040, 56070, 56100, 56129, 56159, 56188, 56218, 56247, 56276, 56306, 56335, 56365, 56394, 56424, 56454, 56483, 56513, 56543, 56572, 56601, 56631, 56660, 56690, 56719, 56749, 56778, 56808, 56837, 56867, 56897, 56926, 56956, 56985, 57015, 57044, 57074, 57103, 57133, 57162, 57192, 57221, 57251, 57280, 57310, 57340, 57369, 57399, 57429, 57458, 57487, 57517, 57546, 57576, 57605, 57634, 57664, 57694, 57723, 57753, 57783, 57813, 57842, 57871, 57901, 57930, 57959, 57989, 58018, 58048, 58077, 58107, 58137, 58167, 58196, 58226, 58255, 58285, 58314, 58343, 58373, 58402, 58432, 58461, 58491, 58521, 58551, 58580, 58610, 58639, 58669, 58698, 58727, 58757, 58786, 58816, 58845, 58875, 58905, 58934, 58964, 58994, 59023, 59053, 59082, 59111, 59141, 59170, 59200, 59229, 59259, 59288, 59318, 59348, 59377, 59407, 59436, 59466, 59495, 59525, 59554, 59584, 59613, 59643, 59672, 59702, 59731, 59761, 59791, 59820, 59850, 59879, 59909, 59939, 59968, 59997, 60027, 60056, 60086, 60115, 60145, 60174, 60204, 60234, 60264, 60293, 60323, 60352, 60381, 60411, 60440, 60469, 60499, 60528, 60558, 60588, 60618, 60648, 60677, 60707, 60736, 60765, 60795, 60824, 60853, 60883, 60912, 60942, 60972, 61002, 61031, 61061, 61090, 61120, 61149, 61179, 61208, 61237, 61267, 61296, 61326, 61356, 61385, 61415, 61445, 61474, 61504, 61533, 61563, 61592, 61621, 61651, 61680, 61710, 61739, 61769, 61799, 61828, 61858, 61888, 61917, 61947, 61976, 62006, 62035, 62064, 62094, 62123, 62153, 62182, 62212, 62242, 62271, 62301, 62331, 62360, 62390, 62419, 62448, 62478, 62507, 62537, 62566, 62596, 62625, 62655, 62685, 62715, 62744, 62774, 62803, 62832, 62862, 62891, 62921, 62950, 62980, 63009, 63039, 63069, 63099, 63128, 63157, 63187, 63216, 63246, 63275, 63305, 63334, 63363, 63393, 63423, 63453, 63482, 63512, 63541, 63571, 63600, 63630, 63659, 63689, 63718, 63747, 63777, 63807, 63836, 63866, 63895, 63925, 63955, 63984, 64014, 64043, 64073, 64102, 64131, 64161, 64190, 64220, 64249, 64279, 64309, 64339, 64368, 64398, 64427, 64457, 64486, 64515, 64545, 64574, 64603, 64633, 64663, 64692, 64722, 64752, 64782, 64811, 64841, 64870, 64899, 64929, 64958, 64987, 65017, 65047, 65076, 65106, 65136, 65166, 65195, 65225, 65254, 65283, 65313, 65342, 65371, 65401, 65431, 65460, 65490, 65520, 65549, 65579, 65608, 65638, 65667, 65697, 65726, 65755, 65785, 65815, 65844, 65874, 65903, 65933, 65963, 65992, 66022, 66051, 66081, 66110, 66140, 66169, 66199, 66228, 66258, 66287, 66317, 66346, 66376, 66405, 66435, 66465, 66494, 66524, 66553, 66583, 66612, 66641, 66671, 66700, 66730, 66760, 66789, 66819, 66849, 66878, 66908, 66937, 66967, 66996, 67025, 67055, 67084, 67114, 67143, 67173, 67203, 67233, 67262, 67292, 67321, 67351, 67380, 67409, 67439, 67468, 67497, 67527, 67557, 67587, 67617, 67646, 67676, 67705, 67735, 67764, 67793, 67823, 67852, 67882, 67911, 67941, 67971, 68000, 68030, 68060, 68089, 68119, 68148, 68177, 68207, 68236, 68266, 68295, 68325, 68354, 68384, 68414, 68443, 68473, 68502, 68532, 68561, 68591, 68620, 68650, 68679, 68708, 68738, 68768, 68797, 68827, 68857, 68886, 68916, 68946, 68975, 69004, 69034, 69063, 69092, 69122, 69152, 69181, 69211, 69240, 69270, 69300, 69330, 69359, 69388, 69418, 69447, 69476, 69506, 69535, 69565, 69595, 69624, 69654, 69684, 69713, 69743, 69772, 69802, 69831, 69861, 69890, 69919, 69949, 69978, 70008, 70038, 70067, 70097, 70126, 70156, 70186, 70215, 70245, 70274, 70303, 70333, 70362, 70392, 70421, 70451, 70481, 70510, 70540, 70570, 70599, 70629, 70658, 70687, 70717, 70746, 70776, 70805, 70835, 70864, 70894, 70924, 70954, 70983, 71013, 71042, 71071, 71101, 71130, 71159, 71189, 71218, 71248, 71278, 71308, 71337, 71367, 71397, 71426, 71455, 71485, 71514, 71543, 71573, 71602, 71632, 71662, 71691, 71721, 71751, 71781, 71810, 71839, 71869, 71898, 71927, 71957, 71986, 72016, 72046, 72075, 72105, 72135, 72164, 72194, 72223, 72253, 72282, 72311, 72341, 72370, 72400, 72429, 72459, 72489, 72518, 72548, 72577, 72607, 72637, 72666, 72695, 72725, 72754, 72784, 72813, 72843, 72872, 72902, 72931, 72961, 72991, 73020, 73050, 73080, 73109, 73139, 73168, 73197, 73227, 73256, 73286, 73315, 73345, 73375, 73404, 73434, 73464, 73493, 73523, 73552, 73581, 73611, 73640, 73669, 73699, 73729, 73758, 73788, 73818, 73848, 73877, 73907, 73936, 73965, 73995, 74024, 74053, 74083, 74113, 74142, 74172, 74202, 74231, 74261, 74291, 74320, 74349, 74379, 74408, 74437, 74467, 74497, 74526, 74556, 74586, 74615, 74645, 74675, 74704, 74733, 74763, 74792, 74822, 74851, 74881, 74910, 74940, 74969, 74999, 75029, 75058, 75088, 75117, 75147, 75176, 75206, 75235, 75264, 75294, 75323, 75353, 75383, 75412, 75442, 75472, 75501, 75531, 75560, 75590, 75619, 75648, 75678, 75707, 75737, 75766, 75796, 75826, 75856, 75885, 75915, 75944, 75974, 76003, 76032, 76062, 76091, 76121, 76150, 76180, 76210, 76239, 76269, 76299, 76328, 76358, 76387, 76416, 76446, 76475, 76505, 76534, 76564, 76593, 76623, 76653, 76682, 76712, 76741, 76771, 76801, 76830, 76859, 76889, 76918, 76948, 76977, 77007, 77036, 77066, 77096, 77125, 77155, 77185, 77214, 77243, 77273, 77302, 77332, 77361, 77390, 77420, 77450, 77479, 77509, 77539, 77569, 77598, 77627, 77657, 77686, 77715, 77745, 77774, 77804, 77833, 77863, 77893, 77923, 77952, 77982, 78011, 78041, 78070, 78099, 78129, 78158, 78188, 78217, 78247, 78277, 78307, 78336, 78366, 78395, 78425, 78454, 78483, 78513, 78542, 78572, 78601, 78631, 78661, 78690, 78720, 78750, 78779, 78808, 78838, 78867, 78897, 78926, 78956, 78985, 79015, 79044, 79074, 79104, 79133, 79163, 79192, 79222, 79251, 79281, 79310, 79340, 79369, 79399, 79428, 79458, 79487, 79517, 79546, 79576, 79606, 79635, 79665, 79695, 79724, 79753, 79783, 79812, 79841, 79871, 79900, 79930, 79960, 79990]
  };
  var formattingTokens = /(\[[^\[]*\])|(\\)?i(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    parseTokenOneOrTwoDigits = /\d\d?/,
    parseTokenOneToThreeDigits = /\d{1,3}/,
    parseTokenThreeDigits = /\d{3}/,
    parseTokenFourDigits = /\d{1,4}/,
    parseTokenSixDigits = /[+\-]?\d{1,6}/,
    parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.?)|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i,
    parseTokenT = /T/i,
    parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
    unitAliases = {
      hd: 'idate',
      hm: 'imonth',
      hy: 'iyear'
    },
    formatFunctions = {},
    ordinalizeTokens = 'DDD w M D'.split(' '),
    paddedTokens = 'M D w'.split(' '),
    formatTokenFunctions = {
      iM: function iM() {
        return this.iMonth() + 1;
      },
      iMMM: function iMMM(format) {
        return this.localeData().iMonthsShort(this, format);
      },
      iMMMM: function iMMMM(format) {
        return this.localeData().iMonths(this, format);
      },
      iD: function iD() {
        return this.iDate();
      },
      iDDD: function iDDD() {
        return this.iDayOfYear();
      },
      iw: function iw() {
        return this.iWeek();
      },
      iYY: function iYY() {
        return leftZeroFill(this.iYear() % 100, 2);
      },
      iYYYY: function iYYYY() {
        return leftZeroFill(this.iYear(), 4);
      },
      iYYYYY: function iYYYYY() {
        return leftZeroFill(this.iYear(), 5);
      },
      igg: function igg() {
        return leftZeroFill(this.iWeekYear() % 100, 2);
      },
      igggg: function igggg() {
        return this.iWeekYear();
      },
      iggggg: function iggggg() {
        return leftZeroFill(this.iWeekYear(), 5);
      }
    },
    i;
  function padToken(func, count) {
    return function (a) {
      return leftZeroFill(func.call(this, a), count);
    };
  }
  function ordinalizeToken(func, period) {
    return function (a) {
      return this.localeData().ordinal(func.call(this, a), period);
    };
  }
  while (ordinalizeTokens.length) {
    i = ordinalizeTokens.pop();
    formatTokenFunctions['i' + i + 'o'] = ordinalizeToken(formatTokenFunctions['i' + i], i);
  }
  while (paddedTokens.length) {
    i = paddedTokens.pop();
    formatTokenFunctions['i' + i + i] = padToken(formatTokenFunctions['i' + i], 2);
  }
  formatTokenFunctions.iDDDD = padToken(formatTokenFunctions.iDDD, 3);

  /************************************
       Helpers
   ************************************/

  function extend(a, b) {
    var key;
    for (key in b) if (b.hasOwnProperty(key)) a[key] = b[key];
    return a;
  }
  function leftZeroFill(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) output = '0' + output;
    return output;
  }
  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  }
  function normalizeUnits(units) {
    return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units;
  }
  function setDate(moment, year, month, date) {
    var utc = moment._isUTC ? 'UTC' : '';
    moment._d['set' + utc + 'FullYear'](year);
    moment._d['set' + utc + 'Month'](month);
    moment._d['set' + utc + 'Date'](date);
  }
  function objectCreate(parent) {
    function F() {}
    F.prototype = parent;
    return new F();
  }
  function getPrototypeOf(object) {
    if (Object.getPrototypeOf) return Object.getPrototypeOf(object);else if (''.__proto__)
      // jshint ignore:line
      return object.__proto__; // jshint ignore:line
    else return object.constructor.prototype;
  }

  /************************************
       Languages
   ************************************/
  extend(getPrototypeOf(moment.localeData()), {
    _iMonths: ['Muharram', 'Safar', 'Rabi\' al-Awwal', 'Rabi\' al-Thani', 'Jumada al-Ula', 'Jumada al-Alkhirah', 'Rajab', 'Sha’ban', 'Ramadhan', 'Shawwal', 'Thul-Qi’dah', 'Thul-Hijjah'],
    iMonths: function iMonths(m) {
      return this._iMonths[m.iMonth()];
    },
    _iMonthsShort: ['Muh', 'Saf', 'Rab-I', 'Rab-II', 'Jum-I', 'Jum-II', 'Raj', 'Sha', 'Ram', 'Shw', 'Dhu-Q', 'Dhu-H'],
    iMonthsShort: function iMonthsShort(m) {
      return this._iMonthsShort[m.iMonth()];
    },
    iMonthsParse: function iMonthsParse(monthName) {
      var i, mom, regex;
      if (!this._iMonthsParse) this._iMonthsParse = [];
      for (i = 0; i < 12; i += 1) {
        // Make the regex if we don't have it already.
        if (!this._iMonthsParse[i]) {
          mom = hMoment([2000, (2 + i) % 12, 25]);
          regex = '^' + this.iMonths(mom, '') + '$|^' + this.iMonthsShort(mom, '') + '$';
          this._iMonthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // Test the regex.
        if (this._iMonthsParse[i].test(monthName)) return i;
      }
    }
  });
  var iMonthNames = {
    iMonths: 'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_'),
    iMonthsShort: 'محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_')
  };

  // Default to the momentjs 2.12+ API
  if (typeof moment.updateLocale === 'function') {
    moment.updateLocale('ar-sa', iMonthNames);
  } else {
    var oldLocale = moment.locale();
    moment.defineLocale('ar-sa', iMonthNames);
    moment.locale(oldLocale);
  }

  /************************************
       Formatting
   ************************************/

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
      length = array.length,
      i;
    for (i = 0; i < length; i += 1) if (formatTokenFunctions[array[i]]) array[i] = formatTokenFunctions[array[i]];
    return function (mom) {
      var output = '';
      for (i = 0; i < length; i += 1) output += array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i];
      return output;
    };
  }

  /************************************
       Parsing
   ************************************/

  function getParseRegexForToken(token, config) {
    switch (token) {
      case 'iDDDD':
        return parseTokenThreeDigits;
      case 'iYYYY':
        return parseTokenFourDigits;
      case 'iYYYYY':
        return parseTokenSixDigits;
      case 'iDDD':
        return parseTokenOneToThreeDigits;
      case 'iMMM':
      case 'iMMMM':
        return parseTokenWord;
      case 'iMM':
      case 'iDD':
      case 'iYY':
      case 'iM':
      case 'iD':
        return parseTokenOneOrTwoDigits;
      case 'DDDD':
        return parseTokenThreeDigits;
      case 'YYYY':
        return parseTokenFourDigits;
      case 'YYYYY':
        return parseTokenSixDigits;
      case 'S':
      case 'SS':
      case 'SSS':
      case 'DDD':
        return parseTokenOneToThreeDigits;
      case 'MMM':
      case 'MMMM':
      case 'dd':
      case 'ddd':
      case 'dddd':
        return parseTokenWord;
      case 'a':
      case 'A':
        return moment.localeData(config._l)._meridiemParse;
      case 'X':
        return parseTokenTimestampMs;
      case 'Z':
      case 'ZZ':
        return parseTokenTimezone;
      case 'T':
        return parseTokenT;
      case 'MM':
      case 'DD':
      case 'YY':
      case 'HH':
      case 'hh':
      case 'mm':
      case 'ss':
      case 'M':
      case 'D':
      case 'd':
      case 'H':
      case 'h':
      case 'm':
      case 's':
        return parseTokenOneOrTwoDigits;
      default:
        return new RegExp(token.replace('\\', ''));
    }
  }
  function addTimeToArrayFromToken(token, input, config) {
    var a,
      datePartArray = config._a;
    switch (token) {
      case 'iM':
      case 'iMM':
        datePartArray[1] = input == null ? 0 : ~~input - 1;
        break;
      case 'iMMM':
      case 'iMMMM':
        a = moment.localeData(config._l).iMonthsParse(input);
        if (a != null) datePartArray[1] = a;else config._isValid = false;
        break;
      case 'iD':
      case 'iDD':
      case 'iDDD':
      case 'iDDDD':
        if (input != null) datePartArray[2] = ~~input;
        break;
      case 'iYY':
        datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400);
        break;
      case 'iYYYY':
      case 'iYYYYY':
        datePartArray[0] = ~~input;
    }
    if (input == null) config._isValid = false;
  }
  function dateFromArray(config) {
    var g,
      h,
      hy = config._a[0],
      hm = config._a[1],
      hd = config._a[2];
    if (hy == null && hm == null && hd == null) return [0, 0, 1];
    hy = hy || 0;
    hm = hm || 0;
    hd = hd || 1;
    if (hd < 1 || hd > hMoment.iDaysInMonth(hy, hm)) config._isValid = false;
    g = toGregorian(hy, hm, hd);
    h = toHijri(g.gy, g.gm, g.gd);
    config._hDiff = 0;
    if (~~h.hy !== hy) config._hDiff += 1;
    if (~~h.hm !== hm) config._hDiff += 1;
    if (~~h.hd !== hd) config._hDiff += 1;
    return [g.gy, g.gm, g.gd];
  }
  function makeDateFromStringAndFormat(config) {
    var tokens = config._f.match(formattingTokens),
      string = config._i,
      len = tokens.length,
      i,
      token,
      parsedInput;
    config._a = [];
    for (i = 0; i < len; i += 1) {
      token = tokens[i];
      parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
      if (parsedInput) string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
      if (formatTokenFunctions[token]) addTimeToArrayFromToken(token, parsedInput, config);
    }
    if (string) config._il = string;
    return dateFromArray(config);
  }
  function makeDateFromStringAndArray(config, utc) {
    var len = config._f.length,
      i,
      format,
      tempMoment,
      bestMoment,
      currentScore,
      scoreToBeat;
    if (len === 0) {
      return makeMoment(new Date(NaN));
    }
    for (i = 0; i < len; i += 1) {
      format = config._f[i];
      currentScore = 0;
      tempMoment = makeMoment(config._i, format, config._l, utc);
      if (!tempMoment.isValid()) continue;
      currentScore += tempMoment._hDiff;
      if (tempMoment._il) currentScore += tempMoment._il.length;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempMoment;
      }
    }
    return bestMoment;
  }
  function removeParsedTokens(config) {
    var string = config._i,
      input = '',
      format = '',
      array = config._f.match(formattingTokens),
      len = array.length,
      i,
      match,
      parsed;
    for (i = 0; i < len; i += 1) {
      match = array[i];
      parsed = (getParseRegexForToken(match, config).exec(string) || [])[0];
      if (parsed) string = string.slice(string.indexOf(parsed) + parsed.length);
      if (!(formatTokenFunctions[match] instanceof Function)) {
        format += match;
        if (parsed) input += parsed;
      }
    }
    config._i = input;
    config._f = format;
  }

  /************************************
       Week of Year
   ************************************/

  function iWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek,
      daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
      adjustedMoment;
    if (daysToDayOfWeek > end) {
      daysToDayOfWeek -= 7;
    }
    if (daysToDayOfWeek < end - 7) {
      daysToDayOfWeek += 7;
    }
    adjustedMoment = hMoment(mom).add(daysToDayOfWeek, 'd');
    return {
      week: Math.ceil(adjustedMoment.iDayOfYear() / 7),
      year: adjustedMoment.iYear()
    };
  }

  /************************************
       Top Level Functions
   ************************************/

  function makeMoment(input, format, lang, utc) {
    var config = {
        _i: input,
        _f: format,
        _l: lang
      },
      date,
      m,
      hm;
    if (format) {
      if (isArray(format)) {
        return makeDateFromStringAndArray(config, utc);
      } else {
        date = makeDateFromStringAndFormat(config);
        removeParsedTokens(config);
        format = 'YYYY-MM-DD-' + config._f;
        input = leftZeroFill(date[0], 4) + '-' + leftZeroFill(date[1] + 1, 2) + '-' + leftZeroFill(date[2], 2) + '-' + config._i;
      }
    }
    if (utc) m = moment.utc(input, format, lang);else m = moment(input, format, lang);
    if (config._isValid === false) m._isValid = false;
    m._hDiff = config._hDiff || 0;
    hm = objectCreate(hMoment.fn);
    extend(hm, m);
    return hm;
  }
  function hMoment(input, format, lang) {
    return makeMoment(input, format, lang, false);
  }
  extend(hMoment, moment);
  hMoment.fn = objectCreate(moment.fn);
  hMoment.utc = function (input, format, lang) {
    return makeMoment(input, format, lang, true);
  };

  /************************************
       hMoment Prototype
   ************************************/

  hMoment.fn.format = function (format) {
    var i,
      replace,
      me = this;
    if (format) {
      i = 5;
      replace = function replace(input) {
        return me.localeData().longDateFormat(input) || input;
      };
      while (i > 0 && localFormattingTokens.test(format)) {
        i -= 1;
        format = format.replace(localFormattingTokens, replace);
      }
      if (!formatFunctions[format]) {
        formatFunctions[format] = makeFormatFunction(format);
      }
      format = formatFunctions[format](this);
    }
    return moment.fn.format.call(this, format);
  };
  hMoment.fn.iYear = function (input) {
    var lastDay, h, g;
    if (typeof input === 'number') {
      h = toHijri(this.year(), this.month(), this.date());
      lastDay = Math.min(h.hd, hMoment.iDaysInMonth(input, h.hm));
      g = toGregorian(input, h.hm, lastDay);
      setDate(this, g.gy, g.gm, g.gd);
      //Workaround: sometimes moment wont set the date correctly if current day is the last in the month
      if (this.month() !== g.gm || this.date() !== g.gd || this.year() !== g.gy) {
        setDate(this, g.gy, g.gm, g.gd);
      }
      moment.updateOffset(this);
      return this;
    } else {
      return toHijri(this.year(), this.month(), this.date()).hy;
    }
  };
  hMoment.fn.iMonth = function (input) {
    var lastDay, h, g;
    if (input != null) {
      if (typeof input === 'string') {
        input = this.localeData().iMonthsParse(input);
        if (input >= 0) {
          input -= 1;
        } else {
          return this;
        }
      }
      h = toHijri(this.year(), this.month(), this.date());
      lastDay = Math.min(h.hd, hMoment.iDaysInMonth(h.hy, input));
      this.iYear(h.hy + div(input, 12));
      input = mod(input, 12);
      if (input < 0) {
        input += 12;
        this.iYear(this.iYear() - 1);
      }
      g = toGregorian(this.iYear(), input, lastDay);
      setDate(this, g.gy, g.gm, g.gd);
      //Workaround: sometimes moment wont set the date correctly if current day is the last in the month
      if (this.month() !== g.gm || this.date() !== g.gd || this.year() !== g.gy) {
        setDate(this, g.gy, g.gm, g.gd);
      }
      moment.updateOffset(this);
      return this;
    } else {
      return toHijri(this.year(), this.month(), this.date()).hm;
    }
  };
  hMoment.fn.iDate = function (input) {
    var h, g;
    if (typeof input === 'number') {
      h = toHijri(this.year(), this.month(), this.date());
      g = toGregorian(h.hy, h.hm, input);
      setDate(this, g.gy, g.gm, g.gd);
      //Workaround: sometimes moment wont set the date correctly if current day is the last in the month
      if (this.month() !== g.gm || this.date() !== g.gd || this.year() !== g.gy) {
        setDate(this, g.gy, g.gm, g.gd);
      }
      moment.updateOffset(this);
      return this;
    } else {
      return toHijri(this.year(), this.month(), this.date()).hd;
    }
  };
  hMoment.fn.iDayOfYear = function (input) {
    var dayOfYear = Math.round((hMoment(this).startOf('day') - hMoment(this).startOf('iYear')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  };
  hMoment.fn.iDaysInMonth = function () {
    return parseInt(hMoment(this).endOf('iMonth').format('iDD'));
  };
  hMoment.fn.iWeek = function (input) {
    var week = iWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  };
  hMoment.fn.iWeekYear = function (input) {
    var year = iWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return input == null ? year : this.add(input - year, 'y');
  };
  hMoment.fn.add = function (val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
      temp = val;
      val = units;
      units = temp;
    }
    units = normalizeUnits(units);
    if (units === 'iyear') {
      this.iYear(this.iYear() + val);
    } else if (units === 'imonth') {
      this.iMonth(this.iMonth() + val);
    } else if (units === 'idate') {
      this.iDate(this.iDate() + val);
    } else {
      moment.fn.add.call(this, val, units);
    }
    return this;
  };
  hMoment.fn.subtract = function (val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
      temp = val;
      val = units;
      units = temp;
    }
    units = normalizeUnits(units);
    if (units === 'iyear') {
      this.iYear(this.iYear() - val);
    } else if (units === 'imonth') {
      this.iMonth(this.iMonth() - val);
    } else if (units === 'idate') {
      this.iDate(this.iDate() - val);
    } else {
      moment.fn.subtract.call(this, val, units);
    }
    return this;
  };
  hMoment.fn.startOf = function (units) {
    units = normalizeUnits(units);
    if (units === 'iyear' || units === 'imonth') {
      if (units === 'iyear') {
        this.iMonth(0);
      }
      this.iDate(1);
      this.hours(0);
      this.minutes(0);
      this.seconds(0);
      this.milliseconds(0);
      return this;
    } else {
      return moment.fn.startOf.call(this, units);
    }
  };
  hMoment.fn.endOf = function (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'milisecond') {
      return this;
    }
    return this.startOf(units).add(1, units === 'isoweek' ? 'week' : units).subtract(1, 'milliseconds');
  };
  hMoment.fn.clone = function () {
    return hMoment(this);
  };
  hMoment.fn.iYears = hMoment.fn.iYear;
  hMoment.fn.iMonths = hMoment.fn.iMonth;
  hMoment.fn.iDates = hMoment.fn.iDate;
  hMoment.fn.iWeeks = hMoment.fn.iWeek;

  /************************************
       hMoment Statics
   ************************************/

  hMoment.iDaysInMonth = function (year, month) {
    var i = getNewMoonMJDNIndex(year, month + 1),
      daysInMonth = ummalqura.ummalquraData[i] - ummalqura.ummalquraData[i - 1];
    return daysInMonth;
  };
  function toHijri(gy, gm, gd) {
    var h = d2h(g2d(gy, gm + 1, gd));
    h.hm -= 1;
    return h;
  }
  function toGregorian(hy, hm, hd) {
    var g = d2g(h2d(hy, hm + 1, hd));
    g.gm -= 1;
    return g;
  }
  hMoment.iConvert = {
    toHijri: toHijri,
    toGregorian: toGregorian
  };
  return hMoment;

  /************************************
       Hijri Conversion
   ************************************/

  /*
     Utility helper functions.
   */

  function div(a, b) {
    return ~~(a / b);
  }
  function mod(a, b) {
    return a - ~~(a / b) * b;
  }

  /*
     Converts a date of the Hijri calendar to the Julian Day number.
  
     @param hy Hijri year (1356 to 1500)
     @param hm Hijri month (1 to 12)
     @param hd Hijri day (1 to 29/30)
     @return Julian Day number
   */

  function h2d(hy, hm, hd) {
    var i = getNewMoonMJDNIndex(hy, hm),
      mjdn = hd + ummalqura.ummalquraData[i - 1] - 1,
      jdn = mjdn + 2400000;
    return jdn;
  }

  /*
     Converts the Julian Day number to a date in the Hijri calendar.
  
     @param jdn Julian Day number
     @return
       hy: Hijri year (1356 to 1500)
       hm: Hijri month (1 to 12)
       hd: Hijri day (1 to 29/30)
   */

  function d2h(jdn) {
    var mjdn = jdn - 2400000,
      i = getNewMoonMJDNIndexByJDN(mjdn),
      totalMonths = i + 16260,
      cYears = Math.floor((totalMonths - 1) / 12),
      hy = cYears + 1,
      hm = totalMonths - 12 * cYears,
      hd = mjdn - ummalqura.ummalquraData[i - 1] + 1;
    return {
      hy: hy,
      hm: hm,
      hd: hd
    };
  }

  /*
     Calculates the Julian Day number from Gregorian or Julian
     calendar dates. This integer number corresponds to the noon of
     the date (i.e. 12 hours of Universal Time).
     The procedure was tested to be good since 1 March, -100100 (of both
     calendars) up to a few million years into the future.
  
     @param gy Calendar year (years BC numbered 0, -1, -2, ...)
     @param gm Calendar month (1 to 12)
     @param gd Calendar day of the month (1 to 28/29/30/31)
     @return Julian Day number
   */

  function g2d(gy, gm, gd) {
    var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
  }

  /*
     Calculates Gregorian and Julian calendar dates from the Julian Day number
     (hdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
     calendars) to some millions years ahead of the present.
  
     @param jdn Julian Day number
     @return
       gy: Calendar year (years BC numbered 0, -1, -2, ...)
       gm: Calendar month (1 to 12)
       gd: Calendar day of the month M (1 to 28/29/30/31)
   */

  function d2g(jdn) {
    var j, i, gd, gm, gy;
    j = 4 * jdn + 139361631;
    j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    i = div(mod(j, 1461), 4) * 5 + 308;
    gd = div(mod(i, 153), 5) + 1;
    gm = mod(div(i, 153), 12) + 1;
    gy = div(j, 1461) - 100100 + div(8 - gm, 6);
    return {
      gy: gy,
      gm: gm,
      gd: gd
    };
  }

  /*
     Returns the index of the modified Julian day number of the new moon
     by the given year and month
  
     @param hy: Hijri year (1356 to 1500)
     @param hm: Hijri month (1 to 12)
     @return
         i: the index of the new moon in modified Julian day number.
   */
  function getNewMoonMJDNIndex(hy, hm) {
    var cYears = hy - 1,
      totalMonths = cYears * 12 + 1 + (hm - 1),
      i = totalMonths - 16260;
    return i;
  }

  /*
     Returns the nearest new moon
  
     @param jdn Julian Day number
     @return
       i: the index of a modified Julian day number.
   */
  function getNewMoonMJDNIndexByJDN(mjdn) {
    for (var i = 0; i < ummalqura.ummalquraData.length; i = i + 1) {
      if (ummalqura.ummalquraData[i] > mjdn) return i;
    }
  }
});

/***/ }),

/***/ 2118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
// EXTERNAL MODULE: ./node_modules/moment-hijri/moment-hijri.js
var moment_hijri = __webpack_require__(1856);
var moment_hijri_default = /*#__PURE__*/__webpack_require__.n(moment_hijri);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment_moment = __webpack_require__(119);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment_moment);

// CONCATENATED MODULE: ./node_modules/@date-io/moment/build/index.esm.js

var index_esm_MomentUtils = /** @class */function () {
  function MomentUtils(_a) {
    var _b = _a === void 0 ? {} : _a,
      locale = _b.locale,
      instance = _b.instance,
      moment = _b.moment;
    this.yearFormat = "YYYY";
    this.yearMonthFormat = "MMMM YYYY";
    this.dateTime12hFormat = "MMMM Do hh:mm a";
    this.dateTime24hFormat = "MMMM Do HH:mm";
    this.time12hFormat = "hh:mm A";
    this.time24hFormat = "HH:mm";
    this.dateFormat = "MMMM Do";
    this.moment = instance || moment || moment_default.a;
    this.locale = locale;
  }
  MomentUtils.prototype.parse = function (value, format) {
    if (value === "") {
      return null;
    }
    return this.moment(value, format, true);
  };
  MomentUtils.prototype.date = function (value) {
    if (value === null) {
      return null;
    }
    var moment = this.moment(value);
    moment.locale(this.locale);
    return moment;
  };
  MomentUtils.prototype.isValid = function (value) {
    return this.moment(value).isValid();
  };
  MomentUtils.prototype.isNull = function (date) {
    return date === null;
  };
  MomentUtils.prototype.getDiff = function (date, comparing) {
    return date.diff(comparing);
  };
  MomentUtils.prototype.isAfter = function (date, value) {
    return date.isAfter(value);
  };
  MomentUtils.prototype.isBefore = function (date, value) {
    return date.isBefore(value);
  };
  MomentUtils.prototype.isAfterDay = function (date, value) {
    return date.isAfter(value, "day");
  };
  MomentUtils.prototype.isBeforeDay = function (date, value) {
    return date.isBefore(value, "day");
  };
  MomentUtils.prototype.isBeforeYear = function (date, value) {
    return date.isBefore(value, "year");
  };
  MomentUtils.prototype.isAfterYear = function (date, value) {
    return date.isAfter(value, "year");
  };
  MomentUtils.prototype.startOfDay = function (date) {
    return date.clone().startOf("day");
  };
  MomentUtils.prototype.endOfDay = function (date) {
    return date.clone().endOf("day");
  };
  MomentUtils.prototype.format = function (date, formatString) {
    date.locale(this.locale);
    return date.format(formatString);
  };
  MomentUtils.prototype.formatNumber = function (numberToFormat) {
    return numberToFormat;
  };
  MomentUtils.prototype.getHours = function (date) {
    return date.get("hours");
  };
  MomentUtils.prototype.addDays = function (date, count) {
    return count < 0 ? date.clone().subtract(Math.abs(count), "days") : date.clone().add(count, "days");
  };
  MomentUtils.prototype.setHours = function (date, count) {
    return date.clone().hours(count);
  };
  MomentUtils.prototype.getMinutes = function (date) {
    return date.get("minutes");
  };
  MomentUtils.prototype.setMinutes = function (date, count) {
    return date.clone().minutes(count);
  };
  MomentUtils.prototype.getSeconds = function (date) {
    return date.get("seconds");
  };
  MomentUtils.prototype.setSeconds = function (date, count) {
    return date.clone().seconds(count);
  };
  MomentUtils.prototype.getMonth = function (date) {
    return date.get("month");
  };
  MomentUtils.prototype.isSameDay = function (date, comparing) {
    return date.isSame(comparing, "day");
  };
  MomentUtils.prototype.isSameMonth = function (date, comparing) {
    return date.isSame(comparing, "month");
  };
  MomentUtils.prototype.isSameYear = function (date, comparing) {
    return date.isSame(comparing, "year");
  };
  MomentUtils.prototype.isSameHour = function (date, comparing) {
    return date.isSame(comparing, "hour");
  };
  MomentUtils.prototype.setMonth = function (date, count) {
    return date.clone().month(count);
  };
  MomentUtils.prototype.getMeridiemText = function (ampm) {
    return ampm === "am" ? "AM" : "PM";
  };
  MomentUtils.prototype.startOfMonth = function (date) {
    return date.clone().startOf("month");
  };
  MomentUtils.prototype.endOfMonth = function (date) {
    return date.clone().endOf("month");
  };
  MomentUtils.prototype.getNextMonth = function (date) {
    return date.clone().add(1, "month");
  };
  MomentUtils.prototype.getPreviousMonth = function (date) {
    return date.clone().subtract(1, "month");
  };
  MomentUtils.prototype.getMonthArray = function (date) {
    var firstMonth = date.clone().startOf("year");
    var monthArray = [firstMonth];
    while (monthArray.length < 12) {
      var prevMonth = monthArray[monthArray.length - 1];
      monthArray.push(this.getNextMonth(prevMonth));
    }
    return monthArray;
  };
  MomentUtils.prototype.getYear = function (date) {
    return date.get("year");
  };
  MomentUtils.prototype.setYear = function (date, year) {
    return date.clone().set("year", year);
  };
  MomentUtils.prototype.mergeDateAndTime = function (date, time) {
    return this.setMinutes(this.setHours(date, this.getHours(time)), this.getMinutes(time));
  };
  MomentUtils.prototype.getWeekdays = function () {
    return this.moment.weekdaysShort(true);
  };
  MomentUtils.prototype.isEqual = function (value, comparing) {
    if (value === null && comparing === null) {
      return true;
    }
    return this.moment(value).isSame(comparing);
  };
  MomentUtils.prototype.getWeekArray = function (date) {
    var start = date.clone().startOf("month").startOf("week");
    var end = date.clone().endOf("month").endOf("week");
    var count = 0;
    var current = start;
    var nestedWeeks = [];
    while (current.isBefore(end)) {
      var weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = current.clone().add(1, "day");
      count += 1;
    }
    return nestedWeeks;
  };
  MomentUtils.prototype.getYearRange = function (start, end) {
    var startDate = this.moment(start).startOf("year");
    var endDate = this.moment(end).endOf("year");
    var years = [];
    var current = startDate;
    while (current.isBefore(endDate)) {
      years.push(current);
      current = current.clone().add(1, "year");
    }
    return years;
  };
  // displaying methods
  MomentUtils.prototype.getCalendarHeaderText = function (date) {
    return this.format(date, this.yearMonthFormat);
  };
  MomentUtils.prototype.getYearText = function (date) {
    return this.format(date, "YYYY");
  };
  MomentUtils.prototype.getDatePickerHeaderText = function (date) {
    return this.format(date, "ddd, MMM D");
  };
  MomentUtils.prototype.getDateTimePickerHeaderText = function (date) {
    return this.format(date, "MMM D");
  };
  MomentUtils.prototype.getMonthText = function (date) {
    return this.format(date, "MMMM");
  };
  MomentUtils.prototype.getDayText = function (date) {
    return this.format(date, "D");
  };
  MomentUtils.prototype.getHourText = function (date, ampm) {
    return this.format(date, ampm ? "hh" : "HH");
  };
  MomentUtils.prototype.getMinuteText = function (date) {
    return this.format(date, "mm");
  };
  MomentUtils.prototype.getSecondText = function (date) {
    return this.format(date, "ss");
  };
  return MomentUtils;
}();
/* harmony default export */ var index_esm = (index_esm_MomentUtils);
// CONCATENATED MODULE: ./node_modules/@date-io/hijri/build/index.esm.js



var symbolMap = {
  1: "١",
  2: "٢",
  3: "٣",
  4: "٤",
  5: "٥",
  6: "٦",
  7: "٧",
  8: "٨",
  9: "٩",
  0: "٠"
};
var build_index_esm_MomentUtils = /** @class */function (_super) {
  __extends(MomentUtils, _super);
  function MomentUtils(_a) {
    var _b = _a === void 0 ? {} : _a,
      moment = _b.moment,
      instance = _b.instance;
    var _this = _super.call(this, {
      locale: "ar-SA",
      moment: moment
    }) || this;
    _this.dateTime12hFormat = "iD iMMMM hh:mm a";
    _this.dateTime24hFormat = "iD iMMMM HH:mm";
    _this.time12hFormat = "hh:mm A";
    _this.time24hFormat = "HH:mm";
    _this.dateFormat = "iD iMMMM";
    _this.moment = instance || moment || moment_hijri_default.a;
    _this.locale = "ar-SA";
    return _this;
  }
  MomentUtils.prototype.toIMoment = function (date) {
    return this.moment(date ? date.clone() : undefined).locale("ar-SA");
  };
  MomentUtils.prototype.parse = function (value, format) {
    if (value === "") {
      return null;
    }
    return this.moment(value, format, true).locale("ar-SA");
  };
  MomentUtils.prototype.date = function (value) {
    if (value === null) {
      return null;
    }
    return this.moment(value).locale("ar-SA");
  };
  MomentUtils.prototype.isBeforeYear = function (date, value) {
    return date.iYear() < value.iYear();
  };
  MomentUtils.prototype.isAfterYear = function (date, value) {
    return date.iYear() > value.iYear();
  };
  MomentUtils.prototype.getMonth = function (date) {
    return date.iMonth();
  };
  MomentUtils.prototype.startOfMonth = function (date) {
    return date.clone().startOf("iMonth");
  };
  MomentUtils.prototype.endOfMonth = function (date) {
    return date.clone().endOf("iMonth");
  };
  MomentUtils.prototype.getNextMonth = function (date) {
    return date.clone().add(1, "iMonth");
  };
  MomentUtils.prototype.getPreviousMonth = function (date) {
    return date.clone().subtract(1, "iMonth");
  };
  MomentUtils.prototype.getYear = function (date) {
    return date.iYear();
  };
  MomentUtils.prototype.setYear = function (date, year) {
    return date.clone().iYear(year);
  };
  MomentUtils.prototype.getMeridiemText = function (ampm) {
    return ampm === "am" ? this.toIMoment().hours(2).format("A") : this.toIMoment().hours(14).format("A");
  };
  MomentUtils.prototype.getWeekdays = function () {
    var _this = this;
    return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
      return _this.toIMoment().weekday(dayOfWeek).format("dd");
    });
  };
  MomentUtils.prototype.isEqual = function (value, comparing) {
    if (value === null && comparing === null) {
      return true;
    }
    return this.moment(value).isSame(comparing);
  };
  MomentUtils.prototype.formatNumber = function (num) {
    return num.replace(/\d/g, function (match) {
      return symbolMap[match];
    }).replace(/,/g, "،");
  };
  MomentUtils.prototype.getWeekArray = function (date) {
    var start = date.clone().startOf("iMonth").startOf("week");
    var end = date.clone().endOf("iMonth").endOf("week");
    var count = 0;
    var current = start;
    var nestedWeeks = [];
    while (current.isBefore(end)) {
      var weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = current.clone().add(1, "day");
      count += 1;
    }
    return nestedWeeks;
  };
  MomentUtils.prototype.getYearRange = function (start, end) {
    // moment-hijri only supports dates between 1356-01-01 H and 1499-12-29 H
    // We need to throw if outside min/max bounds, otherwise the while loop below will be infinite.
    if (start.isBefore("1937-03-14")) {
      throw new Error("min date must be on or after 1356-01-01 H (1937-03-14)");
    }
    if (end.isAfter("2076-11-26")) {
      throw new Error("max date must be on or before 1499-12-29 H (2076-11-26)");
    }
    var startDate = this.moment(start).startOf("iYear");
    var endDate = this.moment(end).endOf("iYear");
    var years = [];
    var current = startDate;
    while (current.isBefore(endDate)) {
      years.push(current);
      current = current.clone().add(1, "iYear");
    }
    return years;
  };
  // displaying methods
  MomentUtils.prototype.getCalendarHeaderText = function (date) {
    return date.format("iMMMM iYYYY");
  };
  MomentUtils.prototype.getYearText = function (date) {
    return date.format("iYYYY");
  };
  MomentUtils.prototype.getDatePickerHeaderText = function (date) {
    return date.format("dddd, iD iMMM");
  };
  MomentUtils.prototype.getDateTimePickerHeaderText = function (date) {
    return date.format("iD iMMM");
  };
  MomentUtils.prototype.getDayText = function (date) {
    return date.format("iD");
  };
  return MomentUtils;
}(index_esm);
/* harmony default export */ var build_index_esm = __webpack_exports__["a"] = (build_index_esm_MomentUtils);

/***/ }),

/***/ 2295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/ar-SA/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'أقل من ثانية واحدة',
    two: 'أقل من ثانتين',
    threeToTen: 'أقل من {{count}} ثواني',
    other: 'أقل من {{count}} ثانية'
  },
  xSeconds: {
    one: 'ثانية واحدة',
    two: 'ثانتين',
    threeToTen: '{{count}} ثواني',
    other: '{{count}} ثانية'
  },
  halfAMinute: 'نصف دقيقة',
  lessThanXMinutes: {
    one: 'أقل من دقيقة',
    two: 'أقل من دقيقتين',
    threeToTen: 'أقل من {{count}} دقائق',
    other: 'أقل من {{count}} دقيقة'
  },
  xMinutes: {
    one: 'دقيقة واحدة',
    two: 'دقيقتين',
    threeToTen: '{{count}} دقائق',
    other: '{{count}} دقيقة'
  },
  aboutXHours: {
    one: 'ساعة واحدة تقريباً',
    two: 'ساعتين تقريباً',
    threeToTen: '{{count}} ساعات تقريباً',
    other: '{{count}} ساعة تقريباً'
  },
  xHours: {
    one: 'ساعة واحدة',
    two: 'ساعتين',
    threeToTen: '{{count}} ساعات',
    other: '{{count}} ساعة'
  },
  xDays: {
    one: 'يوم واحد',
    two: 'يومين',
    threeToTen: '{{count}} أيام',
    other: '{{count}} يوم'
  },
  aboutXWeeks: {
    one: 'أسبوع واحد تقريباً',
    two: 'أسبوعين تقريباً',
    threeToTen: '{{count}} أسابيع تقريباً',
    other: '{{count}} أسبوع تقريباً'
  },
  xWeeks: {
    one: 'أسبوع واحد',
    two: 'أسبوعين',
    threeToTen: '{{count}} أسابيع',
    other: '{{count}} أسبوع'
  },
  aboutXMonths: {
    one: 'شهر واحد تقريباً',
    two: 'شهرين تقريباً',
    threeToTen: '{{count}} أشهر تقريباً',
    other: '{{count}} شهر تقريباً'
  },
  xMonths: {
    one: 'شهر واحد',
    two: 'شهرين',
    threeToTen: '{{count}} أشهر',
    other: '{{count}} شهر'
  },
  aboutXYears: {
    one: 'عام واحد تقريباً',
    two: 'عامين تقريباً',
    threeToTen: '{{count}} أعوام تقريباً',
    other: '{{count}} عام تقريباً'
  },
  xYears: {
    one: 'عام واحد',
    two: 'عامين',
    threeToTen: '{{count}} أعوام',
    other: '{{count}} عام'
  },
  overXYears: {
    one: 'أكثر من عام',
    two: 'أكثر من عامين',
    threeToTen: 'أكثر من {{count}} أعوام',
    other: 'أكثر من {{count}} عام'
  },
  almostXYears: {
    one: 'عام واحد تقريباً',
    two: 'عامين تقريباً',
    threeToTen: '{{count}} أعوام تقريباً',
    other: '{{count}} عام تقريباً'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2) {
    result = tokenValue.two;
  } else if (count <= 10) {
    result = tokenValue.threeToTen.replace('{{count}}', String(count));
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'في خلال ' + result;
    } else {
      return 'منذ ' + result;
    }
  }
  return result;
};
/* harmony default export */ var _lib_formatDistance = (formatDistance);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
var buildFormatLongFn = __webpack_require__(679);

// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/ar-SA/_lib/formatLong/index.js

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'عند' {{time}}",
  long: "{{date}} 'عند' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(buildFormatLongFn["a" /* default */])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(buildFormatLongFn["a" /* default */])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(buildFormatLongFn["a" /* default */])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ var _lib_formatLong = (formatLong);
// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/ar-SA/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'أخر' eeee 'عند' p",
  yesterday: "'أمس عند' p",
  today: "'اليوم عند' p",
  tomorrow: "'غداً عند' p",
  nextWeek: "eeee 'عند' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ var _lib_formatRelative = (formatRelative);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
var buildLocalizeFn = __webpack_require__(1304);

// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/ar-SA/_lib/localize/index.js

var eraValues = {
  narrow: ['ق', 'ب'],
  abbreviated: ['ق.م.', 'ب.م.'],
  wide: ['قبل الميلاد', 'بعد الميلاد']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ر1', 'ر2', 'ر3', 'ر4'],
  wide: ['الربع الأول', 'الربع الثاني', 'الربع الثالث', 'الربع الرابع']
};
var monthValues = {
  narrow: ['ي', 'ف', 'م', 'أ', 'م', 'ي', 'ي', 'أ', 'س', 'أ', 'ن', 'د'],
  abbreviated: ['ينا', 'فبر', 'مارس', 'أبريل', 'مايو', 'يونـ', 'يولـ', 'أغسـ', 'سبتـ', 'أكتـ', 'نوفـ', 'ديسـ'],
  wide: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
};
var dayValues = {
  narrow: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
  short: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  abbreviated: ['أحد', 'اثنـ', 'ثلا', 'أربـ', 'خميـ', 'جمعة', 'سبت'],
  wide: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
};
var dayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءاً',
    night: 'ليلاً'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءاً',
    night: 'ليلاً'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'صباحاً',
    afternoon: 'بعد الظهر',
    evening: 'مساءاً',
    night: 'ليلاً'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ص',
    pm: 'م',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'في الصباح',
    afternoon: 'بعد الظـهر',
    evening: 'في المساء',
    night: 'في الليل'
  },
  abbreviated: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'في الصباح',
    afternoon: 'بعد الظهر',
    evening: 'في المساء',
    night: 'في الليل'
  },
  wide: {
    am: 'ص',
    pm: 'م',
    midnight: 'نصف الليل',
    noon: 'ظهر',
    morning: 'صباحاً',
    afternoon: 'بعد الظـهر',
    evening: 'في المساء',
    night: 'في الليل'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  return String(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(buildLocalizeFn["a" /* default */])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(buildLocalizeFn["a" /* default */])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: Object(buildLocalizeFn["a" /* default */])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(buildLocalizeFn["a" /* default */])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(buildLocalizeFn["a" /* default */])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ var _lib_localize = (localize);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
var buildMatchFn = __webpack_require__(1306);

// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
var buildMatchPatternFn = __webpack_require__(1305);

// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/ar-SA/_lib/match/index.js


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
  wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
};
var parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ر[1234]/i,
  wide: /^الربع [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[يفمأمسند]/i,
  abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,
  wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i
};
var parseMonthPatterns = {
  narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
  any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i]
};
var matchDayPatterns = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
};
var parseDayPatterns = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: Object(buildMatchPatternFn["a" /* default */])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(buildMatchFn["a" /* default */])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(buildMatchFn["a" /* default */])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: Object(buildMatchFn["a" /* default */])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(buildMatchFn["a" /* default */])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(buildMatchFn["a" /* default */])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ var _lib_match = (match);
// CONCATENATED MODULE: ./node_modules/date-fns/esm/locale/ar-SA/index.js





/**
 * @type {Locale}
 * @category Locales
 * @summary Arabic locale (Sauid Arabic).
 * @language Arabic
 * @iso-639-2 ara
 * @author Dhaifallah Alwadani [@dalwadani]{@link https://github.com/dalwadani}
 */
var locale = {
  code: 'ar-SA',
  formatDistance: _lib_formatDistance,
  formatLong: _lib_formatLong,
  formatRelative: _lib_formatRelative,
  localize: _lib_localize,
  match: _lib_match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ var ar_SA = __webpack_exports__["a"] = (locale);

/***/ })

}]);
//# sourceMappingURL=vendors~DATEPICKER.155e65dcf62a69eaec4f.js.map