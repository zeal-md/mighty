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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_45_05_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFpTzNncW42MlN5L3lKUXk5N2lKZFZvNGpPWUsvZ3BCTHhicGtaMzV3ZWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3NjM4MzQ5OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFRjM5MTNDNjFGQzVEMEE2NkI0NjBFMTAyQkM5NjEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTc5NTE1NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NzYzODM0OTk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDM0E0REQ5QjBFMjQyMUZFRjg1N0NBNTZGODE1ODBFNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU3OTUxNTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWE93eFlURVRUcGFRM2d3cVVUSk1EZ1wiLFxuICBcInBob25lSWRcIjogXCJlM2FmNjVjMC02OTFmLTQ4NGUtYjkzYS1kNjkxYjQ3MmY3NDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMzUsXG4gICAgICAxMDMsXG4gICAgICAxOTAsXG4gICAgICA2MCxcbiAgICAgIDUsXG4gICAgICAxNzcsXG4gICAgICA3OCxcbiAgICAgIDE4OCxcbiAgICAgIDEwMSxcbiAgICAgIDE1MixcbiAgICAgIDM1LFxuICAgICAgMTAyLFxuICAgICAgNjcsXG4gICAgICAxNzIsXG4gICAgICAyMTQsXG4gICAgICA3NyxcbiAgICAgIDYxLFxuICAgICAgMzQsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTcyLFxuICAgICAgMTMwLFxuICAgICAgMjM1LFxuICAgICAgMzAsXG4gICAgICA0OSxcbiAgICAgIDEzLFxuICAgICAgMTk4LFxuICAgICAgMjYsXG4gICAgICAxMTgsXG4gICAgICAxNyxcbiAgICAgIDk2LFxuICAgICAgMTA3LFxuICAgICAgMTY0LFxuICAgICAgMTMwLFxuICAgICAgMTI3LFxuICAgICAgMjAyLFxuICAgICAgMTE3LFxuICAgICAgMTA5LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNRQlpQQ1NQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODc2MzgzNDk5OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTG91aWkga2trXCIsXG4gICAgXCJsaWRcIjogXCIyNjQ3NzE4ODI1MDAzNDc6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMjFxYzhIRU1ucGs3SUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIld4c0pMa3VPc0hCNHQ4MXhyY3QzMWZDN0pvNlU2cVVwRjZtUU04Y29aMlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUlUODJRNU00cnhCVTJ4SitLUytJZ3hhM1JCdWlaMzRKcjlaTlowQnRjQWZIS0ZKS2YvcXpBVk5qUlN5QzZGMUVmZkxRZnFqM29ORmJwL0FVMUJ3RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkdYOFd3Vmx3WHkxYXQ2QjhBZ3FUcTBjdkR6UlJiOFRTb3h6eFZmcTNEWHZ6Y0RHUWlPS0xIWHFUcWJGbGNhRlVzVlh2RDBrTFE2V0lveGVDeUNoZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTg3NjM4MzQ5OTk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU3OTUxNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNTy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1PLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
