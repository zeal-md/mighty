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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙃𝙀𝙈𝙄-𝙈𝘿" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348063961342";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_53_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhWVDdJOHBuNXBIT2hlKzBFdWQyT29vMUtWdkdsRG43TEtrdGUxY0wvL2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNRcTl5bE5pU2RxVTVZdXJQQWxNUlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTQxZjUxY2EtZDNlNS00MGUyLWE4OTMtNjAwZGYxZmRjMjhkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDIzNCxcbiAgICAgIDExMixcbiAgICAgIDE3MixcbiAgICAgIDMxLFxuICAgICAgMjQwLFxuICAgICAgNCxcbiAgICAgIDE2MixcbiAgICAgIDE4LFxuICAgICAgMjA5LFxuICAgICAgNSxcbiAgICAgIDMyLFxuICAgICAgMjI2LFxuICAgICAgMTEsXG4gICAgICAyMDUsXG4gICAgICAxMTMsXG4gICAgICA1MCxcbiAgICAgIDg4LFxuICAgICAgMjIwLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDUyLFxuICAgICAgNjYsXG4gICAgICAzOCxcbiAgICAgIDM4LFxuICAgICAgMjQwLFxuICAgICAgMjQ2LFxuICAgICAgMjM4LFxuICAgICAgNjksXG4gICAgICAxNDQsXG4gICAgICAxMjIsXG4gICAgICAxNzMsXG4gICAgICAxMTYsXG4gICAgICAyMDgsXG4gICAgICA2MixcbiAgICAgIDE3OCxcbiAgICAgIDIxLFxuICAgICAgMjEsXG4gICAgICAxMzMsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tLZXdOQUdFS2YvMDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMmdPcnFxcm0waXJTRkNFTU1iU2pDWUJIYXpUQVdMVHhKWGpXaG9tQ0xSbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4WnV3cnBpOWJBQWZUaU1Udy9taFNqbkN5WXpWZkNUVGkxMkZ3MDZZN3ZCeHc0WlFTQmVCakMvZ3psSUxCV1RJODh2Q3VTMUQ1Si9oeVZyU2laODVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiSFBsRlhTVWdCV2JUYWJhYk5FejBVQWVERks1RDBwMGt3RGFaNklBeTVwT1pJNDliZ3JsOVZES3B1V1JoSm56NlVpcGNXMHE5Y1NpN0svWXlUNWhoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjM5NjEzNDI6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTY5NDUyOTIxMjY0OTo2NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjM5NjEzNDI6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNDA4MTVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙃𝙀𝙈𝙄-𝙈𝘿 』```", //
 
  author : process.env.PACK_AUTHER|| "𝙆𝙃𝙀𝙈𝙄🥷🏾",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙆𝙃𝙀𝙈𝙄-𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "𝙆𝙃𝙀𝙈𝙄",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙆𝙃𝙀𝙈𝙄"  ).toUpperCase(),



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
