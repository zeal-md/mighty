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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e548c60375272c01182ff.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348132770719";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132770719";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_37_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaWdHV1NGRDhqZm80bVJPUFNjVm9oU29GQysvUzFtQ1J2VWJ5Wk1TeWJMST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia3VSdm1ucHhTVzZOa2MxZEE2NWg2Z1wiLFxuICBcInBob25lSWRcIjogXCI3OWY1ZjAxYi0yYzUzLTRkNTktOGRmMC05OWRjM2JlNTA5NTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTIzLFxuICAgICAgMTIwLFxuICAgICAgMjI2LFxuICAgICAgMTU3LFxuICAgICAgMTYxLFxuICAgICAgMTU1LFxuICAgICAgMTg5LFxuICAgICAgMTE3LFxuICAgICAgMTYyLFxuICAgICAgODksXG4gICAgICAyMzQsXG4gICAgICAyNDQsXG4gICAgICAxNzEsXG4gICAgICAxMyxcbiAgICAgIDQwLFxuICAgICAgMTI4LFxuICAgICAgMTk0LFxuICAgICAgMjUsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxOTYsXG4gICAgICAxMDAsXG4gICAgICAxMTUsXG4gICAgICAyMDcsXG4gICAgICAxMTgsXG4gICAgICA4OSxcbiAgICAgIDE0NCxcbiAgICAgIDQyLFxuICAgICAgNjEsXG4gICAgICAxMjAsXG4gICAgICA1MSxcbiAgICAgIDE4NCxcbiAgICAgIDE5MCxcbiAgICAgIDUzLFxuICAgICAgMTQyLFxuICAgICAgMTQ0LFxuICAgICAgMTA0LFxuICAgICAgMTE4LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE5RUJURlA5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMyNzcwNzE5OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDk1NTI0MzkzMzc0OTo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVzdyWmdGRUszdTdiUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjUwL20vT01COUVVeEVMWk1IUXRmWG4yc0tRN2RueGk3S2lyb1BNYWJMM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1l4Vi9RbFpjR1hkVWw3MXJ2OUtyWE0raEpnOHRmTy9xcmt6WUZGVkpuU2FiMDBaT1dxazBpam4yQkNRc1k4QzdmNVhoMHo2dk1YZjF1VFpqZTF3REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0FNTUhOYTkrMUQxdFNjMjh2TVA5eGl2Uk41aVNxNzFvM3VEUEt0a0ZPdENKb3dLMm13ZFB6ZitWNkw2aXJtZnZJa2ErcXNYaUFaOGliTjNvM3ZMQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMjc3MDcxOTo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2NDYyNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OFFICIAL BOT",
  ownername:process.env.OWNER_NAME|| "OFFICIAL_KY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "OFFICIAL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b609d9045dc207b50c24c04316394ed7";
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
