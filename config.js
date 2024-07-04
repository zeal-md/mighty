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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626071177";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_59_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgMjksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICA4NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgNSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZzaVE1NVNha3NpaFk2dW8yRzR3MlQrSUtqY0pGWW80b1lrTW51YWNzTXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIms5VkVrZkZhVGhhV1NqX1doR28wMmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGY1ZWU3NzctMTFkZS00YWZiLWFkMjctNGVkYzg4MDFmMTIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDIzOSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NixcbiAgICAgIDIwMSxcbiAgICAgIDIyMCxcbiAgICAgIDIxNSxcbiAgICAgIDIwNSxcbiAgICAgIDE3OSxcbiAgICAgIDEwOCxcbiAgICAgIDQ1LFxuICAgICAgMzEsXG4gICAgICAxMDMsXG4gICAgICAzNCxcbiAgICAgIDMyLFxuICAgICAgNzksXG4gICAgICAxMzEsXG4gICAgICA3MSxcbiAgICAgIDg3LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDE0LFxuICAgICAgNDIsXG4gICAgICAxMixcbiAgICAgIDE3MyxcbiAgICAgIDEwNixcbiAgICAgIDI0LFxuICAgICAgMzgsXG4gICAgICAxODUsXG4gICAgICAxMTYsXG4gICAgICA5OSxcbiAgICAgIDIzLFxuICAgICAgMjI3LFxuICAgICAgMjQwLFxuICAgICAgMjA0LFxuICAgICAgMTYyLFxuICAgICAgMjcsXG4gICAgICAyMTQsXG4gICAgICA3OCxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIUE42QU1TMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI2MDcxMTc3OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ0hVSVwiLFxuICAgIFwibGlkXCI6IFwiMjE5NTQ2MzEzMDQ0MDM5OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTdy9ZUUZFTHVhbkxRR0dCd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidkN3YUlNNjhtV05TT1U4L0N3MTFQeGFnVEdQbkVJRDhTdnJJQVpDcGZBOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2eG11b2ZKM1pCd1A5blpNcGljSHVyRTlXZWE0a1lhLzRmZTdDVGxpT1RHcnU1eDkxOENZdmNodm5yVzJZN1N2OUVWLzQ4WENvdytSazREU00xVWNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkcTNKQTB5VTFsL3hXQmFHUk01Tjd6NVBrY0N1Z2RDQkFubjIzYm9CY05UREljVDhVTXJWbzFnSnNMakFkT3ZhdUdyaUhsY3NOK0lrY0pQL1lkZE1EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjYwNzExNzc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEyNjc4NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
