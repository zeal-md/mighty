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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923433164894";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_38_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicFpqaFU3UllrZXFMOTVDSjJrTml4YUwwZnEzWXFMSVZOdWM2NmwyYStSQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MzMxNjQ4OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc0NkUzNzNEQjRCM0FENUNDMjdBQkFGMjQ2QkRBOTU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU2NTEyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQzMzE2NDg5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkYxNEE5QTIwN0M0MEY3NEU4MUYwQ0ZFRTlGMTNGNkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTY1MTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInV1V2VtOXhMU1VDMS0ySHFvOU50dXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzUyNmZkMzEtYTI0MS00MmU4LWIyODctZDdlYTg1NjRkMDFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTI5LFxuICAgICAgOTksXG4gICAgICAyMDksXG4gICAgICAyMzcsXG4gICAgICAyMDUsXG4gICAgICAxNDEsXG4gICAgICAyNDcsXG4gICAgICA4MCxcbiAgICAgIDk1LFxuICAgICAgMjMwLFxuICAgICAgMTkzLFxuICAgICAgMTI3LFxuICAgICAgMTg4LFxuICAgICAgNDIsXG4gICAgICA0NixcbiAgICAgIDI1NCxcbiAgICAgIDEwMixcbiAgICAgIDEzOSxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxNzMsXG4gICAgICAxNDcsXG4gICAgICA2MixcbiAgICAgIDQxLFxuICAgICAgODksXG4gICAgICA5MyxcbiAgICAgIDU4LFxuICAgICAgNjMsXG4gICAgICA2MixcbiAgICAgIDk1LFxuICAgICAgMjMyLFxuICAgICAgMjU1LFxuICAgICAgODUsXG4gICAgICA3MyxcbiAgICAgIDE1MCxcbiAgICAgIDcwLFxuICAgICAgODMsXG4gICAgICAxMTAsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0JEWEZNQjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzMzE2NDg5NDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibHVreWtpbmc3ODY2XCIsXG4gICAgXCJsaWRcIjogXCIxNTcwNTQzMDQwMDIxMTk6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLLzAxcEVCRVByb3dySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVKRFBtS0hVREl4RWRYL0V3dkxVZDUwZkc1aXowdVkxajJkbUsrckY2aGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnZHY2Zla0RBMlNXakxzWkY2akxZekl0NkFwUThEcTJZbkFUWDJHWVBWTWJqUEhkNFFlcXlCbDRCNXVQZFpKRUcwbnZKV1M0dkVaVURvOVBvaVRuQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRiswR2VnTEt6WFg3OXl6WFhCeGZ4RGJRZ3RtaXdFQ1Z0azZWaGh5YldJTjhoUmRFY1I3eGJmTFpnTW5rdDdnQTVnR0E5ZGlBcXlER1p6N3dYR092Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDMzMTY0ODk0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NTY1MTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3U0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLdTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQK2oyc3ZveW0wVGJsL24yQUxKYnRmanYyNVRvNkZiT251TFdnME12blRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNTUxMDk1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NTY1MTIzNzc3XCJ9Igp9"  // PUT your SESSION_ID 


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
