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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23272698358";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_03_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXOEhEdkxoWnUwTyt2aDBpS0xtZTBBZjJLWVorYXRqY0tKWktwZndjVFFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMjcyNjk4MzU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNkEzMzY2ODI4MTQ5MTVCMjY3Q0FDREE1NDg4MDc5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3NzQyMDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiek5zejU0R2hRRkN5RkJzc1lXQmQxZ1wiLFxuICBcInBob25lSWRcIjogXCJmNzkyNzRmMy1mYjcyLTRjYjctOTNiYS00MjcyNDBhNmUwYjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTcyLFxuICAgICAgMjYsXG4gICAgICA3MCxcbiAgICAgIDE4MCxcbiAgICAgIDM1LFxuICAgICAgMTU3LFxuICAgICAgMjI0LFxuICAgICAgMTg2LFxuICAgICAgMjcsXG4gICAgICAyMzIsXG4gICAgICA4NixcbiAgICAgIDYzLFxuICAgICAgMjE4LFxuICAgICAgMTI3LFxuICAgICAgMTk4LFxuICAgICAgMTQxLFxuICAgICAgNDUsXG4gICAgICAyMDYsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgNjcsXG4gICAgICAxODUsXG4gICAgICAxNDgsXG4gICAgICA3NyxcbiAgICAgIDExMyxcbiAgICAgIDE5MSxcbiAgICAgIDEzNSxcbiAgICAgIDMxLFxuICAgICAgMTczLFxuICAgICAgMTQsXG4gICAgICAyMzMsXG4gICAgICA5LFxuICAgICAgODEsXG4gICAgICAyOSxcbiAgICAgIDE3OSxcbiAgICAgIDIzOCxcbiAgICAgIDEzOCxcbiAgICAgIDQsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5UUZGRzM4WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMyNzI2OTgzNTg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcwODgwMjY0NzM2OTUwOjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3c3VNQUdFUFhYaHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNTQyN2o3SlNWRWRmQzU5bmZYQWsyMzVwdzhJckFUQW1JeWJGUVY5Q1RTVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMV25FdkFqS0kvM3NvaEtJMjNlY1UzbHh1Vk9wMm5lN0VLU09haGdvanJXV0NzZFoxczhPNUxiU0VNNEdNWUh6RzY4Sm5PelJ4eFdjQ3R5S1ozck9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpWEZiNVEzM3oxUnhjWHBFU3U2Vm40RjVxR3o5Nlo5RThBK0tjNGxiWjI3azRlT0VEeEh4MzY0N1QyUVBlR1dvemVuWUlpMDlJVTFJcUtGTm9wcnNodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzI3MjY5ODM1ODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc3NDIwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw4UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDhQLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDNrbkFZUHVhTE1uRWV3dTRhMWtFSytaMkRQdDVKYlZIRTl5R3dxbFFLdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ1NzYxODAwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NjUyNTY0NjA5XCJ9Igp9"  // PUT your SESSION_ID 


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
