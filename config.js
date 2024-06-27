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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_09_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWOFdzUzlvMFFLczIyUS9JQXZ0SXY1K3o0UUpNaXd3RHIyWlNxTjVid3J3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvSHdKUTRhYVE5eVVoSUJzMEJOdm9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhMjIwYWY0LTQ3ODEtNDgyNi04MGM4LWIxMWMzZmMwYjE1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAyMzAsXG4gICAgICA3NixcbiAgICAgIDIwMSxcbiAgICAgIDIxLFxuICAgICAgMjM5LFxuICAgICAgMTM4LFxuICAgICAgOTEsXG4gICAgICAxNjYsXG4gICAgICAxNTIsXG4gICAgICAxMjYsXG4gICAgICA2MyxcbiAgICAgIDE5OCxcbiAgICAgIDIwOCxcbiAgICAgIDE4NSxcbiAgICAgIDE3NSxcbiAgICAgIDE5NSxcbiAgICAgIDE1MyxcbiAgICAgIDIwLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTg2LFxuICAgICAgNTcsXG4gICAgICAyNDUsXG4gICAgICAxNDAsXG4gICAgICAxMjMsXG4gICAgICAxNTUsXG4gICAgICAyOSxcbiAgICAgIDEyMyxcbiAgICAgIDM5LFxuICAgICAgMTQ5LFxuICAgICAgMTkxLFxuICAgICAgNjksXG4gICAgICAzMixcbiAgICAgIDg2LFxuICAgICAgMjI1LFxuICAgICAgNTMsXG4gICAgICAxNTIsXG4gICAgICAyMjcsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEMxRFgxQUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjYxNDE4MDg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY1NDY0MDM0NTYyMTMzOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1SNWZRRkVQM0Y5N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzMEljN0ZwSXNrUStpV0RJSXY2S1VLOW8wSGNjOHk0dDhVUGdWK1pKSGtnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklrM0ZPZVgvUVlhbGFEMFdNTkJiQ3FOUTd0azJmTXdBbW1LQnoxc3JkSlg2OHVtK3BDQ1FzZFlnU1B6K2Fhd3NLK3VGd05DbzFVK24wSWRNcHl4SkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRENnB2ZGVaeEVsVFlvWTBkbVpaWFVXakJkaDRYOFh2OGkzcDliVGgrQUpTTHN1NzR2eVdtUHJIbVZFNjBDNGFFTzJ4TE8wVHhYSUlheFdkNXR6K2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjYxNDE4MDg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1MjYxNDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJeGdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl4Zy5qc29uIjogIntcImtleURhdGFcIjpcIm9TWUwxb0w4RSsvcStKMjZLVkI1cWhYNWdXU2RPeGQyUnFyaUxPdHp3c2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NzEwMzk2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUyNjA4OTE2OFwifSIKfQ=="  // PUT your SESSION_ID 


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
