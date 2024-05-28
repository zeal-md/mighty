const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://atlas-sql-66558510d82f9c500a50c04-tpiqd.a.query.mongodb.net/sample_training?ssl=true&authSource=admin"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "https://www.mongodb.com"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708418073";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_46_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImIwbVdQek8yUzQ4eU9ERGVWS1hZMzRnL1kzd05aR2ExNkN0MWVGVnpicUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZuZmxURElqU3BDY1RnTThBSjVOWVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFjYjQwZGItOGU0ZS00MTBjLTkxZjYtZDIxNGVkNWE1NWZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDIyOCxcbiAgICAgIDYzLFxuICAgICAgNDgsXG4gICAgICAxODcsXG4gICAgICAyMTMsXG4gICAgICA4LFxuICAgICAgMTcxLFxuICAgICAgMTY3LFxuICAgICAgMTc1LFxuICAgICAgODIsXG4gICAgICAxNTcsXG4gICAgICAyNTIsXG4gICAgICA5NixcbiAgICAgIDI0MSxcbiAgICAgIDIyNCxcbiAgICAgIDEzNSxcbiAgICAgIDg0LFxuICAgICAgMTQ2LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDM1LFxuICAgICAgNDksXG4gICAgICAxOCxcbiAgICAgIDI1MyxcbiAgICAgIDI1LFxuICAgICAgOTIsXG4gICAgICAxNjAsXG4gICAgICAxNDEsXG4gICAgICAyMDgsXG4gICAgICAxNjYsXG4gICAgICAxNzUsXG4gICAgICAxMDUsXG4gICAgICAyMzUsXG4gICAgICAzMyxcbiAgICAgIDEwNSxcbiAgICAgIDIzNSxcbiAgICAgIDIzNixcbiAgICAgIDk4LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI2NEdDVkhTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDg0MTgwNzM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRyb2phblwiLFxuICAgIFwibGlkXCI6IFwiMjA5NjkzNTA3MDcyMTQ5OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVUazg4REVMQ0IwcklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMXR5VVZwSG84NVlCa2ZGVjFHSHZXN3Y4SXRleVJtdStUWGNLWHJjL2pFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdRRkxNMzZ1ZlFwYVl4MVhYaHA2RmVwYTFXNlczalR2RkVsOEtHVkFva0pEWVc2Y0dLcDJIM0s1b01pcFc2NndZVGdvZ1loMm1rR3ZBemdUOEo5N0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJVKzYvenRQa0pJN1RMSUs3VU5YSWQrSGJzeFB1dkFoaFFVZ2YwbTl0RnRWMHZoTVd6Qk9jWkUvdUh4czloMXRKaXdHWGlUWlV6Z3BtN0dyR1gzT0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQxODA3Mzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODE0MDA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ== "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "e69ec67952fbaadaa1ddb831b3817c2d";
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
