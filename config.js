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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_06_53_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICAyNixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR29KdDY0ait6NDIrMmt1Mno0b2h0WXlOSVBCY2ZVQThYSGdUR04rSUFkcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidnlMSU1pVkhTM1NzeW5FYkhWMWpLd1wiLFxuICBcInBob25lSWRcIjogXCI0OTIyOTU3MC01ZmJlLTRjNmUtODI0Ni05MTNjYzFlMjRmY2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgNzAsXG4gICAgICA1NixcbiAgICAgIDE2MSxcbiAgICAgIDI1NSxcbiAgICAgIDEyNyxcbiAgICAgIDE2MSxcbiAgICAgIDE2NyxcbiAgICAgIDEyNixcbiAgICAgIDYzLFxuICAgICAgMjAyLFxuICAgICAgMTI3LFxuICAgICAgMTc3LFxuICAgICAgMTcxLFxuICAgICAgMTMwLFxuICAgICAgMTkyLFxuICAgICAgMTk2LFxuICAgICAgMjI1LFxuICAgICAgNTksXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMjksXG4gICAgICAyMjIsXG4gICAgICAyNDMsXG4gICAgICAxMjIsXG4gICAgICAzMSxcbiAgICAgIDIyMSxcbiAgICAgIDg2LFxuICAgICAgMTkwLFxuICAgICAgNTQsXG4gICAgICAxMzIsXG4gICAgICAxNTUsXG4gICAgICAyMzIsXG4gICAgICAxMCxcbiAgICAgIDE4NCxcbiAgICAgIDE2NixcbiAgICAgIDcsXG4gICAgICA3OSxcbiAgICAgIDIyNyxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUZHdJME9FT2JVM2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1gvVUl2R2locnhTNzZzMGpkYi9xQXl1WDk0ckI3OVhlNkx2NktXSU1CWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3REVzNjlOcmgwSkJLVTkybE9CZmNmMHNtVngwaGxIZ0FmZndUMkIxN0NSL2xaZkIzdkpyeEh1VFQxaE4xMUJwM1M0ek9TMTRHbzZMMm1kT3lNTnRoUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlVUhYUWhPQWdFc0NKUHR5UDZmWHVkZ2JPL2RnaTZ1eEFGOU85K05odzBVQVBIUGFhZndhVzllT2xMcnVyUGdhQWpXcFZlRlJQSXp4ZWRJQWU5dlpnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzU4Mzk5NjE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg3MTg2NjM5NzkxNDk6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzU4Mzk5NjE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE5OTIxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFnWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWdaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiem94c2pHazMvUVMvakhPclpERzFzMDNFcm1EMS9pN3lZTEk2QmY4eEF2RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzg2NDE5ODc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExOTkyMTYzODJcIn0iCn0="  // PUT your SESSION_ID 


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
