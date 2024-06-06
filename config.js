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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347061153096";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_45_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWcyU2pSSk5Hc3JlVjVCMytlL3VlaEhtT2FEODNrd3lwQ2ZqK2srcXpCMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWE1Kc2lTSHFSQ2ludk5TSjluRmg4d1wiLFxuICBcInBob25lSWRcIjogXCIzM2Q2NjIwNi1iMDE1LTRmNzAtODM1OC1lNjZhNTc0NjI2NmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjE4LFxuICAgICAgMTIyLFxuICAgICAgOTUsXG4gICAgICAyMDEsXG4gICAgICAyMTAsXG4gICAgICAxNzIsXG4gICAgICAzOCxcbiAgICAgIDI0OSxcbiAgICAgIDE0MSxcbiAgICAgIDYzLFxuICAgICAgMTg1LFxuICAgICAgMjIsXG4gICAgICAxOTIsXG4gICAgICAxNzQsXG4gICAgICA4OCxcbiAgICAgIDYwLFxuICAgICAgMjAzLFxuICAgICAgMjEyLFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDIyNCxcbiAgICAgIDEyMCxcbiAgICAgIDExMCxcbiAgICAgIDIxNCxcbiAgICAgIDYxLFxuICAgICAgMjQwLFxuICAgICAgMTcyLFxuICAgICAgNDYsXG4gICAgICAyMDcsXG4gICAgICA4OCxcbiAgICAgIDIzOSxcbiAgICAgIDIwNCxcbiAgICAgIDIxMSxcbiAgICAgIDE1MyxcbiAgICAgIDEzNCxcbiAgICAgIDE1OSxcbiAgICAgIDE0LFxuICAgICAgMTM4LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxKQ0xYSzc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYxMTUzMDk2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcm9tb3RlciBGYWl0aFwiLFxuICAgIFwibGlkXCI6IFwiMjc2MDQyMjQ2MTAzMTc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNy8vdEVERU1lSGlMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNEdmxFV1ZBYTZhRXFFY1lvTGVZRkI5dnpTNHJzcXZwUzI1R0hBY1FreTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieU1tMmtaZ0pFbUkwUFd0MHhPb2Z4NHJqTmpueGlIb2h5STF5Z1JIS0g2bDBRSkVYOWZZbUE3cHhQQ0JHRWdzS1lWT3VPSm1pWFBXeWEybGpyN1d0QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMGhhdHUrV1h1VmZjQ3ZROHFhWWtQSG5CTFlwZHFKYW9hMUlXWGVCaWFaQkJ0UGcxYU96ZGlIVzV5Sy9KZVdMcFp3dVlRRHZXUmkrbmVNcndDRlphQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MTE1MzA5NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzY5OTUzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
