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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_34_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY0dudkdxOTQxb1FBMFM1UTBxcnNQMFV6R21XRG9VWUFXdHhIY2x0aE5iVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwialpNNjlOU2ZTOWFaZjNjV0F6MHVKZ1wiLFxuICBcInBob25lSWRcIjogXCJlMGYxOWQ4Ny1jYzBhLTRmMjktOWJmYS1jNzQ0MGU1MTE5ODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgNjcsXG4gICAgICAxMDEsXG4gICAgICAxNzIsXG4gICAgICAxNTMsXG4gICAgICAxMDAsXG4gICAgICA1NyxcbiAgICAgIDE1MyxcbiAgICAgIDI4LFxuICAgICAgMixcbiAgICAgIDEyNyxcbiAgICAgIDEwMyxcbiAgICAgIDEyLFxuICAgICAgMjQ1LFxuICAgICAgMjI3LFxuICAgICAgMTQzLFxuICAgICAgMTI5LFxuICAgICAgNzQsXG4gICAgICAxNDgsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyOCxcbiAgICAgIDc0LFxuICAgICAgMjM3LFxuICAgICAgMTgxLFxuICAgICAgOTksXG4gICAgICAxNTAsXG4gICAgICA5NSxcbiAgICAgIDIwLFxuICAgICAgMjQxLFxuICAgICAgMzgsXG4gICAgICAyMSxcbiAgICAgIDkyLFxuICAgICAgMTkwLFxuICAgICAgMjA5LFxuICAgICAgNTYsXG4gICAgICAyNCxcbiAgICAgIDIwMixcbiAgICAgIDIxMixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjkxSEVIVERBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE4MDAxNTY5Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNzE5NzQzNjY4MzQ0Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEd2wrSURFSXF4dGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2tvWVZiaXkxKytTMHZqUzlYeGN3UlpqdXRwMFlQYk5mbEI5NFFVaE1CTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCK2RWT0VocWsxMmpXVmx3THZISERPWU9HZFhoZEp2TUFVb2MxZy9DbzlLL0dIN0l2YVhIV3FoUENHOGZXVktHVW1UcEIwS21GV0RwRU1uVzltcUhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBRDJETVhkUFljaDR0M3JZUkhXbzVEaFduZE1YTGJ1Y09CNVRidHM4amxrbUIzQkRrWW5GaTlTMFV4M2MrTHl2OWxMZ0pZdFZibks0eDZrQ1kzdUxoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE4MDAxNTY5Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwMDE1Njk6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUzOTI3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1XNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVc0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmN5eUtqNUJ5YllpVWNzeUJUWk5ZWVJqT05Jb0pTNjF4Qy9rSmhSM2xhVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDExMjE4NDc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
