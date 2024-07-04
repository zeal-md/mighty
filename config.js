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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254752819776";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_00_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImMzT1hHSzRPQnBvaXBQSnR4NndjZEY3YlNOeWxHSXAvS25BbGJUaVBUS3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm96NXlxU2c5U1hxcFFrajd3d3pZUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmJmZmYwNTgtZmNkMC00NzkyLWI3NzktMDk0MDczNDNiODA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDQ0LFxuICAgICAgNDIsXG4gICAgICAxNSxcbiAgICAgIDEwNyxcbiAgICAgIDI0OSxcbiAgICAgIDgwLFxuICAgICAgMTk4LFxuICAgICAgMjA4LFxuICAgICAgMTY5LFxuICAgICAgMTc0LFxuICAgICAgMTg2LFxuICAgICAgOTksXG4gICAgICA5LFxuICAgICAgNjYsXG4gICAgICAyMixcbiAgICAgIDEwMyxcbiAgICAgIDE1OSxcbiAgICAgIDI1MyxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxMjAsXG4gICAgICAyMzMsXG4gICAgICAxOTgsXG4gICAgICAzNSxcbiAgICAgIDIwOSxcbiAgICAgIDE5MCxcbiAgICAgIDEwOSxcbiAgICAgIDYyLFxuICAgICAgMTgzLFxuICAgICAgMTcwLFxuICAgICAgMTIwLFxuICAgICAgNixcbiAgICAgIDIxMixcbiAgICAgIDk0LFxuICAgICAgMTEyLFxuICAgICAgMTY0LFxuICAgICAgMTg1LFxuICAgICAgMjgsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKOFhDTUdFNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzUyODE5Nzc2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkzODQxMjYwNTQ0MjQ2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRSbjRnSEVKcUJtclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpbGV4N1hKOUxkZ09FMmFWZG9BSFV1NVNwbHdnMko1d2NVZ3JBYXJXVGh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdiZFR0eGJ6dFRGQUFvR2NlWUxiU2pFdHNZODdHRFJsbzJoOTk5Q0FKVnpWSi83TFZpUkFMVlM4SCtzVDVzTWVBbFVhaE1lV3dEYzRTREdRSVI4QkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZRV1VYUytzQmlFdEIzdlR4NE85b0ZTSFBXd2N0ODF4VnVuQnVyOWtUeXI0clpYa3liT2hqV1p3QS8xaHRkSzR2K3RjZTNxVUtiWVIxeUVpVXEwaGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1MjgxOTc3NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwOTA3OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMbXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxtdC5qc29uIjogIntcImtleURhdGFcIjpcImVDdHVSUzdpaVlYRE5jbUVIa1FKMmtiVWswMmZvbVFEMnlYVjBLdW1IaXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5NjM0Mzc2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDkwNzk2NTMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BIG BOSS",
  packname: process.env.PACK_NAME || "BIG BOSS",
  botname : process.env.BOT_NAME  || "BIG BOSS",
  ownername:process.env.OWNER_NAME|| "BIG BOSS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BIG BOSS"  ).toUpperCase(),



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
