// ==UserScript==
// @name                WME Validator Localization for Australia
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.15
// @author              xanderb
// @description         This script localizes WME Validator for Australia. You also need main package (WME Validator) installed.
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

window.WME_Validator_Australia = {
  ".country": "Australia",
  ".codeISO": "AU",
  ".author": "xanderb",
  ".updated": "2015-11-11",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Name Suffixes",
    "problemEN": "Street suffix does not follow abbreviation rules",
    "solutionEN": "Rename the suffix Such as Road to Rd Please let me know about false positives",
    "template": "${street}",
    "regexp": "!/(Unknown Name| A(ccs|l(ly|wy)|mbl|pp|r(c|t)|v)| B(asn|ch|l(k|f)|wlk|vd|r(ae|k|ce)?|d(ge|wy)|y(pa|wy))| C(aus|ct|ds|h|ir|l(de|t)?|mmn|n(r|wy)|o(n|wy)|ps|r(cs|d|k|oss|se|s(g|t))?|so|t(r|tg|yd)?|uwy|yn)| D(Evn|str|v|r(wy)?)| E(nt|s(p|t)|x(p|tn))| F(awy|o(lw|rm)|r(nt|tg)|shr|t(r(k|l)|wy)|wy)| G(dns?|l(d|y)|r(a|nd?)?|tes?)| H(aven|ill|ts|rd|wy)| I(ntg|ntn)| Jnc| L(ane|dg|in(e|k)|kt|nwy|oop|t|wr)| Nook| M(all|dw|ews|ndr|tn?|wy)| O(tlk|pas)| P(a(rk|th|ss)|de|iaz|kld|l(at|n|za)?|nt|rom|sge|wy)| Q(ys?|uadrant)| R(amp|ch|d(ge)?|es|gwy|ise|mbl|nde?|nge|owy?|t(e|t)|vra?|vwy)| S(bwy|dng|lpe|mt|nd|q|t(a|ps|r(a|s))?|wy)| T(ce|h(or|wy)|kwy|lwy|pk|r(fy|i|k|lr?)|unl|wrs)| U(pas|pr)| V(dct|iews?|l(g|ls?|y)|sta|ue)| W(a(lk|y)|hrf|kwy|tr|ynd)|^$)( [SNEW]{1,2})?$|^([SNEW]{1,2} )?(Old )?(Broadway|U-[Tt]urn|MBTA|Railroad|Amtrak|I-|IN-|IA-|KY?-|US-|LA?-|M([DNSO]?-|[0-9])|N[VJYCD]?-|S[CDRH]?-|SR[0-9]|RI?-|TN-|V[AT]-|W(V|IS)-|C[RH]-|Runway|Place |Avenue of |Circle of |State |County |The |to |(Left )?E(xit( to:)?|ntry) )/",
  },
  "128.solutionLink": "W:Abbreviations_and_acronyms_(Australia)",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "134.solutionLink": "W:Road_types/Australia#Parking_Lot_Road",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Check Lock Level",
    "problemEN": "Minimum Lock Level in Australia for Ferry is 5 and Railroad is 2",
    "solutionEN": "Make sure it isn't unlocked for someone at a lower rank to work on and lock it",
    "template": "${type}:${lock}",
    "regexp": "/^(15:[1-4]|18:[1])$/"
  },
  "135.solutionLink": "W:Australia/Mapraid_Melbourne#Road_Locks",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^| )(St|Dr)(\.$)?(?! ((CONN|Ext|[NEWS][EW]?)\\b|\/|\\())|(Jr|Rev)) /"
  },
  "138.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "139.enabled": true,
  "139.params": {
    "titleEN": "Improper Cardinal Usage",
    "problemEN": "This name contains a cardinal direction (NEWS) which does not match wiki guidelines.",
    "solutionEN": "If this cardinal should be spoken as a direction by TTS, make sure it has space on either side of it. \n\ If this cardinal should be spoken by TTS as a letter, follow it with a period. \n\ All cardinals should be capitalized.",
    "template": "${street} ${altStreet[#]}",
    "regexp": "/(^| )([NEWS]?[news][NEWS]?|[\"']?([NnSs][EeWw]?|[EeWw])['\":-]|[\"']([NnSs][EeWw]?|[EeWw])['\":-]?)(\\b|\\d| |$)/"
  },
  "139.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
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
    "n": 3,
  },
  //Default US checks
  "24.enabled": !0,
  "25.enabled": !0,
  "27.enabled": !0,
  "34.enabled": !0,
  "35.enabled": !0,
  "38.enabled": !0,
  "39.enabled": !0,
  "43.enabled": !0,
  "48.enabled": !0,
  "78.enabled": !0,
  "87.enabled": !0,
  "90.enabled": !0,
  "107.enabled": !0,
  "108.enabled": !0,
  "109.enabled": !0,
  "112.enabled": !1,
  "118.enabled": !0,
  "116.enabled": !0,
  "119.enabled": !0,
  "120.enabled": !0,
  "121.enabled": !0,
  "172.enabled": !0,
  "173.enabled": !0,
  "190.enabled": !0,
  "192.enabled": !0,
  "170.enabled": !0,
  "170.params": {
      regexp: "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": true,
  "171.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(Adm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|(?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}\\.|(?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}\\.|(?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O)).|#|^)\'(?![sl]\\b)|(?!\\bNat).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y|Tunl|Long Is\\b|Brg/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
  },
};
