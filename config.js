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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 
SUHAIL_11_20_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnYlAvd2ZoQTBMRVhWNE1kR2ZxV3hBQk1IMXdmUTRMOTVDRkR4TXJtQVYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzNzcwMTA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDk1NTlFODQ5MjE4NDBBNERBMTVFQUE3QkZBN0FBNUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDc0NDQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTM3NzAxMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzJCNTZDMkNFRTZERTBGNjE5NUM5MjU2NDExQkUyQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NzQ0NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMzc3MDEwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGOTlENUYwREM3NUNBMjUyMzY3RDQ3NjQwNzFGNTgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ3NDQ0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzNzcwMTA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkFGOTQ5NEVCMURERjEwOTRFODFBQjQyMjRFODU0QUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDc0NDQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVZYUFDX3FGUk5TcDU5d19LN2FWMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQzODkwYTYtMDhmMi00MWE0LWE2NTktYjA3YmI1OTJhOWJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMCxcbiAgICAgIDI5LFxuICAgICAgMTc0LFxuICAgICAgMTYxLFxuICAgICAgMjEyLFxuICAgICAgMjUyLFxuICAgICAgMTc0LFxuICAgICAgOTAsXG4gICAgICAyMyxcbiAgICAgIDIwNixcbiAgICAgIDk2LFxuICAgICAgMTE3LFxuICAgICAgNDQsXG4gICAgICAyNDYsXG4gICAgICAxNjIsXG4gICAgICAxNTAsXG4gICAgICAxMzYsXG4gICAgICAyMixcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDM4LFxuICAgICAgNixcbiAgICAgIDIzNCxcbiAgICAgIDE0NCxcbiAgICAgIDEzNSxcbiAgICAgIDIxLFxuICAgICAgMTMyLFxuICAgICAgMTcwLFxuICAgICAgMTY1LFxuICAgICAgMjgsXG4gICAgICAzOCxcbiAgICAgIDEwNCxcbiAgICAgIDIyMyxcbiAgICAgIDIyMyxcbiAgICAgIDM3LFxuICAgICAgNixcbiAgICAgIDEzNCxcbiAgICAgIDE4OSxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUVDI2VkU5R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTM3NzAxMDY4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDc1MDI0ODEyOTc0MzY6MTlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQsmYd2FmYSdUyZhyYSBNyoxzdcmxLUNoyZhocmFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdjl5SXNIRUllNzdyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJVWU96UmpiNnpDM3U3eWhvaVJFL0d5cnpyejg5M2l4OWgyUXVWUXNvSFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2lOM0JkU09haS9nMUIxUnlQaGt0NE81RDdycEJJb3NQVFpRbSszTlMwZzFFRXBPMFRSZThPWnJnbGkvcTBYSXRhVXc4dFhEVGRWeHBPeVk2Y0VHQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaG56Z2dzdUg1bm84cE1qYVY4N05yaWRYQTlsT1Y3VjIvVS9uZk5tK1Z2N3Jpd1FiSk5OVmRSN1dFV0ZRNU1ncWlRblIwa3huQ1JKTVY5N2J2V3RIQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM3NzAxMDY4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NzQ0NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQelVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB6VS5qc29uIjogIntcImtleURhdGFcIjpcInBheWFMdXlDYUR1SGlqc2Yxb1BaZEIvdHJ5YmdlU3BpQldzT3BjaU9kZFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkwMzMxMjYxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDc0NDQzMjI5XCJ9Igp9

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
