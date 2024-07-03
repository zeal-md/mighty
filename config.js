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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0769207078";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_18_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUDV6VFQrUm9IZFYwVFNHZnZvb0Jpcy9Td3hMaGVKb1hRS0ZGOGdFU2NUTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOC1Wc2ltWkVSOWVzYlZNVUxIQkVDUVwiLFxuICBcInBob25lSWRcIjogXCIyZDUxNTA4My04OTFhLTQzYmUtYWQyNi0wY2ZlYmRhM2QyMDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjE3LFxuICAgICAgNDUsXG4gICAgICAyMzYsXG4gICAgICA3NixcbiAgICAgIDE5MixcbiAgICAgIDMsXG4gICAgICAxMTEsXG4gICAgICA2MixcbiAgICAgIDE1NixcbiAgICAgIDQ2LFxuICAgICAgMzUsXG4gICAgICA4MixcbiAgICAgIDM2LFxuICAgICAgMTcyLFxuICAgICAgMTMzLFxuICAgICAgMTI4LFxuICAgICAgMTM4LFxuICAgICAgMTM1LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDYzLFxuICAgICAgNzgsXG4gICAgICA1MCxcbiAgICAgIDEzNCxcbiAgICAgIDE3OCxcbiAgICAgIDI3LFxuICAgICAgMTY3LFxuICAgICAgMTM2LFxuICAgICAgNTIsXG4gICAgICAyMixcbiAgICAgIDcwLFxuICAgICAgNDMsXG4gICAgICAyMTYsXG4gICAgICAxNjMsXG4gICAgICAxODEsXG4gICAgICA1OSxcbiAgICAgIDIsXG4gICAgICAzMyxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMNE5COFdLWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY5MjA3MDc4OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjYxNDY1ODIwNDg5Njk6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGVWc2pBUTBxdVd0QVlZQ2lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJheXRlN2lyTjJpemRoMFdvcFdjQ2RqSUh2eFVzSWllQ2FNeUJ4SjRxUHlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRpVzBTOWdFRnVOZ0xpM0JyZzhpR21hTjFqRkI2TXZZMGVaMlBxWXl0M015NUJJSXo0cEZNaVJLeFFUTmFQbUluZjlocHROaFNCY3RDVDhCbHM4bEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkltZlNDa0dUc0J3dDkzblB0ZzFlNVcyc1h3Q05QOEczU203NWpPbGpSV2I3bXdhbGtQWFhsTkVCOHpJVjVTNHRqbUxISHlhQUxmc0FPLzI2Y09kNkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2OTIwNzA3ODozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMzA2ODBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
