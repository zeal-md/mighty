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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h" 


global.devs = "923474703858" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923474703858";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_26_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIOERrVStRT2xBdXRURGx6RnBDY1Z6NmNlMUNXRUVJMktCN3VkZC9NRGxFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDbnRpTkhOd1Q2YUFhbkxLdnI3dDNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0NDNlOTQ5LTI4YWItNGRlZi1hOTNhLTZmMWRlYjYzYTNhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDgxLFxuICAgICAgNzYsXG4gICAgICA0LFxuICAgICAgNzQsXG4gICAgICA3OSxcbiAgICAgIDE4LFxuICAgICAgMTUsXG4gICAgICAyMzgsXG4gICAgICAxMDEsXG4gICAgICAyMixcbiAgICAgIDExNixcbiAgICAgIDIwOCxcbiAgICAgIDYxLFxuICAgICAgMTMwLFxuICAgICAgMjQ5LFxuICAgICAgMjA4LFxuICAgICAgMTcwLFxuICAgICAgNjcsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTQyLFxuICAgICAgMTM4LFxuICAgICAgMTk2LFxuICAgICAgMjU1LFxuICAgICAgODUsXG4gICAgICAxNjcsXG4gICAgICA2OSxcbiAgICAgIDIyNyxcbiAgICAgIDE4LFxuICAgICAgODIsXG4gICAgICAxNDIsXG4gICAgICAxMTMsXG4gICAgICA3NyxcbiAgICAgIDEyNSxcbiAgICAgIDk0LFxuICAgICAgNTEsXG4gICAgICAxMzcsXG4gICAgICAyLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk3VjZHNzFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzgyODMwODQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIqXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuQk9TU1xcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcXG4qXFxuKlxcbipcIixcbiAgICBcImxpZFwiOiBcIjIxNDQwNTE4NjkwMDA3NDoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMnkrdlFDRU5HbXpyTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInc1Z1JsQ1U3a0Vqd2IzWkZUcEZDTnZWbEdnWWoyN2JUTlVPaCs5K0hlQ3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwielR1bmZHRVgyeVVDaWJNTzM4VzRQY1RrTDZ1VEJ2VzdhOHRObzIzRU1xWFMxOWVraUlsWjJRMTZXOHVLTnc0UVJ3SkltWnpJUGFGU2RyNVJaUDh0QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1FNRGN5NUoxOG96VnFOWGdKdElhVDZzak5PWXRYSWp1cHJwbWFHRVdiSmxFWkRoV2RLNTByTjRHOUllYy9BQnVaU0I3MjNBdisvaG5VNHhZMTJLQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDc4MjgzMDg0OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODUwMzg4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "*➻❥𓆩❥⋆⃝°°~ساحل~⋆⃝°°𓆪࿐➻❥*",
  packname: process.env.PACK_NAME || "923078283084",
  botname : process.env.BOT_NAME  || "SAHIL KING",
  ownername:process.env.OWNER_NAME|| "SAHIL",


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
