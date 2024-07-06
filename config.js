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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255 785 704 430";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_20_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYxLFxuICAgICAgICA1MixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZGVjNUa25BSlRLUjFibG4vSGI5N1pwcmpzdnNRSS82SCtDNjVrbGNjREU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Nzg1NzA0NDMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MUQ5Q0I1ODY5NjY0QUM3OUIwNjRFQjI4NTMyRjA3RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNTc2MTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3ODU3MDQ0MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGQzU0OTFDQzZEOTc2ODk2OEI0QTU3MzlBQzBDRDEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1NzYxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOY1pnUkpuQ1QtdTRnREhGRjIwdl93XCIsXG4gIFwicGhvbmVJZFwiOiBcImZhZjNkNzRlLTUyZmUtNDM2OS05MGRkLTJkNzIyZWZmMzZhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDUwLFxuICAgICAgMTQxLFxuICAgICAgNDUsXG4gICAgICA5LFxuICAgICAgMTUwLFxuICAgICAgODcsXG4gICAgICA2NSxcbiAgICAgIDIsXG4gICAgICA3MixcbiAgICAgIDE5MyxcbiAgICAgIDIsXG4gICAgICAyOCxcbiAgICAgIDIxMyxcbiAgICAgIDY3LFxuICAgICAgMjQwLFxuICAgICAgNTksXG4gICAgICAxMDksXG4gICAgICAzNyxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDc0LFxuICAgICAgMTE1LFxuICAgICAgOTcsXG4gICAgICAxMyxcbiAgICAgIDEwNixcbiAgICAgIDE2NixcbiAgICAgIDE5NCxcbiAgICAgIDM0LFxuICAgICAgMTg4LFxuICAgICAgMTc0LFxuICAgICAgNixcbiAgICAgIDk2LFxuICAgICAgMTgzLFxuICAgICAgNTMsXG4gICAgICAyMjMsXG4gICAgICAxNzgsXG4gICAgICA0MCxcbiAgICAgIDY4LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZERktQN1g3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODU3MDQ0MzA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLJg8OYxJDGl8aXIMi7xKbIusWByYbJhsmGXCIsXG4gICAgXCJsaWRcIjogXCIxMTY3ODMwMTM1MTk0MjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWFY4TmdERU1TWXBMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxCQzZnSS9iNFhZZGhJRkttMmxCOGoyV3RONVdLMDc2eDViVGdIUzV2bDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMVIrK3UrQ1JzVlh2RiszRlhzVitucUZzeGhXOW4xa2dHVzdtVlJubEFURkM4VlRCMSsrSkk5OXFxR2w1QmE2cGViWDdpbmUzbTNnSGh5YlNSS2x3Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTUNNRmxoTnR1N2dPRFRRNjdjeUIxc2dUT0c1d2k5VGxZVys4bXlSaGlHWk1LNG83UzR0cUFJejNNOWhUWFNHWFNpL3dvWllzZmdUQzd0VHdRSmQzRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg1NzA0NDMwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjU3NjA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzBuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMG4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDUHY1MzhRVEtWamxhNFRZQmJ0dU5sOWdTMWg4ZlNWUDhGQVN0T3VpYThNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5MTcwMTc0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5ODE1MDEyMjEyXCJ9Igp9"  // PUT your SESSION_ID 


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
