(this["fb_mf"] = this["fb_mf"] || []).push([[53],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var SheetPropertiesJson={"View":{"Icons":""},"Basic":{"ReadOnly":"","ReadOnlyStyle":""},"Display":{"MobileVisible":"","TabsVisible":""}};/* harmony default export */ __webpack_exports__["a"] = (SheetPropertiesJson);

/***/ }),

/***/ 2281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_DeleteIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(167);
/* harmony import */ var _LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
/* harmony import */ var _LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2305);
/* harmony import */ var _ReusableComponents_ToggleBtn_ToggleBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var _Properties_PropertiesConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony import */ var _Properties_SheetPropertiesJson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1029);
/* harmony import */ var _ReusableComponents_CollapseCard_CollapseCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90);
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_Icons_TabColumn1_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(495);
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_Icons_TabColumn2_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(496);
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_Icons_TabColumn3_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(497);
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_Icons_TabColumn4_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(498);
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_Icons_TabColumn5_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(499);
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_Icons_TabColumn6_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(500);
/* harmony import */ var _Icons_Layers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(258);
/* harmony import */ var _ReusableComponents_ControlLabel_ControlLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(100);
/* harmony import */ var _ReusableComponents_ActiveIcon_ActiveIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(124);
/* harmony import */ var _Resources_CanvasContextFile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(109);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2317);
/* harmony import */ var _Redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69);
/* harmony import */ var _CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(62);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var SheetProperties=function SheetProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild;var contexts=Object(_CustomHooks_CustomHooks__WEBPACK_IMPORTED_MODULE_21__[/* GetStateFromData */ "b"])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,changeSectionLayout=_contexts$contexts.changeSectionLayout,formState2=_contexts$contexts.formState2,deleteControl=_contexts$contexts.deleteControl,setQuickToolsClose=_contexts$contexts.setQuickToolsClose;var updatedComponentInFormState=updateJson.updatedComponentInFormState,removeAndUpdateComponentInFormState=updateJson.removeAndUpdateComponentInFormState;// const { updateJson,deleteControl } = useContext(AppContext);
// const { updatedComponentInFormState, removeAndUpdateComponentInFormState} =updateJson;
var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_19__[/* useTranslation */ "a"])(['styles','translation']),t=_useTranslation.t;var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.appformBuilder_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.appformBuilder_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function(){//console.log("selectedControl :: " , props.selectedControl);
//console.log("colcol" + props.selectedControl.ColumnLayout);
var sheetArray=[1,2,3,4,6,12];//  document.getElementById("id").style.color="#0072c6";
for(var i=0;i<sheetArray.length;i++){// if(props.selectedControl.ColumnLayout!==null && props.selectedControl.ColumnLayout!==undefined && props.selectedControl.ColumnLayout===(i+1)){
//     document.getElementById('COL'+props.selectedControl.ColumnLayout).style.border="1px solid #0072c6";
//     document.getElementById('COL'+props.selectedControl.ColumnLayout).style.background= "#0072C60D 0% 0% no-repeat padding-box";
// } else 
if(document.getElementById('COL'+(i+1))!==null){document.getElementById('COL'+(i+1)).style.border="1px solid #C6C9CF";document.getElementById('COL'+(i+1)).style.background="#FFFFFF";}}//console.log('DEFAULT:::'+'COL'+props.selectedControl.ColumnLayout);
//console.log('COLUMN_LAYOUT_DIV :: ',document.getElementById('COL'+props.selectedControl.ColumnLayout+''));
if(document.getElementById('COL'+props.selectedControl.ColumnLayout)!==null){//console.log("colcol" + props.selectedControl.ColumnLayout);
document.getElementById('COL'+props.selectedControl.ColumnLayout).style.border="1px solid #0072c6";document.getElementById('COL'+props.selectedControl.ColumnLayout).style.background="#0072C60D 0% 0% no-repeat padding-box";//console.log('default olumnLayout fror sheet is '+props.selectedControl.ColumnLayout);
//console.log('same is set on '+'COL'+props.selectedControl.ColumnLayout);
}//    if(document.getElementById('COL'+props.selectedControl.ColumnLayout)!==null){
//        for(var i=0;i<sheetArray.length;i++)
//        {
//            if(sheetArray[i]!==props.selectedControl.ColumnLayout)
//            {
//             //console.log("colcolabcde");
//             document.getElementById('COL'+sheetArray[i]).style.border="1px solid #DADADA";
//             document.getElementById('COL'+sheetArray[i]).style.background= "#FFFFFF 0% 0% no-repeat padding-box";  
//            }
//        }
//    }
//    document.getElementById('COL'+props.selectedControl.ColumnLayout).style.background= "#0072C60D 0% 0% no-repeat padding-box"
// document.getElementById("COL1").style.color="block";
// background: #0072C60D 0% 0% no-repeat padding-box;
// border: 1px solid #0072c6;
});//console.log("sheet", props.selectedControl);
//console.log('Column Layout :: '+props.selectedControl.ColumnLayout);
// const {changeSectionLayout} = useContext(AppContext);
var CollapsibleItems=[];Object.keys(_Properties_SheetPropertiesJson__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]).forEach(function(key,index){var collapseComponentBody=[];Object.keys(_Properties_SheetPropertiesJson__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"][key]).forEach(function(property){collapseComponentBody.push(prepareHtmlTag(property,_Properties_PropertiesConfiguration__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][property].type));});CollapsibleItems.push(/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_ReusableComponents_CollapseCard_CollapseCard__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{id:index+"",heading:key,body:collapseComponentBody}));});// props.selectedControl.ColumnLayout=2;
function setToggleValue(value,label){//console.log('label::'+label+'| value::'+value);
// setAddIcon(value);
// if(value==='false')
// {
//     // Object.values(props.selectedControl.children).map((key,index)=>{
//     //     if(jsonIcons[key.id]!==undefined)
//     //     {
//     //         props.selectedControl.children[index]["icon"]["name"] = "";
//     //         props.selectedControl.children[index]["icon"]["file"] = "";
//     //         updatedComponentInFormState(props.selectedControl.id, props.selectedControl)
//     //     }
//     // });
// }else{
//     // Object.values(props.selectedControl.children).map((key,index)=>{
//     //     if(jsonIcons[key.id]!==undefined)
//     //     {
//     //         props.selectedControl.children[index]["icon"]["name"] = jsonIcons[key.id].name;
//     //         props.selectedControl.children[index]["icon"]["file"] = jsonIcons[key.id].file;
//     //         updatedComponentInFormState(props.selectedControl.id, props.selectedControl)
//     //     }
//     // });
// }
//setOpen(!open);
}function handleToggle(e,field){var value=e.target.value;//   props.selectedControl.style[field] = value;
// console.log(value, field);
if(props.selectedControl.style)props.selectedControl.style[field]=value+"";else{props.selectedControl.style={};props.selectedControl.style[field]=value+"";}// let updatedState = {...props.selectedControl};
if(field==="Enable"){props.selectedControl.style["previousEnable"]=value;// updatedState = changeControlProperty(value,field,updatedState);
}if(field==="ReadOnlyStyle"){props.selectedControl.style["previousReadOnly"]=value;// updatedState = changeControlProperty(value,field,updatedState);
}if(field==="ReadOnly"){props.selectedControl.style["previousReadOnlyValue"]=value;// updatedState = changeControlProperty(value,field,updatedState);
}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function handleLayoutChange(value){changeSectionLayout(value,props.selectedControl);}function prepareHtmlTag(key,type){var _props$selectedContro,_props$selectedContro2,_jsxs2;switch(type.toLowerCase()){// case "toggle" : return(
//     <div className={styles.parentDiv}>
//             <span className={styles.leftLabel} >{t(`translation:${ControlsMap[key].label}`)}</span>
//             <ToggleBtn  handleStyleChange={(value)=>setToggleValue(value, ControlsMap[key].label)}/> 
//         </div>
//     )
case"toggle":return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])("div",{className:_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.parentDiv,children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("span",{className:_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.leftLabel,children:t("translation:".concat(_Properties_PropertiesConfiguration__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][key].label))}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("div",{className:translationStyles1?_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.toggleCheckboxArabic:_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.toggleCheckbox,children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_ReusableComponents_ToggleBtn_ToggleBtn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{toggleState:(_props$selectedContro=props.selectedControl)===null||_props$selectedContro===void 0?void 0:(_props$selectedContro2=_props$selectedContro.style)===null||_props$selectedContro2===void 0?void 0:_props$selectedContro2[key],handleToggle:handleToggle,field:key})})]});case"icon":return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("div",{className:_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sheetType,children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(_ReusableComponents_ActiveIcon_ActiveIcon__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],(_jsxs2={layout:"3",defaultValue:"1",spacing:"0",labelPosition:"in",labelStyle:{fontSize:"11px"},activeStyle:{padding:"6px",margin:"0",background:"#fff",border:"1px solid #0072c6",width:"89px",color:"#0072C6"},inActiveStyle:{padding:"6px",margin:"0",background:"#fff",border:"1px solid #c6c9cf",width:"89px"},passedValue:props.selectedControl.ColumnLayout},Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2,"activeStyle",{width:"84px"}),Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2,"layout","3"),Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2,"inActiveStyle",{width:"84px"}),Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2,"handleStyleType",handleLayoutChange),Object(E_iBPS6_CICD_Build_Compilation_appformBuilder_war_SVNCode_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsxs2,"children",[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_svgr_webpack_svgo_titleProp_ref_Icons_TabColumn1_svg__WEBPACK_IMPORTED_MODULE_9__[/* ReactComponent */ "a"],{value:"1",label:"1 COLUMN",style:{paddingRight:"9px"}}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_svgr_webpack_svgo_titleProp_ref_Icons_TabColumn2_svg__WEBPACK_IMPORTED_MODULE_10__[/* ReactComponent */ "a"],{value:"2",label:"2 COLUMNS",style:{paddingRight:"9px"}}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_svgr_webpack_svgo_titleProp_ref_Icons_TabColumn3_svg__WEBPACK_IMPORTED_MODULE_11__[/* ReactComponent */ "a"],{value:"3",label:"3 COLUMNS",style:{paddingRight:"9px"}}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_svgr_webpack_svgo_titleProp_ref_Icons_TabColumn4_svg__WEBPACK_IMPORTED_MODULE_12__[/* ReactComponent */ "a"],{value:"4",label:"4 COLUMNS",style:{paddingRight:"9px"}}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_svgr_webpack_svgo_titleProp_ref_Icons_TabColumn5_svg__WEBPACK_IMPORTED_MODULE_13__[/* ReactComponent */ "a"],{value:"6",label:"6 COLUMNS",style:{paddingRight:"9px"}}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_svgr_webpack_svgo_titleProp_ref_Icons_TabColumn6_svg__WEBPACK_IMPORTED_MODULE_14__[/* ReactComponent */ "a"],{value:"12",label:"12 COLUMNS",style:{paddingRight:"9px"}})]),_jsxs2))});}}return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["Fragment"],{children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(_ReusableComponents_ControlLabel_ControlLabel__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],{label:"Tab",handleDelete:deleteControl,id:props.selectedControl.id}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Body,{className:_LeftNavigation_DesignerControls_BasicControls_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardBodySheetProperties,children:CollapsibleItems.map(function(item,index){return item;})})})]});};/* harmony default export */ __webpack_exports__["default"] = (SheetProperties);

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function Layers(){return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15.405",height:"16.32",viewBox:"0 0 15.405 16.32",children:/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path",{d:"M12.194,17.155l-6.307-4.9L4.5,13.33l7.7,5.991,7.7-5.991L18.51,12.243Zm.009-2.174,6.3-4.9,1.4-1.087L12.2,3,4.5,8.991l1.395,1.087Z",transform:"translate(-4.5 -3)"})});}/* harmony default export */ __webpack_exports__["default"] = (Layers);

/***/ })

}]);
//# sourceMappingURL=SheetProperties.b95f39dd9a010c3f9997.js.map