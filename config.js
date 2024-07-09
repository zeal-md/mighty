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


global.devs = "233591856630" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233591856630";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidkpkU0tRYlhtejVqSitoMnArWlpuYkg5cVBEQUFOZHNrZ3BCbkhzSVg2QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmNSRHlLZTFRLVNDRHlBTUVXeXZsQVwiLFxuICBcInBob25lSWRcIjogXCJhZjFmNjA5MC1iOGI4LTQ1YjYtYWI5MS1mYWEyYjY4OWQ5OGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTAsXG4gICAgICAyMDMsXG4gICAgICAxMzIsXG4gICAgICAxMTYsXG4gICAgICAyMTAsXG4gICAgICAxMzIsXG4gICAgICAxMzQsXG4gICAgICA3MCxcbiAgICAgIDE5MCxcbiAgICAgIDksXG4gICAgICA5NCxcbiAgICAgIDExLFxuICAgICAgNDEsXG4gICAgICAxODcsXG4gICAgICAyNDQsXG4gICAgICAxMTEsXG4gICAgICAyMTcsXG4gICAgICAxMTMsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMjM1LFxuICAgICAgMTcxLFxuICAgICAgMTU4LFxuICAgICAgMjQ2LFxuICAgICAgMTMwLFxuICAgICAgNzMsXG4gICAgICAxNjAsXG4gICAgICAxMjQsXG4gICAgICAxMDgsXG4gICAgICA2NixcbiAgICAgIDE2OSxcbiAgICAgIDE1MyxcbiAgICAgIDI0NSxcbiAgICAgIDE1LFxuICAgICAgMzgsXG4gICAgICAxMjksXG4gICAgICAyNSxcbiAgICAgIDE3OCxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQ3TEtaTjVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTkxNTA2NzQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGUkVBS1lcIixcbiAgICBcImxpZFwiOiBcIjE3NzY4MzAzMTk2NTg4ODoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbVFvWVFNRU4yR3RMUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjk0WkpmOU8xaUhFcXB6YXBRb0hFMDI2cnhjR29JaXVzL0F3YWtSSDNpelE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGoyS1lVWXloUU94Yjd2Vkx6aFBUNy80SkdkMzJuai9NZUxYWW8yS05QeU9HcWd2WEI0WVFSWmRibkZLTXphQXRMRVNObDNDWnZaajc1UWlXU2pramc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVNiRnVDWStHem04ZnEySmJFbFhQV1dWUGhTOUxnSGRleW5zK1FRK1I3b2trenJuT0ZhMVdzNTZmeFNkT3NVZXQwaElVcU50bVF0RkJKYTA0MzA2amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk5MTUwNjc0OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MTc0NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMXpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwxei5qc29uIjogIntcImtleURhdGFcIjpcInlMUmFOQXNyTUljbXc3OVR1LzVXWFNKSzZENmZGOXBoTXBrYlJaNWRtMFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzIzMDE1NjkwNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwNDQwMjc1MjAzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "mcben",
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
