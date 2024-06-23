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


global.devs = "254702674258" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702674258";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254702674258";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_15_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvNVQyODVKV1ZPOHdsaDhycnczTFE4SHZIVUMwR0lpdTVsOGZWREJMYzhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEOFU0ODFkeFFWZXdQUlhOaUVpaWVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUxZjQxMDY2LTFkMjItNGY3Zi04Nzk2LTRhZGEwYmNiMjFiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDExMyxcbiAgICAgIDIwOCxcbiAgICAgIDEwMSxcbiAgICAgIDI1MixcbiAgICAgIDI2LFxuICAgICAgMTgzLFxuICAgICAgMjEwLFxuICAgICAgNzgsXG4gICAgICA4MSxcbiAgICAgIDc0LFxuICAgICAgOTYsXG4gICAgICAyNSxcbiAgICAgIDI2LFxuICAgICAgMTIsXG4gICAgICA5OSxcbiAgICAgIDgxLFxuICAgICAgMzEsXG4gICAgICA1MixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAyMTAsXG4gICAgICAxNjcsXG4gICAgICA1MixcbiAgICAgIDE0MCxcbiAgICAgIDI3LFxuICAgICAgMyxcbiAgICAgIDExMyxcbiAgICAgIDI0OCxcbiAgICAgIDIzNixcbiAgICAgIDIyLFxuICAgICAgMTIxLFxuICAgICAgMjQ2LFxuICAgICAgMjQ2LFxuICAgICAgMTc1LFxuICAgICAgMTA3LFxuICAgICAgMjU1LFxuICAgICAgMTQwLFxuICAgICAgMTU5LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpQREo3UlRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDI2NzQyNTg6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NzE3OTM3MjQxMzA3NDo1N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS2g2WmdDRU16TTRiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdzYWkxT2pUMFFMM2FSTjlCcXN1Yy90djRNaW5uVk1hRWttYXo1eFg4aEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUEExc2pNdFlHTVk1Wkdqa1NRSmRmKytoNjVoOE05akpEc3hHaGtocGs5L1BmTmo0alRaMWFKZ2FkSU5qOVdkcjNjMEdrc0RBWTB0NHBGKzZ0REdUQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRU5wRjZEck5FT1pvMTgwSXF2SlRxejVLU0cwOHpUSU13bGNZVmJ3VGl4WXBRSFJTTU9SbzNXRCtnMHBIYUR1ck5USlo5aXhIb29JZXBVaFZITmd0QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAyNjc0MjU4OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTY2NTQ0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
