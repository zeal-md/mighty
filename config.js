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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_22_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnBCMFFEQWI3bWdKQk1PNVpsWWMyVmp6TS9xeCthRUZDb0xjbHNHWGpQaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMklkLXhhN0lUVmFkZ3JqeVBTdElPd1wiLFxuICBcInBob25lSWRcIjogXCI1NWQxOWY5NC0wODg0LTQ3ODctYWU5ZS05NzI1NDgwNTljOTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTI5LFxuICAgICAgMjEwLFxuICAgICAgMjUsXG4gICAgICAxNTUsXG4gICAgICA0NSxcbiAgICAgIDE4OSxcbiAgICAgIDYyLFxuICAgICAgMTk3LFxuICAgICAgMTgyLFxuICAgICAgMjA4LFxuICAgICAgMjIyLFxuICAgICAgMTMsXG4gICAgICAyMzMsXG4gICAgICA4MCxcbiAgICAgIDIxNCxcbiAgICAgIDI1NCxcbiAgICAgIDE4NCxcbiAgICAgIDE3OSxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgNjYsXG4gICAgICA0NyxcbiAgICAgIDE4NCxcbiAgICAgIDE2LFxuICAgICAgMSxcbiAgICAgIDE4LFxuICAgICAgMjQzLFxuICAgICAgMjM1LFxuICAgICAgMTEsXG4gICAgICAyNDAsXG4gICAgICAxNzQsXG4gICAgICA5MixcbiAgICAgIDEyOCxcbiAgICAgIDczLFxuICAgICAgNzksXG4gICAgICAyMixcbiAgICAgIDIyLFxuICAgICAgMjIsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWE5WS0FSWlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNDY0ODcxOToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxlbm94IE9tb25kaVwiLFxuICAgIFwibGlkXCI6IFwiMjI1NDA4ODI1OTU4NTE0OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DVWdkNEdFT2Zjc0xRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidS96aFJEQVVJWVc2YWRyMEE0TiszZkViNmFkaTllRU1qdVdrdlhFZHpTUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3RHpnMVlYYXV5UCt5czh5OTh3Umg5RXhuUVhjUGtiVGZzam9BRlovc0Z4Wnk5RDRaTHB0Ynl3QlYzd2s0VFlOcnhUYTI5YzlEZGZ2dXVIamdRVHhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzL3VOckRVeHpjRTdMY013QTcyUktMc2NBdFBMUFM3eFpNaTZBby9jSm9zZ3RvdnRGZnpBaVQ3anJYa3lJNFdWRi8zSkJwZ21kRWtVdm5lcitOODVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTQ2NDg3MTk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDYyOTU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
