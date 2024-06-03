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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2pJSXA4cS9kc3NvdkRvSzVzWjg0dDg2aXpHMThLaVdZdmxsbEE0KzNudz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2OTAzNDkyMDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdGMzI2OTUxMENENDc2ODNBRkNDODMzQjdGNkFCQzJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQxNDY3NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaZHdsSjBpLVRxaXoyZmloeF9qVUVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyMDUzMzgzLWViMjYtNDEwYS1hMmE1LTU4ZGEwODBjNjZmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxMjksXG4gICAgICA0NixcbiAgICAgIDMwLFxuICAgICAgNTIsXG4gICAgICAxNTYsXG4gICAgICA1LFxuICAgICAgNzQsXG4gICAgICA5NixcbiAgICAgIDE3NCxcbiAgICAgIDIyMCxcbiAgICAgIDEzNCxcbiAgICAgIDIyNCxcbiAgICAgIDE0MSxcbiAgICAgIDE3NyxcbiAgICAgIDIwMCxcbiAgICAgIDEwOSxcbiAgICAgIDU5LFxuICAgICAgMjEyLFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDM0LFxuICAgICAgMjEyLFxuICAgICAgMTkzLFxuICAgICAgNDYsXG4gICAgICAxMjUsXG4gICAgICAyOCxcbiAgICAgIDc1LFxuICAgICAgMTk4LFxuICAgICAgMTE4LFxuICAgICAgMTMzLFxuICAgICAgMjM2LFxuICAgICAgMTQxLFxuICAgICAgMjM0LFxuICAgICAgMjE1LFxuICAgICAgMjQxLFxuICAgICAgNzQsXG4gICAgICAxOTcsXG4gICAgICAyNTIsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUMzQU02UzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY5MDM0OTIwMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTQ1NDYwNDMxMDk0NTY6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJTlRQXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEw0eHQwRUVJdlc5cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSRG5KOFNoSVk4YjRqUVlZMFh3VTVrVmZtVnZiY0tUWUdmN3dRTTJCaWdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBTMElRVy9xdWpHbUlEMk1RSHhaTUdrRlZFVEZOcUtkWld1WXZhVWlITlhzeFJVVWdmY0pPOW9NMmVqeTVTVEZvVTR6WHpTcWFYYlhDNlRHM0xrdkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZVYzlpR3hnYWc0aUN5b1o2d1QyTENac0Z6UzdBRERjU1JtVTJ3UmVEdjNSdWVZL1pJdzlpcEhjQzdORGthWk56VnUzRlgyRkIwN3BaZEpHbXYvVWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjY5MDM0OTIwMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0MTQ2NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDTmRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNOZC5qc29uIjogIntcImtleURhdGFcIjpcIi9iQ2Y0MWptQWV5Q3V4MjhxNjVVbnpwaDJJS09hUDhQSjlmUTFCYWZpUjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTkzOTMxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
