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
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mayalofi:mayalofi61729@cluster0.yrktqcd.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923284356394";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_28_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRXJPSHFVUmJybkJERS9HeE5aeWI2R2MyWDF3a0JOYVg0TE1YeWxrUWxBOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmhvdHlkTDVUUWVUNHpfbmpmeEVyQVwiLFxuICBcInBob25lSWRcIjogXCJjY2ViMzNhZi0zNDM5LTQyZDAtYWFkMy1jYzQ0ZGExOTBmNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMjE3LFxuICAgICAgMjAzLFxuICAgICAgMTE0LFxuICAgICAgMTg4LFxuICAgICAgMTA2LFxuICAgICAgMjgsXG4gICAgICAyNDgsXG4gICAgICAxNDcsXG4gICAgICAxNjIsXG4gICAgICAxNTAsXG4gICAgICAxMDMsXG4gICAgICAxMTAsXG4gICAgICA5MCxcbiAgICAgIDE5MCxcbiAgICAgIDkwLFxuICAgICAgNDksXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgNjgsXG4gICAgICA4MSxcbiAgICAgIDExNCxcbiAgICAgIDIxOSxcbiAgICAgIDI0NixcbiAgICAgIDE4OSxcbiAgICAgIDEwNSxcbiAgICAgIDQ3LFxuICAgICAgOTEsXG4gICAgICAwLFxuICAgICAgMTU4LFxuICAgICAgODEsXG4gICAgICAxMzAsXG4gICAgICA2NSxcbiAgICAgIDI4LFxuICAgICAgMjEwLFxuICAgICAgNSxcbiAgICAgIDEzLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlgzSkQ2UTVWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzNTg0NTczOTgzODU2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2au/Cdmq7wnZq18J2QmCDwnZCK8J2atPCdmq/wnZCWIPCdmrPwnZq1XCIsXG4gICAgXCJsaWRcIjogXCI0MzQ2OTczMzE0NjY2NTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM1o0bHdRaDhqVXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm41b3BMODlYU3NFZGNNellob3RTZzM2V1d5VGlsekdTcHBacGo2YUpuZ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWW1hVGt0VkhhZ3Vld1hrOUR0RmpTcEJBbGpvLzNJU0lXaHJxNCs4VnhsT2dFVGdPdnQxTVVxS2huajlKeUg5TFN2NDFYM1RTc2tmMVgyTjNWUG5EQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYW9uVHdFM0VDa3dYQ05PWWhSSmNkU1pFTmpRMlpDazgxOUxtODRucEs3SmV6MXgvN3FBaysrc29xODlVS04zRlJjcE9GSVZvMnN0MXM4S2p0eGhVQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzU4NDU3Mzk4Mzg1NjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNTAxMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJLzdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkvNy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shaibi",


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
