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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349015950217";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_39_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZDJYNm8zRERmREErNXRkUlhnTWZEL1BGc2liaXY2YmZQTTlEVnhNUHAyRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibF9JLVd4LXpTbEtxdm1xWWxWTUZlUVwiLFxuICBcInBob25lSWRcIjogXCI3ZDc4NDNhZi03NDk3LTRjNzQtOGEyYi0yNjRlMGM0YjAwYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDgsXG4gICAgICA2NyxcbiAgICAgIDI0LFxuICAgICAgNDQsXG4gICAgICAzMixcbiAgICAgIDk2LFxuICAgICAgMTgxLFxuICAgICAgMTMzLFxuICAgICAgMTIxLFxuICAgICAgMTU5LFxuICAgICAgMjQ3LFxuICAgICAgMTk3LFxuICAgICAgODYsXG4gICAgICA1LFxuICAgICAgNTIsXG4gICAgICA1MixcbiAgICAgIDE4LFxuICAgICAgMjE1LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDcyLFxuICAgICAgMTAzLFxuICAgICAgNTcsXG4gICAgICAxMjIsXG4gICAgICAyMzYsXG4gICAgICAyMTIsXG4gICAgICAzNSxcbiAgICAgIDE2OCxcbiAgICAgIDI0OSxcbiAgICAgIDc0LFxuICAgICAgMTc0LFxuICAgICAgMTgzLFxuICAgICAgMTQsXG4gICAgICAyMzgsXG4gICAgICA4OSxcbiAgICAgIDIxMyxcbiAgICAgIDMwLFxuICAgICAgNjcsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFhORFJHUDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTU5NTAyMTc6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDMxMzc1OTUwNjQ4MzozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK3ZoZndCRU15TnNyUUdHQk1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFFekxDV1BONTRJUmpMVVNjZ0FXQytCYlRjVnNFaVNmeUlxQmFBb3lhQzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS3V6aTBrOVYvY1VjaiswYXc4TDBlcW11RjN1WGZhNmh0cllMOFlmeUlpQlk5RjBFZXZTYXNBWDVDLzN0Wkg0a1hyS0NmbDBlVGxKVU5yby9zZ0VnRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiei9jZ213T1l0YjFoQ1RtMXR3RWIxZ1dDZ1pXN2h0elNDWW5LelJYQjBRS1Y5WkJIYlJTd2wxR2VjN0ZodkIrcmpwODhRQ005QWJHWWgxcFNUcnpEaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNTk1MDIxNzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDg1NTg0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "THIS WORLD IS A MYSTERY",
  botname : process.env.BOT_NAME  || "AYANOKOJI-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "🎭 Kiyotaka ✨ Ayanokoji 🎭",


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
