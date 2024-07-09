const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Cairo";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029VaMe7eCEAKWHyud72j2H";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaMe7eCEAKWHyud72j2H";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaMe7eCEAKWHyud72j2H" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐀𝐇𝐌𝐄𝐃" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201154869468";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_24_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJidzUzV3lIMVI1d1NtWGxyZFliV2tsdWZlTkRTaERCYzhnbW1PYWl5UGVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBSFlreWs4RFJLRzFyY0d3T2dKb0NnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjViMGY3ZWM4LTc2MGYtNGU5ZS04MTlhLTU3NzNlNDcxYjY5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA1MyxcbiAgICAgIDQ2LFxuICAgICAgMjI1LFxuICAgICAgNDcsXG4gICAgICAxOTgsXG4gICAgICAyMTUsXG4gICAgICAxMjMsXG4gICAgICAyMTQsXG4gICAgICA3NixcbiAgICAgIDI1MyxcbiAgICAgIDczLFxuICAgICAgMTc3LFxuICAgICAgNzEsXG4gICAgICAxOTEsXG4gICAgICA0MCxcbiAgICAgIDIyMixcbiAgICAgIDE4NixcbiAgICAgIDQxLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDkwLFxuICAgICAgMjA0LFxuICAgICAgMTAyLFxuICAgICAgMzUsXG4gICAgICAzOSxcbiAgICAgIDU3LFxuICAgICAgNjAsXG4gICAgICA1NSxcbiAgICAgIDE5NCxcbiAgICAgIDEyMCxcbiAgICAgIDIwOCxcbiAgICAgIDI5LFxuICAgICAgMjAwLFxuICAgICAgMTkyLFxuICAgICAgMjEwLFxuICAgICAgMTkxLFxuICAgICAgMjQ4LFxuICAgICAgNDksXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGODRIQzgxTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTY3NzE1ODA0NjYwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMzU5MTE0OTMyMjQ5MjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pleW5iZ0hFSkhMczdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicmkyTFJKNC9JN1dYWS9UTWpPMmtodmpWUzNjZ21UNTMzOGMxSS9iTUFuMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjdEc3dGtPZnBMWDRIWFVBeVpNN1FWVU1TNEJ5cUxlUk92bXFMZmM5ZGNHT3pVa0hQUDAwcUtmV2taWVVLK0VCd0pVSVZoU0V3WjFJQlhEYk1pSmhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSSmxJeG8vaWFOMSt0RTA1bFl3dkhNYVRuQlJWUlcySlpvdkpkc3RvRnA1R2tSWmlSbjFaY005azlqaXZ1VElRSnpvMWZUeDFXT1V6aGJPT1Q4RitEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5Njc3MTU4MDQ2NjA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUwOTg1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpQQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlBCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUJvaWtTazdFbE9NRUdLSUF0dUNEK0xWUHg2NVduTmtROVNjQXhFZ2xjYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk2OTcwMjYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4ODA3MjI2OThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐀𝐇𝐌𝐄𝐃",
  packname: process.env.PACK_NAME || "#",
  botname : process.env.BOT_NAME  || "𝐀𝐇𝐌𝐄𝐃",
  ownername:process.env.OWNER_NAME|| "𝐀𝐇𝐌𝐄𝐃",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
