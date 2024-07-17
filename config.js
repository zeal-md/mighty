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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_15_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhYK0I4NkQ2cm1IWHI3a3VnUHdyd0FtSTVucVV4L1lGZ3czMkVraHlKaEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZuSFBqdHRQU1Z5eVFXN2NOQnVfa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ4MTk1MGYtYzA3YS00NTg1LTk5ZWYtNTU4YmZjNmE3M2U3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTYyLFxuICAgICAgMjI3LFxuICAgICAgMTE3LFxuICAgICAgMTkzLFxuICAgICAgMTI3LFxuICAgICAgMjA2LFxuICAgICAgMTI1LFxuICAgICAgMTY5LFxuICAgICAgMTQxLFxuICAgICAgNzYsXG4gICAgICAxNzQsXG4gICAgICAyNDAsXG4gICAgICAxNzQsXG4gICAgICA0MyxcbiAgICAgIDE1OCxcbiAgICAgIDIyNixcbiAgICAgIDE5MSxcbiAgICAgIDUxLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTAwLFxuICAgICAgMzYsXG4gICAgICA2NixcbiAgICAgIDE4MSxcbiAgICAgIDI1MyxcbiAgICAgIDgsXG4gICAgICAxOTQsXG4gICAgICAxOTEsXG4gICAgICAyNTQsXG4gICAgICAxOTgsXG4gICAgICAxNDYsXG4gICAgICAxOTIsXG4gICAgICAxODIsXG4gICAgICAxNjAsXG4gICAgICAyMjYsXG4gICAgICA3NixcbiAgICAgIDg0LFxuICAgICAgMjU0LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlNKN1pWTUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTcwMjgwOTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAyMTU1OTkwNDYyNTg3OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4Y+04bSA4bSb4bSN4bSAybTwn5SqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdXaCtBSEVKbmMzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4Q09GWGVxM0JZSUtiaWpnZ21XN1kzWjRUeFpTenNkN2NwZGxWVnNjVjNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRaalc2Z0kzMDVPQU1sb3dpcUg2QVFWclRRckZscDdFM3lXZE40TVR3ODJuTmo0YnhORHZ0bFBlSnFqRUFzVk4veGtBVytBOXh3N3hJbTM5N1BJU0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJSUGo1R1NaVHUzaUpCNzVuWmZMWXZtSnZ2WWVzYjVZYXVmQk1hUFl2WHNtTmRiMlR1RVZOVjJrMWxhRmZFQWNhQW9yWExXNEhvWngrZG5SbFJkQ2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTcwMjgwOTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMzI5MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMFhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwWC5qc29uIjogIntcImtleURhdGFcIjpcIkowSVQ3cy9IdkpwTktFZFZjSXI5UzliYlBpWHdLUFBFWHJ4RTE2cmxGcnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4MDUwMDU3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIzMjg0NTk2MFwifSIKfQ=="  // PUT your SESSION_ID 


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
