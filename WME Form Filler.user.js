// ==UserScript==
// @name        WME Form Filler
// @description Use info from WME to automatically fill out related forms
// @namespace   https://greasyfork.org/users/6605
// @version     0.3
// @match       https://www.waze.com/*editor/*
// @match       https://beta.waze.com/*editor/*
// @exclude     https://www.waze.com/*user/editor/*
// @author      crazycaveman
// @license
// @run-at      document-end
// @grant       none
// ==/UserScript==

/*****************
To-Do:
        *Add link when segment selected (currently only in console)
        *Allow manual user entries
******************/

var forms = [{
//https://docs.google.com/forms/d/1uXS-Z0-5aJbOrzcZtT8CM-qpUNMonU1iH9NWiPQ5w2o/viewform?entry.728513350=HavanaDay&entry.167700229=REPORTED&entry.1331253387=http://&entry.1363270254=Two-Way&entry.1681433373=Reason+Text&entry.12817715=2016-06-01+12:00&entry.1761873222=CLOSED+STREET+TEXT&entry.798060845=CLOSURE+FROM+TEXT&entry.1536374235=CLOSURE+TO+TEXT&entry.1030293134=NC&entry.1012282273=County+Text&entry.1223225270=Source+Text&entry.150335656=Notes+Text
		'name': 'USA Weather related closures',
		'url': 'https://docs.google.com/forms/d/1uXS-Z0-5aJbOrzcZtT8CM-qpUNMonU1iH9NWiPQ5w2o/viewform',
		'username': '728513350',    //Waze.loginManager.user
		'streetname': '1761873222', //Waze.model.streets.get(primaryStreetID).name
		'permalink': '1331253387',  //Waze.selectionManager.selectedItems[x].model.attributes.id/primaryStreetID
		'state': '1030293134',      //Waze.model.states.objects[x].name
		'county': '1012282273',     //Check if county script installed (or get it like GIS does?)
		'status': '167700229',      //Waze.selectionManager.selectedItems[x].model.hasClosures()
		'direction': '1363270254',  //Loop through closure list, count number
		'reason': '1681433373',     //Waze.model.roadClosures.getByAttributes({segID: segID}).reason
		'endDate': '12817715',      //Waze.model.roadClosures.getByAttributes({segID: segID}).endDate
}];

//Shamelessly copied from https://gist.github.com/CalebGrove/c285a9510948b633aa47
function abbrState(input, to)
{
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }
    }
}

function formfiller_bootstrap()
{
    var bGreasemonkeyServiceDefined = false;
    try
    {
        if ("object" === typeof Components.interfaces.gmIGreasemonkeyService)
        {
            bGreasemonkeyServiceDefined = true;
        }
    }
    catch (err)
    {
        //Ignore
    }
    if ("undefined" === typeof unsafeWindow || ! bGreasemonkeyServiceDefined)
    {
        unsafeWindow = ( function ()
        {
            var dummyElem = document.createElement('p');
            dummyElem.setAttribute('onClick','return window;');
            return dummyElem.onclick ();
        } )();
    }
    formfiller_init();
}

function formfiller_log(message)
{
    if (typeof message === 'string')
        console.log('FormFiller: ' + message);
    else
        console.log('FormFiller: ', message);
}

function ff_getStreetName(sel)
{
    var streetName = "";

    for (i=0; i<sel.length; i++)
    {
        var newStreet = Waze.model.streets.get(sel[i].model.attributes.primaryStreetID).name;
        if (streetName == "")
            streetName = newStreet;
        else if (streetName != newStreet)
            streetName += ", "+newStreet;
    }
    return streetName;
}

function ff_getState(sel)
{
    var stateName = "";

    for (i=0; i<sel.length; i++)
    {
        var cID = Waze.model.streets.get(sel[i].model.attributes.primaryStreetID).cityID;
        var sID = Waze.model.cities.get(cID).stateID;
        var newState = Waze.model.states.get(sID).name;
        if (stateName == "")
            stateName = newState;
        else if (stateName != newState)
        {
            stateName = "";
            break;
        }
    }
    return stateName;
}

function ff_getCounty(sel)
{
    var county = "";
    return county;
}

function ff_closureActive(sel)
{
    for (i=0; i<sel.length; i++)
    {
        if (sel[i].model.hasClosures())
            if (Waze.model.roadClosures.getByAttributes({segID: sel[i].model.attributes.id})[0].active)
                return true;
    }
    return false;
}

function ff_getClosureInfo(seg)
{
	var closureInfo = {
		direction: "",
		endDate: "",
		idFwd: "",
		idRev: "",
		reason: ""
	};
    var segID = seg.model.attributes.id;
	var closureList = Waze.model.roadClosures.getByAttributes({segID: segID});
    /*if (closureList.length > 2)
        return closureList;

	if (closureList.length == 2 && closureList[0].forward != closureList[1].forward)
		closureInfo.direction = "Two-Way";
    else
        closureInfo.direction = "One-Way";*/

	for (i=0; i<closureList.length; i++)
	{
		if (closureList[i].active == true)
		{
            if (closureInfo.endDate == "")
				closureInfo.endDate = closureList[i].endDate;
            else if (closureInfo.endDate > closureList[i].endDate)
                closureInfo.endDate = closureList[i].endDate;
			if (closureList[i].foward == true)
				closureInfo.idFwd = closureList[i].id;
			else
				closureInfo.idRev = closureList[i].id;
			if (closureInfo.reason == "")
				closureInfo.reason = closureList[i].reason;
		}
	}

    if (closureInfo.idFwd != "" && closureInfo.idRev != "")
        closureInfo.direction = "Two-Way";
    else
        closureInfo.direction = "One-Way";

    return closureInfo;
}

function ff_createPermalink(selection)
{
    //https://www.waze.com/editor/?env=usa&lon=-79.79248&lat=32.86150&layers=12709&zoom=5&mode=0&mapProblemFilter=1&mapUpdateRequestFilter=0&venueFilter=0&segments=504534141
    //https://www.waze.com/editor/?env=usa&lon=-79.79248&lat=32.86150&layers=12709&zoom=5&mode=0&mapProblemFilter=1&mapUpdateRequestFilter=0&venueFilter=0&venues=183632201.1836387542.3102948
    var permalink = "https://www.waze.com/editor/?", segIDs = [], zoom;
    var latLon = Waze.map.center.clone().transform(Waze.map.projection.projCode,Waze.map.displayProjection.projCode);
    var env = Waze.location.code;
    var type = "segments";
    var zoom = Waze.map.zoom.toString();

    //To get lat and long centered on segment
    if (selection.length == 1)
    {
        latLon = selection[0].model.getCenter().clone();
        latLon.transform(Waze.map.projection.projCode,Waze.map.displayProjection.projCode);
    }

    for (i=0; i<selection.length; i++)
    {
        var segment = selection[i].model;
        if (segment.type != "segment")
            continue;
        segIDs.push(segment.attributes.id);
    }
    permalink += "env="+env+"&lon="+latLon.x+"&lat="+latLon.y+"&zoom="+zoom+"&"+type+"="+segIDs.join();
    return permalink;
}

function ff_createFormLink()
{
    var formDt = forms[0];
    var selection = Waze.selectionManager.selectedItems;
    var formInfo = {};
    var formLink = formDt.url;
    if (selection.length == 0)
    {
        formfiller_log("No selection.");
        return;
    }

    formInfo.username = encodeURIComponent(Waze.loginManager.user.userName);
    formInfo.streetname = encodeURIComponent(ff_getStreetName(selection));
    formInfo.permalink = encodeURIComponent(ff_createPermalink(selection));
    formInfo.state = abbrState(ff_getState(selection),"abbr"); //Abbreviation
    formInfo.county = encodeURIComponent(ff_getCounty(selection));

    formInfo.status = "REPORTED";
    formInfo.direction = "Two-Way";
    formInfo.reason = "";
    formInfo.endDate = "";
    if (ff_closureActive(selection))
    {
        formInfo.status = "CLOSED";
        var closureInfo = ff_getClosureInfo(selection[0]);
        formInfo.direction = closureInfo.direction;
        formInfo.reason = encodeURIComponent(closureInfo.reason);
        formInfo.endDate = encodeURIComponent(closureInfo.endDate);
    }

    //Need to do this part better, works for now
    formLink += "?entry."+formDt.username+"="+formInfo.username;
    formLink += "&entry."+formDt.streetname+"="+formInfo.streetname;
    formLink += "&entry."+formDt.permalink+"="+formInfo.permalink;
    formLink += "&entry."+formDt.state+"="+formInfo.state;
    formLink += "&entry."+formDt.county+"="+formInfo.county;
    formLink += "&entry."+formDt.status+"="+formInfo.status;
    formLink += "&entry."+formDt.direction+"="+formInfo.direction;
    formLink += "&entry."+formDt.reason+"="+formInfo.reason;
    formLink += "&entry."+formDt.endDate+"="+formInfo.endDate;
    formfiller_log(formLink);
}

function formfiller_init()
{
    formfiller_log('Hello World');
    formfiller_log(55);

	// Add link on segment select
	// Waze.selectionManager.selectedItems.isEmpty()
	formfiller_log('Form names:');
	for (f=0; f<forms.length; f++)
	{
		formfiller_log(forms[f].name);
	}

    Waze.selectionManager.events.register("selectionchanged", null, ff_createFormLink);
    formfiller_log("Init done");
	return;
}

formfiller_bootstrap();

