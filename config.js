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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 
SUHAIL_01_34_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1NnVHo0cG5rTitVbFc3ZUFKem5CY1UzckNLRm5maEFMVlNxVnd3SnluTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXY1ZGJCWGJSSlN5TXNHS3hPdjkyUVwiLFxuICBcInBob25lSWRcIjogXCI2NTgyNjA0Zi01ZWQ3LTQ2MzMtOWVhYi02NDY4MjQzNjViYzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMzEsXG4gICAgICAxNDAsXG4gICAgICA3NCxcbiAgICAgIDIyMyxcbiAgICAgIDE4MCxcbiAgICAgIDE0NSxcbiAgICAgIDY3LFxuICAgICAgMTM1LFxuICAgICAgNjIsXG4gICAgICAzMSxcbiAgICAgIDYsXG4gICAgICAxOSxcbiAgICAgIDY1LFxuICAgICAgMzAsXG4gICAgICAxNzcsXG4gICAgICAyLFxuICAgICAgMjUxLFxuICAgICAgMTk0LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDI1MixcbiAgICAgIDQ0LFxuICAgICAgNCxcbiAgICAgIDEzNixcbiAgICAgIDc3LFxuICAgICAgNzAsXG4gICAgICA2OSxcbiAgICAgIDExMCxcbiAgICAgIDUsXG4gICAgICAzNSxcbiAgICAgIDM0LFxuICAgICAgMjYsXG4gICAgICAxMDQsXG4gICAgICA5MyxcbiAgICAgIDc3LFxuICAgICAgMTg5LFxuICAgICAgMTgwLFxuICAgICAgMTE3LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkNZU1pDVFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDQxMDQzNjI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJpZ2dpZSBGeFwiLFxuICAgIFwibGlkXCI6IFwiMTc1MjMwODQwNTIwNzQzOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVRjdThnR0VLalZrclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDYTJjdVNvenlGU2dqMkFYUGg1NE5WTXk2dlQ5WmxBWW1MNGR6cTFBeVd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1KVTVyK2VjS2hRMnB6bitjWG5tVlNpMzVDNnUxekkzT3VwMUFGcWltRi9IZFhDTDM4K1BScElaV1FwSlBLWkdEKzg1NkQ0aktXa2N1cEFuVU5PVERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlc3NmFWblVJbkV0MlNFQmVyOFJ4QnNQd1E2V2FzNTArWGFGVFZ2K0VFbGpLdXNlWnpvM0NGdGF5cktTWHVhWHdIUHVLc3ZCalplM0Rrc2c3N1haYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDQxMDQzNjI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTcwNDc1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==

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
