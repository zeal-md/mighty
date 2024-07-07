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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_26_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlgzUXVCM1QvbWkyU1BaWFJKbFpLRVFKZlhJVmFkcWducHlmem8rOTg4TGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDExNDA2MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4NEM5RUZDMzNEMTkzOUYxNEE4ODA5NzlCNUMwQTAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM0Nzk2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoTzFaN1Y4Y1ExaVNuOHpwZi05Wjd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2ZTZkNWQ1LTBiMmQtNDMwYy1hZjk2LWI4NjI3YWI1NTljY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxNTAsXG4gICAgICAxMTMsXG4gICAgICAxNTMsXG4gICAgICA4MyxcbiAgICAgIDIzOSxcbiAgICAgIDE2OSxcbiAgICAgIDExOCxcbiAgICAgIDQyLFxuICAgICAgMTEwLFxuICAgICAgMTgzLFxuICAgICAgMTEwLFxuICAgICAgMjgsXG4gICAgICAzOSxcbiAgICAgIDI5LFxuICAgICAgMTEzLFxuICAgICAgNTEsXG4gICAgICAxODQsXG4gICAgICAxOTgsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgNzUsXG4gICAgICA0OCxcbiAgICAgIDI1MCxcbiAgICAgIDE0NSxcbiAgICAgIDMzLFxuICAgICAgMjQ3LFxuICAgICAgMTYyLFxuICAgICAgNjIsXG4gICAgICA5MSxcbiAgICAgIDE1NSxcbiAgICAgIDI0MCxcbiAgICAgIDUzLFxuICAgICAgMjIyLFxuICAgICAgNixcbiAgICAgIDcsXG4gICAgICA3OSxcbiAgICAgIDEyOSxcbiAgICAgIDMwLFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZQQUNYTDFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MTE0MDYyMDo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmYLwnZmD8J2ZivCdmY7wnZmPXCIsXG4gICAgXCJsaWRcIjogXCIyNDIyNDkwOTA3NDQ0Mzc6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXV2ckxVREVMWGFxYlFHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkV3JFRVo0d1hHcEZ1cnArczYvbm5vdXdLTXh2Q01NMDljQzdRMkdTcjBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBoVkFSL0dLajBOQ1NpbUdmZU5BL0VGczI3UXFJWkxTNjJjdENjZW5jTmNuMHZzMHRtamZRL0dsZ3ZNQ005YUh1cG5IYjhYSEZaWld2Z1B3bEZBM0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt2WWxHRTVvcnRhRUo5ZHFuRzhxbE0xNTI0V0xqYlhja3d0eE5MMm1hb2xSczZRbkk3aE9SLzJlUkVJc09PdWpWT2RYbTQ4a2tXa0Y5anI3SVkvTENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxMTQwNjIwOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0Nzk2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdSZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1JnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMWtsRitwVW1jTXZ1a1VuWDIxcjlqSy9ERmlodVE0c3FkYlZ1ODhiR3Ftbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTcxODIzNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
