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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_33_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpbWo3a3pNZXRMOUVpT3NreTR0VDVmUHFaQS9mY2p3RDB2cUhvSGwyTXR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKQ3M3MUt4QVE0MmZET3RFVXVsT193XCIsXG4gIFwicGhvbmVJZFwiOiBcImZhMjcwM2ExLTU1NTEtNGU3MS04YTgxLWZkZDFhNzllYTc2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxMTMsXG4gICAgICAxMTAsXG4gICAgICAxMTQsXG4gICAgICAxNixcbiAgICAgIDUsXG4gICAgICAxMjQsXG4gICAgICAzOSxcbiAgICAgIDIyMCxcbiAgICAgIDE4NixcbiAgICAgIDg5LFxuICAgICAgODQsXG4gICAgICAxMDYsXG4gICAgICAxNjgsXG4gICAgICAxOTIsXG4gICAgICAzMyxcbiAgICAgIDI0MSxcbiAgICAgIDEzOCxcbiAgICAgIDE4OSxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDI0MixcbiAgICAgIDUwLFxuICAgICAgMjU0LFxuICAgICAgNzksXG4gICAgICA0OSxcbiAgICAgIDE5MixcbiAgICAgIDE5NCxcbiAgICAgIDM0LFxuICAgICAgMjA4LFxuICAgICAgMTI0LFxuICAgICAgMTIwLFxuICAgICAgNTMsXG4gICAgICAxMzMsXG4gICAgICAyNTUsXG4gICAgICA3NCxcbiAgICAgIDIyMSxcbiAgICAgIDEwNCxcbiAgICAgIDE5LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktSRllURFFIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyMDQxNTA4MDY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1OTQ4ODc2MzEyNzIxOjEzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfmIdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNmJsY0FGRVBqNTJyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNRRmF4YThrT0p5b2N1blg0ejUzNTRpbTYrYkJ0ZHdSaFRnQmk3V3JubmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwickszYVprZENnWTByVWMrRnovaThqeGxOampOcXo0Y2JmYU8rMGdsR0FaVW52cHlDcnhnd0dNbjRhSnI1cVZkL3NaNW9SQ3JURkh2eDlZYkwycnB6aXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWG9SVnJMSldxM2VXVXlSejF1NkxLYmdDbnQ3VDZ4Njl1M09NSWlPeS95T2lFdVk4ZUdJMGF5TXY4L1pHb1lMR1ZxTFdQWWpMNFNKdUZoMDkzcmJkaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjA0MTUwODA2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE1NDgxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5jQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmNBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHpQdVIyK3NLMTdTK1l0M2Fvbk95bVBOaWNpVHFGZ0Yza052dEh2TlVjMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDc2NzQyNjM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEwNDQ4Nzg3OTJcIn0iCn0="  // PUT your SESSION_ID 


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
