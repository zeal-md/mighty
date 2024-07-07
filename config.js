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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256704376077";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_41_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdlZk1JN2pVQ2ZibVp3eXo0Q0s2Qld6aVpUN3ZTaGxyd1dLbFREOEJjYWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtHbzByU0o3VFVHTXJMelpzSnp5TndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTI1MjlkMzctNTQxMS00NDc2LTg5MTEtMDU3ZmNmM2UwMzY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDg1LFxuICAgICAgMTg1LFxuICAgICAgMjE0LFxuICAgICAgMjgsXG4gICAgICAyMjcsXG4gICAgICA3NCxcbiAgICAgIDE3NyxcbiAgICAgIDI5LFxuICAgICAgMTk0LFxuICAgICAgMTQ4LFxuICAgICAgNDksXG4gICAgICAyMzEsXG4gICAgICA5OCxcbiAgICAgIDI1MyxcbiAgICAgIDE5MSxcbiAgICAgIDExNixcbiAgICAgIDE3OCxcbiAgICAgIDEzOCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDU1LFxuICAgICAgMTg4LFxuICAgICAgNTAsXG4gICAgICAxNDAsXG4gICAgICAxMjksXG4gICAgICAxOTgsXG4gICAgICAxNDQsXG4gICAgICAyOCxcbiAgICAgIDE4MyxcbiAgICAgIDgzLFxuICAgICAgODcsXG4gICAgICA4OSxcbiAgICAgIDE3NSxcbiAgICAgIDIyOSxcbiAgICAgIDIxLFxuICAgICAgMTE2LFxuICAgICAgMTA3LFxuICAgICAgMjMxLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaRTNaNVpYOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzg2MDYxMzk1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS0FCT0lcIixcbiAgICBcImxpZFwiOiBcIjE5NTMzODEzMzAxMzUyOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzOHJOTUVFSVR4cUxRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUk0M01oeFM3M29lRVlLSzhEcDQrWm9VaU40ckc3SGpyR2hPN214M1RUVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIOXJCOEJIMGV1bzJYVjl0TUtpRXRzWGdzVnBtalhNVTBlQytTcEVScDh3dThSeExRUkNjYVU0MGU1SEhiYnhHdFR5aEk1T0pDQmxTdHFaUDR3Y0dBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGSDlTSDl3cWZPTDNzZWhCZUk2V2tyVlFtb3c0dmF0M1ZTdC9Pcm4yQUVvK3kyak1IeFFDT3pOS0Y1MlBSRFdKL3c0OXdaSWVtMm9KZHo0Kzh0OWlnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3ODYwNjEzOTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMzNDQ3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhJS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSElLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGhnYWZYNUtCVDZMb25mTWUxUldDeUJ3eS9wUWdmTTlnMVJRaGdGWWxoYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQ4NTQyMjY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ronisha",


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
