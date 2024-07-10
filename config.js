⁹const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUdU9RMG1Rejk5WERPVmRWYnhMdEtzVjVPT0lMUzE5SjN1ak1Td2ZqU2hjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQxNzA0NjAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQjBDRUQxRjdGNkRCQjUyRjNBOUI1M0EwQjg0QzVENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2Mjg3NjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVl9mOGs2TkhUS3E1ODZ4TEhVYTlpZ1wiLFxuICBcInBob25lSWRcIjogXCI5NzEzNzAyYS00OGRiLTQ5YzYtOTU5Ni1hNzdjZTgyYjcwYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMzYsXG4gICAgICAxMzgsXG4gICAgICAxMzEsXG4gICAgICAxMTMsXG4gICAgICAyMTUsXG4gICAgICAyNDUsXG4gICAgICAzMSxcbiAgICAgIDE1MyxcbiAgICAgIDM1LFxuICAgICAgMTU2LFxuICAgICAgMTg1LFxuICAgICAgMTYyLFxuICAgICAgMjAyLFxuICAgICAgMjA4LFxuICAgICAgOTEsXG4gICAgICAyNTQsXG4gICAgICA4NCxcbiAgICAgIDEwNyxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNCxcbiAgICAgIDE1MCxcbiAgICAgIDMyLFxuICAgICAgNzIsXG4gICAgICAxNCxcbiAgICAgIDc3LFxuICAgICAgMTQ0LFxuICAgICAgMTcyLFxuICAgICAgMTIzLFxuICAgICAgMTYzLFxuICAgICAgMTYsXG4gICAgICAyNTUsXG4gICAgICA2MyxcbiAgICAgIDIyOCxcbiAgICAgIDE4OSxcbiAgICAgIDIxNSxcbiAgICAgIDE3LFxuICAgICAgNjYsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWVzlaR0NGRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDE3MDQ2MDI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcxNzkwODQ4MTE4ODA2OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lITjR1SUVFSXZzdXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMTNnaVl5Y3ExK2hJelZuNVBXUGFCRDlia3ZFNUZIQ2U5aWI5MVFaZ1Budz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLWWp3KzluZmNNL3BHZjlDcTVvb0tTUmJYUXhRRlRvT3FtajhBVGM1NHd4TW5DYlorb1NHdzRWWmFWblJCSHpaK3FITzZoZUpzQlVkRzJTeVVudWRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuRWI2M25sOFFQMVVHWnJYdk5tNUlEVjV6S0V1aFN2MjNZSnc0UXpoSUpMaCtYREtlTnNmd1FFM0FMNjJxc24vcjA1YWtzRVZYOVI3dW1RMGV5VG5Edz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0MTcwNDYwMjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjI4NzUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlJPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHT3BsQm1iVDcyblFMK1J2UHoxMzUxUzU3Q0NSdVg4YUpnTnhxWUJLY09FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODA4NzgyMDUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
