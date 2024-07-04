const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="bunertc059@gmail.com"
global.location="buner,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com";
global.gurl  =process.env.GURL  || "https://whatsapp.com/";
global.website=process.env.GURL || "https://whatsapp.com/" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Nomi" 


global.devs = "923319373288" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923319373288";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_05_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHZC8rU2JwM3FFTENQTHZHbll3VS84Ti9nOUdCcU5QWUhvblJrQ0VORkxFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVdEtnWTBhN1JaMnhyb0Rtc0VPeE9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4MWJmN2RlLTBjYjUtNGE3Zi1iNmYyLTgzZjM4Zjg2NmVmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAzMyxcbiAgICAgIDEzLFxuICAgICAgNCxcbiAgICAgIDE1MCxcbiAgICAgIDEyMyxcbiAgICAgIDE0OCxcbiAgICAgIDIyNSxcbiAgICAgIDI1NSxcbiAgICAgIDI0NSxcbiAgICAgIDg1LFxuICAgICAgNixcbiAgICAgIDE4MCxcbiAgICAgIDY2LFxuICAgICAgMTY3LFxuICAgICAgMjMsXG4gICAgICA4NixcbiAgICAgIDIzMSxcbiAgICAgIDE3MCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDk5LFxuICAgICAgMzgsXG4gICAgICAxMDgsXG4gICAgICAxMzAsXG4gICAgICAyMixcbiAgICAgIDI3LFxuICAgICAgMTc2LFxuICAgICAgMTQ2LFxuICAgICAgMTMzLFxuICAgICAgOTEsXG4gICAgICAxNzQsXG4gICAgICAxOSxcbiAgICAgIDE0MyxcbiAgICAgIDQ0LFxuICAgICAgMjMwLFxuICAgICAgMjM4LFxuICAgICAgMTQ1LFxuICAgICAgMjQxLFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ3WkRENFExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTkzNzMyODg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODU4NjA1OTA3OTgwNjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043Uno0d0ZFTkd2bWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidHp4N0RJaWZ3RWRZbWVkNi9Oc2RwREdwak1rOCtWTjQvN3FRN3IzMjNDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkK2RuZklvM3lHdUx2MGV0R0lmeFZWVzh6R0g4cmdmWHJ1cER3UlRPZzRIQlkrald3MHRnbS82YStadGhzbzIxclZSWXRUWFg1UGJnKzg2YlV6VVdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhY01PRDJsOTFqNXgzL1J4c3VUNjNsdWhHSFdISVRYOWs2c0ZzV1NOSzUwY3VmQURsWDlOTkkvUit2ZmYxYndRSng1ZElSSGFJS1RsQTlpWW9JUjNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTkzNzMyODg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4MDM0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU10M1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXQzLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXZ6WmZmM3ZCL1l5anhGTXJpdVVYT052Y3huTUZDVjNYQm5UUVdKZnlGQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY4NjQ3OTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMDc4OTUwMDUyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```Nomi```", //*Nomi*\n youtube.com/"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nomi",
  ownername:process.env.OWNER_NAME|| "Nomi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Nomi"  ).toUpperCase(),



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
