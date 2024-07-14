hiconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_48_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZzTWJRQjg5aHVIUEJnSXV4Zk93SGVJK0pRYTVrZCtWVTJBSXRMaUtVYlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjc3MjE3OTQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Q0FDNDYyNDcwRjY4QzFGNUU0Qzk1RDJENDFFRUUxMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5NjQ5MDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzcyMTc5NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI5QTI5MEU0NTYwM0NGOUFERjIzMTNENDRGMkRBQUMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk2NDkwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0TWQtSWp6RVMxQ181Z1J0NVdEejVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlMjdlNTBmLWY2YzItNDMxNS05MzZlLTkzOTQxYzI0MzRiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAyNDAsXG4gICAgICAyMzcsXG4gICAgICAxMzUsXG4gICAgICAzMCxcbiAgICAgIDUxLFxuICAgICAgMTU2LFxuICAgICAgMjI4LFxuICAgICAgNjQsXG4gICAgICA1OCxcbiAgICAgIDEyMixcbiAgICAgIDE5OCxcbiAgICAgIDE5MCxcbiAgICAgIDE2NCxcbiAgICAgIDc4LFxuICAgICAgNjQsXG4gICAgICAxMzMsXG4gICAgICA3NSxcbiAgICAgIDY2LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTE3LFxuICAgICAgMjI3LFxuICAgICAgNDYsXG4gICAgICAyMzksXG4gICAgICAyMTcsXG4gICAgICAyMzMsXG4gICAgICA0OCxcbiAgICAgIDYxLFxuICAgICAgODMsXG4gICAgICA3NyxcbiAgICAgIDI0MixcbiAgICAgIDExNCxcbiAgICAgIDIzNCxcbiAgICAgIDE0MixcbiAgICAgIDk5LFxuICAgICAgMTgyLFxuICAgICAgNjUsXG4gICAgICAzNCxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyQ1lWNVJWWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc3MjE3OTQ1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTk2Njc4ODU4NzcwNzoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXMg8J+Sq1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015UW5NY0VFS0d1ejdRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSXVkazVGTE42ZHhob2pta29lMmNjTFJhVTY5RERtc2NwQmZ4SmZPV3hCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1TklwU0dWYU5hblcrM1dFeGdyTkkzbEZoL05oNmdTVEhqSzFVZjFBaHRKM2dQd091QnJCc1Bpck9aSGNHRjNnczNOV0Q4VS85dDNITUh5VG9NVlVBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXSTlrcTUvWDV0UUMvZHMxNFovbFgwaVdsdUdWZFlJTW5OZTJydFF6aWRaTllualhkeHJ3ZlFQbWtJaTNlYXdteWJ0SzdndDhQMzM5UnhBSWh1QUpqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzcyMTc5NDU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NjQ5MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFrQUFCcHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQWtBQUJwcS5qc29uIjogIntcImtleURhdGFcIjpcIkVqRWRHU1BTY2xuYUpJL3lKTnd0a1Nidy9aUWVoQ3ZhcVRlWFV6NTZXaWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMzEwMDQ5MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDldfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI4MTQzMDc5NlwifSIKfQ=="  // PUT your SESSION_ID 


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
