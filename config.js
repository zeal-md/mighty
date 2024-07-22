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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22373633513";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_16_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NSxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFhdm1DTzBGZ2pzNzF4YVVacVIxRnNsdnVCNGhoSERWRFJvU1d0YTlkN3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJMUU53RnhyVDEycFFILUMyck5JOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRhZDRkOTYtZGMzMS00ZTQ0LThjNDItZDgxZTBmODIwZGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDMsXG4gICAgICAyMjksXG4gICAgICAxMzEsXG4gICAgICA0OCxcbiAgICAgIDE3MyxcbiAgICAgIDY0LFxuICAgICAgMTUxLFxuICAgICAgOCxcbiAgICAgIDE1NCxcbiAgICAgIDIyNSxcbiAgICAgIDE2MCxcbiAgICAgIDEzOSxcbiAgICAgIDQ5LFxuICAgICAgOTIsXG4gICAgICAxMDIsXG4gICAgICAxMzgsXG4gICAgICA5MSxcbiAgICAgIDI1MyxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE3MSxcbiAgICAgIDIzNCxcbiAgICAgIDI0NyxcbiAgICAgIDE2NyxcbiAgICAgIDQ4LFxuICAgICAgMTY5LFxuICAgICAgMTIzLFxuICAgICAgMTcwLFxuICAgICAgMjAzLFxuICAgICAgMjM5LFxuICAgICAgMTI1LFxuICAgICAgNTMsXG4gICAgICAyMDgsXG4gICAgICAxOTUsXG4gICAgICAxMDksXG4gICAgICA2NCxcbiAgICAgIDEzMSxcbiAgICAgIDMxLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzQyOUxTOEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzczNjMzNTEzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDAyODcyMTY0Nzc2OTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BiVDBvSUJFUFdFOWJRR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibVNpUnRiOVMzVzRpQ0YybXRtbEVMTk5ZSmFVTnpOcDE5MkhLNEFlUWtIbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEc3hQdDN2aGd1TlFuR256elQ2VS94ZHZuYTJ6VGRobCs4ajEzTmx3NkdWU2JwY1N6b1hEQVQ5S1JOd0V3b3BaUXQ4K2ozTFZQN3VDYTg4REhXMmNDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiVzY1TDBmd2ZsNU9ZQVQ2ZVU3d0ZBeDVobkZtbThZaTQzcjF5b09TWU51b2dENW9TcytIcVV5akpoMlZVUlhFNVNYTTlFVm5iQ01UUHkzYVNESG1BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM3MzYzMzUxMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4MjIwMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "√",
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
