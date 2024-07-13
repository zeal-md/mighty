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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252619561295";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_29_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkSDBURXRtRnphTy9vWUVoM1JzVUlacDI0a2VPSWJZSjh0RGtQNU5Za2NjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjYxOTU2MTI5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTNDRDczNjQ4RjhEMzJBOTU4RjI5QzRFOEY3QTM5RDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODcwMTQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjE5NTYxMjk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOEM0MzU1QTM3OURFN0Q3NUU0MDI2MDcwNjEzMjJENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NzAxNDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidU5YM3NIajBSMDZXb20zVHVRaHNTQVwiLFxuICBcInBob25lSWRcIjogXCI3ZWQyYmIwMS0zZGZjLTRkZjgtYTFmYS1iZGQ5OWRhMzJhYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTg1LFxuICAgICAgMTg5LFxuICAgICAgMjEsXG4gICAgICA1MixcbiAgICAgIDM1LFxuICAgICAgMTQ3LFxuICAgICAgNDUsXG4gICAgICAyMDcsXG4gICAgICAxNjksXG4gICAgICAxNTAsXG4gICAgICAxMjMsXG4gICAgICAyOSxcbiAgICAgIDE2OSxcbiAgICAgIDU2LFxuICAgICAgMjI2LFxuICAgICAgMzUsXG4gICAgICAxODQsXG4gICAgICAxMTQsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTUyLFxuICAgICAgMTUwLFxuICAgICAgODcsXG4gICAgICAyMTIsXG4gICAgICAyMzcsXG4gICAgICAxOTEsXG4gICAgICA2NyxcbiAgICAgIDE0NixcbiAgICAgIDE4LFxuICAgICAgMTY1LFxuICAgICAgNzEsXG4gICAgICAxNjEsXG4gICAgICAxNzksXG4gICAgICAxNSxcbiAgICAgIDUzLFxuICAgICAgMjIsXG4gICAgICA1OCxcbiAgICAgIDI1NSxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCNExQQlRDTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjE5NTYxMjk1OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSN4bSPypzhtIDhtI3htIfhtIVcIixcbiAgICBcImxpZFwiOiBcIjEyODY4MTU4MjM0NzY2OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0txdytxQUJFUHpKeWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOER0YXVhS0ZWN1BsRC9MQmZUbktSNVVmY3RrQXBtd0xubTZJSU1rZGp6bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxUnQxTGQydGpkdHRyakJoZVhTU2dQbmhVS0NqQkFDZ0xrR0xqZnVEaDdaSUE2VENaUURGcEZlcjREWGhNM1FueHk1UEl2aGNyeTNMUmUzU28wNmdEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLejUyUEp0QituVFNkblFsZlhad0FudklJeTNtUFByWVVrNjRCd2tEbm9kNXFiN2pzdE1ab2lYYU9oU3pUMThibmFUSmQrMTVMazdlNjlsMnhJZFpCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2MTk1NjEyOTU6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg3MDE0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ6OFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQno4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFRUcEcvVWd2MEpkRDdMTWs3a2x1bUs3UzU0ZWNOWVhKRDR5VHRZVWtaQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzc1NDkzNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg3MDE0OTE0M1wifSIKfQ=="  // PUT your SESSION_ID 


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
