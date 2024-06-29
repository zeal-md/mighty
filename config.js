const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="xoulser@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BxR0LrCkAVKGHriVvo7sKy";
global.website=process.env.GURL || "https://chat.whatsapp.com/BxR0LrCkAVKGHriVvo7sKy" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "🖐🏻🩵" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919633605648";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "919633605648";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "919633605648";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919633605648";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_36_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3LFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICAyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9EelNxUUdZS2pRSjkvVUg0Z1QvN3psUFcyZXdON1c1d05kT3lFNHNNSnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpwVTdsblR1VEpDWVRuRnliQmxiU1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzMzMmI0Y2YtZTlmNS00YTExLWE1ZGYtMzQ2YjA0OWNlYzY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDE5LFxuICAgICAgMjQ4LFxuICAgICAgMTkzLFxuICAgICAgNTQsXG4gICAgICAyNDYsXG4gICAgICAzNCxcbiAgICAgIDI0NSxcbiAgICAgIDEyMSxcbiAgICAgIDE4NCxcbiAgICAgIDE4OCxcbiAgICAgIDIwNSxcbiAgICAgIDgzLFxuICAgICAgMjI4LFxuICAgICAgODMsXG4gICAgICAxNzYsXG4gICAgICAxMTMsXG4gICAgICA1MyxcbiAgICAgIDI1NCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDU5LFxuICAgICAgMjA1LFxuICAgICAgMjI0LFxuICAgICAgNyxcbiAgICAgIDI1MyxcbiAgICAgIDE3NyxcbiAgICAgIDM2LFxuICAgICAgMCxcbiAgICAgIDQ5LFxuICAgICAgMjM0LFxuICAgICAgMjMsXG4gICAgICAxNyxcbiAgICAgIDI0MCxcbiAgICAgIDE3MixcbiAgICAgIDE5OCxcbiAgICAgIDQ4LFxuICAgICAgMTg0LFxuICAgICAgMTIwLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBKVDVGWlIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk2MzM2MDU2NDg6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjhaRcXG7jhaRcXG7wnZu4XFxu44WkXFxu8J2bqVxcbuOFpFxcbvCdkYhcXG7jhaRcXG7wnZC/XFxu44WkXFxu8J2buFxcbuOFpFxcbvCdkYxcXG7jhaRcXG7jhaRcIixcbiAgICBcImxpZFwiOiBcIjk0MzYwNDMxNTQyNDAxOjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luaHd6QVE5ckQ3c3dZWU9TQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVExJdy9oVTZFY0J5eFAreGhNKzdrQTQyblMvTE9rRDM3VGljdnFyYzF6VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDSUZncFpxQTJ2NllQMmJrT25tR2JTKzVQWW9tTzBzYTlUVm9yS0ZGOFBxVGVrOVlzTmdnakc5NmpBRkZlcVNtaW1ldHRBSkQzUEpYOWpqUEZmTVNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3UWhOY0l6Uk9QRW13N2dhRnFHdU1zWDNLODhkMmdHeTY2RGRDK1llRndSQnpwOXZpLzNoM0tsL1B2Z1BCMUlOaGpEQ29wdmRPUzluQzRCNGNDZlNDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk2MzM2MDU2NDg6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk1ODg5ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOcGFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wYS5qc29uIjogIntcImtleURhdGFcIjpcImc3U2tXQzZZaXVLdTMxTmd2ckozbUt1ZHZ2NHhPWjVGV1ovaFFHVmZrWVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNzczNDQ5LFwiY3VycmVudEluZGV4XCI6NTYsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsNTZdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg4NTMwODQzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```🖐🏻🩵```"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Xᴏᴜʟ-Mꜰ",
  ownername:process.env.OWNER_NAME|| "Xᴏᴜʟ Sᴇʀ",


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
