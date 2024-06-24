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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923070110525,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_34_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFIa3hncHppc2RrRFJMV3RYQXgyQkNCeWROSDRKNTdQSTl3OTcxaGtFVEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcwMTEwNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MkM4NDA1MzE3MjdCOEFFQjcwODYxM0Q1OEUyMEUxQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyNTA0NjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzAxMTA1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyQTM4MjUzNzJBMTk3QUNGREQ0RDRDQzFBOUEyOENGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTI1MDQ2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiZ18tbXRhR1NyR09LOXd3Vl8tZnBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiNTMzMDNkLTEyNWYtNGQyOS1iMTk4LTUyNTM0MDYyMGM2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxODQsXG4gICAgICAxNTUsXG4gICAgICA2NSxcbiAgICAgIDI0NCxcbiAgICAgIDIyNixcbiAgICAgIDMsXG4gICAgICAxMjUsXG4gICAgICAxOTQsXG4gICAgICAzNyxcbiAgICAgIDE0NyxcbiAgICAgIDE1MCxcbiAgICAgIDIwOSxcbiAgICAgIDEyLFxuICAgICAgMTM0LFxuICAgICAgMjI0LFxuICAgICAgMTU2LFxuICAgICAgMTc4LFxuICAgICAgNzksXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAzLFxuICAgICAgMTY0LFxuICAgICAgMjM4LFxuICAgICAgMjMyLFxuICAgICAgNixcbiAgICAgIDU3LFxuICAgICAgMSxcbiAgICAgIDE4MyxcbiAgICAgIDE4OSxcbiAgICAgIDE3MSxcbiAgICAgIDk5LFxuICAgICAgMTE5LFxuICAgICAgODksXG4gICAgICAxNjMsXG4gICAgICAyMjQsXG4gICAgICAxODMsXG4gICAgICAxNjMsXG4gICAgICA2MixcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWk0ySEFKMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcwMTEwNTI1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaEVlWiBKYU5pXCIsXG4gICAgXCJsaWRcIjogXCI5MzA3NTYzMjM3NjI2OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpiNHA0SEVKZmM1ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxQWFLYUZOb0NvVmpxVFFNZkgwVmNIVkhvMXIvMGdLanllN0diSUcxWVJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjI5dlFmbWg1WExmcVJRU055NkpvMm5jbzh6YWhEbzdJSWM1cGswK3lKekxtcVp0OFJUTGQ0ajhoUkhPdmdoRDFiS1hnU3pxazVBV0o2UTJVckFNVENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhveXo3bUJueStrcGZIeW1HRE8rVHZoeWJyTUlkcm94Sk43OGFwVEE2a2pGc3dJZFpQOEg3TkVwUzZ6ckxqbzNuMUUvTEYrSEJpS0h0Z3p1b1dscml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MDExMDUyNTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI1MDQ1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtlVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2VVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0VEZkx4cDJvUEwrQ1ptaFlIOGR2QnlQRXFqQ3pTdTZ0cGp5VkpjMzhmcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQzNTgwMDQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyNTA0NjA5MjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sheezi-creation",
  ownername:process.env.OWNER_NAME|| "sheez",


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
