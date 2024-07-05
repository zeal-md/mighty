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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_45_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJaTW9iazc5SStxMDF2K1RVMmdZMk1wRkdWQWllcWJNWEljZitzejZzTkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI5NTcyNTY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RTc1NjQzQzYwMEQ1REE5NTI2NTE0RjcxQzNEQzlDQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyMTIzNTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib0ZxcmVwbUJSdFcwSGxQX3hKbEFqd1wiLFxuICBcInBob25lSWRcIjogXCI4YzUyZmZmNi1lNWE5LTQzODQtOTFkNC0xMTJmM2Q3MzY1YWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTMxLFxuICAgICAgMTksXG4gICAgICAyNDUsXG4gICAgICAxNTEsXG4gICAgICAyMDYsXG4gICAgICA0MSxcbiAgICAgIDExLFxuICAgICAgMTk3LFxuICAgICAgODIsXG4gICAgICAxMDMsXG4gICAgICAxNzcsXG4gICAgICAzMyxcbiAgICAgIDIyOSxcbiAgICAgIDE1NyxcbiAgICAgIDE0MSxcbiAgICAgIDIxMCxcbiAgICAgIDQxLFxuICAgICAgNTEsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTUyLFxuICAgICAgMTI5LFxuICAgICAgMTczLFxuICAgICAgMjM4LFxuICAgICAgMjI0LFxuICAgICAgMjM0LFxuICAgICAgMTgzLFxuICAgICAgOSxcbiAgICAgIDIzMSxcbiAgICAgIDE5MixcbiAgICAgIDEwNyxcbiAgICAgIDY2LFxuICAgICAgMTc1LFxuICAgICAgMTA3LFxuICAgICAgMTUzLFxuICAgICAgMTkzLFxuICAgICAgMjQsXG4gICAgICAyMjgsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGOERNTjNEWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI5NTcyNTY1OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzcyMDI4Mzk3MTE4Mjc6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZjdXNzRkVQZTJvYlFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyK3FGZEticVhYZm9FcjVxU2VRVklXZUJvRUQxRWlVN1BHbGIvSUZYSGc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjY1dHdpT0VNRVlVb3lWQnp0ZFJQbkNSYXE5Q1JQM3NuTTNvL2ZJMEZzbGFjZWZKNmVwQ05EWkdxWnFNSjJVY0w2SCtLRTh6dDlHdk9JbUFvSWh0UUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRZL2VpZzQvaDhGaXowMlY1VmdoUnE5QTZNd2Y5Wm8ycDE5Mk1yWEloM2JMTjRZYW1LMHdSb3VPRUwrYXpJaUk5S1Z4aU9kVXlPOVB1OC95NENYTGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyOTU3MjU2NTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMTIzNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdzBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp3MC5qc29uIjogIntcImtleURhdGFcIjpcImVTM3pQZE5zUXFRR3R4U2doV09NV09vY2JYMkZhK3E0OTE5RUhuR1NEcEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwMDQyNTgxNCxcImN1cnJlbnRJbmRleFwiOjMxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDI0LDI1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "PAUL KE",


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
