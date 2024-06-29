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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_06_04_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2LFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICA3MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmTU51QkExOHFGK3lVVmFYQlU0dzRUSUN2dmJ4UGl4OFUvWC85d0t3SmVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDUxNDgzODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYxNUZDRjhENzRERjVFQUREQjQzRDY0RDc4RkJERkE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTY0MTA3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIQ0xHNE5WNlJFaWJVeTNfVmRWSW1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ2ZDM3NTg5LWU0NGQtNDc5My04Yzg1LTUwMGNkOWI3NTU1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDE0NixcbiAgICAgIDE2MyxcbiAgICAgIDEyNyxcbiAgICAgIDIyMixcbiAgICAgIDQ2LFxuICAgICAgMTAwLFxuICAgICAgMjI5LFxuICAgICAgMjA4LFxuICAgICAgMTQzLFxuICAgICAgMTQ4LFxuICAgICAgMTkxLFxuICAgICAgMTI5LFxuICAgICAgNCxcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgMjE1LFxuICAgICAgMzYsXG4gICAgICAyMjUsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTY2LFxuICAgICAgMjI1LFxuICAgICAgMjAwLFxuICAgICAgMjQxLFxuICAgICAgODMsXG4gICAgICAxMDEsXG4gICAgICAyNixcbiAgICAgIDI0MSxcbiAgICAgIDE4MixcbiAgICAgIDk5LFxuICAgICAgNjQsXG4gICAgICAxMjEsXG4gICAgICAxMzUsXG4gICAgICAxNDgsXG4gICAgICAxNDAsXG4gICAgICAyNDEsXG4gICAgICAxNzIsXG4gICAgICAxNDcsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXSDY0RlpSTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NTE0ODM4Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6Zi/5ouJ57qm6I6rXCIsXG4gICAgXCJsaWRcIjogXCIyNzY4ODQxMjY0NTc5Njc6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMmx1dGdCRU9uSC9yTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlV5VEtLSW0xSFQwQUhtQzlLRW5XaVVtQTB3VEJSdGpPSzlkaGQ3ODJ2bnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicXcrZzFoZVhDRnh5aVU2eExFcDZOb2lrMGFIb1V1OFBvd3RsRlFNdk5HOFdPZXBwTVRualpVSjY2MW1ROEIrY2xjMVZ5eVNCVXhLaXZxVHl5NFliQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0l0VEJmUnZvb2VjeW1samFGZkNjYm9saWtkckdhM04vTUhhcVRRa01mbndWWkprRm1nd3BIdE9lcldUQnVGdGQxY1pDV21wdVR5OWVXTzVobFhDQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NTE0ODM4Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjQxMDY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRm9UXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGb1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3S1dkcUVBS1dQS09na2RTeGZmRzRWY0JYdEhSMUJDR3RhdklWeWs1Q3FZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1MzkzOTg1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MDM3OTI4MTMxXCJ9Igp9


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
