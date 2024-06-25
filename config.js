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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923499833604";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_19_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyWTRiSUJlV3dqc3FYOUFvRkpQY1d1WXpkZWZLNkVGdFdrWU9XZk51WldFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpX3RaMTVFQVJCQ0t1b0l1Wm1DOXlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzNzdmN2RjLWFiZGUtNDAyNC05MzgxLWEyZDNjZjhmZGJmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMzYsXG4gICAgICAyMTEsXG4gICAgICAyNTEsXG4gICAgICAxMjksXG4gICAgICAyMTIsXG4gICAgICAxMTIsXG4gICAgICAxNixcbiAgICAgIDE0OSxcbiAgICAgIDE0OSxcbiAgICAgIDM3LFxuICAgICAgOTAsXG4gICAgICAyNTIsXG4gICAgICAxOTUsXG4gICAgICA5OSxcbiAgICAgIDE5OCxcbiAgICAgIDIxNyxcbiAgICAgIDExMCxcbiAgICAgIDYwLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTA5LFxuICAgICAgMTgxLFxuICAgICAgMjE2LFxuICAgICAgMjQ2LFxuICAgICAgMTgyLFxuICAgICAgMjAzLFxuICAgICAgMTEwLFxuICAgICAgMTAzLFxuICAgICAgMTIxLFxuICAgICAgMTUzLFxuICAgICAgMzUsXG4gICAgICAyMixcbiAgICAgIDE5NixcbiAgICAgIDEwOSxcbiAgICAgIDMyLFxuICAgICAgMjIyLFxuICAgICAgODYsXG4gICAgICA0NCxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVCS0VDNURKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk4MzM2MDQ6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODI4MjU1MjEyNzQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZWw4b2dIRUxUUDZyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR5M0RoK0dvQlJhdDl3dmpzVXJ4UEVxYlNsalVsaTNhNU8vdDJDZWtGbTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzhjU0hQeG8wT0ZKZXBVVzN3NXBZSENndUFKMERTV0ltMUF6R01IQ1ZEMm9SVGFxMVRPQSs0QmFkT3d3ckhMd1lBb3ZCdXpQSDM2N2xSb2ZsV2RQQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSW5WTmtwMEl4KzNPTGxRY3NTcFNLQWNGUHpDc2tvcDNhRzQvTWR5RzZnd1pvRlNIeEIvdEZXeGlhNHpGMG9IVi9lclJFY3B4WG5hTGFJM3dnNzJmRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk5ODMzNjA0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzE0MzYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkxzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpMWluSCthRnRSekV2dDBNdmhReU5lYytONGdLa083Q2FlcVdMUDZFNnNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTc2OTc5ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
