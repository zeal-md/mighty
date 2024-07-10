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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237650564445";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697517505";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_49_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkMzTXZjTmZHUVJDTzJZUEZPeXgyZkViRW9RcjlUU1hLYlpVdG05ZVgvYm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxpN0p2T20wVGVxbjVLTVlOU1VXb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2NkZjdlMGMtNTQyZC00ZDYxLTljM2QtODEzNGFkZDM1MDU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDE1OCxcbiAgICAgIDI0NixcbiAgICAgIDExMSxcbiAgICAgIDEzNCxcbiAgICAgIDIwOCxcbiAgICAgIDEzMyxcbiAgICAgIDgwLFxuICAgICAgMTAxLFxuICAgICAgMjYsXG4gICAgICAyMjIsXG4gICAgICAxMDYsXG4gICAgICA5NCxcbiAgICAgIDU5LFxuICAgICAgNDAsXG4gICAgICAxMjMsXG4gICAgICAyNDMsXG4gICAgICAyMzIsXG4gICAgICAxMTgsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAyNDQsXG4gICAgICA3NCxcbiAgICAgIDI0NixcbiAgICAgIDIzNyxcbiAgICAgIDYxLFxuICAgICAgNDAsXG4gICAgICAxMTUsXG4gICAgICA0LFxuICAgICAgMTg1LFxuICAgICAgMzIsXG4gICAgICA0NCxcbiAgICAgIDE2MixcbiAgICAgIDIwMSxcbiAgICAgIDY2LFxuICAgICAgMTUxLFxuICAgICAgNjUsXG4gICAgICAxNzUsXG4gICAgICAyMjQsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxOEQxR1daM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njk3NTE3NTA1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTc2NzU5NzA1MDY4NzQ6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQW1pciDwn6W38J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09MMG9hNERFSmVadDdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib3kyNlV0YmF0Z0pISlJpZmxCOGxjRXBMeGN0YVZIeURRU21SQkYzWCszST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2T3d5cTY3M3REY3hJMm5XaE8rMUhNaWVocjJsZEFCcFZiSHpPMTFQZEJnZGhndEVLUFpaanRMcUkyMm43MEQzY3lTWVdCM3Y5dTlZNlJ1eHhGd0RqQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIOG9tejhjK3p3b0NoYTh6T09ucjJzOVlTWFppVzZyWHJCY3J2elBzL09SRVYxZDFkVDMxSkJIa2NyTklVd0dId3dMdjUxK1cwcllKZnpHYk1QNHpnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTc1MTc1MDU6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU2ODk4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU13VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXdVLmpzb24iOiAie1wia2V5RGF0YVwiOlwicERUZ1hZWWZhc3FZL3hEa2NUR290YmdJNlpHMGJWQUZSbGx3Y0g4SlMyWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDIzMzA5NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTA3NzQxMzY2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Prɪᴍo 🤖🖖",
  ownername:process.env.OWNER_NAME|| "Amirr 🥷🔥",


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
