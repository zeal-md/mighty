const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="eliapaulo2004@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/tanzania";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "all in all" 


global.devs = "255683372250" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255683372250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "true" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trrue"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_55_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2VFRqSDJnd1FQS1BDOGhyVU9JN2NjbmNLL1FnNnphWDd3Z2owS1Q0SnJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY4MzM3MjI1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM2RDNDQUMzRjRCM0QzNUU4MjFCMDQ5NkJFMEFCRDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTY1NzM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBGWldhVTRuVGdhZ1VUdUE3YUJrVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTAzZWUzYjMtZmU5OS00NWUyLTljOTgtMzY3ODk0YTRmMjRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDExNSxcbiAgICAgIDg1LFxuICAgICAgMjQ4LFxuICAgICAgMjE0LFxuICAgICAgMTksXG4gICAgICAyNDksXG4gICAgICAxNzIsXG4gICAgICAxOTAsXG4gICAgICAxNzQsXG4gICAgICAyMjksXG4gICAgICAyMzUsXG4gICAgICA4NCxcbiAgICAgIDE3NyxcbiAgICAgIDIwOSxcbiAgICAgIDc1LFxuICAgICAgMjU1LFxuICAgICAgMjMsXG4gICAgICAxNzcsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAyNDQsXG4gICAgICAxMTcsXG4gICAgICAxNTEsXG4gICAgICAxNTIsXG4gICAgICA5NyxcbiAgICAgIDMyLFxuICAgICAgMjQ2LFxuICAgICAgMSxcbiAgICAgIDE1OCxcbiAgICAgIDkwLFxuICAgICAgNDYsXG4gICAgICA3MSxcbiAgICAgIDY0LFxuICAgICAgMTY1LFxuICAgICAgMTI2LFxuICAgICAgMzAsXG4gICAgICAxNTQsXG4gICAgICA3NixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFNVpLOE5WS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjgzMzcyMjUwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNclwiLFxuICAgIFwibGlkXCI6IFwiOTYxNjczMzc5NDM2MTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2OHlhWUZFTjcvdHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaE1WTWZ0TCtTUURWM29tcm5XN0pzdnlwTEpZWnB1TmlXK2U1dlBnVkcybz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2TnQ4QnZBM1hnZDhRbkZmRTQ0R2xXWU9uVGYyQUhTMVY4SGMxLy9BaGJMQkMxZU9XclFvaGpFOFhmVVd2TDlOdk5VZ2F6MUN4UjNrQ005YlJlNjVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHM3hKUnF2UEtidlZ2Ky9rMjd1RUlvWDF4akpybCsxVW9NYkluYS94TUVjUDJVcys0S3IwT0FBUUoyaTZrZUMwRmpPa0tnd3h3NzZEa1QyTkFRK1VoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2ODMzNzIyNTA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTY1NzMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0xsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHTGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJleTlLTm1HS2NoRkFWblphS0ZMU3ArN0FiZVk1YnpDWlZlbS93aDdDVVlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjMwNzI4OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDU2NTczNDM2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "mungu mwema",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "all in all" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🌞",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Raphaa",


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
