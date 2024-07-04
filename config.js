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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707953789";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_10_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTnlNa2U2K0d4a3drZ2g2dUtFcjRoOVUvbTJCY3lEU2VldE41SFQ3bTN3Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidzhMZURHem5RVGFEVDVvWmQtaV9qd1wiLFxuICBcInBob25lSWRcIjogXCI2ZGRhNjU4OS1iOWE1LTQ0ZGMtYWU5Yi03YWNhNzMzMmU0MTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTQ0LFxuICAgICAgNjIsXG4gICAgICAxNTgsXG4gICAgICA5MyxcbiAgICAgIDAsXG4gICAgICAyMixcbiAgICAgIDIyLFxuICAgICAgODQsXG4gICAgICAxMzUsXG4gICAgICA3NyxcbiAgICAgIDIyOSxcbiAgICAgIDU3LFxuICAgICAgOTEsXG4gICAgICAyNDksXG4gICAgICA3NixcbiAgICAgIDEwOCxcbiAgICAgIDgxLFxuICAgICAgMTI1LFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA2MyxcbiAgICAgIDIzMSxcbiAgICAgIDYsXG4gICAgICAxNTEsXG4gICAgICA5NCxcbiAgICAgIDE2OSxcbiAgICAgIDE5NCxcbiAgICAgIDI0MCxcbiAgICAgIDIxMCxcbiAgICAgIDEwOCxcbiAgICAgIDkzLFxuICAgICAgMTc2LFxuICAgICAgMjIzLFxuICAgICAgMjU1LFxuICAgICAgODUsXG4gICAgICAyNDQsXG4gICAgICA3NyxcbiAgICAgIDIxNyxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTDRYWkQzN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA3OTUzNzg5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2WkPCdlo7wnZaV8J2WiPCdlo3wnZaa8J2WkvCdlofwnZaGXCIsXG4gICAgXCJsaWRcIjogXCIyNDU4MDU2NzY1MDUzODoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR3l2Y0VIRU1lVm1iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJmTVlaWS9LZ1RSc29mVVljZVh4T2Q0aXJLTlVMZk1NQ3RWU0k5V1psMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiblc1eXpaYzJLZHo3cWtQTVRkN2tWYmN0SGM4Q2paU0I1dmY0cDFCeTlGZVVsMkVFb0UvSTJSMlRyTnc2bEZXdnhFYlpuM2U3WjZZRjBTUzNZZ1g0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibHhwSU5kTkRzSENqdnJodUlmTy83TFcwT0d3TjNuaHg0NmhHZ3pjMWRMbUgwTVFLOERvaVU3U05oWVpCOHB6dUJha3oyNSthV0dZOGFNSHZnZ1MzRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA3OTUzNzg5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDc3MDAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlp1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuV3BYUWR5blNod3BpcWpqNGdVNFhnZ3I0K05leG5JQldWOE5XVmtRUkwwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTYzNjg4OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
