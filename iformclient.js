function getExternalJSPaths() {
    // path to load multiple files are to given here comma seperated
    const filePaths = [];
    return filePaths;
}

function onRowClick(listviewId, rowIndex) {
    return true
}

function clickLabelLink(labelid) {
    //console.log("labelid",labelid);
}

function onChangeSectionState(frameId, state) {
    //console.log(frameId,state);

}

function postHookPickListOk(columns, controlId) {
    // console.log(columns, controlId);
}

function postHookDBLink() {
    //will call after dblinking
}

function tableOperation(tableId, operationType) {
    if (operationType === "AddRow") {
        return true
    } else if (operationType === "DeleteRow") {
        return true
    } else if (operationType === "CopyRow") {
        return true
    }
}


function subFormLoad(buttonId) {
    //console.log(buttonId);
}

function customValidation(type) {
    if (type === "D") {
        //operation that need to perform on Done button
    } else if (type === "S") {
        //operation that need to perform on Save button
    } else if (type === "I") {
        //operation that need to perform on Introduce button
    }
    return true;
}

function formLoad() {
    var activityName = functions.getWorkItemData("activityname");

    if (activityName === "First Entry" || activityName === "Review and Verification Leads") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        setShowFieldsByCustomerType()
    } else if (activityName === "Data Entry OTS") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        handleFormDataEntry();
    } else if (activityName === "Detail Data Entry") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        handleFormDetailDataEntry();
    } else if (activityName === "Data Verification") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        handleFormDataVerif();
    } else if (activityName === "Approval Head of KCP" || activityName === "Approval PBP" || activityName === "Approval JRM" || activityName === "Approval Branch Manager") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        functions.setStyle("button2", "visible", "false");
        functions.setStyle("frame23", "visible", "true");
        functions.setStyle("approvedLoanAmount", "mandatory", "true");
        TypeCustomer();
    } else if (activityName === "Agreement Verification" || activityName === "Document Printing") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        functions.setStyle("approvedLoanAmount", "mandatory", "false");
        functions.setStyle("frame23", "visible", "false");
        functions.setStyle("button2", "visible", "true");
        TypeCustomer();
    } else if (activityName === "Request Disbursement") {
        functions.setValues({
            "TrxLeadsActionDetail.statusleads": ""
        });
        hideByConsumerType();
    }
}

function handleCustomKeyEvent(ev) {
    //console.log("handleCustomKeyEvent",ev);
}

function subformDoneClick(buttonId) {
    //Custom Code // Doubt
    //console.log(buttonId);
}

function picklistPreHook(controlId) {
    //Custom Code 
    //console.log(controlId);
}

function subFormPreHook(buttonId) {
    //console.log(buttonId);
    return true;
}

function postHookPickListCancel(textid) {
    //CustomCode 
    //    console.log(textid);
}

function clearPicklistPostHook(controlId) {
    //Custom Code 
    //  console.log(controlId);
}

function formChangeHook(ref) {
    //console.log(ref);
}

function addRowPostHook(tableId) {
    //Custom Code 
    //console.log(tableId);
    if (tableId == "TransportReimburse_group") {
        var rowCount = functions.getGridRowCount(tableId);
        var totalAmount = Number(functions.getValue("TotalAmount"));

        for (let i = 0; i < rowCount; i++) {
            var amount = functions.getValueFromTableCell(tableId, i, 3);
            totalAmount += amount;
        }
        functions.setValues({
            "TotalAmount": totalAmount
        });
    }
}

function deleteRowPostHook(tableId, rowIndices) {
    //Custom Code 
    //console.log(tableId, rowIndices);
}

function onTableCellChange(rowIndex, colIndex, ref, controlId) {
    //custom code 
    //console.log(rowIndex,colIndex,ref,controlId);
}

function selectRowHook(tableId, selectedRowsArray, isAllRowsSelected) {
    //custom code 
    //console.log(tableId, selectedRowsArray, isAllRowsSelected);
}

function saveAndNextPreHook(tabId) {
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

function setDefaultPrecisionForControl() {
    return 2
}

function clearEditableComboBoxValueIFNotExists() {
    return true
}

function selectFeatureToBeIncludedInRichText() {
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
function onChangeLoanType() {
    var loanType = functions.getValue("TrxLeadsApplicantNew.loantype");

    functions.setValues({
        "LoanType": loanType
    });
}

function onChangeLoanPurpose() {
    var loanPurpose = functions.getValue("TrxLeadsApplicantNew.loanpurpose");

    functions.setValues({
        "LoanPurpose": loanPurpose
    });
}

function onChangeSourceLeads() {
    var sourceLeads = functions.getValue("TrxLeadsApplicantNew.sourceofleads");

    functions.setValues({
        "SourceLead": sourceLeads
    });
}

function onChangeBranchName() {
    var branchName = functions.getValue("TrxLeadsApplicantNew.branchname");

    if (branchName === "KC Grogol") {
        functions.setValues({
            "branchType": "KCU"
        })
    } else if (branchName === "KCP Grogol") {
        functions.setValues({
            "branchType": "KCP"
        })
    }
}

function setShowFieldsByCustomerType() {
    var customerType = functions.getValue("TrxLeadsApplicantNew.consumertype");

    if (customerType === "Individual") {
        functions.setStyle("TrxLeadsApplicantNew.companytitle", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companytitle", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpname", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.consumername", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.consumername", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.address", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.address", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.rtrw", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.rtrw", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.province", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.province", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.city", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.city", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.district", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.district", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.village", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.village", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.postalcode", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.postalcode", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.religion", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.religion", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.gender", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.gender", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.email", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.email", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyphone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyphone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "mandatory", "false");
    } else if (customerType == "Company") {
        functions.setStyle("TrxLeadsApplicantNew.companytitle", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.companytitle", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpno", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpno", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpname", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpname", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.consumername", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.consumername", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.address", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.address", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.rtrw", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.rtrw", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.province", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.province", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.city", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.city", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.district", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.district", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.village", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.village", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.postalcode", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.postalcode", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.religion", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.religion", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.gender", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.gender", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyphone", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyphone", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "mandatory", "true");
    }
}


function setAgeValue() {
    var birthdate = new Date(functions.getValue("TrxLeadsApplicantNew.dateofbirth"));

    var result = GetAge(birthdate);

    functions.setValues({
        "ageOfCustomer": result.toString()
    });

    functions.updateJSON()
}

function setTimeInBusiness() {
    var businessEst = new Date(functions.getValue("TrxLeadsBusiness.sincewhen")).getTime();

    var diff = new Date(Date.now() - businessEst);

    var month = diff.getUTCMonth();
    var year = diff.getUTCFullYear();

    var result = (Math.abs(year - 1970) * 12) + month;

    functions.setValues({
        "businessOperation": result.toString()
    })
}

function getSetNationality() {
    var nationality = functions.getValue("TrxLeadsApplicantNew.nationality")

    functions.setValues({
        "nationality": nationality
    })

    functions.updateJSON();
}

function getSetAverageMonthlySale() {
    var avgMonthlySale = functions.getValue("TrxLeadsApplicantNew.averagemonthlysales")

    functions.setValues({
        "avgMonthlySales": avgMonthlySale
    })

    functions.updateJSON();
}

function onChangeActionDetail() {
    var action = functions.getValue("TrxLeadsActionDetail.statusleads");

    if (action === "REJECT" || action === "CANCEL" || action === "REVISE") {
        functions.setStyle("TrxLeadsActionDetail.rejectreason", "disable", "false");
        functions.setStyle("TrxLeadsActionDetail.rejectreason", "mandatory", "true");
        functions.setValues({
            "approvalDecision": action
        });
    } else {
        functions.setStyle("TrxLeadsActionDetail.rejectreason", "disable", "true");
        functions.setStyle("TrxLeadsActionDetail.rejectreason", "mandatory", "false");
        functions.setValues({
            "approvalDecision": action
        });
    }

    functions.updateJSON();
}

function setViewByDigitalSignature() {
    var digitalSignature = functions.getValue("TrxLeadsApplicant.isdigitalsignature");

    if (digitalSignature === true || digitalSignature === "true") {
        functions.setStyle("frame9", "visible", "false");
    } else {
        functions.setStyle("frame9", "visible", "true");
    }

    functions.updateJSON();
}

//data entry
function handleFormDataEntry() {
    var type = functions.getValue("TrxLeadsApplicantNew.consumertype");
    functions.setStyle("TrxLeadsApplicantNew.jrmuser", "visible", "false");
    functions.setStyle("labeloverride", "visible", "false");
    functions.setStyle("override", "visible", "false");

    // Hide Detail
    functions.setStyle("alamatdetail", "visible", "false");
    functions.setStyle("provincedetail", "visible", "false");
    functions.setStyle("rtrwdetail", "visible", "false");
    functions.setStyle("codedetail", "visible", "false");
    functions.setStyle("districtdetail", "visible", "false");
    functions.setStyle("citydetail", "visible", "false");
    functions.setStyle("villagedetail", "visible", "false");
    functions.setStyle("citydetail", "visible", "false");
    functions.setStyle("kkdetail", "visible", "false");
    functions.setStyle("motherdetail", "visible", "false");
    functions.setStyle("passportdetail", "visible", "false");
    functions.setStyle("totaldetail", "visible", "false");
    functions.setStyle("enddatedetail", "visible", "false");
    functions.setStyle("economicdetail", "visible", "false");
    functions.setStyle("enddatedetail", "visible", "false");
    functions.setStyle("subeconomicdetail", "visible", "false");

    //Same field
    functions.setStyle("TrxLeadsGuarantor.npwpno", "visible", "false");
    functions.setStyle("TrxLeadsGuarantor.npwpname", "visible", "false");
    functions.setStyle("TrxLeadsGuarantor.npwpregistereddate", "visible", "false");
    functions.setStyle("TrxLeadsGuarantor.passportno", "visible", "false");
    functions.setStyle("TrxLeadsGuarantor.passportenddate", "visible", "false");

    //Tab Data Keungan
    functions.setStyle("TrxLeadsFinancial.rawmaterialpurchase", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.monthlygrossprofit", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.monthlynetprofit", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.supplyrawmaterial", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.moveableprop", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.remainingloanbalance", "visible", "false");
    functions.setStyle("monthlydetail", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.initcaptbusiness", "visible", "false");
    functions.setStyle("frame31", "visible", "false");
    functions.setStyle("frame34", "visible", "false");

    if (type === "Individual") {
        functions.setStyle("TrxLeadsApplicantNew.companytitle", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyphone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyownershipstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.noofestablishmentdeed", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofestablishmentdeed", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spouseaddress", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spouseprovince", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousecity", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousedistrict", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousevillage", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousertrw", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousepostalcode", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousemaritalstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spouseoccupation", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousenationality", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousenpwpno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousenpwpname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousenpwpregistereddate", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousenopassport", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousepassportenddate", "visible", "false");

        functions.setStyle("frame13", "visible", "false");
    } else {
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.gender", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.gender", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.religion", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.religion", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.education", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.education", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "visible", "false");

        functions.setStyle("TrxLeadsApplicantNew.isdomicilesame", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.addressdomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.rtrwdomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.provincedomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.citydomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.districtdomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.villagedomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.postalcodedomicile", "visible", "false");

        functions.setStyle("TrxLeadsApplicantNew.spousename", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spouseidentityno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousepob", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousedob", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousegender", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousereligion", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousemobilephone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.emergencycontactname", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.emergencycontactphone", "mandatory", "false");

        functions.setStyle("frame6", "visible", "false");
        functions.setStyle("frame7", "visible", "false");
    }

    onChangeGuerantorChecklist();
    onChangeCollateral()

    functions.updateJSON();
}

function onChangeDomicileChecklist() {
    var domicile = functions.getValue("TrxLeadsApplicantNew.isdomicilesame");

    if (domicile === true) {
        functions.setValues({
            "TrxLeadsApplicantNew.addressdomicile": functions.getValue("TrxLeadsApplicantNew.address")
        });
        functions.setValues({
            "TrxLeadsApplicantNew.rtrwdomicile": functions.getValue("TrxLeadsApplicantNew.rtrw")
        });
        functions.setValues({
            "TrxLeadsApplicantNew.provincedomicile": functions.getValue("TrxLeadsApplicantNew.province")
        });
        functions.setValues({
            "TrxLeadsApplicantNew.citydomicile": functions.getValue("TrxLeadsApplicantNew.city")
        });
        functions.setValues({
            "TrxLeadsApplicantNew.districtdomicile": functions.getValue("TrxLeadsApplicantNew.district")
        });
        functions.setValues({
            "TrxLeadsApplicantNew.villagedomicile": functions.getValue("TrxLeadsApplicantNew.village")
        });
        functions.setValues({
            "TrxLeadsApplicantNew.postalcodedomicile": functions.getValue("TrxLeadsApplicantNew.postalcode")
        });
    } else {
        functions.clearValue("TrxLeadsApplicantNew.addressdomicile", true);
        functions.clearValue("TrxLeadsApplicantNew.rtrwdomicile", true);
        functions.clearValue("TrxLeadsApplicantNew.provincedomicile", true);
        functions.clearValue("TrxLeadsApplicantNew.citydomicile", true);
        functions.clearValue("TrxLeadsApplicantNew.districtdomicile", true);
        functions.clearValue("TrxLeadsApplicantNew.villagedomicile", true);
        functions.clearValue("TrxLeadsApplicantNew.postalcodedomicile", true);
    }

    functions.updateJSON();

}

function onChangeGuerantorChecklist() {
    var guarantor = functions.getValue("TrxLeadsGuarantor.isguarantorneed");

    if (guarantor === "true" || guarantor === true) {
        functions.setStyle("frame8", "visible", "true");
    } else {
        functions.clearValue("TrxLeadsGuarantor.name", true);
        functions.clearValue("TrxLeadsGuarantor.identityno", true);
        functions.clearValue("TrxLeadsGuarantor.placeofbirth", true);
        functions.clearValue("TrxLeadsGuarantor.dateofbirth", true);
        functions.clearValue("TrxLeadsApplicantNew.addressdomicile", true);
        functions.clearValue("TrxLeadsGuarantor.address", true);
        functions.clearValue("TrxLeadsGuarantor.rtrw", true);
        functions.clearValue("TrxLeadsGuarantor.province", true);
        functions.clearValue("TrxLeadsGuarantor.city", true);
        functions.clearValue("TrxLeadsGuarantor.district", true);
        functions.clearValue("TrxLeadsGuarantor.village", true);
        functions.clearValue("TrxLeadsGuarantor.postalcode", true);
        functions.clearValue("TrxLeadsGuarantor.religion", true);
        functions.clearValue("TrxLeadsGuarantor.gender", true);
        functions.clearValue("TrxLeadsGuarantor.maritalstatus", true);
        functions.clearValue("TrxLeadsGuarantor.occupation", true);
        functions.clearValue("TrxLeadsGuarantor.kewarganegaraan", true);
        functions.clearValue("TrxLeadsGuarantor.mobilephone", true);
        functions.clearValue("TrxLeadsGuarantor.email", true);
        functions.setStyle("frame8", "visible", "false");
    }

    functions.updateJSON();
}

function onChangeCollateral() {
    var collateral = functions.getValue("isCollateral");

    if (collateral === "true" || collateral === true) {
        functions.setStyle("TrxLeadsCollateral", "visible", "true");
    } else {
        functions.clearTable("TrxLeadsCollateral");
        functions.setStyle("TrxLeadsCollateral", "visible", "false");
    }

    functions.updateJSON();
}

function onChangeSpouse() {
    var spouse = functions.getValue("TrxLeadsApplicantNew.maritalstatus");

    if (spouse != "Menikah") {
        functions.setStyle("TrxLeadsApplicantNew.spousename", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spouseidentityno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousepob", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousedob", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousegender", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousereligion", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousemobilephone", "mandatory", "false");

        functions.setStyle("frame6", "visible", "false");
    } else {
        functions.setStyle("TrxLeadsApplicantNew.spousename", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.spouseidentityno", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.spousepob", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.spousedob", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.spousegender", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.spousereligion", "mandatory", "true");
        functions.setStyle("TrxLeadsApplicantNew.spousemobilephone", "mandatory", "true");

        functions.setStyle("frame6", "visible", "true");
    }

    functions.updateJSON();
}

function onChangeInsuranceDetail() {
    var premi = 0;
    var depresi = 100 - (parseInt((functions.getValue("TrxLeadsLoanInsurance.insuranceyear")) - 1) * 10);
    functions.setValues({
        "TrxLeadsLoanInsurance.coveramount": functions.getValue("TrxLeadsLoan.loanamount")
    });

    premi = (parseInt(functions.getValue("TrxLeadsLoan.loanamount")) * depresi) * parseInt(functions.getValue("TrxLeadsLoanInsurance.sellrate")) / 100;

    functions.setValues({
        "TrxLeadsLoanInsurance.premitotal": parseInt(Math.floor(premi)).toString()
    })
    functions.setValues({
        "TrxLeadsLoanInsurance.stdrate": "5"
    })

    functions.updateJSON();
}

function handleFormDetailDataEntry() {
    var type = functions.getValue("TrxLeadsApplicantNew.consumertype");
    functions.setStyle("labeloverride", "visible", "false");
    functions.setStyle("override", "visible", "false");

    // Same Field
    functions.setStyle("TrxLeadsFinancial.rentbusinessplace", "mandatory", "false");
    functions.setStyle("TrxLeadsFinancial.rentbusinessplace", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.isotherincome", "mandatory", "false");
    functions.setStyle("TrxLeadsFinancial.isotherincome", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.monthlyrentfee", "mandatory", "false");
    functions.setStyle("TrxLeadsFinancial.monthlyrentfee", "visible", "false");
    functions.setStyle("TrxLeadsFinancial.financialtotalotherbankloans", "visible", "false");
    functions.setStyle("frame18", "visible", "false");


    if (type === "Individual") {
        functions.setStyle("TrxLeadsApplicantNew.companytitle", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyphone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyownershipstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.noofestablishmentdeed", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofestablishmentdeed", "visible", "false");
        functions.setStyle("economicdetail", "visible", "false");
        functions.setStyle("subeconomicdetail", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.education", "visible", "false");


        functions.setStyle("frame5", "visible", "false");
        functions.setStyle("frame7", "visible", "false");
    } else {
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.placeofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.gender", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.gender", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.religion", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.religion", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.education", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.education", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyemail", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.mothermaidenname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.familyno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.passportenddate", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.noofdependant", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.passportenddate", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.passportno", "visible", "false");


        functions.setStyle("TrxLeadsApplicantNew.isdomicilesame", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.addressdomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.rtrwdomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.provincedomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.citydomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.districtdomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.villagedomicile", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.postalcodedomicile", "visible", "false");

        functions.setStyle("TrxLeadsApplicantNew.spousename", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spouseidentityno", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousepob", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousedob", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousegender", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousereligion", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.spousemobilephone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.emergencycontactname", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.emergencycontactphone", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.address", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.rtrw", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.province", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.city", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.district", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.village", "mandatory", "false");
        functions.setStyle("TrxLeadsApplicantNew.postalcode", "mandatory", "false");

        functions.setStyle("frame5", "visible", "false");
        functions.setStyle("frame6", "visible", "false");
        functions.setStyle("frame7", "visible", "false");
    }

    functions.updateJSON();
}

function handleFormDataVerif() {
    handleFormDetailDataEntry();
    functions.setStyle("labeloverride", "visible", "true");
    functions.setStyle("override", "visible", "true");
    functions.setStyle("TrxLeadsFinancial.rentbusinessplace", "visible", "true");
    functions.setStyle("TrxLeadsFinancial.monthlyrentfee", "visible", "true");
    functions.setStyle("TrxLeadsFinancial.rentbusinessplace", "mandatory", "true");

    onChangeOverride();
}

function onChangeOverride() {

    var override = functions.getValue("override");

    if (override === "Yes") {
        functions.setStyle("frame2", "disable", "false");
        functions.setStyle("frame5", "disable", "false");
        functions.setStyle("frame6", "disable", "false");
        functions.setStyle("frame7", "disable", "false");
        functions.setStyle("frame8", "disable", "false");
        functions.setStyle("frame11", "disable", "false");
        functions.setStyle("frame12", "disable", "false");
        functions.setStyle("frame13", "disable", "false");
        functions.setStyle("frame34", "disable", "false");
        functions.setStyle("frame16", "disable", "false");
        functions.setStyle("frame17", "disable", "false");
        functions.setStyle("frame18", "disable", "false");
        functions.setStyle("frame31", "disable", "false");
        functions.setStyle("frame19", "disable", "false");
        functions.setStyle("frame21", "disable", "false");
        functions.setStyle("frame22", "disable", "false");
        functions.setStyle("frame23", "disable", "false");
        functions.setStyle("frame27", "disable", "false");

    } else {
        functions.setStyle("frame2", "disable", "true");
        functions.setStyle("frame5", "disable", "true");
        functions.setStyle("frame6", "disable", "true");
        functions.setStyle("frame7", "disable", "true");
        functions.setStyle("frame8", "disable", "true");
        functions.setStyle("frame11", "disable", "true");
        functions.setStyle("frame12", "disable", "true");
        functions.setStyle("frame13", "disable", "true");
        functions.setStyle("frame34", "disable", "true");
        functions.setStyle("frame16", "disable", "true");
        functions.setStyle("frame17", "disable", "true");
        functions.setStyle("frame18", "disable", "true");
        functions.setStyle("frame31", "disable", "true");
        functions.setStyle("frame19", "disable", "true");
        functions.setStyle("frame21", "disable", "true");
        functions.setStyle("frame22", "disable", "true");
        functions.setStyle("frame23", "disable", "true");
        functions.setStyle("frame27", "disable", "true");
    }

    functions.updateJSON();
}

//approval
function TypeCustomer() {

    var tipeCustomer = functions.getValue("TrxLeadsApplicantNew.consumertype")

    if (tipeCustomer.toLowerCase() == "individual") {
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.address", "visible", "true");
        functions.setStyle("textbox10", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.familyno", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.email", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.noofdependant", "visible", "true");
        MaritalStatusCustomer();
        //  GetAgeCustomer();

        functions.setStyle("TrxLeadsApplicantNew.companytitle", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpname", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.dateofestablishmentdeed", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.companyownershipstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.noofestablishmentdeed", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.economysector", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.economysubsector", "visible", "false");
        IsGuarantor();

        functions.setStyle("frame8", "visible", "false");
    } else if (tipeCustomer.toLowerCase() == "company") {
        functions.setStyle("TrxLeadsApplicantNew.dateofbirth", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.identityno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.address", "visible", "false");
        functions.setStyle("textbox10", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.occupation", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.maritalstatus", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.mobilephone", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.nationality", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.familyno", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.email", "visible", "false");
        functions.setStyle("TrxLeadsApplicantNew.noofdependant", "visible", "false");
        functions.setStyle("frame3", "visible", "false");


        functions.setStyle("TrxLeadsApplicantNew.companytitle", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyname", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpno", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpname", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.npwpregistereddate", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.dateofestablishmentdeed", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.companyownershipstatus", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.noofestablishmentdeed", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.economysector", "visible", "true");
        functions.setStyle("TrxLeadsApplicantNew.economysubsector", "visible", "true");
        functions.setStyle("TrxLeadsGuarantor.placeofbirth", "visible", "true");
        functions.setStyle("frame8", "visible", "true");
        // GetAgeGuarantor();
    }

    functions.updateJSON();
}

function MaritalStatusCustomer() {
    var status = functions.getValue("TrxLeadsApplicantNew.maritalstatus");

    if (status.toLowerCase() == "belum menikah" || status.toLowerCase() == "Janda") {
        functions.setStyle("frame3", "visible", "false");
    } else {
        functions.setStyle("frame3", "visible", "true");
        // GetAgeSpouse();
    }

    functions.updateJSON();
}

//  function GetAgeCustomer(){
//      var birth = functions.getValue("TrxLeadsApplicantNew.dateofbirth");

//      var usia = GetAge(birth);

//      functions.setValue("textbox10",usia.toString());

//      functions.updateJSON();
//  }


function GetAgeSpouse() {
    var birthSpouse = new Date(functions.getValue("TrxLeadsApplicantNew.spousedob"));

    var usiaSpouse = GetAge(birthSpouse);

    functions.setValues({
        "spouseAge": usiaSpouse.toString()
    });

    functions.updateJSON();
}

function GetAgeGuarantor() {
    var birthGuarantor = new Date(functions.getValue("TrxLeadsGuarantor.dateofbirth"));

    var usiaGuarantor = GetAge(birthGuarantor);

    functions.setValues({
        "guarantorAge": usiaGuarantor.toString()
    });

    functions.updateJSON();
}

function IsGuarantor() {
    var guarantor = functions.getValue("TrxLeadsGuarantor.isguarantorneed");

    if (guarantor === true || guarantor === 'true') {
        functions.setStyle("frame4", "visible", "true");
        functions.setStyle("TrxLeadsGuarantor.placeofbirth", "visible", "false");
        // GetAgeGuarantor();
    } else {
        functions.setStyle("frame4", "visible", "false");
    }

    functions.updateJSON();
}


function GetAge(birthDate) {
    return Math.abs(new Date(Date.now() - birthDate).getUTCFullYear() - 1970)
}


//  function ActionActivityName(){
//      var activity = functions.getWorkItemData("ActivityName");

//      if(activity.toLowerCase() == "approval head of kcp"){
//          functions.setStyle("button2","visible","false");
//          functions.setStyle("frame23","visible","true");
//      } else {
//          functions.setStyle("button2","visible","true");
//          functions.setStyle("frame23","visible","false");
//      }

//      functions.updateJSON();

//  }

//disbursement

function hideByConsumerType() {
    let consumerType = functions.getValue("TrxLeadsApplicantNew.consumertype");
    if (consumerType.toLowerCase() == "individual") {
        functions.setStyle("frame2", "visible", "true");
        // GetAgeApplicant()
        functions.setStyle("frame3", "visible", "false");
        hideByMaritalStatus();

    } else if (consumerType.toLowerCase() == "company") {
        functions.setStyle("frame2", "visible", "false"); //individu
        functions.setStyle("frame3", "visible", "true"); //company
        functions.setStyle("frame6", "visible", "false"); //spouse
        functions.setStyle("frame4", "visible", "true"); //guarantor
    } else {
        functions.setStyle("frame2", "visible", "false");
        functions.setStyle("frame3", "visible", "false");
        functions.setStyle("frame6", "visible", "false");
        functions.setStyle("frame4", "visible", "false");
    }
    functions.updateJSON();
}

function hideByMaritalStatus() {
    let consumerType = functions.getValue("TrxLeadsApplicantNew.consumertype");
    let maritalStatus = functions.getValue("TrxLeadsApplicantNew.maritalstatus");
    if (maritalStatus.toLowerCase() == "menikah" && consumerType.toLowerCase() == "individual") {
        functions.setStyle("frame6", "visible", "true");
    } else {
        functions.setStyle("frame6", "visible", "false");
    }
    functions.updateJSON();
}

//  function getAge(dateString) {

//     const birthDate = new Date(dateString);


//     const currentDate = new Date();

//     let age = currentDate.getFullYear() - birthDate.getFullYear();
//     const monthDifference = currentDate.getMonth() - birthDate.getMonth();


//     if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

//  function GetAgeApplicant(){
//      let birth = functions.getValue("TrxLeadsApplicantNew.dateofbirth");

//      let usia = getAge(birth);

//      functions.setValue("textbox12",usia.toString());

//      functions.updateJSON();
//  }





























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

window.getWorkitemDataHandler = function () {
    window._getWorkitemData(["form_data", "doc", "excp", "todo"], window.workitemDataProcessor, true);
}

window.workitemDataProcessor = function (workitemData) {
    // ==============================================	Custom Implementation Start here	==========================================================    
    var workitemDataJson = JSON.parse(workitemData);

    if (workitemDataJson.data.doc) {
        var docStatus = workitemDataJson.data.doc.status;
        if (docStatus.maincode == "0") {
            var docData = workitemDataJson.data.doc.data;
            //alert("##docData="+docData);
        }
    }

    if (workitemDataJson.data.excp) {
        var excpStatus = workitemDataJson.data.excp.status;
        if (excpStatus.maincode == "0") {
            var excpData = workitemDataJson.data.excp.data;
            //alert("##excpData="+excpData);
        }
    }

    if (workitemDataJson.data.form_data) {
        var formDataStatus = workitemDataJson.data.form_data.status;
        if (formDataStatus.maincode == "0") {
            var formData = workitemDataJson.data.form_data.data;
            //alert("##formData="+formData);
        }
    }

    if (workitemDataJson.data.todo) {
        var todoStatus = workitemDataJson.data.todo.status;
        if (todoStatus.maincode == "0") {
            var todoData = workitemDataJson.data.todo.data;
            //alert("##todoData="+todoData);
        }
    }


    /* 	Uncomment below code to unlock the workitem. 
    	This is required if Application load data from DB and does not store it in Web Session e.g Mobile App. Desktop Application version unlocks workiem on browser window close automatically so explicit call is not required.
    */
    //window._unlockWorkitem(workitemUnlockProcessor);
}

window.workitemUnlockProcessor = function (workitemUnlockData) {
    workitemUnlockDataJson = JSON.parse(workitemUnlockData);

    var workitemUnlockStatus = workitemUnlockDataJson.status;
    if (workitemUnlockStatus.maincode == "0") {
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