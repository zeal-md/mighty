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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349065344178";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_12_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0VGc2xMZUtrYm0rQWdjSjd3SlZUMW1VZUFvc2NjODNOcWpuYzhHdC84ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicXJmZ05UVzVSZXVLSkJfdnNGemtCd1wiLFxuICBcInBob25lSWRcIjogXCI2OWU5NzFjMy1kZGRmLTRmMGYtODEwNS1mYjU1MjYwODYxNzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxNjcsXG4gICAgICAyNTAsXG4gICAgICAxOTQsXG4gICAgICAxMTQsXG4gICAgICAxNjQsXG4gICAgICAyNTQsXG4gICAgICAxODIsXG4gICAgICAxMzMsXG4gICAgICA1LFxuICAgICAgMTQ2LFxuICAgICAgNixcbiAgICAgIDExMyxcbiAgICAgIDI1MSxcbiAgICAgIDI0LFxuICAgICAgMTM5LFxuICAgICAgNixcbiAgICAgIDUzLFxuICAgICAgNTgsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjM4LFxuICAgICAgMTY3LFxuICAgICAgNjIsXG4gICAgICAxNTksXG4gICAgICA0MixcbiAgICAgIDIyNyxcbiAgICAgIDI5LFxuICAgICAgMTQxLFxuICAgICAgMTIyLFxuICAgICAgMTYsXG4gICAgICA5NSxcbiAgICAgIDY4LFxuICAgICAgMTQxLFxuICAgICAgMTEzLFxuICAgICAgMTUxLFxuICAgICAgNDYsXG4gICAgICA0NCxcbiAgICAgIDYzLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldGS0xHU05NXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY1MzQ0MTc4OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExODE0NjExMTQyMjY4MTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pERzY4WUdFTURlNTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSk1QMENCRDBURzA1MjFEWWNaV3NDT2RaczAveUhyTnprY0VITTZWWm96Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCdDIwL2F0TGxnZEd2ajNkTVlMVUJRSDR6UUNWWDJRZDNtdnMwK1J4REN4U3EwYy9DbHhRLzdDNjhkbnpSYlVycitGT1daSWZxeU55R2dkQzBtRUlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJobmNqT3NuTVp2Q3dCdGF1c1kvZWI3ZytzbjFUbndmeDdQUmNaSUo2amdkS1FsMW9HT2N0K0NSNzNVczh1NElXWFNBcFJycTJXZkFCbGd5VHRRL0hDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY1MzQ0MTc4OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjY3MTM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDl2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyc1pBL1J1TzFrV3o3WEhtdkh2dGN4M3RiSkxCUlB5VEFGcmNIRzZKYUlnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTkxNzU0MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
