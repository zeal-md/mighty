const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Mebz444:emmenez234@atlascluster.s4urnvb.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166049720";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjZnU0g3WmlYOGllYXFuRE1KbHdYMVhXTDVZQjZzK2JFVWF6RCtuRnF4ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTjl0Z1VPSnBSYVdCblc5TXJwVlgyQVwiLFxuICBcInBob25lSWRcIjogXCI2YmE5NDExNC04YjRlLTQ4NmEtYTA4MS0wMjQwNzY3NTFmODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMzAsXG4gICAgICAyMzAsXG4gICAgICAxMCxcbiAgICAgIDAsXG4gICAgICAyMyxcbiAgICAgIDE0NSxcbiAgICAgIDE1LFxuICAgICAgMjYsXG4gICAgICAxNDQsXG4gICAgICAxOCxcbiAgICAgIDIyLFxuICAgICAgNjMsXG4gICAgICA0MyxcbiAgICAgIDEyMCxcbiAgICAgIDE0OSxcbiAgICAgIDEwOSxcbiAgICAgIDc0LFxuICAgICAgMTEyLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDExOSxcbiAgICAgIDIxMCxcbiAgICAgIDE3OCxcbiAgICAgIDIwOCxcbiAgICAgIDIwNSxcbiAgICAgIDIyLFxuICAgICAgMjEsXG4gICAgICA1NyxcbiAgICAgIDE1MSxcbiAgICAgIDQsXG4gICAgICAxOTIsXG4gICAgICAyMjUsXG4gICAgICAyNDUsXG4gICAgICA3MixcbiAgICAgIDU4LFxuICAgICAgMjQzLFxuICAgICAgMjQwLFxuICAgICAgMTAwLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZZQVdDWllBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY2MDQ5NzIwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MzM1OTQzMzQ0MTUxMDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Buc3pzVUdFTmlINExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK0lrTjdQOXBBY0pDcFhUNnFCZEVhaGJuSHQ0WVpMTnhaVFdzeEROcm1Gbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxREdCOHBkOHBtOWYvdGxhSHhJZVNCdWZJTGNYczV6em00SytSTlZybHlIRGtpcmVvQmN0N1RCTVFtdDk0NjBXMzRRMjgzUlcvR1dzUUVKVkRnQUlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRdHlQT2Rmakhwamg5ZDdVRGtwZkcxVHI1Q3F4UEFPTm95SjRrZUJ2ZjNRTFl6bThybFlLRDd1UCtxVzVNeloyUUZ5R1d5NzNtMjZuQ05WaXQrQXVEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY2MDQ5NzIwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMzg0OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFOEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU4Si5qc29uIjogIntcImtleURhdGFcIjpcIkE3ZFEyRm9EaFh0SEcyelRYdDBVZnprNzNPYzBmM2NrUFJoTjRDNnVPZXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1NjYwODExOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mebz",


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
