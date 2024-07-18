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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18763834999";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_59_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMixcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJ5eWQzVVFNcXdjaVBTTndycnU2MGowZG1iNy9zano0UmRBQVI0L0VlaDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRYemVoWUhrU2xhNGlTZVVBeVZXV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTE5M2ExMDEtMDA5OC00NjNmLTg4NjYtMjYwYzExNWZkYzEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDcwLFxuICAgICAgMTU5LFxuICAgICAgMTgyLFxuICAgICAgMjI3LFxuICAgICAgMTMwLFxuICAgICAgMjE5LFxuICAgICAgMTI4LFxuICAgICAgMTg4LFxuICAgICAgMTc1LFxuICAgICAgMTU2LFxuICAgICAgMjAxLFxuICAgICAgMjAsXG4gICAgICAyMTAsXG4gICAgICAyMDEsXG4gICAgICA4NyxcbiAgICAgIDY1LFxuICAgICAgNixcbiAgICAgIDUwLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAyNTEsXG4gICAgICA0MyxcbiAgICAgIDI0MyxcbiAgICAgIDE2OSxcbiAgICAgIDE2NSxcbiAgICAgIDIzNyxcbiAgICAgIDUsXG4gICAgICAyNDYsXG4gICAgICAyMjIsXG4gICAgICA4MyxcbiAgICAgIDExNCxcbiAgICAgIDEsXG4gICAgICAxNixcbiAgICAgIDU0LFxuICAgICAgMSxcbiAgICAgIDE4NSxcbiAgICAgIDE5OSxcbiAgICAgIDExOSxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJRNFdOVE5TXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2MzgzNDk5OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlvwnZC/8J2bqfCdkYjwnZuq8J2bqiDwnZuo8J2bpfCdkYrwnZur8J2br/CdkYzwnZuvXVwiLFxuICAgIFwibGlkXCI6IFwiMjY0NzcxODgyNTAwMzQ3OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hMXFjOEhFUDN0NGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV3hzSkxrdU9zSEI0dDgxeHJjdDMxZkM3Sm82VTZxVXBGNm1RTThjb1oyWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwTmxLS3ZLa2VKQVArcE9vV0Y5eTcyWlZsTW80TWRHSW5ZSURIQUpERVIzOTZaWnZPT3lVUGpUZWZaZVJZTTEvallBNVdqTHI2Y2xBdzVCaUg0NHVEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGUGNrbFdHQjU2TElybWZZalhBaklpN1Znc1l6ZXFaSGp0cEhCYkx1ek5WVnhoUFFvNUxhUDk3c2RLQi9vV2wreGpaYU1NZDVNZmJaSTd5ZWxBWHZnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODc2MzgzNDk5OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNjc5Njlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "yourboylouii",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "louii"  ).toUpperCase(),



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
