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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_19_24_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImg0aDdZbUUwbVlFOXNaZjVkdVNHaEhsZVF0U2NGUmJQUzZpWGx2TEovNUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhzNjFqUzhTU2h5TzdwX1YyTVRWT2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTE1ZDhhZTktYWRkNC00MjQyLWJiZmUtYWI0OTI0Y2I5ZTYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDMsXG4gICAgICAzMCxcbiAgICAgIDk4LFxuICAgICAgODksXG4gICAgICAyNDYsXG4gICAgICA4MixcbiAgICAgIDc3LFxuICAgICAgMTMyLFxuICAgICAgMTAwLFxuICAgICAgMjExLFxuICAgICAgNzgsXG4gICAgICAxNTksXG4gICAgICA2OSxcbiAgICAgIDM4LFxuICAgICAgMTc1LFxuICAgICAgMjA0LFxuICAgICAgMTYxLFxuICAgICAgNyxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDc5LFxuICAgICAgMjI3LFxuICAgICAgMTI5LFxuICAgICAgMTEwLFxuICAgICAgMTA2LFxuICAgICAgMjIxLFxuICAgICAgMTMxLFxuICAgICAgODUsXG4gICAgICA2NCxcbiAgICAgIDIzNCxcbiAgICAgIDQ0LFxuICAgICAgNTUsXG4gICAgICAyNDEsXG4gICAgICAyMTYsXG4gICAgICA3OSxcbiAgICAgIDE3NSxcbiAgICAgIDEwNCxcbiAgICAgIDU5LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI4MUYzNVJUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODMyMDA5ODU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJf0qTEkuKCpsamyrgg0qTiiIbigqHhtY/Di8amJF9cIixcbiAgICBcImxpZFwiOiBcIjU3NzY3NzI5NTk4NjU2OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDbjk0MEVFTWJYNWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3NCQzFlN2ZjZmowT3ZHbllNRUVwSHRCWTZXSEtmeUN5bHBqSEg3WkVTUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSa2FTelNGdHdYbmpLd3RDMHBKRjczR3pSZk50SEVxNEFLSGxHK1dKQ3NVbkpEVWh3aHVEeXhzdVVKZmRCU25pRkVqY0xaSHU2SzdDcHNaNEJsL3ZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2MEVZWEdUakFHNCtuM2laTmVGL2FFQnJDN0MyYXdjY05xdXBFTnRhNWNKem9lUjNSR3c2citJU1psN1V1UnpHM2M2QU1lQWJPWUh6Y24yeFlVR3NnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2ODMyMDA5ODU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMzMDYzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZYZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlhkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2cyZVl2emU3QmgrYUI2eVFvSE1jV2VaNHlsWWUyem1CV0hrNmZrWnlYOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTAyOTU5NTk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=


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
