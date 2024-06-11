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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_48_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDg0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvUmQ4SmJMbElNM3NoWjdSd29EcWFja1h2dVdHRnJZZlY4cU8yWW5ycWprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPWnNyVnNRQlFnR29ydUZhUXctNWdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhMThmOTM0LWZiYjktNGM3ZC1iMzE5LTM2ODcwNDMzN2FjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDgzLFxuICAgICAgNjcsXG4gICAgICAzMSxcbiAgICAgIDE1NCxcbiAgICAgIDEyLFxuICAgICAgOSxcbiAgICAgIDE5MSxcbiAgICAgIDEzMixcbiAgICAgIDE3OSxcbiAgICAgIDMsXG4gICAgICAxODcsXG4gICAgICAxNzUsXG4gICAgICAxMTUsXG4gICAgICAyNDYsXG4gICAgICAxMTksXG4gICAgICA3NixcbiAgICAgIDEyMixcbiAgICAgIDIzNixcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA4MyxcbiAgICAgIDI0MyxcbiAgICAgIDM4LFxuICAgICAgMTU1LFxuICAgICAgMTU0LFxuICAgICAgMjksXG4gICAgICAzOCxcbiAgICAgIDM1LFxuICAgICAgMjM4LFxuICAgICAgMjM4LFxuICAgICAgNSxcbiAgICAgIDIxNyxcbiAgICAgIDU3LFxuICAgICAgMTc2LFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAxNTUsXG4gICAgICA1NyxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI5RzQ2TDFUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTUzNDU4MTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkzNzc2MjkxMTkyODg5OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSldrMmEwREVMK0JsN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMSmFaTXF4aU11UjhFbk5mWXJKOEhGUndFeWR6VllGeTB3azJYNUs3c2lZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImwwaVEvUXpSOUhodkRQWTZ1c1RWUEZQOEVUajN1WlBvVFloRWtYMlQ0V2RyM05PZVcwcnhlSnExUnc4TFBreFhkOXIyVTVNbzBmdS9zM1ZPWWlNRUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxPc0VGWERYT0ZpZTlvS0lGajFiQ3lWZjFzQ0tlSENjYWdJaGV2Q3ZlNldsVDY4M0NYMXN1R3d6SGJBc2J1eUNXRmgzcmRHeGZsblRzTkgvc0Q2NUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNTM0NTgxMTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzk0NDUxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
