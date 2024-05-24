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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923194778990";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_36_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvak8rejdmNjdTVHNCdGkzYzZNb1VCVG0zdXFVWXB3UHhWOG8zeS9CMDdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5NDc3ODk5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjFDQjkyMUJGQjQ5RTc3MTIwN0ZFNDY3MTY3OUYxMEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTY0OTcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk0Nzc4OTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRjFDMTk1QTk4MzZFMzM2NkU2NjNGQjkyNEVCNjFEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY1NjQ5NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS2RBR29uUjRTZy00X2toMWNhOWJNUVwiLFxuICBcInBob25lSWRcIjogXCI5MmQ0YmZiYy03NWIwLTQ4NDUtOGIzOC1jZjM0NDAzMzgwNmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgNTksXG4gICAgICA3OSxcbiAgICAgIDExOSxcbiAgICAgIDE2OSxcbiAgICAgIDE5NixcbiAgICAgIDE1OSxcbiAgICAgIDE1MSxcbiAgICAgIDE0NCxcbiAgICAgIDg4LFxuICAgICAgNjAsXG4gICAgICAxODIsXG4gICAgICAyMTEsXG4gICAgICAzMCxcbiAgICAgIDkxLFxuICAgICAgMjM5LFxuICAgICAgMTI4LFxuICAgICAgMTY1LFxuICAgICAgMTkwLFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDQ5LFxuICAgICAgMTU1LFxuICAgICAgMTcwLFxuICAgICAgMTUwLFxuICAgICAgMixcbiAgICAgIDg2LFxuICAgICAgMTk3LFxuICAgICAgMTc0LFxuICAgICAgMTY2LFxuICAgICAgMTg4LFxuICAgICAgMTYzLFxuICAgICAgMjU0LFxuICAgICAgMTg0LFxuICAgICAgMTYwLFxuICAgICAgMTE3LFxuICAgICAgMTgxLFxuICAgICAgMTA3LFxuICAgICAgMTk3LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRE1ERkpNSDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NDc3ODk5MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJhbG9jaFwiLFxuICAgIFwibGlkXCI6IFwiMTEwNTgyOTc1OTcxNDA3OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2UjEvSUZFT1Bud3JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUVJQbmJVZDlnd3lVdXcvb3pyc2Y5MmtvMTFyUUdIWVB2ZTNsUytqSnlIaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUK3FXdkx0UnlpSHNWaW05cEQ0Y05nbUlReGtGMENjZk9FOUtyb1dlVmpHdTJ6UmZZY0hSenphU1JYem8zS2hzdXRwMnRtcTJJQ1gzRWx3dndkQmVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmOXc1N2VtVTBEL25zS2l4dUpQMnJhNm51SlRkZjV3TkZ2ZHJybDBVV05VR01EYmQ5MGNsOFZoU1NYVWpIYmZVdlR5V2pFOFZNUTdlVzJqVkJqaCtodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTQ3Nzg5OTA6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NTY0OTY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXdhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0NmpMUTUrMCtMM1l5TGNDZ2RmZ0YxTUJ2UVdEdWVZT0txQUxzcm0rNTVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODI2ODAzMTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjU2NDk3MTM1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SULTAN",
  packname: process.env.PACK_NAME || "DON😎",
  botname : process.env.BOT_NAME  || "sᴜltan-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Sultan",


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
