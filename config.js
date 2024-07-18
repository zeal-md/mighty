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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙃𝙀𝙈𝙄" 


global.devs = "2348063961342" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347069278831";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/94c5a65a45e7a5afec68c.mp4" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_30_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDM3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjE1MTNYRHBwVlgwck1mRlRuUFczS08wY0UzSTNla3dUVTFXMVI5dy9GMzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNIRng5N0pmUUJTVmY0WjFVZTZVVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWI2M2ExMjUtNzNmYi00MGQ2LWIzMzEtZDVmMjBkNzY1MmI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDIwNixcbiAgICAgIDE2MixcbiAgICAgIDc5LFxuICAgICAgMzIsXG4gICAgICAyMTEsXG4gICAgICAyMjgsXG4gICAgICA2NyxcbiAgICAgIDI0NixcbiAgICAgIDE1MCxcbiAgICAgIDIzNixcbiAgICAgIDE0MSxcbiAgICAgIDUzLFxuICAgICAgMTc1LFxuICAgICAgOTgsXG4gICAgICAyNDYsXG4gICAgICAxOSxcbiAgICAgIDE2MyxcbiAgICAgIDExOCxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDQ4LFxuICAgICAgMzAsXG4gICAgICAxMTQsXG4gICAgICAyNTMsXG4gICAgICA4OSxcbiAgICAgIDE1MCxcbiAgICAgIDIwNCxcbiAgICAgIDMwLFxuICAgICAgMTE1LFxuICAgICAgNzAsXG4gICAgICAyNDYsXG4gICAgICAxMzAsXG4gICAgICAyMzksXG4gICAgICAxNjEsXG4gICAgICAxNDIsXG4gICAgICAxOCxcbiAgICAgIDUzLFxuICAgICAgMjQxLFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjRBWEFDTlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjkyNzg4MzE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRIRSBFWUVTIE9GIE9ESU5cIixcbiAgICBcImxpZFwiOiBcIjMzMzAzNjEyNjQ1Mzc5OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUNSOWRFREVQYW40YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlYVNMbHhUc0ZrR0I1NktaR0VTdzREajZ0bm4xUGxFWU5kV1FVNjJsQ0hRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRCREZ3RlFZZmhSNFVPSWRidGZjM3hCWDhiQ2hwTFBLWFVubXZWeTlqTTNJNW5LcTBma3VORWlNNzVXRXlwQmx2WFVrTUVTb2tqWVh2VzNHQWxlSEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdpN2VDZjVtUkp4RWppZk5DUFRoKzJNUzJLc2wyTmJFZ2VmeS95MkRHR2dwK2FIWnVhWVJ2MXRMTTBhbkdaZ1ZrcDJWcnB3UjVpWG9HYVE2OVNNVWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjkyNzg4MzE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjU5MDAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzk5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPOTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2aVJ5SDZyVWRPMjNwZ1daUXR5SUprRWd2ZVRMZk5xL08wQlBKQVh0RFRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3NzA5NDg0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjU5MDA5Mzg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙃𝙀𝙈𝙄G̶̛̱͙͖̟̙̔̇̎̓̔r̸̛̛̹̫̥̭͔̹̝̔͒̔̊̓ę̶̙̯̊̈́̈́̄͌̃ÿ̴̡̯̦̰́͌̏̆́̆̌̂』```", //
 
  author : process.env.PACK_AUTHER|| "𝙆𝙃𝙀𝙈𝙄",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙆𝙃𝙀𝙈𝙄-𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "𝙆𝙃𝙀𝙈𝙄",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙆𝙃𝙀𝙈𝙄"  ).toUpperCase(),



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
