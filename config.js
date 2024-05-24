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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜltan²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923194778990";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // 💥✌️
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // WELCOME JANIII ❤️🔥❤️

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_31_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgNTksXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVlRDN4aWZGaEtSYVVhcWszbTloeTJnbzdIZHBjTlZQcjFrMjJvM2hBNE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk0Nzc4OTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNDAyRERFOUVFOTQ3NERBQ0VCMzVFRUQ1RTcyRDk2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY1NjgyNzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTQ3Nzg5OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3NDdCQ0JDRDY5RTA2NjkyMDA1QTg1NDhFMTI4NUI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU2ODI3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTN3NMNkg2TlFXQzRLSjdCOVZkS0hRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3ZjcwMzNhLWE0YjItNDI2Yy04ZTRhLTJiNzVjOTVlYWI3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMDQsXG4gICAgICAxMTgsXG4gICAgICAxMDUsXG4gICAgICAyMTgsXG4gICAgICAzNyxcbiAgICAgIDE2NSxcbiAgICAgIDgzLFxuICAgICAgNDQsXG4gICAgICAxOTksXG4gICAgICA0NSxcbiAgICAgIDE3NCxcbiAgICAgIDIxLFxuICAgICAgMjE3LFxuICAgICAgOTEsXG4gICAgICAxNTcsXG4gICAgICAxMCxcbiAgICAgIDk1LFxuICAgICAgMTEsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAxMDIsXG4gICAgICA1NCxcbiAgICAgIDYsXG4gICAgICAxNTAsXG4gICAgICAxNSxcbiAgICAgIDEzNSxcbiAgICAgIDI3LFxuICAgICAgOSxcbiAgICAgIDE3LFxuICAgICAgNjEsXG4gICAgICA0NSxcbiAgICAgIDExNyxcbiAgICAgIDE5OCxcbiAgICAgIDc1LFxuICAgICAgMTMwLFxuICAgICAgMTgyLFxuICAgICAgMTA3LFxuICAgICAgMjA2LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktFSzlBRUdEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTQ3Nzg5OTA6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYWxvY2hcIixcbiAgICBcImxpZFwiOiBcIjExMDU4Mjk3NTk3MTQwNzoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK1IxL0lGRU1lQnc3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFSUG5iVWQ5Z3d5VXV3L296cnNmOTJrbzExclFHSFlQdmUzbFMrakp5SGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUjJvdmJkQU5iWWQyOSt3bHBGNmJxcW1GdnJINWFaeDlpNnZnZ2RVZmtYMDdBdlBjbEw0clhxdmgwUGQzS3FiMGN6Z1k0MGdiU3RMTEdGSFc0STgzQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwialdyN1VGTWF3Ni8vS3NVVDYxQnpKTWN1TkVZc0xBdjBhV281US9MbTNodHl1WWdjbnQwT3FVZXFibXZEVlJZTG5FWUowaEJiaWdDaXZsOXpKTWZhZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk0Nzc4OTkwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjU2ODI2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl3Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXdjLmpzb24iOiAie1wia2V5RGF0YVwiOlwieWlOaXpNTmh4SkNZVmQ2NEwwdDc2b3RTOFlwdGlDdDhlOFdaVlBMaGdrND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTgyNjgwMzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY1NjgyNzMwMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SULTAN BALOCH",
  packname: process.env.PACK_NAME || "DON😎",
  botname : process.env.BOT_NAME  || "sᴜltan-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Sultan",


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
