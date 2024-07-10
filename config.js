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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxUT1BOUjYyY1ZoSjZuWE5PWnRBUlJ3bWduTDRrbVUwUlR4d2RlVjVJbXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVqY2hqM1BUU2ZpQVRKUE52dHdkdGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDZlZTE4NjEtZTljOS00MzNlLTkzZGUtNmQ1NzYwOTc2NmYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE5OSxcbiAgICAgIDMxLFxuICAgICAgMTMxLFxuICAgICAgMTY0LFxuICAgICAgNTcsXG4gICAgICAxMjgsXG4gICAgICAxODQsXG4gICAgICAyMTMsXG4gICAgICAyMTAsXG4gICAgICA4NSxcbiAgICAgIDE1NixcbiAgICAgIDIwOCxcbiAgICAgIDE3NyxcbiAgICAgIDYzLFxuICAgICAgODYsXG4gICAgICA5LFxuICAgICAgMTAxLFxuICAgICAgMzgsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAyMzMsXG4gICAgICAyMzQsXG4gICAgICAxNTksXG4gICAgICAxODEsXG4gICAgICAyNCxcbiAgICAgIDE1NSxcbiAgICAgIDEyMyxcbiAgICAgIDQ0LFxuICAgICAgMjEwLFxuICAgICAgMTYwLFxuICAgICAgOTIsXG4gICAgICAyNTIsXG4gICAgICA3NSxcbiAgICAgIDE5MyxcbiAgICAgIDQyLFxuICAgICAgMTgsXG4gICAgICAyMDgsXG4gICAgICAxNjcsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyRkJTMkpUUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODExNjI0MTI2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODk5MjgwODQzOTAwNDc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTy9xOGNGRUxxbHRiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5rTGhaVmNLWEdJOUV4Wk93bWs1TmdBL1E5Y3p3dHhaMjlXdGhZRitlQW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienkxbldpdGY4VXhYN3FyZnkxNDg5ZjQvalduRWo2UzJBVnYyN3NHK3IrNjNKWC9aNGxhVVBEeEE2TTJIZ0pzOUpOQWJOZDNEYXdSc1JpYUF4dGpiQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzVQSDk5eDN4dFdTMXNqdUI5RkRGcElVMklBMUtISS94WXYydXFZRmUzTnFiWjdmb2s2R3pTdmdsSWtxM2QwR1pMeDhCcmRoZVU2NURtWFlNSTB4aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExNjI0MTI2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTM3NzkxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
