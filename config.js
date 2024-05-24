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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767437575";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 
7
global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_39_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwienowbnc2ZHFSbWFBazNTM0xvZDBYc0R5cEhNNGgvbXB5VWpTVVRKMFdRaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHJ0WGRIb19SNEdtNVFXVWhLbjJVUVwiLFxuICBcInBob25lSWRcIjogXCJkMDZhMTliYS1jNDllLTQwM2UtYTJmNy0xYzA1YmE1MTU3OGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxMDEsXG4gICAgICAyNDcsXG4gICAgICAyNixcbiAgICAgIDExNSxcbiAgICAgIDEzMCxcbiAgICAgIDYyLFxuICAgICAgMTc0LFxuICAgICAgMTE3LFxuICAgICAgMjQ0LFxuICAgICAgMjM0LFxuICAgICAgMjQ3LFxuICAgICAgMjUzLFxuICAgICAgOTIsXG4gICAgICAxNDcsXG4gICAgICA1OSxcbiAgICAgIDYyLFxuICAgICAgNjcsXG4gICAgICAxMjEsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAyNDUsXG4gICAgICA4NSxcbiAgICAgIDI0NyxcbiAgICAgIDE0OCxcbiAgICAgIDQ1LFxuICAgICAgMTA3LFxuICAgICAgMjUzLFxuICAgICAgMjMxLFxuICAgICAgNyxcbiAgICAgIDk3LFxuICAgICAgMjksXG4gICAgICAxNzIsXG4gICAgICAyMTAsXG4gICAgICA4NixcbiAgICAgIDEwMCxcbiAgICAgIDIzNSxcbiAgICAgIDE2NixcbiAgICAgIDk0LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZYN0VXTDExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NzQzNzU3NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZjvCdmazwnZma8J2ZmvCdmakg8J2ZifCdmZrwnZmo8J2ZqCDjg4RcIixcbiAgICBcImxpZFwiOiBcIjI2MTYxMTEwNTMwODc4Mzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01HSzRjTUNFSmlGdzdJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHZVS3hvYkNvNklXZGI1clJYWWZxOWE5KzJubVprSENVbW1uek9jeVZCOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyMTNocmdNeHBOYXNtTTMzU1pRQkRHaThJQm9zY1hneGY0ei9Hb1N1VE5FYlNWYml6Z0xGZGUzaUhqMWkzTXhicnBtUmptU1o0UmQydzVPS25nMk1CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5S3ZNcHRzTm91NGtmem53U1FtWDd5SDdFL2JRbjBEVE9nVnpLLzdVZHFsTCtlVi9uRTRpNDBQSkxnS2lTLzdmeWVURElTRmV1TmtucWxScUhEWmhEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NzQzNzU3NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NTY4NzMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVhjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2YXl6aUwrVEpWVXN0TitZYk85NWlGdlNyTWc4bmwxN0FqUnlhL08wZndJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3ODk3MDY4OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE0OTU0MzUyMTA0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
