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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923412872683";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_10_07_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRlNMc3ZRUVBnTjExb0ttSEhBWW5PcENNU0cyRXExRmdORUZqdzlQZGxhVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFoxV2hYWU1RU1NvZzRwZ1dEUGd1UVwiLFxuICBcInBob25lSWRcIjogXCIyZmQ2MTYwMi1hNGFkLTQ4N2EtYWY1Yy00Zjk5Y2E0ZjZlYWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgMTkwLFxuICAgICAgMzksXG4gICAgICA3NCxcbiAgICAgIDI0NCxcbiAgICAgIDExLFxuICAgICAgMTExLFxuICAgICAgNTgsXG4gICAgICAyMDksXG4gICAgICA1MyxcbiAgICAgIDExMSxcbiAgICAgIDIyNCxcbiAgICAgIDE0NCxcbiAgICAgIDI4LFxuICAgICAgMTQsXG4gICAgICAxNzQsXG4gICAgICAyNTEsXG4gICAgICAxMDgsXG4gICAgICAyNDgsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTExLFxuICAgICAgMTgsXG4gICAgICAxNjgsXG4gICAgICAyMTQsXG4gICAgICAxMjMsXG4gICAgICAxODUsXG4gICAgICAxNzksXG4gICAgICAyMDUsXG4gICAgICA0MCxcbiAgICAgIDEwNSxcbiAgICAgIDE5OSxcbiAgICAgIDIzMixcbiAgICAgIDcsXG4gICAgICAxMjYsXG4gICAgICAxMDcsXG4gICAgICAxNjUsXG4gICAgICA1MyxcbiAgICAgIDkzLFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBTR0M2Q1lEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTI4NzI2ODM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1Mjg3MDg4MDQ0ODU2OTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdTFzWm9ERU5iYWtMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRjdHpCS05Bbm41U0VPcXc4UG1BU0NOT0pVYitkSU16ZmNtUlZScVVoRWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUtrbkVWdlRwc1lHaEJ0c2xlTUd1U1Y4WS9vYWt6enZLTEJpMEw4QnhlUHpqTkxqTDlLMXNtZk15YUlEalBlTFJ5M1lseUtPaXk0aDRLclFZMUV1QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid3BBcWZPYjZCcEQvemhvRDRETVhsQWZJSHBHa1RrZXhNSHlMZGtHcGFSN3N1VjhQODJEOUZnOXVjTHhLVDBsMXh4Z2I1UGNZdnBrRmh0MEZFTHNvQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDEyODcyNjgzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODQxMjQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTE1CXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMTUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFblBWNk1UbGI3MmIyQzdzL0JBZUdLdXpqZE9NVVlvSFBoWXlEenVxN0tnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2MDY0MTk5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
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
