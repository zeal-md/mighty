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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3014bc2b606aee8802202.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʀʜᴀᴍ-ᴍᴅ" 


global.devs = "923556669498" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923556669498";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_14_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZytTa1AxNTVvbkVJYjVJeG50dlpVZllKR08rWFRkek13UlZFSDNQak1mST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzM4YVQ5bkNRbGljcEJZUW1ES1NRQVwiLFxuICBcInBob25lSWRcIjogXCJkZDVhODQ3YS0yNjJjLTQ2YmEtYTg1OS00YzYxZGM2NmI2NjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgODAsXG4gICAgICAyNTAsXG4gICAgICAxOTksXG4gICAgICAxODcsXG4gICAgICAxMDMsXG4gICAgICAxNDksXG4gICAgICAxNTcsXG4gICAgICAzMSxcbiAgICAgIDE0NCxcbiAgICAgIDE3LFxuICAgICAgMTI5LFxuICAgICAgMjE5LFxuICAgICAgNzYsXG4gICAgICA3NCxcbiAgICAgIDExMCxcbiAgICAgIDIwNyxcbiAgICAgIDE3OCxcbiAgICAgIDgzLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDE1LFxuICAgICAgOTcsXG4gICAgICA5MixcbiAgICAgIDE3LFxuICAgICAgNzUsXG4gICAgICAxMTEsXG4gICAgICA4NixcbiAgICAgIDE0NSxcbiAgICAgIDgzLFxuICAgICAgMTIxLFxuICAgICAgMTg0LFxuICAgICAgMTcxLFxuICAgICAgMTc3LFxuICAgICAgMjMxLFxuICAgICAgMjA2LFxuICAgICAgMTc4LFxuICAgICAgMjQxLFxuICAgICAgMTA2LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZU44c0lCRUplVDliTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhRWlpwc0FDUjAwOWhjbGY1NCtrZ2VWdERUT2poa0szYmRqR2dxREkxV2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTY0djNmZmtxdDYyL3FTZ3pmNU1reUxlemdDRDJWTnhqMzFYR2ZTK3dGN1dUL2ZiRWFnOE9NaWRSV1FScXdZYUdyUjNLVTM3aXJRNFl1RkZOclllQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidlkrelk2Si8xVEdnK28zTWpGYWxGZmcvbXJkbWpVZFlxOXlRdU5TUEpiLzJpbEE2VjA4eG9jVllPZy9TTXlUelhYbEc0TllyWTRETjNKUlc4WEUrRFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM1NTY2Njk0OTg6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MjUxODYyNjAxMzM0ODo3OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLinZZNyoDhrYRBcmhhbdeg4piGw5fNnMOXXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM1NTY2Njk0OTg6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0ODY4NzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVwRC5qc29uIjogIntcImtleURhdGFcIjpcIkg5RTlpOUxBZ1hwOWw2ME1qTE03ekdyaHdLMWo0WFlWQTdUelRIZk8xRDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDA4NzE3MDQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcEUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYd1Jkc1pGMTlaVGZlSmJ2MnJxZWtaVHM3WVhjaVE2ZFQ1R0pVa1UxTDJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwODcxNzA0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQ4Njg2MzU1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "❖Mʀ᭄Arhamנ☆×͜×",
  ownername:process.env.OWNER_NAME|| "❖Mʀ᭄Arhamנ☆×͜×",


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
