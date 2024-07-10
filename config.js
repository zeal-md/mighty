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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923134091129";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923134091129,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_25_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4LFxuICAgICAgICA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTSGt0eGgydWV4Q1F5dmZaSExDV0JTTG4vRDlmeW92bXN1dDhRNlMyMm13PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItUlFzQndzaFMwYXRvUGlpQ1lUdldRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlZjY4NjA3LTM5NzYtNDdlYS05NGQ0LWU2ZmZmNTA2NTU0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxNDYsXG4gICAgICA0OCxcbiAgICAgIDkyLFxuICAgICAgMjQ1LFxuICAgICAgMTI3LFxuICAgICAgMTQ4LFxuICAgICAgMTk3LFxuICAgICAgMTk3LFxuICAgICAgMzcsXG4gICAgICAyNTIsXG4gICAgICA1NSxcbiAgICAgIDMzLFxuICAgICAgMTcxLFxuICAgICAgMjIzLFxuICAgICAgMjAyLFxuICAgICAgMTkwLFxuICAgICAgMzksXG4gICAgICAxNzQsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxNzUsXG4gICAgICA1NCxcbiAgICAgIDE5OCxcbiAgICAgIDI3LFxuICAgICAgNTMsXG4gICAgICA3MyxcbiAgICAgIDIwNSxcbiAgICAgIDE0NCxcbiAgICAgIDczLFxuICAgICAgMTgsXG4gICAgICAxMTUsXG4gICAgICAyMzQsXG4gICAgICAyMTgsXG4gICAgICA5OCxcbiAgICAgIDEwNCxcbiAgICAgIDgzLFxuICAgICAgNTgsXG4gICAgICA0NyxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZKTk41TlZEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0ODY5OTUyODgwNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZiPCdmarwnZmd8J2ZlvCdmaLwnZmi8J2ZlvCdmZlf8J2Zg/CdmarwnZmo8J2Zo/CdmZbwnZme8J2Zo1/wnZi98J2ZnfCdmZbwnZmp8J2ZqfCdmZ5cIixcbiAgICBcImxpZFwiOiBcIjI2OTc3NTkzODgwOTk1NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5OWxOY0NFSUw5cnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidFYzbURUNEtHd0FCVkFnT21TU29uYXE2d1p4d2RkYTF0cThQWXFud1YwMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1TVpmVlpsNWdIcEc0TG15cENodUJpVlJraXViM2xScnN6dlVELzg0S2h5c3Z6Nk5WbGNYaEF1cFpaa0ZRdGJkcXdQL3UyeERBYlFkWWN5MXI1V1REQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPK2ZmSGdnT2NHWG1UUmhhN2p0YjhQSVAxVitPcmFSeVcvNlFDU2R0Z0kvTWZWSjZjZlljakVaMFVOcFA1ZUJ0OVc4aXBURm8zM3ZYRzllN2pqcGFoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODY5OTUyODgwNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDM0MzExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3RzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPdHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZSVcrZUpIT3BxWkdKdG80ZVNYdmx3czJ0cnNSeVYwbVMzekRRNEpLOGdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxOTY1ODY1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDM0MzE4NTg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙇𝙤𝙫𝙚𝙡𝙮𝙬𝙧𝙞𝙩𝙚𝙨43🤍❤️‍🩹",
  ownername:process.env.OWNER_NAME|| "𝙃𝙪𝙨𝙣𝙖𝙞𝙣 𝘽𝙝𝙖𝙩𝙩𝙞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
