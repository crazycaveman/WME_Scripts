// ==UserScript==
// @name                WME Validator Localization for Kentucky
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.5
// @author              xanderb
// @description         This script localizes WME Validator for Kentucky, USA. You also need main package (WME Validator) installed.
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
  ".updated": "2015-03-05",
  ".link": "TODO: ",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 50 meters",
    "solutionEN": "Does it really need to be there?",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-4]?[0-9])$/"
  },
  "130.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Wrong name for state highway",
    "problemEN": "All state highways should be named KY-xxx in Kentucky",
    "solutionEN": "Change name to KY-xxx (if it is truly a state highway)",
    "template": "${state}:#${street}#${altStreet[#]}#",
    "regexp": "/Kentucky:State Hwy|SR-|SH-|State Rd|Ky-|Tn-|In-|KY=|IN-|TN-/"
  },
  "131.solutionLink": "W:Kentucky/Test#State_Highway_Renaming",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:#${street}#${altStreet[#]}#",
    "regexp": "/Kentucky:Cs-|CS-|County Hwy|County Rd|Cr-/"
  },
  "133.enabled": true,
  "133.params": {
    "titleEN": "Saint not Street TTS",
    "problemEN": "Streets that incorrectly begin with St results with TTS reading Street",
    "solutionEN": "Add a period after St at the beginning of the street name",
    "template": "#${street}#${altStreet[#]}#",
    "regexp": "/^St /"
  },
  "133.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations"
  "134.enabled"= true,
  "134.params": {
    "titleEN": "Wrong State"
    "problemEN": "This state is not Kentucky"
    "solutionEN": "If you are editing in Kentucky change the state name"
    "template": "$(state)"
    "regexp": "/!Kentucky/"
  }
};
