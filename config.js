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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_07_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMzLFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInUySk9xNXFZR01WSXJxaTM3c3NEcXM2YUQ3QTJsR05kRUJzaFFISk1tM0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllEeDdLNzBLUVV5aGc3YUtTSjdZTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzJiYjliZTctOTYxZi00ZGYxLTlkMzEtNTMwZGY0MGE2MTNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTA3LFxuICAgICAgMjMsXG4gICAgICAxNDEsXG4gICAgICAxMTksXG4gICAgICAxNjAsXG4gICAgICA3MyxcbiAgICAgIDIxMixcbiAgICAgIDIxNCxcbiAgICAgIDEyMixcbiAgICAgIDc1LFxuICAgICAgMTU1LFxuICAgICAgMjE3LFxuICAgICAgMTgxLFxuICAgICAgNjEsXG4gICAgICAxNDgsXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICAyMTgsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMjcsXG4gICAgICAyMDQsXG4gICAgICAxMDQsXG4gICAgICAyOCxcbiAgICAgIDU1LFxuICAgICAgODMsXG4gICAgICAzMSxcbiAgICAgIDksXG4gICAgICA3OSxcbiAgICAgIDkzLFxuICAgICAgNTcsXG4gICAgICA1LFxuICAgICAgMTI5LFxuICAgICAgMTI4LFxuICAgICAgMTU5LFxuICAgICAgMTU2LFxuICAgICAgMTAxLFxuICAgICAgMTQ1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTJROUpUWFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQMWxxNEhFSTdIdTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiai9tS3pxck82a3ZiT3FXQkdVR2xmWkVVaU5NRUxISGNGV3pnbDc2UVNuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJldjdWSjhsSGJoQnVlK2Mrbk9tZThyS0tBMU8xekUyMDlxcmJVSFJIZnl4Z1ArOExNR2xYTjgvNkZzUndpSTc5WUdQNzdHR25iTjVVZTNSUXd4emtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6UTJMTHlYZ0RKVUFxbVhLWkpZdFhnZ0xTa1BwSFJZUmFvUWJHaGxiRm9hczVzN25xQVhEaWkrNjQvdE44aUVKM3FUVWZyYnBwMHBia29QNlpZb2doUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU0MzI1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ZaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1lpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiek5IZ21WU2xleENUaisvR1ZmWkh6N0FoeFRraUtkTERxd3Biblk2S0FZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc1ODkyNjEwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMzI1MzM4MzdcIn0iCn0="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
