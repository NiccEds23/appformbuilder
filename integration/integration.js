var CurrentScriptRef = document.currentScript;
var MicroAppsDomainInfo = {"AppProtocol":"", "AppHost":"", "AppPort":"", "AppDomainUrl":"", "Context": ""};
var ContainerDomainInfo = {"AppProtocol":"", "AppHost":"", "AppPort":"", "AppDomainUrl":"", "Context": ""};
var CrossDomain = false;
var Token = "";
var credEnc = "";
var MicroAppsMap = {};

// ReactChunkMap is the list of minimal required files(chunks) to be fetched from React microfrontend (child). This map is required when microFrontend is to be loaded inline i.e. inside Div element of HTML.
 var ReactChunkMap = {
    "main": "main",
    "runtime~main": "runtime~main"
};

initMicroApps();

function initMicroAppsMap(){
	MicroAppsMap =  {
		"BAM": {
			"Context": MicroAppsDomainInfo.Context,
			"LoginEndPoint": MicroAppsDomainInfo.AppDomainUrl + "/bam-ws/app/applogin",
			"MicroFrontends": {
				"ReportViewer": {
					//	LoadUrl: http://192.168.153.130:8080/oapweb/bam/generate/538?EmbeddedView=11111111&Process Name=arjprc 1&ProcessDefId=1028&From Date=2020-02-04&To Date=2021-09-15
					//	EmbeddedView=11111111 => [Title+Back Navigation, Refresh, Pinned Filter, Filters, Download, Print, Toggle Report, Navigation]		
					
					"LoadUrl": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/bam/generate/",
					"Initializer": null,
					"AssetManifest": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/asset-manifest.json"
				}
			}	
		},
		"MDM": {
			"Context": MicroAppsDomainInfo.Context,
			"LoginEndPoint": "/mdm-rest/app/applogin",
			"MicroFrontends": {
				"CreateDataObject": {
					"LoadUrl": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/mdm/CreateDataObject/",
					"Initializer": null,
					"AssetManifest": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/asset-manifest.json"
				}
			}			
		},
		"OAP": {
			"Context": MicroAppsDomainInfo.Context,
			"LoginEndPoint": MicroAppsDomainInfo.AppDomainUrl + "/oap-rest/app/login",
			"MicroFrontends": {},
			"LoginConfEndPoint": MicroAppsDomainInfo.AppDomainUrl + "/oap-rest/app/getloginconf",
			"CryptoJS": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/integration/cjs/cjs.js"
		},
		"FORMBUILDER": {
			"Context": MicroAppsDomainInfo.Context,
			"LoginEndPoint": "",
			"MicroFrontends": {
				"App": {
					"LoadUrl": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context ,
					"Initializer": null,
					"AssetManifest": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/asset-manifest.json"
				},
				"Preview": {
					"LoadUrl": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context ,
					"Initializer": null,
					"AssetManifest": MicroAppsDomainInfo.AppDomainUrl + "/" + MicroAppsDomainInfo.Context + "/asset-manifest.json"
				}
				
			}	
		}
	}
}

// **************************************************  	Generic MicroFrontend Implementation (START)   **************************************************
function initMicroApps(){
	// Handling of received data which is used further for login by extending Container application's session. It then initializes and renders micro frontends components.
	
	// Set domain information from script's src attribute using CurrentScriptRef
	var url = CurrentScriptRef.src;
	
	initMicroAppsDomainInfo(url, MicroAppsDomainInfo);
	initMicroAppsDomainInfo(window.location.href, ContainerDomainInfo);
	
	CrossDomain = (ContainerDomainInfo.AppDomainUrl != MicroAppsDomainInfo.AppDomainUrl);
	
	initMicroAppsMap();
	
	/* MicroApps JSON format:
		
		{		
			// AuthData: It's Product's Reserved property.
			// Authentication data should of Target Server whose MicroFrontend is to be displayed inside Container Application. If MicroFrontend Application //	does not required authentication then it can skip AuthData property altogether.
			
			"AuthData": {	
				// ExtendSession: [Boolean: true, false] - Optional: Pass false when Container Application wants MicroFrontend Application to create //	its own session. Default is true.						
				"ExtendSession": true,
				
				"Locale":"en_US",	// Locale of client
				"UserIndex":"1",	// User index of user
				"UserId":"admin",	// User name of user
				"SessionId":"45834983",	  // User's unique database session id
				"CabinetName":"cab1",	// Cabinet name
				"PersonalName":"",    // PersonalName of user
				"FamilyName":"",    // Family of logged in user
				"ClientGMTOffset":"",   // Client GMT Offset
				"ServerGMTOffset":"",   // Server GMT Offset
				"BatchSize":"10",	// BatchSize				
				"ThemeId":"0",   // ThemeId
				"UDBEncrypt":"N"   // Whether SessionId is encrypted or not
			},
					
			// List of micro application. It's Product's Reserved property.
			"MicroApps": [	
				{
					// Module: [String]: Name of module. It is Product's Reserved property.
					"Module": "BAM",	
					
					// MicroFrontends: List of MicroFrontend. It's Product's Reserved property.
					"MicroFrontends": [	
						{
							// Component: [String]: Name of component. It's Product's Reserved property.
							"Component": "ReportViewer",	
							
							// InFrame: [boolean: true, false]: Specify whether the container is iframe or not. Default is true.
							"InFrame": true,
							
							// Properties of Component. It's Product's Reserved property.
							"Props": [
								{
									// Module specific property/objects(s)
									"ReportId": 530,
									"ReportParams":{
										"EmbeddedView":"00000000",
										"Process Name":"Account",
										"ProcessDefId":"1028"
									},
									
									// ContainerId: [String]: Id of HTML element in which MicroFrontend page/content will be rendered. If container id is not specified then MicroFrontend will be rendered in the same frame (in case of Container type 'InFrame') in which this file (integration.js) is loaded. It's Product's Reserved property.
									"ContainerId": "iframeId",
									
									// Callback function of Container Application, which is called when action is performed on MicroFrontend. In case of InFrame=true, Callback handler is called when MicroFrontend is loaded and when InFrame=false, MicroFrontend can call this handler as and when required basis of contract with Container Application. It's Product's Reserved property.
									"Callback": null
								}
							]							
						}
					]
				}
			]
		}
	*/
	
	doMicroAppsLogin();
}

function doMicroAppsLogin() {	
	if(typeof getMicroApps != "undefined"){
		/* 	Approach1: Call Container application's method to get Login and MicroFrontends data as JSON format.
			This is useful when Container application requires to provide Login and MicroFrontends data dynamically e.g by making xhr call to backend.
		*/
		
		getMicroApps(microAppsLoginHandler);		
	} else {	
		/* 	Approach2: Read script's tag data-data attribute to get Login and MicroFrontends data as JSON format.
			This is useful when Container application already has Login and MicroFrontends data in hand.
		*/
		
		var microAppsObj = null;

		try{
			var dataobj = document.querySelector('#' + CurrentScriptRef.getAttribute("data-data"));
			
			if (dataobj) {
				microAppsObj = JSON.parse(dataobj.textContent);	
			}
		} catch(e){
		}
		
		if(microAppsObj != null){
			microAppsLoginHandler(microAppsObj);
		}
	}
}

function microAppsLoginHandler(microAppsObj){
	// Login by extending Container application's session & initializes microFrontends asynchronously.	
	
	if(microAppsObj) {
		microAppsObj.AuthData = (typeof microAppsObj.AuthData == "undefined" || microAppsObj.AuthData == "")? null: microAppsObj.AuthData;
		
		var microApp = {};
		
		if(microAppsObj.MicroApps) {
			for(var i=0; i <  microAppsObj.MicroApps.length; i++) {
				microApp =  microAppsObj.MicroApps[i];						
				
				microApp.AuthData = microAppsObj.AuthData;
							
				if(microApp.AuthData != null){
					var extendSession = microApp.AuthData.ExtendSession;
					extendSession = (typeof extendSession == "undefined")? true: extendSession;
					
					if(!extendSession){
						/* If extendSession is false then xhr request is sent to create session through Omniapp REST api. On successfull session creation Microfrontend will be loaded.		
						*/
						
						var response = sendAjaxRequest(MicroAppsMap["OAP"].LoginConfEndPoint, "", "POST", "application/json", null, false, CrossDomain);
						
						try {
							var data = JSON.parse(response);
							
							if (data.status.maincode == 0) {			
								Token = data.tk;
								credEnc = data.inis.PWDENCRYPT;
							}
						} catch(e) {
						}
						
						if(credEnc == "Y"){
							// Load crypto.js to encrypt user credentials and then call login api to create session
							
							scriptLoader([{"url": MicroAppsMap["OAP"].CryptoJS}], cjdLoadHandler, microApp);
						} else {
							var oapPayload = {
								"user_name":  microApp.AuthData.UserId,
								"user_cred":  microApp.AuthData.UserCred,
								"cab_name":  microApp.AuthData.CabinetName,			
								"locale":  microApp.AuthData.Locale,
								"captcha_text": "",
								"dom_host": MicroAppsDomainInfo.AppHost,
								"dom_port": MicroAppsDomainInfo.AppPort,
								"dom_protocol": MicroAppsDomainInfo.AppProtocol,
								"forced_login": "Y",
								"forced_disable_captcha": true,
								"remember_me": false			
							};
							
							sendOAPLoginRequest(oapPayload, microApp);
						}
					} else {	
						sendAjaxRequest(MicroAppsMap[microApp.Module].LoginEndPoint, microApp.AuthData, "POST", "application/json", initMicroAppFrontends, true, CrossDomain, microApp);
					}	
				} else {
					initMicroAppFrontends(null, microApp);
				}
			}
		} else {
			// It's sole responsibility of third party to call exposed loadMicroFrontend(props) method to load MicroFrontend. In this case authentication is not done for microFrontend Application.
		}
	}
}

function cjdLoadHandler(microApp){
	var payload =  microApp.AuthData;
	
	var userCred = encryptData(payload.UserCred, Token);
	
	var oapPayload = {
		"user_name": payload.UserId,
		"user_cred": encodeURIComponent(userCred),
		"cab_name": payload.CabinetName,			
		"locale": payload.Locale,
		"captcha_text": "",
		"dom_host": MicroAppsDomainInfo.AppHost,
		"dom_port": MicroAppsDomainInfo.AppPort,
		"dom_protocol": MicroAppsDomainInfo.AppProtocol,
		"forced_login": "Y",
		"forced_disable_captcha": true,	
		"remember_me": false			
	}
	
	sendOAPLoginRequest(oapPayload, microApp);
}

function sendOAPLoginRequest(oapPayload, microApp){
	sendAjaxRequest(MicroAppsMap["OAP"].LoginEndPoint, oapPayload, "POST", "application/json", OAPLoginHandler, true, CrossDomain, microApp);
}

function OAPLoginHandler(responseText, microApp){
	try {
		var data = JSON.parse(responseText);
		
		if (data.status.maincode == 0) {			
			var payload =  microApp.AuthData;
			
			delete payload["UserCred"];
			
			payload.SessionId = data.data.session_id;
			payload.UserIndex = data.data.user_index;
			payload.PersonalName = data.data.personal_name;
			payload.ClientGMTOffset = data.data.client_gmt_offset;
			payload.ServerGMTOffset = data.data.server_gmt_offset;
			payload.BatchSize = data.data.batch_size;
			
			sendAjaxRequest(MicroAppsMap[microApp.Module].LoginEndPoint, payload, "POST", "application/json", initMicroAppFrontends, true, CrossDomain, microApp);
		}
	} catch(e) {
	}
}

function initMicroAppFrontends(responseText, microApp){
	var bLoadMicroAppFrontends = true;
	
	if(microApp.AuthData != null){
		try {
			var data = JSON.parse(responseText);
			
			if (data.MainCode != 0) {
				bLoadMicroAppFrontends = false;
			}
		} catch(e) {
			bLoadMicroAppFrontends = false;
		}
	}
	
	if(bLoadMicroAppFrontends){			
		//	Initializes microFrontends
		
		if(microApp.MicroFrontends && (microApp.MicroFrontends.length > 0)){				
			loadMicroAppFrontends(microApp);
		} else {
			// It's sole responsibility of third party to call exposed loadMicroFrontend(props) method to load MicroFrontend.
		}	
	}
}

function loadMicroAppFrontends(microApp){
	for(var i=0; i < microApp.MicroFrontends.length; i++){							
		var microFrontendComponent = microApp.MicroFrontends[i].Component;
		microApp.MicroFrontends[i].Module = microApp.Module;
		
		var initFuntion = MicroAppsMap[microApp.Module].MicroFrontends[microFrontendComponent].Initializer;
		
		initFuntion = (typeof initFuntion == "undefined" || initFuntion == "" || initFuntion == null)? initializer: initFuntion;
		
		initFuntion(microApp.MicroFrontends[i]);
	}	
}

function loadMicroFrontend(props){
	// This function can also be called externally to load MicroFrontend conditionally.
	
	/* Format of props:
		{
			// Module: [String]: Name of module. It is required property.
			"Module": "BAM",	
			
			// Component: [String]: Name of component. It is required property.
			"Component": "ReportViewer",	
			
			// InFrame: [boolean: true, false]: Specify whether the container is iframe or not. Default is true.
			"InFrame": true,
			
			// ContainerId: [String]: Id of HTML element in which MicroFrontend page/content will be rendered. If container id is not specified then MicroFrontend will be rendered in the same frame (in case of Container type 'InFrame') in which this file (integration.js) is loaded.
			"ContainerId": "iframeId",
			
			... other Component specific props,
			
			// Renderer: [String]: Name of the function which renders MicroFrontend. It's name is form by prefixing 'render' with Component name. In case of 'InFrame' type Container, 'InFrame' is also appended. No need to override the behaviour in case of InFrame=true, as product provides the feature built-in. MicroFrontend with InFrame=false must implement method namely 'render<Component name>' e.g 'renderReportViewer' which is called by MicroFrontend Framework to load the component.
			"Renderer": "renderReportViewerInFrame",	
			
			// Callback function of Container Application, which is called when action is performed on MicroFrontend. In case of InFrame=true, Callback handler is called when MicroFrontend is loaded and when InFrame=false, MicroFrontend can call this handler as and when required basis of contract with Container Application.
			"Callback": null
		}
	*/
	
	if(!props.Module || !props.Component) {
		// Component name is required property
		return;
	}
	
	props.InFrame = (typeof props.InFrame == "undefined" || props.InFrame === "")? true: props.InFrame;
	props.ContainerId = (typeof props.ContainerId == "undefined" || props.ContainerId == null)? "": props.ContainerId;			
	props.Callback = (typeof props.Callback == "undefined" || props.Callback == "")? null: props.Callback;
	props.Renderer = (typeof props.Renderer == "undefined" || props.Renderer == "" || props.Renderer == null)? ("render" + props.Component) + (props.InFrame? "InFrame": ""): props.Renderer;
			
	if(props.InFrame){		
		if(!window[props.Renderer]){
			//	MicroFrontend's render function is not defined
			return;
		}
		
		window[props.Renderer](props.ContainerId, props);
	} else {				
		loadMicroFrontendInline(props);
	}
}

function loadMicroFrontendInline(props){
	// Microfrontend approach which loads content inside div element of HTML
	
	if(props.ContainerId.length > 0){				
		var manifestURL = MicroAppsMap[props.Module].MicroFrontends[props.Component].AssetManifest;		
		initMicroFrontendInline(manifestURL,  props);
	} else {
		// No Inline container present
		window.alert("No Inline container present to render MicroFrontend.");
	}
}

function initMicroFrontendInline(manifestURL, data){		
	sendAjaxRequest(manifestURL, "", "GET", "", manifestLoadHandler, true, CrossDomain, data);
}

function manifestLoadHandler(responseText, data){
	try {
		var manifest = JSON.parse(responseText);		
			
		ReactChunkMap[data.Component] = data.Component;
		
		var scripts = [];	
		Object.keys(manifest['files']).forEach( function(key, index) {
			if(key.endsWith('.js') &&  ReactChunkMap[key.split(".")[0]]){
				var scriptId = "st_" + key;
				var scriptRef = document.getElementById(scriptId);
				
				if(scriptRef == null){
					scripts[scripts.length] = {"url": MicroAppsDomainInfo.AppDomainUrl +  manifest['files'][key], "id": scriptId};
				}
			}
		});
		
		scriptLoader(scripts, renderMicroFrontendInline, data);
	} catch(e){
	}
}

function renderMicroFrontendInline(props){
	/* 
		On loading of React dependency files, Container application calls below method of microFrontend (Child) on window object and 
		microFrontend (Child) must have implement this render function with same name in entry file (src/index.js) 
	*/
	
	if(!window[props.Renderer]){
		//	MicroFrontend's render function is not defined
		return;
	}
	
	window[props.Renderer](props.ContainerId, props);
}
// *************************************************  	 Generic MicroFrontend Implementation (END)  	***************************************************


// ************************************************************ 	Helper Functions	*******************************************************************
function encryptData(userCred, token){
	var encUserCred = userCred;
	
	try{
		var iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
		var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
		var keySize = 4;
		var iterationCount = 1000;
		
		var key = CryptoJS.PBKDF2(token, CryptoJS.enc.Hex.parse(salt), {keySize: keySize, iterations: iterationCount});	
		var ciphertext = CryptoJS.AES.encrypt(userCred, key, { iv: CryptoJS.enc.Hex.parse(iv) });
		
		var encUserCred = (iv + "::" + salt + "::" + ciphertext);
		encUserCred = btoa(encUserCred);
	} catch(e){
	}
	
	return encUserCred;
}

function sendAjaxRequest(url, payload, method, contentType, callback, async, crossDomain, data){
	/*	A generic funtion to make ajax call
	
		url: [String]: base url e.g http://localhost:8080/bam-ws/app/login.js
		method: [String: GET, POST, etc]: http method to be used e.g POST
		payload: [String]: Data to be passed. If GET method then append payload in url along with '?' else send it in body.
		contentType: [String]: Content type of payload e.g. application/json for JSON data
		callback: [Function: Reference]: In case of asynchronous call, callback is invoked.
		async: [Boolean: true, false]: Whether ajax call asynchronous or synchronous
		crossDomain: [Boolean: true, false]: Whether request is cross domain
		data: [Anonymous]: Extra information to be returned in callback
	*/
	
	if(!method){
		method = "GET";
	}
	
	if(typeof async == "undefined"){
		async = true;
	}
	
	if(typeof callback == "undefined" || callback == ""){
		callback = null;
	}
	
	if(typeof crossDomain == "undefined" || crossDomain == null){
		crossDomain = false;
	}
	
	if(typeof data == "undefined"){
		data = "";
	}
	
	if(!contentType && method=="POST"){
		contentType = 'application/x-www-form-urlencoded';
	}
	
	if(typeof payload == "undefined" || payload == null){
		payload = "";
	}
	
	payload = (typeof payload === 'object') ? JSON.stringify(payload) : payload;
	
	var response = '';
	var http = new XMLHttpRequest();
	http.open(method, url, async);

	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', contentType);

	if(crossDomain){
		http.withCredentials = true;
	}
	
	http.onreadystatechange = function() {		
		if(http.readyState == 4 && http.status == 200) {
			response = http.responseText;			
			if(callback != null){
				callback(response, data);
			}		
		}
	}
	
	http.send(payload);
	
	return response;
}

function initMicroAppsDomainInfo(url, domainInfo){
	// url: http://localhost:8080/oapweb/
	
	var index = url.indexOf("://");	
	index = url.indexOf("/", index + 3);
	
	if(index > -1) {
		domainInfo.AppDomainUrl = url.substring(0, index);   // http://localhost:8080
	} else {
		domainInfo.AppDomainUrl = url.substring(0, url.length);   // http://localhost:8080
	}
	
	var indexTemp = index;
	
	if(indexTemp > -1) {
		index = url.indexOf("/", index + 1);		
		domainInfo.Context = url.substring(indexTemp + 1, index);	// oapweb
	}
	
	index = domainInfo.AppDomainUrl.indexOf("://");	
	domainInfo.AppProtocol = domainInfo.AppDomainUrl.substring(0, index);	
	
	domainInfo.AppHost = domainInfo.AppDomainUrl.substring(index + 3);  // localhost
		
	index = domainInfo.AppHost.indexOf(":");	
	if(index > 0){
		domainInfo.AppPort = domainInfo.AppHost.substring(index + 1);	 // 8080  		
		domainInfo.AppHost = domainInfo.AppHost.substring(0, index);   // localhost
	}	
}

function scriptLoader(scripts, callback, data) {
    var count = scripts.length;

    function urlCallback(scriptRef) {
        return function () {
			--count;
            //console.log(scriptRef.url + ' was loaded (' + count + ' more scripts remaining).');
            if (count < 1) {
				if((typeof callback !== 'undefined') && (callback != null)){
					callback(data);
				}
            }
        };
    }

    function loadScript(scriptObj) {
		var scriptRef = document.getElementById(scriptObj.id);
		
		if(scriptRef == null){
			var s = document.createElement('script');
			s.setAttribute('src', scriptObj.url);
			s.setAttribute('id', scriptObj.id);
			s.onload = urlCallback(scriptRef);
			document.body.appendChild(s);
		} else {
			urlCallback(scriptRef);
		}
    }

    if(count>1){
    	for (var script of scripts) {
    	    loadScript(script);
    	}
	} else{
		callback(data);
	}	
};
// ********************************************************** 	Helper Functions (END)	********************************************************************


// ***************************************************** 	MicroFrontend Implementation - BAM  (START)		************************************************
function initializer(microFrontendObj){
	if(microFrontendObj.Props && microFrontendObj.Props.length > 0 ){
		var props = {};
		
		for(var i=0; i < microFrontendObj.Props.length; i++){
			props = microFrontendObj.Props[i];
			
			//props.ReportId, props.ReportParams, props.ContainerId, props.Callback
			
			props.Module = microFrontendObj.Module;
			props.Component = microFrontendObj.Component;
			props.InFrame = (typeof microFrontendObj.InFrame == "undefined" || microFrontendObj.InFrame === "")? true: microFrontendObj.InFrame;
						
			loadMicroFrontend(props);
		}
	}	
}

function renderReportViewerInFrame(containerId, props){
	/*	Implementation of Report Viewer which generates and renders report in Frame i.e iframe element of HTML.
	
		props.ReportId: [Integer]: Report Id
		
		props.ReportParams: [JSON Object: {}] - Optional: ReportParams: [JSON object: {}] - Optional: List of Filters/fileds which are mapped in report. 
					Provide these to generate report skipping filter screen.		
		
		props.ContainerId/containerId: [String] - Optional: Id of HTML element in which report page/content will be loaded. If container id is not specified then report will be loaded in the same frame in which this file (integration.js) is loaded.		
		
		props.Callback: [String] - Optional: Callback Handler of Container Application, which is called once report is loaded.
	*/
	
	var reportViewerURL = getReportViewerURL(props);
	var containerRef = null;
		
	if(containerId.length > 0){
		containerRef = window.document.getElementById(containerId);
		if(containerRef){
			containerRef.src = reportViewerURL;
			
			if((props.Callback != null) && (typeof window[props.Callback] != "undefined")) {
				window[props.Callback](props);
			}
		}
	} else {
		// Load report in same frame
		window.location.href = reportViewerURL;
		
		if((props.Callback != null) && (typeof window[props.Callback] != "undefined")) {
			window[props.Callback](props);
		}
	}
}

function getReportViewerURL(props){
	// Prepares complete url for report generation
	
	var reportId = props.ReportId;
	var reportParams = props.ReportParams;
	
	var reportViewerURL = MicroAppsMap[props.Module].MicroFrontends.ReportViewer.LoadUrl + reportId;	
	var embeddedView = false;
	var reportParamFound = false;
	
	if(reportParams){		
		for(var key in reportParams){
			if (reportParams.hasOwnProperty(key)) {
				if(!reportParamFound){
					reportViewerURL +=  "?";
					reportParamFound = true;
				}

				if(key == "EmbeddedView"){
					embeddedView = true;
				}

				reportViewerURL +=  encodeURIComponent(key)+"="+encodeURIComponent(reportParams[key]) + "&";
			}
		}
	}
	
	if(!embeddedView){
		if(!reportParamFound){
			reportViewerURL +=  "?";
		}
		
		reportViewerURL +=  "EmbeddedView=";
	}
	
	//http://192.168.153.130:8080/oapweb/bam/generate/538?EmbeddedView=11111111&Process Name=prc1&ProcessDefId=1&From Date=2020-02-04&To Date=2021-09-15
	return reportViewerURL;
}
// ***************************************************** 	MicroFrontend Implementation - BAM  (END)	*************************************************