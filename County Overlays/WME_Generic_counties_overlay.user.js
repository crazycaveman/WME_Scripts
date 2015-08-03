// ==UserScript==
// @name WME Generic Counties Overlay
// @namespace https://greasyfork.org/users/5252
// @description Creates polygons of Generic county borders
// @include https://www.waze.com/editor/*
// @include https://www.waze.com/*/editor/*
// @include https://editor-beta.waze.com/*
// @version 1.0
// @grant none
// @license http://creativecommons.org/licenses/by-nc-sa/3.0/
// @copyright 2014 davielde
// ==/UserScript==

/* Modified by crazycaveman from davielde's WME MapRaid Overlay script */

/*===About this script===
This will add a "Generic Counties" layer to the layers menu which, when enabled, will overlay county borders on the map.


While the Waze map doesn't use county data, this information can be handy for reference and orientation while working in WME.
Style and opacity can be adjusted on lines 55-61. All counties are initially the same color, but colors can be adjusted individually by editing the second line of each entry. #D698AD is a light pink color.
*/

function bootstrap_countyborderOverlay()
{
 var bGreasemonkeyServiceDefined = false;

 try {
 bGreasemonkeyServiceDefined = (typeof Components.interfaces.gmIGreasemonkeyService === "object");
 }
 catch (err) { /* Ignore */ }

 if (typeof unsafeWindow === "undefined" || ! bGreasemonkeyServiceDefined) {
 unsafeWindow = ( function () {
 var dummyElem = document.createElement('p');
 dummyElem.setAttribute('onclick', 'return window;');
 return dummyElem.onclick();
 }) ();
 }

 /* begin running the code! */
 setTimeout(InitcountyborderOverlay, 1000);
}

function AddcountyPolygon(countyLayer,groupPoints,groupColor,groupNumber){
 
 var mro_Map = unsafeWindow.Waze.map;
 var mro_OL = unsafeWindow.OpenLayers;
 var countyGroupLabel = groupNumber;
 var groupName = groupNumber;
 
 var style = {
 strokeColor: groupColor,
 strokeOpacity: 0.25,
 strokeWidth: 6,
 fillColor: groupColor,
 fillOpacity: 0.01,
 label: countyGroupLabel,
 labelOutlineColor: "black",
 labelOutlineWidth: 3,
 fontSize: 16,
 fontColor: groupColor,
 fontOpacity: 0.85,
 fontWeight: "bold" 
 };
 
 var attributes = {
 name: groupName,
 number: groupNumber
 };
 
 var pnt= [];
 for(i=0;i<groupPoints.length;i++){
 convPoint = new OpenLayers.Geometry.Point(groupPoints[i].lon,groupPoints[i].lat).transform(new OpenLayers.Projection("EPSG:4326"), mro_Map.getProjectionObject());
 //console.log('countyborder: ' + JSON.stringify(groupPoints[i]) + ', ' + groupPoints[i].lon + ', ' + groupPoints[i].lat);
 pnt.push(convPoint);
 }
		 
 var ring = new mro_OL.Geometry.LinearRing(pnt);
 var polygon = new mro_OL.Geometry.Polygon([ring]);
 
 var feature = new mro_OL.Feature.Vector(polygon,attributes,style);
 countyLayer.addFeatures([feature]);

}

function CurrentcountyLocation(county_mapLayer){
 var mro_Map = unsafeWindow.Waze.map;

 for(i=0;i<county_mapLayer.features.length;i++){
 var countyMapCenter = mro_Map.getCenter();
 var countyCenterPoint = new OpenLayers.Geometry.Point(countyMapCenter.lon,countyMapCenter.lat);
 var countyCenterCheck = county_mapLayer.features[i].geometry.components[0].containsPoint(countyCenterPoint);
 //console.log('countyborder: ' + county_mapLayer.features[i].attributes.number + ': ' + countyCenterCheck);
 if(countyCenterCheck === true){
 var countyLocationLabel =$('.WazeControlLocationInfo').text() + ' [' + county_mapLayer.features[i].attributes.number + ']';
 		setTimeout(function(){$('.WazeControlLocationInfo').text(countyLocationLabel);},200);
 }
 }
}

function InitcountyborderOverlay(){

 var mro_Map = unsafeWindow.Waze.map;
 var mro_OL = unsafeWindow.OpenLayers;

 //if (!mro_Map) return;
	
 //if (!mro_OL) return;

 var mro_mapLayers = mro_Map.getLayersBy("uniqueName","__Megacountyborder");
 
 var county_mapLayer = new mro_OL.Layer.Vector("Generic Counties", {
 displayInLayerSwitcher: true,
 uniqueName: "__Megacountyborder"
 });
 
 I18n.translations.en.layers.name["__Megacountyborder"] = "Generic Counties";
 mro_Map.addLayer(county_mapLayer);
 county_mapLayer.setVisibility(true);


// var county_name = [{lon:'-83.6556',lat:'34.3997'},{lon:'-83.6153',lat:'34.4317'},{lon:'-83.5374',lat:'34.4917'},{lon:'-83.4598',lat:'34.4811'},{lon:'-83.4138',lat:'34.4681'},{lon:'-83.3984',lat:'34.4609'},{lon:'-83.3826',lat:'34.4289'},{lon:'-83.3828',lat:'34.3927'},{lon:'-83.3939',lat:'34.3248'},{lon:'-83.3378',lat:'34.261'},{lon:'-83.3553',lat:'34.2237'},{lon:'-83.3724',lat:'34.2059'},{lon:'-83.4024',lat:'34.1975'},{lon:'-83.4804',lat:'34.262'},{lon:'-83.4897',lat:'34.257'},{lon:'-83.5615',lat:'34.2527'},{lon:'-83.6201',lat:'34.2953'},{lon:'-83.6697',lat:'34.3661'},{lon:'-83.6556',lat:'34.3997'}];
// AddcountyPolygon(county_mapLayer, county_name,"#D698AD","Name County");


 
 setTimeout(function(){CurrentcountyLocation(county_mapLayer);},3000);
 mro_Map.events.register("moveend", Waze.map, function(){CurrentcountyLocation(county_mapLayer);});
 mro_Map.events.register("zoomend", Waze.map, function(){CurrentcountyLocation(county_mapLayer);}); 
}
bootstrap_countyborderOverlay();
