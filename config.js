const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="damindulakshitha10@gmail.com"
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
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94775893282";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94775893282";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_39_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkwvWVRDWnRwWU51dWFZaFRMNm5zZlFQeFVaYzNkcHpYR3lkRmkzUGFYdTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTY1OTA3ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk1MDBBNkREOUJBMDY2NDlGODFBMjM2NzM3QUI1NjdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQzNTE5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU2NTkwNzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MjhBODM3OTI1QUE4MTdFODk1RTc2RUM3RkU5OTg4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MzUxOTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmc3RWxURV9UMjZCdjRmWS1rMUFpd1wiLFxuICBcInBob25lSWRcIjogXCJiZDUzMzhhMi1mZjlmLTRjYjctODYzNC05NTFmNmJiN2Q0ZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTI3LFxuICAgICAgMjgsXG4gICAgICAxOCxcbiAgICAgIDc3LFxuICAgICAgMzEsXG4gICAgICAxNTgsXG4gICAgICAxMDksXG4gICAgICA3MixcbiAgICAgIDIzNSxcbiAgICAgIDY2LFxuICAgICAgMTMzLFxuICAgICAgMTIwLFxuICAgICAgNjAsXG4gICAgICAyMTQsXG4gICAgICAxOTUsXG4gICAgICA1NixcbiAgICAgIDIwMCxcbiAgICAgIDE3MixcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDMzLFxuICAgICAgMjQsXG4gICAgICAxNyxcbiAgICAgIDE3MixcbiAgICAgIDExNyxcbiAgICAgIDIzNSxcbiAgICAgIDI1MixcbiAgICAgIDIyOSxcbiAgICAgIDU2LFxuICAgICAgNjMsXG4gICAgICAyMzksXG4gICAgICAxODcsXG4gICAgICAxMzMsXG4gICAgICAyMDQsXG4gICAgICAyNDIsXG4gICAgICAyMjIsXG4gICAgICAxMTcsXG4gICAgICAyMDQsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLOTJCODZHS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTY1OTA3ODY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5ODk4NTE3MTI3MzM2OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTm8gTmFtZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDajZJSURFUE9EcjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVmYzNFF6SXpGVEtCVHd5N3pVM3BtblZibzZMaTVqT3B5aE5rUE9RdXEydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrOUNrZGNHaTVKSTRSRUN3SVVDYS9OM0c4SE80NTc4d0JxS21YM0h2ZjRJWGJva1drRk90UTlSWC9vLzJiSjhmczA0bzYzTDhvcVMvY3pISStRUlhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrTThqTlorVkpZRWJEN1Izd0VDRDVFbUVocGJRQVpZL3N5TU1zRUI4cHJLanIzN0lsY3FvcTlXRmR1Q2doU081KzV4MStlL3FZRUtyME9RNEx3ZzhCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NjU5MDc4NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQzNTE5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlvcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW9xLmpzb24iOiAie1wia2V5RGF0YVwiOlwiczZKeXNYKzU4OWxvQUFwNHdaUUNNTjlzVWt3QnkrcFUxOTl3d1YrZEdDMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTEyMDkyMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQzNTE5MjIzOFwifSIKfQ=="  // PUT your SESSION_ID 


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


  errorChat : process.env.ERROR_CHAT || "true",
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
