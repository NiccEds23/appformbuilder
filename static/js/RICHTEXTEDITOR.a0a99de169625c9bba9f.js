(this["fb_mf"] = this["fb_mf"] || []).push([[44],{

/***/ 1336:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1337:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1346:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1347:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1367:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1369:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1370:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1373:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1374:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1379:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1380:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1388:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1394:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1397:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(2286);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(2207);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1601);

// EXTERNAL MODULE: ./src/UI/BasicFormControls/ElemDeleteControlWrapper.jsx + 4 modules
var ElemDeleteControlWrapper = __webpack_require__(102);

// EXTERNAL MODULE: ./src/UI/css/COLUMN.module.css
var COLUMN_module = __webpack_require__(99);
var COLUMN_module_default = /*#__PURE__*/__webpack_require__.n(COLUMN_module);

// EXTERNAL MODULE: ./node_modules/aphrodite/es/index.js + 1 modules
var es = __webpack_require__(138);

// EXTERNAL MODULE: ./src/components/Properties/CSSPreparation1.jsx
var CSSPreparation1 = __webpack_require__(158);

// EXTERNAL MODULE: ./src/Icons/RichtextEditorUpArrow.jsx
var RichtextEditorUpArrow = __webpack_require__(251);

// EXTERNAL MODULE: ./src/Icons/RichtextEditorDownArrow.jsx
var RichtextEditorDownArrow = __webpack_require__(252);

// EXTERNAL MODULE: ./src/ReusableComponents/Tooltip/Tooltip.jsx
var Tooltip = __webpack_require__(145);

// EXTERNAL MODULE: ./src/ReusableComponents/QuickTools/QuickTools.jsx + 3 modules
var QuickTools = __webpack_require__(108);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/MandatoryMsg.jsx
var MandatoryMsg = __webpack_require__(159);

// EXTERNAL MODULE: ./src/axios.js
var axios = __webpack_require__(73);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/IFormDesignerLogic.jsx
var IFormDesignerLogic = __webpack_require__(66);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./src/UI/BasicFormControls/RichtextEditor/styles.css
var styles = __webpack_require__(966);

// EXTERNAL MODULE: ./node_modules/froala-editor/js/plugins.pkgd.min.js
var plugins_pkgd_min = __webpack_require__(1332);

// EXTERNAL MODULE: ./node_modules/froala-editor/css/froala_editor.pkgd.min.css
var froala_editor_pkgd_min = __webpack_require__(1399);

// EXTERNAL MODULE: ./node_modules/react-froala-wysiwyg/index.js
var react_froala_wysiwyg = __webpack_require__(1400);
var react_froala_wysiwyg_default = /*#__PURE__*/__webpack_require__.n(react_froala_wysiwyg);

// CONCATENATED MODULE: ./src/components/Properties/FroalaToolbarJson.jsx
var FroalaToolbarJson={"paragraphFormat":'true',"fontSize":'true',"fontFamily":'true',"textColor":'true',"backgroundColor":'true',"alignLeft":'true',"alignRight":'true',"alignCenter":'true',"alignJustify":'true',"strikeThrough":'true',"subscript":'true',"superscript":'true',"formatOL":'true',"formatUL":'true',"indent":'true',"outdent":'true',"lineHeight":'true',"quote":'true',"bold":'true',"italic":'true',"underline":'true',"insertHR":'true',"insertTable":'true',"undo":'true',"redo":'true'};/* harmony default export */ var Properties_FroalaToolbarJson = (FroalaToolbarJson);
// EXTERNAL MODULE: ./node_modules/froala-editor/js/languages/ar.js
var ar = __webpack_require__(1401);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/UI/BasicFormControls/RichtextEditor/ReactFroala.jsx
function ReactFroala(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild;var FroalaToolbarJson1=Properties_FroalaToolbarJson;if(window.selectFeatureToBeIncludedInRichText){FroalaToolbarJson1=window.selectFeatureToBeIncludedInRichText();}var toolbarOptions=[];function getFeatureForRichTextEditor(){Object.keys(FroalaToolbarJson1).forEach(function(key){if(FroalaToolbarJson1[key]==="true"||FroalaToolbarJson1[key]===true){toolbarOptions.push(key);}});return toolbarOptions;}var froalaEditorConfig={attribution:false,language:"".concat(((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.appformBuilder_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.appformBuilder_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA"?"ar":null),placeholderText:"Your content goes here!",toolbarButtons:{moreText:{buttons:getFeatureForRichTextEditor(),id:props.id,buttonsVisible:25}},toolbarSticky:true,pluginsEnabled:["align","colors","entities","fontSize","fontFamily","link","lists","paragraphFormat","paragraphStyle","save","table","wordPaste","lineHeight","charCounter"],key:"YNB3fH3C9B10D6C5C2F3C-8TMIBDIa1NTMNZFFPFZc1d1Ib2a1E1fA4A3G3C3F2B6B3C4D3C1=="};var _useState=Object(react["useState"])(),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),data=_useState2[0],setData=_useState2[1];var editorRef=Object(react["useRef"])(null);Object(react["useEffect"])(function(){if(props){if(editorRef.current){// Access the Froala Editor instance and set the id attribute
var froalaEditorInstance=editorRef.current.editor;if(froalaEditorInstance){var inputElement=froalaEditorInstance.el;if(inputElement){inputElement.setAttribute('id','my-froala-editor');}}}if(window.onLoadRichTextEditor){window.onLoadRichTextEditor(props.data.id);}var jsonToSend={controlId:props.data.id,richTextEditorJSON:[{id:props.data.id,IndexString:""}],gdtoken:props.gdToken,witoken:props.wiToken};axios["a" /* default */].post("/viewform/fetchRichTextEditorData",jsonToSend,{withCredentials:true}).then(function(response){var _response$data,_response$data$value,_response$data$value$,_response$data2,_response$data2$value,_response$data2$value2;props.data.value=response===null||response===void 0?void 0:(_response$data=response.data)===null||_response$data===void 0?void 0:(_response$data$value=_response$data.value)===null||_response$data$value===void 0?void 0:(_response$data$value$=_response$data$value[0])===null||_response$data$value$===void 0?void 0:_response$data$value$.value;setData(response===null||response===void 0?void 0:(_response$data2=response.data)===null||_response$data2===void 0?void 0:(_response$data2$value=_response$data2.value)===null||_response$data2$value===void 0?void 0:(_response$data2$value2=_response$data2$value[0])===null||_response$data2$value2===void 0?void 0:_response$data2$value2.value);});}},[]);var modelChange=function modelChange(model){var edData=model;var elem=document.createElement("div");elem.innerHTML=edData;console.log(elem);props.handleContent(model);setData(model);};if(props){var _props$data,_props$data$style,_props$data2,_props$data2$style,_props$data3,_props$data3$style,_props$data4,_props$data4$style;return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"App",id:props.id,elem_type:props.elem_type,style:props.previewmode&&((props===null||props===void 0?void 0:(_props$data=props.data)===null||_props$data===void 0?void 0:(_props$data$style=_props$data.style)===null||_props$data$style===void 0?void 0:_props$data$style["Enable"])==="false"||(props===null||props===void 0?void 0:(_props$data2=props.data)===null||_props$data2===void 0?void 0:(_props$data2$style=_props$data2.style)===null||_props$data2$style===void 0?void 0:_props$data2$style["Enable"])===false||(props===null||props===void 0?void 0:(_props$data3=props.data)===null||_props$data3===void 0?void 0:(_props$data3$style=_props$data3.style)===null||_props$data3$style===void 0?void 0:_props$data3$style["ReadOnly"])==="true"||(props===null||props===void 0?void 0:(_props$data4=props.data)===null||_props$data4===void 0?void 0:(_props$data4$style=_props$data4.style)===null||_props$data4$style===void 0?void 0:_props$data4$style["ReadOnly"])===true)?{pointerEvents:"none"}:null,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_froala_wysiwyg_default.a,{id:props.id,model:data,ref:editorRef,onModelChange:modelChange,tag:"textarea",config:froalaEditorConfig})});}}
// EXTERNAL MODULE: ./src/Redux/index.js
var Redux = __webpack_require__(69);

// EXTERNAL MODULE: ./src/Redux/Actions/FormStateActions.js
var FormStateActions = __webpack_require__(81);

// CONCATENATED MODULE: ./src/UI/BasicFormControls/RICHTEXTEDITOR.jsx
var RICHTEXTEDITOR_RICHTEXTEDITOR=function RICHTEXTEDITOR(props){var _formState2$style5,_formState2$style6,_formState2$style6$Br,_formState2$style7,_formState2$style7$Br,_props$data2,_props$data2$style,_props$data3,_props$data3$style,_props$data4,_props$data4$style,_props$data5,_props$data5$style,_props$data6,_props$data6$style,_props$data7,_props$data7$style;var dispatch=Object(Redux["e" /* useDispatch */])();var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _GetState=Object(CustomHooks["a" /* GetState */])("tempCanWidth","controlSelected","mandatoryControls"),tempCanWidth=_GetState.tempCanWidth,controlSelected=_GetState.controlSelected,mandatoryControls=_GetState.mandatoryControls;var _contexts$contexts=contexts.contexts,IdPrecedence=_contexts$contexts.IdPrecedence,modeReadOrWrite=_contexts$contexts.modeReadOrWrite,openQuickToolFor=_contexts$contexts.openQuickToolFor,deleteControl=_contexts$contexts.deleteControl,formState2=_contexts$contexts.formState2,device=_contexts$contexts.device;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),showMandatoryMsg=_useState2[0],setShowMandatoryMsg=_useState2[1];Object(react["useEffect"])(function(){var _props$data;if(mandatoryControls.includes((_props$data=props.data)===null||_props$data===void 0?void 0:_props$data.id)){setShowMandatoryMsg(true);}else{setShowMandatoryMsg(false);}},[mandatoryControls]);var data=props.data;var actualControlId=data.id;var mappingId=data["style"]&&data["style"]["MappingId"];var userDefinedId=data["style"]&&data["style"]["CustomId"];var userDefinedControlId=Object(UserIdLogic["a" /* getSuggestedId */])(actualControlId,mappingId,userDefinedId,IdPrecedence);var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),rerenderState=_useState4[0],setReRenderState=_useState4[1];var themeData=formState2.theme;var defaulRTStyles={font_family:"Open Sans",font_size:"14px"};var defaultRTStyles=Object(react["useRef"])(defaulRTStyles);var setRTStyles=function setRTStyles(newStyle){var prevState=JSON.stringify(defaultRTStyles.current);defaultRTStyles.current=Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},defaultRTStyles.current),newStyle);if(!props.previewmode){//check whether it's a designer mode or not
//compare if some new changes has been made
if(prevState!==JSON.stringify(defaultRTStyles.current)){//rerender on new changes
setReRenderState(!rerenderState);}}};Object(react["useEffect"])(function(){var _themeData$BasicTheme,_themeData$BasicTheme2;if(themeData!==null&&themeData!==void 0&&(_themeData$BasicTheme=themeData["BasicTheme"])!==null&&_themeData$BasicTheme!==void 0&&_themeData$BasicTheme["FontFamily"]){setRTStyles({font_family:themeData["BasicTheme"]["FontFamily"]});}if(themeData!==null&&themeData!==void 0&&(_themeData$BasicTheme2=themeData["BasicTheme"])!==null&&_themeData$BasicTheme2!==void 0&&_themeData$BasicTheme2["FontSize"]){setRTStyles({font_size:themeData["BasicTheme"]["FontSize"]});}},[themeData===null||themeData===void 0?void 0:themeData["BasicTheme"]]);var basicThemeRTStyle={FontFamily:defaultRTStyles.current.font_family,FontSize:defaultRTStyles.current.font_size};var elementRefrence=Object(react["useRef"])(null);var conditionalQuickToolOpening=props.id===openQuickToolFor?true:false;var Editable=props.data.style.Enable;var refFlag8=Object(react["useRef"])(0);console.log("openQuickTool",openQuickToolFor);var refFlag7=Object(react["useRef"])(0);if(openQuickToolFor!==undefined&&props.id===openQuickToolFor){refFlag8.current=1;}if(props.previewmode===undefined||props.previewmode===false){refFlag7.current=0;}if(props.previewmode&&modeReadOrWrite==="r"){props.data.style.Enable="false";Editable="false";refFlag7.current=1;}if(refFlag8.current===1&&props.data.style["Enable"]==="false"&&refFlag7.current===0){Editable="false";props.data.style.Enable="false";}if(refFlag8.current===1&&props.data.style["Enable"]==="true"&&refFlag7.current===0){Editable="true";props.data.style.Enable="true";}var isSubformInPage=(props===null||props===void 0?void 0:props.isSubformInPage)||false;var _useState5=Object(react["useState"])(conditionalQuickToolOpening),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),open=_useState6[0],setOpen=_useState6[1];var _useState7=Object(react["useState"])(props.data&&props.data.value&&props.data.value.length>0?props.data.value:""),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),content=_useState8[0],setContent=_useState8[1];var _useState9=Object(react["useState"])(false),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),showEditor=_useState10[0],setShowEditor=_useState10[1];var _useState11=Object(react["useState"])(true),_useState12=Object(slicedToArray["a" /* default */])(_useState11,2),mobileDisplay=_useState12[0],setMobileDisplay=_useState12[1];var _useState13=Object(react["useState"])(true),_useState14=Object(slicedToArray["a" /* default */])(_useState13,2),tabDisplay=_useState14[0],setTabDisplay=_useState14[1];var startMobile=Object(react["useRef"])();var endMobile=Object(react["useRef"])();var startTab=Object(react["useRef"])();var endTab=Object(react["useRef"])();Object(react["useEffect"])(function(){if(formState2&&formState2.style){var _formState2$style,_formState2$style$Bre,_formState2$style$Bre2,_formState2$style2,_formState2$style2$Br,_formState2$style2$Br2,_formState2$style3,_formState2$style3$Br,_formState2$style3$Br2,_formState2$style4,_formState2$style4$Br,_formState2$style4$Br2;startMobile.current=parseInt((_formState2$style=formState2.style)===null||_formState2$style===void 0?void 0:(_formState2$style$Bre=_formState2$style["Breakpoint"])===null||_formState2$style$Bre===void 0?void 0:(_formState2$style$Bre2=_formState2$style$Bre["Mobile"])===null||_formState2$style$Bre2===void 0?void 0:_formState2$style$Bre2["StartValue"]);endMobile.current=parseInt((_formState2$style2=formState2.style)===null||_formState2$style2===void 0?void 0:(_formState2$style2$Br=_formState2$style2["Breakpoint"])===null||_formState2$style2$Br===void 0?void 0:(_formState2$style2$Br2=_formState2$style2$Br["Mobile"])===null||_formState2$style2$Br2===void 0?void 0:_formState2$style2$Br2["EndValue"]);startTab.current=parseInt((_formState2$style3=formState2.style)===null||_formState2$style3===void 0?void 0:(_formState2$style3$Br=_formState2$style3["Breakpoint"])===null||_formState2$style3$Br===void 0?void 0:(_formState2$style3$Br2=_formState2$style3$Br["Tab"])===null||_formState2$style3$Br2===void 0?void 0:_formState2$style3$Br2["StartValue"]);endTab.current=parseInt((_formState2$style4=formState2.style)===null||_formState2$style4===void 0?void 0:(_formState2$style4$Br=_formState2$style4["Breakpoint"])===null||_formState2$style4$Br===void 0?void 0:(_formState2$style4$Br2=_formState2$style4$Br["Tab"])===null||_formState2$style4$Br2===void 0?void 0:_formState2$style4$Br2["EndValue"]);}},[(_formState2$style5=formState2.style)===null||_formState2$style5===void 0?void 0:_formState2$style5["Breakpoint"],(_formState2$style6=formState2.style)===null||_formState2$style6===void 0?void 0:(_formState2$style6$Br=_formState2$style6["Breakpoint"])===null||_formState2$style6$Br===void 0?void 0:_formState2$style6$Br["Mobile"],(_formState2$style7=formState2.style)===null||_formState2$style7===void 0?void 0:(_formState2$style7$Br=_formState2$style7["Breakpoint"])===null||_formState2$style7$Br===void 0?void 0:_formState2$style7$Br["Tab"]]);Object(react["useEffect"])(function(){if(props!==null&&props!==void 0&&props.previewmode)Object(IFormDesignerLogic["H" /* handleDisplayProperty */])(props,device,setMobileDisplay,setTabDisplay,startMobile.current,endMobile.current,startTab.current,endTab.current);},[props===null||props===void 0?void 0:(_props$data2=props.data)===null||_props$data2===void 0?void 0:(_props$data2$style=_props$data2.style)===null||_props$data2$style===void 0?void 0:_props$data2$style["MobileVisible"],props===null||props===void 0?void 0:(_props$data3=props.data)===null||_props$data3===void 0?void 0:(_props$data3$style=_props$data3.style)===null||_props$data3$style===void 0?void 0:_props$data3$style["TabsVisible"],device,endMobile,endTab,startMobile,startTab,tempCanWidth]);var jsonForLabel={};var jsonForTextEditorControl={};var backgroundColorDesigner={backgroundColor:"".concat(props!==null&&props!==void 0&&(_props$data4=props.data)!==null&&_props$data4!==void 0&&(_props$data4$style=_props$data4.style)!==null&&_props$data4$style!==void 0&&_props$data4$style["BackgroundColor"]?props===null||props===void 0?void 0:(_props$data5=props.data)===null||_props$data5===void 0?void 0:(_props$data5$style=_props$data5.style)===null||_props$data5$style===void 0?void 0:_props$data5$style["BackgroundColor"]:"#f8f8f8")};var backgroundColorPreview={backgroundColor:props.data.style.Enable==="false"?"#F0F0F0":"".concat(props!==null&&props!==void 0&&(_props$data6=props.data)!==null&&_props$data6!==void 0&&(_props$data6$style=_props$data6.style)!==null&&_props$data6$style!==void 0&&_props$data6$style["BackgroundColor"]?props===null||props===void 0?void 0:(_props$data7=props.data)===null||_props$data7===void 0?void 0:(_props$data7$style=_props$data7.style)===null||_props$data7$style===void 0?void 0:_props$data7$style["BackgroundColor"]:"#f8f8f8")};var borderStyle={"border-radius":props.data.style["BorderRadius"],"border-width":props.data.style["BorderWidth"],"border-color":showMandatoryMsg&&props.previewmode?"red":props.data.style["BorderColor"],"border-style":"solid"};if(props&&props.data&&props.data.style){jsonForLabel["font-family"]=props.data.style["FontFamily"]||basicThemeRTStyle.FontFamily;jsonForLabel["font-size"]=props.data.style["FontSize"]&&props.data.style["FontSize"]!=="Select"?props.data.style["FontSize"]:basicThemeRTStyle===null||basicThemeRTStyle===void 0?void 0:basicThemeRTStyle.FontSize;jsonForLabel["font-weight"]=props.data.style["FontWeight"];jsonForLabel["color"]=props.data.style["FontColor"];jsonForLabel["font-style"]=props.data.style["FontStyle"];jsonForLabel["line-height"]=props.data.style["FontSize"];if(document.getElementById(props.id+"richtext")&&document.getElementById(props.id+"richtext")!==null){document.getElementById(props.id+"richtext").style["border-bottom-right-radius"]=props.data.style["BorderRadius"];document.getElementById(props.id+"richtext").style["border-bottom-left-radius"]=props.data.style["BorderRadius"];}if(props.data.style["MaxHeight"]&&document.getElementsByClassName("se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable").length>0&&document.getElementsByClassName("se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable")[0]){document.getElementsByClassName("se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable")[0].style["max-height"]=props.data.style["MaxHeight"]+"px";}}var mandatoryElem=null;if(props.data&&props.data.style&&props.data.style["Mandatory"]!==undefined&&props.data.style["Mandatory"]!==null&&props.data.style["Mandatory"]==="true"){mandatoryElem=/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{flexGrow:1,marginLeft:"5px",color:"#D53D3D"},children:[" ","*"," "]})});}function removeIdFromMandatoryControl(value){if(mandatoryControls.includes(props.data.id)){if(value.length>0){var newMandatoryList=mandatoryControls.filter(function(item){return item!==props.data.id;});Object(IFormDesignerLogic["P" /* setMandatoryControls */])(Object(toConsumableArray["a" /* default */])(newMandatoryList));}}}function handleEditor2(event){if(event==="richtextApi"){if(showEditor===false)setShowEditor(!showEditor);}if(event&&event.target&&event.target.getAttribute("divType")){var divType=event.target.getAttribute("divType");if(divType==="richtexteditor"||divType==="Label"||divType==="openClose"){setShowEditor(!showEditor);var parentEle=event.target;var ispainted=parentEle.getAttribute("painted");if(divType==="Label"||divType==="openClose"){parentEle=parentEle.parentElement;ispainted=parentEle.getAttribute("painted");if(ispainted===undefined||ispainted===null){parentEle=parentEle.parentElement;ispainted=parentEle.getAttribute("painted");}}if(ispainted==="false"){parentEle.setAttribute("painted","true");setContent("<p>test<p>");}}}}dispatch(Object(FormStateActions["d" /* updateFormStateContextWithoutRender */])({"name":"handleEditor2","key":props===null||props===void 0?void 0:props.containerId,"value":handleEditor2}));var preparedStyle1=Object(CSSPreparation1["a" /* CSSPreparation1 */])(jsonForLabel);var styleSheet=es["a" /* StyleSheet */].create({styling:preparedStyle1});var preparedStyle2=Object(CSSPreparation1["a" /* CSSPreparation1 */])(jsonForTextEditorControl);var styleSheet2=es["a" /* StyleSheet */].create({styling:preparedStyle2});function saveRTEData(jsonData){return axios["a" /* default */].post("/viewform/saveRichTextEditorData",jsonData,{withCredentials:true});}function handleContent(content){handleonBlurEvent(content);if(!window.isFormModified()){window.setFormMoified(true);}}function handleonBlurEvent(contentData){var jsonToSend={controlId:props.data.id,richTextEditorJSON:[{id:props.data.id,data:contentData,IndexString:""}],gdtoken:contexts.gdtoken,witoken:contexts.witoken};saveRTEData(jsonToSend).then(function(response){if(props.data){props.data.value=response.data.message;Object(IFormDesignerLogic["W" /* updateValue */])(props.data.id,response.data.message,props.containerId);removeIdFromMandatoryControl(props.data.value);}});}var padding_left=props.data.style&&props.data.style["SpacingLeft"];if(padding_left!==undefined&&padding_left!==null&&padding_left!==""){}else{padding_left="0px";}var padding_right=props.data.style&&props.data.style["SpacingRight"];if(padding_right!==undefined&&padding_right!==null&&padding_right!==""){}else{padding_right="0px";}var padding_top=props.data.style&&props.data.style["SpacingTop"];if(padding_top!==undefined&&padding_top!==null&&padding_top!==""){}else{padding_top="0px";}var padding_bottom=props.data.style&&props.data.style["SpacingBottom"];if(padding_bottom!==undefined&&padding_bottom!==null&&padding_bottom!==""){}else{padding_bottom="0px";}var inputStylePadding={position:"relative",display:"block"};var inputStylePadding1={position:"relative",display:"block"};if(props.previewmode){if(props.data.style&&props.data.style["LabelValueAlignment"]&&props.data.style["LabelValueAlignment"]==="Left Right"){var _props$data$style,_props$data8,_props$data8$style;return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId,style:{paddingLeft:padding_left,paddingRight:padding_right,paddingTop:padding_top,paddingBottom:padding_bottom},children:props.data&&props.data.style&&props.data.style["Visible"]==="true"?props.data.style&&props.data.style["ReadOnlyStyle"]&&props.data.style["ReadOnlyStyle"]==="true"||props.ReadOnlyStyle==="true"?/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Form["a" /* default */].Label,{id:userDefinedControlId+"_label",style:{marginLeft:"10px"},divType:"Label",className:Object(es["b" /* css */])(styleSheet.styling),elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:data.style&&data.style.Label?data.style.Label:""}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{display:"flex"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:props.data.style&&props.data.style.DummyData&&props.data.style["DummyData"]})})]}):/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Form["a" /* default */].Group,{className:[COLUMN_module_default.a.richtextEditorDiv,"spacingThemeControls",Object(es["b" /* css */])(styleSheet2.styling)].join(" "),style:mobileDisplay===false||tabDisplay===false?{display:"none"}:Object(objectSpread2["a" /* default */])({},inputStylePadding),divType:"richtexteditor",state:showEditor===true?"expanded":"collapsed",onClick:function onClick(event){return handleEditor2(event);},control_id:userDefinedControlId+"_group",ref:elementRefrence,tabindex:"1",elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{style:Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},borderStyle),backgroundColorPreview),children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Row["a" /* default */],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Col["a" /* default */],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Label,{id:userDefinedControlId+"_label",style:{wordBreak:"break-word",marginLeft:"10px",gap:"3px",display:"flex"},divType:"Label",className:Object(es["b" /* css */])(styleSheet.styling),elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:[data.style&&data.style.Label?data.style.Label:"",mandatoryElem,props.data.style&&props.data.style["ToolTip"]||props.data.style["ControlDescription"]?/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:props.data.style.ToolTip}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{})]})}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(Col["a" /* default */],{children:[showEditor===true?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId+"_arrowIcon",className:COLUMN_module_default.a.richtextEditorCollapsibleIcon,divType:"openClose",state:showEditor===true?"expanded":"collapsed",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RichtextEditorDownArrow["default"],{divType:"openClose",state:showEditor===true?"expanded":"collapsed"})}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId+"_arrowIcon",className:COLUMN_module_default.a.richtextEditorCollapsibleIcon,divType:"openClose",state:showEditor===true?"expanded":"collapsed",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RichtextEditorUpArrow["default"],{divType:"openClose",state:showEditor===true?"expanded":"collapsed"})}),showEditor===true?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{padding:"".concat((_props$data$style=props.data.style)===null||_props$data$style===void 0?void 0:_props$data$style["BorderRadius"])},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactFroala,{data:props.data,id:userDefinedControlId,previewmode:props===null||props===void 0?void 0:props.previewmode,divType:"editor",handleContent:handleContent,elem_type:"textarea",gdToken:contexts===null||contexts===void 0?void 0:contexts.gdtoken,wiToken:contexts===null||contexts===void 0?void 0:contexts.witoken})}):null]})]})})},data.id),showMandatoryMsg?/*#__PURE__*/Object(jsx_runtime["jsx"])(MandatoryMsg["a" /* default */],{id:props.data.id,mandatoryMsg:(_props$data8=props.data)===null||_props$data8===void 0?void 0:(_props$data8$style=_props$data8.style)===null||_props$data8$style===void 0?void 0:_props$data8$style.ValidationMessage}):null]}):null});}else{var _props$data$style2,_props$data9,_props$data9$style;return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId,style:{paddingLeft:padding_left,paddingRight:padding_right,paddingTop:padding_top,paddingBottom:padding_bottom},children:props.data&&props.data.style&&props.data.style["Visible"]==="true"?props.data.style&&props.data.style["ReadOnlyStyle"]&&props.data.style["ReadOnlyStyle"]==="true"||props.ReadOnlyStyle==="true"?/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Form["a" /* default */].Label,{id:userDefinedControlId+"_label",style:{marginLeft:"10px"},divType:"Label",className:Object(es["b" /* css */])(styleSheet.styling),elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:data.style&&data.style.Label?data.style.Label:""}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{display:"flex"},children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{children:props.data.style&&props.data.style.DummyData&&props.data.style["DummyData"]})})]}):/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(Form["a" /* default */].Group,{className:[COLUMN_module_default.a.richtextEditorDiv,"spacingThemeControls",Object(es["b" /* css */])(styleSheet2.styling)].join(" "),style:mobileDisplay===false||tabDisplay===false?{display:"none"}:Object(objectSpread2["a" /* default */])({},inputStylePadding),divType:"richtexteditor",state:showEditor===true?"expanded":"collapsed",onClick:function onClick(event){return handleEditor2(event);},control_id:userDefinedControlId+"_group",ref:elementRefrence,tabindex:"1",elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},borderStyle),{},{display:"block"},backgroundColorPreview),children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},divType:"Label",children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Label,{id:userDefinedControlId+"_label",style:{wordBreak:"break-word",marginLeft:"10px",marginTop:"4pt",gap:"3px",display:"flex",whiteSpace:"break-spaces"},divType:"Label",className:Object(es["b" /* css */])(styleSheet.styling)+" spacingThemeLabel",elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:[data.style&&data.style.Label?data.style.Label:"",mandatoryElem,props.data.style&&props.data.style["ToolTip"]||props.data.style["ControlDescription"]?/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:props.data.style.ToolTip}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{})]}),showEditor===true?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId+"_arrowIcon",className:COLUMN_module_default.a.richtextEditorCollapsibleIcon,divType:"openClose",state:showEditor===true?"expanded":"collapsed",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RichtextEditorDownArrow["default"],{state:showEditor===true?"expanded":"collapsed",divType:"openClose"})}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId+"_arrowIcon",className:COLUMN_module_default.a.richtextEditorCollapsibleIcon,divType:"openClose",state:showEditor===true?"expanded":"collapsed",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RichtextEditorUpArrow["default"],{divType:"openClose",state:showEditor===true?"expanded":"collapsed"})})]}),showEditor===true?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{padding:"".concat((_props$data$style2=props.data.style)===null||_props$data$style2===void 0?void 0:_props$data$style2["BorderRadius"])},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactFroala,{previewmode:props.previewmode,divType:"editor",data:props.data,handleContent:handleContent,gdToken:contexts===null||contexts===void 0?void 0:contexts.gdtoken,wiToken:contexts===null||contexts===void 0?void 0:contexts.witoken,id:userDefinedControlId,elem_type:"textarea"})}):null]})},data.id),showMandatoryMsg?/*#__PURE__*/Object(jsx_runtime["jsx"])(MandatoryMsg["a" /* default */],{id:props.data.id,mandatoryMsg:(_props$data9=props.data)===null||_props$data9===void 0?void 0:(_props$data9$style=_props$data9.style)===null||_props$data9$style===void 0?void 0:_props$data9$style.ValidationMessage}):null]}):null});}}else{var _props$data$style3,_props$data10,_window;return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{id:userDefinedControlId,style:{paddingLeft:padding_left,paddingRight:padding_right,paddingTop:padding_top,paddingBottom:padding_bottom},children:/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Group,{className:[COLUMN_module_default.a.richtextEditorDiv,"spacingThemeControls",Object(es["b" /* css */])(styleSheet2.styling)].join(" "),style:inputStylePadding1,onClick:isSubformInPage?function(){}:function(e){return props.handleSelected(e,props.id,"n");},divType:"richtexteditor",state:showEditor===true?"expanded":"collapsed",painted:"false",onKeyDown:function onKeyDown(e){return props.handleSelected(e);},control_id:data.id,tabindex:"1",elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("span",{style:Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},borderStyle),backgroundColorDesigner),{},{display:"flex",justifyContent:"space-between",alignItems:"center"}),children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Label,{control_id:data.id,id:userDefinedControlId+"_label",style:{marginLeft:"10px",marginTop:"4pt",gap:"3px",display:"flex",wordBreak:"break-word",whiteSpace:"break-spaces"},divType:"Label",state:showEditor===true?"expanded":"collapsed",className:Object(es["b" /* css */])(styleSheet.styling)+" spacingThemeLabel",elem_type:"textarea",frameindex:data.frameIndex,elementindex:data.elementIndex,children:[data.style&&data.style.Label?data.style.Label:"",mandatoryElem,props.data.style&&props.data.style["ToolTip"]||props.data.style["ControlDescription"]?/*#__PURE__*/Object(jsx_runtime["jsx"])(Tooltip["a" /* default */],{tooltip:props.data.style.ToolTip}):/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{})]}),showEditor===true?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:COLUMN_module_default.a.richtextEditorCollapsibleIcon,divType:"openClose",state:showEditor===true?"expanded":"collapsed",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RichtextEditorDownArrow["default"],{divType:"openClose",state:showEditor===true?"expanded":"collapsed"})}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:COLUMN_module_default.a.richtextEditorCollapsibleIcon,divType:"openClose",state:showEditor===true?"expanded":"collapsed",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RichtextEditorUpArrow["default"],{divType:"openClose",state:showEditor===true?"expanded":"collapsed"})})]}),showEditor===true?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{padding:"".concat((_props$data$style3=props.data.style)===null||_props$data$style3===void 0?void 0:_props$data$style3["BorderRadius"])},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactFroala,{previewmode:props===null||props===void 0?void 0:props.previewmode,divType:"editor",data:props.data,id:userDefinedControlId,elem_type:"textarea",gdToken:contexts===null||contexts===void 0?void 0:contexts.gdtoken,wiToken:contexts===null||contexts===void 0?void 0:contexts.witoken})}):null,(controlSelected===null||controlSelected===void 0?void 0:controlSelected.id)===(props===null||props===void 0?void 0:props.id)&&/*#__PURE__*/Object(jsx_runtime["jsx"])(ElemDeleteControlWrapper["a" /* default */],{isSubformInPage:isSubformInPage,containerId:props.containerId,id:props.data.id,data:props.data,deleteControl:deleteControl,elemType:(_props$data10=props.data)===null||_props$data10===void 0?void 0:_props$data10.elem_type,setDragging:props.setDragging,handleReorderStart:props.handleReorderStart,handleReorderDrop:props.handleReorderDrop,dragId:props.dragId,dragType:"column"}),((_window=window)===null||_window===void 0?void 0:_window.openQuickTools)&&open&&/*#__PURE__*/Object(jsx_runtime["jsx"])(QuickTools["a" /* default */],{containerId:props.containerId,selectedControl:props.data,open:open,setOpen:setOpen})]},data.id)});}};/* harmony default export */ var BasicFormControls_RICHTEXTEDITOR = __webpack_exports__["default"] = (RICHTEXTEDITOR_RICHTEXTEDITOR);

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function RichtextEditorUpArrow(props){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15.41",height:"11.834",viewBox:"0 0 15.41 11.834",divType:"openClose",state:props.state,children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{id:"Group_55756","data-name":"Group 55756",transform:"translate(0.702 0.5)",divType:"openClose",state:props.state,children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{id:"Path_52990","data-name":"Path 52990",d:"M-8939.44,20922.889l7.091-5.631,6.914,5.631",transform:"translate(8939.44 -20917.258)",fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",divType:"openClose",state:props.state}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{id:"Path_52991","data-name":"Path 52991",d:"M-8939.44,20922.889l7.091-5.631,6.914,5.631",transform:"translate(8939.44 -20912.258)",fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",divType:"openClose",state:props.state})]})});}/* harmony default export */ __webpack_exports__["default"] = (RichtextEditorUpArrow);

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function RichtextEditorUpArrow(props){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15.41",height:"11.834",viewBox:"0 0 15.41 11.834",divType:"openClose",state:props.state,children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("g",{id:"Group_55755","data-name":"Group 55755",transform:"translate(0.702 0.703)",divType:"openClose",state:props.state,children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{id:"Path_52990","data-name":"Path 52990",d:"M-8939.44,20917.26l7.091,5.631,6.914-5.631",transform:"translate(8939.44 -20912.26)",fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",divType:"openClose",state:props.state}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{id:"Path_52991","data-name":"Path 52991",d:"M-8939.44,20917.26l7.091,5.631,6.914-5.631",transform:"translate(8939.44 -20917.26)",fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",divType:"openClose",state:props.state})]})});}/* harmony default export */ __webpack_exports__["default"] = (RichtextEditorUpArrow);

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=RICHTEXTEDITOR.a0a99de169625c9bba9f.js.map