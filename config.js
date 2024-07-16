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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923263260340";




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


global.SESSION_ID = " SUHAIL_03_54_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWpaZm8vWU43TDVrZlJMUWNtbWNsNk1GcWtJMG14S0tBZ0RaOEc0ZE1xND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNjMyNjAzNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAxQzUwN0NEMkNBNjUzQ0VFQTQ5Mjk1MDg2N0Y1MEY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEwMjA0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI2MzI2MDM0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkQwODNDQTc0QTZEQzU4MTJDNzhDRTRCODJFNUQ0MTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTAyMDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjYzMjYwMzQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTkyRTkxQ0RFRTM3QzI1RUY3ODMzQTYyMDc5NzU0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExMDIwNDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNjMyNjAzNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4NEE5MzNEMTU1Q0ZDQTk5NTdBNkIyNDQ5ODM1MzJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEwMjA0MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrM3U1SzVmeFNxNkltYlN3cUlXOGxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRiOWM5NDYxLWNiZmItNGJjOS1iMGExLWEwZGU4N2UzZDQ5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICA0LFxuICAgICAgMTgsXG4gICAgICA3NCxcbiAgICAgIDEyLFxuICAgICAgMSxcbiAgICAgIDE1MSxcbiAgICAgIDg5LFxuICAgICAgMTQzLFxuICAgICAgMTQ2LFxuICAgICAgMTkyLFxuICAgICAgMTcxLFxuICAgICAgMTAwLFxuICAgICAgNzgsXG4gICAgICAyMDMsXG4gICAgICA5LFxuICAgICAgNzYsXG4gICAgICAxMTUsXG4gICAgICAxMzgsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxNTcsXG4gICAgICAxOTEsXG4gICAgICAxMjIsXG4gICAgICAyMDIsXG4gICAgICAyMjgsXG4gICAgICA0MyxcbiAgICAgIDkyLFxuICAgICAgOTYsXG4gICAgICAxMTksXG4gICAgICAyMyxcbiAgICAgIDk5LFxuICAgICAgMTU1LFxuICAgICAgMTUzLFxuICAgICAgMTM0LFxuICAgICAgMTA5LFxuICAgICAgMTkyLFxuICAgICAgMjAwLFxuICAgICAgMjEyLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNGNUNYSFROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNjMyNjAzNDA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ3NjE4MDM0Nzc4MjQ0OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVsbG9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVHFqWXNERU5QZDE3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlM5a2c4cnNwbnhZUDFBWThNSjFjWnEzL3BhM0tzR2E0RUUzc096Q1diRkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUS8rTVNUSDJmL3hZTFZOcE14RzYva2VrMGtrTHFBSGlJSG81ZVdyWnpRSnhZcDRIak13SjZ6R0hzdGtwWXRmZHYrNHUrUjV5dzE5MzNqNkFGcHJYQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGdCa29OVy9YcWoxMmw0dGozSFBrZFk1Wmk0cEZSZExaMVh0Ty9ydUVyOEFCWDdzYXlZQnc2SGFjQWp0MXBmcWNpcml0TzFCNjNJSGkrSG1FK281alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjYzMjYwMzQwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMDIwMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHb0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdvSC5qc29uIjogIntcImtleURhdGFcIjpcIlY1cy9nb1NpcS8wdjA0eHZlbkZrMW0vM0JQZnR5akxqNVkza3l5N1lYK2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI4NjAxNzE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMDIwMzkxNjZcIn0iCn0= "// PUT your SESSION_ID 


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
