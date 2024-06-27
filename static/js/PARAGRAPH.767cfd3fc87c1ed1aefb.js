(this["fb_mf"] = this["fb_mf"] || []).push([[37],{

/***/ 2069:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ckb.js": 1009,
	"./da.js": 1010,
	"./de.js": 1011,
	"./en.js": 707,
	"./es.js": 1012,
	"./fr.js": 1013,
	"./he.js": 1014,
	"./index.js": 2070,
	"./it.js": 1015,
	"./ja.js": 1016,
	"./ko.js": 1017,
	"./lv.js": 1018,
	"./nl.js": 1019,
	"./pl.js": 1020,
	"./pt_br.js": 1021,
	"./ro.js": 1022,
	"./ru.js": 1023,
	"./se.js": 1024,
	"./ua.js": 1025,
	"./zh_cn.js": 1026
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2069;

/***/ }),

/***/ 2074:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(2286);

// EXTERNAL MODULE: ./src/UI/BasicFormControls/ElemDeleteControlWrapper.jsx + 4 modules
var ElemDeleteControlWrapper = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/aphrodite/es/index.js + 1 modules
var es = __webpack_require__(138);

// EXTERNAL MODULE: ./src/components/Properties/CSSPreparation1.jsx
var CSSPreparation1 = __webpack_require__(158);

// EXTERNAL MODULE: ./src/ReusableComponents/QuickTools/QuickTools.jsx + 3 modules
var QuickTools = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerLogic.jsx
var IFormDesignerLogic = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/suneditor-react/dist/index.js
var dist = __webpack_require__(2066);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/components/Properties/TextEditorToolbarJson.jsx
var TextEditorToolbarJson={'undo':'true','redo':'true','font':'true','fontSize':'true','formatBlock':'true','bold':'true','underline':'true','italic':'true','strike':'true','subscript':'true','superscript':'true',// 'paragraphStyle': 'true' ,
'fontColor':'true','hiliteColor':'true','removeFormat':'true','outdent':'true','indent':'true','align':'true','horizontalRule':'false','list':'true','lineHeight':'true','table':'true','link':'false','image':'false','audio':'false','video':'false','math':'false','fullScreen':'false','showBlocks':'false','codeView':'false','preview':'false','print':'false','save':'false','blockquote':'true','1':['formatBlock','font','fontSize'],'2':['bold','italic','underline','strike'],'3':['lineHeight'],'4':['fontColor'],'5':['hiliteColor'],'6':['subscript','superscript'],'7':['textStyle'],'8':['outdent','indent'],'9':['align','list'],'10':['blockquote'],'11':['table'],'12':['removeFormat','undo','redo']};/* harmony default export */ var Properties_TextEditorToolbarJson = (TextEditorToolbarJson);
// EXTERNAL MODULE: ./node_modules/suneditor/dist/css/suneditor.min.css
var suneditor_min = __webpack_require__(2073);

// EXTERNAL MODULE: ./src/UI/css/suneditor-custom.css
var suneditor_custom = __webpack_require__(2074);

// EXTERNAL MODULE: ./node_modules/suneditor/src/plugins/index.js + 23 modules
var plugins = __webpack_require__(708);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/UI/BasicFormControls/PARAGRAPH.jsx
var PARAGRAPH_PARAGRAPH=function PARAGRAPH(props){var _formState2$style5,_formState2$style6,_formState2$style6$Br,_formState2$style7,_formState2$style7$Br,_props$data,_props$data$style,_props$data2,_props$data2$style,_props$data5,_props$data5$style;var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _GetState=Object(CustomHooks["a" /* GetState */])("tempCanWidth","controlSelected"),tempCanWidth=_GetState.tempCanWidth,controlSelected=_GetState.controlSelected;var toolbarOptions=[];Properties_TextEditorToolbarJson["table"]="false";Properties_TextEditorToolbarJson["fullScreen"]="false";Object.keys(Properties_TextEditorToolbarJson).forEach(function(key){if(Array.isArray(Properties_TextEditorToolbarJson[key])){var optionsArray=[];Properties_TextEditorToolbarJson[key].map(function(subKey){if(Properties_TextEditorToolbarJson[subKey]==="true"){optionsArray.push(subKey);}});toolbarOptions.push(optionsArray);}});var toolbarOptionsArray=toolbarOptions;var isSubformInPage=(props===null||props===void 0?void 0:props.isSubformInPage)||false;var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,IdPrecedence=_contexts$contexts.IdPrecedence,deleteControl=_contexts$contexts.deleteControl,openQuickToolFor=_contexts$contexts.openQuickToolFor,formState2=_contexts$contexts.formState2,device=_contexts$contexts.device;var conditionalQuickToolOpening=props.id===openQuickToolFor?true:false;var updatedComponentInFormState=updateJson.updatedComponentInFormState,removeAndUpdateComponentInFormState=updateJson.removeAndUpdateComponentInFormState;var data=props.data;var actualControlId=props.data.id;var mappingId=props.data["style"]&&props.data["style"]["MappingId"];var userDefinedId=props.data["style"]&&props.data["style"]["CustomId"];var userDefinedControlId=Object(UserIdLogic["a" /* getSuggestedId */])(actualControlId,mappingId,userDefinedId,IdPrecedence);var _useState=Object(react["useState"])(conditionalQuickToolOpening),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var _useState3=Object(react["useState"])(true),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),mobileDisplay=_useState4[0],setMobileDisplay=_useState4[1];var _useState5=Object(react["useState"])(true),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),tabDisplay=_useState6[0],setTabDisplay=_useState6[1];var startMobile=Object(react["useRef"])();var endMobile=Object(react["useRef"])();var startTab=Object(react["useRef"])();var endTab=Object(react["useRef"])();Object(react["useEffect"])(function(){if(formState2&&formState2.style){var _formState2$style,_formState2$style$Bre,_formState2$style$Bre2,_formState2$style2,_formState2$style2$Br,_formState2$style2$Br2,_formState2$style3,_formState2$style3$Br,_formState2$style3$Br2,_formState2$style4,_formState2$style4$Br,_formState2$style4$Br2;startMobile.current=parseInt((_formState2$style=formState2.style)===null||_formState2$style===void 0?void 0:(_formState2$style$Bre=_formState2$style["Breakpoint"])===null||_formState2$style$Bre===void 0?void 0:(_formState2$style$Bre2=_formState2$style$Bre["Mobile"])===null||_formState2$style$Bre2===void 0?void 0:_formState2$style$Bre2["StartValue"]);endMobile.current=parseInt((_formState2$style2=formState2.style)===null||_formState2$style2===void 0?void 0:(_formState2$style2$Br=_formState2$style2["Breakpoint"])===null||_formState2$style2$Br===void 0?void 0:(_formState2$style2$Br2=_formState2$style2$Br["Mobile"])===null||_formState2$style2$Br2===void 0?void 0:_formState2$style2$Br2["EndValue"]);startTab.current=parseInt((_formState2$style3=formState2.style)===null||_formState2$style3===void 0?void 0:(_formState2$style3$Br=_formState2$style3["Breakpoint"])===null||_formState2$style3$Br===void 0?void 0:(_formState2$style3$Br2=_formState2$style3$Br["Tab"])===null||_formState2$style3$Br2===void 0?void 0:_formState2$style3$Br2["StartValue"]);endTab.current=parseInt((_formState2$style4=formState2.style)===null||_formState2$style4===void 0?void 0:(_formState2$style4$Br=_formState2$style4["Breakpoint"])===null||_formState2$style4$Br===void 0?void 0:(_formState2$style4$Br2=_formState2$style4$Br["Tab"])===null||_formState2$style4$Br2===void 0?void 0:_formState2$style4$Br2["EndValue"]);}},[(_formState2$style5=formState2.style)===null||_formState2$style5===void 0?void 0:_formState2$style5["Breakpoint"],(_formState2$style6=formState2.style)===null||_formState2$style6===void 0?void 0:(_formState2$style6$Br=_formState2$style6["Breakpoint"])===null||_formState2$style6$Br===void 0?void 0:_formState2$style6$Br["Mobile"],(_formState2$style7=formState2.style)===null||_formState2$style7===void 0?void 0:(_formState2$style7$Br=_formState2$style7["Breakpoint"])===null||_formState2$style7$Br===void 0?void 0:_formState2$style7$Br["Tab"]]);Object(react["useEffect"])(function(){if(props!==null&&props!==void 0&&props.previewmode)Object(IFormDesignerLogic["H" /* handleDisplayProperty */])(props,device,setMobileDisplay,setTabDisplay,startMobile.current,endMobile.current,startTab.current,endTab.current);},[props===null||props===void 0?void 0:(_props$data=props.data)===null||_props$data===void 0?void 0:(_props$data$style=_props$data.style)===null||_props$data$style===void 0?void 0:_props$data$style["MobileVisible"],props===null||props===void 0?void 0:(_props$data2=props.data)===null||_props$data2===void 0?void 0:(_props$data2$style=_props$data2.style)===null||_props$data2$style===void 0?void 0:_props$data2$style["TabsVisible"],device,endMobile,endTab,startMobile,startTab,tempCanWidth]);Object(react["useEffect"])(function(){var _props$data3;var id1=document.querySelector("#".concat(props===null||props===void 0?void 0:(_props$data3=props.data)===null||_props$data3===void 0?void 0:_props$data3.id,"_group"));if(id1){var id2=id1.querySelectorAll("div");if(id2){// Iterate over the child divs and set attributes
id2.forEach(function(div){var _props$data4;// Add your custom attributes here
div.setAttribute("control_id","".concat(props===null||props===void 0?void 0:(_props$data4=props.data)===null||_props$data4===void 0?void 0:_props$data4.id));});}}},[]);var jsonForTableHeader={};Object.keys(props.data.style).forEach(function(keyName){jsonForTableHeader[keyName]=props.data.style[keyName];});var preparedStyle1=Object(CSSPreparation1["a" /* CSSPreparation1 */])(jsonForTableHeader);var styleSheet=es["a" /* StyleSheet */].create({styling:preparedStyle1});var padding_left=props.data.style&&props.data.style["SpacingLeft"];if(padding_left!==undefined&&padding_left!==null&&padding_left!==""){}else{padding_left="0px";}var padding_right=props.data.style&&props.data.style["SpacingRight"];if(padding_right!==undefined&&padding_right!==null&&padding_right!==""){}else{padding_right="0px";}var padding_top=props.data.style&&props.data.style["SpacingTop"];if(padding_top!==undefined&&padding_top!==null&&padding_top!==""){}else{padding_top="0px";}var padding_bottom=props.data.style&&props.data.style["SpacingBottom"];if(padding_bottom!==undefined&&padding_bottom!==null&&padding_bottom!==""){}else{padding_bottom="0px";}var inputStylePadding={paddingLeft:padding_left,paddingRight:padding_right,paddingTop:padding_top,paddingBottom:padding_bottom,display:"block","white-space":"break-spaces"};var handleContent=function handleContent(content){var _content$currentTarge,_content$currentTarge2;props.data.paragraphText=content===null||content===void 0?void 0:(_content$currentTarge=content.currentTarget)===null||_content$currentTarge===void 0?void 0:_content$currentTarge.innerHTML;Object(IFormDesignerLogic["W" /* updateValue */])(props.data.id,content===null||content===void 0?void 0:(_content$currentTarge2=content.currentTarget)===null||_content$currentTarge2===void 0?void 0:_content$currentTarge2.innerHTML,props.containerId);};if(props.previewmode&&(props===null||props===void 0?void 0:(_props$data5=props.data)===null||_props$data5===void 0?void 0:(_props$data5$style=_props$data5.style)===null||_props$data5$style===void 0?void 0:_props$data5$style.Visible)==="true"){var _props$data6,_props$data7;return/*#__PURE__*/Object(jsx_runtime["jsx"])(Form["a" /* default */].Group,{id:userDefinedControlId+"_group",className:" spacingThemeLabel paragraphSunEditor",control_id:userDefinedControlId+"_group",elem_type:"paragraph",frameindex:data.frameIndex,elementindex:data.elementIndex,sheetIndex:data.sheetIndex,sheetElementIndex:data.sheetElementIndex,sheetFrameElementindex:data.sheetFrameElementindex,style:mobileDisplay===false||tabDisplay===false?{display:"none"}:inputStylePadding,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_default.a,{disable:true,hideToolbar:true,showToolbar:false,enableToolbar:false,id:userDefinedControlId,control_id:userDefinedControlId,lang:"en",setContents:"".concat((props===null||props===void 0?void 0:(_props$data6=props.data)===null||_props$data6===void 0?void 0:_props$data6.paragraphText)!==undefined?Object(globalFunctions["f" /* fromHtmlEntities */])(props===null||props===void 0?void 0:(_props$data7=props.data)===null||_props$data7===void 0?void 0:_props$data7.paragraphText):"","  "),setOptions:{resizingBar:false,showPathLabel:false}})},data.id);}else{var _props$data8,_props$data9,_window;return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Group,{id:userDefinedControlId+"_group",className:" spacingThemeLabel paragraphSunEditor",onClick:isSubformInPage?function(){}:function(e){return props.handleSelected(e,props.data.id,"n");},onKeyDown:isSubformInPage?function(){}:function(e){return props.handleSelected(e);},control_id:props.data.id,tabIndex:"1",elem_type:"paragraph",frameindex:data.frameIndex,elementindex:data.elementIndex,sheetIndex:data.sheetIndex,sheetElementIndex:data.sheetElementIndex,sheetFrameElementindex:data.sheetFrameElementindex,style:inputStylePadding,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{control_id:props.data.id,id:props===null||props===void 0?void 0:(_props$data8=props.data)===null||_props$data8===void 0?void 0:_props$data8.id,style:{border:"1px solid #e4e4e4"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_default.a,{id:"paragraphEditor_"+props.id,elem_type:"paragraph",lang:"en",setOptions:{showPathLabel:false,plugins:plugins["default"],buttonList:toolbarOptionsArray},setContents:props.data.paragraphText,onBlur:handleContent})}),(controlSelected===null||controlSelected===void 0?void 0:controlSelected.id)===(props===null||props===void 0?void 0:props.id)&&/*#__PURE__*/Object(jsx_runtime["jsx"])(ElemDeleteControlWrapper["a" /* default */],{control_id:props.data.id,isSubformInPage:isSubformInPage,containerId:props.containerId,id:props.data.id,data:props.data,deleteControl:deleteControl,elemType:(_props$data9=props.data)===null||_props$data9===void 0?void 0:_props$data9.elem_type,setDragging:props.setDragging,handleReorderStart:props.handleReorderStart,handleReorderDrop:props.handleReorderDrop,dragId:props.dragId,dragType:"column"}),((_window=window)===null||_window===void 0?void 0:_window.openQuickTools)&&open&&/*#__PURE__*/Object(jsx_runtime["jsx"])(QuickTools["a" /* default */],{containerId:props.containerId,selectedControl:props.data,open:open,setOpen:setOpen})]},data.id);}};/* harmony default export */ var BasicFormControls_PARAGRAPH = __webpack_exports__["default"] = (PARAGRAPH_PARAGRAPH);

/***/ })

}]);
//# sourceMappingURL=PARAGRAPH.767cfd3fc87c1ed1aefb.js.map