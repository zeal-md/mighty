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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_50_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMjdsOHhZVHAvRUhwT0xKSnh3Z3lVQjVjRnBWTVBIbXVmLzFTaEFIN0Jnbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTc2NzIwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBRTgyQzhGN0M2Q0E3NUY3NDE0NzIyMjBGNjM0RUFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODU2NzQ1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5N2wwUkU3dVNqS1ZPYVRESHZOYlB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY2MzE0YjFhLWY3ZTItNDg5YS04ZTY4LTQ0NjEzNTYwYmYzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICAxNTgsXG4gICAgICAyMjgsXG4gICAgICA3LFxuICAgICAgMzMsXG4gICAgICA2NyxcbiAgICAgIDEwNSxcbiAgICAgIDI1MSxcbiAgICAgIDEwNSxcbiAgICAgIDI1LFxuICAgICAgMTc2LFxuICAgICAgNTEsXG4gICAgICAxNCxcbiAgICAgIDE0NixcbiAgICAgIDE1MSxcbiAgICAgIDk5LFxuICAgICAgMTA3LFxuICAgICAgMzIsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICA0MixcbiAgICAgIDIxNyxcbiAgICAgIDE1MyxcbiAgICAgIDUwLFxuICAgICAgMjEzLFxuICAgICAgMTk0LFxuICAgICAgMTY5LFxuICAgICAgMTAzLFxuICAgICAgMTc0LFxuICAgICAgMTc1LFxuICAgICAgODksXG4gICAgICAxMDUsXG4gICAgICAyMzksXG4gICAgICAxNTgsXG4gICAgICA5MCxcbiAgICAgIDIwNyxcbiAgICAgIDgzLFxuICAgICAgMTAyLFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjVCQ04xUTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjQwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2OFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQMWxxNEhFSlNFdmJNR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiai9tS3pxck82a3ZiT3FXQkdVR2xmWkVVaU5NRUxISGNGV3pnbDc2UVNuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFNndWeTgzaHJ2NTFPS2xDMzhFdWJuSkxEd3JvU21lVjkybC9hTXJjVUVsME5VekRXYm1BUm9mVWRUMnJSeVBBNy9mS2dlSngrbVVQaGYrQ1Nod0hBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsaGYrM0lUUHNLNmhBWUZnU2QvU2s2Ujl1TFRBMEgrbDhBNXRraldPY2xnU2tNV1ZTeDlnY21RamljanZPUEp4T3FkSXdNSkJqVG1xYzU1T0lRQ09odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU2NzQ0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ZaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1lpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiek5IZ21WU2xleENUaisvR1ZmWkh6N0FoeFRraUtkTERxd3Biblk2S0FZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc1ODkyNjEwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMzI1MzM4MzdcIn0iCn0="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
