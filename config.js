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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_50_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoNFM4dFdyNXlYOTdqVnlXMzVjMW1zYmJCQWdza0kwT3ZUNHpMVHdUdFJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMTjZ6LWluNFRVdU80Z0VjMXdiOENRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5OGQ4NjIyLWJkOGUtNDE0OS1hYWZkLTVmZDRiYmRjNWVjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDEwMyxcbiAgICAgIDE2NSxcbiAgICAgIDEzMixcbiAgICAgIDcwLFxuICAgICAgNTksXG4gICAgICA1NixcbiAgICAgIDEwMCxcbiAgICAgIDExMixcbiAgICAgIDEyOSxcbiAgICAgIDE0MCxcbiAgICAgIDY1LFxuICAgICAgNzgsXG4gICAgICAxMTQsXG4gICAgICA2MSxcbiAgICAgIDE1MixcbiAgICAgIDk1LFxuICAgICAgMSxcbiAgICAgIDMsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMjA0LFxuICAgICAgODAsXG4gICAgICAyMjgsXG4gICAgICAxNTYsXG4gICAgICA5OCxcbiAgICAgIDEwNCxcbiAgICAgIDkxLFxuICAgICAgODEsXG4gICAgICAyNDUsXG4gICAgICAxOTksXG4gICAgICAzNSxcbiAgICAgIDE0NCxcbiAgICAgIDE5NixcbiAgICAgIDEzLFxuICAgICAgMTUsXG4gICAgICA4NyxcbiAgICAgIDI1MyxcbiAgICAgIDE5NSxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQzNjM5TEFUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzYwNjI5NzU6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODMzMTg0MDQ1ODk1MDo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV3l4YXNFRU9TTWhiUUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS3JudTZ3czhkNE1hTjJpT0lFUmt0L3dLOVZ4MVBVbXZnbDZYRXdXTm1NdGZ2RmIrOTZrUitycEYzS1ZIMmpMNk13QmtIaVZvVDFGLzBJNnViOVJURFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNStIc0xDNTlxc1FwV0FlV0ppL1NValRxNFpQcXZTZ01JNHZLRHBqdDNhcUxTY2lxMkpQdk5KR0hWNWxlcmhzU3Q0SVY2NzF4WjZrQjhQbUM5bmxPRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM2MDYyOTc1OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc0ODE5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxZdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFl1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmRSRDRka2s3NXJIZjZ3Vi9Tb29SK3lKUWpDYlpMT0NKSk1sM01XS2QyQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MDU2Mjc3LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTY5MzY1MTIxNVwifSIKfQ=="  // PUT your SESSION_ID 


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
 

// ========================= [ Enable in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
