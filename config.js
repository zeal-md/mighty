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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_20_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidkVnMnpMc25ia2xnMm9lY0dvaFpyMmNZYjBzS3ljMEZIWWkxYytPY1gvMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyNDU0NDA2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEExMkJCMkY4NzhGNUIzMjlFRjgzNkNBRDUxOEJDN0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTk3MjIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjQ1NDQwNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdGM0Y2REE1QjBFQzAxQTI0RDMwRTc5RDlFMjVGMkVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE5NzIyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsZ1dCc050V1E5YVVtSHJRR2hnaXh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjljNTQxOGNlLWM1OTQtNGIyMy1hMDg0LTU0ODQ0OWJlZTQwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDE3NixcbiAgICAgIDIyOSxcbiAgICAgIDM1LFxuICAgICAgOCxcbiAgICAgIDIzOCxcbiAgICAgIDk1LFxuICAgICAgNjAsXG4gICAgICAyMzksXG4gICAgICAxNTMsXG4gICAgICAxMzYsXG4gICAgICA4OCxcbiAgICAgIDEzNCxcbiAgICAgIDI2LFxuICAgICAgMTc1LFxuICAgICAgMjQ3LFxuICAgICAgNjUsXG4gICAgICAxODgsXG4gICAgICA5MixcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA3MSxcbiAgICAgIDQ1LFxuICAgICAgMTY5LFxuICAgICAgMzksXG4gICAgICAxOTgsXG4gICAgICAyNDksXG4gICAgICAxMzIsXG4gICAgICA2MyxcbiAgICAgIDI0MixcbiAgICAgIDExMyxcbiAgICAgIDI1MyxcbiAgICAgIDEwNSxcbiAgICAgIDIyNCxcbiAgICAgIDEyMyxcbiAgICAgIDE2OCxcbiAgICAgIDQzLFxuICAgICAgMTI4LFxuICAgICAgNjgsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWEhES1ZFMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjQ1NDQwNjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwNjAwNTY5NTQ4OTU0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic2FkYXJ1c2w4NVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UVTNPd0ZFSi9GM2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid0NReXN5UVVWVGRsRk9xdDBHNFJLVyttUjdEVzBqRUVkakpudVlCR3duZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPRkFaUllYVVJ3UVBhL0xLK29aRXkrdlhNVVZQT1pCKy94VlFnWWZ6U3MrQWlMcCtlWklEeUk4Mnk5T0tYQVFwQmNTOHVhOHBReHNWa3JuL3BmbFdBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1R2pyaU51VUplOS9uZGZVdEdRMlZHczdPSGRmWENGdlN3TUFIY1BYSzJoQWh0MTRLYm5MazJOSmFOZ2VRRzdrM0VlVFM5blJBSXgwb0xKUS9lS2dEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNDU0NDA2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTk3MjE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFprXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEbi90NnJuSWNYMTA2RUs4cDFEV3QwZmpVeTN2OGlrOWRwWXNub2pGaitrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzAxODc4NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE5NzIxOTgwMVwifSIKfQ=="  // PUT your SESSION_ID 


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
