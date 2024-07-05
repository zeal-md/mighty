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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+2540115105480]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_05_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieTRBUk8zalh4SktlWDYrRzlMd0dCbFlxNjVyZHkwYndyQktkdWhPdElYST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2RFZGZNNjNUMGFGbEF1dGdQVDI0d1wiLFxuICBcInBob25lSWRcIjogXCI0YWE3OTM5ZC1mYzE3LTQ2ZDMtOTRiMi05Mzc1N2UxZmFhMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICA3OCxcbiAgICAgIDEzOCxcbiAgICAgIDM0LFxuICAgICAgMzgsXG4gICAgICAxODksXG4gICAgICAxMjgsXG4gICAgICAxNzgsXG4gICAgICAxMDcsXG4gICAgICA5NyxcbiAgICAgIDQ5LFxuICAgICAgMTM4LFxuICAgICAgNTcsXG4gICAgICAxOTgsXG4gICAgICA0NSxcbiAgICAgIDE2NCxcbiAgICAgIDI1NCxcbiAgICAgIDIyLFxuICAgICAgMzAsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxNzksXG4gICAgICAyMzUsXG4gICAgICAyNDksXG4gICAgICAxNDIsXG4gICAgICA5OSxcbiAgICAgIDY0LFxuICAgICAgMTMyLFxuICAgICAgMTAzLFxuICAgICAgMTgzLFxuICAgICAgNzgsXG4gICAgICAyNixcbiAgICAgIDM5LFxuICAgICAgMTI5LFxuICAgICAgMjQ0LFxuICAgICAgMTk1LFxuICAgICAgMTE5LFxuICAgICAgNDMsXG4gICAgICAyNDgsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlNIODFITlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTEwNTQ4MDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM2NTE5OTczNDY2MTE5OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpTzU4QUJFTGo0b2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ1JxbVVRUm02SXBVSHdpMGF2T0dHYU5yR2xQRlVNWlJFYUx6Z2Q5THhoUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVUy9XZmcvVnplWmRjeXpPQ1hkU1pSN29qSTVabDFqcTlBeVo2UTllZ1lrZ2FUMVJ2UzY5RHUyWkZ4aS9zQSsxZnlpMjhKOVF6dTVqN0lLS1g3ektDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvRHJNc3NkWE56WTAyWEtvUVRTVTE1QTR1MkJHWmdXaERSeHhXNDhIVk0vY0tvVW03RnhTYjRBbHVYTEIzeHQyUTh2OHVjOC96SjNUUGJvUkNFeTdCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTUxMDU0ODA6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIyMDczMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "CashyD",


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
