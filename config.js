const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cpromise356@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Christech" 


global.devs = "2348084820714" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084820714";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "POWDERED-BY CHRIS-TECH" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_12_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFI5TVZQc2xkK1M3UllPaGNncUZwRGRadDR2T21wMHA0Q3JxK1dlRktoQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDIxNDI0NTU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMzBDRjI5MTgzOEU4OEU3RTkyMUI3M0I0MDlGNzE4RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5NjQ3NDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0dlU1N4S2NUc1c0RnJfRThjazdsZ1wiLFxuICBcInBob25lSWRcIjogXCIyMDZjZTkxMi00YTI3LTRlZTgtYTIzYS02MWE0M2E4ZmZjYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMzksXG4gICAgICAyMjQsXG4gICAgICAyMjYsXG4gICAgICA5MixcbiAgICAgIDE4OCxcbiAgICAgIDExOSxcbiAgICAgIDE3NSxcbiAgICAgIDk0LFxuICAgICAgMTY4LFxuICAgICAgMTU2LFxuICAgICAgMTMxLFxuICAgICAgMjQ1LFxuICAgICAgMTcxLFxuICAgICAgMTE3LFxuICAgICAgMjQ3LFxuICAgICAgMjUsXG4gICAgICAyMzYsXG4gICAgICAxODcsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMTgxLFxuICAgICAgMTA5LFxuICAgICAgMjEwLFxuICAgICAgMjQ1LFxuICAgICAgMzIsXG4gICAgICA1OSxcbiAgICAgIDI3LFxuICAgICAgMjIsXG4gICAgICAxNzEsXG4gICAgICAyNDUsXG4gICAgICAxNDEsXG4gICAgICA4LFxuICAgICAgMzcsXG4gICAgICAxODIsXG4gICAgICAxMzcsXG4gICAgICAyNCxcbiAgICAgIDIxMSxcbiAgICAgIDE3LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODVHWjNLQ1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjE0MjQ1NTg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNIIFRWXCIsXG4gICAgXCJsaWRcIjogXCIxNjI5NDI5MjIyNjQ2MjM6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNON2JxKzBDRUlDazFiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5wQXpoRVdDdkdJTkpHZlBEcTlvV1YvZjRzc29iQU9PdmNwdnlVeWFTWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3JXb0Myb3k2c2hiNEZpZVhpVXZSTit1Umw2U1NNMXpockVHcUlYZ2Q2K0wvQXhnbm9OeUYrQ005NXhnMGtCbk9iVVZCbWhpK3czL29RWGJtMnRzQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHphcmVvWTNTR0k4KzN6VXkwajBSMWtOWURpMUNHbGVKUFBjOEdIUGhzNGNnd3ZRZHJWUlF2RFVoQTljUXNhb05Zc0FlWklpZEJ6WUpZYXJUZjJ0Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyMTQyNDU1ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5NjQ3MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCQTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJBNi5qc29uIjogIntcImtleURhdGFcIjpcIkp0Z2Y3dnBWeUJGV08yR3lSMno2ekJMbUNDQUZUYnZYQXBFdXF3YnJaOVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY2MTc2NzMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg4MzEzOTY4MDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Chris-tech", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Chris tech" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Christopher",
  packname: process.env.PACK_NAME || "CHRIS-TECH",
  botname : process.env.BOT_NAME  || "christech",
  ownername:process.env.OWNER_NAME|| "Chris-tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "CHRIS"  ).toUpperCase(),



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
