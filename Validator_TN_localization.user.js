// ==UserScript==
// @name                WME Validator Localization for Tennessee
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.23
// @author              xanderb
// @description         This script localizes WME Validator for Tennessee, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  See Settings->About->Available checks for complete list of checks and their params.
  Examples:
  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},
  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "xanderb",
  ".updated": "2015-05-12",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Invalid city name",
    "problemEN": "The city name is not an incorporated municipality in Tennessee",
    "solutionEN": "Check the city and depending on the number of segments remove it or use the city change form",
    "template": "${city}",
    "regexp": "!/.*(^$|Adams|Adamsville|Alamo|Alcoa|Alexandria|Algood|Allardt|Altamont|Ardmore|Arlington|Ashland City|Athens|Atoka|Atwood|Auburntown|Baileyton|Baneberry|Bartlett|Baxter|Bean Station|Beersheba Springs|Bell Buckle|Belle Meade|Bells|Benton|Berry Hill|Bethel Springs|Big Sandy|Blaine|Bluff City|Bolivar|Braden|Bradford|Brentwood|Brighton|Bristol|Brownsville|Bruceton|Bulls Gap|Burlison|Burns|Byrdstown|Calhoun|Camden|Carthage|Caryville|Cedar Hill|Celina|Centertown|Centerville|Chapel Hill|Charleston|Charlotte|Chattanooga|Church Hill|Clarksburg|Clarksville|Cleveland|Clifton|Clinton|Coalmont|Collegedale|Collierville|Collinwood|Columbia|Cookeville|Coopertown|Copperhill|Cornersville|Cottage Grove|Covington|Cowan|Crab Orchard|Cross Plains|Crossville|Crump|Cumberland City|Cumberland Gap|Dandridge|Dayton|Decatur|Decaturville|Decherd|Dickson|Dover|Dowelltown|Doyle|Dresden|Ducktown|Dunlap|Dyer|Dyersburg|Eagleville|East Ridge|Eastview|Elizabethton|Elkton|Englewood|Enville|Erin|Erwin|Estill Springs|Ethridge|Etowah|Fairview|Farragut|Fayetteville|Finger|Forest Hills|Franklin|Friendship|Friendsville|Gadsden|Gainesboro|Gallatin|Gallaway|Garland|Gates|Gatlinburg|Germantown|Gibson|Gilt Edge|Gleason|Goodlettsville|Gordonsville|Grand Junction|Graysville|Greenback|Greenbrier|Greeneville|Greenfield|Gruetli-Laager|Guys|Halls|Harriman|Harrogate|^Hartsville|Henderson|Hendersonville|Henning|Henry|Hickory Valley|Hohenwald|Hollow Rock|Hornbeak|Hornsby|Humboldt|Huntingdon|Huntland|Huntsville|Iron City|Jacksboro|Jackson|Jamestown|Jasper|Jefferson City|Jellico|Johnson City|Jonesborough|Kenton|Kimball|Kingsport|Kingston|Kingston Springs|Knoxville|La Grange|Lafayette|LaFollette|Lakeland|Lakesite|Lakewood|LaVergne|Lawrenceburg|Lebanon|Lenoir City|Lewisburg|Lexington|Liberty|Linden|Livingston|Lobelville|Lookout Mountain|Loretto|Loudon|Louisville|Luttrell|^Lynchburg|Lynnville|Madisonville|Manchester|Martin|Maryville|Mason|Maury City|Maynardville|McEwen|McKenzie|McLemoresville|McMinnville|Medina|Medon|Memphis|Michie|Middleton|Milan|Milledgeville|Millersville|Millington|Minor Hill|Mitchellville|Monteagle|Monterey|Morrison|Morristown|Moscow|Mosheim|Mount Carmel|Mount Pleasant|Mountain City|Mount Juliet|Munford|Murfreesboro|Nashville|New Hope|New Johnsonville|New Market|New Tazewell|Newbern|Newport|Niota|Nolensville|Normandy|Norris|Oak Hill|Oak Ridge|Oakdale|Oakland|Obion|Oliver Springs|Oneida Scott|Orlinda Robertson|Orme Marion|Palmer Grundy|Paris Henry|Parkers Crossroads|Parrottsville|Parsons|Pegram|Petersburg |Philadelphia|Pigeon Forge|Pikeville|Piperton|Pittman Center|Plainview|Pleasant Hill|Pleasant View|Portland|Powells Crossroads|Pulaski|Puryear|Ramer|Red Bank|Red Boiling Springs|Ridgely|Ridgeside|Ridgetop|Ripley|Rives|Rockford|Rockwood|Rocky Top|Rogersville|Rossville|Rutherford|Rutledge|Saltillo|Samburg|Sardis|Saulsbury|Savannah|Scotts Hill|Selmer|Sevierville|Sharon|Shelbyville|Signal Mountain|Silerton|Slayden|Smithville|Smyrna|Sneedville|Soddy\-Daisy|Somerville|South|South|South|Sparta|Spencer|Spring City|Spring Hill|Springfield|Stanton|Stantonville|St. Joseph|Sunbright|Surgoinsville|Sweetwater|Tazewell|Tellico Plains|Tennessee Ridge|Thompson's Station|Three Way|Tiptonville|Toone|Townsend|Tracy City|Trenton|Trezevant|Trimble|Troy|Tullahoma|Tusculum|Unicoi|Union City|Vanleer|Viola|Vonore|Walden|Wartburg|Wartrace|Watauga|Watertown|Waverly|Waynesboro|Westmoreland|White Bluff|White House|White Pine|Whiteville|Whitwell|Williston|Winchester|Winfield|Woodbury|Woodland Mills|Yorkville)/"
  },
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect State Highway",
    "problemEN": "Tennessee uses TN for numbered highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Tennessee:.*(Tn Hwy |State Hwy |Tn-|SR-|SH-|State Rd|TN=|State Rte)/"
  },
  "129.solutionLink": "W:Tennessee#Naming",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 50 meters",
    "solutionEN": "Does it really need to be there? Sometimes they are okay",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-4]?[0-9])$/"
  },
  "130.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Not Tennessee",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in TN and change it or disable script when working in another state",
    "template": "${state}",
    "regexp": "!/Tennessee/"
  },
  "131.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Tennessee:.*(Cs-|CS-|County Rd|Cr-|Co Rd|CH-|Ch-|CR-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after St or Dr at the beginning of the street name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^([SNEW] )+(St |Dr )|^St |^Dr |Jr /"
  },
  "133.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "134.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Wrong road type (major)",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "135.solutionLink": "W:Road_types/USA#Major_Highway",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Minor_Highway",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Wrong road type (primary)",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^1-5]:.*#(State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?@/i"
  },
  "137.solutionLink": "W:Road_types/USA#Primary_Street",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Wrong banner abbreviation",
    "problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
    "solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck)/"
  },
  "138.solutionLink": "W:Road_names/USA#United_States_Numbered_Highways",
  //Default US checks
  "27.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "112.enabled": !1,
  "170.enabled": !0,
  "170.params": {
      regexp: "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": !0,
  "171.solutionLink": "W:Abbreviations_&_Acronyms#Standard_Suffix_Abbreviations"
};
