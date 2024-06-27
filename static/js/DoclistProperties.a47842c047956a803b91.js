(this["fb_mf"] = this["fb_mf"] || []).push([[17],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(77);
var _interopRequireWildcard = __webpack_require__(87);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(__webpack_require__(4));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(88));
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
}), 'CancelOutlined');
exports.default = _default;

/***/ }),

/***/ 2106:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"shade_main":"Doclist_parameter_mapping_shade_main__2NHn2","question_popup":"Doclist_parameter_mapping_question_popup__2F-vW","header":"Doclist_parameter_mapping_header__2Pajg","body":"Doclist_parameter_mapping_body__2DD0j","footer":"Doclist_parameter_mapping_footer__2rXhY"};

/***/ }),

/***/ 2302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/Properties/DoclistPropertiesJson.jsx
var DocllistPropertiesJson={Basic:{DocumentLabel:"",// "NoOfDocumentTypes" : "",
DocumentDescription:"",doclistMapping:"",AllowAutoCreation:"",DocumentTypes:"",DocumentTypeHeader:"",AddDocumentType:""},Behaviour:{Visible:"",Enable:"",Mandatory:"",ValidationMessage:""},Style:{// StylesOption: "",
// HrTag: "",
DocumentListLabel:"",DocumentListLabelFontFamily:"",DocumentListLabelFontWeightStyle:"",DocumentListLabelFontSize:"",DocumentListLabelFontColor:"",HrTagDocumentType:"",DocumentTypeLabel:"",DocumentTypeLabelFontFamily:"",DocumentTypeLabelFontWeightStyle:"",DocumentTypeLabelFontSize:"",DocumentTypeLabelFontColor:"",HrTagUploadButtonType:"",UploadButtonTypeHeader:"",ButtonsType:"",BulkUploadButton:"",DocumentButtonFontFamily:"",DocumentButtonFontSize:"",DocumentButtonFontStyle:"",DocumentButtonFontColor:"",DocumentButtonBackgroundColor:"",DocumentButtonCornerRadius:""},Display:{MobileVisible:"",TabsVisible:""},Spacing:{SpacingLeft:"",SpacingRight:"",SpacingTop:"",SpacingBottom:""},"Advance Properties":{ControlDescription:""}// Events: {
//   EventButton: "",
// },
// "Custom CSS" : {}
};/* harmony default export */ var DoclistPropertiesJson = (DocllistPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/Icons/AddColumnIcon.jsx
var AddColumnIcon = __webpack_require__(149);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Theme/ThemeJSON.js
var ThemeJSON = __webpack_require__(112);

// EXTERNAL MODULE: ./src/Icons/PrimaryButton1.jsx
var PrimaryButton1 = __webpack_require__(284);

// EXTERNAL MODULE: ./src/Icons/SecondaryButton.jsx
var SecondaryButton = __webpack_require__(285);

// EXTERNAL MODULE: ./src/axios.js
var axios = __webpack_require__(73);

// EXTERNAL MODULE: ./src/Icons/TextButton.jsx
var TextButton = __webpack_require__(286);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./src/ReusableComponents/ImageUploadBtn/ImageUploadBtn.jsx
var ImageUploadBtn = __webpack_require__(115);

// EXTERNAL MODULE: ./src/ReusableComponents/ColorPicker/ColorPicker.jsx
var ColorPicker = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(2174);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(2192);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(2230);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(2209);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(2208);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Cancel.js
var Cancel = __webpack_require__(493);
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__(2298);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(2306);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(2321);

// EXTERNAL MODULE: ./node_modules/lodash-es/without.js
var without = __webpack_require__(854);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(415);
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown);

// EXTERNAL MODULE: ./src/ReusableComponents/Tooltip/Tooltip.jsx
var Tooltip = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/ReusableComponents/MultiSelectWithGrouping/MultiSelectWithGrouping.jsx
var useStyles=Object(makeStyles["a" /* default */])(function(styleProp){return{formControl:{minWidth:function minWidth(styleProp){return styleProp.minWidth-35||120;},maxWidth:function maxWidth(styleProp){return styleProp.maxWidth-35||300;},width:function width(styleProp){return styleProp.width||"100%";}},list:{backgroundColor:"green"},input:{backgroundColor:"blue",padding:"4px"},addNewInput:{marginLeft:"28.25px"},focused:{backgroundColor:"red",border:0},select:{backgroundColor:"red"},outlined:{padding:0,paddingRight:35,"&$focused":{border:0}},iconOpen:{},root:{minWidth:function minWidth(styleProp){return styleProp.minWidth-35||120;},maxWidth:function maxWidth(styleProp){return styleProp.maxWidth-35||300;},border:function border(styleProp){return styleProp.border||"1px solid #C4C4C4 !important";},borderRadius:function borderRadius(styleProp){return styleProp.borderRadius||2;},textAlign:function textAlign(styleProp){return styleProp.textAlign||"start";},minHeight:function minHeight(styleProp){return styleProp.maxHeight||26;},background:"#FFFFFF 0% 0% no-repeat padding-box !important",opacity:1,height:"auto !important","& .MuiOutlinedInput-notchedOutline":{borderColor:"green"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"red"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:0},"& .MuiOutlinedInput-root":{"& fieldset":{border:"1px solid #C4C4C4",borderRadius:"2px"},"&:hover fieldset":{border:"1px solid #C4C4C4",borderRadius:"2px"},"&.Mui-focused fieldset":{border:"1px solid #C4C4C4",borderRadius:"2px"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"1px solid #C4C4C4"}}},chips:{display:"flex",flexWrap:"wrap"},chipRoot:{margin:4},chip:{margin:4,height:"20px",textAlign:"left",font:"normal normal normal 12px/20px Open Sans",letterSpacing:0,color:"#000000",opacity:1,borderRadius:2,"& label":{paddingLeft:-8,paddingRight:-8}},chipLabel:{paddingLeft:4,paddingRight:4},chipSizeSmall:{margin:4},listSubheaderRoot:{textAlign:"left",font:"normal normal 600 11px/20px Open Sans",letterSpacing:"0px",color:"#000000",opacity:1},notchedOutline:{border:0}};});var CustomCheckbox=Object(withStyles["a" /* default */])({root:{color:"#0072C6","&$checked":{color:"#0072C6"}},icon:{width:12,height:12,color:"#0072C6",borderRadius:"2px",opacity:1}})(function(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Checkbox["a" /* default */],Object(objectSpread2["a" /* default */])({color:"default"},props));});var CustomListSubheader=Object(withStyles["a" /* default */])({root:{textAlign:"left",font:"normal normal 600 11px/20px Open Sans",letterSpacing:"0px",color:"#000000",opacity:1,paddingLeft:"17px"}})(function(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])(ListSubheader["a" /* default */],Object(objectSpread2["a" /* default */])({},props));});var CustomListItemText=Object(withStyles["a" /* default */])({primary:{textAlign:"left",font:"normal normal normal 12px/20px Open Sans",letterSpacing:"0px",color:"#000000",opacity:1},gutters:{paddingLeft:"27px"}})(function(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])(ListItemText["a" /* default */],Object(objectSpread2["a" /* default */])({},props));});var CustomMenuItem=Object(withStyles["a" /* default */])({root:{paddingTop:"0px",paddingBottom:"0px"},gutters:{paddingLeft:"17px"},selected:{backgroundColor:"rgba(0, 0, 0, 0.00) !important"}})(function(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])(MenuItem["a" /* default */],Object(objectSpread2["a" /* default */])({},props));});function MultiSelectWithGrouping(props){var categories=props.categories;var classes=useStyles({minWidth:props.minWidth,maxWidth:props.maxWidth,border:props.border});var _useTranslation=Object(useTranslation["a" /* useTranslation */])(["styles","translation"]),t=_useTranslation.t;var _useState=Object(react["useState"])(props.initialSelected||[]),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),selectedOptions=_useState2[0],setSelectedOptions=_useState2[1];var _useState3=Object(react["useState"])([]),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),dynamicSupportedDocOptions=_useState4[0],setDynamicSupportedDocOptions=_useState4[1];var _useState5=Object(react["useState"])([]),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),dynamicAllowedFilesOptions=_useState6[0],setDynamicAllowedFilesOptions=_useState6[1];var _useState7=Object(react["useState"])([]),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),newAddedOptions=_useState8[0],setNewAddedOptions=_useState8[1];var _useState9=Object(react["useState"])(false),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),showInput=_useState10[0],setShowInput=_useState10[1];function addNew(value){var newOption=/*#__PURE__*/Object(jsx_runtime["jsxs"])(CustomMenuItem,{value:value,onKeyDown:function onKeyDown(e){return e.stopPropagation();},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomCheckbox,{checked:selectedOptions.includes(value),color:"blue"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomListItemText,{primary:value,onKeyDown:function onKeyDown(e){return e.stopPropagation();}})]},value);setDynamicSupportedDocOptions(function(prev){return[].concat(Object(toConsumableArray["a" /* default */])(prev),[newOption]);});}function handleInput(e){e.stopPropagation();var _e$target$value=e.target.value,value=_e$target$value===void 0?"":_e$target$value;if(e.keyCode===13&&value.trim()){var newOption={Title:value,value:value};var allOptions=[].concat(Object(toConsumableArray["a" /* default */])(newAddedOptions),[newOption]);setNewAddedOptions(allOptions);addNew(value);props.onChangeHandler(allOptions,"new");setShowInput(false);}}var setOptions=function setOptions(){var updatedDynamicSupportedDocOptions=[];var updatedDynamicAllowedFilesOptions=[];Object.keys(categories).forEach(function categoryFunc(categoryName,index){var _props$selectedContro,_props$selectedContro2,_props$selectedContro3,_props$selectedContro4;if(categoryName!=="DOCS"){updatedDynamicAllowedFilesOptions.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomListSubheader,{className:{root:classes.listSubheaderRoot},disabled:true,children:categoryName},categoryName));}var newlyAddedOptions=categoryName==="DOCS"?(props===null||props===void 0?void 0:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:(_props$selectedContro2=_props$selectedContro.json)===null||_props$selectedContro2===void 0?void 0:(_props$selectedContro3=_props$selectedContro2.available_doc_types)===null||_props$selectedContro3===void 0?void 0:(_props$selectedContro4=_props$selectedContro3[props===null||props===void 0?void 0:props.docIndex])===null||_props$selectedContro4===void 0?void 0:_props$selectedContro4["SupportedDocumentsinDocType_new"])||[]:[];[].concat(Object(toConsumableArray["a" /* default */])(categories[categoryName]),Object(toConsumableArray["a" /* default */])(newlyAddedOptions)).forEach(function(optionName){var newOption=/*#__PURE__*/Object(jsx_runtime["jsxs"])(CustomMenuItem,{value:optionName.value,onKeyDown:function onKeyDown(e){return e.stopPropagation();},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomCheckbox,{checked:selectedOptions.includes(optionName.value),color:"blue"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomListItemText,{primary:optionName.value,onKeyDown:function onKeyDown(e){return e.stopPropagation();}})]},optionName.value);if(categoryName!=="DOCS"){updatedDynamicAllowedFilesOptions.push(newOption);}else{updatedDynamicSupportedDocOptions.push(newOption);}});});setDynamicAllowedFilesOptions(updatedDynamicAllowedFilesOptions);setDynamicSupportedDocOptions(updatedDynamicSupportedDocOptions);};var handleChange=function handleChange(event){var _ref=event.target||[],value=_ref.value;if(value){setSelectedOptions(function(){return value.filter(function(element){return element!==undefined;});});}};var handleDelete=function handleDelete(e,value){e.preventDefault();setSelectedOptions(function(current){return Object(without["a" /* default */])(current,value);});};Object(react["useEffect"])(function(){setOptions();if(props.onChangeHandler)props.onChangeHandler(selectedOptions);return function(){};},[selectedOptions]);var downArrow=function downArrow(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])(KeyboardArrowDown_default.a,Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},props),{},{style:{top:"unset"}}));};return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:Object.keys(props.categories)[0]==="DOCS"?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classes.redBackground,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(FormControl["a" /* default */],{className:classes.formControl,variant:"outlined",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Select["a" /* default */],{labelId:props.id,id:props.id,multiple:true,value:selectedOptions,onChange:handleChange,IconComponent:downArrow,renderValue:function renderValue(selected){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classes.chips,children:selected.map(function(value){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Chip["a" /* default */],{size:"small",className:classes.chip,label:value,deleteIcon:props.deleteIcon?/*#__PURE__*/Object(jsx_runtime["jsx"])(props.deleteIcon,{onMouseDown:function onMouseDown(event){return event.stopPropagation();}}):/*#__PURE__*/Object(jsx_runtime["jsx"])(Cancel_default.a,{onMouseDown:function onMouseDown(event){return event.stopPropagation();}}),onDelete:function onDelete(e){return handleDelete(e,value);}},value);})});},classes:{root:classes.root,outlined:classes.outlined,focused:classes.focused,input:classes.input,list:classes.list,notchedOutline:classes.notchedOutline},children:[dynamicSupportedDocOptions,showInput&&/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:classes.addNewInput,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"New Option",type:"text",onKeyDown:handleInput}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:t("translation:Press hit enter key to add new option")})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.addColumnButtonDiv,onClick:function onClick(){return setShowInput(true);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.addColumnIconSpan,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(AddColumnIcon["default"],{})}),t("translation:Add New")]})]})})}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classes.redBackground,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(FormControl["a" /* default */],{className:classes.formControl,variant:"outlined",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Select["a" /* default */],{labelId:props.id,id:props.id,multiple:true,value:selectedOptions,onChange:handleChange,IconComponent:downArrow,renderValue:function renderValue(selected){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classes.chips,children:selected.map(function(value){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Chip["a" /* default */],{size:"small",className:classes.chip,label:value,deleteIcon:props.deleteIcon?/*#__PURE__*/Object(jsx_runtime["jsx"])(props.deleteIcon,{onMouseDown:function onMouseDown(event){return event.stopPropagation();}}):/*#__PURE__*/Object(jsx_runtime["jsx"])(Cancel_default.a,{onMouseDown:function onMouseDown(event){return event.stopPropagation();}}),onDelete:function onDelete(e){return handleDelete(e,value);}},value);})});},classes:{root:classes.root,outlined:classes.outlined,focused:classes.focused,input:classes.input,list:classes.list,notchedOutline:classes.notchedOutline},children:dynamicAllowedFilesOptions})})})});}
// EXTERNAL MODULE: ./src/ReusableComponents/Events/EventList.js
var EventList = __webpack_require__(125);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/Events.jsx + 20 modules
var Events = __webpack_require__(132);

// EXTERNAL MODULE: ./src/Redux/index.js
var Redux = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(2204);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js









 // Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line no-unused-expressions

Button["a" /* default */].styles;
var ButtonGroup_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      boxShadow: theme.shadows[2]
    },
    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none'
    },
    /* Pseudo-class applied to child elements if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },
    /* Styles applied to the children. */
    grouped: {
      minWidth: 40
    },
    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },
    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      '&:not(:first-child)': {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    },
    /* Styles applied to the children if `variant="text"`. */
    groupedText: {},
    /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
    groupedTextHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },
    /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
    groupedTextVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },
    /* Styles applied to the children if `variant="text"` and `color="primary"`. */
    groupedTextPrimary: {
      '&:not(:last-child)': {
        borderColor: Object(colorManipulator["a" /* alpha */])(theme.palette.primary.main, 0.5)
      }
    },
    /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
    groupedTextSecondary: {
      '&:not(:last-child)': {
        borderColor: Object(colorManipulator["a" /* alpha */])(theme.palette.secondary.main, 0.5)
      }
    },
    /* Styles applied to the children if `variant="outlined"`. */
    groupedOutlined: {},
    /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
    groupedOutlinedHorizontal: {
      '&:not(:first-child)': {
        marginLeft: -1
      },
      '&:not(:last-child)': {
        borderRightColor: 'transparent'
      }
    },
    /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
    groupedOutlinedVertical: {
      '&:not(:first-child)': {
        marginTop: -1
      },
      '&:not(:last-child)': {
        borderBottomColor: 'transparent'
      }
    },
    /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
    groupedOutlinedPrimary: {
      '&:hover': {
        borderColor: theme.palette.primary.main
      }
    },
    /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
    groupedOutlinedSecondary: {
      '&:hover': {
        borderColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the children if `variant="contained"`. */
    groupedContained: {
      boxShadow: 'none'
    },
    /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
    groupedContainedHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderRight: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },
    /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
    groupedContainedVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderBottom: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },
    /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
    groupedContainedPrimary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.primary.dark
      }
    },
    /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
    groupedContainedSecondary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.secondary.dark
      }
    }
  };
};
var ButtonGroup_ButtonGroup = /*#__PURE__*/react["forwardRef"](function ButtonGroup(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$disableElevati = props.disableElevation,
    disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
    _props$disableFocusRi = props.disableFocusRipple,
    disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
    _props$disableRipple = props.disableRipple,
    disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'outlined' : _props$variant,
    other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);
  var buttonClassName = Object(clsx_m["a" /* default */])(classes.grouped, classes["grouped".concat(Object(capitalize["a" /* default */])(orientation))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant)).concat(Object(capitalize["a" /* default */])(orientation))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant)).concat(color !== 'default' ? Object(capitalize["a" /* default */])(color) : '')], disabled && classes.disabled);
  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    role: "group",
    className: Object(clsx_m["a" /* default */])(classes.root, className, fullWidth && classes.fullWidth, disableElevation && classes.disableElevation, variant === 'contained' && classes.contained, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), react["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return null;
    }
    if (false) {}
    return /*#__PURE__*/react["cloneElement"](child, {
      className: Object(clsx_m["a" /* default */])(buttonClassName, child.props.className),
      color: child.props.color || color,
      disabled: child.props.disabled || disabled,
      disableElevation: child.props.disableElevation || disableElevation,
      disableFocusRipple: disableFocusRipple,
      disableRipple: disableRipple,
      fullWidth: fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ButtonGroup_ButtonGroup = (Object(withStyles["a" /* default */])(ButtonGroup_styles, {
  name: 'MuiButtonGroup'
})(ButtonGroup_ButtonGroup));
// EXTERNAL MODULE: ./src/ReusableComponents/Mapping/MappingFile.jsx + 2 modules
var MappingFile = __webpack_require__(120);

// EXTERNAL MODULE: ./src/Icons/ThreeDots.jsx
var ThreeDots = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/DoclistProperties/Doclist_parameter_mapping.module.css
var Doclist_parameter_mapping_module = __webpack_require__(2106);
var Doclist_parameter_mapping_module_default = /*#__PURE__*/__webpack_require__.n(Doclist_parameter_mapping_module);

// EXTERNAL MODULE: ./src/ReusableComponents/GetButtons/GetButtons.jsx
var GetButtons = __webpack_require__(243);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/DoclistProperties/Doclist_parameter_mapping.jsx
function Doclist_parameter_mapping(props){var _props$data;var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var dataObjectsContent=contexts.contexts.dataObjectsContent;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(["styles","translation"]),t=_useTranslation.t;var parameter_arr_Default=[{label:"Doc Type",value:"DocType"},{label:"Doc Name",value:"DocName"},{label:"Doc Size",value:"DocSize"},{label:"Doc Comment",value:"DocComment"},{label:"Doc Resource Type",value:"ResourceType"},{label:"Doc Index",value:"DocIndex"},{label:"No of pages",value:"NoOfPageInDoc"},{label:"Doc Control ID",value:"DocControlID"},{label:"Latitude",value:"Latitude"},{label:"Longitude",value:"Longitude"}];var _useState=Object(react["useState"])(parameter_arr_Default),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),parameter_arr=_useState2[0],setParameter_arr=_useState2[1];var _useState3=Object(react["useState"])([]),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),associatedField=_useState4[0],setAssociatedFieldKeys=_useState4[1];var _useState5=Object(react["useState"])((props===null||props===void 0?void 0:(_props$data=props.data)===null||_props$data===void 0?void 0:_props$data.mappingJson)||{DocType:"",DocName:"",DocSize:"",DocComment:"",ResourceType:"",DocIndex:"",NoOfPageInDoc:"",DocControlID:"",Latitude:"",Longitude:""}),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),savedParameter_json=_useState6[0],setSavedParameter_json=_useState6[1];function handleSavedParameterJson(key,value){setSavedParameter_json(function(prev){return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},prev),{},Object(defineProperty["a" /* default */])({},key,value));});}function handleClose(){props.handleOpen(false);}function recursionMapping(_x){return _recursionMapping.apply(this,arguments);}function _recursionMapping(){_recursionMapping=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/Object(regeneratorRuntime["a" /* default */])().mark(function _callee(contentData){var _Object$values;return Object(regeneratorRuntime["a" /* default */])().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:(_Object$values=Object.values)===null||_Object$values===void 0?void 0:_Object$values.call(Object,contentData).map(function(content){if(content!==null&&content!==void 0&&content.children&&content["children"]&&content["VariableName"]!==props.data.dataclass){recursionMapping(content["children"]);}if(content["treeName"]===props.data.dataclass||content["children"]&&content["VariableName"]===props.data.dataclass){var associatedMap=new Map();var temp=[];temp.push({VariableName:"Select"});Object.values(content["children"]).map(function(columnContent){associatedMap.set(columnContent["VariableName"],columnContent["VariableType"]);temp.push(columnContent);});setAdditionalFields(temp);}});case 1:case"end":return _context.stop();}},_callee);}));return _recursionMapping.apply(this,arguments);}function setAdditionalFields(){var dataObject=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];setAssociatedFieldKeys(dataObject);var additionalDO=[];if(dataObject.length){dataObject.forEach(function(item){if(!parameter_arr_Default.some(function(param){var _param$value,_item$VariableName;return(param===null||param===void 0?void 0:(_param$value=param.value)===null||_param$value===void 0?void 0:_param$value.toLowerCase())===(item===null||item===void 0?void 0:(_item$VariableName=item.VariableName)===null||_item$VariableName===void 0?void 0:_item$VariableName.toLowerCase());})&&item.VariableName!=="referencekey"&&item.VariableName!=="Select"&&item.VariableName!=="insertionorderid"){additionalDO.push({label:item===null||item===void 0?void 0:item.VariableName,value:item===null||item===void 0?void 0:item.VariableName});}});}setParameter_arr(function(prev){return[].concat(Object(toConsumableArray["a" /* default */])(prev),additionalDO);});}Object(react["useEffect"])(function(){recursionMapping(dataObjectsContent);},[]);function saveParamter_json(){props.saveParamter(savedParameter_json);}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:Doclist_parameter_mapping_module_default.a.shade_main}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:Doclist_parameter_mapping_module_default.a.question_popup,style:{opacity:1},children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:Doclist_parameter_mapping_module_default.a.header,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" ",t("translation:".concat("DOCUMENT_PARAMETER_MAPPING"))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{onClick:handleClose,style:{cursor:"pointer"},children:"X"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{width:"100%"})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:Doclist_parameter_mapping_module_default.a.body,children:parameter_arr.map(function(item){return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{display:"flex",justifyContent:"space-between",padding:"5px 0",alignItems:"center"},children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" ",t("translation:".concat(item.label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{value:savedParameter_json[item.value],defaultValue:savedParameter_json[item.value],onChange:function onChange(e){return handleSavedParameterJson(item.value,e.target.value);},children:associatedField===null||associatedField===void 0?void 0:associatedField.map(function(field){return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:field.VariableName,children:field.VariableName==="Select"?t("translation:".concat(field.VariableName)):field.VariableName},field.VariableName);})})]})});})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:Doclist_parameter_mapping_module_default.a.footer,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(GetButtons["b" /* DullButton */],{onClick:handleClose,children:t("translation:".concat("Cancel"))}),/*#__PURE__*/Object(jsx_runtime["jsx"])(GetButtons["a" /* BlueButton */],{onClick:saveParamter_json,children:t("translation:".concat("Save"))})]})]})]});}/* harmony default export */ var DoclistProperties_Doclist_parameter_mapping = (Doclist_parameter_mapping);
// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/RequestLogic.jsx
var RequestLogic = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CancelOutlined.js
var CancelOutlined = __webpack_require__(104);
var CancelOutlined_default = /*#__PURE__*/__webpack_require__.n(CancelOutlined);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerLogic.jsx
var IFormDesignerLogic = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(107);

// EXTERNAL MODULE: ./src/Redux/Actions/FormStateActions.js
var FormStateActions = __webpack_require__(81);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/DoclistProperties/DoclistProperties.jsx
var DoclistProperties_DoclistProperties=function DoclistProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro43,_props$selectedContro44;var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var dispatch=Object(Redux["e" /* useDispatch */])();var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,dataObjectsContent=_contexts$contexts.dataObjectsContent,setDataObjectsContent=_contexts$contexts.setDataObjectsContent,setfilteredDataObject=_contexts$contexts.setfilteredDataObject,deleteControl=_contexts$contexts.deleteControl,microFrontendData=_contexts$contexts.microFrontendData,fromQuickProps=_contexts$contexts.fromQuickProps,setfilteredDataObjectCopy=_contexts$contexts.setfilteredDataObjectCopy,filteredDataObjectCopy=_contexts$contexts.filteredDataObjectCopy,setCurrentMappedDO=_contexts$contexts.setCurrentMappedDO,childComp=_contexts$contexts.childComp,activePage=_contexts$contexts.activePage,activeSubForm=_contexts$contexts.activeSubForm,imageBaseURL=_contexts$contexts.imageBaseURL,builderMode=_contexts$contexts.builderMode,updateDataObjectAfterCreate=_contexts$contexts.updateDataObjectAfterCreate;var updatedComponentInFormState=updateJson.updatedComponentInFormState;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(["styles","translation"]),t=_useTranslation.t;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),errorMessageId=_useState2[0],setErrorMessageId=_useState2[1];var _useState3=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),alertData=_useState4[0],setAlertData=_useState4[1];var _useState5=Object(react["useState"])("min"),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),dimension=_useState6[0],setDimension=_useState6[1];var _useState7=Object(react["useState"])(false),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),mappingField=_useState8[0],setMappingField=_useState8[1];var _useState9=Object(react["useState"])(false),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),openDoclist_parameter_mapping=_useState10[0],setOpenDoclist_parameter_mapping=_useState10[1];var _useState11=Object(react["useState"])([]),_useState12=Object(slicedToArray["a" /* default */])(_useState11,2),associatedField=_useState12[0],setAssociatedField=_useState12[1];var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.appformBuilder_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.appformBuilder_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var _useState13=Object(react["useState"])([]),_useState14=Object(slicedToArray["a" /* default */])(_useState13,2),defaultMappingDOOption=_useState14[0],setDefaultMappingDOOption=_useState14[1];Object(react["useEffect"])(function(){if(fromQuickProps)setMappingField(true);},[fromQuickProps]);function handleCombo(comboId,docIndex){var select=document.getElementById(comboId);var propertyName=select.getAttribute("name");var optionTag=select.options[select.selectedIndex];if(propertyName==="DocumentListLabelFontWeightStyle"||propertyName==="DocumentTypeLabelFontWeightStyle"){var styleKey="";var weightKey="";if(propertyName==="DocumentListLabelFontWeightStyle"){weightKey="DocumentListLabelFontWeight";styleKey="DocumentListLabelFontStyle";}else if(propertyName==="DocumentTypeLabelFontWeightStyle"){weightKey="DocumentTypeLabelFontWeight";styleKey="DocumentTypeLabelFontStyle";}if(optionTag.value==="Bold Italic"){_handleProperty(weightKey,"Bold",docIndex);_handleProperty(styleKey,"Italic",docIndex);}else if(optionTag.value==="Bold"){_handleProperty(weightKey,optionTag.value,docIndex);_handleProperty(styleKey,"Normal",docIndex);}else if(optionTag.value==="Italic"||optionTag.value==="Normal"){_handleProperty(weightKey,"Normal",docIndex);_handleProperty(styleKey,optionTag.value,docIndex);}else if(optionTag.value==="Select"){_handleProperty(weightKey,"Select",docIndex,true);_handleProperty(styleKey,"Select",docIndex,true);}}if(propertyName==="AllowAutoCreationDO"){if(optionTag.value){var formId=Object(IFormDesignerLogic["s" /* getFormId */])();var jsonToSend={formId:formId.toString(),applicationId:microFrontendData===null||microFrontendData===void 0?void 0:microFrontendData.applicationId,tableName:optionTag.value,controlId:props.selectedControl.id};axios["a" /* default */].post("/idesign/createDoclist",jsonToSend).then(function(res){if(res.data.status==="0"){var newObjectName="".concat(jsonToSend.tableName,".").concat(res.data.doclistname);props.selectedControl.dataclass=newObjectName;// got from backend
props.selectedControl.datamapid=res.data.doclistId;// got from backend
props.selectedControl.datamapVariableType="0";props.selectedControl.datamapPercision="0";props.selectedControl.datamapVariableLength="0";props.selectedControl.unBounded="Y";props.selectedControl.dataObjectType="M";props.selectedControl.style.Mapping=newObjectName;// got from backend
props.selectedControl.style.MappingId=newObjectName;// got from backend
props.selectedControl.style[propertyName]=optionTag.value;// got from backend
dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updateDataObjectAfterCreate(dataObjectsContent,optionTag.value,res.data.dataObject);setDataObjectsContent(dataObjectsContent);setfilteredDataObject(dataObjectsContent);setfilteredDataObjectCopy(dataObjectsContent);updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}else{setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentMsg:"Failed to create default data object."});}}).catch(function(){setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentMsg:"Failed to create default data object."});});}else{props.selectedControl.dataclass=undefined;// got from backend
props.selectedControl.datamapid=undefined;// got from backend
props.selectedControl.datamapVariableType=undefined;props.selectedControl.datamapPercision=undefined;props.selectedControl.datamapVariableLength=undefined;props.selectedControl.unBounded=undefined;props.selectedControl.dataObjectType=undefined;props.selectedControl.style.Mapping=undefined;// got from backend
props.selectedControl.style.MappingId=undefined;// got from backend
props.selectedControl.style[propertyName]=optionTag.value;// got from backend
dispatch(Object(FormStateActions["d" /* updateFormStateContextWithoutRender */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}}else{_handleProperty(propertyName,optionTag.value,docIndex,true);}}var _updateEventData=function updateEventData(eventJson){var count=Object.keys(eventJson).length;if(count>0){var _Events={};_Events["Events"]=eventJson;props.selectedControl["event"]=_Events;}dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updatedComponentInFormState(props.selectedControl.id,props.selectedControl);};function handleMultiSelect(propertyName,docIndex,selectedValues){_handleProperty(propertyName,selectedValues,docIndex);}function _handleProperty(propertyName,propertyValue,docIndex,isCombo){if(docIndex>=0){handleDocProperty(propertyName,propertyValue,docIndex);}else{try{props.selectedControl.style[propertyName]=propertyValue;if(propertyName==="DocumentLabel")props.selectedControl.style["Label"]=propertyValue;if(propertyName==="Enable"){props.selectedControl.style["previousEnable"]=propertyValue;}dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updatedComponentInFormState(props.selectedControl.id,props.selectedControl);props.applyChanges(props.formData);setErrorMessageId(false);}catch(e){console.log(e);}}}function validateRegex(propertyName,propertyValue,event,inputBoxId){try{var passValue=event===null||event===void 0?void 0:event.key;if(propertyName==="CustomId"){if(event.target.selectionEnd===event.target.selectionStart){passValue=[propertyValue.slice(0,event.target.selectionEnd)+event.key+propertyValue.slice(event.target.selectionEnd)].join("");}else{var stringArray=propertyValue.split("");stringArray.splice(event.target.selectionStart,event.target.selectionEnd-event.target.selectionStart);stringArray.splice.apply(stringArray,[event.target.selectionStart,0].concat(Object(toConsumableArray["a" /* default */])(event===null||event===void 0?void 0:event.key.split(""))));passValue=stringArray.join("");}}if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(passValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{// setAlertData({
//   showConfirm: "showNotification",
//   open: false,          
// });
setErrorMessageId(false);}}catch(e){console.log("Error while validating regex");}}function deleteDocument(e,docIndex){var documentArr=props.selectedControl.documents;var availableDocumentArr=props.selectedControl.json["available_doc_types"];var newArr=documentArr.filter(function(document,index){return index!==docIndex;});var newAvilableArr=availableDocumentArr.filter(function(document,index){return index!==docIndex;});props.selectedControl.documents=Object(toConsumableArray["a" /* default */])(newArr);props.selectedControl.json["available_doc_types"]=Object(toConsumableArray["a" /* default */])(newAvilableArr);dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updatedComponentInFormState(props.selectedControl.id,props.selectedControl);props.applyChanges(props.formData);e.stopPropagation();}if(DoclistPropertiesJson&&PropertiesConfiguration["a" /* default */]){var CollapsibleItems=[];Object.keys(DoclistPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(DoclistPropertiesJson[key]).forEach(function(property){var _ControlsMap$property;if(PropertiesConfiguration["a" /* default */]!==null&&PropertiesConfiguration["a" /* default */]!==void 0&&(_ControlsMap$property=PropertiesConfiguration["a" /* default */][property])!==null&&_ControlsMap$property!==void 0&&_ControlsMap$property.type){var _props$selectedContro,_props$selectedContro2;if((props===null||props===void 0?void 0:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:(_props$selectedContro2=_props$selectedContro.documents)===null||_props$selectedContro2===void 0?void 0:_props$selectedContro2.length)>0&&property==="DocumentTypeHeader"){props.selectedControl.documents.map(function(docDetails,index){collapseComponentBody.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:docDetails.DocumentName,body:prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type,docDetails,index),headerStyling:BasicControls_module_default.a.documentTypeDivHeader,divStyling:BasicControls_module_default.a.documentTypeDivWrapper,isDoclist:true,docIndex:index,deleteDocument:deleteDocument}));});}else{if(property!=="DocumentTypeHeader"){collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type,props.selectedControl.style,-1));}}}});CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});}function handleIcon(imageName,imageFile,docIndex,key){if(docIndex>=0){handleDocProperty(key,imageFile,docIndex);if(key==="DocTypeIcon"){handleDocProperty("DocTypeIconName",imageName,docIndex);}}}function _handleToggle(e,field,docIndex){var value=e.target.value;if(docIndex>=0){handleDocProperty(field,value,docIndex);}else{_handleProperty(field,value);}}function mappingOpen(){setMappingField(true);}function handleDocProperty(propertyKey,propertyValue,docIndex){var _props$selectedContro3;var json=props.selectedControl.json;if(docIndex>=0&&(_props$selectedContro3=props.selectedControl)!==null&&_props$selectedContro3!==void 0&&_props$selectedContro3.documents&&json){var lastValue=props.selectedControl.documents[docIndex][propertyKey];var newValue=propertyValue;if(propertyKey==="DocumentName"){var _props$selectedContro4;if((_props$selectedContro4=props.selectedControl)!==null&&_props$selectedContro4!==void 0&&_props$selectedContro4.documents.some(function(doc){return doc.DocumentName===(propertyValue||"").trim();})&&lastValue!==propertyValue){setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentMsg:"Document name already exist."});newValue=lastValue;}if((propertyValue||"").trim()===""){setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentMsg:"Document label name is required"});newValue=lastValue;}json.available_doc_types[docIndex]["name"]=newValue;}if(propertyKey==="Mandatory"){json.available_doc_types[docIndex]["mandatory"]=propertyValue==="true";}if(propertyKey==="AllowMultipleUploads"){json.available_doc_types[docIndex]["multiple_upload"]=propertyValue==="true";}if(propertyKey==="AllowedFileTypes"){json.available_doc_types[docIndex]["allowed_file_types"]=propertyValue;}if(propertyKey==="DocTypeIcon"){var isPortal=builderMode==="app"||builderMode==="application";json.available_doc_types[docIndex]["doc_type_icon"]=isPortal?"".concat(imageBaseURL).concat(propertyValue):propertyValue;}if(propertyKey==="DocTypeIconName"){json.available_doc_types[docIndex]["doc_type_icon_name"]=propertyValue;}if(propertyKey==="DimensionsOfImage_height"){if(dimension==="min"){json.available_doc_types[docIndex]["min_image_height"]=propertyValue;}else if(dimension==="max"){json.available_doc_types[docIndex]["max_image_height"]=propertyValue;}}if(propertyKey==="DimensionsOfImage_width"){if(dimension==="min"){json.available_doc_types[docIndex]["min_image_width"]=propertyValue;}else if(dimension==="max"){json.available_doc_types[docIndex]["max_image_width"]=propertyValue;}}if(propertyKey==="SupportedDocumentsinDocType"){json.available_doc_types[docIndex]["description"]=propertyValue.join();}if(propertyKey==="SupportedDocumentsinDocType_new"){json.available_doc_types[docIndex]["SupportedDocumentsinDocType_new"]=propertyValue;}if(propertyKey==="MaxSizeOfDoc"){if(props.selectedControl.documents[docIndex]["MaxSizeOfDocType"]==="KB"){propertyValue*=1024;// converting KB to Bytes
}else{propertyValue*=1024*1024;// converting MB to Bytes
}json.available_doc_types[docIndex]["max_file_size"]=propertyValue;}if(propertyKey==="MaxSizeOfDocType"){json.available_doc_types[docIndex]["MaxSizeOfDocType"]=propertyValue;}if(propertyKey==="UploadOption"){var doc_upload_options={google_drive:false,camera:false,scan:false,omnidocs:false,system:false};if(propertyValue==="1"){doc_upload_options.system=true;}else if(propertyValue==="2"){doc_upload_options.camera=true;}else if(propertyValue==="3"){doc_upload_options.system=true;doc_upload_options.camera=true;}json.available_doc_types[docIndex]["doc_upload_options"]=doc_upload_options;}if(propertyKey==="allow_comment"){json.available_doc_types[docIndex]["allow_comment"]=propertyValue==="true"||propertyValue===true;}if(propertyKey==="mandatory_comments"){json.available_doc_types[docIndex]["mandatory_comments"]=propertyValue==="true"||propertyValue===true;}if(propertyKey==="DocumentName"){props.selectedControl.documents[docIndex][propertyKey]=newValue;}else{props.selectedControl.documents[docIndex][propertyKey]=propertyValue;}props.applyChanges(props.formData);}dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}var getNewUniqueId=function getNewUniqueId(){var arr=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[{}];var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var newCopyArr=Object(cloneDeep["a" /* default */])(arr||null);var sortedArr=newCopyArr.sort(function(a,b){return parseFloat(b[key])-parseFloat(a[key]);});return parseFloat(sortedArr[0][key])+1+"";};function addDocument(){var _props$selectedContro5,_props$selectedContro6;if((_props$selectedContro5=props.selectedControl)!==null&&_props$selectedContro5!==void 0&&_props$selectedContro5.documents&&(_props$selectedContro6=props.selectedControl)!==null&&_props$selectedContro6!==void 0&&_props$selectedContro6.documents.length){var _props$selectedContro7,_props$selectedContro8;var newId=getNewUniqueId(props.selectedControl.json.available_doc_types,"id");props.selectedControl["documents"].push(Object.assign({},Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},ThemeJSON["a" /* ThemeJSON */].documentType),{},{DocumentName:"Document ".concat(newId),UploadOption:props===null||props===void 0?void 0:(_props$selectedContro7=props.selectedControl)===null||_props$selectedContro7===void 0?void 0:(_props$selectedContro8=_props$selectedContro7.style)===null||_props$selectedContro8===void 0?void 0:_props$selectedContro8.UploadOption})));var new_available_doc_types={id:newId,name:"Document ".concat(newId),description:"",mandatory:false,allowed_file_types:[],max_file_size:5000000,multiple_upload:true};props.selectedControl.json["available_doc_types"].push(new_available_doc_types);dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));}else if(props.selectedControl){var _props$selectedContro9,_props$selectedContro10;props.selectedControl["documents"]=[];props.selectedControl["documents"].push(Object.assign({},Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},ThemeJSON["a" /* ThemeJSON */].documentType),{},{UploadOption:props===null||props===void 0?void 0:(_props$selectedContro9=props.selectedControl)===null||_props$selectedContro9===void 0?void 0:(_props$selectedContro10=_props$selectedContro9.style)===null||_props$selectedContro10===void 0?void 0:_props$selectedContro10.UploadOption})));var _new_available_doc_types={id:"1",name:"Document 1",description:"",mandatory:false,allowed_file_types:[],max_file_size:5000000,multiple_upload:true};props.selectedControl.json["available_doc_types"].push(_new_available_doc_types);dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));}props.applyChanges(props.formData);updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handle_openDoclist_parameter_mapping(){setOpenDoclist_parameter_mapping(true);}function saveParamter(parameter_Json){props.selectedControl["mappingJson"]=parameter_Json;dispatch(Object(FormStateActions["h" /* updateStateInRedux */])({name:"doclistRerenderCount",value:new Date(),key:props.containerId}));updatedComponentInFormState(props.selectedControl.id,props.selectedControl);setOpenDoclist_parameter_mapping(false);}Object(react["useEffect"])(function(){if(dataObjectsContent&&dataObjectsContent.length>0){var topParentDO=dataObjectsContent[0];if(topParentDO.children&&topParentDO.children.length>0){var secondLevelDO=topParentDO.children.filter(function(item){var _item$children;return(item===null||item===void 0?void 0:(_item$children=item.children)===null||_item$children===void 0?void 0:_item$children.length)>=0;});setDefaultMappingDOOption(secondLevelDO);}}},[dataObjectsContent]);Object(react["useEffect"])(function(){if(dataObjectsContent&&Object.keys(dataObjectsContent).length===0){var jsonForProcess={formId:microFrontendData===null||microFrontendData===void 0?void 0:microFrontendData.formDefId,processdefId:microFrontendData===null||microFrontendData===void 0?void 0:microFrontendData.processId,processState:microFrontendData===null||microFrontendData===void 0?void 0:microFrontendData.statusType,processName:microFrontendData===null||microFrontendData===void 0?void 0:microFrontendData.processName};Object(RequestLogic["p" /* fetchProcessModularData */])(jsonForProcess).then(function(response){setAssociatedField(response.data["children"]);setDataObjectsContent(response.data["children"]);setfilteredDataObject(response.data["children"]);setfilteredDataObjectCopy(response.data["children"]);}).catch(function(error){console.log("Error :: ",error);});}else if(dataObjectsContent&&Object.keys(dataObjectsContent).length>0){setAssociatedField(dataObjectsContent);}},[]);function prepareHtmlTag(key,type,styleData,docIndex){var _ControlsMap$key,_ControlsMap$key2,_window3,_window3$appformBuild,_props$selectedContro11,_props$selectedContro12,_props$selectedContro13,_props$selectedContro14,_props$selectedContro15,_props$selectedContro16,_props$selectedContro17,_props$selectedContro18,_props$selectedContro19,_props$selectedContro20,_props$selectedContro21,_props$selectedContro24,_props$selectedContro25,_props$selectedContro26,_props$selectedContro27,_props$selectedContro28,_props$selectedContro29,_props$selectedContro30,_props$selectedContro31,_props$selectedContro32,_props$selectedContro33,_props$selectedContro34,_props$selectedContro35,_props$selectedContro36,_props$selectedContro37,_props$selectedContro38,_props$selectedContro39,_props$selectedContro40,_props$selectedContro41,_props$selectedContro42,_window4,_window4$appformBuild,_window5,_window5$appformBuild,_window6,_window6$appformBuild,_window7,_window7$appformBuild,_window8,_window8$appformBuild,_window9,_window9$appformBuild,_window10,_window10$appformBuil,_window11,_window11$appformBuil;var PropertiesLabel=function PropertiesLabel(_ref){var mandatory=_ref.mandatory,button=_ref.button;return/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:BasicControls_module_default.a.propertiesLabel+(button?" addButtonHover":""),style:button&&{color:"#0072C6"},children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))||"".concat(PropertiesConfiguration["a" /* default */][key].label),mandatory?/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.mandatory,children:" *"}):null]});};var InputTextSelect=function InputTextSelect(_ref2){var id=_ref2.id,defaultValue=_ref2.defaultValue,propertyName=_ref2.propertyName;return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{display:"flex"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value1",defaultValue:defaultValue,className:[BasicControls_module_default.a.RightLabelTextInputDoclist,errorMessageId===id?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,id);},onBlur:function onBlur(event){return _handleProperty(propertyName,event.target.value,docIndex);}}),/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:[BasicControls_module_default.a.propertiesSelectInput].join(" "),name:key+"Type",id:"".concat(id).concat(docIndex),onChange:function onChange(){return handleCombo("".concat(id).concat(docIndex),docIndex);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:optionTagData,selected:key==="DimensionsOfImage"?true:(props===null||props===void 0?void 0:props.selectedControl)&&(styleData===null||styleData===void 0?void 0:styleData[key+"Type"])===PropertiesConfiguration["a" /* default */][key].children[optionCount],children:t("translation:".concat(optionTagData))});})})]});};switch(type.toLowerCase()){case"combo":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:{display:"flex"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:[key==="AllowedFileTypes"?BasicControls_module_default.a.doclistAlowedFileTypes:null].join(" "),children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:[BasicControls_module_default.a.RightLabelSelect1Table,key==="AllowedFileTypes"?BasicControls_module_default.a.doclistAlowedFileTypes:null].join(" "),name:key,id:props.selectedControl.id+key,onChange:function onChange(){return handleCombo(props.selectedControl.id+key,docIndex);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(_,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){var _ControlsMap$key$chil;return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil===void 0?void 0:_ControlsMap$key$chil.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:(props===null||props===void 0?void 0:props.selectedControl)&&(styleData===null||styleData===void 0?void 0:styleData[key])===PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))},PropertiesConfiguration["a" /* default */][key].children[optionCount].Value);}})},props.selectedControl.id)})]});case"multiselectgroup":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:[key==="AllowedFileTypes"?BasicControls_module_default.a.doclistAlowedFileTypes:key==="SupportedDocumentsinDocType"?BasicControls_module_default.a.SupportedDocumentsinDocType:null].join(" "),children:/*#__PURE__*/Object(jsx_runtime["jsx"])(MultiSelectWithGrouping,{categories:PropertiesConfiguration["a" /* default */][key].children,id:props.selectedControl.id+key,name:key,initialSelected:(props===null||props===void 0?void 0:props.selectedControl)&&(styleData===null||styleData===void 0?void 0:styleData[key])||[],minWidth:233,maxWidth:267,deleteIcon:undefined,docIndex:docIndex,selectedControl:props.selectedControl,onChangeHandler:function onChangeHandler(selectedValues,type){return handleMultiSelect(type==="new"?"".concat(key,"_new"):key,docIndex,selectedValues);}},props.selectedControl.id)})]});case"text_top_bottom":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{mandatory:((_ControlsMap$key=PropertiesConfiguration["a" /* default */][key])===null||_ControlsMap$key===void 0?void 0:_ControlsMap$key.label)==="Document Type Label"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value2",defaultValue:((_ControlsMap$key2=PropertiesConfiguration["a" /* default */][key])===null||_ControlsMap$key2===void 0?void 0:_ControlsMap$key2.label)==="Document Type Label"?props.selectedControl.documents[docIndex].DocumentName:props.selectedControl.style[key],id:props.selectedControl.id+key,maxLength:(_window3=window)===null||_window3===void 0?void 0:(_window3$appformBuild=_window3.appformBuilder_configs)===null||_window3$appformBuild===void 0?void 0:_window3$appformBuild.label_max_length,className:[BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return _handleProperty(key,event.target.value,docIndex);}},props.selectedControl.id)}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"mapping":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),childComp==="application"||activePage||activeSubForm?null:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"#0072c6",cursor:"pointer"},onClick:handle_openDoclist_parameter_mapping,children:t("translation:".concat("VIEW_PARAMETER_MAPPING"))})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{display:"flex"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value3",disabled:true,defaultValue:props.selectedControl.style[key==="doclistMapping"?"Mapping":key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return _handleProperty(key,event.target.value,event);}},props.selectedControl.id+props.selectedControl.style[key]),props!==null&&props!==void 0&&(_props$selectedContro11=props.selectedControl)!==null&&_props$selectedContro11!==void 0&&_props$selectedContro11.dataclass?/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{title:t("translation: Remove Mapping"),onClick:function onClick(){Object(IFormDesignerLogic["L" /* removeMappingFromControl */])(props.selectedControl,updatedComponentInFormState,filteredDataObjectCopy,setCurrentMappedDO);},style:!translationStyles1?{position:"absolute",right:"15%",paddingTop:"5px",paddingRight:"5px"}:{position:"absolute",left:"15%",paddingTop:"5px",paddingLeft:"5px"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(CancelOutlined_default.a,{})}):null,/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{title:t("translation: View Data Objects"),className:BasicControls_module_default.a.mappingDotsIcon,style:translationStyles1?{borderLeft:"1px solid #C4C4C4"}:null,onClick:function onClick(){return mappingOpen();},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ThreeDots["default"],{})})]}),openDoclist_parameter_mapping&&/*#__PURE__*/Object(jsx_runtime["jsx"])(DoclistProperties_Doclist_parameter_mapping,{containerId:props.containerId,handleOpen:setOpenDoclist_parameter_mapping,data:props.selectedControl,saveParamter:saveParamter,associatedFieldKeys:associatedField})]});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"toggleBtn",style:{alignItems:"center"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.toggleCheckboxArabic:BasicControls_module_default.a.toggleCheckbox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{toggleState:styleData===null||styleData===void 0?void 0:styleData[key],handleToggle:function handleToggle(arg1,arg2){return _handleToggle(arg1,arg2,docIndex);},field:key,id:(props===null||props===void 0?void 0:(_props$selectedContro12=props.selectedControl)===null||_props$selectedContro12===void 0?void 0:(_props$selectedContro13=_props$selectedContro12.style)===null||_props$selectedContro13===void 0?void 0:_props$selectedContro13.CustomId)||(props===null||props===void 0?void 0:(_props$selectedContro14=props.selectedControl)===null||_props$selectedContro14===void 0?void 0:_props$selectedContro14.id)},props.selectedControl.id)})]});case"toggleselect":return childComp==="application"||activePage||activeSubForm?/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.toggleBtn,style:{alignItems:"center"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.toggleCheckbox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{toggleState:styleData===null||styleData===void 0?void 0:styleData[key],handleToggle:function handleToggle(arg1,arg2){return _handleToggle(arg1,arg2,docIndex);},field:key,id:(props===null||props===void 0?void 0:(_props$selectedContro15=props.selectedControl)===null||_props$selectedContro15===void 0?void 0:(_props$selectedContro16=_props$selectedContro15.style)===null||_props$selectedContro16===void 0?void 0:_props$selectedContro16.CustomId)||(props===null||props===void 0?void 0:(_props$selectedContro17=props.selectedControl)===null||_props$selectedContro17===void 0?void 0:_props$selectedContro17.id)},props.selectedControl.id)})]}),(props===null||props===void 0?void 0:(_props$selectedContro18=props.selectedControl)===null||_props$selectedContro18===void 0?void 0:(_props$selectedContro19=_props$selectedContro18.style)===null||_props$selectedContro19===void 0?void 0:_props$selectedContro19.AllowAutoCreation)==="true"?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:{display:"flex",gap:"10px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label2))}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("select",{className:BasicControls_module_default.a.RightLabelSelect1Table,name:"".concat(key,"DO"),id:props.selectedControl.id+key,onChange:function onChange(){return handleCombo(props.selectedControl.id+key,docIndex);},style:{width:"100%"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:"",selected:(props===null||props===void 0?void 0:(_props$selectedContro20=props.selectedControl)===null||_props$selectedContro20===void 0?void 0:(_props$selectedContro21=_props$selectedContro20.style)===null||_props$selectedContro21===void 0?void 0:_props$selectedContro21["".concat(key,"DO")])==="",children:"Select"}),(defaultMappingDOOption===null||defaultMappingDOOption===void 0?void 0:defaultMappingDOOption.length)>=0&&defaultMappingDOOption.map(function(item){var _props$selectedContro22,_props$selectedContro23;return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:item.VariableName,selected:(props===null||props===void 0?void 0:(_props$selectedContro22=props.selectedControl)===null||_props$selectedContro22===void 0?void 0:(_props$selectedContro23=_props$selectedContro22.style)===null||_props$selectedContro23===void 0?void 0:_props$selectedContro23["".concat(key,"DO")])===item.VariableName,children:t("translation:".concat(item.VariableName))},item.VariableName);})]},props.selectedControl.id)]}):null]}):null;case"buttongroup":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{mandatory:true}),dimension==="min"?/*#__PURE__*/Object(jsx_runtime["jsxs"])(esm_ButtonGroup_ButtonGroup,{style:{display:"flex"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined",variant:"contained",color:"primary",onClick:function onClick(){return setDimension("min");},style:{whiteSpace:"nowrap"},children:t("translation:Min Dimensions")},props.selectedControl.id),/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined",variant:"text",color:"primary",onClick:function onClick(){return setDimension("max");},style:{whiteSpace:"nowrap"},children:t("translation:Max Dimensions")},props.selectedControl.id)]}):/*#__PURE__*/Object(jsx_runtime["jsxs"])(esm_ButtonGroup_ButtonGroup,{style:{display:"flex"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined",variant:"text",color:"primary",onClick:function onClick(){return setDimension("min");},style:{whiteSpace:"nowrap"},children:t("translation:Min Dimensions")},props.selectedControl.id),/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined",variant:"contained",color:"primary",onClick:function onClick(){return setDimension("max");},style:{whiteSpace:"nowrap"},children:t("translation:Max Dimensions")},props.selectedControl.id)]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{display:"flex","justify-content":"space-between","margin-top":"10px",gap:"12px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InputTextSelect,{"aria-label":"Control Value4",id:"".concat(props.selectedControl.id).concat(key,"height"),defaultValue:dimension==="min"?props===null||props===void 0?void 0:(_props$selectedContro24=props.selectedControl)===null||_props$selectedContro24===void 0?void 0:(_props$selectedContro25=_props$selectedContro24.json.available_doc_types)===null||_props$selectedContro25===void 0?void 0:(_props$selectedContro26=_props$selectedContro25[docIndex])===null||_props$selectedContro26===void 0?void 0:_props$selectedContro26.min_image_height:props===null||props===void 0?void 0:(_props$selectedContro27=props.selectedControl)===null||_props$selectedContro27===void 0?void 0:(_props$selectedContro28=_props$selectedContro27.json)===null||_props$selectedContro28===void 0?void 0:(_props$selectedContro29=_props$selectedContro28.available_doc_types)===null||_props$selectedContro29===void 0?void 0:(_props$selectedContro30=_props$selectedContro29[docIndex])===null||_props$selectedContro30===void 0?void 0:_props$selectedContro30.max_image_height,propertyName:"DimensionsOfImage_height"},props.selectedControl.id)}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InputTextSelect,{"aria-label":"Control Value5",id:"".concat(props.selectedControl.id).concat(key,"width"),defaultValue:dimension==="min"?props===null||props===void 0?void 0:(_props$selectedContro31=props.selectedControl)===null||_props$selectedContro31===void 0?void 0:(_props$selectedContro32=_props$selectedContro31.json.available_doc_types)===null||_props$selectedContro32===void 0?void 0:(_props$selectedContro33=_props$selectedContro32[docIndex])===null||_props$selectedContro33===void 0?void 0:_props$selectedContro33.min_image_width:props===null||props===void 0?void 0:(_props$selectedContro34=props.selectedControl)===null||_props$selectedContro34===void 0?void 0:(_props$selectedContro35=_props$selectedContro34.json.available_doc_types)===null||_props$selectedContro35===void 0?void 0:(_props$selectedContro36=_props$selectedContro35[docIndex])===null||_props$selectedContro36===void 0?void 0:_props$selectedContro36.max_image_width,propertyName:"DimensionsOfImage_width"},props.selectedControl.id)})]}),errorMessageId==="".concat(props.selectedControl.id).concat(key,"width")?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"text":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{mandatory:true}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InputTextSelect,{"aria-label":"Control Value6",id:"".concat(props.selectedControl.id).concat(key),defaultValue:props.selectedControl.documents[docIndex]["MaxSizeOfDocType"]==="KB"?(props===null||props===void 0?void 0:(_props$selectedContro37=props.selectedControl)===null||_props$selectedContro37===void 0?void 0:(_props$selectedContro38=_props$selectedContro37.json.available_doc_types)===null||_props$selectedContro38===void 0?void 0:(_props$selectedContro39=_props$selectedContro38[docIndex])===null||_props$selectedContro39===void 0?void 0:_props$selectedContro39.max_file_size)/1024// converting Bytes to KB
:(props===null||props===void 0?void 0:(_props$selectedContro40=props.selectedControl)===null||_props$selectedContro40===void 0?void 0:(_props$selectedContro41=_props$selectedContro40.json.available_doc_types)===null||_props$selectedContro41===void 0?void 0:(_props$selectedContro42=_props$selectedContro41[docIndex])===null||_props$selectedContro42===void 0?void 0:_props$selectedContro42.max_file_size)/(1024*1024)// converting Bytes to MB
,propertyName:key},props.selectedControl.id)}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textbox":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value7",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.textBoxLayoutForLable,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return _handleProperty(key,event.target.value,event);}},props.selectedControl.id)]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:[BasicControls_module_default.a.textBoxLayoutStyletextArea,BasicControls_module_default.a.textareaNoTopMargin,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return _handleProperty(key,event.target.value,docIndex);},defaultValue:props.selectedControl.style[key]},props.selectedControl.id),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"header":return/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:BasicControls_module_default.a.propertiesHeader5,style:((_window4=window)===null||_window4===void 0?void 0:(_window4$appformBuild=_window4.appformBuilder_configs)===null||_window4$appformBuild===void 0?void 0:_window4$appformBuild.selectedLanguage)==="ar"||((_window5=window)===null||_window5===void 0?void 0:(_window5$appformBuild=_window5.appformBuilder_configs)===null||_window5$appformBuild===void 0?void 0:_window5$appformBuild.selectedLanguage)==="ar-SA"?{display:"flex",justifyContent:"space-between"}:null,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))});case"hr":return/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{id:key// className={styles.hrTag}
,style:{marginTop:"30px",marginLeft:"9px",marginRight:"9px",padding:"0 !important"}});case"select":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:BasicControls_module_default.a.documentsUploadModeSelect,name:"selectionMethod",onChange:function onChange(e){return _handleProperty(key,e.target.value,docIndex);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(child,index){return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{selected:styleData&&styleData[key]===child.Value,value:child.Value,children:t("translation:".concat(child.Title))},child.Value);})},props.selectedControl.id)})]});case"colorpicker":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:["colorpicker",BasicControls_module_default.a.parentDiv2].join(" "),style:{margin:0},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ColorPicker["a" /* default */],{color:styleData===null||styleData===void 0?void 0:styleData[key],handleProperty:function handleProperty(arg1,arg2){return _handleProperty(arg1,arg2,docIndex);},propertyName:key},props.selectedControl.id)]});case"imageupload":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ImageUploadBtn["a" /* default */],{containerId:props.containerId,handleImageUpload:function handleImageUpload(arg1,arg2){return handleIcon(arg1,arg2,docIndex,key);},iconName:(styleData===null||styleData===void 0?void 0:styleData.iconName)||styleData.DocTypeIconName})]});case"documenttype":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.documentTypeDiv,children:Object.keys(PropertiesConfiguration["a" /* default */][key].details).map(function(subKey,index){return prepareHtmlTag(subKey,PropertiesConfiguration["a" /* default */][key].details[subKey]["type"],styleData,docIndex);})});case"fullwidthinputbutton":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.addColumnButtonDiv+" qtwidebutton",onClick:function onClick(){return addDocument();},style:{paddingBottom:"6px"},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.addColumnIconSpan,style:{marginBottom:"4px"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(AddColumnIcon["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(PropertiesLabel,{button:true})]},props.selectedControl.id);case"styleoptions":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.parentDiv,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistStyles,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistStylesInnerDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:__webpack_require__(543).default,alt:"Loading...",className:styleData[PropertiesConfiguration["a" /* default */][key].subKey]==="Style1"?[BasicControls_module_default.a.selectedDoclistStyles,BasicControls_module_default.a.doclistStylesInnerDivIcon].join(" "):BasicControls_module_default.a.doclistStylesInnerDivIcon,onClick:function onClick(){return _handleProperty(PropertiesConfiguration["a" /* default */][key].subKey,"Style1");}}),"Style1"]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistStylesInnerDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("img",{src:__webpack_require__(544).default,alt:"Loading...",className:styleData[PropertiesConfiguration["a" /* default */][key].subKey]==="Style2"?[BasicControls_module_default.a.selectedDoclistStyles,BasicControls_module_default.a.doclistStylesInnerDivIcon].join(" "):BasicControls_module_default.a.doclistStylesInnerDivIcon,onClick:function onClick(){return _handleProperty(PropertiesConfiguration["a" /* default */][key].subKey,"Style2");}}),"Style2"]})]})});case"button":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.parentDiv,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistButtonTypeParentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistButtonTypeDiv0,onClick:function onClick(){return _handleProperty(key,PropertiesConfiguration["a" /* default */][key].children[0].Title);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:[BasicControls_module_default.a.doclistButtonTypeDiv,styleData[key]===PropertiesConfiguration["a" /* default */][key].children[0].Title?BasicControls_module_default.a.doclistButtonTypeSelectedDiv:null].join(" "),style:((_window6=window)===null||_window6===void 0?void 0:(_window6$appformBuild=_window6.appformBuilder_configs)===null||_window6$appformBuild===void 0?void 0:_window6$appformBuild.selectedLanguage)==="ar"||((_window7=window)===null||_window7===void 0?void 0:(_window7$appformBuild=_window7.appformBuilder_configs)===null||_window7$appformBuild===void 0?void 0:_window7$appformBuild.selectedLanguage)==="ar-SA"?{direction:"ltr"}:null,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(PrimaryButton1["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[0].Title))})]},props.selectedControl.id),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistButtonTypeDiv0,onClick:function onClick(){return _handleProperty(key,PropertiesConfiguration["a" /* default */][key].children[1].Title);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:[BasicControls_module_default.a.doclistButtonTypeDiv,styleData[key]===PropertiesConfiguration["a" /* default */][key].children[1].Title?BasicControls_module_default.a.doclistButtonTypeSelectedDiv:null].join(" "),style:((_window8=window)===null||_window8===void 0?void 0:(_window8$appformBuild=_window8.appformBuilder_configs)===null||_window8$appformBuild===void 0?void 0:_window8$appformBuild.selectedLanguage)==="ar"||((_window9=window)===null||_window9===void 0?void 0:(_window9$appformBuild=_window9.appformBuilder_configs)===null||_window9$appformBuild===void 0?void 0:_window9$appformBuild.selectedLanguage)==="ar-SA"?{direction:"ltr"}:null,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(SecondaryButton["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[1].Title))})]},props.selectedControl.id),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.doclistButtonTypeDiv0,onClick:function onClick(){return _handleProperty(key,PropertiesConfiguration["a" /* default */][key].children[2].Title);},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:[BasicControls_module_default.a.doclistButtonTypeDiv,styleData[key]===PropertiesConfiguration["a" /* default */][key].children[2].Title?BasicControls_module_default.a.doclistButtonTypeSelectedDiv:null].join(" "),style:((_window10=window)===null||_window10===void 0?void 0:(_window10$appformBuil=_window10.appformBuilder_configs)===null||_window10$appformBuil===void 0?void 0:_window10$appformBuil.selectedLanguage)==="ar"||((_window11=window)===null||_window11===void 0?void 0:(_window11$appformBuil=_window11.appformBuilder_configs)===null||_window11$appformBuil===void 0?void 0:_window11$appformBuil.selectedLanguage)==="ar-SA"?{direction:"ltr"}:null,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(TextButton["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[2].Title))})]},props.selectedControl.id)]})});case"textareamandatorymessage":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:props.selectedControl.style["Mandatory"]!==undefined&&props.selectedControl.style["Mandatory"]!==null&&props.selectedControl.style["Mandatory"]==="true"?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.errorMandatoryMessage,children:t("translation:".concat("Error message if not filled"))}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:[BasicControls_module_default.a.textBoxLayoutStyletextAreaSpecialCharacter,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,placeholder:"Enter Error Message",onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return _handleProperty(key,event.target.value,event);}},props.selectedControl.id)]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]}):null});case"eventbutton":return/*#__PURE__*/Object(jsx_runtime["jsx"])(Events["a" /* default */],{json:EventList["a" /* EventListjson */],value:props.selectedControl.event,elemtype:props.selectedControl.elem_type,updateEventData:function updateEventData(eventJson){return _updateEventData(eventJson);}},props.selectedControl.id+"_eventsProperty");}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Doclist Properties",handleDelete:deleteControl,id:props.selectedControl.id,customId:props===null||props===void 0?void 0:(_props$selectedContro43=props.selectedControl)===null||_props$selectedContro43===void 0?void 0:(_props$selectedContro44=_props$selectedContro43.style)===null||_props$selectedContro44===void 0?void 0:_props$selectedContro44.CustomId}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodyButtonProperties,children:CollapsibleItems.map(function(item,index){return item;})})}),mappingField?/*#__PURE__*/Object(jsx_runtime["jsx"])(MappingFile["a" /* default */],{stateOpen:true,setMappingField:setMappingField,controlData:props.selectedControl,elementType:props.selectedControl.elem_type}):null,alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData})]});};/* harmony default export */ var IFormDesignerComponents_DoclistProperties_DoclistProperties = __webpack_exports__["default"] = (DoclistProperties_DoclistProperties);

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Style1.66138fb4.svg");

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Style2.64de8768.svg");

/***/ })

}]);
//# sourceMappingURL=DoclistProperties.a47842c047956a803b91.js.map