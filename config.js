const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://QasimRai:Lunmera@atlascluster.ahk537j.mongodb.net/"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923051391007";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923051391007,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_03_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTkwLFxuICAgICAgICA3LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitmQm1TVHovcnRIcXI2YVozQnVwZ1VYV0tydFowRlkwNHBxSndlKzZWdTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDUxMzkxMDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5Mjg1MDAxOTAwQTVGRTMxMDUyQTUyQzkyMjlBMjQ4NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3NzQ5OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNTEzOTEwMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEzMUI4NjhDQzE2N0Q4QjAxQjUyMkY0MTE5MTk0NzlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc3NDk5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5a1RIZV83Z1JlQzBuWHd1bDN0ZHNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2Nzk2MDg5LTZjODAtNDBiOS1hOGY4LTcyMzdhMGFkMzMwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAyOSxcbiAgICAgIDEyMSxcbiAgICAgIDIwMCxcbiAgICAgIDIyNSxcbiAgICAgIDIxMixcbiAgICAgIDE4NCxcbiAgICAgIDE4NyxcbiAgICAgIDE0NixcbiAgICAgIDgsXG4gICAgICAxMixcbiAgICAgIDE2MyxcbiAgICAgIDIwNixcbiAgICAgIDgxLFxuICAgICAgMjI0LFxuICAgICAgMzIsXG4gICAgICAxMTYsXG4gICAgICAxOSxcbiAgICAgIDIyNixcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDEzNyxcbiAgICAgIDkyLFxuICAgICAgMjQsXG4gICAgICAyMDIsXG4gICAgICA2LFxuICAgICAgMTc2LFxuICAgICAgMjIxLFxuICAgICAgMjQsXG4gICAgICAxNjEsXG4gICAgICA4MSxcbiAgICAgIDc3LFxuICAgICAgMTQ1LFxuICAgICAgMTk4LFxuICAgICAgMjM1LFxuICAgICAgNzUsXG4gICAgICA4MixcbiAgICAgIDEzNCxcbiAgICAgIDIzMSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ1WjRMUVZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTEzOTEwMDc6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTI3OTE4Njk0NTQ2OjQ2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuqngeKYhlNUUkFOR0VS4piG6qeCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNpdnBjSEVNL2l3N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvQWtqaXRSc3NsamJYT0tZY0c1a1E4YnhVdkdydGtFMmk3QStyaS9tYVhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhQMklDL25DamVXeFpZOWZGcGdCYm9oWjNlU1Jna092a1diZ3BaMVlrSEdYcXZ6QjE2VnpsQnUwKzUxRTZHeGdySWZWcTEveEd0N0c3OHFFaDdINEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRudTlqQkU0cEc0THlJYnpsb3dtZGRqQjZZYWxicmpvam9xODdCRWdHSTZlZEdITHdvQTlvZ09pSUZRY1ZGdUlZcm9TamN3NWc5QnhsWEZGQUpsN2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1MTM5MTAwNzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3NzQ5OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDRnpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNGei5qc29uIjogIntcImtleURhdGFcIjpcIndSNURtUmJoZ3l6WjFKZWF1VFBkRXB1eHRlRlpPY2NCUDZQQS84STdvZ3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyODMxMTEzMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "RAI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
