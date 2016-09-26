// ==UserScript==
// @name                WME Validator Localization for South Dakota
// @namespace           https://greasyfork.org/users/6605
// @version             1.1.8
// @author              crazycaveman
// @description         This script localizes WME Validator for South Dakota, USA. You also need main package (WME Validator) installed.
// @match               https://beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @exclude             https://*.waze.com/*user/editor/*
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
  ".country": "South Dakota, United States",
  ".codeISO": "US",
  ".author": "crazycaveman",
  ".updated": "2015-10-19",
  ".link": "",
  
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
  "171.solutionLink": "W:Abbreviations_&_Acronyms#Standard_Suffix_Abbreviations",
  
  "130.enabled": true,
  "130.params": {
    "titleEN": "Wrong name for state highway",
    "problemEN": "All state highways should be named SD-### in South Dakota",
    "solutionEN": "Change name to SD-### (if it is truly a state highway)",
    "template": "${state}:#${street}#${altStreet[#]}",
    "regexp": "/^South Dakota:.*\\b(State Hwy |S[HhRr][- =])[0-9]{1,3}/"
  },
  "130.solutionLink": "W:Highway_naming/USA",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Wrong road type (major)",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "131.solutionLink": "W:Road_types/USA#Major_Highway",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |(SR|SH|DC|IA|IN|K|LA|M|MA|MD|MN|MO|MS|N|NC|ND|NJ|NV|NY|RI|SC|SD|TN|VT|WIS|WV)-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "132.solutionLink": "W:Road_types/USA#Minor_Highway",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong road type (primary)",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^1-5]:.*#(State Hwy |(SR|SH|DC|IA|IN|K|LA|M|MA|MD|MN|MO|MS|N|NC|ND|NJ|NV|NY|RI|SC|SD|TN|VT|WIS|WV)-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Primary_Street",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Wrong banner abbreviation",
    "problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
    "solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck)/"
  },
  "134.solutionLink": "W:Road_names/USA#United_States_Numbered_Highways",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },/*
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
  "n": 2,
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
  }*/
};
