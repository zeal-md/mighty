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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_10_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTYyWU0rR1VkVDJvR1JwRFhJOGtqa0w2MDR3T3RReGVBZHJoRHRLVmVzST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDg3NjI3OTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4N0NDQzM2QjFERkEyNkVBMjJCMkM4QUI1ODIzODNFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4MzE0MzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOXF3eG1ac0ZSTWFGS0VxQVRxVjNfd1wiLFxuICBcInBob25lSWRcIjogXCJkZjU4YzRlMC1iYTgxLTRlNzMtOWVkYy0wMzFmODk5NzhkMTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTcxLFxuICAgICAgMTg2LFxuICAgICAgOTEsXG4gICAgICAyNDcsXG4gICAgICAyOCxcbiAgICAgIDIwNCxcbiAgICAgIDI0NSxcbiAgICAgIDg5LFxuICAgICAgMjU0LFxuICAgICAgMjM4LFxuICAgICAgMjA5LFxuICAgICAgMTA1LFxuICAgICAgMTksXG4gICAgICAyNTAsXG4gICAgICAxNzgsXG4gICAgICAxMzMsXG4gICAgICAyNDQsXG4gICAgICAxMjIsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxMzksXG4gICAgICAxMjQsXG4gICAgICAxODgsXG4gICAgICA3LFxuICAgICAgMjIsXG4gICAgICAyMzcsXG4gICAgICAxMTIsXG4gICAgICA0MCxcbiAgICAgIDQ5LFxuICAgICAgNDcsXG4gICAgICAyMDMsXG4gICAgICAxNjUsXG4gICAgICAxMTMsXG4gICAgICAzLFxuICAgICAgMTQxLFxuICAgICAgMjI1LFxuICAgICAgMjIsXG4gICAgICAyMDAsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU5UVpXN1lKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3NjI3OTM3OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9zaF9HcmFwaGljc2Rlc2lnbi5GcmFtZXMgTHRkXCIsXG4gICAgXCJsaWRcIjogXCIxNzk4NzMyMzAzNzcxNzk6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZNcHM4RkVMeVN6Yk1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvVmljZTQremEreFh3Ukp6VnNHK1p0S2FYVXZyb3I4bXA4VXBtckg0cWprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRSNFVpMFZhSWZIRmw5ZXRqZHhBVWJUOWlzbGQzZ1JrOUFuMS9Oci9jTk53aE5lVWh3M3l2YU9sY0p2MFUvbHlxODFjZEJzVXJrOEhQN3NwNGxWMkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1UdGE4Q1BOMW56T0lYSjVoQUpnVllqRlJpOGsycVNySklZYTEyWnZtSnB0a0JwOXZ3ZTdYbGk0TUpud21tWHZUcTFVTmdpWjZKOFViNlNraGFDWkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc2Mjc5Mzc6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4MzE0MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA2Vy5qc29uIjogIntcImtleURhdGFcIjpcIk1HUGRmd2E0K0UvZnp5SHJLYitKU0hOY3BxaEZ6NGwxdk11d0h3KzZGRkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwODQ4NDYwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcxMDgzODMxMFwifSIKfQ=="  // PUT your SESSION_ID 


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
