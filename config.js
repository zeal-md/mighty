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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1fdfa620c76d762af25be.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94741140620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_27_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaXhWRmkzRE9wUDFCZXNCdUl4aWRIcmpFdDA5Y2hBaWVLcGtDcysvd1hEZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVWJxN0plREZUb2UwUlpCT0pZcUxKQVwiLFxuICBcInBob25lSWRcIjogXCIzOTcyYjI0MS1hYzMzLTRkNzctOWE4ZC0yNDQ4YWY4ZDlmMTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxMDksXG4gICAgICA2MyxcbiAgICAgIDkzLFxuICAgICAgOTMsXG4gICAgICA5MSxcbiAgICAgIDExNixcbiAgICAgIDExLFxuICAgICAgMjQ0LFxuICAgICAgMjExLFxuICAgICAgNTEsXG4gICAgICA4NyxcbiAgICAgIDIwMCxcbiAgICAgIDIxOSxcbiAgICAgIDU3LFxuICAgICAgMTA3LFxuICAgICAgMyxcbiAgICAgIDIzMyxcbiAgICAgIDQ1LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTMxLFxuICAgICAgNzEsXG4gICAgICAxMjksXG4gICAgICAyNTUsXG4gICAgICAxMzUsXG4gICAgICA5OCxcbiAgICAgIDg5LFxuICAgICAgNzMsXG4gICAgICAyMTQsXG4gICAgICAyNTEsXG4gICAgICA5NixcbiAgICAgIDE0NCxcbiAgICAgIDE1OCxcbiAgICAgIDIyNCxcbiAgICAgIDgzLFxuICAgICAgMCxcbiAgICAgIDU5LFxuICAgICAgODMsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQ0FTMjJRSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDExNDA2MjA6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmC8J2Zg/CdmYrwnZmO8J2Zj1wiLFxuICAgIFwibGlkXCI6IFwiMjQyMjQ5MDkwNzQ0NDM3OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l1dnJMVURFSW5ndWJRR0dCWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFdyRUVaNHdYR3BGdXJwK3M2L25ub3V3S014dkNNTTA5Y0M3UTJHU3Iwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2bEhucHF1NXV2Yzh1Qis2MFVZcGJEVURHa1RWbHdGd3pkQzh5NXc3dHhmTVdGSEVQL1YxTFpWcWhiZ1grME13UGJ5czZ2S2Z6aEExYVpTVWMrR1BCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwd2JWYVhsZC9GT21JZnhGblh0VE51MmEyRWNBQ1RqcnZCMUdid0U1aGo4d1JHemVWMU96TXFvbGVnVnYxRStVMUR5aFFjVFJXOUREZmxhSFpicEloZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MTE0MDYyMDo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTA4MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUmdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdSZy5qc29uIjogIntcImtleURhdGFcIjpcIjFrbEYrcFVtY012dWtVblgyMXI5aksvREZpaHVRNHNxZGJWdTg4YkdxbW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTE3MTgyMzQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "https://telegra.ph/file/1fdfa620c76d762af25be.jpg.",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ghost",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-a149c964-052a-434a-9be5-156389ad291a",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "GhostCyber",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
