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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_41_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndpNGtTdXVOakRIZjVxUWxOcjBDODZ6ZnZMWlNINEpwS1F6ZHlwQkY5Ylk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE3NTQzMzQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzM0RCMTgxOTk2NjExM0QzQjFFNkQwNEZCNUZBNDhBOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMTczMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTc1NDMzNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzMzY3QUU0NEMzNzkzOEEyOTFCM0Y3RTY2MDlGMjFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMxNzMxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxcWdUSWhidlNoMkVyQVpOdC1fN3dnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3YjBkOGUwLTM5ZmMtNDNkYi05OTE2LTM5ZTU3ZGZiYjYyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxNjksXG4gICAgICA4OCxcbiAgICAgIDEzNixcbiAgICAgIDEwOSxcbiAgICAgIDIyNyxcbiAgICAgIDEwNyxcbiAgICAgIDE0NixcbiAgICAgIDI1LFxuICAgICAgNDgsXG4gICAgICAzMyxcbiAgICAgIDE2OCxcbiAgICAgIDIxNixcbiAgICAgIDEwMCxcbiAgICAgIDEwNSxcbiAgICAgIDIxOCxcbiAgICAgIDEyNixcbiAgICAgIDc1LFxuICAgICAgNzYsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDIxNSxcbiAgICAgIDE4NSxcbiAgICAgIDEyNyxcbiAgICAgIDU5LFxuICAgICAgMTk5LFxuICAgICAgMTIwLFxuICAgICAgMTY3LFxuICAgICAgMjA4LFxuICAgICAgNjcsXG4gICAgICA5NyxcbiAgICAgIDc1LFxuICAgICAgOSxcbiAgICAgIDM4LFxuICAgICAgMTk2LFxuICAgICAgMTczLFxuICAgICAgMjMsXG4gICAgICAxMjMsXG4gICAgICA0NCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlXOVZBWE4zXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTc1NDMzNDM6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODg2OTM5NTcxMDA5OToxOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWE8J2VkvCdlZ3wnZWa8J2VnCDwnZWA8J2VnfCdlarwnZWS8J2VpCDwnZS48J2VnfCdlZpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL2czZkVDRUx6djVMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdmZGZWdy9EWUJLSUxBRHpsZGlIQ3dkcGhFWVlyOHJxd3NwbHNDZ2tNRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWE55TC9Ybm1reGdpd0JWSmNrUmY1MTliVkN6MkV1TU5mVFpJZ0ZtV2Nzc3pxTG5EbkNOUVU5MUZCWFVYYStsUjkxdGJ6SzJmMGN5VUJUdFQ1Um45Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicDlwMWcxWXowbk03NmFSRThjQ2hVY2FBYlBSMk0zNVlPZURyOHplK3lzMjV1dCtXRmtMdXVLcXJiaXV2ZDNPMEZSTWhRK0xuWU9jcGx2RnoybVBhanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE3NTQzMzQzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMxNzMxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ1UVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnVRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0UrWjN3ejZHMTJnWVlYVmFjR3NDTlVUS01kbFFMQkRCNDZwZEhZVkw3RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzUzODUxMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTMxNzMxNjU3MlwifSIKfQ=="  // PUT your SESSION_ID 


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
