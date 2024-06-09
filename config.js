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


global.devs = "233509747946" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233509747946";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_06_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPTXNyTDJlN20zU29FL25QcEJhclFRcEIvbnI4WUNsRjE4V2UyK09idGs0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvSElqaUdPRlQwQ3dIUlA0Q2Q1ZnJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllZDVjOWQ1LWNkODAtNGVmNS05NWU3LWZiODVkYzMwZjdhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAyMjUsXG4gICAgICAxODgsXG4gICAgICAxNzEsXG4gICAgICAxMzIsXG4gICAgICAyLFxuICAgICAgMjM2LFxuICAgICAgMjA3LFxuICAgICAgMTA2LFxuICAgICAgMTEwLFxuICAgICAgMTQ1LFxuICAgICAgMjE0LFxuICAgICAgMjM2LFxuICAgICAgNCxcbiAgICAgIDU0LFxuICAgICAgMTY0LFxuICAgICAgMjQ1LFxuICAgICAgNzIsXG4gICAgICAzMyxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDEyMyxcbiAgICAgIDMxLFxuICAgICAgNDcsXG4gICAgICAxMDQsXG4gICAgICAyMjEsXG4gICAgICAyMCxcbiAgICAgIDEyLFxuICAgICAgNzgsXG4gICAgICA5MCxcbiAgICAgIDE4NixcbiAgICAgIDI0MCxcbiAgICAgIDEwNixcbiAgICAgIDE1NixcbiAgICAgIDEzNSxcbiAgICAgIDE3LFxuICAgICAgMTQ0LFxuICAgICAgNzAsXG4gICAgICA3NixcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFMUFdROFJTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDk3NDc5NDY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ2NzI5OTE1NTE2Njg6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTk9kby93SEVKU21sN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGVmxnQmtOMXhJSkwrODNWeFNvRVd0YXNhSkYzL1pXNTBFditMZzdVZlRFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxoVTkvbW5ZREhwc2tnbUEzSk01ZGdjSDhpSWwyeHlkeHF3SHNGZnUyZ1JHQmRBdjZIZFl5ejRxS1pCbVBHWi9XbTBoSUQvOW93WkpBTWRKYW9sU0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1BSC9uOERwSStHVFNHSWsrYktnSmErY05Nc0tuVmxKSEczQ2pFdGszbTR4aG1VL21aL2dtNHVmN3lMeUNZam16VytBdDB5aytrSXpMQ01KQnZ5ekFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwOTc0Nzk0NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzk0OTIwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdEWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0RZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV2ppVVZ1RnNzZktiMUE4L1U1K0M0WEJaTzlMbnBxem9kdXpSeXdTSjZ5TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM5NjcyMjc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3OTQ1MDc3MDkzXCJ9Igp9"  // PUT your SESSION_ID 


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

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-f1bcbfe0-fa5c-4a49-9d0f-85afc92026fc",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "amdsir",
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
