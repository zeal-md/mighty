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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "252684594173";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252684594173";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_32_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKSWdjRzVVVnpMY1pURDFZdm5iQVhoTURUdHpoV1FBMFA4cFRFaVhVTTlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxeFhGbVotS1NPT0NGSVlUNVE3SDR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5OGUzNjk2LWYyMzgtNGZkOC1hMzcxLWVmNjE4ZTdhNzc0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAyNDgsXG4gICAgICAxMDQsXG4gICAgICA3LFxuICAgICAgMTk5LFxuICAgICAgMTUxLFxuICAgICAgMTAwLFxuICAgICAgMTM3LFxuICAgICAgMjAzLFxuICAgICAgMjM4LFxuICAgICAgMTcyLFxuICAgICAgMTA1LFxuICAgICAgMTU0LFxuICAgICAgMTIxLFxuICAgICAgNTQsXG4gICAgICAyMjMsXG4gICAgICAxMTcsXG4gICAgICAyMTUsXG4gICAgICA5NSxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMjI5LFxuICAgICAgMTMwLFxuICAgICAgMTMyLFxuICAgICAgMjYsXG4gICAgICAxNzMsXG4gICAgICA3MixcbiAgICAgIDE0MSxcbiAgICAgIDcsXG4gICAgICAxMzAsXG4gICAgICAxNDUsXG4gICAgICAyMTEsXG4gICAgICAxNzYsXG4gICAgICAxODUsXG4gICAgICAxNTMsXG4gICAgICAxNjEsXG4gICAgICAxMzMsXG4gICAgICA0NCxcbiAgICAgIDE5MCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWFE5MUc1NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjg0NTk0MTczOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0hJSVEgQUJESVJBSE1BTlwiLFxuICAgIFwibGlkXCI6IFwiMTMzMzQ2NDUzNjQzMzQwOjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEUTZUSVEvc3p2dEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibS8xeTd4eUcyaXJKZktHMHNqQU1WdkRJaEJhZkE1WkZjMkJRQ2dXQStFST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNWEJ4OXNiY25IRUNJekRNQWNieVF1TE9FYTg2NllFRkl3NkxvcnF6R01xMzlLajN6Rkw5ckhFYkZmMmNDRGZVaGh6MzlzVjlHTm1ldG9xcFZGSkVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0YkwrdXBFcHFiSlEzcWNBa3lpSjlLNW5xdnR5U1owczk2L3hxNmlvRmVyditSSzFZN25xWElrOXZIRkg4NTM4QXZhSTVWUk5NK0t4S1VkTUdwMlVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2ODQ1OTQxNzM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTMxMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFET0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURPTC5qc29uIjogIntcImtleURhdGFcIjpcIlJtK0x4eHNvWGwzQjAzTGlYRGpyMmd3UEQvam9oZWlGOFF0TmtOWVlHOHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2NTg4MjY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SHIQ ABDIRAHMAN",


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
