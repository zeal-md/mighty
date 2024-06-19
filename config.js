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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_03_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBNEdabmRCM0dsL3dwVEQ4WHdWOTF1TjBBN3gxUUNEcUV4RFowTE96bzRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOcTI5ckhpMFFQaW9ZN0F0SG9rNHVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3Yzg1NzBkLTkxYTQtNDQ5ZS04ZGI4LTFkMjM3M2M0NmY3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDIxNSxcbiAgICAgIDEzOSxcbiAgICAgIDExOCxcbiAgICAgIDkxLFxuICAgICAgMTA2LFxuICAgICAgMTIyLFxuICAgICAgMTYyLFxuICAgICAgMTYwLFxuICAgICAgNjMsXG4gICAgICA0NyxcbiAgICAgIDEzOSxcbiAgICAgIDEyNixcbiAgICAgIDIxLFxuICAgICAgMTY3LFxuICAgICAgMyxcbiAgICAgIDI1NSxcbiAgICAgIDE4LFxuICAgICAgNTEsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTYzLFxuICAgICAgMjMzLFxuICAgICAgMTU2LFxuICAgICAgMjMxLFxuICAgICAgMjI1LFxuICAgICAgMjksXG4gICAgICAyNDYsXG4gICAgICAxMDYsXG4gICAgICAyMjgsXG4gICAgICAzMyxcbiAgICAgIDI0OCxcbiAgICAgIDE1NyxcbiAgICAgIDE1NCxcbiAgICAgIDU1LFxuICAgICAgMjAsXG4gICAgICAxMzgsXG4gICAgICAxMTAsXG4gICAgICAyMzIsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFLOUFZTUE0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI5ODQ5NjgwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb25hdmVudHVyZVwiLFxuICAgIFwibGlkXCI6IFwiMjQ2MDY3NDg0NDMwNDQ1OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0c2azl3TEVNV2h5ck1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFVTFBQkxKVFVHMmhqYno5VGFqNGxqZGs0bHNRemJMVU8rOHhrUXNtN2tzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndWWEdKZkFKRFhrVkJkRnlaUHExZVM1eXl5WUd4QjV6K0F6bWJQekgzU2d2aXNjRERham5MUFJsNEdOVGhWaEhwSnpRRU4rbjc1SUI3dUVaS1Y0emlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVxbjc5RnhUeFdGUHFyRU9qa2FnYVZENWNXc2t5MHJRSW1pelRpVGdnRWUwb2ZwVU1VNWg0VXlBSXRiRnF3eG1BUkN5QzJTeVJONHNmTjhNaFpqRWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjk4NDk2ODA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Nzg0MjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlFYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUVguanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
