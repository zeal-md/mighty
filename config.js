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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_18_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImprbyt1eS9VaEY2TG1hYnlBdmhpZU11TC9BalljcVgwck01SThOVGVjWHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE5MTU5NjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNkFCQTk4RjUzQ0RCQTc1RDA4ODhCRTBDRDg2NDdCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxNzY3MjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVV94MnFzanlUOHlicjBCM0dEeVkwQVwiLFxuICBcInBob25lSWRcIjogXCI0ZWZiOTNiZS1iZDBhLTRkM2ItODQ5ZS05YjQ1MTcwNWQ2MThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICA3LFxuICAgICAgMTUxLFxuICAgICAgMzksXG4gICAgICAyMTEsXG4gICAgICAxNzAsXG4gICAgICAxMDMsXG4gICAgICA0OCxcbiAgICAgIDM4LFxuICAgICAgMTEyLFxuICAgICAgMTMzLFxuICAgICAgMTgwLFxuICAgICAgMjM4LFxuICAgICAgMjM1LFxuICAgICAgMTkzLFxuICAgICAgMTMsXG4gICAgICA2MixcbiAgICAgIDE3NCxcbiAgICAgIDE1MSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAyMzUsXG4gICAgICA0MyxcbiAgICAgIDQsXG4gICAgICA0OSxcbiAgICAgIDE2NSxcbiAgICAgIDE0NixcbiAgICAgIDE5LFxuICAgICAgMjA3LFxuICAgICAgMTIzLFxuICAgICAgMTE1LFxuICAgICAgMjM3LFxuICAgICAgMTcyLFxuICAgICAgMjEyLFxuICAgICAgNDIsXG4gICAgICAxNjMsXG4gICAgICAyNDMsXG4gICAgICA1LFxuICAgICAgMTI4LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwxRkpUVkQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTkxNTk2NzA6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNjUwNTg1NzY3OTM4Ojk4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BETzNQSUVFTXVYcGJNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwianAyTnBhMmMrT3pONkVZSkluakdvMjhBdmNkSDc4a01LSHFNVlo5OU9uUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpVnVHS3QxbmZXN3VsMS9ndjBmdFoxQklHcW9BRjBRQ0YraDVhMU5Lbm9jbldYaHl1QlpVWkFVQnZLWmkvZFlmcWNiN3ZYNjFsbmRuUFpNckxmMm1DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4NHR4WDVZem1MVFJYWDRrVm81QmJ1bVpZcEVXZEVUMSs3THVKRVZDWVgzZGZIQllvQ2ZKNVZwQ2kxWWcxZHV4cmJjV1d2UjhFSStNK0lUNlUrZmhCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTkxNTk2NzA6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTc2NzIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWJlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBYmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsY21JekpjRjUrcC9FY3AzYkQ4cUd4eXVneUxkZ2N0SG1CZDR1eDNRWWNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTQzMzQ1NzMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzYyNDE4Mzk5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "M ASWAD",
  packname: process.env.PACK_NAME || "M ASWAD",
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
