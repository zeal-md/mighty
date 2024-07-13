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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_08_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDcwLFxuICAgICAgICA2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVM0TXdObjA4dTFCR053TmoybTVWTUNIVUVOdUtpU25IcWp5NmV6MVpGTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDVfbVp5Si1TVHUwV3pTeWJISkhuQVwiLFxuICBcInBob25lSWRcIjogXCJlMWFjOWMyOS0xYjI3LTQzMzEtODIxZi1kMjBmZWI0NWI1ODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMjM0LFxuICAgICAgMzUsXG4gICAgICAxNTksXG4gICAgICA1NCxcbiAgICAgIDEzOSxcbiAgICAgIDEwMixcbiAgICAgIDI0NCxcbiAgICAgIDE1NSxcbiAgICAgIDE5MixcbiAgICAgIDE2MyxcbiAgICAgIDEyMCxcbiAgICAgIDEyNSxcbiAgICAgIDUyLFxuICAgICAgMzEsXG4gICAgICAxODcsXG4gICAgICAyMyxcbiAgICAgIDQsXG4gICAgICAxMjQsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTM5LFxuICAgICAgOTEsXG4gICAgICAyNTMsXG4gICAgICA3OSxcbiAgICAgIDQ3LFxuICAgICAgMjQ3LFxuICAgICAgMTg5LFxuICAgICAgMTI5LFxuICAgICAgODcsXG4gICAgICAxNDMsXG4gICAgICAxNTIsXG4gICAgICAyMjgsXG4gICAgICA3LFxuICAgICAgMTMwLFxuICAgICAgMjEsXG4gICAgICAxMjcsXG4gICAgICA4MixcbiAgICAgIDYyLFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWSkNGQVJaNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAzNTI0NDI1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4KaY4KeB4Kau4Kaq4KeN4Kaw4KeH4Kau4KeALeCmj+CmsCBCT1RcIixcbiAgICBcImxpZFwiOiBcIjE3MjI5MzA2NjA2ODA1MDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcXQ0bUlRdWQvSHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJhNFgrd2NSMVRvNEpyTkF4dENPd2tIdU5aQjdYREtkMDNsdnN6UlAwV2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWFNacHg4NzU0UUhqdlllWUFpV2ZsV0pCMEQ0SUE0OE9uUGFTNkxLN3pUNDR3M0VXWlNVeHNhZVh4Z3ZVaU04cnlyWTJXZjVtYk9ydzZKdU9xVGFsQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwianVkNzNWaytXV0Y1S2h6Wmh0MWVWNCtiQ25xT0ZxNUoxZTNaREJtUldVWGtCYjlqY3B0YTgyYlJ6UUlBcHNVeCtreG1EcDBreUlqRHFZMUQ0eUhBaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTAzNTI0NDI1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg0MDEyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNwK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3ArLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT0lwRFhKemZRdHMySlJYSk42K2xhMlg5anE1ZzZDcmxTLzd2d0d2VnMvOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDcxMzIyOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
