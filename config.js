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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237656276980";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/7652d9da4da3e8c333547.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_41_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6VTdBcGFmQ01SZTFaVjNJMXJDaXRxVmtYMjhRV1pUY1NsdG0vMXN0Q0JJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNjAxNzM1MjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNUI4NDM5QjI3REY4NThGRDQ2ODZFRkJBQzdGNkU5QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNDM2OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjYwMTczNTIyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjk0OUE2RjU2NjdGRDI0MUM0NTY0MjkyRDM3RjA4NENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDQzNjk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI2MDE3MzUyMjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlFQzRGM0FERTNCNEE3N0ZCNkZFODQ3OTREODczRkEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA0MzcwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNjAxNzM1MjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNUJDMkM1QTVEODA1RDE2RDREQ0NBNEVFMTYzRUNENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNDM3MDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVVd3OU1vYmpRU3VBU2lyNkxfZ2VOUVwiLFxuICBcInBob25lSWRcIjogXCIyOGU4MWY3Yy0yYzU5LTQyZGMtOWZiMi01N2I5ZjJjODk3YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTM4LFxuICAgICAgOTcsXG4gICAgICAxMyxcbiAgICAgIDEwLFxuICAgICAgMzMsXG4gICAgICAyMzMsXG4gICAgICAzOSxcbiAgICAgIDM2LFxuICAgICAgMzQsXG4gICAgICA0NCxcbiAgICAgIDEyMyxcbiAgICAgIDIwLFxuICAgICAgMjMxLFxuICAgICAgMjMwLFxuICAgICAgMjMzLFxuICAgICAgMyxcbiAgICAgIDI0MCxcbiAgICAgIDM0LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDE2NixcbiAgICAgIDc1LFxuICAgICAgMzQsXG4gICAgICA1LFxuICAgICAgMjI0LFxuICAgICAgMjQsXG4gICAgICA1NixcbiAgICAgIDIwMyxcbiAgICAgIDQsXG4gICAgICAyOSxcbiAgICAgIDEyNCxcbiAgICAgIDEzNixcbiAgICAgIDEyOCxcbiAgICAgIDExMSxcbiAgICAgIDkwLFxuICAgICAgMTU2LFxuICAgICAgNTUsXG4gICAgICAxOSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVg1MUpBRFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNjAxNzM1MjIwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwODUzMDAxNTE5NTI5NToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKIh/CdkIDwnZCR8J2QiPCdkJLwnZCE4pym8J2RsPCdka7wnZG58J2RsPCdkbrinKbwnZCL8J2QhPCdkI7wnZCN8J2QiPCdkIPwnZCA8J2Qks6UXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVcyMmxrUTdwWFV0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxRytxVm82bGxreEw3R0xlZURCdEJUZlkzdTRnWVQ3V0NRdkJhaGxqN2tJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpneTJpRGdYMGNWajhFZDJvQnRBS3grTnp3aHZUSlNqUm9oUUR3Y1dPS1dnMWtibS9uL1dWNW9BcFVmL2RNbG1WMHMvaGJGdkhJb3IwQzRjR3l1RERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkh1eU5QYkUrKzdQSUk3dGtrdHlGSmtNTXloek5qejV4b3ZhQmlJaGpnUHNtMHNjY2NwZzZmb1FYUmtwS09OeWFOWC91VUR0QWYwNm9sMVB5emZoZ2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNjAxNzM1MjIwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDQzNjk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWV6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTR1VBMjVBTDZ4NjYyaTNGYkhEeVNVZGJzQnJuVzN2WXhyVmNMYzJuYjlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODEyODA2OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDQzNjk3ODAzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "MONARCH OF SHADOW SUNG JINWOO LEONIDAS",
  botname : process.env.BOT_NAME  || "𝐈✦𝐀𝐑𝐈𝐒𝐄✦𝐅𝐎𝐑✦𝐋𝐄𝐎𝐍𝐈𝐃𝐀𝐒",
  ownername:process.env.OWNER_NAME|| "SUNG JINWOO LEONIDAS",


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
