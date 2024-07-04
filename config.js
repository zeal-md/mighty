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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_40_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpR1c0VXJUK1RNZWVTRTRvREdEODI5N2gwUXhMNVhwTnJMY040OHFLTVRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMOHlDNWMxZ1I3dU5KWk9lTlJQZk9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImZiZWJkY2Q1LTIxOGItNGFiNy04OTZjLTBjYjY1ODA5MzUyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDIsXG4gICAgICA3LFxuICAgICAgMTEsXG4gICAgICAyMjgsXG4gICAgICAxMCxcbiAgICAgIDE1MixcbiAgICAgIDcxLFxuICAgICAgMTMsXG4gICAgICAxMTYsXG4gICAgICA3NixcbiAgICAgIDQzLFxuICAgICAgNzEsXG4gICAgICAyMzcsXG4gICAgICAxNTIsXG4gICAgICAxMSxcbiAgICAgIDEyMyxcbiAgICAgIDQzLFxuICAgICAgMjA2LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDE4MSxcbiAgICAgIDE1NyxcbiAgICAgIDIwNixcbiAgICAgIDk2LFxuICAgICAgMixcbiAgICAgIDIwNCxcbiAgICAgIDIwOCxcbiAgICAgIDIyOSxcbiAgICAgIDE4MixcbiAgICAgIDEwNyxcbiAgICAgIDE1MSxcbiAgICAgIDEzMyxcbiAgICAgIDk3LFxuICAgICAgMjE2LFxuICAgICAgMjQyLFxuICAgICAgMzYsXG4gICAgICAxMzgsXG4gICAgICAxMTQsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFNKVEYxVFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzY3MjA2ODo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjY5MTc4NjQ2NjcxOjYxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5enVlc0hFT3o2bDdRR0dCTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieEl5RmZUYksyTVFpM21rbU9BZGhJVDdiN0VOeDBMdUcyeWViRzYrMlhUaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLVVVoWnJ1cEtoVXcybzV4SXU5azZTano0cTZiWllNU1ltSlNmK1p6VllWdlo5eklCV2E1NVFOY3lOYVZIeEV6M3kxR3cwYVZySnBseXk1dCtEeFpCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJROHdHM0hDM0pjbVZkZFN6UzBxYXpjZGt6VFFJbHZKUktBR05HUVhXNWdHR0liNXlqbDF2aUZ0a2tuZFlUSHpKc1k2ayt1WTk5SHFHM0hqWjlGeFZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTc2NzIwNjg6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDU3MjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTU9iXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNT2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFQnhLdUhIcFpEMDE5ZDNnNEdlZHR4N3NldDBwbG1vYy85RW1wYkdRUnlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDQzODM4ODQsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMCwxMiwxNCwxNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
