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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_57_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvekhQSlBzOXpHYTcyVWZhai95c1NPM1hQSk9vMHpmS253U0xBS3ZObSswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjI4ODUzMjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRjA4NjUwNjNENDI2NzM1MDAyMjQ3OTlENTc3RThFQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5MDk4MzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTQ0cm1EQ1lTT0drZ2R3V0w2bjgwUVwiLFxuICBcInBob25lSWRcIjogXCJhODMwYTJiMy02MWQ1LTQzMWItYTdjZi03OTA1YjljNzNlNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAxODQsXG4gICAgICAxMTMsXG4gICAgICAxNDIsXG4gICAgICAxNixcbiAgICAgIDE0LFxuICAgICAgMjEzLFxuICAgICAgMTMxLFxuICAgICAgMTYxLFxuICAgICAgMTUsXG4gICAgICAxMjEsXG4gICAgICAyMzYsXG4gICAgICAxNTIsXG4gICAgICAyNDYsXG4gICAgICAxNixcbiAgICAgIDY1LFxuICAgICAgMjI2LFxuICAgICAgNjMsXG4gICAgICA1MCxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE5MCxcbiAgICAgIDYwLFxuICAgICAgMTE2LFxuICAgICAgMjM3LFxuICAgICAgMTAxLFxuICAgICAgNjIsXG4gICAgICAyNTMsXG4gICAgICAxOTYsXG4gICAgICAxMTIsXG4gICAgICAyNDEsXG4gICAgICAxMjksXG4gICAgICA1NixcbiAgICAgIDE0NixcbiAgICAgIDExLFxuICAgICAgMTY0LFxuICAgICAgNyxcbiAgICAgIDIwOCxcbiAgICAgIDI4LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVhHQ0wxWTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjI4ODUzMjgxOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzE4ODkwNzk0NzIyOTM6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUExnOUlJSEVJYjMwYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4b3M5anBDZ2RCSVNIT1lGUUJBcUo5WGU5WEdNSXBZaEc4UWpVUEd0cm5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNjd0JnZlRENVpSdDBTMTd2a1k4UlFGK3AzbDJ4NXdpaytSbHBydnErb3VRY2JtR2lMbURRRkw1Q1VpY3NYMzlKbGV5REMwWHFqODI0Y1dRMVZvR0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5EV25JVzJLd3RMVDBvTW53STVlb0VyMEhrd3owNFRQUWVsanRWSmEvWi82Sm9XMjZ4MmZ2MkVDa0F4MThqUUV3cGl5bzQxWFB4dDdJZXdUR0RSdmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjI4ODUzMjgxOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTA5ODM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1VUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmWGRBZkJ1amFsUkQvbG9WNEtrMktWQ3BOeTE1dHUzQWRudWZpelRJai9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODUxNTU0NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODkwOTgzNDg0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
