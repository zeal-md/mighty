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


global.devs = "255782365586" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255782375586";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_46_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFRxZm9CUG1HOFJQQkRXSHBDdWpKT0tQR0RFNU80TXRYcnpTU1F5VlpvZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieWZiOGh4VzBTSmk1ZmlMM2FrTE1lQVwiLFxuICBcInBob25lSWRcIjogXCJhNGY1MjYwMi1mMGViLTRjMWItYWQ3Zi0yN2RmNGJmODdlYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMjEzLFxuICAgICAgMTg5LFxuICAgICAgMTA1LFxuICAgICAgMTU4LFxuICAgICAgMjM5LFxuICAgICAgOTksXG4gICAgICAzOSxcbiAgICAgIDIxMSxcbiAgICAgIDE2MSxcbiAgICAgIDU3LFxuICAgICAgNTAsXG4gICAgICA0MCxcbiAgICAgIDY3LFxuICAgICAgOSxcbiAgICAgIDEyLFxuICAgICAgMTMwLFxuICAgICAgMjIxLFxuICAgICAgNDksXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAxNDUsXG4gICAgICA1NixcbiAgICAgIDE3NixcbiAgICAgIDEsXG4gICAgICAxNDMsXG4gICAgICA4NixcbiAgICAgIDUxLFxuICAgICAgMTAyLFxuICAgICAgNzUsXG4gICAgICAxMjEsXG4gICAgICAxMzksXG4gICAgICAxNDUsXG4gICAgICAxMTgsXG4gICAgICAxNjUsXG4gICAgICAxOTQsXG4gICAgICA0NyxcbiAgICAgIDQxLFxuICAgICAgMTk2LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg1QkpFNkZGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODIzNjU1ODY6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MDA2MjYxMTYzMjE4NjoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK0M2WVVERUk3VG9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkE4RVk3Lys0a2o5UGNZRFd0cmRYeXBtWTEraTlSQmF4cWN3SVRwdlpnRDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibG1CcEp2M29IUm96VERGRWJIMExEVjBsYXM0OEZkVjRaOWdHYjdVdnFjSjZCYmFTQUhvNFN0cEdZa2VFTXdiZTRXMTZBWFl3MXdKdlhXUTFnU1JNQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOHZwWGZSdWJBQzQvTkRNd2pjUkQzaHE4clo0WCtobnoxU3JKUDdSUnl5UTJPQ0xHOExNUkxLYWUxWEc1MDhDZjVDVnBGMCtsNDNwSWZOVHdWRmdBaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzgyMzY1NTg2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjE1OTU2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "shazam",
  ownername:process.env.OWNER_NAME|| "Sosy",


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
