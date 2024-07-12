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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348027143251";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_43_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOUHhUQTYzaXphSi9TaGY3aXRIcjd4MWNuU0RaQmI1UjR5c1lUOWgwV0FzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjcxNDMyNTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJEOUJDMjMxMzhDODJGRTNBRTJDMDVGRUU1NUUyNjdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgxNjk3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4UG1hclJ0dlIweWpUVHNqdGhkMGdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5Mjg2YjQ3LWRiYTUtNGI5ZS04NWIzLWRiOTY0MjNiM2ZmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMjMzLFxuICAgICAgNixcbiAgICAgIDExNCxcbiAgICAgIDkzLFxuICAgICAgMTkwLFxuICAgICAgMTAzLFxuICAgICAgMTMsXG4gICAgICAxNTMsXG4gICAgICAyMTAsXG4gICAgICAyMjMsXG4gICAgICAyMTYsXG4gICAgICA4NSxcbiAgICAgIDE4LFxuICAgICAgNTMsXG4gICAgICAxODksXG4gICAgICAxNzMsXG4gICAgICAxNzIsXG4gICAgICAxNDEsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDIyMSxcbiAgICAgIDE5MyxcbiAgICAgIDQyLFxuICAgICAgNDQsXG4gICAgICAzMixcbiAgICAgIDg5LFxuICAgICAgMTkzLFxuICAgICAgMjE1LFxuICAgICAgMjMsXG4gICAgICA4MyxcbiAgICAgIDE5MixcbiAgICAgIDg3LFxuICAgICAgNDUsXG4gICAgICAyMDgsXG4gICAgICAxNCxcbiAgICAgIDcxLFxuICAgICAgNDEsXG4gICAgICAxOTcsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVhUR1RESlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjcxNDMyNTE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1lc3NpZnVsXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0MTk2NjczNjE4NzA6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKS21pWVFHRU1tcXhyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNXellNMUFmeUR2eGoxMVZlWFFlUVU4MlN1dFRScldsWDZVQVFKRDhlQVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzZoemxScG85S0NiOGRiVlR6aHVOczBsVlhQV1Y2L2xlQ3hxb1NzaHF2MmROWTFHVUFpODNhdjczVGxGcDNXdXg2aE5VQkdhSVMrMDY0aVlwaTdqQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWGVXcFlpT1Nva3VoVHd2TVZHQUhVU1Z1eitBQ1VQMjBMWmdLQXJZVjAxMnhpMWhPYVNVelROcXh2eHhQS2tKUmtlQm10UWJrODladDdOUERuNytXQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyNzE0MzI1MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MTY5NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd1ai5qc29uIjogIntcImtleURhdGFcIjpcImo5Q09RQ1N0LzZjQUQxNys4UGkvVktSODdRNVhHMERsNkhkZWVkVzZzM0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYxOTE1MzY4MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
