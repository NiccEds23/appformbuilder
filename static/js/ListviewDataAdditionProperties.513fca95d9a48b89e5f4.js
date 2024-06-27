(this["fb_mf"] = this["fb_mf"] || []).push([[30],{

/***/ 2333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/Properties/ListviewDataAdditionPropertiesJson.jsx
var ListviewDataAdditionPropertiesJson={"Basic":{"Title":"","SectionBackground":"","ButtonAlignment":""},"Title":{"ShowTitle":"","FontFamily":"","FontSize":"","FontStyle":""}};/* harmony default export */ var Properties_ListviewDataAdditionPropertiesJson = (ListviewDataAdditionPropertiesJson);
// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./src/ReusableComponents/ColorPicker/ColorPicker.jsx
var ColorPicker = __webpack_require__(91);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/Icons/DeleteIcon.jsx
var DeleteIcon = __webpack_require__(167);

// EXTERNAL MODULE: ./src/Icons/AddColumnIcon.jsx
var AddColumnIcon = __webpack_require__(149);

// EXTERNAL MODULE: ./src/Icons/EditIcon.jsx
var EditIcon = __webpack_require__(179);

// EXTERNAL MODULE: ./src/Icons/CardIcon.jsx
var CardIcon = __webpack_require__(244);

// EXTERNAL MODULE: ./src/Icons/LinedIcon.jsx
var LinedIcon = __webpack_require__(245);

// EXTERNAL MODULE: ./src/Icons/BoxIcon.jsx
var BoxIcon = __webpack_require__(246);

// EXTERNAL MODULE: ./src/Icons/StripedIcon.jsx
var StripedIcon = __webpack_require__(247);

// EXTERNAL MODULE: ./src/Icons/DeleteWhiteIcon.jsx
var DeleteWhiteIcon = __webpack_require__(192);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/TableProperties/TableBackdrop.jsx + 2 modules
var TableBackdrop = __webpack_require__(455);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerLogic.jsx
var IFormDesignerLogic = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/ListviewProperties/ListviewDataAdditionProperties.jsx
var ListviewDataAdditionProperties_ListviewProperties=function ListviewProperties(props){var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),showTableBackdrop=_useState2[0],setShowTableBackdrop=_useState2[1];var _useState3=Object(react["useState"])(),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),selectedColumn=_useState4[0],setSelectedColumn=_useState4[1];var _useState5=Object(react["useState"])(0),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),selectedColumnIndex=_useState6[0],setSelectedColumnIndex=_useState6[1];var _useTranslation=Object(useTranslation["a" /* useTranslation */])(['styles','translation']),t=_useTranslation.t;function handleCombo(comboId){var select=document.getElementById(comboId);var propertyName=select.getAttribute("name");var optionTag=select.options[select.selectedIndex];handleProperty(propertyName,optionTag.value);}function handleProperty(propertyName,propertyValue){props.selectedControl.style[propertyName]=propertyValue;props.applyChanges(props.formData);}function handleBackdrop(arg,columnId){if(arg===true){props.selectedControl.columnList.map(function(obj,index){if(columnId===obj.id){setSelectedColumn(obj);setSelectedColumnIndex(index);}});}else if(arg===false){props.applyChanges(props.formData);}setShowTableBackdrop(arg);}function addColumn(){var newColJson={'elem_type':'column','style':{'ColumnName':"Column"+(props.selectedControl.columnList.length+1)}};newColJson.id=Object(IFormDesignerLogic["j" /* createUniqueId */])('column');props.selectedControl.columnList.push(newColJson);props.formData["table"]=props.selectedControl;setSelectedColumn(newColJson);// props.applyChanges(props.formData);
setShowTableBackdrop(true);}function deleteColumn(colId){props.selectedControl.columnList.map(function(obj,index){if(colId===obj.id){props.selectedControl.columnList.splice(index,1);props.formData["table"]=props.selectedControl;props.applyChanges(props.formData);return;}});}if(Properties_ListviewDataAdditionPropertiesJson&&PropertiesConfiguration["a" /* default */]){var CollapsibleItems=[];Object.keys(Properties_ListviewDataAdditionPropertiesJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_ListviewDataAdditionPropertiesJson[key]).forEach(function(property){if(PropertiesConfiguration["a" /* default */][property]&&PropertiesConfiguration["a" /* default */][property].type){collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type));}});if(CollapsibleItems===[]){CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));}CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});}function prepareHtmlTag(key,type,colId){switch(type.toLowerCase()){case"combo":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectDiv1,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{className:BasicControls_module_default.a.RightLabelSelect1,name:key,id:props.selectedControl.id+PropertiesConfiguration["a" /* default */][key].label,onChange:function onChange(){return handleCombo(props.selectedControl.id+PropertiesConfiguration["a" /* default */][key].label);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value){return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:true,children:PropertiesConfiguration["a" /* default */][key].children[optionCount].Title});}else{return/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value});}})})})]});case"colorpicker":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelColorPickerDiv,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ColorPicker["a" /* default */],{handleStyleChange:function handleStyleChange(hexValue){return handleProperty(key,hexValue);}})})]});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{toggleState:props.selectedControl.style[key],handleStyleChange:function handleStyleChange(value){return handleProperty(key,value);}})]});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.textAreaParentDiv,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":PropertiesConfiguration["a" /* default */][key].label,className:BasicControls_module_default.a.textAreaDiv})})]});}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.elementPropertiesHeader,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.selectedControlTitle,children:"Listview Data Addition"}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.deleteIcon,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(DeleteIcon["default"],{className:BasicControls_module_default.a.svgDeleteIcon})})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodyButtonProperties,children:CollapsibleItems.map(function(item,index){return item;})})]});};/* harmony default export */ var ListviewDataAdditionProperties = __webpack_exports__["default"] = (ListviewDataAdditionProperties_ListviewProperties);

/***/ })

}]);
//# sourceMappingURL=ListviewDataAdditionProperties.513fca95d9a48b89e5f4.js.map