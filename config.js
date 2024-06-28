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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_27_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicDBkYmxFamVvOHRwMDczUnlxdmxLMS9VYkFValRzUlNwbHJCVWkvendaMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFd5UVJyLVhUNktNN0pYYzZ5MmZxZ1wiLFxuICBcInBob25lSWRcIjogXCI3OGJjNDc3Zi1mY2ZhLTRlZWEtOWNhNy1lOGE5NGMwZjQ5NTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxNzYsXG4gICAgICAxNDEsXG4gICAgICAxMjAsXG4gICAgICA5NCxcbiAgICAgIDUzLFxuICAgICAgNjUsXG4gICAgICAxNTEsXG4gICAgICA3NixcbiAgICAgIDUyLFxuICAgICAgMzAsXG4gICAgICAyMzEsXG4gICAgICA2MyxcbiAgICAgIDE4LFxuICAgICAgMTE4LFxuICAgICAgMTcyLFxuICAgICAgMTAwLFxuICAgICAgMTQ5LFxuICAgICAgMTI1LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAyMzYsXG4gICAgICAyNTUsXG4gICAgICAyMjgsXG4gICAgICAyMixcbiAgICAgIDIxNixcbiAgICAgIDk5LFxuICAgICAgOTMsXG4gICAgICAyNCxcbiAgICAgIDIwOSxcbiAgICAgIDQwLFxuICAgICAgMjM5LFxuICAgICAgOTYsXG4gICAgICAxNzcsXG4gICAgICA4MSxcbiAgICAgIDE5NyxcbiAgICAgIDU3LFxuICAgICAgMTYsXG4gICAgICAyMzYsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyR1QxMlg4NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MTA4MDgyNDo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAxMzkxNDUyNzMzNTU1OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rdHVhTUNFTnVzKzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibFBSa0d5RVVBOFUyV0o1UER5UUxnbWxacFhCcC8ySmdYREhZcHovcGJRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxYzRZbGZ2NnlTN3diTFFBMXpuWXhOa2dpRGxJOExtS0RCRFI1SjF5RzdvWWZTN0FKdHdUVFB0YmNvZHY5dWFNRmVOZnlZcXZtdkFSTnBuYUQvdEVBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOck8zOHVxS0N5MkRLWHd6VWVtemNHSW9odm5wNjBPcG9ZL243eXVObVVoN05kSzI1Y01VT0RwYnlsOWVkeHR3TS9WNWMrdzJNSkVvU013K2JXL2JDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUxMDgwODI0OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1ODg0NDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
