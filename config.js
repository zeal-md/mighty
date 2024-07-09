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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_11_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxTNy92OUpsMGZuaFVkWVl3V3RQU2Q5SHFzRjlvUEZnNG92cUttY3pJWFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5PMGZzWTVTUWZ5RndjZzI4ZHVjRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWU2MGRlNzItNDQ2ZS00NWIzLTg2ODctOTMzMWY4OWZkNzA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTExLFxuICAgICAgMzEsXG4gICAgICAxNDYsXG4gICAgICA4LFxuICAgICAgMjM4LFxuICAgICAgMTMwLFxuICAgICAgMjQxLFxuICAgICAgMTE1LFxuICAgICAgNDgsXG4gICAgICA4MixcbiAgICAgIDMzLFxuICAgICAgMTY2LFxuICAgICAgMTUwLFxuICAgICAgMTE2LFxuICAgICAgMTI2LFxuICAgICAgMjMsXG4gICAgICA1NyxcbiAgICAgIDE3OSxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDIzLFxuICAgICAgMTA4LFxuICAgICAgMTM3LFxuICAgICAgMTExLFxuICAgICAgMTEyLFxuICAgICAgMzMsXG4gICAgICAyNDIsXG4gICAgICAyMTcsXG4gICAgICAxMzAsXG4gICAgICAyNTEsXG4gICAgICAyMDksXG4gICAgICAyMTQsXG4gICAgICAyMzEsXG4gICAgICA3NSxcbiAgICAgIDc0LFxuICAgICAgOTAsXG4gICAgICAxNzAsXG4gICAgICAxMixcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x1SDVkTURFUEt1cjdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTThJc1BqRVJWWnRwaG9zeVMvcnA4ZVlaS3ZhbTVWQU1HYTNacHhpdkhCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUdHZQT1lRRUVtYnRXNmVHaU5pYmZSbGpOZHlpSHE5VXhqNEp3M1dRbUwwZUpmK2lJdUV0dTZwT3o4ZmNDYkFPVzdDaHFGRkNpMnBlV0RHM3FPWXpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzWWhiYllybWlBMWhyb3VBUDRvNDRWalorem1PeUd3K2NwTXJYbHBLa2h1bjJpajFrQ01mTkd6c3gySHZHWWlZV2ZPdnBBbElnb0RWUjdEN1JRZnRCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYxNjc5OTU5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NzE5NDk2NDY5MzIxNDoyM0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxNjc5OTU5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDA2OTRcbn0iCn0="  // PUT your SESSION_ID 


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
