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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349136427555";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_02_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJkSzRYWjRsY1kwN3ltTWswSUJSUmFYcDdZN2MwcUpGdzNaRnVuMTNzMVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRoRGlsX0M4UUtXTGRLUzN1YjUwSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJhMDE2OGUtODI3NC00NzI1LTkyODItOWRhY2Q4YTdjN2RhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgNDMsXG4gICAgICAxODYsXG4gICAgICAyMDcsXG4gICAgICAxMDgsXG4gICAgICAyMCxcbiAgICAgIDE4OSxcbiAgICAgIDQyLFxuICAgICAgODcsXG4gICAgICAxNjMsXG4gICAgICAxNDIsXG4gICAgICAyNTIsXG4gICAgICA0NSxcbiAgICAgIDE2MCxcbiAgICAgIDE2OCxcbiAgICAgIDIzOSxcbiAgICAgIDEwNSxcbiAgICAgIDEzOCxcbiAgICAgIDEyMixcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxOTcsXG4gICAgICAxMCxcbiAgICAgIDMwLFxuICAgICAgNjQsXG4gICAgICA3MyxcbiAgICAgIDg5LFxuICAgICAgMjQ3LFxuICAgICAgNjIsXG4gICAgICAxMTYsXG4gICAgICAyMDAsXG4gICAgICA0OCxcbiAgICAgIDMyLFxuICAgICAgNzksXG4gICAgICAxMzksXG4gICAgICAyMzIsXG4gICAgICAxMDAsXG4gICAgICAyMjYsXG4gICAgICAxOTEsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0c2RFozNDFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzY0Mjc1NTU6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMDUxODIwNzk0Njk1NjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYml2cllHRU5Ed3ViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJwY3hTTFV4YU1jbGpHZ1FyMEhFaC82TldqbmVSRTF5a3RVVlRsQ0MzeXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieVRSY2hCNGY0L1ZEbmx4RGlvTHR2RXZYQlhobG9PaHExc1JsUzM3RDBjV21uU24vZ3AzKzIvakZnNHFMdUNtU25nVmpmcitxcVZ4S2llVlVqYkJLQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidS84V3pYM1hna082eDZ0NHUwN0xQRDNnVDF0ckQ4WkM1djl1c0IzTmdsVkJnTzhKeXRlb0ZNRTdlSDRXdUE5RkNIakl0QjJrMlVIVmZ0Njg4MkdCQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNjQyNzU1NToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTI5NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOMzFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU4zMS5qc29uIjogIntcImtleURhdGFcIjpcIjFTd1NjTkRyK24xdjJvYnVYRFpMelJWSFBQWHlnRkZqVjB5N05YdnA2WHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyNDg4NzMxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjEyOTU0NzY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "NESTOR",
  ownername:process.env.OWNER_NAME|| "VENC",


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
