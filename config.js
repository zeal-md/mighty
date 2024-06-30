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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_13_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1cWJsb2t3UWxoZytSQmRmK09kSEtXWGE1MHMvSURiS0dNelV4UDJGaTlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMaEZzbndJNFJHR3MzODBkWEVHLW5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImMwZjVhYzBhLWFhMmYtNDlmYS1iYTA3LThkOTBmZmM4ZmZjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAxMTMsXG4gICAgICAxMTksXG4gICAgICA0NixcbiAgICAgIDkzLFxuICAgICAgMTIsXG4gICAgICAyMDAsXG4gICAgICAxODAsXG4gICAgICAxMDIsXG4gICAgICA4MixcbiAgICAgIDc3LFxuICAgICAgNDYsXG4gICAgICAxNTgsXG4gICAgICAxOTIsXG4gICAgICAxNjQsXG4gICAgICA1NyxcbiAgICAgIDE1MixcbiAgICAgIDEyMixcbiAgICAgIDMsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDIyNyxcbiAgICAgIDIyNixcbiAgICAgIDk4LFxuICAgICAgNTcsXG4gICAgICAxNjIsXG4gICAgICAxMTYsXG4gICAgICAzOSxcbiAgICAgIDE5MCxcbiAgICAgIDIyMCxcbiAgICAgIDEyMSxcbiAgICAgIDg4LFxuICAgICAgMTY0LFxuICAgICAgODIsXG4gICAgICAxMzksXG4gICAgICAyNTIsXG4gICAgICAyMzUsXG4gICAgICAxNzksXG4gICAgICAyMjYsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWllYMUZUQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDQ2MzM5MTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn5UwqVHIMOXzZzDlyBHSE9TVD/Cv8KlVH7igLrigLrigLrigLrigLrwk4O1XCIsXG4gICAgXCJsaWRcIjogXCIxMzQzNzI0OTc4MjE5MjU6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGlYenJRR0VJdkdnclFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzYTE0UHV5MVM5R0NnQUp3b21GSjcxYm56QWpmdkd0MG1hM0xjLzZFNG40PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlc4SEtDMVR3Q3lCaEhZa2ZEK0xMZUY3dU1LamZ1WDZLTmo0d2dpcVQzOVpsRi9QSGVBVFd4THRSZU5SZFViK0IxOUZVcTFjdldOSFNHckNvSTAwdENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVLM2YvS2VBVDFva2pieUt1NkJYK01UMXBLT2ZYekNrYXVheER1bnU2dU0raDh4VWpiZ2R6M1hvdmxRdjY2emRSbDJ1cHRsOUFlR3Q4eTY5b0dTcmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDA0NjMzOTE6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3MDYzODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdkRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF2RC5qc29uIjogIntcImtleURhdGFcIjpcIm91Q3o4R0lFbmEwaXdnRW5ubDNWSGNDWWJ5YzRjN2VxZHhIMkdaOWNna1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyMDk0NTU5MixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2MTMxODcxNzRcIn0iCn0="  // PUT your SESSION_ID 


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
