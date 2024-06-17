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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_10_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzdETUpuQm1hM3dDWXhzMTBBQXoxK2RPYmJ0Zy9BQVdTY0NSZ3VuR05RVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYVlOWkI1VzlTNnVlLUo2ckdBYmNUUVwiLFxuICBcInBob25lSWRcIjogXCI1OTc5YjgyNC03ODM1LTQzMWQtOWQ2MS1jMGMxOGEzODQ4YzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE2MyxcbiAgICAgIDIzOSxcbiAgICAgIDUwLFxuICAgICAgMTY1LFxuICAgICAgNzAsXG4gICAgICA3MixcbiAgICAgIDIyLFxuICAgICAgMTAyLFxuICAgICAgMjUwLFxuICAgICAgMTU0LFxuICAgICAgMTksXG4gICAgICAxMTAsXG4gICAgICA3MyxcbiAgICAgIDI0NyxcbiAgICAgIDEzNixcbiAgICAgIDYzLFxuICAgICAgMjMzLFxuICAgICAgMTA4LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDg0LFxuICAgICAgMTUwLFxuICAgICAgMTE1LFxuICAgICAgNTEsXG4gICAgICAyNSxcbiAgICAgIDg3LFxuICAgICAgODUsXG4gICAgICAyMjYsXG4gICAgICAxMSxcbiAgICAgIDc0LFxuICAgICAgMTcsXG4gICAgICAxMSxcbiAgICAgIDEwNixcbiAgICAgIDE0MyxcbiAgICAgIDE0MixcbiAgICAgIDE3MSxcbiAgICAgIDIzMCxcbiAgICAgIDE2MixcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhDTVMxMU1aXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYyMTk1NjEzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR0FSUkkgVFYgwrJbS2VubnkgUmlja3ldXCIsXG4gICAgXCJsaWRcIjogXCIxNDQzMTU5MzQ0NzY2Mzo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcXk5YjRHRU9hN3VyTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitENnpmdDZjQ25xN0w3dkZpT0tUT1crV0dKYkVtWFdvN0ZDRzRXd3dGZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFJhYzBiL0laamxJak9VSE1PdmdJU1M4WVM2NjFMY3o2bWU4WTdPZW96cFpNeTJxTk5WOW9CTGtNRXZteTF0K2FmQTBwVzAwdXdNcnBxWi92QTRKRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2hLNFVTWmI0SCtaUWhYWTR6dzNSN29xVHpNazdNMVlmYUhWdm9iTG5XQVl0N2tTZXIySEtNNVNBVndmTW1HdnBMalhvdTZaQ0NwV3ZZejUwVHVRQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MjE5NTYxMzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODUyNTQxOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
