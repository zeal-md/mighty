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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_45_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZqanNXU2h0aDlrMkw0SGZqTVVnN05UaHBEZVFaNlg1Z3hPNytNem5FYzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlR3NXhGVDd0UjMteGtyaXJWVHFZUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjk1YTFjM2MtOTM3OC00ZjE1LTlmZWUtMWRkODUzOWFlZTVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDIwMixcbiAgICAgIDExMixcbiAgICAgIDIyMixcbiAgICAgIDI1LFxuICAgICAgNDcsXG4gICAgICAyMDEsXG4gICAgICAxNzYsXG4gICAgICAyNTEsXG4gICAgICAxMjQsXG4gICAgICA3LFxuICAgICAgMTA0LFxuICAgICAgOCxcbiAgICAgIDEwMCxcbiAgICAgIDIwNyxcbiAgICAgIDE2LFxuICAgICAgMTE2LFxuICAgICAgMTAzLFxuICAgICAgMTk2LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgOTAsXG4gICAgICAxNDAsXG4gICAgICA1NixcbiAgICAgIDE4MCxcbiAgICAgIDIxOSxcbiAgICAgIDE5NSxcbiAgICAgIDczLFxuICAgICAgMTAsXG4gICAgICAyNDYsXG4gICAgICA4NCxcbiAgICAgIDE2NCxcbiAgICAgIDIyNyxcbiAgICAgIDE5NixcbiAgICAgIDczLFxuICAgICAgMTIwLFxuICAgICAgMTUxLFxuICAgICAgMjAzLFxuICAgICAgNDQsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTTlSWTM0RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjUzMzcyMTkzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmV0b21peCBzaG9wXCIsXG4gICAgXCJsaWRcIjogXCIxMzQ1NjYxOTEyNjk5MzoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcjF3dndHRUtidjc3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhWODNIeGRtbllHMUxSajF0TE9yd2wzTm5CQWk2cnR0SGtWYW84cjNSaWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDBLZmREWUlTMDNRbXltdDVJRUlaRDVDbjlhVFNtclF5QjBpTjM2eDNMOUlnb1gvMDFJUFd0WHQzMk1zV3lNWFAvdTEvd3ZyZFQ0MHJhWTB6V2pMQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2gvdGhFcGIzWmJrSTNRTVZjYk02SGQwMnZiaTRoL3lsN2cxRDJuY29ZdkovRWNycGFXNlQ3TFdCK0xacmRWVmRjNVVUbks0U2Q3cjZLcldKYnFLakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjUzMzcyMTkzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ5NzUxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdjZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2NmLmpzb24iOiAie1wia2V5RGF0YVwiOlwicUNVcjl0NCtxUUsvVU50VGpISWQxVnhCQkQrcXVya3RtMktxOHpoR1Nlaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcxNzU1OTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDk0NTYwMzUwXCJ9Igp9"  // PUT your SESSION_ID 


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
