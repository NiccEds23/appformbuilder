(this["fb_mf"] = this["fb_mf"] || []).push([[48],{

/***/ 2355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(2286);

// EXTERNAL MODULE: ./src/Resources/CanvasContextFile.jsx
var CanvasContextFile = __webpack_require__(109);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/Properties/ReportPropertiesJson.jsx
var ReportPropertiesJson={Basic:{PickList:{label:"Choose Chart Type",field:"reportName"},Toggle1:{label:"Visible",field:"Visible"},Height:""},Display:{Toggle2:{field:"MobileVisible",label:"On Mobile"},Toggle3:{field:"TabsVisible",label:"On Tabs"}},Spacing:{// SpacingLeft: "",
// SpacingRight: "",
// SpacingTop: "",
// SpacingBottom: "",
SpacingLeft:{field:"SpacingLeft"},SpacingRight:{field:"SpacingRight"},SpacingTop:{field:"SpacingTop"},SpacingBottom:{field:"SpacingBottom"}}//  "Custom CSS":{  }
};/* harmony default export */ var Properties_ReportPropertiesJson = (ReportPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// EXTERNAL MODULE: ./src/ReusableComponents/ColorPicker/ColorPicker.jsx
var ColorPicker = __webpack_require__(91);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/ReusableComponents/ImageUploadBtn/ImageUploadBtn.jsx
var ImageUploadBtn = __webpack_require__(115);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./src/Icons/DeleteIcon.jsx
var DeleteIcon = __webpack_require__(167);

// EXTERNAL MODULE: ./src/Icons/Radio/style1.jsx
var style1 = __webpack_require__(261);

// EXTERNAL MODULE: ./src/Icons/Radio/style2.jsx
var style2 = __webpack_require__(262);

// EXTERNAL MODULE: ./src/Icons/Radio/style3.jsx
var style3 = __webpack_require__(263);

// EXTERNAL MODULE: ./src/Icons/PlusOrange.jsx
var PlusOrange = __webpack_require__(170);

// EXTERNAL MODULE: ./src/Icons/RedCross.jsx
var RedCross = __webpack_require__(110);

// EXTERNAL MODULE: ./src/ReusableComponents/ActiveIcon/ActiveIcon.jsx
var ActiveIcon = __webpack_require__(124);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(2216);

// EXTERNAL MODULE: ./src/Icons/ThreeDots.jsx
var ThreeDots = __webpack_require__(114);

// EXTERNAL MODULE: ./src/Icons/Cross.jsx
var Cross = __webpack_require__(234);

// EXTERNAL MODULE: ./src/UI/BasicFormControls/Report/ReportModal.jsx
var ReportModal = __webpack_require__(505);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(2304);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/EventList.js
var EventList = __webpack_require__(125);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/Events.jsx + 20 modules
var Events = __webpack_require__(132);

// EXTERNAL MODULE: ./src/Redux/index.js
var Redux = __webpack_require__(69);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/ReportProperties/ReportProperties.jsx
// import "./ReportProperties.css"
// import StyleJSON from "./MultiSelectPropertiesJSON"
function ReportProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro,_props$selectedContro2,_props$selectedContro5,_props$selectedContro8,_props$selectedContro9;var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,changeSectionLayout=_contexts$contexts.changeSectionLayout,formState2=_contexts$contexts.formState2,deleteControl=_contexts$contexts.deleteControl,setQuickToolsClose=_contexts$contexts.setQuickToolsClose,customControlIdList=_contexts$contexts.customControlIdList,setCustomControlIdList=_contexts$contexts.setCustomControlIdList;var updatedComponentInFormState=updateJson.updatedComponentInFormState,removeAndUpdateComponentInFormState=updateJson.removeAndUpdateComponentInFormState;// const { t } = useTranslation();
var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.deptiKUR_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.deptiKUR_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var _useTranslation=Object(useTranslation["a" /* useTranslation */])(['styles','translation']),t=_useTranslation.t;// const AppContextVar = useContext(AppContext);
// const { updateJson, deleteControl } = useContext(AppContext);
// const { updatedComponentInFormState, removeAndUpdateComponentInFormState } =
//   updateJson;
var style=props.selectedControl.style;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),errorMessageId=_useState2[0],setErrorMessageId=_useState2[1];var _useState3=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),alertData=_useState4[0],setAlertData=_useState4[1];var _useState5=Object(react["useState"])((props===null||props===void 0?void 0:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:(_props$selectedContro2=_props$selectedContro.style)===null||_props$selectedContro2===void 0?void 0:_props$selectedContro2.reportName)||""),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),filter=_useState6[0],setFilter=_useState6[1];var _React$useState=react_default.a.useState(false),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),inputBoxId=_React$useState4[0],setInputBoxId=_React$useState4[1];var iFrameSrcRef=Object(react["useRef"])("");var CollapsibleItems=[];var handleOpen=function handleOpen(){var iframe=document.getElementById(props.selectedControl.id);iFrameSrcRef.current=iframe.src;setOpen(true);};var handleClose=function handleClose(report_name,initiator){setOpen(false);if(report_name&&typeof report_name==='string'){props.selectedControl.style.reportName=report_name;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);setFilter(report_name);}if(initiator==="cancel"){var iframe=document.getElementById(props.selectedControl.id);iframe.src=iFrameSrcRef.current;}};Object(react["useEffect"])(function(){var _props$selectedContro3,_props$selectedContro4;setFilter((props===null||props===void 0?void 0:(_props$selectedContro3=props.selectedControl)===null||_props$selectedContro3===void 0?void 0:(_props$selectedContro4=_props$selectedContro3.style)===null||_props$selectedContro4===void 0?void 0:_props$selectedContro4.reportName)||"");},[props===null||props===void 0?void 0:(_props$selectedContro5=props.selectedControl)===null||_props$selectedContro5===void 0?void 0:_props$selectedContro5.style]);Object.keys(Properties_ReportPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_ReportPropertiesJson[key]).forEach(function(property){var fetchedProperty=property.replace(/\d+/g,"");//used to remove any numbers from property
if(props.selectedControl.style!==undefined&&props.selectedControl.style["ControlStyle"]!==undefined&&props.selectedControl.style["ControlStyle"]!==null&&props.selectedControl.style["ControlStyle"]==="style3"){if(property!=="ColorPicker4"){collapseComponentBody.push(returnHtml(fetchedProperty,Properties_ReportPropertiesJson[key][property],PropertiesConfiguration["a" /* default */][fetchedProperty].type));}}else{if(property!=="ColorPicker5"&&property!=="ColorPicker6"&&property!=="ColorPicker7"&&property!=="ColorPicker8"){collapseComponentBody.push(returnHtml(fetchedProperty,Properties_ReportPropertiesJson[key][property],PropertiesConfiguration["a" /* default */][fetchedProperty].type));}}});CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});function validateRegex(propertyName,propertyValue,event,inputBoxId){try{// console.log(ControlsMap[propertyName]["regexType"]);
// console.log(String.fromCharCode(event.which));
// console.log(regexValidator(String.fromCharCode(event.which), ControlsMap[propertyName]["regexType"]));
var passValue=event===null||event===void 0?void 0:event.key;if(propertyName==="CustomId"){passValue=[propertyValue.slice(0,event.target.selectionEnd)+event.key+propertyValue.slice(event.target.selectionEnd)].join("");}if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!(event.which>=96&&event.which<=105)&&!Object(globalFunctions["l" /* regexValidator */])(passValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();// alert("in regex func");
setErrorMessageId(inputBoxId);setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setErrorMessageId(false);}}catch(e){console.log("Error while validating regex");}}function handleProperty(propertyName,propertyValue,event,inputBoxId){try{// if(event && !(regexValidator( propertyValue, ControlsMap[propertyName]["regexType"]))){
//     event.preventDefault();
//     //setErrorMessageId(inputBoxId);
//     setAlertData(
//         {...ControlsMap["customizedAlertNotificationData"], 'open' : true, 'alertContentKey':'RegexErrorMessage'});
// }
if(propertyName==="Height"&&parseFloat(propertyValue)<150){setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"Height cannot be less than 150px"}));return;}var temp_style=props.selectedControl.style;temp_style[propertyName]=propertyValue;props.selectedControl.style[propertyName]=propertyValue;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);// setErrorMessageId(false);
}catch(e){}}function handleStyleType(property,value){// console.log(value);
// console.log(property);
handleProperty(property,value);}function handleSupProperty(propertyName,propertyValue,event,inputBoxId){try{if(event&&!Object(globalFunctions["l" /* regexValidator */])(propertyValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setErrorMessageId(inputBoxId);}else{if(propertyName==="label"){props.selectedControl[propertyName]=propertyValue;}else{props.selectedControl.style[propertyName]=propertyValue;}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);setErrorMessageId(false);}}catch(e){}}var _updateEventData=function updateEventData(eventJson){// console.log("===>Received Event Json :: ", eventJson);
// console.log("===>Received props.selectedControl :: ", props.selectedControl);
var count=Object.keys(eventJson).length;if(count>0){var Events={};Events["Events"]=eventJson;props.selectedControl["event"]=Events;}// console.log("===> props.selectedControl", props.selectedControl);
updatedComponentInFormState(props.selectedControl.id,props.selectedControl);};function addOptionsFunc(){var oldOptionsArr=props.selectedControl.options||[];var newOptionsArr=[].concat(Object(toConsumableArray["a" /* default */])(oldOptionsArr),[{label:"",value:""}]);props.selectedControl.options=newOptionsArr;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleOptions(e,index){var _e$target=e.target,name=_e$target.name,value=_e$target.value;var oldOptionsArr=props.selectedControl.options||[];var changes;if(name==="label"&&oldOptionsArr[index].value===oldOptionsArr[index].label){var _objectSpread2;changes=Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},oldOptionsArr[index]),{},(_objectSpread2={},Object(defineProperty["a" /* default */])(_objectSpread2,name,value),Object(defineProperty["a" /* default */])(_objectSpread2,"value",value),_objectSpread2));}else{changes=Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},oldOptionsArr[index]),{},Object(defineProperty["a" /* default */])({},name,value));}oldOptionsArr[index]=changes;props.selectedControl.options=oldOptionsArr;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleIcon(iconName,iconFile){var temp_style=style;temp_style["iconName"]=iconName;temp_style["iconFile"]=iconFile;props.selectedControl.style["iconName"]=iconName;props.selectedControl.style["iconFile"]=iconFile;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleToggle(e,field){var value=e.target.value;props.selectedControl.style[field]=value;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}// function handleInputRadio(e,field){
//     const value=e.target.value;shortinput
//     props.selectedControl.style[field] = value;
//     console.log(value, field);
//     updatedComponentInFormState(props.selectedControl.id , props.selectedControl)
// }
function deleteOption(index){var optionsArr=props.selectedControl.options;optionsArr.splice(index,1);props.selectedControl.options=optionsArr;// console.log(optionsArr);
updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleDelete(){setFilter("");props.selectedControl.style.reportName="";delete props.selectedControl.selectId;var iframe=document.getElementById(props.selectedControl.id);iframe.removeAttribute("src");updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function returnHtml(key,value,type){var _props$selectedContro6,_props$selectedContro7;switch(type.toLowerCase()){case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:value.field==="showIcon"?"customToggleBtn1":"toggleBtn",children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" ",t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]})});case"toggletype2":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:value.field==="showIcon"?"customToggleBtn1":"toggleBtn",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" ",t("translation:".concat(value.label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{handleToggle:handleToggle,field:value.field,toggleState:style[value.field]},props.selectedControl.id)]});case"combo":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"combo",children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label)),/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{style:{width:value.field==="zonelist"?"121px":null},value:style[value.field],onChange:function onChange(e){return handleProperty(value.field,e.target.value);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(item){return/*#__PURE__*/Object(jsx_runtime["jsxs"])("option",{value:item.Value,style:item===null||item===void 0?void 0:item.style,children:["  ",t("translation:".concat(item.Title))," "]});})},props.selectedControl.id)]});case"select":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"combo",children:[t("translation:".concat(value.label)),/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{style:{width:value.field==="zonelist"?"121px":null},value:style[value.field],onChange:function onChange(e){return handleProperty(value.field,e.target.value);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(item){return/*#__PURE__*/Object(jsx_runtime["jsxs"])("option",{value:item.Value,children:["   ",t("translation:".concat(item.Title))," "]});})},props.selectedControl.id)]});case"text":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.RightTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value1",type:"text",defaultValue:props.selectedControl.style[key].replace(/\D/g,''),className:BasicControls_module_default.a.RightLabelTextBox,onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id),key!=="CustomId"?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.RightTextboxPlaceholderArabic:BasicControls_module_default.a.RightTextboxPlaceholder,style:{top:"-22px"},children:"px"}):null]})]});case"line":return/*#__PURE__*/Object(jsx_runtime["jsx"])("hr",{className:"line",size:value.size,color:value.color,width:value.width});case"colorpicker":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"colorpicker",children:[t("translation:".concat(value.label)),/*#__PURE__*/Object(jsx_runtime["jsx"])(ColorPicker["a" /* default */],{color:style[value.field],handleProperty:handleProperty,propertyName:value.field},props.selectedControl.id)]});case"textbox":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.labelForLabel,children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value2",type:"text",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.textBoxLayoutForLable,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"textarea",children:[t("translation:".concat(value.label)),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value3",autoComplete:"off",rows:"2",defaultValue:value.field==="label"?props.selectedControl[value.field]:props.selectedControl.style[value.field],className:[errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(e){return handleSupProperty(value.field,e.target.value,e,props.selectedControl.id+key);},onKeyUp:function onKeyUp(e){return handleSupProperty(value.field,e.target.value,e,props.selectedControl.id+key);}},props.selectedControl.id)]});case"input":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(value.label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectDiv1,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.TableHeightinput,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.RightLabelTextInputSpanReport,children:"px"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value4",type:"text",className:BasicControls_module_default.a.RightLabelTextInputTable,defaultValue:props.selectedControl.style[value.field],onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(e){return handleProperty(value.field,e.target.value);}},props.selectedControl.id)]})})]})// <div className="input"    >
//    {/* <div className={styles.reportInput} > */}
//   {/* className={styles.parentDiv} */}
//   {t(`translation:${value.label}`)}
//   <input
//     onKeyPress={(event) =>
//       validateRegex(
//         key,
//         event.target.value,
//         event,
//         props.selectedControl.id + key
//       )
//     }
//     onKeyUp={(event) =>
//       validateRegex(
//         key,
//         event.target.value,
//         event,
//         props.selectedControl.id + key
//       )
//     }
//     onBlur={(e) => handleProperty(value.field, e.target.value)}
//     autoComplete="off"
//   />
// </div>
;case"longinput":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"longinput",children:[t("translation:".concat(value.label)),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value5",autoComplete:"off"})]});case"uploadbtn":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:props.selectedControl.style.showIcon&&props.selectedControl.style.showIcon==="true"&&/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"uploadbtn",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ImageUploadBtn["a" /* default */],{containerId:props.containerId,handleImageUpload:handleIcon,iconName:props.selectedControl.style.iconName})})});case"inputcheckbox":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"inputcheckbox",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value6",type:"checkbox"})," ",/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" \xA0 ",value]})]});case"inputradio":return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"inputradio",children:value.label.map(function(item){{/* console.log(value.label); */}return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value7",type:"radio",id:item.name,name:value.field,checked:item.value===style.ComboType,value:item.value,onClick:function onClick(e){return handleToggle(e,value.field);}}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("label",{"aria-label":item.name,htmlFor:item.name,children:[" \xA0 ",t("translation:".concat(item.name))]})]});})});case"styleoptions":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(ActiveIcon["a" /* default */],{activeStyle:{width:"80px"},layout:"3",defaultValue:"style2",inActiveStyle:{width:"80px"},spacing:"4px",passedValue:style.ControlStyle,property:value.field,handleStyleType:handleStyleType,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(style1["default"],{value:"style1",label:"Style1"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(style2["default"],{value:"style2",label:"Style2"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(style3["default"],{value:"style3",label:"Style3"})]});case"cardlabelvalue":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:props.selectedControl.options&&props.selectedControl.options.map(function(item,count){return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"cardlabelvalue",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[t("translation:".concat("Option Label"))," ",count+1]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value8",autoComplete:"off",placeholder:item.label,defaultValue:item.label,onBlur:function onBlur(e){return handleOptions(e,count);},name:"label"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{onClick:function onClick(){return deleteOption(count);},children:[" ",/*#__PURE__*/Object(jsx_runtime["jsx"])(RedCross["default"],{})," "]}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("p",{children:[t("translation:".concat("Option Value")),"  "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value9",autoComplete:"off",placeholder:item.value,defaultValue:item.value,onBlur:function onBlur(e){return handleOptions(e,count);},name:"value"},props.selectedControl.id)]});})});case"widebutton":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"widebutton",style:{border:"1px solid ".concat(value.color),color:value.color},onClick:addOptionsFunc,children:[" ",/*#__PURE__*/Object(jsx_runtime["jsx"])(PlusOrange["default"],{color:value.color})," \xA0 ",t("translation:".concat(value.label))," "]})});case"optionsselect":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(ActiveIcon["a" /* default */],{activeStyle:{padding:"10px",background:"#fff",margin:"0"},property:value.field,inActiveStyle:{padding:"10px",background:"#fff",margin:"0"},passedValue:style.addOptionsMethod,handleStyleType:handleStyleType,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:{margin:"0 8px 0 8px"},value:"manually",children:"Create Manually"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{value:"database",children:"Fetch from Database"})]});case"databaseQuery":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{});case"picklist":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Group,{className:BasicControls_module_default.a.parentDivTopBottom,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"text",style:{color:value.color,fontWeight:value.weight},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{className:BasicControls_module_default.a.topBottomLabel,children:["  ",t("translation:".concat(value.label))]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{style:{display:"flex"},className:BasicControls_module_default.a.reportPicklist// style={{
//   border: "1px solid #c4c4c4",
//   height: "24px",
//   display: "flex",
// }}
,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value11"// inputProps={{
//   "aria-label":"Control Value1"
// }}
//   style={{ 
//   height: "24px", 
//   width: "239px", 
//   paddingLeft:"5px", 
//   fontSize:"12px" 
// }}
,className:BasicControls_module_default.a.inputPicklistReport// placeholder="Search"
,value:filter||props.selectedControl.style.reportName,disabled:true,onChange:function onChange(e){return setFilter(e.target.value);}}),((_props$selectedContro6=props.selectedControl)===null||_props$selectedContro6===void 0?void 0:(_props$selectedContro7=_props$selectedContro6.style)===null||_props$selectedContro7===void 0?void 0:_props$selectedContro7.reportName)===""?"":/*#__PURE__*/Object(jsx_runtime["jsx"])("button",{// style={{ background: "none", border: "none" }}
className:BasicControls_module_default.a.buttonReport,onClick:function onClick(){handleDelete();},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Cross["default"]// style={{ marginTop: "6px", marginRight: "6px" }}
,{className:BasicControls_module_default.a.crossReport})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Divider["a" /* default */],{orientation:"vertical"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("button",{// style={{ background: "none", border: "none" }}
className:BasicControls_module_default.a.buttonReport,onClick:function onClick(){handleOpen();},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ThreeDots["default"]//  style={{ width: "36px", height: "4px" }}
,{className:BasicControls_module_default.a.dotsReport})}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Modal["a" /* default */],{open:open,onClose:handleClose,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ReportModal["a" /* default */],{closeModal:handleClose,data:props.selectedControl,containerId:props===null||props===void 0?void 0:props.containerId// selectedReportId={selectedReportId} setSelectedReportId={setSelectedReportId} 
// sessionIdConnection={sessionIdConnection} setSessionIdConnection={setSessionIdConnection}
// data={data} setData={setData} 
//  enableNext={enableNext}  setEnableNext={setEnableNext}
// enablePrev={enablePrev} setEnablePrev={setEnablePrev}
// options={options}  setOptions={setOptions}
})})]})]});case"eventbutton":return/*#__PURE__*/Object(jsx_runtime["jsx"])(Events["a" /* default */],{json:EventList["a" /* EventListjson */],value:props.selectedControl.event,elemtype:props.selectedControl.elem_type,updateEventData:function updateEventData(eventJson){return _updateEventData(eventJson);}},props.selectedControl.id+"_eventsProperty");}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Report",handleDelete:deleteControl,id:props.selectedControl.id,customId:props===null||props===void 0?void 0:(_props$selectedContro8=props.selectedControl)===null||_props$selectedContro8===void 0?void 0:(_props$selectedContro9=_props$selectedContro8.style)===null||_props$selectedContro9===void 0?void 0:_props$selectedContro9.CustomId}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:CollapsibleItems.map(function(item,index){return item;})}),alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData},inputBoxId)]});}/* harmony default export */ var ReportProperties_ReportProperties = __webpack_exports__["default"] = (ReportProperties);

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function style1(){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"69",height:"12",viewBox:"0 0 69 12",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("defs",{children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("style",{})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{transform:"translate(-20 -1232)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{className:"a",fill:"#fff",stroke:"#c4c4c4",transform:"translate(20 1232)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"d",stroke:"none",width:"12",height:"12",rx:"6"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"e",fill:"none",x:"0.5",y:"0.5",width:"11",height:"11",rx:"5.5"})]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{className:"a",fill:"#fff",stroke:"#c4c4c4",transform:"translate(60 1232)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"d",stroke:"none",width:"12",height:"12",rx:"6"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"e",fill:"none",x:"0.5",y:"0.5",width:"11",height:"11",rx:"5.5"})]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"b",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",fill:"#7c7c7c",transform:"translate(35 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"b",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",fill:"#7c7c7c",transform:"translate(75 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"c",fill:"#7c7c7c",width:"4",height:"4",rx:"2",transform:"translate(24 1236)"})]})]});}/* harmony default export */ __webpack_exports__["default"] = (style1);

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function style2(){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"69",height:"12",viewBox:"0 0 69 12",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("defs",{}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{transform:"translate(-114 -1232)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"a",fill:"#7c7c7c",width:"12",height:"12",rx:"6",transform:"translate(114 1232)"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{className:"b",stroke:"#c4c4c4",fill:"#fff",transform:"translate(154 1232)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"e",stroke:"none",width:"12",height:"12",rx:"6"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"f",fill:"none",x:"0.5",y:"0.5",width:"11",height:"11",rx:"5.5"})]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"c",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",fill:"#7c7c7c",transform:"translate(129 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"c",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",fill:"#7c7c7c",transform:"translate(169 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"d",fill:"#fff",width:"4",height:"4",rx:"2",transform:"translate(118 1236)"})]})]});}/* harmony default export */ __webpack_exports__["default"] = (style2);

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function style3(){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"69",height:"16",viewBox:"0 0 67 18",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("defs",{}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{transform:"translate(-210 -1229)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"a",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",fill:"#7c7c7c",transform:"translate(237 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"a",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",fill:"#7c7c7c",transform:"translate(259 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{className:"b",stroke:"#c4c4c4",fill:"#7c7c7c",transform:"translate(210 1229)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{className:"e",stroke:"none",d:"M3,0H23a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{className:"f",fill:"none",d:"M3,.5H22a.5.5,0,0,1,.5.5V17a.5.5,0,0,1-.5.5H3A2.5,2.5,0,0,1,.5,15V3A2.5,2.5,0,0,1,3,.5Z"})]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{className:"c",fill:"none",stroke:"#c4c4c4",transform:"translate(254 1229)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{className:"e",stroke:"none",d:"M0,0H20a3,3,0,0,1,3,3V15a3,3,0,0,1-3,3H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{className:"f",fill:"none",d:"M1,.5H20A2.5,2.5,0,0,1,22.5,3V15A2.5,2.5,0,0,1,20,17.5H1A.5.5,0,0,1,.5,17V1A.5.5,0,0,1,1,.5Z"})]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{className:"c",fill:"none",stroke:"#c4c4c4",transform:"translate(232 1229)",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"e",stroke:"none",width:"23",height:"18"}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("rect",{className:"f",fill:"none",x:"0.5",y:"0.5",width:"22",height:"17"})]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("text",{className:"d",fill:"#fff",fontSize:"8px",fontFamily:"Open Sans",fontWeight:"600",transform:"translate(215 1241)",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("tspan",{x:"0",y:"0",children:"xxx"})})]})]});}/* harmony default export */ __webpack_exports__["default"] = (style3);

/***/ })

}]);
//# sourceMappingURL=ReportProperties.ef8196c3691f88b38eaf.js.map