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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250505997591";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_36_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTzVzUjFjMWtBbzE5RGRCZVlYUWlqTm5oeEZyVWhldEJPUVpTOVZLYmlXOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSnNUU01uWXlUNTJlR2lQVy1XUGVSZ1wiLFxuICBcInBob25lSWRcIjogXCIxZjNmMjUxMi0zZGIxLTQyNWEtOTZkZS04YzM4NWQ0NWZlYjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTczLFxuICAgICAgMTE3LFxuICAgICAgMjIxLFxuICAgICAgMTgyLFxuICAgICAgMzQsXG4gICAgICAxNjgsXG4gICAgICAyMTEsXG4gICAgICAyMjMsXG4gICAgICA1LFxuICAgICAgMTYwLFxuICAgICAgMTQ1LFxuICAgICAgNDUsXG4gICAgICAyMTgsXG4gICAgICAxNTAsXG4gICAgICAxNzAsXG4gICAgICA1MyxcbiAgICAgIDEyNSxcbiAgICAgIDE2NCxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICA0NyxcbiAgICAgIDIzNyxcbiAgICAgIDUwLFxuICAgICAgMjExLFxuICAgICAgMTA1LFxuICAgICAgMjQzLFxuICAgICAgOCxcbiAgICAgIDE0MSxcbiAgICAgIDEzMyxcbiAgICAgIDQ0LFxuICAgICAgMjE5LFxuICAgICAgMTcwLFxuICAgICAgNzMsXG4gICAgICA0MixcbiAgICAgIDE3OSxcbiAgICAgIDI5LFxuICAgICAgMTA0LFxuICAgICAgMjAxLFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHVxM0kwS0VMQ1Y2TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBUnRyN05WTVNkKzZNYzh3RUE0TjlHQ0RDTGE0MUVXTlFabUZ5ZDhTRHk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFna2NxMUdLY2czUndsMm1rVi8zVUNva2JKbS96cHo2RTB1eVhwWUFyd2hnZjJ2cUh4bXI4YmlaNnZ6ZHpBYXNkTUtiRHpPRDRPaVRIMnlwKzREbWl3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkYzbUdDSXZJbnlZSUtIQTc2YTMzTjh5YnpkQVhPSmc0bFd5R04yRkFSMHpxeVE2YlJmNC9xbGZycmgvc0t1eFY5Ny81TXp0SnNCNVN5d2ZUdFNVVWp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDU5OTc1OTE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMwNTIwMDk2NzA2NzM4OjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNTk5NzU5MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcxNzcwMTFcbn0iCn0="  // PUT your SESSION_ID 


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
