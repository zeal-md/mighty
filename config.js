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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_10_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI2LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWS2twVGFVcnNrZ01vaGowWHY2eUo3ZFBSRVhVM2EvbDBPQ1AzWEJPcno0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2Z0I4NUtjR1FQMlZSRW1DTzZyczJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1YWJlYWJhLWI2MzgtNGI3MS1iYTA4LWFjYmY4ODdjYjUzOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE2NixcbiAgICAgIDI4LFxuICAgICAgMTM0LFxuICAgICAgMjE3LFxuICAgICAgNDcsXG4gICAgICAxNzcsXG4gICAgICAyNTMsXG4gICAgICA2LFxuICAgICAgMTMwLFxuICAgICAgNTEsXG4gICAgICA2MyxcbiAgICAgIDE0NSxcbiAgICAgIDUxLFxuICAgICAgNyxcbiAgICAgIDIyNCxcbiAgICAgIDEwNixcbiAgICAgIDE5NixcbiAgICAgIDE2NSxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDU0LFxuICAgICAgMTEzLFxuICAgICAgNTgsXG4gICAgICAxNDcsXG4gICAgICAyMTEsXG4gICAgICA4OCxcbiAgICAgIDEzNixcbiAgICAgIDE4MCxcbiAgICAgIDE2MixcbiAgICAgIDg4LFxuICAgICAgMjA1LFxuICAgICAgNzIsXG4gICAgICAxMjcsXG4gICAgICA1LFxuICAgICAgMzMsXG4gICAgICAyMzAsXG4gICAgICAxMDIsXG4gICAgICAyMDUsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaS0FMNkNFUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDc1MzM1Njk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1MzAwNzgzNDg1MDgwOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEMXJUVVF0KzNsdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUNaSmJ0dXVXMlR0cVBWeW1GV0M3OWFkVDJxc2Z5WUQ3SWFPVzhtRFNHZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNVFdrQm1UUThOTG10YUllb2ZNWHI1bENoaWhFTE5MSTNRdkFRRktpTThRUFRUY1RoVlF3dGRmTXZlTE5ZYWVOYnY2K0VzalR4cEJhekVXRjgwWGtEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0TGxjZWVDNXk5WXB1U25pMGVFV3JQZDhnejZZZFE0TmhKaXl4Vk5sdm8wOGFqb2xGeUcyYklpRndWZUptMWI2RUthR1l6bWN3Qm1YRDdLRzBzZkZBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNzUzMzU2OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzMzNDM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUFBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFQUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1NWRHTmZkVTlkTFBOcVMvU3YzUm1WS3JKRGRGNEQvWFp2VXBQVHF3azM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTkwMTQyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyMjM2NTg4ODg3XCJ9Igp9"  // PUT your SESSION_ID 


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
