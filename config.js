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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254718351815" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718351815";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254718351815,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_05_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzUWtvN3c4elFXejF3S3dvcVJrcGJqSklkY2xxQzZXeG1ZMGduSlF2d01zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMV1plY2tiLVNxR01SX2lpaXRMcmhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0NmFlZGFjLWM4MTYtNGYxOS1hNzc1LTdmZDZhOTZmMjNlOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDEwNixcbiAgICAgIDkzLFxuICAgICAgNDUsXG4gICAgICAyMCxcbiAgICAgIDIyNyxcbiAgICAgIDE4MyxcbiAgICAgIDcyLFxuICAgICAgMTU1LFxuICAgICAgMjMsXG4gICAgICAyNDksXG4gICAgICAzNCxcbiAgICAgIDE2MyxcbiAgICAgIDE0NCxcbiAgICAgIDIwMyxcbiAgICAgIDEwLFxuICAgICAgMTM3LFxuICAgICAgMTIsXG4gICAgICA5NCxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDg4LFxuICAgICAgNzMsXG4gICAgICAxMjMsXG4gICAgICAyMTAsXG4gICAgICAxNjUsXG4gICAgICA5MixcbiAgICAgIDg3LFxuICAgICAgMTI5LFxuICAgICAgOCxcbiAgICAgIDEzMixcbiAgICAgIDE1OCxcbiAgICAgIDUzLFxuICAgICAgMjIsXG4gICAgICAxOCxcbiAgICAgIDEwOCxcbiAgICAgIDEzMCxcbiAgICAgIDE3MixcbiAgICAgIDU4LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlQQjNFRjFUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTgzNTE4MTU6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMzAyMzY5OTMzNzI0OTo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV2w0OGNGRVBHWno3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVXU1NRM3dtMGUvZTAwWEZZbWdxWWdhYmQ3eHpvMnQ3M3dOOU9iZURrQ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieFRFRkVIcnZBMm9NN0JBVGdZTFVXeS8wNVh6N2xjU2dEYklva3djd2dCUnhjODlINmR6bDRxQkJNUFNnSWk0VUZKZHBUWnFuU3RPMldyZERZYUQ5Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0ZrcDRWc2pqRzkxd001MzhoSVFNaGJ1Z1dBK3krdjlhYXhCdzdGRWQ0OFQ2OTJYTyt5N3I0bG8vaHBLUnQ5MDlxR3dldHFSSFFUTFA2YktWbWVBQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE4MzUxODE1OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTYyMjkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFdzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEV3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUcUEzMzZJV3ZTMkR5VXJXODJ5bmYxbGtJWkFlbkVGOUwzY2JTYjZkK2ZVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTI3MDE4NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk2MjI5OTAzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "',",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Keensly",
  packname: process.env.PACK_NAME || "Keensly",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "keensly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "keensly"  ).toUpperCase(),



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
