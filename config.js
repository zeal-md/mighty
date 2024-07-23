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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22367542669";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_34_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSTHNWZXlkM2dUWDJIeklDaDlOQnlqTzcvMU5hQUhBYTQwNXZtNXBnZ0pjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSeHdNcVFUUVJmV0hicmo2eEE5RHpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmNjhmOWRhLTVjMTMtNDkzMy04NmRkLTViZTQ4NzZhMjE0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDI0NixcbiAgICAgIDEwLFxuICAgICAgNTAsXG4gICAgICA4OSxcbiAgICAgIDEzOSxcbiAgICAgIDMsXG4gICAgICAyMDMsXG4gICAgICAxOTUsXG4gICAgICA5NCxcbiAgICAgIDIwMSxcbiAgICAgIDE1OSxcbiAgICAgIDIxOCxcbiAgICAgIDE3NSxcbiAgICAgIDUwLFxuICAgICAgNzIsXG4gICAgICAzOSxcbiAgICAgIDAsXG4gICAgICAzNSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDksXG4gICAgICAyMDIsXG4gICAgICA3LFxuICAgICAgMTE2LFxuICAgICAgMTQ4LFxuICAgICAgNCxcbiAgICAgIDQ1LFxuICAgICAgNzYsXG4gICAgICA3MCxcbiAgICAgIDE3LFxuICAgICAgMTc2LFxuICAgICAgMjM0LFxuICAgICAgMzgsXG4gICAgICAyMTMsXG4gICAgICAxNzcsXG4gICAgICAyLFxuICAgICAgMTIxLFxuICAgICAgMTAwLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJBTTlESjFWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM2NzU0MjY2OToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIzNzU5MzU3MjI3MjUyOjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltUjlMRUJFTHlCL2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjRRcjBXZkQwc1psQnRJMjZ0MTBOQ1NpUTZoUkxsck5PSXNvRWVvb3dnTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJK1ZhYlpGamVkR0pPWE9ESUFmTlZvR2RDMm8yUm9HTCtVdmhad1FoMmE4MDFLNXJldkIwT3U1WlRZYTMxOWd2UnhhajFkRlk3d0NZalVrQ0UvaG9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjTlZNanhPczc2RmpSSkZ5R2FqWUpPSFo3dDZpQXpWejcreE9VeTZGZVo2bFBlYW9MSFdOVVhYSEFiSjZNVmRPMmlwaG5jYTdOUExFZ0FZQ3hkUHZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM2NzU0MjY2OToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTI4MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMUHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxQcS5qc29uIjogIntcImtleURhdGFcIjpcIkcvd2pYa2FuWTNOVDZUcEhKN0p2NVRtaURlZGYyamhxOGRJamZ0Y3A2alk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczMDk4NjMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MjE4ODk0MjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "✪𝒖𝒔𝒎𝒂𝒏𝒆 ×᷼×🕸",


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
