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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767437575";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 
7
global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_16_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZWLzdoU2lTcG9PTUpuWnBFRTFYL3J0cDAzU2s5UUt2RTFza1M3Q29PTFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdBQlRwMnNTUXh5U3pjTVpsY0twbVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTZhZGUwZTctNjA5Ny00OGZhLTlhMGMtMDRlZTllZTliYTY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDYxLFxuICAgICAgMjI5LFxuICAgICAgNzYsXG4gICAgICAzNCxcbiAgICAgIDY5LFxuICAgICAgMTk3LFxuICAgICAgMTIwLFxuICAgICAgODcsXG4gICAgICA2MixcbiAgICAgIDIyOCxcbiAgICAgIDE0LFxuICAgICAgMjA3LFxuICAgICAgNTcsXG4gICAgICAyLFxuICAgICAgNjMsXG4gICAgICAyMzIsXG4gICAgICA1MixcbiAgICAgIDMsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDEyMixcbiAgICAgIDE3NixcbiAgICAgIDUwLFxuICAgICAgMTQsXG4gICAgICAxNDYsXG4gICAgICA4OCxcbiAgICAgIDEwMixcbiAgICAgIDEyMyxcbiAgICAgIDcwLFxuICAgICAgMyxcbiAgICAgIDIzMyxcbiAgICAgIDIxNyxcbiAgICAgIDExNyxcbiAgICAgIDI0MCxcbiAgICAgIDIzNixcbiAgICAgIDcyLFxuICAgICAgNjEsXG4gICAgICA4NSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllaSkU0S1BLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NzQzNzU3NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZms8J2ZmvCdmZrwnZmpIPCdmYnwnZma8J2ZqPCdmagg44OEXCIsXG4gICAgXCJsaWRcIjogXCIyNjE2MTExMDUzMDg3ODM6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNieDFvUXo2M0Z0QVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWUVOWndNMnM2Ymw5bWJyT2VPUEp3S0gxTGV4YWYwbkFnL0NwY09ad3lnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm05eHZkbVJERXdONUl2RWhRU3pnL2hOR08vV3YzSjFuYlRJZlRyV3Q4UjVFRUhnYkg5cEcvVTJ5YVZ3V2wzQmpudU9UbFlNWHlWQkRlVVZ0UDRWT0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImI5c3JhTUd1UWNnMmZhMUF0YnpGYU9pemVFSGt5WTNONndSbndCenRBVU9HZjJwdGJaTElSc3pRNmxMYzBQYW8xeTJxSmd2NlFSd3dqUkU5QXRwVGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY3NDM3NTc1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgwMDk3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpaY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlpjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUJIOUpxOTJFU3NZdTF2YitTalE0WlI0cm9ZYnUwbVB3dnpTYXhXQzhCZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk5MTA0NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc5OTgwNDkyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
