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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_15_20_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBaK3NHb2xIekFNZDI2R0FwaUhlZ2JqV3NQWkJiZWNIZDlSd2ViRFVGT0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NTE5NzczNTc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNEI4Rjg1NUNGNjA0ODUxNkQ2MjQzQjFCODA5MjMwNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MDI0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MTk3NzM1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDRjc5OEM3OEZBNTQzMjc5NDcwM0FCOTAxRTUyQjVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQwMjQ0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkUm5FUzFSNVNwdVRMd0lBMU9TQ0ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjZDI3MTE3LTMzM2MtNDJhZC05OTFmLTFmMjg4OWMzOGU2Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAyNDUsXG4gICAgICAxMyxcbiAgICAgIDIxOSxcbiAgICAgIDY0LFxuICAgICAgODEsXG4gICAgICAzLFxuICAgICAgMTM2LFxuICAgICAgNzgsXG4gICAgICAzOCxcbiAgICAgIDkzLFxuICAgICAgMjAzLFxuICAgICAgMzMsXG4gICAgICAxMzMsXG4gICAgICAxMjcsXG4gICAgICAxOTQsXG4gICAgICA2OCxcbiAgICAgIDIzNyxcbiAgICAgIDIxNyxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjQ5LFxuICAgICAgMTY3LFxuICAgICAgNTAsXG4gICAgICAxMzcsXG4gICAgICAxNDIsXG4gICAgICA3MSxcbiAgICAgIDE4OSxcbiAgICAgIDEzLFxuICAgICAgODEsXG4gICAgICAyMTcsXG4gICAgICAxNzQsXG4gICAgICAyMTQsXG4gICAgICA3NSxcbiAgICAgIDEwNCxcbiAgICAgIDg1LFxuICAgICAgNTgsXG4gICAgICAyNDEsXG4gICAgICA5NSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZV1RBTlBZQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NTE5NzczNTc0OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA2MDE0NTUyMzUyOTU6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+VuCBTcMOtxJFlciBNw6PFiCDwn5W4XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1BGMGI4RkVNZUk2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpY3BpNk9ZdE8xT3o0Tzk5Yk1qMzYzT0crOTFxelBJeVU5Uk1rcmtuQmpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFwUENDTHZnS2M2U05nS0RoaUpEMFg0LzN5aUxDT3h6aXFxc0dvZWhtczhkK21ZV0lBaHdsamZsb2ptTE9kTGpHbEJhcVdPUThJeWhwK3F0eUxNZkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImx0WFRWVHFncXlFZ3VmRE43ZHA2c3VUNTNtaURsTitZUTlmaWtSSUo3ME51K2EzUnJ3eC8xNDZOYnlKR2xwd0w1M1dkaUNuZHZmN3EvWGR0VVFOVERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzUxOTc3MzU3NDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MDI0NDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVkZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdWRi5qc29uIjogIntcImtleURhdGFcIjpcImxYaEkyQjM1WW5SYi9GbTZDQkRmR0ZyeVdwYVJTcnowVDA4RXA1Rlk2T2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NTYzMzgyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDAyNDQ0NTU0XCJ9Igp9|  ""  // PUT your SESSION_ID 


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
