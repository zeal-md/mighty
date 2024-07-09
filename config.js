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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_54_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzAyaTZGMStyUkI1dU5TK1NzRXRxcXNIaWhwakwrWG45UkFOUlVBakJGOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYyODQ0NzcwMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyMDczQTg2NkM1RkI3MkFBMTNCNEQxMzc2N0MxODg2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU0MDQ1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjI4NDQ3NzAwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMURBQkFCOEI4OTRCM0Q4NzE3MTQ1MzRFMEEwMUJDMTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTQwNDU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImc2NmhaRFU1VFA2MkdpMVpkSFhSR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2U1YWJkYWMtMDYwYi00Y2Q5LWJkMWMtNjZlMDdlY2ZjYTVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDE5OSxcbiAgICAgIDE5NSxcbiAgICAgIDI4LFxuICAgICAgMTg1LFxuICAgICAgMTU5LFxuICAgICAgMjEsXG4gICAgICAyMDQsXG4gICAgICAyMTgsXG4gICAgICAyMTAsXG4gICAgICAyMzksXG4gICAgICAyOCxcbiAgICAgIDIxMCxcbiAgICAgIDE5MixcbiAgICAgIDQyLFxuICAgICAgNzIsXG4gICAgICAxMTQsXG4gICAgICAxODcsXG4gICAgICAxNzYsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICA3LFxuICAgICAgODgsXG4gICAgICAxMDUsXG4gICAgICAyNDgsXG4gICAgICAxNjksXG4gICAgICA2OSxcbiAgICAgIDIwOCxcbiAgICAgIDEwNCxcbiAgICAgIDExNixcbiAgICAgIDQ0LFxuICAgICAgMTksXG4gICAgICA5NyxcbiAgICAgIDE3NCxcbiAgICAgIDk4LFxuICAgICAgMTA0LFxuICAgICAgMTE0LFxuICAgICAgMTc4LFxuICAgICAgNTQsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU4M0tTWUxaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyODQ0NzcwMDk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTExNjI3MDM5MDkwOTI6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5iO8J+Zj1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lENjg3TUdFS082dGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2UxL0hWd1VCSjVHOUYxU1dhZGJmcDFGdUluZ0pVS2VvbGw4N0ZMU1NGYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEbU9JUFpvL1Y2a2dQWHI5U25iY21WTXhJQ0t3bDFabS9UZk1jY2xGWTUvVVRaa2NGZzJIZmRTZWs4SWhzbXVyUXNiODlPWGdTSGJ6ak4vTE9aWHREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWVHU4MW5ONTdiMG1ESUxQdlVORFAyak1QbHJnTU1IMitlSFJDZ1NVcjFGUTZ1STNLOGRBZyt3bFp0MVhoMEEwcko4OTZPVEptZWdkVnM5YUNPbWRnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTYyODQ0NzcwMDk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU0MDQ1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlublwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW5uLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOUFFVHJGdnN2SktEaGNvenhjOHAreHhZZ2hzNW9scXVXYXQ2aS9CaGIyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzE5NDY3MjYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNTM2ODIyOTgwXCJ9Igp9"  // PUT your SESSION_ID 


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
