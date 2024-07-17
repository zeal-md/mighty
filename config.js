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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_53_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqVU1SdWJ3VHRBRW9kTHMrLzIzVlNrTjhQaXlKN3JzbDZTRVR1S3ErT0dZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0blA3Z3QtbVI5Q2xMYUJMckMxWkNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1M2NmNDVkLTFlOGMtNDFlYy05YmNhLWM4NTY0MzhmZWExY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMyxcbiAgICAgIDI1NSxcbiAgICAgIDQyLFxuICAgICAgMTA3LFxuICAgICAgNDksXG4gICAgICAxNDksXG4gICAgICA4MCxcbiAgICAgIDIyMixcbiAgICAgIDIyMCxcbiAgICAgIDE1OSxcbiAgICAgIDkzLFxuICAgICAgMjEyLFxuICAgICAgMjU0LFxuICAgICAgMTI4LFxuICAgICAgNDAsXG4gICAgICAxNzIsXG4gICAgICAxMzAsXG4gICAgICAxODIsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgOTYsXG4gICAgICAxMDksXG4gICAgICA4NSxcbiAgICAgIDEzMSxcbiAgICAgIDE0OCxcbiAgICAgIDIyOCxcbiAgICAgIDIxMyxcbiAgICAgIDQzLFxuICAgICAgMTUxLFxuICAgICAgMTYzLFxuICAgICAgMTE3LFxuICAgICAgODAsXG4gICAgICAxNTUsXG4gICAgICA3NixcbiAgICAgIDE0OSxcbiAgICAgIDE5OSxcbiAgICAgIDE3OSxcbiAgICAgIDE3MCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQxMjRXOVBQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMwNjkyNDE0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYXRhc2hhIE1vcmdhblwiLFxuICAgIFwibGlkXCI6IFwiNDczMzQ4ODQ5MTMzODE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ0MvSWNKRU92dDM3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRBNmYybFpaVUNwOExIcGN4WTU4ak1aRHF5MFRxSjYzSEs3K0xtSkt2MGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUFYxR29QWk04Z3lhQzU5c2dRaWlCMkRwc1RQRVN3QkxvSTVpSjZvZ2NZZkxQeE1XWWNBNmlpSkcrSHRHOUhka0JsbFc4d01sd3JFQm5HaUdjY2MwaEE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVdmZjFDM0VFMWVCRnNPSlYrMFR4cndCUUxWZkd2MFpzMUlkakFTem0vS2RFYlQ4SURMcWdoWlJvZHk4Sk9tcjNnMUxTTU1RcGpkczYvT2F2aDU0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMDY5MjQxNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMzUxODNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
