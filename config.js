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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c9c6dc21b3733e773d1d8.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254795010788";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795010788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/c9c6dc21b3733e773d1d8.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_17_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieEFyTFprbzJJNDNQMzVzUlJVaGgvMGdMUFJoMk5pWXBZNlNpTlNKOFJWQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTUwMTA3ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGRTdEQUNFNDQxRTc2QjlFNDMxNjQxMDI2RDMxNjg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcwMzgxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NTAxMDc4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEMyOTUwOTJFNzUxQjM3Qzg0Q0M4QzQ3RDkzNzQ2QjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzAzODE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk1MDEwNzg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNUZGQzdBOEVFQjVCQTY3QzM1RTk4MUMyRDM0RjQxMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MDM4MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTUwMTA3ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkREMjJGNEJGRkQ4QkNBN0VGMzA3MkJEMUNEQzQ3NzE0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcwMzgxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2RTRfN05iVlFHQ1FDZl9TVTRTWWN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJkMjgyOWJjLWEzODAtNDBmOC1iOWYwLTU1ZmVmYWM5MDUxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDE5LFxuICAgICAgNTksXG4gICAgICAxNjgsXG4gICAgICAyNDMsXG4gICAgICAyNTQsXG4gICAgICAxODEsXG4gICAgICA3OSxcbiAgICAgIDE0NyxcbiAgICAgIDgwLFxuICAgICAgNDQsXG4gICAgICA0MixcbiAgICAgIDE2OSxcbiAgICAgIDEwNSxcbiAgICAgIDEwNixcbiAgICAgIDEwNixcbiAgICAgIDE4LFxuICAgICAgMjAyLFxuICAgICAgMjUyLFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE2OCxcbiAgICAgIDEyMyxcbiAgICAgIDMxLFxuICAgICAgMTY5LFxuICAgICAgMTE2LFxuICAgICAgMjU1LFxuICAgICAgMTE2LFxuICAgICAgMTQ1LFxuICAgICAgMjAzLFxuICAgICAgOTgsXG4gICAgICAyMTYsXG4gICAgICAxNjAsXG4gICAgICA3MCxcbiAgICAgIDIxLFxuICAgICAgMjIzLFxuICAgICAgMTkxLFxuICAgICAgMTIwLFxuICAgICAgMTEwLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNYUE5INFZNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTUwMTA3ODg6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjA0MTkyOTc2MDc4Njo3MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJXbGxnYXZpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVRIbm9RRUVNQzJ2N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4b1loUXlqSk0wbkE5UUVJOW16OEZXVWx5SDlwdU5Ud1ozSlZGcDR0a0Y4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkR1UXNhTkI4Z29jdEdtTlRwTHRzWFBuVFUwb0cydWdzWjNzSUl1dXE1NWV4MUl1RE5CRVNhU0xrWUh3STRwbElYSzNHUk5JbFhvby9QRHJyMFpWTUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNtUEJ2cHBDdXRhTjljRlYrdHpBOW43QWl6bjRLUzFVaUMyTURkWHZNcm0yWm5ISHF3VGJmQktsZ2dCTVpBNStrcFZ0T2xYVk9OeHdhaVZ4WFN2VkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5NTAxMDc4ODo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcwMzgxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU83T1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzdPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVMvTXdaMGZjV0xRSlFOYUQwR0NhSjRheHJRREVlYVJPN3FhV20wSExvOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDgyNjMxMTA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MDM4MTQwOTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "wllgavi",


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
