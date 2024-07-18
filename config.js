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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18763934999";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_33_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxZ2d3QnpaWU56STd6Z0tjOHhwSkZjR0R0RFRKcXYxWTA3NWkwNTlsa0JnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnS1I1WXBfc1JrLWtxYjhHUlF5SVBnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjZmMwM2Y5LWM4YjctNGFlOC1iOTVhLTZiMDZkNDdmM2IyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDIzMyxcbiAgICAgIDIwLFxuICAgICAgMTI2LFxuICAgICAgMjM1LFxuICAgICAgODYsXG4gICAgICA0OSxcbiAgICAgIDI0OCxcbiAgICAgIDI0LFxuICAgICAgMjM2LFxuICAgICAgMjAwLFxuICAgICAgOTYsXG4gICAgICA3MCxcbiAgICAgIDE3MyxcbiAgICAgIDI0MyxcbiAgICAgIDIzNixcbiAgICAgIDE3NCxcbiAgICAgIDIxMSxcbiAgICAgIDEzMSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA2MixcbiAgICAgIDEzNCxcbiAgICAgIDExMixcbiAgICAgIDI0LFxuICAgICAgMTE1LFxuICAgICAgMjE2LFxuICAgICAgMjgsXG4gICAgICAxODUsXG4gICAgICAxNzYsXG4gICAgICAxNjgsXG4gICAgICAxNDgsXG4gICAgICAxODksXG4gICAgICA4NixcbiAgICAgIDI1MSxcbiAgICAgIDIwMCxcbiAgICAgIDksXG4gICAgICAxNTksXG4gICAgICAxOTksXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1hTUUVLN1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4NzYzODM0OTk5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiW/CdkL/wnZup8J2RiPCdm6rwnZuqIPCdm6jwnZul8J2RivCdm6vwnZuv8J2RjPCdm69dXCIsXG4gICAgXCJsaWRcIjogXCIyNjQ3NzE4ODI1MDAzNDc6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWkxcWM4SEVQT1o0clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXeHNKTGt1T3NIQjR0ODF4cmN0MzFmQzdKbzZVNnFVcEY2bVFNOGNvWjJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkowUDFaWVBDekxPYUdSOGhnVzFVd1AxbjNWdVNhUkFzb1Iwd1YzbUdWdnZxeVRaV0lMTVZzd3ZtYTJRS3hlenNBb2FjZzFLRitJZ1k1R1JTd0oyNEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJCYTZLMFd0aVJJVy8rUTBTeFIwSDJyZTdHN0NpN2tBOWxWbldUbnRMYi9oUGVXRm1ubnh2UTc5bXN3MnBxbDJNQ3c1N1pZWVJ2eTluckdsVktzNGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NzYzODM0OTk5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI3MzU5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR4dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHh1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwid08wUndYZTZ6djF5Wk93ckp4RWZPZW94QkkvY1RKK2JoRUhNVTZIQWxMQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ1NDAxNzk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjcxODc5NjA2XCJ9Igp9"  // PUT your SESSION_ID 


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
