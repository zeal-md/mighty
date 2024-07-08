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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_17_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoZTR2ZmNDeEtoVnlMcnprc0pKVHpRdld6NXY0d2dvcFVXVEZyMnFsR244PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1YTk1UDUwVFFkaWx6RkFucXhWRDh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI4NTNjMTI1LTVhY2QtNDZhZS04NmNhLWQ3ZGM1N2FjY2IyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICA4MSxcbiAgICAgIDI0OSxcbiAgICAgIDUsXG4gICAgICAyMjUsXG4gICAgICA5MSxcbiAgICAgIDQxLFxuICAgICAgMTEwLFxuICAgICAgMjE3LFxuICAgICAgMTAsXG4gICAgICAwLFxuICAgICAgMTA3LFxuICAgICAgMTEwLFxuICAgICAgMTkyLFxuICAgICAgODIsXG4gICAgICAyMCxcbiAgICAgIDIwNyxcbiAgICAgIDE4NSxcbiAgICAgIDIwNCxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDE2MSxcbiAgICAgIDE1MSxcbiAgICAgIDE3NCxcbiAgICAgIDE1MSxcbiAgICAgIDIzNixcbiAgICAgIDE3NCxcbiAgICAgIDExLFxuICAgICAgNDksXG4gICAgICA0NyxcbiAgICAgIDg1LFxuICAgICAgOTMsXG4gICAgICAxMjAsXG4gICAgICAxNDUsXG4gICAgICAxNzksXG4gICAgICAxOTgsXG4gICAgICAxMjgsXG4gICAgICAxNCxcbiAgICAgIDIyLFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFdCNEw4UENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTMxOTI1MTc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNzcyOTU5MjIwNTM1NDozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS09qZ01RbEtXdXRBWVlDQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhvdmtvZ1V5UE8vS3AyWFpuT0dGcU1IZFJwY2dNSE1EVWxuR1JMYWlFa1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS05vT01yejcvQWpNOWRHZFEvZzhyOHkxbWdzK1NEUllWZDgwWVBnZnd1d214azEvWTdRTjNyR2xyeXNTMXdLaVQxNXFiWkJKSWRqdWRMTnJ6dU4vQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRGw4aElOS09WWHFzejNsSWcvd0N0WkdkcjZSL1JiaXJFeUF6azlGb0xvdjliaHBsaFZKVXJFQkduK1RiTEpWc3FTVDRyQnY5b3NzSCtnRGFwaGNkQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1MzE5MjUxNzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MjMwNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRGVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlEZS5qc29uIjogIntcImtleURhdGFcIjpcIkIyWmh1WGVyR0h3b2habU4rak81U1V6Tk4xNjBlUG1ETW9zVTA2QXB4RWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjUyMjcyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
