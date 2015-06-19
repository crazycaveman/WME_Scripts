// ==UserScript==
// @name           WME UR Comments Custom List
// @description    This script is for Custom comments to be used with my other script UR comments
// @namespace      RickZabel@gmail.com
// @grant          none
// @grant          GM_info
// @version        0.0.1.4
// @match          https://editor-beta.waze.com/*editor/*
// @match          https://www.waze.com/*editor/*
// @author         Rick Zabel '2014, crazycaveman
// @license        MIT/BSD/X11
// @icon			data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZ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
// ==/UserScript==
/* Changelog
 * 5th update to the format
 * 0.0.1 - initial version
 */
//I will try not to update this file but please keep a external backup of your comments as the main script changes this file might have to be updated. When the custom comments file is auto updated you will loose your custom comments. By making this a separate script I can try to limit how often this would happen but be warned it will eventually happen.
//if you are using quotes in your titles or comments they must be properly escaped. example "Comment \"Comment\" Comment",
//if you wish to have blank lines in your messages use \n\n. example "Line1\n\nLine2",
//if you wish to have text on the next line with no spaces in your message use \n. example "Line1\nLine2",
//Custom Configuration: this allows your "reminder", and close as "not identified" messages to be named what ever you would like.
//the position in the list that the reminder message is at. (starting at 0 counting titles, comments, and ur status). in my list this is "4 day Follow-Up"
window.UrcommentsCustomReminderPosistion = 3;

//this is the note that is added to the the reminder link  option
window.UrcommentsCustomReplyInstructions = 'To reply to this request go to the following link and click the map pin, then click on the conversation button.';

//the position of the close as Not Identified message (starting at 0 counting titles, comments, and ur status). in my list this is "7th day With No Response"
window.UrcommentsCustomCloseNotIdentifiedPosistion = 6;

//This is the list of Waze's default UR types. edit this list to match the titles used in your area! 
//You must have these titles in your list for the auto text insertion to work!
window.UrcommentsCustomdef_names = [];
window.UrcommentsCustomdef_names[6] = "Incorrect turn"; //"Incorrect turn";
window.UrcommentsCustomdef_names[7] = "Incorrect address"; //"Incorrect address";
window.UrcommentsCustomdef_names[8] = "Incorrect route"; //"Incorrect route";
window.UrcommentsCustomdef_names[9] = "Missing roundabout"; //"Missing roundabout";
window.UrcommentsCustomdef_names[10] = "General error"; //"General error";
window.UrcommentsCustomdef_names[11] = "Turn not allowed"; //"Turn not allowed";
window.UrcommentsCustomdef_names[12] = "Incorrect junction"; //"Incorrect junction";
window.UrcommentsCustomdef_names[13] = "Missing bridge overpass"; //"Missing bridge overpass";
window.UrcommentsCustomdef_names[14] = "Wrong driving direction"; //"Wrong driving direction";
window.UrcommentsCustomdef_names[15] = "Missing Exit"; //"Missing Exit";
window.UrcommentsCustomdef_names[16] = "Missing Road"; //"Missing Road";
window.UrcommentsCustomdef_names[18] = "Missing Landmark"; //"Missing Landmark";
window.UrcommentsCustomdef_names[19] = "Blocked Road"; //"Blocked Road";
window.UrcommentsCustomdef_names[21] = "Missing Street Name"; //"Missing Street Name";
window.UrcommentsCustomdef_names[22] = "Incorrect Street Prefix or Suffix"; //"Incorrect Street Prefix or Suffix";


//The comment array should follow the following format,
// "Title",     * is what will show up in the UrComment tab
// "comment",   * is the comment that will be sent to the user currently 
// "URStatus"   * this is action to take when the option "Auto Click Open, Solved, Not Identified" is on. after clicking send it will click one of those choices. usage is. "Open", or "Solved",or "NotIdentified",
// to have a blank line in between comments on the list add the following without the comment marks // there is an example below after "Thanks for the reply"
// "<br>",
// "",
// "",

//Custom list
window.UrcommentsCustomArray2 = [
                "Errors with no text",
                "Thank you for your report! What was the problem you encountered?",
                "Open",

                "4 day Follow-Up",
                "Unfortunately, without more information we will be unable to resolve your report. It will be closed in a few days unless there is a response with more information to fix the issue.",
                "Open",

                "7th day With No Response",
                "Since there has been no response, we are unable to determine the issue and fix it, so I am closing this report. If you run into any issues in the future, please don't hesitate to report them!",
                "NotIdentified",
               
                //Default URs  6 through 22 are all the different types of UR that a user can submit do not change them thanks
                "Incorrect turn", //6
                "Thank you for your report! What was the problem you encountered? Which turn is not allowed?",
                "Open",

                "Incorrect address", //7
                "Thank you for your report! Waze did not send us enough information to fix your request. Would you tell us your destination as you entered it into Waze? What is the problem you are having with this address?",
                "Open",

                "Incorrect route", //8
                "Thank you for your report! How did the directions given differ from what you expected? Sharing your destination as you entered it into Waze would be helpful for us to find a solution.",
                "Open",

                /*
                "Missing roundabout", //9
                "Volunteer responding,",
                "Open",
                */

                "General error", //10
                "Thank you for your report! What was the problem you encountered?",
                "Open",

                "Turn not allowed", //11
                "Thank you for your report! What was the problem you encountered? Which turn is not allowed?",
                "Open",

                "Incorrect junction", //12
                "Thank you for your report! What was the problem you encountered? Sharing your destination as you entered it into Waze would be helpful for us to find a solution.",
                "Open",

                "Missing bridge overpass", //13
                "Thank you for your report! Would you please let us know what overpass you believe is missing? When moving at highway speeds, Waze deliberately chooses not to display some nearby features to avoid cluttering the screen.",
                "Open",

                "Wrong driving direction", //14
                "Thank you for your report! How did the directions given differ from what you expected? Sharing your destination as you entered it into Waze would be helpful for us to find a solution.",
                "Open",

                "Missing Exit", //15
                "Thank you for your report! What was the problem you encountered?",
                "Open",

                "Missing Road", //16
                "Thank you for your report! What was the missing road you encountered?", 
                "Open",

                /*
                "Missing Landmark", //18
                "Volunteer responding,",
                "Open",

                "Blocked Road", //19
                "Volunteer responding,",
                "Open",

                "Missing Street Name", //21
                "Volunteer responding,",
                "Open",

                "Incorrect Street Prefix or Suffix", ///22
                "Volunteer responding,",
                "Open",
                */
				
				"Looks like not intended report",
				"Thank you for your report! Did you intend to report a map problem? If so, what was the problem you encountered? If not, let me know and I can close this out.",
				"Open",

                "<br>",
                "",
                "",
                //End of Default URs  

		"No further communication",
                "No further information was received and the request is being closed. As you travel, please feel welcome to report any map issues you encounter.",
                "NotIdentified", 
                
                "Report sent in error",
                "Not a problem, I'll go ahead and close this report. If you run into any issues with the map, please don't hesitate to report them!",
                "NotIdentified",
                
		"Bad GPS",
                "Thank you for your report! This is a GPS issue with your phone. Sometimes, your phone is unable to get a strong enough GPS signal and will cause you to \"drift\" off the road, but most times it corrects itself. The best thing you can do is make sure your phone has the best view of the sky possible in order to help it get a strong enough connection with the satellites. If you still have issues with your GPS, there are apps available to help test and troubleshoot these errors. If you run into any issues in the future, please don't hesitate to report them!",
                "NotIdentified",

		"Valid Route",
                "Thank you for your report! We reviewed the issue and did not find any map errors. It looks like Waze provided you with a valid route. Try the Waze suggested route a few times, it may turn out to actually be faster, if not you'll be teaching Waze that that route is slower, and the faster route will become preferred.",
                "NotIdentified",

		"Detours / Odd-Routing",
                "Thank you for your report! We can't find anything on the map to explain the route Waze gave you. Waze will route complex detours to save a few seconds. We are very sorry to say that map editors can not be helpful in this situation.",
                "NotIdentified",

		"Overall Waze complaint",
		"Thank you for your report! You can help make Waze better by reporting problems as you find them. Please include as many details as possible?",
		"NotIdentified",

		"Report to local municipality",
		"Thank you for your report! We are only able to help with map issues, this should be reported to the local municipality. Please feel welcome to report any map issues you encounter.",
		"NotIdentified",

		"No user transponder (avoid tolls)",
		"Thank you for your report! Waze is about getting you to your destination the fastest; however, it does not know if you have a toll transponder. Therefore, if you prefer to not have toll routes suggested, there is a feature under Settings > Navigation to avoid toll roads.",
		"NotIdentified",

		"No user transponder",
		"Thank you for your report! Waze is about getting to your destination the fastest; however, it does not know if you have a toll transponder. As you travel, please feel welcome to report any map issues you encounter.",
		"NotIdentified",
				
		"Not Using HOV",
                "Thank you for your report! Waze does not have the ability to know you meet the HOV criteria. Driving into the HOV lane should force Waze to recalculate your route. Afterwards you should be allowed to stay in the HOV lane.",
                "NotIdentified",
				
		"U-turns",
		"Thank you for your report! Currently Waze will not tell you to make a \"U-turn\". It will route you in several left/right turns to effectively create a U-turn. This is a programming issue that cannot be changed by the volunteer map editors, but we understand that Waze is working on a fix.",
		"NotIdentified",
				
		"Traffic - Stale Information",
                "Thank you for your report! Waze relies on data from people using Waze to assess traffic. The volunteer map editors cannot edit conditions reported through the Waze app. In the case of a recent accident or slowdown, Waze may not have any data for this situation. Once Waze has detected a traffic situation it might remember it for a period of time after the situation cleared up.",
                "NotIdentified",

                "Traffic - Jams",
                "Thank you for your report! To report a traffic jams please use the Waze app by clicking the pin in the lower right and then clicking Traffic Jam. Traffic Jam reports can help route you and other Wazers around traffic problems in real-time.",
                "NotIdentified",

                "Signal Avoidance Bug",
                "Thank you for your report! There are no issues with the intersection’s turn restrictions. Waze's developers are working on a fix for this issue but we do not have an ETA. Please feel free to use the turn until the issue is resolved.",
                "NotIdentified",

		"Already included restrictions",
		"Thank you for your report! This restriction is already included in the map, Waze should not route through this illegal turn. If Waze ever gives you a route through a restricted turn, please send another Map Issue report at that time.",
		"NotIdentified",

		"Temporary road blockage",
		"Thank you for your report! If the road is completely blocked use the Report > Closure feature for you and others to be rerouted around it, otherwise please use Report > Traffic. At a minimum Waze is learning that that route is slower, and a faster route will become preferred.",
		"NotIdentified",

                "Temporary Road Closure",
                "Thank you for your report! Do you know how long the road is going to be closed? For closures that last only a few days, the volunteer map editors cannot be much help. It takes at least that long for our edits to make it to the live map! When you encounter short-term road closures in the future, please use the Report > Closure feature built into the Waze app. If this is a long-term closure please respond and let us know as much as you can.",
                "Open",	

		"Closure clean-up",
		"Thank you for your report! Due to daily changing closures we are closing out the old requests to concentrate on the newest ones. For closures that last only a few days, the volunteer map editors cannot be much help. It takes at least that long for our edits to make it to the live map! When you encounter short-term road closures in the future, please use the Report > Closure feature built into the Waze app.",
		"NotIdentified",

		"Thanks for the reply",
                "Thank you for the reply! This request will be closed. As you travel, please feel welcome to report any map issues you encounter.",
                "NotIdentified",	

                "Traffic missing on map",
                "Thank you for your report! Sometimes, traffic can build up quickly, before Waze is able to detect that it is there and warn other drivers. When you encounter traffic, please use the \"Report traffic\" feature to ensure that Waze knows of the traffic and can route other drivers around it. If you run into any issues with the map, please don't hesitate to report them!",
                "NotIdentified",

		"<br>",
                "",
                "",
				
                "No further communication",
                "No further information was received and the request is being closed. As you travel, please feel welcome to report any map issues you encounter.",
                "Solved",

		"Fixed",
                "Thanks to your report we've found and fixed a problem with the map. The fix should reach handheld devices within a few days, but on rare occasions it can take closer to a week.",
                "Solved",

		"Address Adjustments",
		"Thank you for your report! I have added the address to the correct location. If you have the address saved in your history, or as a favorite or home/work, you should remove it now and add it again once Waze routes you properly. If you run into a similar problem in the future, you can easily fix this yourself by submitting a new place! To do this, tap the report menu (bottom right icon), select Place, take a picture and fill out the appropriate info. If you run into any issues, please don't hesitate to report them!",
		"Solved",
		
		"POI Adjustment",
		"Thank you for your report! The POI has been added to the correct location and it should fix the issue for you in a few days. If you have the POI saved in your history, or as a favorite or home/work, you should remove it now and add it again once Waze routes you properly. If you run into a similar problem in the future, you can easily fix this yourself by submitting a new place! To do this, tap the report menu (bottom right icon), select Place, take a picture and fill out the appropriate info. If you run into any issues, please don't hesitate to report them!",
		"Solved",
		
		"Road added",
		"Thank you for your report! I have added the missing road(s) and should appear in the app in a few days. If you run into any issues, please don't hesitate to report them!",
		"Solved",
		
		"Road removed",
		"Thank you for your report! I have removed the non-existent road(s) and they should disappear from the app in a few days. If you run into any issues, please don't hesitate to report them!",
		"Solved",
		
		"Road name corrected",
		"Thank you for your report! I have updated the name of the road(s) and the changes should appear in your client within a few days. If you run into any issues, please don't hesitate to report them!",
		"Solved",
		
		"Old UR",
		"Thank you for your report! There have been some changes in the area recently and your problem looks like it should be fixed. If you run into any issues, please don't hesitate to report them!",
		"Solved",
		
		"<br>",
		"",
		"",

                "Address fishing",
                "Waze does not tell us your starting or ending destinations. Would you tell us your destination as you entered it into Waze?",
                "Open",

                "Problem appears corrected",
                "Just a reminder: The problem appears to be corrected. Please let us know if you are continuing to have the issue. If we do not hear from you in a few days we will close this report.",
                "Open", 
 
		"Clears comment & sets UR status to Open",
                "",
                "Open",
				
		"Include Users Description",
		"Thank you for your report! You reported \"$URD\" and Waze did not send us enough information to fix your request. Would you please let us know what went wrong with the route Waze gave you? Would you tell us your destination as you entered it into Waze?",
                "Open",

		"Wrong Street Name",
		"Thank you for your report! Waze did not send us enough information to fix your request. Would you please let us know which street name you think is wrong and what it should be? Thanks",
		"Open",

		"<br>",
                "",
                "",

                "User Followed Waze's route",
                "Thank you for your report! It appears that you followed the route Waze suggested. Would you please let us know what went wrong with the route Waze gave you? Would you tell us your destination as you entered it into Waze?",
                "Open",

                "Alley Interference",
                "Thank you for your report! Waze does not let the us know where you were going, although it was probably adjacent to the alley. Would you tell us your destination as you entered it into Waze?",
                "Open",

                "Road Closed",
                "Thank you for your report! Would you please let us know the following; What road is closed?; between which intersections is this road closed; Do you know how long this road is scheduled to be closed?", 
                "Open",

                "Area Entrances",
                "We have had problems with Google pins being placed in the center of large landmarks. Delete your previous search and do a new search for the location. Go to the bottom of the auto fill list to see more results and make sure you pick the Waze search engine. ",
                "Open",

                "48 Hour Reply",
                "We made some changes to the map, please allow up to 48 hours for the changes to be reflected on the live map.",
                "Open",

                "Clear Saved Locations",
                "To get an updated result, remove the location from your navigation history and then search for the location again.",
                "Open",

                "Clear TTS Cache",
                "Please clear your Text-to-Speech cache. In the navigate search box type cc@tts in the search field and press search. You will get a message that the TTS file has been cleared. It will take a few days for the the spoken street names to be downloaded.",
                "Open",

                "Address - Incorrect Position",
                "What was the Address you had issues with? Please show us where the address you had issues is with the Report > Places feature in Waze. After taking a picture move as close to the entrance of the place you are adding before saving. Please do not submit images with personal details.",
                "Open",

                "Address - Missing from Map",
                "Thank you for your report!  Would you let us know the address that is missing? The live map does not have all the street numbers. You can also use the Report Places feature in Waze to mark the location. It is helpful that after taking a picture that you move near the location you’re marking to save the place. Also, please do not submit pictures containing faces, license plates, or personal details.",
                "Open",

                "Address - Bad Results",
                "Search results in Waze are retrieved from numerous sources. After tapping search, Scroll to the bottom and you will see options for other search engines . Please try a different option as another search engine might have the address you are looking for",
                "Open",

                "House Number Adjustment",
                "I've forced Waze to re-register the house number for your destination. I believe this should correct your issue. Please allow up to 48 hours for changes to be reflected in the live map. If you have the location in your saved searches or favorites, please remove them and re-add the destination. Please let me know if you continue to experience this problem by submitting another error report.", 
                "Open",

                "Missing Bridges or Roads",
                "The roads for this area are thoroughly mapped and the volunteer editors can not find anything missing from the map. When you are moving, Waze deliberately chooses not to display some nearby features to avoid cluttering the screen. If you are certain a feature is missing from the map, please reply and tell us as much as possible about it.",
                "Open",

                "Manual Refresh",
                "Please try doing these options. Tap the Wazer icon > Settings > Advanced > Data transfer > Refresh Map Of My Area. Second, you can try clearing Waze's app cache in your phone’s app manager. The final option is to reset the app by going to the navigation screen and type ##@resetapp in search field and hit search.", 
                "Open",

                "Pave Road",
                "Thank you for your report! You can pave the road from the app by tapping the Pin icon > Map Issue > Pave Road tab. After leaving the paved road tap start paving. Once done tap the steamroller > stop paving. You can provide information about the new road such as it's name buy tapping on the Pin icon > Map Issue > Missing Road.",
                "Open",

                "The road has been closed.",
                "Thank you for your report! The road has been closed.", 
                "Open",

                "Unlock request",
                "I have begun the process to get this issue fixed. Thanks for your report!",
		"Open"
];
//end Custom list
