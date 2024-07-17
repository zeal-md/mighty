const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
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
global.caption = process.env.CAPTION || global.caption || "all in all we are family" 


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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_25_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICA1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlQ1T0svVDBrc3o2MVEzejlWa0R0UHBDcXJJS3BNNnVkdnppVmxKZitIL0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRHcjUtdkFZUTBpbjk4b1Q3d2FYMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk0OTNjNGQtMjZlMC00MjQ2LTgzMzQtZDc5YzYxOGNkZWEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTY0LFxuICAgICAgMjE0LFxuICAgICAgMTIyLFxuICAgICAgMjAwLFxuICAgICAgMTEyLFxuICAgICAgOTksXG4gICAgICAyMTgsXG4gICAgICA1NSxcbiAgICAgIDkxLFxuICAgICAgMTg3LFxuICAgICAgMjQwLFxuICAgICAgMjEwLFxuICAgICAgNDYsXG4gICAgICA4NyxcbiAgICAgIDE3MSxcbiAgICAgIDYxLFxuICAgICAgOTgsXG4gICAgICAxNDEsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDU3LFxuICAgICAgMTE4LFxuICAgICAgMjE0LFxuICAgICAgMTIxLFxuICAgICAgMjQyLFxuICAgICAgNTIsXG4gICAgICAyNTAsXG4gICAgICA0NCxcbiAgICAgIDcsXG4gICAgICA2NixcbiAgICAgIDE5OSxcbiAgICAgIDExNixcbiAgICAgIDEzMixcbiAgICAgIDE2LFxuICAgICAgMTc3LFxuICAgICAgMjI4LFxuICAgICAgMTgyLFxuICAgICAgMzQsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRk1TTUNENDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0MjY5NTIxOTo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1NTgyNzkzNDAyNDM6NTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmFwaGFh8J+MnlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uSzB0TUZFTUNNMzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjNKTEJtT0xkcXNiY05Fa2daYVpOMjVOdWo0QUUzZ1RmQ0FwMitFSld6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrSmFORjY1M0QzTjU2cStsTGZzQTZ0VUhsMStVUzVRWWg3Yi9ZMVEvK01FLzlWUE9jaWp1TTljbGlOam5GR3FPdGY2aENpNkcyVTB0U0M5dE9WU1JBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1S3ozaUFjS3dZdWtxcWlKVkc0VzFoWXBZUHloNTFCN2syT1I1UFJEYXE5c1k0S1BFWWEwTzVQVXNYZ1lHMGdGZ1BvZ3RDTWZlUndjV2xmZkU3MXJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDI2OTUyMTk6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIyMjcyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQwMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDAxLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWhQWHNFdklCYjdVUnR2aFVDRFpZUGpxckdlT1BUeUI2Wmd6Vll5SXRpWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE3NTkzOTU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RAPHAA-MD",
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
