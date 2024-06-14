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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_27_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtK3dXMHZKb3FhUmV5Uk1BbXZ2Q1hOcUI0MitkS0hLYUMydktQSnpJZ1pzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjE4OTkwMjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxNjFDRjBBMUU5RjEwQTZGNzUzMDUyQjZFQkVENkVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODM1NzI0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjE4OTkwMjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFBNzJEMzZFN0YyMUY5NzIzNjE2MDhGRTUwMUI1OTExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODM1NzI0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTWHVHRDhTTVFhbUEzM08tMU03dUpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE5Yjc1NGFhLTRjNzAtNDM3Mi1hNzhiLWI1NDA1YzgwNzUxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMzMsXG4gICAgICAyMzAsXG4gICAgICAyNDEsXG4gICAgICAxMDYsXG4gICAgICAxMDgsXG4gICAgICAxMjMsXG4gICAgICA5NCxcbiAgICAgIDIyMSxcbiAgICAgIDU4LFxuICAgICAgMjM2LFxuICAgICAgMTgsXG4gICAgICA2NixcbiAgICAgIDIxLFxuICAgICAgMTA2LFxuICAgICAgMTgyLFxuICAgICAgMCxcbiAgICAgIDg4LFxuICAgICAgMjE0LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDk5LFxuICAgICAgMjI4LFxuICAgICAgMTA2LFxuICAgICAgMTYwLFxuICAgICAgMjAzLFxuICAgICAgMTA4LFxuICAgICAgMjEwLFxuICAgICAgMzQsXG4gICAgICAxOTYsXG4gICAgICAxNTYsXG4gICAgICAyNTAsXG4gICAgICA3OCxcbiAgICAgIDM5LFxuICAgICAgMTY2LFxuICAgICAgMTIsXG4gICAgICAxMDEsXG4gICAgICA4MyxcbiAgICAgIDE5NCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVXRTdUNUVFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYxODk5MDIwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzcxMjA1OTI1ODA2NzI6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWW91ciBWaWxsYWdlIFBlb3BsZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vMWhPWUVFUHFac0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMG1iK3FNOGw4Y1lyZ3U3alhOVzJxaTVmM2E4b1lkVjMxYnZBbUtRNmEwYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPeHl5MkpWK0VVWFB1b2c5M2kySXd4bDBWbXp4NXcvS2l0d1JHT3EyTklnUk02dU1ZTEdKUUdZZjl2b0F2aDBOcWNsaUU2MmNZQ2U1R1BYbjMyYUJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVMWszSFR5QjgwQkRQNmFUMGxaSjc4REJnU3ZFcUlxeGRGeldTcGpFY0JTSEp5bnVJaTF3QUxKR012d0k4U1JFS3BEYnIvMWZWRC9nSy80UjYxQnRpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYxODk5MDIwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MzU3MjQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHRGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMdEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvQURyUHYyV3lMaUZWQ3BWL292THBOTlo3MUsvK3BPaVJpOG9OOGlQVGk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODc3MzE5MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
