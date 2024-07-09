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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "all in all" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255742695219";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_30_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllvcDJFa29JWHBjSS9VMnh2T2ZWTEtMeXZIRTdsSDRUWUlsZHZxTlkrUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYxSWQyYXliU05TSmUyMWNTTElWNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJlNDE5NTctZjlhNS00MDI0LTk1ZmMtOTY1MDNhMzliM2VhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMTgyLFxuICAgICAgMTIwLFxuICAgICAgMjIwLFxuICAgICAgMjM1LFxuICAgICAgMjA0LFxuICAgICAgMixcbiAgICAgIDEzNSxcbiAgICAgIDgyLFxuICAgICAgMTIsXG4gICAgICAxLFxuICAgICAgMTgzLFxuICAgICAgNTcsXG4gICAgICAxNTMsXG4gICAgICA2MyxcbiAgICAgIDI1MyxcbiAgICAgIDU2LFxuICAgICAgMTcyLFxuICAgICAgMjQzLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMjI4LFxuICAgICAgNTMsXG4gICAgICAyNDMsXG4gICAgICAxMTAsXG4gICAgICAxMSxcbiAgICAgIDIxMixcbiAgICAgIDExMCxcbiAgICAgIDEzMCxcbiAgICAgIDEyNixcbiAgICAgIDEyMixcbiAgICAgIDE5MCxcbiAgICAgIDE1OSxcbiAgICAgIDgwLFxuICAgICAgMjQwLFxuICAgICAgMTE5LFxuICAgICAgMTQyLFxuICAgICAgMTIsXG4gICAgICAxMjgsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGSkY2MVZGNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQyNjk1MjE5OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU1ODI3OTM0MDI0MzozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMkt4UGdIRU1EMnRMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFSZ29LR3phNVJvamFIMkx4WWRhbUJGZWk2dmRqVC8xTHZESGpncHBlMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEtxTjYwQURPV0dkM1ZDcjRwa0txSVQrbStyNGViZ0U5SzB1ZVlpZ0l0UGphdm9KKzdhRXZsaUs1NzNydXBnV3NueUxFdTI2LzhzcDBWVGtOVUtrQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRm9iejh4b1hkanlleUp1WFl6RGh4UlZsQmE4U0oxMGN5TnVvVzI1U1pGUTZDeDgrTGJjQkdibEpNYlhMS1VNUVRFcUVwN2h0QTEyZ2FUL25RQTQ4aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQyNjk1MjE5OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUzMTc5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU4cFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRThwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmZ6NlZxUXhSYzdKZmZ2enlNaktwUGdJYXFXWjJVS1FEeCtmSGRSV0lLWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTMxODIxODQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMzEzMDQ0MDQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "mungu mwema",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "all in all" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
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
