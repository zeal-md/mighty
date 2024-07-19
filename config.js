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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+252905 131 075";




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
global.read_status_from =  process.env.kREAD_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_33_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ29xS1hMUVNjdlFEUEhLRDk5MlFyMnUrc3hVQVUzakxnbE9TMnJkTEZkdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTnJ0OXpFNXpRd0cxR0g3RU1rUlNJUVwiLFxuICBcInBob25lSWRcIjogXCJkN2QzODcwMS05YzUwLTRjYTItODJmYS00ZmM4ZTM5NWU3YjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTM3LFxuICAgICAgMjE2LFxuICAgICAgMTQsXG4gICAgICAxNTAsXG4gICAgICA0NSxcbiAgICAgIDE1MyxcbiAgICAgIDIyOCxcbiAgICAgIDYyLFxuICAgICAgMTM0LFxuICAgICAgMTg1LFxuICAgICAgNTAsXG4gICAgICAxMTcsXG4gICAgICAyMDEsXG4gICAgICA3LFxuICAgICAgNDcsXG4gICAgICAxNTQsXG4gICAgICAyMzksXG4gICAgICAyMzEsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDI5LFxuICAgICAgMjI4LFxuICAgICAgMzUsXG4gICAgICAxMzEsXG4gICAgICA5MSxcbiAgICAgIDQ5LFxuICAgICAgNzYsXG4gICAgICAxMDMsXG4gICAgICAxODQsXG4gICAgICA3LFxuICAgICAgMjA1LFxuICAgICAgNDgsXG4gICAgICA3NSxcbiAgICAgIDExLFxuICAgICAgMTM0LFxuICAgICAgMjM0LFxuICAgICAgMjE2LFxuICAgICAgMTkwLFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk43TDRMWjQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI5MDUxMzEwNzU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NjQ3MzAyNTA4MTQyMjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMLzdqb01DRUpxMzY3UUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9kanFWeTJTS2ptdEp1NDd0WEc4UHpjdFpBOWRNQWhIZEFsZ2N0QTBnSDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEV3K2l0b0NNYVR5aGJQQis5NW5GQ2p6aW1hL0Rqc3c3eWNtcmpQTXFqZnZrNGtuaWVqZEZKVTRZcnlZY3lYaExBVTBUc1diNUhuMndOdGNidWptQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2xOYWNJbXBBYXZLc3MzVVlnWW9RSjJPMDFZNWxYZ3JPSWwrbzR2VEZiNDNvRm5Od1V1RTlkLzlTaUxiSVNvbVRnQ2lseTgwaUhmbE9vU1orYVExQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyOTA1MTMxMDc1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MjQ3OTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1UYy5qc29uIjogIntcImtleURhdGFcIjpcIk4xRy9yTmtmaXNua0JPdHlOVDFOL25pUUlGeHhUbFJXU3FTSzNxYWgzMU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTQzNDA3NTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MOHAN",


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
