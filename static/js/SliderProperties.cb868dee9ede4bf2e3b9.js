(this["fb_mf"] = this["fb_mf"] || []).push([[56],{

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

/***/ 2307:
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

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(2286);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// CONCATENATED MODULE: ./src/components/Properties/SliderJson.jsx
var SliderJson={Basic:{Label:"",Mapping:"",CustomId:'',// UserDefinedID: "",
MinimumValue:"",MaximumValue:"",DefaultValueSlider:"",DefaultUnit:"",SetBreakpoint:""},// "Custom Properties": {
//   CustomProperties: "",
// },
"Slider Display":{Visible:"",Enable:"",Mandatory:"",ValidationMessage:"",ManualInput:""},Style:{SliderHeader:"",ActiveSliderBar:"",InActiveSliderBar:"",HrTag:"",LabelHeader:"",LabelAlignmentSlider:"",FontFamily:"",FontSize:"",FontWeight:"",FontColorSlider:""},Display:{MobileVisible:"",TabsVisible:""},Spacing:{SpacingLeft:"",SpacingRight:"",SpacingTop:"",SpacingBottom:""},"Advance Properties":{ControlDescription:""},Events:{EventButton:""}// "Custom CSS":{}
};/* harmony default export */ var Properties_SliderJson = (SliderJson);
// EXTERNAL MODULE: ./src/ReusableComponents/ColorPicker/ColorPicker.jsx
var ColorPicker = __webpack_require__(91);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/Icons/AddColumnIcon.jsx
var AddColumnIcon = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
var Backdrop = __webpack_require__(2195);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(2174);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/SliderProperties/CollapsibleComponentforBackdrop.jsx
function CollapsibleComponent(props){var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),showCollapsibleBody=_useState2[0],setShowCollapsibleBody=_useState2[1];return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Card["a" /* default */],{className:BasicControls_module_default.a.configuration1,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Header,{className:BasicControls_module_default.a.configurationHeader2,onClick:function onClick(){return setShowCollapsibleBody(!showCollapsibleBody);},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.inputValidationsHeaderDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:props.heading}),showCollapsibleBody===true?/*#__PURE__*/Object(jsx_runtime["jsx"])(index_es["a" /* FontAwesomeIcon */],{className:BasicControls_module_default.a.downArrow,icon:free_solid_svg_icons_index_es["b" /* faAngleUp */]}):/*#__PURE__*/Object(jsx_runtime["jsx"])(index_es["a" /* FontAwesomeIcon */],{className:BasicControls_module_default.a.downArrow,icon:free_solid_svg_icons_index_es["a" /* faAngleDown */]})]})}),showCollapsibleBody===true?/*#__PURE__*/Object(jsx_runtime["jsxs"])(Card["a" /* default */].Body,{className:props.leftBody.length===0?BasicControls_module_default.a.emptyCardBody:BasicControls_module_default.a.backdropCollapsibleBody,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.collapsibleLeftBody,children:props.leftBody.map(function(item){return item;})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.collapsibleRightBody,children:props.rightBody.map(function(item){return item;})})]}):null]});}/* harmony default export */ var CollapsibleComponentforBackdrop = (CollapsibleComponent);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(2220);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerLogic.jsx
var IFormDesignerLogic = __webpack_require__(66);

// EXTERNAL MODULE: ./src/Icons/ColumnFromPageIcon.jsx
var ColumnFromPageIcon = __webpack_require__(320);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Theme/ThemeJSON.js
var ThemeJSON = __webpack_require__(112);

// EXTERNAL MODULE: ./src/axios.js
var axios = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(2235);

// EXTERNAL MODULE: ./src/Icons/DeleteWhiteIcon.jsx
var DeleteWhiteIcon = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/SliderProperties/CustomBackdrop.jsx
var useStyles=Object(makeStyles["a" /* default */])(function(theme){return{backdrop:{zIndex:200,color:'#fff'}};});function CustomBackdrop(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild;var _useTranslation=Object(useTranslation["a" /* useTranslation */])(),t=_useTranslation.t;var classes=useStyles();var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),error=_useState2[0],setError=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),error1=_useState4[0],setError1=_useState4[1];var translationStyles=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.DeptiKURProcess_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.DeptiKURProcess_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var _useState5=Object(react["useState"])(""),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),editId=_useState6[0],setEditId=_useState6[1];// const [editCheck,setEditCheck]=useState(false);
// const [indexOfProperty,setIndexOfProperty]=useState();
// const [quesData,setQuesData] = useState([])
var _useState7=Object(react["useState"])(props.properties||[]),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),customProperties=_useState8[0],setCustomProperties=_useState8[1];// const [property,props.setProperty]=useState({
//     name:"",
//     value:""
// });
function save(){props.selectedControl.propertyList=Object(toConsumableArray["a" /* default */])(customProperties);props.setProperties(customProperties);props.setShowTableBackdrop(false);props.setIndexOfProperty();props.setEditCheck(false);props.setProperty({"name":"","value":""});}function handleproperties(){var _props$property=props.property,name=_props$property.name,value=_props$property.value;if(name===""&&value===""){setError(true);setError1(true);}else if(value===""){setError1(true);}else if(name===""){setError(true);}else{setCustomProperties(function(prev){return[].concat(Object(toConsumableArray["a" /* default */])(prev),[{name:props.property.name,value:props.property.value}]);});props.setProperty({"name":"","value":""});setError(false);setError1(false);}}function modifyproperties(){var array=Object(toConsumableArray["a" /* default */])(customProperties);array[props.indexOfProperty]=props.property;setCustomProperties(array);}function handleProperty(event){var _event$target=event.target,name=_event$target.name,value=_event$target.value;if(name==="name"){if(value!==""){setError(false);}}if(name==="value"){if(value!==""){setError1(false);}}props.setProperty(function(prev){return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},prev),{},Object(defineProperty["a" /* default */])({},name,value));});}function deleteProperty(index){var array=Object(toConsumableArray["a" /* default */])(customProperties);if(index!==-1){array.splice(index,1);setCustomProperties(array);}}function handlePropertyPart(index){props.setProperty(customProperties[index]);props.setIndexOfProperty(index);props.setEditCheck(true);}function handleClose(){props.setShowTableBackdrop(false);props.setIndexOfProperty();props.setProperty({"name":"","value":""});}Object(react["useEffect"])(function(){var _document$getElementB;(_document$getElementB=document.getElementById("backdropDiv"))===null||_document$getElementB===void 0?void 0:_document$getElementB.focus();},[]);function handleEscapeKey(e){if(e.code==="Escape"){handleClose();}}return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Backdrop["a" /* default */],{id:"backdrop",className:classes.backdrop,open:true,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{tabIndex:"0",onKeyDown:function onKeyDown(e){return handleEscapeKey(e);},id:"backdropDiv",className:BasicControls_module_default.a.backdropDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.backdropHeaderDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.headerLeft,children:t("Add Properties")}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.headerRight})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{className:BasicControls_module_default.a.hrTagBackdrop}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.backdropBodyDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.backdropBodyLeftPart,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.backdropBodyLeftPartColumnListText,children:t("Properties Name")}),Object.values(customProperties).map(function(item,index){return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:props.indexOfProperty===index?BasicControls_module_default.a.backdropBodyLeftPartColumnListOddRowSelected:BasicControls_module_default.a.backdropBodyLeftPartColumnListOddRow,onClick:function onClick(){return handlePropertyPart(index);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.backdropBodyLeftPartColumnListColumnName,children:item.name})})});})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.backdopBodyRightPartSlider,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.backdropBodyRightPartColumnListTextSlider,children:t("Custom Properties")}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.backdropBodyRightPartColumnListTextSlider2,children:[t("Property Name"),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.inputSliderEmpty,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Property Name",className:!error?BasicControls_module_default.a.inputSlider:BasicControls_module_default.a.inputError,name:"name",value:editId===""?props.property.name:"",onChange:handleProperty}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:!error?"":"This Field is required"})]}),t("Property Value"),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.inputSliderEmpty,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Property Value",className:!error1?BasicControls_module_default.a.inputSlider:BasicControls_module_default.a.inputError,name:"value",value:editId===""?props.property.value:"",onChange:handleProperty}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:!error1?"":"This Field is required"})]}),props.editCheck?/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined ".concat(BasicControls_module_default.a.addSliderButton),onClick:modifyproperties,children:t("Modify")}):/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined ".concat(BasicControls_module_default.a.addSliderButton),onClick:handleproperties,children:t("+ ADD")})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{className:BasicControls_module_default.a.hrTagBackdropSlider}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.addedSlider,style:translationStyles?{textAlign:"right"}:{},children:t("Added Properties")}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"options-grid_div",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */],{className:BasicControls_module_default.a.optionsheading,item:true,container:true,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,className:BasicControls_module_default.a.optionscontentitems,style:{borderRight:"none"},children:t("Property Name")}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,className:BasicControls_module_default.a.optionscontentitems,style:{borderRight:"none"},children:t("Property Value")}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,className:BasicControls_module_default.a.optionscontentitemsaction,children:t("Action")})]}),Object.values(customProperties).map(function(item,index){return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Grid["a" /* default */],{className:BasicControls_module_default.a.optionsheading,item:true,container:true,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,className:BasicControls_module_default.a.optionsvalueitems,style:{borderRight:"none"},children:item.name}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,className:BasicControls_module_default.a.optionsvalueitems,style:{borderRight:"none"},children:item.value}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Grid["a" /* default */],{item:true,className:BasicControls_module_default.a.optionsvalueitemsaction,onClick:function onClick(){return deleteProperty(index);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(DeleteWhiteIcon["default"],{})})]});})]})]})]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{id:"footer",className:BasicControls_module_default.a.colButtonDiv,style:translationStyles?{display:'flex',justifyContent:'flex-end'}:{},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined ".concat(BasicControls_module_default.a.saveAndExitButton),onClick:function onClick(){return save();},children:t("Save and Exit")}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Button["a" /* default */],{disableFocusRipple:true,disableRipple:true,tabIndex:0,className:"formBuilder-MuiButton-outlined ".concat(BasicControls_module_default.a.cancelBackdropButton),onClick:function onClick(){return handleClose();},children:t("Cancel")})]})]})})});}/* harmony default export */ var SliderProperties_CustomBackdrop = (CustomBackdrop);
// EXTERNAL MODULE: ./src/Icons/Deleteg.jsx
var Deleteg = __webpack_require__(364);

// EXTERNAL MODULE: ./src/Icons/EditIcon.jsx
var EditIcon = __webpack_require__(179);

// EXTERNAL MODULE: ./src/Icons/InfoIcon.jsx
var InfoIcon = __webpack_require__(321);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./src/Resources/CanvasContextFile.jsx
var CanvasContextFile = __webpack_require__(109);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/EventList.js
var EventList = __webpack_require__(125);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/Events.jsx + 20 modules
var Events = __webpack_require__(132);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/RequestLogic.jsx
var RequestLogic = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/components/Properties/FontWeightList.js
var FontWeightList = __webpack_require__(82);

// EXTERNAL MODULE: ./src/Redux/index.js
var Redux = __webpack_require__(69);

// EXTERNAL MODULE: ./src/Icons/ThreeDots.jsx
var ThreeDots = __webpack_require__(114);

// EXTERNAL MODULE: ./src/ReusableComponents/Mapping/MappingFile.jsx + 2 modules
var MappingFile = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(2182);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CancelOutlined.js
var CancelOutlined = __webpack_require__(104);
var CancelOutlined_default = /*#__PURE__*/__webpack_require__.n(CancelOutlined);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/SliderProperties/SliderProperties.jsx
var SliderProperties_useStyles=Object(makeStyles["a" /* default */])({tooltip:{maxWidth:"160px",// maxHeight: "96px",
background:"#FFFFFF 0% 0% no-repeat padding-box",color:"black",border:"#70707075 1px solid",boxShadow:"0px 3px 6px #00000029",opacity:1,fontSize:"12pt"// marginTop: "0px",
},arrow:{"&:before":{border:"1px solid #70707075"},color:"white",fontSize:"15pt"}});var SliderProperties_SliderProperties=function SliderProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro15,_props$selectedContro16;var classes=SliderProperties_useStyles();var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,changeSectionLayout=_contexts$contexts.changeSectionLayout,formState2=_contexts$contexts.formState2,deleteControl=_contexts$contexts.deleteControl,setQuickToolsClose=_contexts$contexts.setQuickToolsClose,customControlIdList=_contexts$contexts.customControlIdList,setCustomControlIdList=_contexts$contexts.setCustomControlIdList,showAlertConfirmNotifications=_contexts$contexts.showAlertConfirmNotifications,fromQuickProps=_contexts$contexts.fromQuickProps,filteredDataObjectCopy=_contexts$contexts.filteredDataObjectCopy,setCurrentMappedDO=_contexts$contexts.setCurrentMappedDO;var updatedComponentInFormState=updateJson.updatedComponentInFormState,removeAndUpdateComponentInFormState=updateJson.removeAndUpdateComponentInFormState;// const { t } = useTranslation();
var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.DeptiKURProcess_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.DeptiKURProcess_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var _useTranslation=Object(useTranslation["a" /* useTranslation */])(["styles","translation"]),t=_useTranslation.t;// const AppContextVar = useContext(AppContext);
// const { updateJson, deleteControl } = useContext(AppContext);
// const { updatedComponentInFormState, removeAndUpdateComponentInFormState } =
//   updateJson;
// const { changeSectionLayout } = useContext(AppContext);
var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),editCheck=_useState2[0],setEditCheck=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),showTableBackdrop=_useState4[0],setShowTableBackdrop=_useState4[1];var _useState5=Object(react["useState"])(props.selectedControl?props.selectedControl.propertyList:null),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),properties=_useState6[0],setProperties=_useState6[1];var _useState7=Object(react["useState"])(),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),indexOfProperty=_useState8[0],setIndexOfProperty=_useState8[1];var _useState9=Object(react["useState"])(false),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),errorMessageId=_useState10[0],setErrorMessageId=_useState10[1];var _useState11=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState12=Object(slicedToArray["a" /* default */])(_useState11,2),alertData=_useState12[0],setAlertData=_useState12[1];var _useState13=Object(react["useState"])(false),_useState14=Object(slicedToArray["a" /* default */])(_useState13,2),mappingField=_useState14[0],setMappingField=_useState14[1];Object(react["useEffect"])(function(){if(fromQuickProps){setMappingField(true);// setfromQuickProps(false)
}},[fromQuickProps]);if(props.selectedControl.style["Label"]===undefined){props.selectedControl.style["Label"]=props.selectedControl.id;}var globalTheme=formState2.theme;// if (AppContextVar !== undefined) {
//   globalTheme = AppContextVar.formState2 && AppContextVar.formState2.theme;
// }
// const labelTheme=globalTheme.LabelStyle;
// const labelStyle={
//     FontColor: isColor(props.selectedControl.style.FontColor) || isColor(labelTheme.FontColor),
//     BackColor: isColor(props.selectedControl.style.BackColor) || isColor(labelTheme.BackColor),
//     FontSize: props.selectedControl.style.FontSize || (parseInt(labelTheme.FontSize) + 10).toString()+"px" ||  "14px",
//     FontFamily: props.selectedControl.style.FontFamily || labelTheme.FontFamily ||"Open Sans",
//     FontWeight: props.selectedControl.style.FontWeight || labelTheme.FontWeight ||  "100",
// }
var CollapsibleItems=[];Object.keys(Properties_SliderJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_SliderJson[key]).forEach(function(property){collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type));});CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:t(key),body:collapseComponentBody}));});function selectedOptionForLabel(selectedControlId,selectedControlLabel,ControlLabelKey){var select=document.getElementById(selectedControlId+ControlLabelKey);var option_tag=select.options[select.selectedIndex];var temp_style=props.selectedControl.style;temp_style[ControlLabelKey]=option_tag.value;props.selectedControl.style[ControlLabelKey]=option_tag.value;props.selectedControl.style["FontWeightKey"]=option_tag.value;// console.log("Font Family option", option_tag.value);
if(option_tag.value==="Regular Italic"){props.selectedControl.style[ControlLabelKey]=300;props.selectedControl.style["FontStyle"]="italic";}else if(option_tag.value==="Semibold"||option_tag.value==="Medium"){props.selectedControl.style[ControlLabelKey]=600;props.selectedControl.style["FontStyle"]="normal";}else if(option_tag.value==="Bold"){props.selectedControl.style[ControlLabelKey]="bold";props.selectedControl.style["FontStyle"]="normal";}else if(option_tag.value==="Regular"){props.selectedControl.style[ControlLabelKey]=300;props.selectedControl.style["FontStyle"]="normal";}else if(option_tag.value==="Bold Italic"){props.selectedControl.style[ControlLabelKey]="bold";props.selectedControl.style["FontStyle"]="italic";}else if(option_tag.value==="Light Italic"){props.selectedControl.style[ControlLabelKey]=100;props.selectedControl.style["FontStyle"]="italic";}else if(option_tag.value==="Semibold Italic"){props.selectedControl.style[ControlLabelKey]=600;props.selectedControl.style["FontStyle"]="italic";}else if(option_tag.value==="Light"){props.selectedControl.style[ControlLabelKey]=100;props.selectedControl.style["FontStyle"]="normal";}else if(option_tag.value===''||option_tag.value==='Select'){props.selectedControl.style[ControlLabelKey]='';props.selectedControl.style["FontStyle"]='';}// console.log(props.selectedControl.id);
updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function setToggleValue(propertyValue,propertyName){var temp_style=props.selectedControl.style;temp_style[propertyName]=propertyValue;props.selectedControl.style[propertyName]=propertyValue;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function validateRegex(propertyName,propertyValue,event,inputBoxId){try{var passValue=event===null||event===void 0?void 0:event.key;if(propertyName==="CustomId"){if(event.target.selectionEnd===event.target.selectionStart){passValue=[propertyValue.slice(0,event.target.selectionEnd)+event.key+propertyValue.slice(event.target.selectionEnd)].join("");}else{var stringArray=propertyValue.split("");stringArray.splice(event.target.selectionStart,event.target.selectionEnd-event.target.selectionStart);stringArray.splice.apply(stringArray,[event.target.selectionStart,0].concat(Object(toConsumableArray["a" /* default */])(event===null||event===void 0?void 0:event.key.split(""))));passValue=stringArray.join("");//   if(event.target.selectionDirection==="backward")
//   {
//     passValue=[propertyValue+event.key].join("");
//   }
//   else if(event.target.selectionDirection==="forward"){
//   passValue=[event.key+propertyValue].join("");
// }
}}if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(passValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])&&event.key!=="ArrowLeft"&&event.key!=="ArrowRight"&&event.key!=="ArrowUp"&&event.key!=="ArrowDown"&&event.key!=="Control"&&event.key!=="Escape"&&event.key!=="Enter"&&event.key!=="Shift"){event.preventDefault();// setErrorMessageId(inputBoxId);
setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setAlertData({showConfirm:"showNotification",open:false});setErrorMessageId(false);}}catch(e){console.log("Error while validating regex");}}// function handleProperty(propertyName, propertyValue, event) {
//   console.log(" propertyNameLabel -1 ", propertyName);
//   console.log(" propertyNameLabel -1 ", propertyValue);
//   //console.log(propertyValue);
//   try{
//     if (propertyName === "CustomId") {
//       console.log(" propertyNameLabel 0 ", propertyName);
//       console.log(" propertyNameLabel 0 ", propertyValue);
//       if (propertyValue !== props.selectedControl.style.CustomId) {
//         var element = event.target;
//         console.log(
//           "id",
//           props.selectedControl,
//           "propertyValue::" + propertyValue
//         );
//         var jsonToSend = {
//           customControlId: propertyValue,
//           controlid: props.selectedControl.id,
//         };
//         validateCustomControlId(jsonToSend)
//           .then((response) => {
//             console.log("response :: ", response);
//             if (response && response.data && response.data.status === "0") {
//               let temp_style = props.selectedControl.style;
//               // temp_style[propertyName] = propertyValue;
//               // props.selectedControl.style[propertyName] = propertyValue;
//               let updatedJson = updateUserId(
//                 props.selectedControl, // whole control Json
//                 propertyValue //newly defined id
//                 // temp_style[propertyName], //getting previous ControlId
//                 // undefined // precedence from formState
//               );
//               console.log("updatedJson :: ", updatedJson);
//               if (updatedJson) {
//                 updatedComponentInFormState(
//                   props.selectedControl.id,
//                   updatedJson
//                 );
//               }
//             } else if (
//               response &&
//               response.data &&
//               response.data.status === "-1"
//             ) {
//               alert("CustomControl Id already Exist");
//               element.value = props.selectedControl.style.CustomId || "";
//             }
//           })
//           .catch(function (error) {
//             // handle error
//             element.value = props.selectedControl.style.CustomId || "";
//             console.log(error);
//             alert("Server side error " + error);
//           });
//       }
//     }
//     else if ( event && event.which !== 8 && event.which !== 46 && !regexValidator(String.fromCharCode(event.which), ControlsMap[propertyName]["regexType"] ))
//     {
//       console.log(" propertyNameLabel 1 ", propertyName);
//       console.log(" propertyNameLabel 1 ", propertyValue);
//       event.preventDefault();
//       //setErrorMessageId(inputBoxId);
//       setAlertData({
//         ...ControlsMap["customizedAlertNotificationData"],
//         open: true,
//         alertContentKey: "RegexErrorMessage",
//       });
//       let temp_style = props.selectedControl.style;
//       temp_style[propertyName] = propertyValue;
//       props.selectedControl.style[propertyName] = propertyValue;
//       if (propertyName === "DefaultValueSlider") {
//         if (
//           parseInt(propertyValue) < props.selectedControl.style["MinimumValue"]
//         ) {
//           props.selectedControl.style[propertyName] =
//             props.selectedControl.style["MinimumValue"];
//         }
//         if (
//           parseInt(propertyValue) > props.selectedControl.style["MaximumValue"]
//         ) {
//           props.selectedControl.style[propertyName] =
//             props.selectedControl.style["MaximumValue"];
//         }
//       }
//       updatedComponentInFormState(
//         props.selectedControl.id,
//         props.selectedControl
//       );
//     }
//     else {
//       console.log(" propertyNameLabel 2 ", propertyName);
//       console.log(" propertyNameLabel 2 ", propertyValue);
//       let temp_style = props.selectedControl.style;
//       temp_style[propertyName] = propertyValue;
//       props.selectedControl.style[propertyName] = propertyValue;
//       if (propertyName === "DefaultValueSlider") {
//         if (
//           parseInt(propertyValue) < props.selectedControl.style["MinimumValue"]
//         ) {
//           props.selectedControl.style[propertyName] =
//             props.selectedControl.style["MinimumValue"];
//         }
//         if (
//           parseInt(propertyValue) > props.selectedControl.style["MaximumValue"]
//         ) {
//           props.selectedControl.style[propertyName] =
//             props.selectedControl.style["MaximumValue"];
//         }
//       }
//       console.log("PPPP");
//       updatedComponentInFormState(
//         props.selectedControl.id,
//         props.selectedControl
//       );
//     }
//   }catch(error){
//     console.log(" propertyNameLabel -2 ", propertyName);
//     console.log(" propertyNameLabel -2 ", propertyValue);
//     console.log(error);
//   }
// }
var _updateEventData=function updateEventData(eventJson){// console.log("===>Received Event Json :: ", eventJson);
// console.log(
//   "===>Received props.selectedControl :: ",
//   props.selectedControl
// );
var count=Object.keys(eventJson).length;if(count>0){var Events={};Events["Events"]=eventJson;props.selectedControl["event"]=Events;}// console.log("===> props.selectedControl", props.selectedControl);
updatedComponentInFormState(props.selectedControl.id,props.selectedControl);};function handleProperty(propertyName,propertyValue,event){var saveProperty=true;var temp_style=props.selectedControl.style;if(propertyName==="UserDefinedControlID"){}if(propertyName==="MinimumValue"){var _props$selectedContro;var MaximumValue=(_props$selectedContro=props.selectedControl.style)===null||_props$selectedContro===void 0?void 0:_props$selectedContro.MaximumValue;if(MaximumValue===undefined||MaximumValue===null)MaximumValue="100";MaximumValue=parseInt(MaximumValue);if(!Number.isNaN(MaximumValue)&&propertyValue!==""){var MinimumValue=parseInt(propertyValue);if(MinimumValue>MaximumValue){var _props$selectedContro2;saveProperty=false;event.target.value=((_props$selectedContro2=props.selectedControl.style)===null||_props$selectedContro2===void 0?void 0:_props$selectedContro2.MinimumValue)||0;// showAlertConfirmNotifications({
//   open: true,
//   showConfirm: "showNotification",
//   alertType: "error",
//   alertContentKey: "MIN_GREATER_THAN_MAX",
// });
setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"MIN_GREATER_THAN_MAX"});// updatedComponentInFormState();
return;// window.setTimeout(() => {
//   showAlertConfirmNotifications({
//     open: false,
//     showConfirm: "showNotification",
//     alertType: "error",
//     alertContentKey: "MIN_GREATER_THAN_MAX",
//   });
// }, 10000);
}}}if(propertyName==="MaximumValue"){var _props$selectedContro3;var _MinimumValue=(_props$selectedContro3=props.selectedControl.style)===null||_props$selectedContro3===void 0?void 0:_props$selectedContro3.MinimumValue;if(_MinimumValue===undefined||_MinimumValue===null)_MinimumValue="0";_MinimumValue=parseInt(_MinimumValue);if(!Number.isNaN(_MinimumValue)&&propertyValue!==""){var _MaximumValue=parseInt(propertyValue);if(_MaximumValue<_MinimumValue){var _props$selectedContro4;saveProperty=false;event.target.value=((_props$selectedContro4=props.selectedControl.style)===null||_props$selectedContro4===void 0?void 0:_props$selectedContro4.MaximumValue)||100;// showAlertConfirmNotifications({
//   open: true,
//   showConfirm: "showNotification",
//   alertType: "error",
//   alertContentKey: "MAX_SMALLER_THAN_MIN",
//   'autoHideDuration':6000,
// });
setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"MIN_GREATER_THAN_MAX"});// updatedComponentInFormState();
return;// window.setTimeout(() => {
//   showAlertConfirmNotifications({
//     open: false,
//     showConfirm: "showNotification",
//     alertType: "error",
//     alertContentKey: "MAX_SMALLER_THAN_MIN",
//   });
// }, 10000);
}}}if(propertyName==="CustomId"){if(propertyValue!==props.selectedControl.style.CustomId){var element=event.target;// console.log(
//   "id",
//   props.selectedControl,
//   "propertyValue::" + propertyValue
// );
var jsonToSend={customControlId:propertyValue,controlid:props.selectedControl.id};Object(RequestLogic["Q" /* validateCustomControlId */])(jsonToSend).then(function(response){// console.log("response :: ", response);
if(response&&response.data&&response.data.status==="0"){var _temp_style=props.selectedControl.style;// temp_style[propertyName] = propertyValue;
// props.selectedControl.style[propertyName] = propertyValue;
var updatedJson=Object(UserIdLogic["b" /* updateUserId */])(props.selectedControl,// whole control Json
propertyValue//newly defined id
// temp_style[propertyName], //getting previous ControlId
// undefined // precedence from formState
);// console.log("updatedJson :: ", updatedJson);
if(updatedJson){updatedComponentInFormState(props.selectedControl.id,updatedJson);}}else if(response&&response.data&&response.data.status==="-1"){// alert("CustomControl Id already Exist");
showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"CustomControl Id already Exist"});element.value=props.selectedControl.style.CustomId||"";}}).catch(function(error){// handle error
// console.log("TextareaError 1");
element.value=props.selectedControl.style.CustomId||"";// console.log(error);
// alert("Server side error " + error);
showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"Server side error ".concat(error)});});}}else{temp_style[propertyName]=propertyValue;props.selectedControl.style[propertyName]=propertyValue;if(propertyName==="DefaultValueSlider"){if(parseInt(propertyValue)<props.selectedControl.style["MinimumValue"]){props.selectedControl.style[propertyName]=props.selectedControl.style["MinimumValue"];showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:t("translation:".concat("MIN_GREATER_THAN_DEFAULT"))});// window.setTimeout(() => {
//   showAlertConfirmNotifications({
//     open: false,
//     showConfirm: "showNotification",
//     alertType: "error",
//     alertContentKey: t(`translation:${"MIN_GREATER_THAN_DEFAULT"}`),
//   });
// }, 10000);
}if(parseInt(propertyValue)>props.selectedControl.style["MaximumValue"]){props.selectedControl.style[propertyName]=props.selectedControl.style["MaximumValue"];showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:t("translation:".concat("MAX_SMALLER_THAN_DEFAULT"))});// window.setTimeout(() => {
//   showAlertConfirmNotifications({
//     open: false,
//     showConfirm: "showNotification",
//     alertType: "error",
//     alertContentKey: t(`translation:${"MAX_SMALLER_THAN_DEFAULT"}`),
//   });
// }, 10000);
}}if(saveProperty)updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}}function selectedColorForLabel(ControlLabelKey,value){var temp_style=props.selectedControl.style;temp_style[ControlLabelKey]=value;props.selectedControl.style[ControlLabelKey]=value;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleToggle(e,field){var value=e.target.value;props.selectedControl.style[field]=value+"";if(field==="Enable"){props.selectedControl.style["previousEnable"]=value;}if(field==="ReadOnlyStyle"){props.selectedControl.style["previousReadOnly"]=value;}if(field==="ReadOnly"){props.selectedControl.style["previousReadOnlyValue"]=value;}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);// if(field === 'MobileVisible' || field === 'TabsVisible') {
//   updatedComponentInFormState(
//     props.selectedControl.id,
//     props.selectedControl
//   );
// }
}function addCustomproperty(){try{setShowTableBackdrop(true);}catch(e){// alert("Error while adding column in table.");
console.log("Error while adding column in table.");}}function deleteProperty(index){var array=Object(toConsumableArray["a" /* default */])(props.selectedControl.propertyList);if(index!==-1){array.splice(index,1);setProperties(array);}props.selectedControl.propertyList=array;}function modifyProperty(index){setProperty(props.selectedControl.propertyList[index]);setIndexOfProperty(index);setShowTableBackdrop(true);setEditCheck(true);}var _useState15=Object(react["useState"])({name:"",value:""}),_useState16=Object(slicedToArray["a" /* default */])(_useState15,2),property=_useState16[0],setProperty=_useState16[1];function mappingOpen(){// console.log("here comes ");
setMappingField(true);}// console.log("Font Family ", props.selectedControl.style["FontFamily"])
// console.log("Font Family ", FontWeightListJson[props.selectedControl.style["FontFamily"]])
//className={styles.infoTechSlider}
function prepareHtmlTag(key,type){var _window3,_window3$appformBuild,_props$selectedContro5,_Object$values,_props$selectedContro6,_props$selectedContro8,_props$selectedContro9,_props$selectedContro10,_props$selectedContro11,_props$selectedContro12,_props$selectedContro13,_props$selectedContro14,_window4,_window4$appformBuild,_window5,_window5$appformBuild,_window6,_window6$appformBuild,_window7,_window7$appformBuild;switch(type.toLowerCase()){case"text":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:BasicControls_module_default.a.leftLabel,children:[key==="SetBreakpoint"&&t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label)),key==="SetBreakpoint"?/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{title:t("translation:".concat("Set Breakpoint Tooltip Content")),classes:{tooltip:classes.tooltip,arrow:classes.arrow},placement:"bottom-start",arrow:true,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:translationStyles1?BasicControls_module_default.a.infoTechSliderArabic:BasicControls_module_default.a.infoTechSlider,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InfoIcon["default"],{})})}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),key==="MinimumValue"||key==="MaximumValue"||key==="DefaultValueSlider"?/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[key==="MinimumValue"||key==="MaximumValue"?/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{color:"red"},children:"*"}):null,/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{title:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].toolTip)),classes:{tooltip:classes.tooltip,arrow:classes.arrow},placement:"bottom-start",arrow:true,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:translationStyles1?BasicControls_module_default.a.infoTechSliderArabic:BasicControls_module_default.a.infoTechSlider,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InfoIcon["default"],{})})})]}):null]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightTextBox,children:key!=="Label"?/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value1",type:"text",id:props.selectedControl.id+key// onKeyPress={(event) =>
//   validateRegex(
//     key,
//     event.target.value,
//     event,
//     props.selectedControl.id + key
//   )
// }
,onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}// onKeyUp={(event) => handleProperty(key,event.target.value, event)}
// onBlur={(event) =>
//   handleProperty(key, event.target.value, event)
// }
,defaultValue:props.selectedControl.style[key],maxLength:8,className:[BasicControls_module_default.a.RightLabelTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" ")},props.selectedControl.id+(props.selectedControl.style&&props.selectedControl.style["DefaultValueSlider"])):/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value2",type:"text",id:props.selectedControl.id+key,onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value);},defaultValue:props.selectedControl.style[key],className:[BasicControls_module_default.a.RightLabelTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" ")},props.selectedControl.id)}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textbox":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.labelForLabel,children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value3",type:"text",defaultValue:props.selectedControl.style[key]// key={props.selectedControl.id}
,id:props.selectedControl.id+key,maxLength:(_window3=window)===null||_window3===void 0?void 0:(_window3$appformBuild=_window3.DeptiKURProcess_configs)===null||_window3$appformBuild===void 0?void 0:_window3$appformBuild.label_max_length,className:[BasicControls_module_default.a.textBoxLayoutForLable,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id+props.selectedControl.style[key])]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"fullwidthinputbutton":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.addColumnButtonDiv,onClick:function onClick(){return addCustomproperty();},children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:translationStyles1?BasicControls_module_default.a.addColumnIconSpanArabic:BasicControls_module_default.a.addColumnIconSpan,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(AddColumnIcon["default"],{})}),t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))]}),(props===null||props===void 0?void 0:(_props$selectedContro5=props.selectedControl)===null||_props$selectedContro5===void 0?void 0:_props$selectedContro5.propertyList)&&((_Object$values=Object.values(props===null||props===void 0?void 0:(_props$selectedContro6=props.selectedControl)===null||_props$selectedContro6===void 0?void 0:_props$selectedContro6.propertyList))===null||_Object$values===void 0?void 0:_Object$values.map(function(item,index){var _props$selectedContro7;return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.addColumnCustomProperty,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.addCustomName,title:item.name,children:item.name}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.addCustomBox,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{onClick:function onClick(){return modifyProperty(index);},className:BasicControls_module_default.a.addColumnInputBoxEditIcon,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(EditIcon["default"],{})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{onClick:function onClick(){return deleteProperty(index);},className:BasicControls_module_default.a.addColumnInputBoxDeleteIcon,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(DeleteWhiteIcon["default"],{})})]})]},(_props$selectedContro7=props.selectedControl)===null||_props$selectedContro7===void 0?void 0:_props$selectedContro7.id)});}))]});case"text_top_bottom":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Group,{className:BasicControls_module_default.a.parentDivTopBottom,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.topBottomLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))})}),key==="Mapping"?/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{tabIndex:"0",style:{display:"flex"},title:props.selectedControl.style[key],children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value4",type:"text",defaultValue:props.selectedControl.style[key]// key={props.selectedControl.id}
,disabled:true,id:props.selectedControl.id+key,className:[BasicControls_module_default.a.overflowEll,BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id+props.selectedControl.style[key]),props!==null&&props!==void 0&&(_props$selectedContro8=props.selectedControl)!==null&&_props$selectedContro8!==void 0&&_props$selectedContro8.dataclass?/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{title:t("translation: Remove Mapping"),onClick:function onClick(){Object(IFormDesignerLogic["L" /* removeMappingFromControl */])(props.selectedControl,updatedComponentInFormState,filteredDataObjectCopy,setCurrentMappedDO);},style:!translationStyles1?{position:"absolute",right:"15%",paddingTop:"5px",paddingRight:"5px"}:{position:"absolute",left:"15%",paddingTop:"5px",paddingLeft:"5px"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(CancelOutlined_default.a,{})}):null,/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{title:t("translation: View Data Objects"),className:BasicControls_module_default.a.mappingDotsIcon,style:translationStyles1?{borderLeft:"1px solid #C4C4C4"}:null,onClick:function onClick(){return mappingOpen();},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ThreeDots["default"],{})})]})}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value5",type:"text",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)})}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.toggleCheckboxArabic:BasicControls_module_default.a.toggleCheckbox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{id:props!==null&&props!==void 0&&(_props$selectedContro9=props.selectedControl)!==null&&_props$selectedContro9!==void 0&&(_props$selectedContro10=_props$selectedContro9.style)!==null&&_props$selectedContro10!==void 0&&_props$selectedContro10.CustomId?props===null||props===void 0?void 0:(_props$selectedContro11=props.selectedControl)===null||_props$selectedContro11===void 0?void 0:(_props$selectedContro12=_props$selectedContro11.style)===null||_props$selectedContro12===void 0?void 0:_props$selectedContro12.CustomId:props===null||props===void 0?void 0:(_props$selectedContro13=props.selectedControl)===null||_props$selectedContro13===void 0?void 0:_props$selectedContro13.id,toggleState:props.selectedControl.style[key],handleToggle:handleToggle,field:key},props.selectedControl.id)})]});case"combo":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:BasicControls_module_default.a.leftLabel,children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label)),key==="DefaultUnit"?/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{title:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].toolTip)),classes:{tooltip:classes.tooltip,arrow:classes.arrow},placement:"bottom-start",arrow:true,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:translationStyles1?BasicControls_module_default.a.infoTechSliderArabic:BasicControls_module_default.a.infoTechSlider,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InfoIcon["default"],{})})})}):null]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectForText,children:key!=="FontWeight"?/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{id:props.selectedControl.id+key,className:BasicControls_module_default.a.RightLabelSelectForText,onChange:function onChange(){return selectedOptionForLabel(props.selectedControl.id,PropertiesConfiguration["a" /* default */][key].label,key);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value||PropertiesConfiguration["a" /* default */][key].children[optionCount].Value===""||PropertiesConfiguration["a" /* default */][key].children[optionCount].Value==="Select"){var _ControlsMap$key$chil,_ControlsMap$key$chil2;return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value===props.selectedControl.style[key]?/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil===void 0?void 0:_ControlsMap$key$chil.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:true,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))}):/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil2=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil2===void 0?void 0:_ControlsMap$key$chil2.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))})});}})},props.selectedControl.id)}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{id:props.selectedControl.id+key,className:BasicControls_module_default.a.RightLabelSelectForText,value:props===null||props===void 0?void 0:(_props$selectedContro14=props.selectedControl)===null||_props$selectedContro14===void 0?void 0:_props$selectedContro14["FontWeightKey"],onChange:function onChange(){return selectedOptionForLabel(props.selectedControl.id,PropertiesConfiguration["a" /* default */][key].label,key);},children:props.selectedControl.style&&props.selectedControl.style["FontFamily"]?FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children.map(function(optionTagData,optionCount){if(FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Value||FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Value===""||FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Value==="Select"){return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Value===props.selectedControl.style["FontWeightKey"]?/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Value,selected:true,children:t("translation:".concat(FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Title))}):/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Value,children:t("translation:".concat(FontWeightList["a" /* FontWeightListJson */][props.selectedControl.style["FontFamily"]].children[optionCount].Title))})});}}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children.map(function(optionTagData,optionCount){if(FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children[optionCount].Title){return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children[optionCount].Value===props.selectedControl.style["FontWeightKey"]?/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children[optionCount].Value,selected:true,children:t("translation:".concat(FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children[optionCount].Title))}):/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children[optionCount].Value,children:t("translation:".concat(FontWeightList["a" /* FontWeightListJson */]["Open Sans"].children[optionCount].Title))})});}})})},props.selectedControl.id)})})]})});case"hr":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{className:BasicControls_module_default.a.hrTag})});case"colorpicker":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"colorpicker",children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label)),/*#__PURE__*/Object(jsx_runtime["jsx"])(ColorPicker["a" /* default */],{color:props.selectedControl.style[key],handleProperty:handleProperty,propertyName:key},props.selectedControl.id)]},props.selectedControl.id+key);case"headerslider":return/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:BasicControls_module_default.a.propertiesHeaderSliderLabel,style:((_window4=window)===null||_window4===void 0?void 0:(_window4$appformBuild=_window4.DeptiKURProcess_configs)===null||_window4$appformBuild===void 0?void 0:_window4$appformBuild.selectedLanguage)==="ar"||((_window5=window)===null||_window5===void 0?void 0:(_window5$appformBuild=_window5.DeptiKURProcess_configs)===null||_window5$appformBuild===void 0?void 0:_window5$appformBuild.selectedLanguage)==="ar-SA"?{textAlign:"right"}:null,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))});case"header":return/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:BasicControls_module_default.a.propertiesHeaderSlider,style:((_window6=window)===null||_window6===void 0?void 0:(_window6$appformBuild=_window6.DeptiKURProcess_configs)===null||_window6$appformBuild===void 0?void 0:_window6$appformBuild.selectedLanguage)==="ar"||((_window7=window)===null||_window7===void 0?void 0:(_window7$appformBuild=_window7.DeptiKURProcess_configs)===null||_window7$appformBuild===void 0?void 0:_window7$appformBuild.selectedLanguage)==="ar-SA"?{textAlign:"right"}:null,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[key!=="Label"?/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key]// className={styles.checkBoxLayoutStyletextArea}
,className:[BasicControls_module_default.a.checkBoxLayoutStyletextArea,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" ")//  rows="2" cols="41"
,id:props.selectedControl.id+key,defaultValue:props.selectedControl.style[key],onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value);}},props.selectedControl.id):/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:BasicControls_module_default.a.sliderLayoutStyletextArea//  rows="2" cols="41"
,id:props.selectedControl.id+key,defaultValue:props.selectedControl.style[key],onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value);}},props.selectedControl.id),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]})]});case"textareamandatorymessage":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:props.selectedControl.style["Mandatory"]!==undefined&&props.selectedControl.style["Mandatory"]!==null&&props.selectedControl.style["Mandatory"]==="true"?/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.errorMandatoryMessage,children:t("translation:".concat("Error message if not filled"))}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:[BasicControls_module_default.a.textBoxLayoutStyletextAreaSpecialCharacter,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" ")// rows="2" cols="39"
,defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,placeholder:"Enter error message",onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value);}},props.selectedControl.id)]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]}):null});case"eventbutton":return/*#__PURE__*/Object(jsx_runtime["jsx"])(Events["a" /* default */],{json:EventList["a" /* EventListjson */]// value={value}
,value:props.selectedControl.event,elemtype:props.selectedControl.controlName,updateEventData:function updateEventData(eventJson){return _updateEventData(eventJson);}},props.selectedControl.id+"_eventsProperty");}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Slider",handleDelete:deleteControl,id:props.selectedControl.id,customId:props===null||props===void 0?void 0:(_props$selectedContro15=props.selectedControl)===null||_props$selectedContro15===void 0?void 0:(_props$selectedContro16=_props$selectedContro15.style)===null||_props$selectedContro16===void 0?void 0:_props$selectedContro16.CustomId}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodySheetProperties,children:[CollapsibleItems.map(function(item,index){return item;}),showTableBackdrop===true?/*#__PURE__*/Object(jsx_runtime["jsx"])(SliderProperties_CustomBackdrop,{selectedControl:props.selectedControl,properties:props.selectedControl.propertyList,setProperties:setProperties,editCheck:editCheck,setEditCheck:setEditCheck,indexOfProperty:indexOfProperty,setIndexOfProperty:setIndexOfProperty,setProperty:setProperty,property:property,setShowTableBackdrop:setShowTableBackdrop}):null]})}),mappingField&&/*#__PURE__*/Object(jsx_runtime["jsx"])(MappingFile["a" /* default */],{stateOpen:true,setMappingField:setMappingField,controlData:props.selectedControl,elementType:props.selectedControl.controlName}),alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData})]});};/* harmony default export */ var IFormDesignerComponents_SliderProperties_SliderProperties = __webpack_exports__["default"] = (SliderProperties_SliderProperties);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function SvgDeleteg(){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("svg",{width:"11px",height:"16px",viewBox:"0 0 11 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("title",{children:"Delete"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("g",{id:"Final-Deliverables",stroke:"none",strokeWidth:"1",fill:"#697A8B",fillRule:"evenodd",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{id:"Group-4-Copy-11",fill:"#697A8B",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{d:"M2,0 L9,0 L9,1 L11,1 L11,2 L0,2 L0,1 L2,1 L2,0 Z",id:"Combined-Shape"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{d:"M0,16 L11,16 L11,3 L0,3 L0,16 Z M2,13 L3,13 L3,6 L2,6 L2,13 Z M5,13 L6,13 L6,6 L5,6 L5,13 Z M8,13 L9,13 L9,6 L8,6 L8,13 Z",id:"Fill-3"})]})})]});}/* harmony default export */ __webpack_exports__["default"] = (SvgDeleteg);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontWeightListJson; });
var FontWeightListJson={"Select":{'Title':'Open Sans','Value':'Open Sans','children':[{'Title':'Select','Value':''},{'Title':'Light','Value':'Light'},{'Title':'Light Italic','Value':'Light Italic'},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},// {'Title':'Semibold', 'Value':'Semibold'},     
// {'Title':'Semibold Italic', 'Value':'Semibold Italic'},    
{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Open Sans":{'Title':'Open Sans','Value':'Open Sans','children':[{'Title':'Select','Value':''},{'Title':'Light','Value':'Light'},{'Title':'Light Italic','Value':'Light Italic'},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Semibold','Value':'Semibold'},{'Title':'Semibold Italic','Value':'Semibold Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Inter":{'Title':'Inter','Value':'Inter','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Montserrat":{'Title':'Montserrat','Value':'Montserrat','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Raleway":{'Title':'Raleway','Value':'Raleway','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Roboto":{'Title':'Roboto','Value':'Roboto','children':[{'Title':'Select','Value':''},{'Title':'Light','Value':'Light'},{'Title':'Light Italic','Value':'Light Italic'},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},// {'Title':'Semibold', 'Value':'Semibold'},     
// {'Title':'Semibold Italic', 'Value':'Semibold Italic'},    
{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Lato":{'Title':'Lato','Value':'Lato','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Source Sans Pro":{'Title':'SourceSansPro','Value':'SourceSansPro','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Work Sans":{'Title':'WorkSans','Value':'WorkSans','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Oswald":{'Title':'Oswald','Value':'Oswald','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Poppins":{'Title':'Poppins','Value':'Poppins','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Muli":{'Title':'Muli','Value':'Muli','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Nunito":{'Title':'Nunito','Value':'Nunito','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Merriweather":{'Title':'Merriweather','Value':'Merriweather','children':[{'Title':'Select','Value':''},{'Title':'Light','Value':'Light'},{'Title':'Light Italic','Value':'Light Italic'},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Semibold','Value':'Semibold'},{'Title':'Semibold Italic','Value':'Semibold Italic'}]},"LORA":{'Title':'LORA','Value':'LORA','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Playfair Display":{'Title':'PlayfairDisplay','Value':'PlayfairDisplay','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Sans-Serif":{'Title':'Sans-Serif','Value':'Sans-Serif','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Exo":{'Title':'Exo','Value':'Exo','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Arial":{'Title':'Arial','Value':'Arial','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Segoe UI":{'Title':'Segoe UI','Value':'SegoeUI','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"georgia":{'Title':'Georgia','Value':'Georgia','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"courier-new":{'Title':'Courier New','Value':'Courier-New','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Lucida Console":{'Title':'Lucida Console','Value':'Lucida Console','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},//   {'Title':'Lucida Console', 'Value':'Lucida Console'},
"Oblique":{'Title':'Oblique','Value':'Oblique','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Times New Roman":{'Title':'Times New Roman','Value':'Times New Roman','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Product Sans":{'Title':'Product Sans','Value':'Product Sans','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Helvetica Neue":{'Title':'Helvetica Neue','Value':'Helvetica Neue','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Tahoma":{'Title':'Tahoma','Value':'Tahoma','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Verdana":{'Title':'Verdana','Value':'Verdana','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"Arvo":{'Title':'Arvo','Value':'Arvo','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"calibri":{'Title':'Calibri','Value':'calibri','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]},"oblique":{'Title':'oblique','Value':'oblique','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
{'Title':'Semibold','Value':'Semibold'},{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Comic Sans MS":{'Title':'Comic Sans MS','Value':'Comic Sans MS','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},// {'Title':'Medium', 'Value':'Medium'},
// {'Title':'Semibold', 'Value':'Semibold'},        
{'Title':'Bold','Value':'Bold'},{'Title':'Regular Italic','Value':'Regular Italic'}]},"Gotham":{'Title':'Gotham','Value':'Gotham','children':[{'Title':'Select','Value':''},{'Title':'Regular','Value':'Regular'},{'Title':'Regular Italic','Value':'Regular Italic'},{'Title':'Bold','Value':'Bold'},{'Title':'Bold Italic','Value':'Bold Italic'}]}};

/***/ })

}]);
//# sourceMappingURL=SliderProperties.cb868dee9ede4bf2e3b9.js.map