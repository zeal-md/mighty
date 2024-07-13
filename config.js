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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "thur"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "thur";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "thur"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  |thur|  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_17_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtckI1V0YwdVpWb3dRTCszbDY4Y1BoWEJtK0hTK0R2UjFrQktwa2x2V01nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIxNDQ4MzczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MDI0NjMxQ0Q0OUE1Njg5MUIwRjA3NkY4NEJFRTNDMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTUwMjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMTQ0ODM3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUIwNzRFODFDNkQ4NEM2NEQ3QzVENTY5NTY3NzU5QjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODU1MDI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjE0NDgzNzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGOUIwQjA1RjcwNEJBODZFNzg1MzM0MjdGNzc2QzRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg1NTAzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIxNDQ4MzczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2OTRCNThDQjJCQjkxRjMxOTQ3NjlDRUFBNzJGMDE5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTUwMzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0F2WGFXZnJUcnFjUGtqUnFIN25wd1wiLFxuICBcInBob25lSWRcIjogXCJjNWU2MTgwOC1kYjU3LTRlMjQtYWVkMC05ZjgyODE4MDI4MjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgNzUsXG4gICAgICAyNyxcbiAgICAgIDExOSxcbiAgICAgIDkzLFxuICAgICAgMyxcbiAgICAgIDIyNSxcbiAgICAgIDc0LFxuICAgICAgNzUsXG4gICAgICAyMDIsXG4gICAgICAzOCxcbiAgICAgIDIyOSxcbiAgICAgIDQwLFxuICAgICAgMTM1LFxuICAgICAgMTI0LFxuICAgICAgOTUsXG4gICAgICAxODAsXG4gICAgICAyMDUsXG4gICAgICAxNTEsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgNTgsXG4gICAgICA0NCxcbiAgICAgIDg4LFxuICAgICAgNSxcbiAgICAgIDE1NSxcbiAgICAgIDExLFxuICAgICAgMTMzLFxuICAgICAgMTUsXG4gICAgICAyMDksXG4gICAgICAxMTAsXG4gICAgICAxMyxcbiAgICAgIDE2MixcbiAgICAgIDIwNyxcbiAgICAgIDg2LFxuICAgICAgMjM1LFxuICAgICAgNjUsXG4gICAgICA3OSxcbiAgICAgIDE0MSxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhZWlJaNTc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyMTQ0ODM3Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNjI1NDU1NzM4OTc3OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05mLzN5Z1E3ZFBJdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmZNZzV2SmNxWHhYcTdncVhDemd5eWxjSmdGME9IZmprOTZGRjRIc2gxTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4UTl1eUwxMlZWSi9xUmRtNStvVDFHWU9rYW1qSEkyUVlqdkVweERidDI3QlM2bnJER3ZZZDV4bDg5VHBtMm0vRExwTGJYNTVyVDR0c0w4TDhmOFFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1eHRadlRTLzBoY3VmMFpqWWF5VzhjMzhFZ1RkeUowNVl1dmpSdTFkV3FldXNtQzY3aWhsOHpFaDRWcGJVREdRcjQ0a3Jia1BNbHgybDEybzhYYURqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyMTQ0ODM3Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg1NTAyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5kVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmRWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiais1RWhkNU9SbkVMWEdaVWJ0bkhuSHJNd2xNckdGWjJ4a0dPYmRidVJmUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTQ1ODkwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODU1MDI4MTYwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kisal",
  ownername:process.env.OWNER_NAME|| "kisal",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "kisal"  ).toUpperCase(),



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
