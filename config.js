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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923499833604";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_01_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTMyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMxLFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSeTE5aVdraVcxbU9PWUJ2SGtDcmNLYWFJS3Y5SzVWWUZwalFMeFpXSC93PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRdHJGQzR1dlNxaVMwQkZXX1RjaGVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjZTM4NTkzLWM0YzQtNDVlOS04ZjZlLTE2YjUzNDRhZjFlOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDk3LFxuICAgICAgMTE1LFxuICAgICAgMjM3LFxuICAgICAgMTkzLFxuICAgICAgMjA3LFxuICAgICAgMTQwLFxuICAgICAgMTc5LFxuICAgICAgMTMsXG4gICAgICAyNTUsXG4gICAgICAxMzksXG4gICAgICAxNjUsXG4gICAgICA2MCxcbiAgICAgIDEyMyxcbiAgICAgIDE5MSxcbiAgICAgIDE0NyxcbiAgICAgIDExMCxcbiAgICAgIDUwLFxuICAgICAgMixcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICA5NyxcbiAgICAgIDEwMCxcbiAgICAgIDEwNyxcbiAgICAgIDIzOCxcbiAgICAgIDksXG4gICAgICAyMyxcbiAgICAgIDE2MixcbiAgICAgIDIzOSxcbiAgICAgIDc1LFxuICAgICAgMTM5LFxuICAgICAgMTQ4LFxuICAgICAgMTUyLFxuICAgICAgNzcsXG4gICAgICA0MyxcbiAgICAgIDc5LFxuICAgICAgMTIwLFxuICAgICAgMjM3LFxuICAgICAgMTkwLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldGTU41SERHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk4MzM2MDQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJc21haWwgS2hhblwiLFxuICAgIFwibGlkXCI6IFwiMTMwMzgyODI1NTIxMjc0OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xbDhvZ0hFSnV6OTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVHkzRGgrR29CUmF0OXd2anNVcnhQRXFiU2xqVWxpM2E1Ty90MkNla0ZtND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBT1BuamtMREM1dkRWb09NWHcyVHVVVGZGeTFleVBKN3p3bGJYUUV2MnpOZXArMGU2dGFpVUczaUtxZEx4NUNlTGZmNmRER3FjTGgzSmxUaHpxVXpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCbXlxR1BRbmpMdm1MS1cxNWVCdThtTS83TmtVK2ttNmNNRGNJeExEdk1iN3U3Qi9udXE2QXFGRld0NXE4UjRGTGxGM0h6ZU5oTzlZcWJsQ0h3ck1BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTk4MzM2MDQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjIwODk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFhkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQWGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZTmsxNlduZTJYOWRJZFY0NDMrSG04N296ckcvUjBpdHRDSjgvY1NOT2Y4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTc2OTc5OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
