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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/20e0f8a714c13b5fddeb7.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "916262815528";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916260273863";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "https://telegra.ph/file/20e0f8a714c13b5fddeb7.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZST1VHa2JpVXdHZkZyS1cvdDFQZWVnLzJJWGFJdVhuWVZlR0t2ZC92Y3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJCb0J2bmxIVG5TQmJQNnpJSGVyNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFiYWQ5NmQtOTcyOC00NjVkLWE3MDUtZmU5NDk3MWE5M2FhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDI0NCxcbiAgICAgIDIzMyxcbiAgICAgIDIyOCxcbiAgICAgIDE0MyxcbiAgICAgIDIwMSxcbiAgICAgIDIyLFxuICAgICAgMTIwLFxuICAgICAgNjEsXG4gICAgICAyNDUsXG4gICAgICAxODYsXG4gICAgICAxNDIsXG4gICAgICAyMzUsXG4gICAgICA1OCxcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDEzNSxcbiAgICAgIDE1OCxcbiAgICAgIDk3LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDI2LFxuICAgICAgOTcsXG4gICAgICAxMzYsXG4gICAgICAxNjksXG4gICAgICA1LFxuICAgICAgMjM5LFxuICAgICAgMjYsXG4gICAgICAxNjMsXG4gICAgICA4MCxcbiAgICAgIDY2LFxuICAgICAgNCxcbiAgICAgIDE5NixcbiAgICAgIDE2NCxcbiAgICAgIDIzLFxuICAgICAgMTA2LFxuICAgICAgMTksXG4gICAgICA0NCxcbiAgICAgIDMyLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhFTDJaUVdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyNjAyNzM4NjM6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJrdW1hcnVpa2VzaHViaGFtQGdtYWlsLmNvbVwiLFxuICAgIFwibGlkXCI6IFwiNjI4NjEzMjU5MTQzNDE6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnpLNE5ZSEVOYk9uN1FHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKYndENXFvMkJaRWVsOTI1bWhwVE8rUStHMWV3RFowOWxkZnBudVBUeTNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkttNjFRenYrV3EwcnV1UjczakJrWmRnVW9uUm9vVUJaSmVURG1kYVNlZGFyZlVIOU90dTROdm5xRWVmRzVPVVR0QlpKclhTRzhLMVJ6VFZ3NjV0bUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkQ5azBnSlBHQ0JNMGg0OTFSY2hMdDJHZHZ3N0tlT2FUTVQydk1PMlhiKzZzR0lUTnhkM01hVlBQSk5NYmwzbjRsTnVkQXN6TWdSaUhTdHhGU0RKZGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjI2MDI3Mzg2Mzo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4MjYxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ2alwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnZqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaFlTYmVGbkpaN1lRNUZnVEliZFZNWnM2MGpVS2FacW9RNldRRTJXUUNaMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDYwOTg1NjkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❤️‍🔥🫀",
  packname: process.env.PACK_NAME || "shubham.k🍂🧸",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mr_Shubham",


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
