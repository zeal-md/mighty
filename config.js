const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="xdacity@gmail.com"
global.location="Lagos,nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Feranmi245/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GJ5SGZWZ9wk3OcUwo20gG5";
global.website=process.env.GURL || "https://chat.whatsapp.com/GJ5SGZWZ9wk3OcUwo20gG5" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5cd34db4564750eee3f0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿✊" 


global.devs = "2348022159244" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348022159244";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348022159244";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHl4akxzL0l0UzRyN1p3Sm1kd0s3NkRzdWJkenMwb0FEYWlyUytJc3lZND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDIzMTA2OTA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQjI2Q0U0RTYwMzdCRUYzN0Q1NTQxN0UxMzU1ODM3MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjA2NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDIzMTA2OTA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwREE1MEI4MjFENEVGOUZBOUFCMEM2MEU4MTFGRDBCM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjA2NTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmZyYTZBNjVSYlc3SmVkT202VF9fZ1wiLFxuICBcInBob25lSWRcIjogXCJiYTMxYzY1ZS02YTFmLTQwMTgtYmUzZi0xYjUxYzZiNTI4NWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxMCxcbiAgICAgIDk1LFxuICAgICAgNzYsXG4gICAgICAyMzIsXG4gICAgICAzMyxcbiAgICAgIDIxOCxcbiAgICAgIDE3MCxcbiAgICAgIDEzMyxcbiAgICAgIDkwLFxuICAgICAgMjUzLFxuICAgICAgOTQsXG4gICAgICAxNzAsXG4gICAgICAyMjAsXG4gICAgICAxMTksXG4gICAgICA2MixcbiAgICAgIDE3LFxuICAgICAgMTc4LFxuICAgICAgMTUyLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTk5LFxuICAgICAgMjM5LFxuICAgICAgMTYyLFxuICAgICAgMTI4LFxuICAgICAgMjUxLFxuICAgICAgNzIsXG4gICAgICAxODQsXG4gICAgICA1NyxcbiAgICAgIDE4MCxcbiAgICAgIDEzNSxcbiAgICAgIDE1LFxuICAgICAgMjE1LFxuICAgICAgMTIzLFxuICAgICAgMSxcbiAgICAgIDg0LFxuICAgICAgMTAsXG4gICAgICAxMjcsXG4gICAgICAxMDYsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZOU5XOFdXWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyMzEwNjkwODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTE5MjcwNDEwOTc4Njg6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLTus6x0YLOudC8zrHwn5KAXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVBRalA0Q0VLWFA3YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPdUhEaHMwd2VVbkNGd24vOEl2bUE3UzgzS0YxcUdJOFpscThrY2s5amhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjAyL2F2Y1lpTXA2K25kQVRYUXNnMEJQbk4yRkxIdFYvdldOOXUveG5GakVqQlpId1JYZ3lVNFhONGhjQ2VhOCtjMTJHbUY3MHVkY1hsbE1VUitGSENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVSZWhISXZSQXErbXNyRS8wZUp3QWFHaU01WHBTejAxWVRVcTBrb3RzQW5SZTFFVElYdXhyNXFXUGs1bkJhTTZNZlpQbTJNN2RKZk5mY3lPRVB3cGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjMxMDY5MDg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDYwNjUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGVIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQZUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEeE5qWFo3dVAvOEMvaWlHc0d3ZGQvd2w3WnBUS3lLeFgxSUdKZnhhalFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwMTMxODk3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDYwNjUwNTQwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",
  packname: process.env.PACK_NAME || "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲",
  botname : process.env.BOT_NAME  || "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),



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
