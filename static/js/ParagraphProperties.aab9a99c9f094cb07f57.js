(this["fb_mf"] = this["fb_mf"] || []).push([[41],{

/***/ 2339:
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

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(2286);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/Properties/ParagraphPropertiesJson.jsx
var ParagraphPropertiesJson={"Basic":{// "UserDefinedControlId" : "",
"CustomId":'',"Visible":""// "ParagraphAlignment" : ""
},"Display":{"MobileVisible":"","TabsVisible":""},"Spacing":{"SpacingLeft":"","SpacingRight":"","SpacingTop":"","SpacingBottom":""}};/* harmony default export */ var Properties_ParagraphPropertiesJson = (ParagraphPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./src/Icons/RedCross.jsx
var RedCross = __webpack_require__(110);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/RequestLogic.jsx
var RequestLogic = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/ParagraphProperties/ParagraphProperties.jsx
var ParagraphProperties_ParagraphProperties=function ParagraphProperties(props){var _props$selectedContro,_window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro2,_props$selectedContro3;var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,deleteControl=_contexts$contexts.deleteControl,showAlertConfirmNotifications=_contexts$contexts.showAlertConfirmNotifications;var updatedComponentInFormState=updateJson.updatedComponentInFormState;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),errorMessageId=_useState2[0],setErrorMessageId=_useState2[1];var _useState3=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),alertData=_useState4[0],setAlertData=_useState4[1];var _useTranslation=Object(useTranslation["a" /* useTranslation */])(["styles","translation"]),t=_useTranslation.t;var _useState5=Object(react["useState"])(props===null||props===void 0?void 0:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:_props$selectedContro.style["CustomId"]),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),customId=_useState6[0],setCustomId=_useState6[1];var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.DeptiKURProcess_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.DeptiKURProcess_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";function handleCombo(comboId){var select=document.getElementById(comboId);var propertyName=select.getAttribute("name");var optionTag=select.options[select.selectedIndex];handleProperty(propertyName,optionTag.value);}function handleProperty(propertyName,propertyValue,event){if(propertyName==="CustomId"){if(propertyValue!==props.selectedControl.style.CustomId){var element=event.target;console.log("id",props.selectedControl,"propertyValue::"+propertyValue);var jsonToSend={customControlId:propertyValue,controlid:props.selectedControl.id};Object(RequestLogic["Q" /* validateCustomControlId */])(jsonToSend).then(function(response){if(response&&response.data&&response.data.status==="0"){var temp_style=props.selectedControl.style;var updatedJson=Object(UserIdLogic["b" /* updateUserId */])(props.selectedControl,// whole control Json
propertyValue//newly defined id
);if(updatedJson){updatedComponentInFormState(props.selectedControl.id,updatedJson);}}else if(response&&response.data&&response.data.status==="-1"){showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"CustomControl Id already Exist"});element.value=props.selectedControl.style.CustomId||"";}}).catch(function(error){element.value=props.selectedControl.style.CustomId||"";console.log(error);showAlertConfirmNotifications({open:true,showConfirm:"showNotification",alertType:"error",alertContentKey:"Server side error ".concat(error)});});}}else{props.selectedControl.style[propertyName]=propertyValue;props.applyChanges(props.formData);updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}}function validateRegex(propertyName,propertyValue,event,inputBoxId){try{if(propertyName==="CustomId"){if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(propertyValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setCustomId(propertyValue);setErrorMessageId(false);}}else{if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(event.key,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setErrorMessageId(false);}}}catch(e){}}function handleToggle(e,field){var value=e.target.value;props.selectedControl.style[field]=value;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function deleteProperty(propertyName){delete props.selectedControl.style[propertyName];props.applyChanges(props.formData);}if(Properties_ParagraphPropertiesJson&&PropertiesConfiguration["a" /* default */]){var CollapsibleItems=[];Object.keys(Properties_ParagraphPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_ParagraphPropertiesJson[key]).forEach(function(property){if(PropertiesConfiguration["a" /* default */][property]&&PropertiesConfiguration["a" /* default */][property].type){collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type));}});if(CollapsibleItems===[]){CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));}CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});}function prepareHtmlTag(key,type,colId){switch(type.toLowerCase()){case"combo":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectDiv2,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:BasicControls_module_default.a.RightLabelSelect1,name:key,id:props.selectedControl.id+key,onChange:function onChange(){return handleCombo(props.selectedControl.id+key);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){var _ControlsMap$key$chil;return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil===void 0?void 0:_ControlsMap$key$chil.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value===props.selectedControl.style[key],children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))});}})},props.selectedControl.id)})]})});case"text_top_bottom":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Group,{className:BasicControls_module_default.a.parentDivTopBottom,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.topBottomLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))})}),key==="CustomId"?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value1",type:"text",value:customId,id:props.selectedControl.id+key,className:[BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onChange:function onChange(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value1",type:"text",defaultValue:props.selectedControl.style[key],id:props.selectedControl.id+key,className:[BasicControls_module_default.a.fullWidthTextBox,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.toggleBtn,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{children:[" ",t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{handleToggle:handleToggle,field:key,toggleState:props.selectedControl.style[key]},props.selectedControl.id)]});case"fullwidthtextinput":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv3,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{"aria-label":"Control Value2",type:"text",className:BasicControls_module_default.a.fullWidthInputText,onBlur:function onBlur(event){return handleProperty(PropertiesConfiguration["a" /* default */][key].label,event.target.value);}},props.selectedControl.id),PropertiesConfiguration["a" /* default */][key].label==="Mapping"?/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.redCrossSpan,onClick:function onClick(){return deleteProperty(PropertiesConfiguration["a" /* default */][key].label);},children:props.selectedControl&&props.selectedControl.style&&props.selectedControl.style[PropertiesConfiguration["a" /* default */][key].label]?/*#__PURE__*/Object(jsx_runtime["jsx"])(RedCross["default"],{}):null}):null]});}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Paragraph",handleDelete:deleteControl,id:props.selectedControl.id,customId:props===null||props===void 0?void 0:(_props$selectedContro2=props.selectedControl)===null||_props$selectedContro2===void 0?void 0:(_props$selectedContro3=_props$selectedContro2.style)===null||_props$selectedContro3===void 0?void 0:_props$selectedContro3.CustomId}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:CollapsibleItems.map(function(item,index){return item;})}),alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData})]});};/* harmony default export */ var IFormDesignerComponents_ParagraphProperties_ParagraphProperties = __webpack_exports__["default"] = (ParagraphProperties_ParagraphProperties);

/***/ })

}]);
//# sourceMappingURL=ParagraphProperties.aab9a99c9f094cb07f57.js.map