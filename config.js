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


global.devs = "255786535571" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255786535571";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_13_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5xSDlxc2poN0F1bWRDWmZIOW52WWV6N3NyYVN4QU90c1dtTkxrU2pIa0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBxaTNYdUdEVEhHS2tpUGNmMGk2TEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmYwMTk5OTEtYWRjMS00ZmI0LWExYjYtNDJhNWI3NjcwYjFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDkzLFxuICAgICAgMjA5LFxuICAgICAgMTczLFxuICAgICAgMTkyLFxuICAgICAgMTQ0LFxuICAgICAgMjgsXG4gICAgICAxMDgsXG4gICAgICA0NyxcbiAgICAgIDc3LFxuICAgICAgMTE4LFxuICAgICAgODEsXG4gICAgICAyMTksXG4gICAgICAxNzcsXG4gICAgICA1NSxcbiAgICAgIDIzOCxcbiAgICAgIDEyOSxcbiAgICAgIDE0NyxcbiAgICAgIDE4NixcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTg2LFxuICAgICAgMTc0LFxuICAgICAgMTk5LFxuICAgICAgMjQ2LFxuICAgICAgMTU4LFxuICAgICAgNTAsXG4gICAgICA0NyxcbiAgICAgIDEzNCxcbiAgICAgIDE5NSxcbiAgICAgIDIyOCxcbiAgICAgIDM1LFxuICAgICAgMjQ3LFxuICAgICAgMTAwLFxuICAgICAgMjYsXG4gICAgICAxNTIsXG4gICAgICAyNTQsXG4gICAgICAxNzQsXG4gICAgICAxMjAsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzJEQzc5OVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDMyNzAzNTY6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOc8J2UgvCdk7zwnZO98J2TrvCdk7vwnZOy8J2TuPCdk77wnZO8IPCdk6DwnZO+8J2TrvCdk67wnZO3XCIsXG4gICAgXCJsaWRcIjogXCIyNzkwNDg3NzMyMTAyNTE6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTd0bFNrUXc0WFd0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwK1RrYStrcGF5TnFJVmduaEdhaHN4NzVnVlpMNW1YQTlsenZuTDRiQVQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpOQlQ3TTcybnVuOUpiMENkTzFVYnExRkFTQWhPbWZuU0RJZzZYd29CNWMzR3d5YkkrS21ISFZmamgyS3lveHh2TDBsV3VmRDZSMmtGN1A4YW51RUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInkrZnBKL01aK0dpQ2JpZ1dGQ1M4Mk1USXRRc1k0ODFYbEEveS91emFzYTU1RDZoUjZvVTNSaHlNR1BxcVoxOVBSczYvRUdLV1NzTmF6clhjdCtJS0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDMyNzAzNTY6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA3NDM3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "jflex0",
  packname: process.env.PACK_NAME || "jflex0",
  botname : process.env.BOT_NAME  || "QUEEN",
  ownername:process.env.OWNER_NAME|| "QUEEN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
