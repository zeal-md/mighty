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

global.warncount = process.env.WARN_COUNT || 3
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_51_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZk1acVE4c0Fzdm1JaGVVTFdZS1JYWkZJZ3p2Vmo3R2FzSmp3N3gyQU5mTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicmh0TVI2czVRemk1UnRjdWNNb1BzQVwiLFxuICBcInBob25lSWRcIjogXCJiMTU2NmQ3Ni02N2I2LTQ2NGYtYTkwMS01ODlhZTE1NjcxYmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMjE2LFxuICAgICAgMTgxLFxuICAgICAgMTY2LFxuICAgICAgMjA0LFxuICAgICAgMzIsXG4gICAgICA1MSxcbiAgICAgIDgxLFxuICAgICAgOTIsXG4gICAgICAxMDUsXG4gICAgICAyMDksXG4gICAgICAxMTgsXG4gICAgICAyMjYsXG4gICAgICAxMzQsXG4gICAgICAxODgsXG4gICAgICAxOTQsXG4gICAgICA2NyxcbiAgICAgIDIxMyxcbiAgICAgIDE0MCxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAxNTksXG4gICAgICAyMzIsXG4gICAgICA0NSxcbiAgICAgIDI0MyxcbiAgICAgIDQ2LFxuICAgICAgOTUsXG4gICAgICAyMjIsXG4gICAgICAyNTMsXG4gICAgICAyMTMsXG4gICAgICAxNzQsXG4gICAgICAyMjQsXG4gICAgICAyMzMsXG4gICAgICAxNyxcbiAgICAgIDIwMixcbiAgICAgIDEzNyxcbiAgICAgIDE4MCxcbiAgICAgIDI0NyxcbiAgICAgIDE0OSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5NFFTVjQySFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQyNjk1MjE5OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU1ODI3OTM0MDI0MzozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeUt4UGdIRUx1ZnM3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFSZ29LR3phNVJvamFIMkx4WWRhbUJGZWk2dmRqVC8xTHZESGpncHBlMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaWFXZVRDQmdpY1hiK3Y5RzZPVlladERJVFN1cXpGYXJzWnZYY2d6YTJsSnhtS0hxZ0NRZWpKdmd3S08yMTJrazVZV2VPeWFHOUtvM1l1TTZQQzJFQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicEdad291VTNNekY0YzZPdWJqSG5BaG1nUjBGQ29QQkU2bTVVWXZraTRoU2owQTNrSG5Tc25xcklGUjh2SjhJNXJrNkMrMDF6L1ZqNER5b0xHeE1sQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQyNjk1MjE5OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUwNDI1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU4cFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRThwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmZ6NlZxUXhSYzdKZmZ2enlNaktwUGdJYXFXWjJVS1FEeCtmSGRSV0lLWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTMxODIxODQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMzEzMDQ0MDQ1XCJ9Igp9"  // PUT your SESSION_ID 


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
