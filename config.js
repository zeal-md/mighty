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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_22_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakNyNmo5dEdxRzFMZStFZnpYRlk5aVBtME1qWWRsd3FoTUxJb0xUS2hQZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTQ3Nzg5OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMzMjczNEY0QjNCNDQxQTI4N0E0NUIyNDY5RDc1NTk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU1MzMyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5NDc3ODk5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODI4MjcyRUFGNDdDNDgyNThFQTI4NDA0QkYyOEIxNDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTUzMzIzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJEbGptNWE0UU4ybTFYNVNLdGh6ZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDMyODNjMjEtZjEyYS00MTk4LTkwODUtMzRhZWQ4Mjc1YmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDEwMCxcbiAgICAgIDIyOCxcbiAgICAgIDIyNCxcbiAgICAgIDE5NixcbiAgICAgIDEyOCxcbiAgICAgIDQ5LFxuICAgICAgNDcsXG4gICAgICAxMCxcbiAgICAgIDIyMCxcbiAgICAgIDEzNCxcbiAgICAgIDkxLFxuICAgICAgOTQsXG4gICAgICA0MyxcbiAgICAgIDQ1LFxuICAgICAgMTc2LFxuICAgICAgMTU4LFxuICAgICAgMjQ1LFxuICAgICAgMjIxLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMjMwLFxuICAgICAgMjQ1LFxuICAgICAgMjI5LFxuICAgICAgMzgsXG4gICAgICAyMTcsXG4gICAgICAxMDgsXG4gICAgICAxMixcbiAgICAgIDI1MyxcbiAgICAgIDE2MCxcbiAgICAgIDMsXG4gICAgICAyMzUsXG4gICAgICAxOTYsXG4gICAgICA3OSxcbiAgICAgIDY0LFxuICAgICAgMTYsXG4gICAgICAyNDIsXG4gICAgICAyMTcsXG4gICAgICA3NyxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKQUtZUUoyRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk0Nzc4OTkwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmFsb2NoXCIsXG4gICAgXCJsaWRcIjogXCIxMTA1ODI5NzU5NzE0MDc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJSMS9JRkVPV013cklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRUlBuYlVkOWd3eVV1dy9venJzZjkya28xMXJRR0hZUHZlM2xTK2pKeUhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF4QWV6TFFld3dLYXRxTUE2dFM0MGE1ejR0Q2h2U3lGK3pQcnFEc0UrNTdlcitUNGpWU3ZTTDFPVVZDR2VuNTdxOXRzVXl5cGFEL2NpWis4YkdQZkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBMN3NXcDdSWHlJeFBKTDlnQ3p1bG5heW85L0FNNjdpVCtmM3c4Nk9ka1BCU284VVNSSnhyRmRMY29DTWc4T0JaQkx5ZDIzb1JCVzlqQVQwU2RpZ2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5NDc3ODk5MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1NTMzMjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJd1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3VS5qc29uIjogIntcImtleURhdGFcIjpcIm9GbkJwQkV6dVhCK2FPTWJUSWRRWHBNZTB2ZUlSQ0MxQ2xuRG9WeUI5Wnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4MjY4MDMxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjU0OTU0NTQzOFwifSIKfQ="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BALOCH",
  packname: process.env.PACK_NAME || "SULTAN BALOCH",
  botname : process.env.BOT_NAME  || "sultan-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SULTAN"  ).toUpperCase(),



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
