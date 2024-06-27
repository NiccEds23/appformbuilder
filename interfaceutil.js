/*******************************************  Common Custom Code Implementation for fetching Workitem Information *****************************************
	1. Custom Implementation should call window.getWorkitemDataHandler(["form_data","doc","excp","todo"], true) to fetch Workitem Information.
		This function takes array of options and flag for DataStore. Application can pass options as per requirements.
		"form_data": Workitem's form data or attributes name and value(s)
		"doc": Workitem's document(s) information
		"excp": Workitem's exception(s) information
		"todo": Workitem's todo(s) information
		fromDataStore (true, false): If true then it will fetch workitem data from DB else from current session store. Default is true.
	
	2. Output returned is in json format whose sample is provided at bottom of this article.	
***********************************************************************************************************************************************************/

window._getJwtToken = function (){
	return functions.getInterfaceJwtToken();
}

window._getGeneralData = function (){	
	var strGeneralData = {
		ProcessDefId: functions.getWorkItemData("processdefid"),
		QueueId: functions.getWorkItemData("queueid"),
		QueueType: functions.getWorkItemData("queuetype"),
		Pid: functions.getWorkItemData("processinstanceid"),
		Wid: functions.getWorkItemData("workitemid"),
		Tid: functions.getWorkItemData("taskid")
	};
	
	return strGeneralData;
}

window._getWorkitemData = function (options, callback, fromDataStore){
	if(options == null || !_isArray(options) || options.length == 0){
		return {};	
	}
	
	if((typeof fromDataStore == 'undefined') || (fromDataStore == null) || (fromDataStore.length == 0)){
		fromDataStore = true;
	}
	
	if(typeof callback == 'undefined'){
		callback = null;
	}

	var payload = {};
	var headers = {};
	
	var generalDataJson = window._getGeneralData();
	
	payload.options = options;	
	payload.process_def_id = generalDataJson.ProcessDefId;		
	payload.queue_id = generalDataJson.QueueId;
	payload.queue_type = generalDataJson.QueueType;
	payload.pid = generalDataJson.Pid;
	payload.wid = generalDataJson.Wid;
	payload.task_id = generalDataJson.Tid;
	payload.datastore = fromDataStore;
	
	headers.Authorization = window._getJwtToken();
	
	var url = "/wd-rest/app/getworkitemdata";
	return _makeXHRRequest(url, headers, payload, callback);	
}

window._unlockWorkitem = function (callback){
	if(typeof callback == 'undefined'){
		callback = null;
	}
	
	var payload = {"workitem_info_list":[]};
	var headers = {};
	
	var generalDataJson = window._getGeneralData();
	
	var wiInfo = {}
	payload.workitem_info_list[0] = wiInfo;
		
	wiInfo.pid = generalDataJson.Pid;
	wiInfo.wid = generalDataJson.Wid;
	wiInfo.tid = generalDataJson.Tid;
	wiInfo.activity_id = generalDataJson.ActivityId;
	wiInfo.sub_tid = generalDataJson.SubTaskId;
	
	headers.Authorization = window._getJwtToken();
	
	var url = "/wd-rest/app/unlockworkitems";
	return _makeXHRRequest(url, headers, payload, callback);	
}

window._makeXHRRequest = function (url, headers, payload, callback){
	var xhr = _createXHR();	
	xhr.open('POST', url, true); // Set the third parameter to 'false' for synchronous request
	
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Content-Type", "application/json");
  
	if (headers) {
		for (var header in headers) {
		  if (headers.hasOwnProperty(header)) {
			xhr.setRequestHeader(header, headers[header]);
		  }
		}
	}
	
	xhr.send(JSON.stringify(payload));
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			if(callback != null){
				callback(xhr.responseText);
			}
		}
	}	
}

window._createXHR = function (){
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject !== 'undefined') {
    if (typeof arguments.callee.activeXString !== 'string') {
      var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];
      for (var i = 0, len = versions.length; i < len; i++) {
        try {
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (e) {
          // do nothing
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error('XMLHttpRequest is not supported by this browser.');
  }
}

window._isArray = function(value) {
  if (Array.isArray) {
    // Use the built-in Array.isArray() method if available
    return Array.isArray(value);
  }

  // For older browsers without Array.isArray()
  return Object.prototype.toString.call(value) === '[object Array]';
}


/* Response JSON format of window._getWorkitemData(["data","doc","excp","todo"], true) method
***********************************************************************************************************************************************************
{"data": {"doc": {"data": {"allow_comment": true, "available_doc_types": [{"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": false, "id": "0", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "Conversation"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "2", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D1"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "3", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D2"}], "available_owners": ["admin"], "default_doc_info": {"doc_index": "1006"}, "doc_upload_options": {"camera": true, "google_drive": false, "omnidocs": true, "scan": true, "system": true}, "documents": [{"checkout_by": "", "checkout_status": "N", "comments": "chrome_7JlmLwmXaY", "created_on": "05/Jul/2023 15:18:03", "doc_order_no": "1", "doc_type": {"description": "", "id": "2", "mandatory": false, "name": "D1"}, "enable_annotate": false, "enable_checkin": false, "enable_checkout": true, "enable_delete": true, "enable_download": true, "enable_print": true, "enable_version": true, "extension": "png", "i_s_index": "424#1#", "id": "1006", "is_conversation": false, "last_modified_by": "", "last_modified_on": "05/Jul/2023 15:18:03", "name": "chrome_7JlmLwmXaY.png", "no_of_pages": "1", "org_name": "D1(chrome_7JlmLwmXaY.png)", "owner": "admin", "owner_index": "507", "pinned": false, "pinned_order": "", "resource_type": "N", "show_multi_page": true, "site_id": "1", "size": "190.064 KB", "thumbnail": "", "url_info": {"get_annotation": "/wd-rest/app/viewimageannotation", "get_document": "/wd-rest/app/getdocuments?ImgIndex=424&VolIndex=1&DocExt=png&DocIndex=1006&PageNo=1&docType=N&DocSize=194626&ArchivalMode=N&ArchivalCabinet=&wid=1&pid=NewNPCase-0000000010-process&taskid=&WD_SID=e24d129f-ee5b-4313-b445-1c049c038365&WD_RID=455c4bfb-8388-4ccf-834a-e6eb06e1d9fc&DocumentName=D1.png", "get_stamp": "/wd-rest/app/stampServlet", "get_stamp_annotation": "/wd-rest/app/viewimagestamp", "get_stamp_ini": "/wd-rest/app/getdocstamps", "save_annotation": "/wd-rest/app/imageannotation"}, "version": "1.0", "version_flag": "N"}], "docviewer_info": {"opall_params": {"AllPages": true, "AnnotationColor": "", "AnnotationOption": "0", "colorViewerCanvas": "16777215", "cropImageMinQuality": "0.2", "CroppedImageSize": "32", "CurrentUserName": "admin", "DefaultFontSettings": "", "initialZoomLensPercentage": "100%", "initialZoomLensStatus": false, "IsZoomWindowChangeRequired": true, "MenuBar": true, "pageSetupIE": "{'bheader': false, 'bfooter': false}", "printApproach": "1", "printOption": "2", "PrintParameter": "1", "RequestMethod": "POST", "resizeExMaxPixelLimit": "10000000", "resizeExMaxZoomLimit": "-100", "resizeOption": "0", "ResizePercentage": "1", "RetainAngleSettings": false, "SaveAnnotationDialog": true, "StampWithoutINI": false, "TextWaterMarkPosition": "4", "TransformOption": "0", "ViewWaterMark": false, "Watermark_Properties": "50,90,Courier,0,20,0,0.5", "watermarkPrinting": "4", "ZoomLens": false, "ZoomLensForZoning": "300,200,1,true"}}, "enable_filter": true, "enable_search": true, "enable_sorting": true, "sort_on": 5, "sort_order": "D", "sort_type": 1, "upload_doc_as": {"new": true, "new_version": true, "overwrite": true}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "excp": {"data": {"exceptions": [{"category_id": "0", "category_name": "Ungrouped", "description": "ds", "id": "1", "name": "E1", "raised": [], "type": "VR"}, {"category_id": "0", "category_name": "Ungrouped", "description": "dsa", "id": "2", "name": "E2", "raised": [], "type": "VR"}, {"category_id": "1", "category_name": "G1", "description": "sd", "id": "3", "name": "E3", "raised": [], "type": "VR"}, {"category_id": "2", "category_name": "G2", "description": "sd", "id": "5", "name": "E5", "raised": [], "type": "VR"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "form_data": {"data": {"attributes": [{"array": false, "disabled": false, "field_type": "163", "label": "NP Integer 1", "length": "", "name": "NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "166", "label": "NP Float 1", "length": "15", "name": "NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "168", "label": "NP Date 1(dd/MMM/yyyy)  :", "length": "", "name": "NP Date 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "164", "label": "NP Long 1", "length": "", "name": "NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "1610", "label": "NP Text 1", "length": "255", "name": "NP Text 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "2610", "label": "New Ext NP String 1", "length": "255", "name": "New Ext NP String 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "263", "label": "New Ext NP Integer 1", "length": "", "name": "New Ext NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "264", "label": "New Ext NP Long 1", "length": "", "name": "New Ext NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "266", "label": "New Ext NP Float 1", "length": "15", "name": "New Ext NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "268", "label": "New Ext NP Date Time 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP Date Time 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "2612", "label": "New Ext NP Boolean 1", "length": "", "name": "New Ext NP Boolean 1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "disabled": false, "field_type": "2615", "label": "New Ext NP ShrtDte 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP ShrtDte 1", "type": "15", "value": ""}, {"array": true, "attributes": [[{"array": false, "field_type": "2610", "label": "new_complex_np2_string_1", "length": "255", "name": "Complex NP 2-new_complex_np2_string_1", "type": "10", "value": ""}, {"array": false, "field_type": "263", "label": "new_complex_np2_integer_1", "length": "", "name": "Complex NP 2-new_complex_np2_integer_1", "type": "3", "value": ""}, {"array": false, "field_type": "264", "label": "new_complex_np2_long1", "length": "", "name": "Complex NP 2-new_complex_np2_long1", "type": "4", "value": ""}, {"array": false, "field_type": "266", "label": "new_complex_np2_float_1", "length": "15", "name": "Complex NP 2-new_complex_np2_float_1", "type": "6", "value": ""}, {"array": false, "field_type": "268", "label": "new_complex_np2_dattim1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_dattim1", "type": "8", "value": ""}, {"array": false, "field_type": "2612", "label": "new_complex_np2_boolean1", "length": "", "name": "Complex NP 2-new_complex_np2_boolean1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "field_type": "2615", "label": "new_complex_np2_shrtdat1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_shrtdat1", "type": "15", "value": ""}, {"array": false, "field_type": "2618", "label": "new_complex_np2_ntext1", "length": "", "name": "Complex NP 2-new_complex_np2_ntext1", "type": "18", "value": ""}], []], "disabled": false, "field_type": "2611", "label": "Complex NP 2", "length": "", "name": "Complex NP 2", "type": "11"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "todo": {"data": {"show_todo_desc": false, "todos": [{"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "sda", "mandatory": false, "name": "T1", "picklist": ["Yes", "No", "N/A"], "picklist_count": "4", "read_only": false, "right_flag": "M", "todo_external_object_index": "1", "todo_histories": [], "todo_index": "1", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "M"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "dsa", "mandatory": false, "name": "T2", "picklist": ["V1", "V2", "V3", "V4", "V5"], "picklist_count": "5", "read_only": false, "right_flag": "M", "todo_external_object_index": "2", "todo_histories": [], "todo_index": "2", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "P"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "1", "category_name": "TriggerToDos", "current_value": "", "description": "sad", "mandatory": false, "name": "SetOneTrigger", "picklist": [], "picklist_count": "", "read_only": false, "right_flag": "M", "todo_external_object_index": "3", "todo_histories": [], "todo_index": "3", "todo_variable_id": "42#0", "trigger_list": [{"trigger_index": "1", "trigger_name": "SetOneTrigger", "trigger_type": "S", "var_to_set_list": [{"param": "2023-06-01", "type1": "U", "type2": "C", "variable_id1": "11#0", "variable_id2": "0#0", "variable_name": "NP Date 1"}, {"param": "1.1", "type1": "U", "type2": "C", "variable_id1": "9#0", "variable_id2": "0#0", "variable_name": "NP Float 1"}, {"param": "1", "type1": "U", "type2": "C", "variable_id1": "1#0", "variable_id2": "0#0", "variable_name": "NP Integer 1"}, {"param": "111", "type1": "U", "type2": "C", "variable_id1": "15#0", "variable_id2": "0#0", "variable_name": "NP Long 1"}, {"param": "One", "type1": "U", "type2": "C", "variable_id1": "19#0", "variable_id2": "0#0", "variable_name": "NP Text 1"}, {"param": "true", "type1": "I", "type2": "C", "variable_id1": "63#0", "variable_id2": "0#0", "variable_name": "New Ext NP Boolean 1"}, {"param": "2023-06-01", "type1": "I", "type2": "C", "variable_id1": "62#0", "variable_id2": "0#0", "variable_name": "New Ext NP Date Time 1"}, {"param": "1.1", "type1": "I", "type2": "C", "variable_id1": "61#0", "variable_id2": "0#0", "variable_name": "New Ext NP Float 1"}, {"param": "1", "type1": "I", "type2": "C", "variable_id1": "59#0", "variable_id2": "0#0", "variable_name": "New Ext NP Integer 1"}, {"param": "111", "type1": "I", "type2": "C", "variable_id1": "60#0", "variable_id2": "0#0", "variable_name": "New Ext NP Long 1"}, {"param": "01-06-2023", "type1": "I", "type2": "C", "variable_id1": "64#0", "variable_id2": "0#0", "variable_name": "New Ext NP ShrtDte 1"}, {"param": "One", "type1": "I", "type2": "C", "variable_id1": "58#0", "variable_id2": "0#0", "variable_name": "New Ext NP String 1"}]}], "view_type": "T"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}
***********************************************************************************************************************************************************/