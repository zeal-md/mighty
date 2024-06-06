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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09116823341";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "fales";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_06_10_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDUwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTUzLFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidTFUSEJZaDN4WlR1QVZWdHZzZGJiUzVSQjhPc3RrTUxuYVVvckYvdXRVTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1FFUWx6VHpRUXU2VThhVDlURGM3d1wiLFxuICBcInBob25lSWRcIjogXCI1NTFjZDVjMi0xNWFjLTRhMTUtOTRkNS04ZjUwYjBkZTUyNjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjQ1LFxuICAgICAgMzEsXG4gICAgICA3MyxcbiAgICAgIDEyMSxcbiAgICAgIDE4NSxcbiAgICAgIDc0LFxuICAgICAgMTkyLFxuICAgICAgMzUsXG4gICAgICAyNixcbiAgICAgIDE5MixcbiAgICAgIDIxOSxcbiAgICAgIDE3MixcbiAgICAgIDIwNyxcbiAgICAgIDEwLFxuICAgICAgMTEzLFxuICAgICAgNjIsXG4gICAgICAyMjYsXG4gICAgICAyMDMsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNDAsXG4gICAgICAyNTUsXG4gICAgICAxNjYsXG4gICAgICA2OSxcbiAgICAgIDk1LFxuICAgICAgNCxcbiAgICAgIDIwOCxcbiAgICAgIDY1LFxuICAgICAgMjIzLFxuICAgICAgMTMwLFxuICAgICAgMjE3LFxuICAgICAgMTU5LFxuICAgICAgMTQyLFxuICAgICAgMTIzLFxuICAgICAgMTA5LFxuICAgICAgOTUsXG4gICAgICAyOCxcbiAgICAgIDI4LFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFM5OEtIOFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTY4MjMzNDE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCTEFDSyBESUFNT05EXCIsXG4gICAgXCJsaWRcIjogXCIyMDc2NDA0NDU1ODc1MDI6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExHMHpZUXhhV0Zzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4Zms5ZStRRXh5MUdUZTREV3YzRDhlTVY5TE5Vd0NWZmRsQ21RM2NyRkJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldRK2hhNTVKOGJraUdpd3VEUkxIYmppK0hWYVNFS244aDZxaGQ0MGZwejJzVncwWklzbmZVRDB3M3UxSnhZcTdlV05lOEZYVEFhL1lUU0dCVHVlbUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhJM0M2cGNwcksvR01XaVNKbjRvaEhhdDNoS1dJUDE5NGtNc0k0QVZ3K3ljbFIzR2ZWK2Y0dkVRMHpOVnhmQW1hSUpvckxjSDZMTWpFcW5FTW9rMERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTY4MjMzNDE6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc2NTQyMTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BLACK DIAMOND",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
