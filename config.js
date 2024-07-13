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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_02_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidSt4RFdpSlY2Ukx2akhEV3g2bDI2VU9xUnBnRTdYd1BTVlRBMXc3bFRrRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXFjbkNjMUJTbWEza1VnYlp2Zzctd1wiLFxuICBcInBob25lSWRcIjogXCIyNWJhZDkxZS0zN2M2LTQ5NjMtOTQ3ZS1kMDI0YjdjYjZlYjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgOTIsXG4gICAgICAyMjksXG4gICAgICAxNjUsXG4gICAgICAyNDIsXG4gICAgICA0OSxcbiAgICAgIDEzMyxcbiAgICAgIDY2LFxuICAgICAgMjEyLFxuICAgICAgMTg3LFxuICAgICAgMTE5LFxuICAgICAgMjIxLFxuICAgICAgMTIsXG4gICAgICAyNTQsXG4gICAgICAxODMsXG4gICAgICA3MSxcbiAgICAgIDEyNCxcbiAgICAgIDQ4LFxuICAgICAgMjM1LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMjA3LFxuICAgICAgMjExLFxuICAgICAgMjA5LFxuICAgICAgMTg1LFxuICAgICAgMTI5LFxuICAgICAgNzksXG4gICAgICAyNDMsXG4gICAgICA4MSxcbiAgICAgIDEwNixcbiAgICAgIDE5MyxcbiAgICAgIDE1OCxcbiAgICAgIDI2LFxuICAgICAgMjIwLFxuICAgICAgMTE5LFxuICAgICAgMTc5LFxuICAgICAgOSxcbiAgICAgIDEzNCxcbiAgICAgIDI0LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdEWFYyOUY1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzY0MjMxNjY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY5MTQzMTM2NTg1OTA6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdnFyWVlCRUtXRnliUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAza3JMRlNCUU5LUUs4NklSQWpYOUxYRDJyTVpTZlRwUnY0LzA1UTlLV1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnFjZTM1VVJSOS9rUi9IazIzMG9RdDY2MmFVbWJobDJWQ2tKRmlKa29zZCtUSTZrQ0h4cENtSjA0Qk5yTi9oUTY3VlF6cHBIZVJySE9lVk5IV3ZmQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmUzcWdPeHNXeklERStTNnY2TitZMkpYZlFpamVYRWEzS3RFMVRZNitSaHY3eW5kZkZPMWFVSXViSFJNQWJhQ3VJUW5ienJXZTE1dTlHVTBTdHk1QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTc2NDIzMTY2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NjEzNTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWWFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJZYS5qc29uIjogIntcImtleURhdGFcIjpcIm0ybW9MR1ZoUmtZNXFNamY4aTh2MTNhWlpKdUpRMlhSL2tMelNITjdDYXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxNzY5MjU5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MDA4MDk4MzRcIn0iCn0="  // PUT your SESSION_ID 


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
