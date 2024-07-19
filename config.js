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


global.devs = "0115105480" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0115105480";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_41_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZm0zTnBvNjNOR3NwTXluKzRvK3RmY21Vdno5VlpwYWdyYnFaU0lQeVBhOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2dBRmV6ZndSaHlzTHBfV296UFNIUVwiLFxuICBcInBob25lSWRcIjogXCI0NDU5MTI3Yi04YmFkLTRlNGItYWIwNS01MmUwMmRlYWNkOTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMjMsXG4gICAgICAxODEsXG4gICAgICA2MixcbiAgICAgIDIzOSxcbiAgICAgIDQ3LFxuICAgICAgMTAzLFxuICAgICAgMjA0LFxuICAgICAgOTYsXG4gICAgICA5MSxcbiAgICAgIDIxMixcbiAgICAgIDIwLFxuICAgICAgMTY4LFxuICAgICAgNTIsXG4gICAgICAyNDEsXG4gICAgICAyMzcsXG4gICAgICAyNCxcbiAgICAgIDE1OCxcbiAgICAgIDEzMyxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDQzLFxuICAgICAgMTQ1LFxuICAgICAgNDAsXG4gICAgICAxNCxcbiAgICAgIDE0NixcbiAgICAgIDE2MSxcbiAgICAgIDU2LFxuICAgICAgMTgxLFxuICAgICAgNTUsXG4gICAgICAxNDEsXG4gICAgICA1NyxcbiAgICAgIDE5NSxcbiAgICAgIDQ4LFxuICAgICAgMTAwLFxuICAgICAgODAsXG4gICAgICAyMjMsXG4gICAgICA0NixcbiAgICAgIDE1NCxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRWQVRFSktXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTUxMDU0ODA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEY2FzaHlcIixcbiAgICBcImxpZFwiOiBcIjI1NDMwNTUwMDE4NDU4MjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbkE1NUFFRUlXNzY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImwxTDRpbE05enFVM0xJakRIQ1A2ZE5CajZKSzhHUm5tU1ZQZXpFak5zazg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVk0yOEQ4RmcwczNQOHdDSDlTYmtHMHhTZnE4eG1iNXh1a3NDdVNTOXM3OE84azBqTFdKRlpSTVBOOGJwaktMRGlFNWpQellUMmFQMzh4UWZ0Qys5Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU09VVzdmZUdZRmFCbWVIcmdLdHdEMHFyMXduZEpMdWdjYUh3Z0FxQ0VvelpTdjhhUHkxRk9LczQzQXVidHk0Smw5U3NGNG41RU82TEdqL3M3VDhSQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MTA1NDgwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQyNTI4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUcvSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRy9ILmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "CashyD",


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
