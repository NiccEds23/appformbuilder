(this["fb_mf"] = this["fb_mf"] || []).push([[36],{

/***/ 2334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/Properties/ListviewOverlayPropertiesJson.jsx
var ListviewOverlayPropertiesJson={"Basic":{"ListviewOverlayTitle":"","OverlayBackground":"","OverlayButtonAlignment":"","EditOption":""},"Title":{"ShowTitle":"","FontFamily":"","FontSize":"","FontStyle":""}};/* harmony default export */ var Properties_ListviewOverlayPropertiesJson = (ListviewOverlayPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./src/ReusableComponents/ColorPicker/ColorPicker.jsx
var ColorPicker = __webpack_require__(91);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/AdvanceListviewProperties/OverlayProperties.jsx
var OverlayProperties_OverlayProperties=function OverlayProperties(props){function handleCombo(comboId){var select=document.getElementById(comboId);var propertyName=select.getAttribute("name");var optionTag=select.options[select.selectedIndex];handleProperty(propertyName,optionTag.value);}function handleProperty(propertyName,propertyValue){if(props&&props.formData){if(propertyName==="OverlayButtonAlignment"){if(propertyValue==="right")delete props.formData.overlayStyle[propertyName+"left"];else{delete props.formData.overlayStyle[propertyName+"right"];}props.formData.overlayStyle[propertyName+propertyValue]="4px";}else{props.formData.overlayStyle[propertyName]=propertyValue;}props.applyChanges(props.formData);}}if(Properties_ListviewOverlayPropertiesJson&&PropertiesConfiguration["a" /* default */]){var CollapsibleItems=[];Object.keys(Properties_ListviewOverlayPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_ListviewOverlayPropertiesJson[key]).forEach(function(property){if(PropertiesConfiguration["a" /* default */][property]&&PropertiesConfiguration["a" /* default */][property].type){collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type));}});if(CollapsibleItems===[]){CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));}CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});}function prepareHtmlTag(key,type,colId,colStyle){switch(type.toLowerCase()){case"combo":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv2,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:PropertiesConfiguration["a" /* default */][key].label}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectDiv1,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:BasicControls_module_default.a.RightLabelSelect1Combo,name:key,id:props.selectedControl.id+key,onChange:function onChange(){return handleCombo(props.selectedControl.id+key);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){if(props&&props.formData&&props.formData.overlayStyle&&props.formData.overlayStyle[key]===PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:true,children:PropertiesConfiguration["a" /* default */][key].children[optionCount].Title});}else{return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,children:PropertiesConfiguration["a" /* default */][key].children[optionCount].Title});}}})})})]});case"colorpicker":return/*#__PURE__*/ (// <div className={styles.parentDiv}>
//     <span className={styles.leftLabel}>{ControlsMap[key].label}</span>
//     <div className={styles.RightLabelColorPickerDiv}>
//         <ColorPicker handleStyleChange={(hexValue)=>handleProperty(key, hexValue)}/>
//     </div>
// </div>
Object(jsx_runtime["jsxs"])("div",{className:["colorpicker",BasicControls_module_default.a.parentDiv2].join(" "),children:[PropertiesConfiguration["a" /* default */][key].label,/*#__PURE__*/Object(jsx_runtime["jsx"])(ColorPicker["a" /* default */],{color:props&&props.formData&&props.formData.overlayStyle?props.formData.overlayStyle[key]:null,handleProperty:handleProperty,propertyName:key})]}));case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv2,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:PropertiesConfiguration["a" /* default */][key].label}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{toggleState:props&&props.formData&&props.formData.overlayStyle?props.formData.overlayStyle[key]:null,handleToggle:function handleToggle(value,e){return handleProperty(key,value);}})]});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.textAreaParentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:PropertiesConfiguration["a" /* default */][key].label}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":PropertiesConfiguration["a" /* default */][key].label,defaultValue:props&&props.formData&&props.formData.overlayStyle?props.formData.overlayStyle[key]:null,className:BasicControls_module_default.a.textAreaDiv,onChange:function onChange(event){return handleProperty(PropertiesConfiguration["a" /* default */][key].label,event.target.value);}})})]});}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:"Listview Overlay"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodyButtonProperties,children:CollapsibleItems.map(function(item,index){return item;})})})]});};/* harmony default export */ var AdvanceListviewProperties_OverlayProperties = __webpack_exports__["default"] = (OverlayProperties_OverlayProperties);

/***/ })

}]);
//# sourceMappingURL=OverlayProperties.c72fe9cf1ed946818dcd.js.map