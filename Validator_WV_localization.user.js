// ==UserScript==
// @name                WME Validator Localization for West Virginia
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.24
// @author              xanderb
// @description         This script localizes WME Validator for West Virginia, USA. You also need main package (WME Validator) installed.
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
  ".updated": "2015-12-10",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Not West Virginia",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in WV and change it",
    "template": "${state}",
    "regexp": "!/^West Virginia/"
  },
  "128.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect State Highway",
    "problemEN": "West Virginia uses WV-xx for state and US-xx for national highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/.*(Wv Hwy |State Hwy |State Rte |SR-|SH-|State Rd |WV=|^Rte |State Rte-|U\.?[Ss]\.? [Hh](WY|wy|ighway))/"
  },
  "129.solutionLink": "W:West_Virginia",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 30 meters",
    "solutionEN": "Does it really need to be there?",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-2]?[0-9])$/"
  },
  "130.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^| )(St|Dr)(?! ((Ext|[NEWS][EW]?)\\b|\/|\\())|(Jr|Rev)) /"
  },
  "131.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "City or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/^West Virginia:.*(Cs-|CS-|Co Hwy |County Rd |Cr-|Co Rd |CH-|Ch-|Co Rte )/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |State Rte |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WV-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Minor_Highway",
  "134.enabled": true,
  "134.severity": "warning",
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
    "titleEN": "Unapproved Non-drivable type",
    "problemEN": "Not all road types should be mapped",
    "solutionEN": "Have a Rank 5+ editor approve and lock it",
    "template": "${type}:${lock}",
    "regexp": "/(5|1[0569]):[1-4]/"
  },
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Major_Highway",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Invalid Interstate Name",
    "problemEN": "There seems to be an extra space there",
    "SolutionEN": "Remove the extra space in the name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/I- /"
  },
  "137.solutionLink": "W:Road_names/USA#United_States_Interstate_Highway_System",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Invalid city name",
    "problemEN": "The city name is not a valid city in West Virginia",
    "solutionEN": "Correct the city name or remove it",
    "template": "${city}",
    "regexp": "!/.*(^$|\((Berkeley|Coalton\)|Webster)|A(ccoville|ddison|l(b(ans|right)|derson|ta|um)|mherstdale|n(awalt|moore|n|sted)|pple|shby|thens|u(burn|rora))|B(a(n(croft|k)|r(boursville|rackville|t(ley|ow))|th|yard)|e(a(rds|ver)|ckley|ech|l(ington|le|mont|va)|n(d|wood)|r(goo|wind)|th(any|lehem)|verly)|i(g|rch)|l(acksville|ennerhassett|ue(field|well))|o(az|l(ivar|t)|omer|ttom|wden)|r(a(d(ley|shaw)|mwell|nd(onville|ywine))|enton|idgeport|ookhaven|u(ceton|no|sh))|u(ckhannon|d|ffalo|r(lington|nsville)))|C(a(capon|iro|m(den\-on\-Gauley|eron)|pon|r(bon|olina|pendale)|ssville)|e(dar|ntury|redo)|h(a(pmanville|rl(eston|ton)|ttaroy|uncey)|e(at|lyan|s(apeake|ter))|imney)|ity|l(a(rksburg|y)|e(arview|ndenin))|o(al|mfort|rinne|vel|wen)|r(a(b|igsville)|eek|oss|umpler)|u(cumber|lloden|mberland))|D(a(iley|le|n(iels|ville)|v(is|y))|e(ep|lbarton|spard)|ixie|u(nbar|rbin))|E(ast|ccles|l(eanor|izabeth|k(ins|view)|lenboro)|nterprise)|F(a(ir(lea|mont|view)|ll(ing|s)|rmington|yetteville)|e(nwick|rr(is|y))|l(atwoods|emington)|o(llansbee|r(d|k|t))|r(anklin|iendly))|G(a(ll(ipolis|oway)|r(den|y)|ssaway|uley|y\-Shamrock)|hent|ilbert|l(asgow|enville)|r(a(fton|n(tsville|ville))|e(at|enview)|ove)|ypsy)|H(a(ll|m(bleton|lin)|ndley|r(man|pers|risville|t(ford|s))|ven)|e(ad|dgesville|ights|l(en|vetia)|n(d(erson|ricks)|lawson)|pzibah)|i(co|ll(sboro|top)|nton)|o(lden|metown|overson|pe)|u(n(dred|t(ersville|ington))|rricane|ttonsville))|I(damay|nwood|tmann)|J(a(ck(et|sonburg)|ne)|e(an|fferson)|u(n(ction|ior)|stice))|K(e(nova|rmit|ys(er|tone))|i(mb(all|erly)|n(caid|gwood)|stler)|opperston)|L(a(eger|ke|nes|shmeet|valette)|e(on|s(age|ter)|wisburg)|i(berty|ttleton)|o(gan|st)|u(beck|mberport))|M(a(bscott|cArthur|dison|llory|nnington|r(linton|met|tins(burg|ville)|ys)|sontown|t(ewan|heny|oaka)|ybeury)|c(Connell|Mechen)|eadow|i(ddle(bourne|way)|l(ford|ls|ton)|n(den|eralwells)|tchell)|o(n(aville|ongah|t(calm|gomery|rose))|orefield|rgantown|un(dsville|t))|ullens)|N(e(ibert|ttie|w(burg|ell))|itro|orthfork|utter)|O(akvale|ceana|mar|rchard)|P(a(den|geton|r(kersburg|sons)|w|x)|e(a|n(nsboro|tress)|ters(burg|town))|hilippi|i(ckens|edmont|n(ch|e(ville|y)))|leasant|o(ca|int|wellton)|r(att|i(chard|nceton)|osperity)|ullman)|Quinwood|R(a(c(hel|ine)|inelle|n(d|son)|venswood|ysal)|e(ader|d|ed(sville|y))|hodell|i(ch(mond|wood)|dgeley|pley|ve(r|sville))|o(binette|ck|derfield|mney|nceverte|ssmore|wlesburg)|upert)|S(a(l(em|t)|ndy|rah)|carbro|h(a(dy|nnondale)|e(nandoah|pherdstown)|innston|rewsbury)|is(sonville|tersville)|mith(ers|field)|o(phia|uth)|p(e(lter|ncer)|ring(field|s\)))|t(\.|a(naford|r)|o(llings|newood))|u(lphur|mm(ersville|it)|tton)|witzer|ylvester)|T(e(ays|rra)|h(omas|urmond)|ioga|own|riadelphia|unnelton|wilight)|U(nion|pper)|V(a(lley|n)|erdunville|i(e(nna|w)|vian))|W(a(rdensville|shington|ters|verly|yne)|e(irton|l(ch|lsburg)|sto(n|ver))|h(eeling|it(esville|mer))|i(l(ey|liams(on|town))|n(dsor|field))|o(lf|melsdorf|rthington))/"
  },
  "138.solutionLink": "http://factfinder.census.gov/bkmk/table/1.0/en/DEC/10_SF1/GCTPH1.ST10?slice=GEO~0400000US54",
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
  "n": 2,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 4,
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
  "106.enabled": !0,
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
    "regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": true,
  "171.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|((?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}|(\\bhila|\\benna))\\.|((?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}|\\b(ila|nna|ash|mdr|rof|res))\\.|((?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}|\\b(la|na|sh|dr|of|es|dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl))\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O|L)).|#|^)\'(?![sl]\\b)|(#|^)\'s|(?!\\b(In|Na)t).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y\\b|Tunl\\b|Long Is\\b|Brg\\b/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
  },
};
