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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_19_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2VXlHN0k5YnNQSDJDOTVFejZEdWl2SFhyVGFCd1Rlc3Z5U3UxSmtxNnNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaRjFlOW8tVVJwUzhlM09mcnY0bF9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImFkOGQ3MTQ5LThhYTEtNDEyMC1iYjNmLTE2ODNiYmFkMDkwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxOTksXG4gICAgICAyMzEsXG4gICAgICAxNjMsXG4gICAgICAzNyxcbiAgICAgIDk5LFxuICAgICAgMjA1LFxuICAgICAgMTQ4LFxuICAgICAgMTg3LFxuICAgICAgMjQ3LFxuICAgICAgMTI4LFxuICAgICAgMjQ2LFxuICAgICAgMTQxLFxuICAgICAgMjQ2LFxuICAgICAgMTI1LFxuICAgICAgMjUxLFxuICAgICAgNDAsXG4gICAgICAxODgsXG4gICAgICAzOSxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA3NyxcbiAgICAgIDU3LFxuICAgICAgMjM2LFxuICAgICAgMTI3LFxuICAgICAgMjE4LFxuICAgICAgMTU1LFxuICAgICAgMTA5LFxuICAgICAgMjMxLFxuICAgICAgMTIwLFxuICAgICAgMTc0LFxuICAgICAgMjEwLFxuICAgICAgNDgsXG4gICAgICAxOTUsXG4gICAgICAyMDcsXG4gICAgICAyMDQsXG4gICAgICAyMjMsXG4gICAgICAxMjMsXG4gICAgICAyMCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TFBSSzVHRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDEyMjI0Nzg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzNzA2MDA2NjU5MTAxOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hT3hkOEVFS2JJeDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQW9oNHdFbCtaM2NMVm13SjVsSUd1bkpFVEMvQ1ExcTQ2UmNJNkFEMFZHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5WjE3dTRmMFNoTGc5L1BMamFTSVQ1YkhIZVdzWkI0Y2JUa0NmK3hTYnkvSWpsVXg3SjVkVnpZSDFyZ3BReFdzUzRRZzUrVkJQT2NiaDB1U2R6dndBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5MlJUa1hlSGpRVmIzL3Z1WXFCVG5xNlZibEUrL2h3dDlHakxNalQxdWpFWFp3WlhFWW5wak1UaDllYzkyY2VyT2FwejRnZ0c1dUhWcHJFdGFMb2lCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMTIyMjQ3ODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgzNzE2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURPb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRE9vLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkc0cGtSK2ppMnpjMHB1cHE3b2x4cGNvb1M3d2VqRkg4WnIwaHdOeDRWST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjc0MTAzNjU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MzcxNjkzMzdcIn0iCn0="  // PUT your SESSION_ID 


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
