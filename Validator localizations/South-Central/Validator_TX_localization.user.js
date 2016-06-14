// ==UserScript==
// @name         WME Validator Localization for Texas
// @namespace    https://greasyfork.org/en/scripts/tbd
// @version      1.0
// @description  This script localizes WME Validator for United States/Texas. You also need main package (WME Validator) installed.
// @author       MRedRaider
// @match        https://editor-beta.waze.com/*editor/*
// @match        https://www.waze.com/*editor/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

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
	
	Changelog:
	0.1 - Initial copy of Oklahoma script
        1.0 - Removed Jr search from #135 per KarlCR9911
*/
window.WME_Validator_United_States = {
  ".country": "United States/Texas",
  ".codeISO": "US",
  ".author": "MRedRaider",
  ".updated": "2016-06-14",
  ".link": "TODO: ",
  
   //Default US checks
  "27.enabled": true,
  "90.enabled": true,
  "106.enabled": true,
  "112.enabled": false,
  "170.enabled": true,
  "170.params": {
    "regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/",
  },
  //  #171 ## Check for improper use of a period (.) that is not on the USA
  //          recommended abbreviations list (PesachZ)
  "171.enabled": true,
  "171.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|((?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}|(\\bhila|\\benna))\\.|((?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}|\\b(ila|nna|ash|mdr|rof|res))\\.|((?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}|\\b(la|na|sh|dr|of|es|dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl))\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O|L)).|#|^)\'(?![sl]\\b)|(#|^)\'s|(?!\\b(In|Na)t).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y\\b|\\b[Ee]x[dn]\\b|Tunl\\b|Long Is\\b|Brg\\b/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
  },
  
 "130.enabled": true,
 "130.params": {
	"titleEN": "Not Texas",
	"problem": "The segment is assigned to another state",
	"solutionEN": "Make sure you are editing in TX and change it or disable script when working in another state",
	"template": "${state}",
	"regexp": "!/Texas/"
  },
  "130.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",   
  "131.enabled": true,
  "131.params": {
	"titleEN": "Wrong banner abbreviation",
	"problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
	"solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK",
	"template": "${street}#${altStreet[#]}",
	"regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck)/"
  },
  "131.solutionLink": "W:Road_names/USA#United_States_Numbered_Highways",
  "132.enabled": true,
  "132.params": {
	"titleEN": "Incorrect Segment Name",
	"problemEN": "TX uses CR for county road, SH for state highway, US for national highway, and I for interstate names",
	"solutionEN": "Rename the Street or Alt Street",
	"template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/^Texas:.*(?!(SH|CR|US|I)-[0-9]+ ?[A-Za-z]*)([Ii](- | -|-|=| =|= )?|[Uu]\.?[Ss]\.?( [Hh](WY|wy|ighway)| Rte| -|- |-|=| =|= )?|([Tt][Xx]|[Ss]tate|[Cc](ounty|[Oo])) ?([Hh](WY|wy|ighway)|[Rr][Dd]|Rte)|(([Tt][Xx]|([Ss]|[Cc])([Hh]|[Rr]))(- | -|-|=| =|= ))) ?[0-9]+ ?[A-Za-z]*/"
  },
  "133.solutionLink": "W:Road_types/USA#Quick_reference_chart",
  "134.solutionLink": "W:Texas#Roads",    
  "135.enabled": true,
  "135.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr or St or Dr where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^([SNEW] )+(St |Dr )|^St |^Dr |Rev /"
  },
  "135.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  //Freeway Lock
  "150.enabled": true,
  "150.params": {
	  "n": 5,
  },
  //Major Highway Lock
  "151.enabled": true,
  "151.params": {
	  "n": 5,
  },
  //Minor Highway Lock
  "152.enabled": true,
  "152.params": {
	  "n": 4,
  },
  //Ramp Lock
  "153.enabled": true,
    "153.params": {
	  "n": 4,
  },
  //Primary Street Lock
  "154.enabled": true,
  "154.params": {
	  "n": 3,
  },
};
