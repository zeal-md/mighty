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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '923436062975') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_51_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA4LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUM1L3ZYMS81VThScDF3eTdBQlFMR001aVp4REQ5L3JOazhpVjl1c013ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmpWUTEyRTFURGUzeG16aTlFZXdFd1wiLFxuICBcInBob25lSWRcIjogXCJjZDFiNDNiNC1kYWIyLTRjNzUtYWMxZi03ZmU0MmE1MmY3MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMjUsXG4gICAgICAzNSxcbiAgICAgIDkxLFxuICAgICAgNTEsXG4gICAgICAxOTYsXG4gICAgICAxNzksXG4gICAgICAyLFxuICAgICAgMjM3LFxuICAgICAgNzEsXG4gICAgICAyMzEsXG4gICAgICAyMixcbiAgICAgIDE1MyxcbiAgICAgIDIxNSxcbiAgICAgIDgxLFxuICAgICAgMTUyLFxuICAgICAgOTgsXG4gICAgICAxODEsXG4gICAgICA2NyxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDQ0LFxuICAgICAgMTk5LFxuICAgICAgMTY3LFxuICAgICAgMTcyLFxuICAgICAgMTc3LFxuICAgICAgMjM2LFxuICAgICAgMTY0LFxuICAgICAgMjM5LFxuICAgICAgMTQwLFxuICAgICAgNzQsXG4gICAgICAxNjUsXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDY3LFxuICAgICAgMTAsXG4gICAgICA4MSxcbiAgICAgIDI3LFxuICAgICAgNDAsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNU45OFoxSkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzNjA2Mjk3NTo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzMxODQwNDU4OTUwOjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pheXhhc0VFSXIvdjdRR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVHZFdGpCNC9qWElYQnlUWDVKU1l0K2NoSDBkWUZkL3RFbk5ndVlZdDFrYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3TmZvd2ZiUDNBdnhsbTg3VmxrZFBVNjJTU2ptanF3MGNlWC9DSkNrUUY3bmZOQ1NDb00rMi9jTllIUm1lakZoLzd1U1Z0V3ZXQnIzM1c0b2gzMjhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4R0pyMnhtdzlmdmtFbTdMSVdRdWh2K1NZdjF2Y1hDU3ZmQStNRlVDWXkwRjRYRGZyclNFL2YyMUkrc3VqYlQxMGFYc0dXcnEzYVAxUzh5dnhWVmJBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MzYwNjI5NzU6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzEzMTAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFl1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmZFJENGRrazc1ckhmNndWL1Nvb1IreUpRakNiWkxPQ0pKTWwzTVdLZDJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjUwNTYyNzcsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNV19LFwidGltZXN0YW1wXCI6XCIxNzE5NjkzNjUxMjE1XCJ9Igp9"  // PUT your SESSION_ID 


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
