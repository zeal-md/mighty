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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+27672416823";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_56_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVLeUFuS2RMbjBva3ljMEYxQkdmUE1qRjhjWDdpYnFGQ3FKMWQ0dnNsM1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBLSGZkMzNfUVN5dVcyb0R3RG9DYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzEyZjU0ODMtMmM4MS00ZTEzLThhNjUtNWRiNTVjZWZiZGNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDI0NCxcbiAgICAgIDExNCxcbiAgICAgIDE3LFxuICAgICAgMTU3LFxuICAgICAgMjI2LFxuICAgICAgNzksXG4gICAgICAxNDYsXG4gICAgICA4MyxcbiAgICAgIDExLFxuICAgICAgMTQzLFxuICAgICAgMTM3LFxuICAgICAgMTAzLFxuICAgICAgMTIsXG4gICAgICAxNjcsXG4gICAgICAxMDUsXG4gICAgICAyMDEsXG4gICAgICAxNjEsXG4gICAgICA3NixcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAzLFxuICAgICAgMjMwLFxuICAgICAgMTY1LFxuICAgICAgMTExLFxuICAgICAgMjEsXG4gICAgICAzNCxcbiAgICAgIDIyLFxuICAgICAgODQsXG4gICAgICAxNzIsXG4gICAgICA2LFxuICAgICAgMjUxLFxuICAgICAgNTYsXG4gICAgICAyMTEsXG4gICAgICAxMTQsXG4gICAgICAyNyxcbiAgICAgIDYsXG4gICAgICAxMTYsXG4gICAgICAyMTUsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkcxU0I4VDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjcyNDE2ODIzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc0NTE4MTE4ODQyNDA0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5zMExvS0VJMjZyTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCVXd3YTg0cEZ3ZGdBR0luaHZGbSthb0N5OTR2NGd6ZUs2MWZsUkdRZWpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9mK0pZbGFXc0JNZEpNOWtxV0F4QVdVNkpnbk9ZZlJlRm9URTB5T1VqcEZuVGFnM3VRWkNvSEN5d2MrOWVBUC85bUNOL2hmWWszNjRybFV4Q3JYUWd3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRRQlBhRXl4dTY0MDY3S3l3Z0tMS3lZZzdkdlR5cGZyc1RWNmNVYXc5VVM4M0QyL29VNXlseGVkZmNYbk5uSmNpd0tscEt2RE9LZWFuaDRUK2svMWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjcyNDE2ODIzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM5Mjk3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
