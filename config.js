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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_23_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFcnNmNDRqUi9yeDFoc3kyTlA4dTdHUEpyeWhDWjFpaHdSSGVSUTdsOXJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4OW1MRGlPN1JHTy1HaGVkUHRrUHJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlMGRmZWE2LWE5NDMtNGE5ZC1iMWU1LWY3YjQyZGNkM2I0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDMwLFxuICAgICAgMyxcbiAgICAgIDUwLFxuICAgICAgMTExLFxuICAgICAgMjIyLFxuICAgICAgMTExLFxuICAgICAgMTAyLFxuICAgICAgMTEwLFxuICAgICAgMTg0LFxuICAgICAgMjU0LFxuICAgICAgNzEsXG4gICAgICAxMTksXG4gICAgICAxMTQsXG4gICAgICAyNDksXG4gICAgICAzOSxcbiAgICAgIDI0NSxcbiAgICAgIDk3LFxuICAgICAgMTk2LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjA1LFxuICAgICAgODMsXG4gICAgICAyMzQsXG4gICAgICAzNyxcbiAgICAgIDEzNCxcbiAgICAgIDEwMixcbiAgICAgIDE5LFxuICAgICAgMTUsXG4gICAgICAxNDcsXG4gICAgICAyMTIsXG4gICAgICAyNDcsXG4gICAgICAxMzQsXG4gICAgICAxNzMsXG4gICAgICAyNDMsXG4gICAgICAxMjMsXG4gICAgICAyOSxcbiAgICAgIDEzLFxuICAgICAgMjI3LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktGUjRBWUtQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODk2MjQ0ODk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NjAyMDc2NzkyNDQ0NDoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJPZmZpY2lhbCBKdWljZXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQzV1NDhLRU9YbjdiUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRNZ0ZyOTliT0ZoV2ZOR3I3N1p4Z013ZDdEaEY5TnlXM1p0TnpSTkdGakU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDdMYUFmL2d2cm1sbFQ3V0NQMzlzRlBFNEpUdFB1NTYxRTRFUTJyTVdaWUtFdytqRlNyQ0N6WWJCYnlkek5LZGVPaUJpYzRjWml0UkRyY2srazBSRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZDhpUTJ3djViQ0J6MGNiRWtTOWFiV0dmQkV5NzRVYlhnaXc2bDZPWHpNN3ZwMWZTNFhVaGVlK1BObitIZEljMmswNnZFMVduVGFjcDFZcjJ1enRCQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg5NjI0NDg5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NjM3ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLaTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtpNi5qc29uIjogIntcImtleURhdGFcIjpcInlFWlRWYnZheVI1SDUvZ0JlYWlKbEFXWWFETDMzeUl2TzJQNVp4Mm82bkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcxNjc4NTc5MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDMwOTkwMzExXCJ9Igp9"  // PUT your SESSION_ID 


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
