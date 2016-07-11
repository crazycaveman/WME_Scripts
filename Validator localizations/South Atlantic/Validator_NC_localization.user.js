// ==UserScript==
// @name                WME Validator North Carolina Localization
// @version             1.3.94
// @description         This script localizes WME Validator for United States. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @exclude             https://*.waze.com/*user/editor/*
// @grant               none
// @run-at              document-start
// @namespace https://greasyfork.org/users/6285
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
  ".author": "s18slider",
  ".updated": "2014-12-02",
  ".link": "https://greasyfork.org/en/scripts/5973-wme-validator-north-carolina-localization",
  "112.enabled": false,
  "112.params": {
  "n": 55,
  },
  "130.enabled": true,
  "130.params": {
    "titleEN": "Bad Street Name",
    "problemEN": "Street Name has been identified as mass entered name that is incorrect. (dfa, nul, null, or US-29 Alt)",
    "solutionEN": "Correct the street name to remove dfa, nul, null or US-29 Alt. US-29 Alt is not a valid highway in North Carolina.",
    "template": "${state}:${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": "/^North Carolina:.*\\b(dfa|nul|null|US-29 Alt)\\b/i"
  },
  "131.enabled": true,
  "131.params": {
    "titleEN": "Potential Incorrect Abbreviation",
    "problemEN": "Name abbreviation may be incorrect. Alternative routes should be labeled ALT and abbreviations ALT, BUS, BYP, CONN, LOOP, SCN, and SPUR should be in ALL CAPS",
    "solutionEN": "Change abbreviation to ALT, BUS, BYP, CONN, LOOP, SCN, SPUR, or TRUCK in ALL CAPS",
    "template": "${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": "/!?[0-9].+(Alt|Business|Bus|Byp|Conn|Loop|Scn|Spur)\\b/"
  },
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name on US Highway",
    "problemEN": "All US highways should be named US-XXX",
    "solutionEN": "Change name to US-XX and verify with GIS the highway name is correct.",
    "template": "${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": ".*\\b(?:US Highway |US Hwy Route |US Hwy Rte |US Hwy |US Rte |US- |US )[0-9]{1,3}\\b/i"
  },
  "132.solutionLink": "W:North_Carolina#Roads",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong name on state highway",
    "problemEN": "All state highways should be named NC-XXX in North Carolina",
    "solutionEN": "Change name to NC-XX and verify with GIS the highway name is correct.",
    "template": "${state}:##${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": "/^North Carolina:.*\\b(?:State Highway |State Hwy |State Rd |State Rte |SR-|NC |NC- |NC Hwy |NC-Hwy |N C |N.C. |SH-)[0-9]{1,3}\\b/i"
  },
  "133.solutionLink": "W:North_Carolina#Roads",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Wrong road type (Major)",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*@/i"
  },
  "134.solutionLink": "W:Road_types/USA#Major_Highway",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Wrong road type (Minor)",
    "problemEN": "All US BUS, SPUR, LOOP Highways and all State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "135.solutionLink": "W:Road_types/USA#Minor_Highway",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type (Primary)",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^1-5]:.*#(State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Primary_Street",
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 3,
  },
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 2,
  },
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 3,
  },
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
};