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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18765800481"
  
  ";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_26_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZQaTBkblNaYmZDSjdjelZaUjlMTUowalNHcERMaFNHdFo4VlVpM1dZNWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3NjU4MDA0ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI0MTFBMUQ3MDc4RDQ2RjFEQTA0Njk2RUREQ0JBNzVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM1NjAxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NzY1ODAwNDgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMjUwNzgyRDYxNzk4REFBNTZFMTBDQjY2QzYwRjFDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNTYwMTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwienEwQ3dXOWxRSU85cmtoOGlJcXFiUVwiLFxuICBcInBob25lSWRcIjogXCJmNjZkODNhNi1mZTNlLTQ0ZWMtYmU5OC1mMzc2ZWY3OWNhNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTgsXG4gICAgICA0NSxcbiAgICAgIDIyNSxcbiAgICAgIDI4LFxuICAgICAgMjIsXG4gICAgICAyMTAsXG4gICAgICAzMyxcbiAgICAgIDIzMCxcbiAgICAgIDIyOSxcbiAgICAgIDMwLFxuICAgICAgMjEzLFxuICAgICAgODgsXG4gICAgICA2LFxuICAgICAgMjI4LFxuICAgICAgMjU1LFxuICAgICAgMjQ1LFxuICAgICAgMTg3LFxuICAgICAgNzksXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgOTksXG4gICAgICAxODksXG4gICAgICA5NyxcbiAgICAgIDk4LFxuICAgICAgMTg4LFxuICAgICAgNzIsXG4gICAgICAxOTMsXG4gICAgICAxODUsXG4gICAgICAxNDUsXG4gICAgICAxNTksXG4gICAgICAyMTUsXG4gICAgICAzMixcbiAgICAgIDE5MCxcbiAgICAgIDg0LFxuICAgICAgODcsXG4gICAgICAxODcsXG4gICAgICAyNSxcbiAgICAgIDMyLFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhUOVRLSkU4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2NTgwMDQ4MTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcxNzY0MjA2NjY1OTU2OjQxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfqr0gTHVjYSBTZXJnaW8gRCdBbWljbyDwn5Cm4oCN8J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXYS9HRVE1NTNudEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMmh3Zm13cSt1SDQxeEdWaFFZU1h2UExRUU1mVmdwZUlPVUF0cXpIbGZWWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGVmxNd0JOQnp2YU9weVJqclZMaFhETGVnbXdXenBKdlpuaStxWjJEb0NKbkRXZnlJK2RSUEFXV0NwWmtSMVBERUhuQVh1MkZnV0RtK0MvNlp2Z25EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRN1hId3FMT2pDSXVDUWRsT1U2Y0tFcnFXNUFhVFBVSzVMNVA0UkZtcFBJNTNpNjlweGxRZmNzVXdDbHpsamVzelhVcE5pd0VyaHU4S2NtQ1p4Ukhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODc2NTgwMDQ4MTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM1NjAxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0zVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTNWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMDEzRU11RnJ0LzRBaWxQYWdpL1gxQVFrVkZKUzBqYTVJMElKZVBJN2xMQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU0NTg3MjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE2OTExMjIwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "suhail",
  ownername:process.env.OWNER_NAME|| "suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Suhail"  ).toUpperCase(),



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
