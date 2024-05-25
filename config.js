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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923216205055";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_43_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1Ulk2VjFtdGw2RVdtTlF4MVd1WGFQdFdGNENlekhvemU1V0ZnZEUyRkhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFSHRRX2xwa1RHR05HeVpEYi1KMTd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhNDIzMzE4LTA4MDQtNDAyOS1iZTczLThhYThlNGM4YWU4MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxNDIsXG4gICAgICA1NCxcbiAgICAgIDM5LFxuICAgICAgNDQsXG4gICAgICA3NixcbiAgICAgIDIzNyxcbiAgICAgIDEyMSxcbiAgICAgIDE1NyxcbiAgICAgIDE5LFxuICAgICAgMjUwLFxuICAgICAgMjQ3LFxuICAgICAgMTM3LFxuICAgICAgMTgwLFxuICAgICAgMjUwLFxuICAgICAgMTI4LFxuICAgICAgNTIsXG4gICAgICAyMDUsXG4gICAgICAyMzAsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNzMsXG4gICAgICAyMDYsXG4gICAgICAxOSxcbiAgICAgIDE2OCxcbiAgICAgIDE5NyxcbiAgICAgIDE2NyxcbiAgICAgIDEzNyxcbiAgICAgIDE1OSxcbiAgICAgIDE3NyxcbiAgICAgIDIyLFxuICAgICAgMjM3LFxuICAgICAgNjUsXG4gICAgICAzMixcbiAgICAgIDQ4LFxuICAgICAgMTk4LFxuICAgICAgMyxcbiAgICAgIDE3OSxcbiAgICAgIDE1OSxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOM1JMS0E0TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjE2MjA1MDU1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDA2MTgyNDExNzk4NDc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSktoaW84RUVLL294TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQNWthVFVhLzlmcll0RFUrV2dINFcrYmVuREJ6UnhuRGplTXViTnB5dmlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFqNmxzSUFnNWFST0JEeEtiN2paalJkMDRhTWxxb2NBM29xODFKYkE3ZW5UanR0ZlBXM0RvSWllb1N1a29WUzQxSXE1THNSbWhHVlJzclBkd09ZMUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNnTThXOFlKZVRiMmtpNzhaaWFPMGdzSXlnY3hpN3JNMDlDcTVsWWdXeENhSkpPVzdXeXVHQ3JZL2kvM25tUEJuNGJmSXgxZGZ5eEJUckN5S0JUL2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIxNjIwNTA1NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjU5NzgxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
