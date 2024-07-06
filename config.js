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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_15_06_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAxNixcbiAgICAgICAgMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3BjbTBXQXBpUmFDODFsMktkNHA1YW9IaHE3SGVHcytPQm5ESXE1Tk9MUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgzODg4OTIyNzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFMTk1QzFBNkQ3NEQ3Q0JGRTMxRDU0ODYzRUZEOTI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI3ODM2NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJSFVYbE51R1RMT0JHZHhVLUFUTXh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJkYzQ2ZGQzLTM0NzAtNDQzZC04NDYzLWQ1MGMyNDhiZjEyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDU0LFxuICAgICAgMTc0LFxuICAgICAgMjA3LFxuICAgICAgMjU1LFxuICAgICAgNTUsXG4gICAgICAzNixcbiAgICAgIDY2LFxuICAgICAgNTIsXG4gICAgICAxNzMsXG4gICAgICA1NyxcbiAgICAgIDEwNixcbiAgICAgIDUwLFxuICAgICAgMjMzLFxuICAgICAgMTcsXG4gICAgICA3OCxcbiAgICAgIDE0NyxcbiAgICAgIDExMyxcbiAgICAgIDE0NCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDI0OCxcbiAgICAgIDE0MyxcbiAgICAgIDE1NCxcbiAgICAgIDE3NixcbiAgICAgIDEwMCxcbiAgICAgIDU3LFxuICAgICAgMTcyLFxuICAgICAgMTc1LFxuICAgICAgMTY2LFxuICAgICAgMTM2LFxuICAgICAgOTQsXG4gICAgICAyNDQsXG4gICAgICA2MixcbiAgICAgIDEyMixcbiAgICAgIDMyLFxuICAgICAgMTAyLFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRCUUQ1V1BSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgzODg4OTIyNzk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc2ODM3NDAxMTkwNDU3OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzTzBlUUVFTlc2cGJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHBnTUprNElzaXNyc3hieU5IeW1OVjRFSnVlT0NPSmR2Ulc3WmxXUmNWZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2L2haVkcxOGlSMVJTcEtqNEc4S1pxR0xmUURoQ0U3RjVpKzJxdzMrZlE4SW5Eb09YeXVNVjhaeE50M3pnNk4vbjRtdUJKZmV4SXNDS09MYUhYQjFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4czFqR1c5bWlOMnlUVlB1TC9tQ1djSWZHa1lma2trVXkxUk9pa2kydTVFcXFra3Z0NEJqVDJNaVk4UEt1MXNIaFZlakFEdnlUTitZMFNwcWtERlhEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgzODg4OTIyNzk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNzgzNjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJZby5qc29uIjogIntcImtleURhdGFcIjpcIkV0SGY4cXZqWjZubFlkOW1rMzhjekpBaUVtOGRONnM1ZTlFVjFsQ1ZnYlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4NDc5NDIzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9|  ""  // PUT your SESSION_ID 


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
