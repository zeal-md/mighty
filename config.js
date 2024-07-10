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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_23_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3htemVkaTZSRHdEL0lvTXpqVHpxaTdBSUhjUHRHTEZUUHRyUHVZMXNvTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMDIzNzM4NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1MkEyNTJDMjQyNTY3Qzg2RkU3NDNFQTQ0NDg5QzYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYzOTM5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDEwMjM3Mzg1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkZFQTg1QTVBOUExODY2NUQ4QUMwNUY1MUMyQjFCQzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjM5Mzk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImp6X2ZRNmxTU1JxS0ttNjdzcDJWTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWVlM2VlY2YtMzFmYi00YTViLTgyMzUtNmU1NmY0ZDcxYWY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgNzAsXG4gICAgICAxMzUsXG4gICAgICAxNDYsXG4gICAgICA5NixcbiAgICAgIDk0LFxuICAgICAgMjM5LFxuICAgICAgMTE1LFxuICAgICAgMTgyLFxuICAgICAgMTgwLFxuICAgICAgNjQsXG4gICAgICAyOCxcbiAgICAgIDEwMyxcbiAgICAgIDIwMCxcbiAgICAgIDIwLFxuICAgICAgMTkwLFxuICAgICAgODksXG4gICAgICAxMDYsXG4gICAgICAxMjksXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDI1NCxcbiAgICAgIDE5NixcbiAgICAgIDE4NSxcbiAgICAgIDU2LFxuICAgICAgMTQ1LFxuICAgICAgMTEzLFxuICAgICAgMTc2LFxuICAgICAgMTY5LFxuICAgICAgMTA2LFxuICAgICAgOCxcbiAgICAgIDE2NixcbiAgICAgIDEyMSxcbiAgICAgIDE2LFxuICAgICAgMTYxLFxuICAgICAgNjgsXG4gICAgICAyOSxcbiAgICAgIDE0NCxcbiAgICAgIDI0MCxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdDOEdEMUU3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMDIzNzM4NTg6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2Nzc4MzI2NjUyNTMzMzo1MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNV0FOQ0hBXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pMcEtNSEVKNi91N1FHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5eFF0VlZ3SG53VjI2WkRWM2VCRlcxUkVDcU14OHdQQW9IcFdLeVJHL2dFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFyMWFnM2x1RGtZZzlTejcwaTg4ZGtmZk1pbkh3dnVOcmpVeVowVWZVcjNqbGYxcTlJOGdiK0hJWTdTYW0ybmk3OXdsMzN3QlcreEJoR1VOdzNCeURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlDakJnL2YrU3haWW45bTA4eDh2SWwwVWdaeEUzbTZvRzFaZEU4ajRyUlNaSG5BKzB4VFcwSmw3S1J2cnk0UFVqOTY1bzQ2QkhOUHEwSkhJTVdzc2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMjM3Mzg1ODo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDIzNzM4NTg6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYzOTM5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR3blwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHduLmpzb24iOiAie1wia2V5RGF0YVwiOlwib3BjdnQwS3habDFweEdBMVZORFpOSTM5enNISVdpK09BOExhYThIS1dIMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTUzMDQ3OTc2LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDhdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYzOTM5NjQzNVwifSIKfQ=="  // PUT your SESSION_ID 


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
