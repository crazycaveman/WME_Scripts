// ==UserScript==
// @name                WME Validator Localization for South Atlantic Region
// @namespace           https://greasyfork.org/users/6605
// @version             1.1.7
// @author              crazycaveman and xanderb
// @description         This script localizes WME Validator for South Atlantic Region, USA. You also need main package (WME Validator) installed.
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
  ".author": "crazycaveman and xanderb",
  ".updated": "2015-03-05",
  ".link": "TODO: ",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Wrong name for state highway",
    "problemEN": "All state highways should be named SC- in South Carolina",
    "solutionEN": "Change name to SC-XX (if it is truly a state highway)",
    "template": "${state}:##${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": "/^South Carolina:.*\\b(?:State Hwy|SR-|SH-)\\b/i"
  },
  "130.solutionLink": "W:South_Carolina#Naming",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^[1-9](?![245]).*#(?:US Hwy |US-)[0-9]+(?: ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*@/i"
  },
  "131.solutionLink": "W:Road_types/USA#Major_Highway",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^[1-9](?![2-5]).*#(?:(?:State Hwy |SR-|SH-|IL-|IN-|K-|KY-|LA-|M-|MA-|MS-|NC-|ND-|NY-|SC-|TN-|VA-|WIS-)[0-9]+(?:| ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*|(?:US Hwy |US-)[0-9]+(?: BUS| LOOP| SPUR)+(?: [NSWE])?)@/i"  },
  "132.solutionLink": "W:Road_types/USA#Minor_Highway",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^[1-9](?![1-5]).*#(?:State Hwy |SR-|SH-|IL-|IN-|K-|KY-|LA-|M-|MA-|MS-|NC-|ND-|NY-|SC-|TN-|VA-|WIS-)[0-9]+(?: BUS| LOOP| SPUR)+(?: [NSWE])?@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Primary_Street",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Business Abbreviated Wrong",
    "problemEN": "Business Highways should be abbreviated as BUS instead of Bus",
    "solutionEN": "Change Highway abbreviation from Bus to BUS",
    "template": "${street}",
    "regexp": "/[0-9] Bus/"
  },
  "135.enabled": true,
  "135.params": {
    "titleEN": "Wrong name on secondary road",
    "problemEN": "Secondary state roads should follow the format S-##-XXX",
    "solutionEN": "Change road name to only be S-##-XXX, where ## is the county number",
    "template": "${state}:#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^South Carolina:.*#(:?State (:?Rd|Road|Rte|Route) |.* S-[0-9]{1,2}-)[0-9]+/i"
  },
  "135.solutionLink": "W:South_Carolina#Naming",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong name for state highway",
    "problemEN": "All state highways should be named KY- in Kentucky",
    "solutionEN": "Change name to KY-XX (if it is truly a state highway)",
    "template": "${state}:#${street}#${altStreet[#]}#",
    "regexp": "/Kentucky:State Hwy|SR-|SH-|State Rd|Ky-|Tn-|In-|KY=|IN-|TN-/"
  },
  "136.solutionLink": "W:Kentucky/Test#State_Highway_Renaming",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "#${street}#${altStreet[#]}#",
    "regexp": "/Cs-|CS-|County Hwy|County Rd|Cr-/"
  },
  "138.enabled": true,
  "138.params": {
    "titleEN": "Saint / Street TTS",
    "problemEN": "Streets that incorrectly begin with "St " results with TTS reading "Street"",
    "solutionEN": "Add a period after St at the beginning of the street name",
    "template": "#${street}#${altStreet[#]}#",
    "regexp": "/^St /"
  },
  "138.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "139.enabled": true,
  "139.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 50 meters",
    "solutionEN": "Does it really need to be there?",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-4]?[0-9])$/"
  },
  "139.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "140.enabled": true,
  "140.params": {
    "titleEN": "Wrong name for state highway",
    "problemEN": "All state highways should be named TN- in Tennessee",
    "solutionEN": "Change name to TN-XX (if it is truly a state highway)",
    "template": "${state}:##${street}##${altStreet[#]}",
    "regexp": "/Tennessee:State Hwy|SR-|SH-|State Rd|Tn-|TN=|KY-/"
  },
  "140.solutionLink": "W:Tennessee#Naming"
};
