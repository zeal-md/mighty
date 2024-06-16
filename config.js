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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_33_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMGxkN3RDMjNXZWV5b2pWUVB5RkdLT3c3M0NkaWRLQXM1MTJrWEx6MWJrST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicUJGLVFvSlRTb3lvTXViRk1aODJZQVwiLFxuICBcInBob25lSWRcIjogXCJmMmI2OWNiMC03MWM2LTQ2ZmItYmYwNy1hNTc1MGUyZThjMjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTg4LFxuICAgICAgMTY0LFxuICAgICAgNDYsXG4gICAgICAxMixcbiAgICAgIDE1MyxcbiAgICAgIDI0OCxcbiAgICAgIDE2NixcbiAgICAgIDM5LFxuICAgICAgNDIsXG4gICAgICAxMTYsXG4gICAgICAxODksXG4gICAgICAxNTksXG4gICAgICAxNjcsXG4gICAgICA4NCxcbiAgICAgIDIxLFxuICAgICAgMTA4LFxuICAgICAgMTUyLFxuICAgICAgNjAsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDIyNCxcbiAgICAgIDExNixcbiAgICAgIDE0MyxcbiAgICAgIDU0LFxuICAgICAgNTEsXG4gICAgICAyNTAsXG4gICAgICAyNTEsXG4gICAgICAyMzEsXG4gICAgICAxNSxcbiAgICAgIDY2LFxuICAgICAgMjYsXG4gICAgICAyMDEsXG4gICAgICAxOTUsXG4gICAgICAxNSxcbiAgICAgIDIxNyxcbiAgICAgIDEwMSxcbiAgICAgIDI4LFxuICAgICAgNzgsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUZaM0NTUFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQMWxxNEhFTFR2dTdNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiai9tS3pxck82a3ZiT3FXQkdVR2xmWkVVaU5NRUxISGNGV3pnbDc2UVNuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrMkZxMU1wS1paOUg3dFNjaTZqOTlBa2JhZm12NlFUcTdRcXN5L24zcTh3eGhvZ1ZsMFU2SGtQdFBRd3BkdlVKMi9sWGlwRlFiS0M5QS83WlNvZ25Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtdzZPTTJZUzFNalpmUWJ2ZXp6dkE5bWFKaWw2UFMwNmU5K0FzbUM4QitUM2UvMUpTNHpJRVVvQUhNVmZPWDhoS3ZrZ3NUdllVa21adkozL3V2dXpDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU0ODQwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ZaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1lpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiek5IZ21WU2xleENUaisvR1ZmWkh6N0FoeFRraUtkTERxd3Biblk2S0FZQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc1ODkyNjEwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMzI1MzM4MzdcIn0iCn0="  


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
