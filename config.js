const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://woodmandatilus:Woodman@cluster0.mcojpae.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/bdc8a943e6f8693ecac97.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "19543974512";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/bdc8a943e6f8693ecac97.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_10_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0YjV2NUpJQmJ2aEkyQzhqVjVCVzFhQ0NpWFM1TWlFUkNKSzlEajNnVXZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE5NTQzOTc0NTEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUM1QjlDNDFEMzc0NzJEQ0I1NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4ODYyMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxOTU0Mzk3NDUxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FDMDFDRjE4QTVEMkM0ODlDOUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODg2MjE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklsLURKNy1XVDJ1bWg3ZXdYQzNFUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTYzYmUzNWItNjdhMS00NTg1LTg2YmYtZjc3YjdkOWNlOGUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDI1MyxcbiAgICAgIDEzMyxcbiAgICAgIDMzLFxuICAgICAgMTU5LFxuICAgICAgMzIsXG4gICAgICAxMTAsXG4gICAgICA5OSxcbiAgICAgIDExNCxcbiAgICAgIDIwNixcbiAgICAgIDU2LFxuICAgICAgMjIzLFxuICAgICAgMTIzLFxuICAgICAgOTIsXG4gICAgICAxMjksXG4gICAgICAxNTgsXG4gICAgICAxNSxcbiAgICAgIDIxNixcbiAgICAgIDIyMSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMzksXG4gICAgICAyMjgsXG4gICAgICAxMTAsXG4gICAgICAxNzcsXG4gICAgICA1NSxcbiAgICAgIDExMixcbiAgICAgIDIxOCxcbiAgICAgIDE4MSxcbiAgICAgIDY3LFxuICAgICAgMTczLFxuICAgICAgMTkzLFxuICAgICAgMzIsXG4gICAgICAyMSxcbiAgICAgIDEyNSxcbiAgICAgIDE2NCxcbiAgICAgIDE1OCxcbiAgICAgIDMyLFxuICAgICAgODQsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWOUI4NlpaQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTk1NDM5NzQ1MTI6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1Mzk1MjUwNTA0MzQ6NjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JOEguKNo/CdkIbwnZqv8J2Qg/CfjLnwnYSf4pyuzaLiiZsg8J2ar/CdmqnwnZqw8J2au/Cdmq/ig50g8J2En+KcruKDnfCfkZHwn6q9XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENTaHFvS0VQN0NqYlFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzc2NFV0xIeU5sVmNoaXVyTk5rZC92UEJUMHYzQ3dwblh2Um9Ud09MZUNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImkvc1RUQUhNTzc4NXFkWG5vQ3E4V2Y4eUx6MWNhelU2WjloY3FLTklacFROVFNQTnZTQUxnalpEK2NEUzFVOHBtTTRIV0dCVWZIN2M2eksySEZhaWl3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5xcWUzZnR3ZmNnWVluQXFxQlVTUk9xVWIyb3RCeFI2SHFOMWdpM0Rld0RSZ3VCWjNZOEtHS21qZndWRzN4Q296TlBPUHd5VkE1ci93MXY2cjZpaWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE5NTQzOTc0NTEyOjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4ODYyMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUQ0QUFNTGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRDRBQU1MYy5qc29uIjogIntcImtleURhdGFcIjpcImRlZzRCZDl1RjBiR05nQnVoRW5KZHNvV1k3L2dRNklIdHFWY0lrYXhkYzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MjUzNTY2NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzEsMywwLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTU1MDk3MjcyMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "✨",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "sᴜʜᴀɪʟ-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𓄂⍣𝐆𝚯𝐃🌹𝄟✮͢≛ 𝚯𝚩𝚰𝚻𝚯⃝ 𝄟✮⃝👑🪽",


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
