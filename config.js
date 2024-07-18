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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_34_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICA1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkWkFyanF4NHZuK1BtMDU1L0pMeVIybno2Q3dCKzNkZDNReG5yaHBiY0FRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNd1VOeHdjMlNubTFHRTl2ZzJqYW1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhNDkyNWVkLTQyYTMtNDUyMS04YTQ5LTFkODQ4YTU0NzQzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDE0MCxcbiAgICAgIDEyMCxcbiAgICAgIDIxMyxcbiAgICAgIDE1OCxcbiAgICAgIDIwNixcbiAgICAgIDExNSxcbiAgICAgIDMwLFxuICAgICAgMTgyLFxuICAgICAgMjMxLFxuICAgICAgMTU5LFxuICAgICAgMjAxLFxuICAgICAgMjMxLFxuICAgICAgMTEzLFxuICAgICAgMTk1LFxuICAgICAgMCxcbiAgICAgIDEwMyxcbiAgICAgIDE5MSxcbiAgICAgIDEzMyxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgODcsXG4gICAgICAxNTEsXG4gICAgICAyNDgsXG4gICAgICA3OSxcbiAgICAgIDE3MCxcbiAgICAgIDc2LFxuICAgICAgNzQsXG4gICAgICAxMjYsXG4gICAgICA3MixcbiAgICAgIDEyNyxcbiAgICAgIDExOSxcbiAgICAgIDM2LFxuICAgICAgMTc5LFxuICAgICAgMjM1LFxuICAgICAgMjE5LFxuICAgICAgMjUwLFxuICAgICAgMTYwLFxuICAgICAgMixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU1TTYySzlDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NjAwNTgyMDI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJURUNIIEtpTkdcIixcbiAgICBcImxpZFwiOiBcIjE4NzE3OTM4OTE2NTczMzoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYld4MlVRa3V6a3RBWVlEaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1YOW9XQ2NUYUY5ckFrcytsWHlXRGF6U1RCUUUrNWdoVUk5MDRnWXg2Zzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzMweG5Sc1FHL1lvelh2TlBWL3dHK3BlRHdIWHVIbnV6SFV5S1EyRmo1VVhEaDJEWDVKbXYyL05OcXhwV3FVNVV1TEU3UjFjUjBRbXRaWG1yUGpDRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUVBINFNBNEY4ZWxINGt6UjBDaWJZK1RTYzdKUlRqNkdKbjYvem5IVHlRVE54czZwUkI2VlVCZEpldXNzK2syOTNxdlg2ZFkzTzRIZTg1TDRlOTdJanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDYwMDU4MjAyOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMTY4ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEQU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURBTy5qc29uIjogIntcImtleURhdGFcIjpcIlRyR0RudjBkRGJMMlJleDdTeW82TTQwdUJEMThWY2pxd3NlV0xJYVRIU2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyOTg2Njc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
