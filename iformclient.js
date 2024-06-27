function getExternalJSPaths(){
    // path to load multiple files are to given here comma seperated
    const filePaths=[];
    return filePaths;
}

function onRowClick(listviewId,rowIndex){
    return true
}

function clickLabelLink(labelid)
{
    //console.log("labelid",labelid);
}

function onChangeSectionState(frameId, state)
{
    //console.log(frameId,state);
    
}

function postHookPickListOk(columns,controlId){
   // console.log(columns, controlId);
}

function postHookDBLink() {
    //will call after dblinking
}

function tableOperation(tableId, operationType){
    if(operationType === "AddRow"){
        return true
    } else if(operationType === "DeleteRow"){
        return true
    } else if(operationType === "CopyRow"){
        return true
    }
}


function subFormLoad(buttonId){
    //console.log(buttonId);
    functions.setStyle("frame3", "visible", "false");
    functions.updateJSON();
}

function customValidation(type) {
    if(type === "D") {
        //operation that need to perform on Done button
    }
    else if(type === "S") {
        //operation that need to perform on Save button
    }
    else if(type === "I") {
        //operation that need to perform on Introduce button
    }
    return true;
}

function formLoad(){
    //console.log("formLoad hook..");
}

function handleCustomKeyEvent(ev){
    //console.log("handleCustomKeyEvent",ev);
}

function subformDoneClick(buttonId){ 
    //Custom Code // Doubt
    //console.log(buttonId);
}

function picklistPreHook(controlId){ 
    //Custom Code 
    //console.log(controlId);
}

function subFormPreHook(buttonId){ 
    //console.log(buttonId);
    return true; 
}

function postHookPickListCancel(textid){ 
    //CustomCode 
//    console.log(textid);
}

function clearPicklistPostHook(controlId){
    //Custom Code 
  //  console.log(controlId);
}

function formChangeHook(ref){
    //console.log(ref);
}

function addRowPostHook(tableId){ 
    //Custom Code 
    //console.log(tableId);
    if(tableId == "TransportReimburse_group")
    {
        var rowCount = functions.getGridRowCount(tableId);
        var totalAmount = Number(functions.getValue("TotalAmount"));

        for(let i = 0; i < rowCount; i++)
        {
            var amount = functions.getValueFromTableCell(tableId, i, 3);
            totalAmount+=amount;
        }
        functions.setValues({
            "TotalAmount" : totalAmount
        });
    }
}

function deleteRowPostHook(tableId, rowIndices){ 
    //Custom Code 
    //console.log(tableId, rowIndices);
}

function onTableCellChange(rowIndex,colIndex,ref,controlId){ 
    //custom code 
    //console.log(rowIndex,colIndex,ref,controlId);
}

function selectRowHook(tableId,selectedRowsArray,isAllRowsSelected){
    //custom code 
    //console.log(tableId, selectedRowsArray, isAllRowsSelected);
}

function saveAndNextPreHook(tabId){    
    return false;
}

function closeWorkitemHook() {
    
}

function skipValidation() {
    
    return false;
}


function preHookDeleteDocument() {
    return true;
}

function restrictMultipleDocUpload() {
    return false;
}

function setDefaultPrecisionForControl(){
    return 2
}

function clearEditableComboBoxValueIFNotExists(){
    return true
}
function selectFeatureToBeIncludedInRichText(){
    const FroalaToolbarJson = {
        "paragraphFormat": 'true',
        "fontSize": 'true',
        "fontFamily": 'true',
        "textColor": 'true',
        "backgroundColor": 'true',
        "alignLeft": 'true',
        "alignRight": 'true',
        "alignCenter": 'true',
        "alignJustify": 'true',    
        "strikeThrough": 'true',
        "subscript": 'true',
        "superscript": 'true',
        "formatOL": 'true',
        "formatUL": 'true',
        "indent": 'true',
        "outdent": 'true',
        "lineHeight": 'true',
        "quote": 'true',
        "bold": 'true',
        "italic": 'true',
        "underline": 'true',
        "insertHR": 'true',
        "insertTable": 'true',
        "undo": 'true',
        "redo": 'true',
        
    }
    return FroalaToolbarJson;
}

//first entry
function setShowFieldsByCustomerType() {
    var customerType = functions.getValue("consumertype");
 
    if (customerType == "Individual") {
       functions.setStyle("fieldofbusiness", "visible", "false");
       functions.setStyle("companyname", "visible", "false");
       functions.setStyle("npwpnumber", "visible", "false");
       functions.setStyle("npwpname", "visible", "false");
       functions.setStyle("dateofestablishnpwp", "visible", "false");
       functions.setStyle("customername", "visible", "true");
       functions.setStyle("identitynumber", "visible", "true");
       functions.setStyle("placeofbirth", "visible", "true");
       functions.setStyle("dateofbirth", "visible", "true");
       functions.setStyle("address", "visible", "true");
       functions.setStyle("rtrw", "visible", "true");
       functions.setStyle("Province", "visible", "true");
       functions.setStyle("City", "visible", "true");
       functions.setStyle("District", "visible", "true");
       functions.setStyle("Village", "visible", "true");
       functions.setStyle("postalcode", "visible", "true");
       functions.setStyle("religion", "visible", "true");
       functions.setStyle("gender", "visible", "true");
       functions.setStyle("maritalstatus", "visible", "true");
       functions.setStyle("occupation", "visible", "true");
       functions.setStyle("nationality", "visible", "true");
 
    } else if (customerType == "Company") {
       functions.setStyle("fieldofbusiness", "visible", "true");
       functions.setStyle("companyname", "visible", "true");
       functions.setStyle("npwpnumber", "visible", "true");
       functions.setStyle("npwpname", "visible", "true");
       functions.setStyle("dateofestablishnpwp", "visible", "true");
       functions.setStyle("customername", "visible", "false");
       functions.setStyle("Identitynumber", "visible", "false");
       functions.setStyle("placeofbirth", "visible", "false");
       functions.setStyle("dateofbirth", "visible", "false");
       functions.setStyle("address", "visible", "false");
       functions.setStyle("rtrw", "visible", "false");
       functions.setStyle("Province", "visible", "false");
       functions.setStyle("City", "visible", "false");
       functions.setStyle("district", "visible", "false");
       functions.setStyle("village", "visible", "false");
       functions.setStyle("postalcode", "visible", "false");
       functions.setStyle("religion", "visible", "false");
       functions.setStyle("gender", "visible", "false");
       functions.setStyle("maritalstatus", "visible", "false");
       functions.setStyle("occupation", "visible", "false");
       functions.setStyle("nationality", "visible", "false");
    }
 }
 
 function actionDetailDecision() {
    var action = functions.getValue("ActionDecision");
 
    if (action == "Reject") {
       functions.setStyle("rejectreason", "disable", "true");
       functions.setStyle("rejectreason", "mandatory", "true");
       functions.setValue("approvalDecision", "Reject");
    } else {
       functions.setStyle("rejectreason", "disable", "false");
       functions.setStyle("rejectreason", "mandatory", "false");
       functions.setValue("approvalDecision", "Proceed");
    }
    functions.updateJSON();
 }
 
 function setViewByDigitalSignature() {
    var digitalSignature = functions.getValue("digitalsignature");
 
    if (digitalSignature == true) {
       functions.setStyle("submissionformbutton", "disable", "true");
       functions.setStyle("frame8", "visible", "false");
    } else {
       functions.setStyle("submissionformbutton", "disable", "false");
       functions.setStyle("frame8", "visible", "true");
    }
    functions.updateJSON();
 }
 
 //data entry
 
 //approval
 function TypeCustomer(){
 
     var tipeCustomer = functions.getValue("TrxLeadsApplicantNew.consumertype")
 
     if(tipeCustomer.toLowerCase() == "individual"){
         functions.setStyle("TrxLeadsApplicantNew.dateofbirth","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.identityno","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.address","visible","true");
         functions.setStyle("textbox10","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.occupation","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.maritalstatus","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.mobilephone","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.nationality","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.familyno","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.email","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.noofdependant","visible","true");
         functions.setStyle("frame3","visible","true");
 
 
         functions.setStyle("TrxLeadsApplicantNew.companytitle","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.companyname","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.npwpno","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.npwpname","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.dateofestablishmentdeed","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.companyownershipstatus","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.noofestablishmentdeed","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.economysector","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.economysubsector","visible","false");
         functions.setStyle("TrxLeadsGuarantor.placeofbirth","visible","false");
         functions.setStyle("frame8","visible","false");
         
         
     } else if (tipeCustomer.toLowerCase() = "company"){
 
         functions.setStyle("TrxLeadsApplicantNew.dateofbirth","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.identityno","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.address","visible","false");
         functions.setStyle("textbox10","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.occupation","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.maritalstatus","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.mobilephone","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.nationality","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.familyno","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.email","visible","false");
         functions.setStyle("TrxLeadsApplicantNew.noofdependant","visible","false");
         functions.setStyle("frame3","visible","false");
 
 
         functions.setStyle("TrxLeadsApplicantNew.companytitle","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.companyname","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.npwpno","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.npwpname","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.dateofestablishmentdeed","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.companyownershipstatus","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.noofestablishmentdeed","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.economysector","visible","true");
         functions.setStyle("TrxLeadsApplicantNew.economysubsector","visible","true");
         functions.setStyle("TrxLeadsGuarantor.placeofbirth","visible","true");
         functions.setStyle("frame8","visible","true");
     
     }
 
     functions.updateJSON();
 
 }
 
 function MaritalStatusCustomer(){
     var status = functions.getValue("TrxLeadsApplicantNew.maritalstatus");
 
     if(status.toLowerCase() == "belum menikah" || status.toLowerCase() == "Janda"){
 
         functions.setStyle("frame3","visible","false");
 
     } else {
         functions.setStyle("frame3","visible","true");
     }
 
     functions.updateJSON();
 }
 
 function GetAgeCustomer(){
     var birth = functions.getValue("TrxLeadsApplicantNew.dateofbirth");
 
     var usia = GetAge(birth);
 
     functions.setValue("textbox10",usia.toString());
 
     functions.updateJSON();
 }
 
 
 function GetAgeSpouse(){
     var birthSpouse = functions.getValue("TrxLeadsApplicantNew.spousedob");
 
     var usiaSpouse = GetAge(birthSpouse);
 
     functions.setValue("textbox21",usiaSpouse.toString());
 
     functions.updateJSON();
 }
 
 
 function GetAgeGuarantor(){
     var birthGuarantor = functions.getValue("TrxLeadsGuarantor.dateofbirth");
 
     var usiaGuarantor = GetAge(birthGuarantor);
 
     functions.setValue("textbox31",usiaGuarantor.toString());
 
     functions.updateJSON();
 }
 
 function IsGuarantor(){
     var guarantor = functions.getValue("TrxLeadsGuarantor.isguarantorneed");
 
     if(guarantor == true){
         functions.setStyle("frame4","visible","true");
     } else{
         functions.setStyle("frame4","visible","false");
     }
 functions.updateJSON();
 
 }
 
 
 function GetAge(dateString) {
         
     const parts = dateString.split('/');
     const day = parseInt(parts[0], 10);
     const month = parseInt(parts[1], 10) - 1; 
     const year = parseInt(parts[2], 10);
 
     const birthDate = new Date(year, month, day);
 
     const currentDate = new Date();
 
     let age = currentDate.getFullYear() - birthDate.getFullYear();
     const monthDifference = currentDate.getMonth() - birthDate.getMonth();
 
     if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
         age--;
     }
 
     return age;
 }
 
 
 function ActionActivityName(){
     var activity = functions.getWorkItemData("ActivityName");
 
     if(activity.toLowerCase() == "approval head of kcp"){
         functions.setStyle("button2","visible","false");
         functions.setStyle("frame23","visible","true");
     } else {
         functions.setStyle("button2","visible","true");
         functions.setStyle("frame23","visible","false");
     }
 
     functions.updateJSON();
 
 }
 
 //disbursement
 
 function hideByConsumerType(){
     let consumerType = functions.getValue("TrxLeadsApplicantNew.consumertype");
     if(consumerType.toLowerCase() == "individu"){
         functions.setValue("frame2", "visible", true);
         functions.setValue("frame3", "visible", false);
     }else if(consumerType.toLowerCase() == "company"){
         functions.setValue("frame2", "visible", false); //individu
         functions.setValue("frame3", "visible", true);  //company
         functions.setValue("frame6", "visible", false); //spouse
         functions.setValue("frame4", "visible", true);  //guarantor
     }else{
         functions.setValue("frame2", "visible", false);
         functions.setValue("frame3", "visible", false);
         functions.setValue("frame6", "visible", false);
         functions.setValue("frame4", "visible", false);
     }
     functions.updateJSON();
 }
 
 function hideByMaritalStatus(){
     let consumerType = functions.getValue("TrxLeadsApplicantNew.consumertype");
     let maritalStatus = functions.getValue("TrxLeadsApplicantNew.maritalstatus");
     if(maritalStatus.toLowerCase() == "menikah" && consumerType.toLowerCase() == "individu"){
         functions.setValue("frame6","visible", true);
     }else{
         functions.setValue("frame6", "visible", false);
     }
     functions.updateJSON();
 }
 
 function GetAge(){
     let birth = functions.getValue("TrxLeadsApplicantNew.dateofbirth");
 
     let usia = getAge(birth);
 
     function getAge(dateString) {
 
         const birthDate = new Date(dateString);
         
 
         const currentDate = new Date();
 
         let age = currentDate.getFullYear() - birthDate.getFullYear();
         const monthDifference = currentDate.getMonth() - birthDate.getMonth();
 
 
         if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
             age--;
         }
 
         return age;
     }
 
 
     functions.setValue("textbox12",usia.toString());
 
     functions.updateJSON();
 }





























/*******************************************  Custom Code Implementation for fetching Workitem Information ************************************************
	1. Custom Implementation should call window.getWorkitemDataHandler(["form_data","doc","excp","todo"], true) to fetch Workitem Information.
		This function takes array of options and flag for DataStore. Application can pass options as per requirements.
		"form_data": Workitem's form data or attributes name and value(s)
		"doc": Workitem's document(s) information
		"excp": Workitem's exception(s) information
		"todo": Workitem's todo(s) information
		Callback: Callback is called when workitem Information is ready. Implementation should write custom code in window.workitemDataProcessor() method.
		fromDataStore (true, false): If true then it will fetch workitem data from DB else from current session store. Default is true.
		
	2. Output returned is in json format whose sample is provided at bottom of this article.	
***********************************************************************************************************************************************************/

window.getWorkitemDataHandler = function (){	
	window._getWorkitemData(["form_data","doc","excp","todo"], window.workitemDataProcessor, true);
}

window.workitemDataProcessor = function (workitemData){
	// ==============================================	Custom Implementation Start here	==========================================================    
	var workitemDataJson = JSON.parse(workitemData);
		
	if(workitemDataJson.data.doc){
		var docStatus = workitemDataJson.data.doc.status;
		if(docStatus.maincode == "0"){
			var docData = workitemDataJson.data.doc.data;
			//alert("##docData="+docData);
		}
	} 
	
	if(workitemDataJson.data.excp){
		var excpStatus = workitemDataJson.data.excp.status;
		if(excpStatus.maincode == "0"){
			var excpData = workitemDataJson.data.excp.data;	
			//alert("##excpData="+excpData);
		}
	} 
	
	if(workitemDataJson.data.form_data){
		var formDataStatus = workitemDataJson.data.form_data.status;
		if(formDataStatus.maincode == "0"){
			var formData = workitemDataJson.data.form_data.data;
			//alert("##formData="+formData);
		}
	} 
	
	if(workitemDataJson.data.todo){
		var todoStatus = workitemDataJson.data.todo.status;
		if(todoStatus.maincode == "0"){
			var todoData = workitemDataJson.data.todo.data;
			//alert("##todoData="+todoData);
		}
	}
	
	
	/* 	Uncomment below code to unlock the workitem. 
		This is required if Application load data from DB and does not store it in Web Session e.g Mobile App. Desktop Application version unlocks workiem on browser window close automatically so explicit call is not required.
	*/	
	//window._unlockWorkitem(workitemUnlockProcessor);
}

window.workitemUnlockProcessor = function (workitemUnlockData){
	workitemUnlockDataJson = JSON.parse(workitemUnlockData);
	
	var workitemUnlockStatus = workitemUnlockDataJson.status;
	if(workitemUnlockStatus.maincode == "0"){
		var workitemStatus = workitemUnlockDataJson.data.status_list[0].status; //"Success"
		//alert("##workitemStatus="+workitemStatus);
	}
}


/* Response JSON format of window._getWorkitemData(["data","doc","excp","todo"], true) method
***********************************************************************************************************************************************************
{"data": {"doc": {"data": {"allow_comment": true, "available_doc_types": [{"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": false, "id": "0", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "Conversation"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "2", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D1"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "3", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D2"}], "available_owners": ["admin"], "default_doc_info": {"doc_index": "1006"}, "doc_upload_options": {"camera": true, "google_drive": false, "omnidocs": true, "scan": true, "system": true}, "documents": [{"checkout_by": "", "checkout_status": "N", "comments": "chrome_7JlmLwmXaY", "created_on": "05/Jul/2023 15:18:03", "doc_order_no": "1", "doc_type": {"description": "", "id": "2", "mandatory": false, "name": "D1"}, "enable_annotate": false, "enable_checkin": false, "enable_checkout": true, "enable_delete": true, "enable_download": true, "enable_print": true, "enable_version": true, "extension": "png", "i_s_index": "424#1#", "id": "1006", "is_conversation": false, "last_modified_by": "", "last_modified_on": "05/Jul/2023 15:18:03", "name": "chrome_7JlmLwmXaY.png", "no_of_pages": "1", "org_name": "D1(chrome_7JlmLwmXaY.png)", "owner": "admin", "owner_index": "507", "pinned": false, "pinned_order": "", "resource_type": "N", "show_multi_page": true, "site_id": "1", "size": "190.064 KB", "thumbnail": "", "url_info": {"get_annotation": "/wd-rest/app/viewimageannotation", "get_document": "/wd-rest/app/getdocuments?ImgIndex=424&VolIndex=1&DocExt=png&DocIndex=1006&PageNo=1&docType=N&DocSize=194626&ArchivalMode=N&ArchivalCabinet=&wid=1&pid=NewNPCase-0000000010-process&taskid=&WD_SID=e24d129f-ee5b-4313-b445-1c049c038365&WD_RID=455c4bfb-8388-4ccf-834a-e6eb06e1d9fc&DocumentName=D1.png", "get_stamp": "/wd-rest/app/stampServlet", "get_stamp_annotation": "/wd-rest/app/viewimagestamp", "get_stamp_ini": "/wd-rest/app/getdocstamps", "save_annotation": "/wd-rest/app/imageannotation"}, "version": "1.0", "version_flag": "N"}], "docviewer_info": {"opall_params": {"AllPages": true, "AnnotationColor": "", "AnnotationOption": "0", "colorViewerCanvas": "16777215", "cropImageMinQuality": "0.2", "CroppedImageSize": "32", "CurrentUserName": "admin", "DefaultFontSettings": "", "initialZoomLensPercentage": "100%", "initialZoomLensStatus": false, "IsZoomWindowChangeRequired": true, "MenuBar": true, "pageSetupIE": "{'bheader': false, 'bfooter': false}", "printApproach": "1", "printOption": "2", "PrintParameter": "1", "RequestMethod": "POST", "resizeExMaxPixelLimit": "10000000", "resizeExMaxZoomLimit": "-100", "resizeOption": "0", "ResizePercentage": "1", "RetainAngleSettings": false, "SaveAnnotationDialog": true, "StampWithoutINI": false, "TextWaterMarkPosition": "4", "TransformOption": "0", "ViewWaterMark": false, "Watermark_Properties": "50,90,Courier,0,20,0,0.5", "watermarkPrinting": "4", "ZoomLens": false, "ZoomLensForZoning": "300,200,1,true"}}, "enable_filter": true, "enable_search": true, "enable_sorting": true, "sort_on": 5, "sort_order": "D", "sort_type": 1, "upload_doc_as": {"new": true, "new_version": true, "overwrite": true}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "excp": {"data": {"exceptions": [{"category_id": "0", "category_name": "Ungrouped", "description": "ds", "id": "1", "name": "E1", "raised": [], "type": "VR"}, {"category_id": "0", "category_name": "Ungrouped", "description": "dsa", "id": "2", "name": "E2", "raised": [], "type": "VR"}, {"category_id": "1", "category_name": "G1", "description": "sd", "id": "3", "name": "E3", "raised": [], "type": "VR"}, {"category_id": "2", "category_name": "G2", "description": "sd", "id": "5", "name": "E5", "raised": [], "type": "VR"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "form_data": {"data": {"attributes": [{"array": false, "disabled": false, "field_type": "163", "label": "NP Integer 1", "length": "", "name": "NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "166", "label": "NP Float 1", "length": "15", "name": "NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "168", "label": "NP Date 1(dd/MMM/yyyy)  :", "length": "", "name": "NP Date 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "164", "label": "NP Long 1", "length": "", "name": "NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "1610", "label": "NP Text 1", "length": "255", "name": "NP Text 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "2610", "label": "New Ext NP String 1", "length": "255", "name": "New Ext NP String 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "263", "label": "New Ext NP Integer 1", "length": "", "name": "New Ext NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "264", "label": "New Ext NP Long 1", "length": "", "name": "New Ext NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "266", "label": "New Ext NP Float 1", "length": "15", "name": "New Ext NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "268", "label": "New Ext NP Date Time 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP Date Time 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "2612", "label": "New Ext NP Boolean 1", "length": "", "name": "New Ext NP Boolean 1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "disabled": false, "field_type": "2615", "label": "New Ext NP ShrtDte 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP ShrtDte 1", "type": "15", "value": ""}, {"array": true, "attributes": [[{"array": false, "field_type": "2610", "label": "new_complex_np2_string_1", "length": "255", "name": "Complex NP 2-new_complex_np2_string_1", "type": "10", "value": ""}, {"array": false, "field_type": "263", "label": "new_complex_np2_integer_1", "length": "", "name": "Complex NP 2-new_complex_np2_integer_1", "type": "3", "value": ""}, {"array": false, "field_type": "264", "label": "new_complex_np2_long1", "length": "", "name": "Complex NP 2-new_complex_np2_long1", "type": "4", "value": ""}, {"array": false, "field_type": "266", "label": "new_complex_np2_float_1", "length": "15", "name": "Complex NP 2-new_complex_np2_float_1", "type": "6", "value": ""}, {"array": false, "field_type": "268", "label": "new_complex_np2_dattim1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_dattim1", "type": "8", "value": ""}, {"array": false, "field_type": "2612", "label": "new_complex_np2_boolean1", "length": "", "name": "Complex NP 2-new_complex_np2_boolean1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "field_type": "2615", "label": "new_complex_np2_shrtdat1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_shrtdat1", "type": "15", "value": ""}, {"array": false, "field_type": "2618", "label": "new_complex_np2_ntext1", "length": "", "name": "Complex NP 2-new_complex_np2_ntext1", "type": "18", "value": ""}], []], "disabled": false, "field_type": "2611", "label": "Complex NP 2", "length": "", "name": "Complex NP 2", "type": "11"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "todo": {"data": {"show_todo_desc": false, "todos": [{"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "sda", "mandatory": false, "name": "T1", "picklist": ["Yes", "No", "N/A"], "picklist_count": "4", "read_only": false, "right_flag": "M", "todo_external_object_index": "1", "todo_histories": [], "todo_index": "1", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "M"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "dsa", "mandatory": false, "name": "T2", "picklist": ["V1", "V2", "V3", "V4", "V5"], "picklist_count": "5", "read_only": false, "right_flag": "M", "todo_external_object_index": "2", "todo_histories": [], "todo_index": "2", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "P"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "1", "category_name": "TriggerToDos", "current_value": "", "description": "sad", "mandatory": false, "name": "SetOneTrigger", "picklist": [], "picklist_count": "", "read_only": false, "right_flag": "M", "todo_external_object_index": "3", "todo_histories": [], "todo_index": "3", "todo_variable_id": "42#0", "trigger_list": [{"trigger_index": "1", "trigger_name": "SetOneTrigger", "trigger_type": "S", "var_to_set_list": [{"param": "2023-06-01", "type1": "U", "type2": "C", "variable_id1": "11#0", "variable_id2": "0#0", "variable_name": "NP Date 1"}, {"param": "1.1", "type1": "U", "type2": "C", "variable_id1": "9#0", "variable_id2": "0#0", "variable_name": "NP Float 1"}, {"param": "1", "type1": "U", "type2": "C", "variable_id1": "1#0", "variable_id2": "0#0", "variable_name": "NP Integer 1"}, {"param": "111", "type1": "U", "type2": "C", "variable_id1": "15#0", "variable_id2": "0#0", "variable_name": "NP Long 1"}, {"param": "One", "type1": "U", "type2": "C", "variable_id1": "19#0", "variable_id2": "0#0", "variable_name": "NP Text 1"}, {"param": "true", "type1": "I", "type2": "C", "variable_id1": "63#0", "variable_id2": "0#0", "variable_name": "New Ext NP Boolean 1"}, {"param": "2023-06-01", "type1": "I", "type2": "C", "variable_id1": "62#0", "variable_id2": "0#0", "variable_name": "New Ext NP Date Time 1"}, {"param": "1.1", "type1": "I", "type2": "C", "variable_id1": "61#0", "variable_id2": "0#0", "variable_name": "New Ext NP Float 1"}, {"param": "1", "type1": "I", "type2": "C", "variable_id1": "59#0", "variable_id2": "0#0", "variable_name": "New Ext NP Integer 1"}, {"param": "111", "type1": "I", "type2": "C", "variable_id1": "60#0", "variable_id2": "0#0", "variable_name": "New Ext NP Long 1"}, {"param": "01-06-2023", "type1": "I", "type2": "C", "variable_id1": "64#0", "variable_id2": "0#0", "variable_name": "New Ext NP ShrtDte 1"}, {"param": "One", "type1": "I", "type2": "C", "variable_id1": "58#0", "variable_id2": "0#0", "variable_name": "New Ext NP String 1"}]}], "view_type": "T"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}

 Response JSON format of window._unlockWorkitem() method
***********************************************************************************************************************************************************
{
  "data" : {
    "status_list" : [ {
      "registration_no" : "NewNPCase-0000000019-process",
      "status" : "Success",
      "message" : "Workitem unlocked"
    } ]
  },
  "status" : {
    "maincode" : "0",
    "suberrorcode" : "0",
    "subject" : "",
    "description" : "",
    "errormsg" : ""
  }
}
***********************************************************************************************************************************************************/

var isWebViewReady = false;

window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
    isWebViewReady = true;
});

function triggerMobileCustomCode(requestName, data) {
    //Prepare data for the mobile request
    var argsObj = {
        "RequestId": requestName,
        "Data": data
    };
    var argsJsonString = JSON.stringify(argsObj);
    //Custom trggering of mobile handler
    console.log("Triggering handler");
    return window.flutter_inappwebview.callHandler('customMobileCodeHandler', argsJsonString);
}

function onEventRecievedFromMobile(recievedDataString) {
    //Whenever a event will be triggered from Mobile side
    //This method will be triggered with data and eventName 
    var dataObj = JSON.parse(recievedDataString);
    console.log("Event triggered from Mobile" + recievedDataString);
    var eventId = dataObj["RequestId"];
    var dataFromMobileEnd = dataObj["Data"];
    //The above data will be used for funther operations to be performed by form accordingly
}
