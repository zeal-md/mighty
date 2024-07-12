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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_17_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVJMmEvRkU4RnFnZGo4MGpIOE05M1M2OWYyRmVJS0gyWVUzcjZmL080SXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtHTk5VU1RIU19LVFNWOURWU2Q5akFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjM5N2M1ODAtMTgxZi00Nzg1LWI4MDUtY2Q2Y2VhZjM3ZDkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgNDcsXG4gICAgICA2OCxcbiAgICAgIDkwLFxuICAgICAgNTcsXG4gICAgICAyNTUsXG4gICAgICAyMzYsXG4gICAgICAxMixcbiAgICAgIDgxLFxuICAgICAgMTExLFxuICAgICAgMTgyLFxuICAgICAgNCxcbiAgICAgIDIwMixcbiAgICAgIDE5MyxcbiAgICAgIDk0LFxuICAgICAgMTg2LFxuICAgICAgODUsXG4gICAgICAxMzAsXG4gICAgICAxNzYsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDE4NSxcbiAgICAgIDEyNyxcbiAgICAgIDIyNCxcbiAgICAgIDQ2LFxuICAgICAgMTk5LFxuICAgICAgMTUzLFxuICAgICAgMTE4LFxuICAgICAgMTI1LFxuICAgICAgMTI3LFxuICAgICAgMTMxLFxuICAgICAgMTY4LFxuICAgICAgMjQ1LFxuICAgICAgMjAwLFxuICAgICAgMTIsXG4gICAgICA5OCxcbiAgICAgIDIwNyxcbiAgICAgIDExOCxcbiAgICAgIDEzNCxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6MjVaUUdFUGU2eHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEUrR3R4dW1HL1B6QVB3TlZZa0FHUXc5MitYTGpHbE9NVnVTU2tjbVl4TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwWVg4SXRkSlQ3VGxGZlNlN1dSdzhOY0RkL0ljZlRQU1FKeXNLMkIrZ1lzMlNmME4zYXlTTWZscUNWSDVIWk1yeTgzZWcyckIxcldJU041bmhGSXRqZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5bEZnOXdTazhLT1VCYnE1K2FzbEw2dVhXQ3JIWUxBQWZjdk1QazQvRzUwWmhJOXZpaDI2aTdGVG5KUkxmWkhmNTlJVFpqQkNHR1dCSFJiMlNNNkFCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU1MjMwMzc2ODoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIxMjc3MTkyOTIxMzM5OjE3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTUyMzAzNzY4OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODE5MDY2XG59Igp9"  // PUT your SESSION_ID 


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
