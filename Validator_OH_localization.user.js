// ==UserScript==
// @name                WME Validator Localization for Ohio
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.11
// @author              xanderb
// @description         This script localizes WME Validator for Ohio, USA. You also need main package (WME Validator) installed.
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
  ".updated": "2015-03-30",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after St or Dr at the beginning of the street name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^St |^Dr /"
  },
  "128.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect State Highway",
    "problemEN": "Ohio uses SR for numbered highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Ohio:.*(Oh Hwy |State Hwy |Oh-|SH-|State Rd |SR=|State Rte |OH-|Sr-)/"
  },
  "129.solutionLink": "W:Ohio",
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
    "titleEN": "Not Ohio",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in OH and change it",
    "template": "${state}",
    "regexp": "!/Ohio/"
  },
  "131.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Ohio:.*(Cs-|CS-|County Hwy|County Rd|Cr-|Co Rd|Ch-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "133.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "134.enabled": true,
  "134.params": {
    "titleEN": "City Name on Freeway",
    "problemEN": "City names on Freeway segments can cause detours",
    "solutionEN": "Remove the City Name",
    "template": "${typeRank}:${city}",
    "regexp": "/15:.+$/"
  },
  "135.enabled": false,
  "135.params": {
    "titleEN": "Check Lock Level",
    "problemEN": "Minimum Lock Level in Ohio follows 53321 standard",
    "solutionEN": "Make sure it isn't unlocked for someone at a lower rank to work on and lock it",
    "template": "${typeRank}:${lock}",
    "regexp": "!/^(15:[5-6]|14:[3-6]|13:[3-6]|12:[1-6]|11:[2-6]|10:[1-6]|2:[2-6]|[1,3-9]:[1-6])$/"
  },
  "135.solutionLink": "W:Ohio",
  "136.enabled": true,
  "136.params": {
    "titleEN": "County Route Type",
    "problemEN": "County Routes should be set to Primary Street minumum",
    "solutionEN": "Set the road type to PS or higher",
    "template": "${typeRank}:#${street}#${altStreet[#]}",
    "regexp": "/[1-9][0,6-9]:.*(CH-|CR-)/"
  },
  "136.solutionLink": "W:Road_types/USA#Quick_reference_chart",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  //Major Highway lock
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 2,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  }
};
