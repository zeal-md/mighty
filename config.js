const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250546668389";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2250546668389";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2250546668389";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2250546668389,2250546668389";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_41_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnOVdhZVVvc2U2TUhnSktRdVVMZXVtU1NOUHVNc1RNNFI0RzB0YXNkbjdVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0clhoeWdDblFwR0pyT1d6SG9SQnFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4OGJmNDk0LWE5ZTktNDY4Yy1hZjQ5LWZlOTgyMGQ4MTU4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA3OSxcbiAgICAgIDI1NCxcbiAgICAgIDE4OCxcbiAgICAgIDY0LFxuICAgICAgMzQsXG4gICAgICAxODYsXG4gICAgICA2NixcbiAgICAgIDI0NSxcbiAgICAgIDE3MCxcbiAgICAgIDEyMSxcbiAgICAgIDM1LFxuICAgICAgMjI2LFxuICAgICAgMTI2LFxuICAgICAgMTA2LFxuICAgICAgODUsXG4gICAgICAyMyxcbiAgICAgIDY1LFxuICAgICAgMjM5LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE0MSxcbiAgICAgIDIzMCxcbiAgICAgIDEyOCxcbiAgICAgIDIyNCxcbiAgICAgIDIzNCxcbiAgICAgIDE4NixcbiAgICAgIDI1MixcbiAgICAgIDc3LFxuICAgICAgMTA0LFxuICAgICAgMTMxLFxuICAgICAgNzgsXG4gICAgICAyMDEsXG4gICAgICAxMjEsXG4gICAgICAyMTQsXG4gICAgICA5NyxcbiAgICAgIDksXG4gICAgICA0MCxcbiAgICAgIDE5MCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSUlZMOEJLWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NDY2NjgzODk6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1NjAxMzMwNTQwNTY4OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051UnpnTVF1YkczdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWEprbUM4REw2ZzdiSk9XSDhhM1NUVUlOTHpwclg0QTlZOVpyRUxvZThHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5VVY1M0J6Q1l6a3pGczhXT01MOUFSamxIZENvQnpvQ2JkWUhxRXd5QVQ0dllaNkNNSHhFUEQyd0VEY3Jwd05pZ2pCMXBiZTk5ajJTUks0cmwwMTFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEV3pwSVZ4UGNaR2tWZWE1QVN3V0k1MHJzTzlPUVRVWEJtajZEWVZIN1FOYlNDaDhwVHZsVTliYlEyU29PSEFaRExlWnpFTEo2QXRKWVFENzVFbk9ndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU0NjY2ODM4OToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU3MjA5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxISlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEhKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSHl2d0x5SWYrZ0g0QlRvUURtNkZxaHhDK0V1UVRra3pYWWc1ZlRWQk12WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTcxNjczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TOKYO MANJIKAI",
  ownername:process.env.OWNER_NAME|| "MIKEY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MONARQUE"  ).toUpperCase(),



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
