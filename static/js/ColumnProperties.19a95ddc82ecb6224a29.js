(this["fb_mf"] = this["fb_mf"] || []).push([[12],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscreteSlider; });
/* harmony import */ var E_iBPS6_CICD_Build_Compilation_DeptiKURProcess_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2174);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2319);
/* harmony import */ var _Resources_CanvasContextFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(109);
/* harmony import */ var _Redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);
/* harmony import */ var _components_CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function(theme){return{// root: {
//   width: 250,
// },
// margin: {
//   height: theme.spacing(3),
// },
sliderRoot:{width:"245px",marginLeft:"4px",marginBottom:"15px",'& .MuiSlider-track':{height:"4px",backgroundColor:"#0072C6"},'& .MuiSlider-rail':{height:"4px"},'& .MuiSlider-thumb':{height:"13px",width:"13px",backgroundColor:"#0072C6",border:"2px solid #0072C6"},'& .MuiSlider-mark MuiSlider-markActive':{},'& .MuiSlider-mark':{backgroundColor:"#ffffff",display:"none"},'& .MuiSlider-markLabel MuiSlider-markLabelActive':{left:"19% !important"},'& .MuiSlider-markLabel':{left:"95%"},'& .MuiInput-underline:before':{width:"35px",height:"2px"// marginBottom:"-10px"
},'& .MuiInput-underline:after':{width:"35px",height:"2px"// marginBottom:"-10px"
},'& .MuiInputBase-input':{width:"38px",height:"8px",fontSize:"12px",marginBottom:"-5px",marginLeft:"3px"}}};});function DiscreteSlider(props){var _selectedControl$styl;var classes=useStyles();var selectedControl=props.selectedControl,selectKey=props.selectKey,min=props.min,max=props.max,step=props.step,defaultValue=props.defaultValue,marks=props.marks;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(selectKey==="w"||selectKey==="md"||selectKey==="sm"||selectKey==="xs"?selectedControl===null||selectedControl===void 0?void 0:selectedControl[selectKey]:selectedControl===null||selectedControl===void 0?void 0:(_selectedControl$styl=selectedControl.style)===null||_selectedControl$styl===void 0?void 0:_selectedControl$styl[selectKey]),_useState2=Object(E_iBPS6_CICD_Build_Compilation_DeptiKURProcess_war_SVNCode_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState,2),val=_useState2[0],setVal=_useState2[1];// const contexts = useSelector(
//   state=>({
//       contexts:state.contexts
//   })
// );
// const { updateJson} = useContext(AppContext);
// const { updatedComponentInFormState} = updateJson;
var contexts=Object(_components_CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_7__[/* GetStateFromData */ "b"])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,device=_contexts$contexts.device;var updatedComponentInFormState=updateJson.updatedComponentInFormState;Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){var _selectedControl$styl2;if(!Object(_Resources_globalFunctions__WEBPACK_IMPORTED_MODULE_6__[/* isObjectEmpty */ "j"])(selectedControl))setVal(selectKey==="w"||selectKey==="md"||selectKey==="sm"||selectKey==="xs"?selectedControl===null||selectedControl===void 0?void 0:selectedControl[selectKey]:selectedControl===null||selectedControl===void 0?void 0:(_selectedControl$styl2=selectedControl.style)===null||_selectedControl$styl2===void 0?void 0:_selectedControl$styl2[selectKey]);},[JSON.stringify(selectedControl)]);var handleChange=function handleChange(event,value){setVal(function(){return value;});if(selectKey==="w"||selectKey==="sm"||selectKey==="xs"){if(device==="web"&&selectKey==="w"||device==="tablet"&&selectKey==="sm"||device==="mobile"&&selectKey==="xs"){selectedControl[selectKey]=value;selectedControl["md"]=value;}else{selectedControl[selectKey]=value;}}else{selectedControl.style[selectKey]=value;}};function handleMouseUp(){updatedComponentInFormState(selectedControl.id,selectedControl);}return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div",{className:classes.root,children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{containerId:props.containerId,classes:{root:classes.sliderRoot},step:step?step:1,min:min?min:0,max:max?max:100,defaultValue:defaultValue?defaultValue:0,valueLabelDisplay:"auto",marks:marks?marks:null,value:val,onChange:handleChange,onClick:handleMouseUp})});}

/***/ }),

/***/ 2348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// CONCATENATED MODULE: ./src/components/Properties/COLPropertiesJson.jsx
var COLPropertiesJson={"Basic":{w:"",slider:{label:"w",field:"w"},heightselect:{field:"heightselect"},colheight:{label:"Height"}},"Responsive Behaviour":{sm:"",slider3:{label:"sm",field:"sm"},xs:"",slider4:{label:"xs",field:"xs"},colPadding:{label:"Remove Padding",field:"colPadding"}}};/* harmony default export */ var Properties_COLPropertiesJson = (COLPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/ColorPicker/ColorPicker.jsx
var ColorPicker = __webpack_require__(91);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./src/Redux/index.js
var Redux = __webpack_require__(69);

// EXTERNAL MODULE: ./src/Resources/CanvasContextFile.jsx
var CanvasContextFile = __webpack_require__(109);

// EXTERNAL MODULE: ./src/UI/BasicFormControls/Slider/Slider.js
var Slider = __webpack_require__(1031);

// EXTERNAL MODULE: ./src/ReusableComponents/ActiveIcon/ActiveIcon.jsx
var ActiveIcon = __webpack_require__(124);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/RequestLogic.jsx
var RequestLogic = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/ColumnProperties/ColumnProperties.jsx
var ColumnProperties_ColumnProperties=function ColumnProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro,_props$selectedContro2;var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.DeptiKURProcess_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.DeptiKURProcess_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _useTranslation=Object(useTranslation["a" /* useTranslation */])(['styles','translation']),t=_useTranslation.t;var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,changeSectionLayout=_contexts$contexts.changeSectionLayout,device=_contexts$contexts.device,formState2=_contexts$contexts.formState2,deleteControl=_contexts$contexts.deleteControl,setQuickToolsClose=_contexts$contexts.setQuickToolsClose,customControlIdList=_contexts$contexts.customControlIdList,setCustomControlIdList=_contexts$contexts.setCustomControlIdList,currentDevice=_contexts$contexts.currentDevice,getElementJson=_contexts$contexts.getElementJson,showAlertConfirmNotifications=_contexts$contexts.showAlertConfirmNotifications;var updatedComponentInFormState=updateJson.updatedComponentInFormState,removeAndUpdateComponentInFormState=updateJson.removeAndUpdateComponentInFormState;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),errorMessageId=_useState2[0],setErrorMessageId=_useState2[1];var _useState3=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),alertData=_useState4[0],setAlertData=_useState4[1];var globalTheme=formState2.theme;if(props.selectedControl.style&&(props===null||props===void 0?void 0:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:(_props$selectedContro2=_props$selectedContro.style)===null||_props$selectedContro2===void 0?void 0:_props$selectedContro2["heightselect"])===undefined){props.selectedControl.style["heightselect"]="set";}// const { updateJson,deleteControl } = useContext(AppContext);
// const { updatedComponentInFormState, removeAndUpdateComponentInFormState} =updateJson;
// const {changeSectionLayout} = useContext(AppContext);
// const AppContextVar = useContext(AppContext);
// var currentDevice;
// if(AppContextVar!==undefined){
//     globalTheme = AppContextVar.formState2 && AppContextVar.formState2.theme;
//     currentDevice = AppContextVar.device;
// }
// console.log("Column")
// console.log(props.selectedControl);
var CollapsibleItems=[];Object.keys(Properties_COLPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_COLPropertiesJson[key]).forEach(function(property){var fetchedProperty=property.replace(/\d+/g,"");// console.log("col props..", property,COLPropertiesJson[key],COLPropertiesJson[key][property])
collapseComponentBody.push(prepareHtmlTag(fetchedProperty,Properties_COLPropertiesJson[key][property],PropertiesConfiguration["a" /* default */][fetchedProperty].type));});CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});// console.log("props..", device);
// function handleProperty(propertyName, propertyValue, event) {
//     console.log("Col props..", propertyName, propertyValue);
//     let temp_style = props.selectedControl.style;
//     temp_style[propertyName] = propertyValue;
//     props.selectedControl.style[propertyName] = propertyValue;
//     updatedComponentInFormState(
//       props.selectedControl.id,
//       props.selectedControl
//     );   
// }
function handleProperty(propertyName,propertyValue,event){//console.log(propertyValue);
// console.log("propertyNameMulti ", propertyName);
// console.log("propertyNameMulti ", propertyValue);
if(propertyName.includes("colheight")){//  console.log("prop..", props.selectedControl, props.selectedControl.id, document.getElementById(props.selectedControl.id),document.getElementById(props.selectedControl.id).offsetHeight);
props.selectedControl.style["prevheight"]=document.getElementById(props.selectedControl.id).offsetHeight;props.selectedControl.style[propertyName]=propertyValue;props.selectedControl.style.colheight1=propertyValue;var parentRow=event.currentTarget.closest("[elem_type=row]");// let json = getElementJson(formState2, parentRow, "row")
// console.log("prop..", parentRow);   
}else{var temp_style=props.selectedControl.style;temp_style[propertyName]=propertyValue;props.selectedControl.style[propertyName]=propertyValue;if(propertyValue==="auto"){props.selectedControl.style.colheight="auto";}else{var _props$selectedContro3;props.selectedControl.style.colheight=(_props$selectedContro3=props.selectedControl.style)===null||_props$selectedContro3===void 0?void 0:_props$selectedContro3.colheight1;}}if(propertyName.includes('Label')){if(propertyValue==="Regular Italic"){props.selectedControl.style[propertyName]="normal";props.selectedControl.style["LabelFontStyle"]="italic";}else if(propertyValue==="Semibold"){props.selectedControl.style[propertyName]="600";props.selectedControl.style["LabelFontStyle"]="normal";}else if(propertyValue==="Bold"){props.selectedControl.style[propertyName]="bold";props.selectedControl.style["LabelFontStyle"]="normal";}else if(propertyValue==="Regular"){props.selectedControl.style[propertyName]="normal";props.selectedControl.style["LabelFontStyle"]="normal";}}else{if(propertyValue==="Regular Italic"){props.selectedControl.style[propertyName]="normal";props.selectedControl.style["FontStyle"]="italic";}else if(propertyValue==="Semibold"){props.selectedControl.style[propertyName]="600";props.selectedControl.style["FontStyle"]="normal";}else if(propertyValue==="Bold"){props.selectedControl.style[propertyName]="bold";props.selectedControl.style["FontStyle"]="normal";}else if(propertyValue==="Regular"){props.selectedControl.style[propertyName]="normal";props.selectedControl.style["FontStyle"]="normal";}}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);try{if(propertyName==="CustomId"){if(propertyValue!==props.selectedControl.style.CustomId){var element=event.target;console.log("id",props.selectedControl,"propertyValue::"+propertyValue);var jsonToSend={customControlId:propertyValue,controlid:props.selectedControl.id};Object(RequestLogic["Q" /* validateCustomControlId */])(jsonToSend).then(function(response){if(response&&response.data&&response.data.status==="0"){var _temp_style=props.selectedControl.style;// temp_style[propertyName] = propertyValue;
// props.selectedControl.style[propertyName] = propertyValue;
var updatedJson=Object(UserIdLogic["b" /* updateUserId */])(props.selectedControl,// whole control Json
propertyValue//newly defined id
// temp_style[propertyName], //getting previous ControlId
// undefined // precedence from formState
);if(updatedJson){updatedComponentInFormState(props.selectedControl.id,updatedJson);}}else if(response&&response.data&&response.data.status==="-1"){showAlertConfirmNotifications({'open':true,'showConfirm':'showNotification','alertType':'error','alertContentKey':"CustomControl Id already Exist"});element.value=props.selectedControl.style.CustomId||"";}}).catch(function(error){// handle error
element.value=props.selectedControl.style.CustomId||"";console.log(error);console.log("Server side error "+error);});}}// else if (
//   event &&
//   event.which !== 8 &&
//   event.which !== 46 &&
//   !regexValidator(
//     String.fromCharCode(event.which),
//     ControlsMap[propertyName]["regexType"]
//   )
// ) {
//   event.preventDefault();
//   //setErrorMessageId(inputBoxId);
//   setAlertData({
//     ...ControlsMap["customizedAlertNotificationData"],
//     open: true,
//     alertContentKey: "RegexErrorMessage",
//   });
// } 
else{var _temp_style2=props.selectedControl.style;_temp_style2[propertyName]=propertyValue;props.selectedControl.style[propertyName]=propertyValue;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);setErrorMessageId(false);}}catch(e){}}function validateRegex(propertyName,propertyValue,event,inputBoxId){try{if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(String.fromCharCode(event.which),PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();// setErrorMessageId(inputBoxId);
setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setErrorMessageId(false);}}catch(e){console.log("Error while validating regex");}}function selectedOptionForLabel(selectedControlId,selectedControlLabel,ControlLabelKey){var select=document.getElementById(selectedControlId+ControlLabelKey);var option_tag=select.options[select.selectedIndex];var temp_style=props.selectedControl;temp_style[ControlLabelKey]=parseInt(option_tag.value);if(props.selectedControl["style"]===undefined){props.selectedControl["style"]={};}if(ControlLabelKey==="w"||ControlLabelKey==="sm"||ControlLabelKey==="xs"){if(device==="web"&&ControlLabelKey==="w"||device==="tablet"&&ControlLabelKey==="sm"||device==="mobile"&&ControlLabelKey==="xs"){props.selectedControl[ControlLabelKey]=parseInt(option_tag.value);props.selectedControl["md"]=parseInt(option_tag.value);}else{props.selectedControl[ControlLabelKey]=parseInt(option_tag.value);}}else{props.selectedControl["style"][ControlLabelKey]=parseInt(option_tag.value);}if(currentDevice!==undefined){// console.log("COl props..", "hello",  currentDevice)
if(currentDevice==='web'){props.selectedControl["w"]=parseInt(option_tag.value);}else if(currentDevice==='tablet'){props.selectedControl['sm']=parseInt(option_tag.value);}else if(currentDevice==='mobile'){props.selectedControl['xs']=parseInt(option_tag.value);}}else{console.log('Issue with the device selector!');}// console.log("COl props..", props.selectedControl.id);
updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}// console.log("COl props..", props.selectedControl, currentDevice);
function handleToggle(e,field){var value=e.target.value;props.selectedControl.style[field]=value;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function prepareHtmlTag(key,value,type){var _props$selectedContro4,_props$selectedContro5,_props$selectedContro6,_props$selectedContro7,_props$selectedContro8,_props$selectedContro9,_props$selectedContro10,_props$selectedContro11;switch(type.toLowerCase()){case"header":return/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{className:BasicControls_module_default.a.propertiesHeaderColumn,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:value.field==="showIcon"?"customToggleBtn1":"toggleBtn",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" ",t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{handleToggle:handleToggle,field:value.field,toggleState:props===null||props===void 0?void 0:(_props$selectedContro4=props.selectedControl)===null||_props$selectedContro4===void 0?void 0:(_props$selectedContro5=_props$selectedContro4.style)===null||_props$selectedContro5===void 0?void 0:_props$selectedContro5[value.field]},props.selectedControl.id)]});case"combo":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.ColumnSelectForText1,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{id:props.selectedControl.id+key,value:key==="w"||key==="sm"||key==="xs"?props.selectedControl[key]:props.selectedControl.style[key],className:BasicControls_module_default.a.ColumnSelectForText2,onChange:function onChange(){return selectedOptionForLabel(props.selectedControl.id,PropertiesConfiguration["a" /* default */][key].label,key);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){var _ControlsMap$key$chil,_ControlsMap$key$chil2;return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value===props.selectedControl[key]?/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil===void 0?void 0:_ControlsMap$key$chil.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:true,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))}):/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil2=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil2===void 0?void 0:_ControlsMap$key$chil2.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))})});}})})})]})});case"slider":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Slider["a" /* default */],{containerId:props.containerId,selectedControl:props.selectedControl,selectKey:value.field,min:1,max:12,marks:[{value:1,label:'1'},{value:12,label:'12'}]})},props.selectedControl&&props.selectedControl.style&&props.selectedControl.style[value.field]);case"heightselect":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{font:"normal normal normal 12px/12px Open Sans",letterSpacing:"0px",color:"#000000",opacity:1},children:t("translation:".concat("Height"))}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(ActiveIcon["a" /* default */],{activeStyle:{padding:"12px 0",width:"122px",height:"40px",border:"2px solid #0072C6",borderRadius:"2px 0px 0px 2px",background:"#fff",margin:"0px",color:"#0072C6",font:"normal normal 600 12px/12px Open Sans"},property:value.field,inActiveStyle:{padding:"12px 0",width:"124px",height:"40px",border:"1px solid #C4C4C4",borderRadius:"2px 0px 0px 2px",background:"#fff",margin:"0px",color:"#C4C4C4",font:"normal normal 600 12px/12px Open Sans"},passedValue:props===null||props===void 0?void 0:(_props$selectedContro6=props.selectedControl)===null||_props$selectedContro6===void 0?void 0:(_props$selectedContro7=_props$selectedContro6.style)===null||_props$selectedContro7===void 0?void 0:_props$selectedContro7["heightselect"],defaultValue:props===null||props===void 0?void 0:(_props$selectedContro8=props.selectedControl)===null||_props$selectedContro8===void 0?void 0:(_props$selectedContro9=_props$selectedContro8.style)===null||_props$selectedContro9===void 0?void 0:_props$selectedContro9["heightselect"],handleStyleType:handleProperty,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{value:"auto",children:t("translation:".concat("Auto Height"))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{value:"set",children:t("translation:".concat("Set Height"))})]})]});case"text":return(props===null||props===void 0?void 0:(_props$selectedContro10=props.selectedControl)===null||_props$selectedContro10===void 0?void 0:(_props$selectedContro11=_props$selectedContro10.style)===null||_props$selectedContro11===void 0?void 0:_props$selectedContro11["heightselect"])==="set"&&/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:BasicControls_module_default.a.leftLabel,children:[" ",t("translation:".concat(value.label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightTextBox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value1",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.RightLabelTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" ")// onKeyPress={(event)=>validateRegex(key, event.target.value,event,props.selectedControl.id+key)}
// onKeyUp={(event)=>validateRegex(key, event.target.value,event,props.selectedControl.id+key)}
,onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Column",handleDelete:deleteControl,id:props.selectedControl.id}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodySheetProperties,children:CollapsibleItems.map(function(item,index){return item;})})}),alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData})]});};/* harmony default export */ var IFormDesignerComponents_ColumnProperties_ColumnProperties = __webpack_exports__["default"] = (ColumnProperties_ColumnProperties);

/***/ })

}]);
//# sourceMappingURL=ColumnProperties.19a95ddc82ecb6224a29.js.map