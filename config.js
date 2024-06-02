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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039923664";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349039923664,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349039923664,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_50_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTFBMQ016bEJDYlNUejRBZXVpRmVwY3FiaU5CNklPUHNzZ3UzR0dRSjhTOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGY5V2hEeldRV3VnYkJ1aGh4Zk90Z1wiLFxuICBcInBob25lSWRcIjogXCI4OGU2MTM1YS1jODNjLTRkZmYtYjY4YS1lNmNlY2RjZWFjZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyMjksXG4gICAgICAxMDAsXG4gICAgICA2OSxcbiAgICAgIDIyMyxcbiAgICAgIDYzLFxuICAgICAgMTUsXG4gICAgICAxOTUsXG4gICAgICA3MyxcbiAgICAgIDIxLFxuICAgICAgMTUyLFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICA4NixcbiAgICAgIDI1MCxcbiAgICAgIDcwLFxuICAgICAgMTQyLFxuICAgICAgMTk1LFxuICAgICAgMTEwLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTc2LFxuICAgICAgMTcwLFxuICAgICAgMjIyLFxuICAgICAgNzQsXG4gICAgICAxMDMsXG4gICAgICAzMSxcbiAgICAgIDI5LFxuICAgICAgMTUyLFxuICAgICAgMjQ5LFxuICAgICAgMTE4LFxuICAgICAgMTk0LFxuICAgICAgNTAsXG4gICAgICAxMTcsXG4gICAgICA5LFxuICAgICAgMzQsXG4gICAgICAxNzksXG4gICAgICAyMTksXG4gICAgICAyMzcsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVllRU1Y1TVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzk5MjM2NjQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUYWxrIFRvIEtJTkdcIixcbiAgICBcImxpZFwiOiBcIjE5NTU3NTc4MTc4OTc1ODoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYmJyTXNHRUpiaTNySUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZNdkFVVENNNXFtd1FFOHRnOWVDRlJSOTVERFdWUHEyNU4wVXF4QmxIbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUZacDJiam5BREVrWVZ0dWhUbWNKSTViZm1VUFpyM3FSSy9qZHBtMzdKKzJLaVNWS0pkY2dFRXdVZ3NRcjhPeHo4SWJjWEhJanZJRFNmZGhMN2twQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUloWmJGclJuWUo2Z0pKblppZ1V1aFJmSkpPRjVsdEFPaFFhYnNGV1prL1JqdU9uRlRmT3ZUTWFiUFJtWHg4ak1Xb0t0TnRLOFMyczFIQnZlT1hRQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzOTkyMzY2NDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDIzMDAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JOJ",
  packname: process.env.PACK_NAME || "KING JOJ",
  botname : process.env.BOT_NAME  || "KING",
  ownername:process.env.OWNER_NAME|| "It'x King",


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
