const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_47_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0dkxseW5wVnc2aXpCK3hRdEhlQUVlTlR1RjZ6c002eGpPY3E2ckdaRno4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPNjBucGpnMFJPT3dlSGpFLXJVT2RRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkY2E2MTdhLTJiYTUtNDljYi04MzU4LTRhZDJlNGMwY2EyMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAyNSxcbiAgICAgIDQ1LFxuICAgICAgNzAsXG4gICAgICAxMDIsXG4gICAgICAxNTUsXG4gICAgICAxOCxcbiAgICAgIDExMyxcbiAgICAgIDE2NSxcbiAgICAgIDQzLFxuICAgICAgMTA3LFxuICAgICAgMjQwLFxuICAgICAgMjIwLFxuICAgICAgNTEsXG4gICAgICAxMzQsXG4gICAgICAzNyxcbiAgICAgIDY1LFxuICAgICAgMTg2LFxuICAgICAgMTkxLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjM2LFxuICAgICAgMTc5LFxuICAgICAgMTI2LFxuICAgICAgMzAsXG4gICAgICA0NCxcbiAgICAgIDEzOSxcbiAgICAgIDEzMyxcbiAgICAgIDExMixcbiAgICAgIDE1MCxcbiAgICAgIDE4NyxcbiAgICAgIDc3LFxuICAgICAgMjAzLFxuICAgICAgOCxcbiAgICAgIDIzOCxcbiAgICAgIDIxMSxcbiAgICAgIDIxNixcbiAgICAgIDgwLFxuICAgICAgMTUxLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCSjhCRTFUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMyMTM5MzE5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBY3RpdmUgVHZcIixcbiAgICBcImxpZFwiOiBcIjIwNTUxODg4MzEwMjk1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBqd1pNQkVPQ0gvYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJodHZ3Z0lZU0svZGVJWTg1Qlcwa1pIVE5xSC9mMkVsakVzSWNnTHN4Nm5RPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFYQzR3eHU3bFBvTzRnbmJVVEVBcGpwZFFyYW5VVFZCYXgveENUL1RRakpES2poaklacm5ET3BqMjMzOWtIWjlTWXUwanNaS2FHRGVmVnAvcXN0eERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktHU0hVNThCQlpvTThkdjNzb2lBRURIUGtPRUo2NUFzd3J6NnpwUFFscmlibnVxQlVGam5icy9xbnhWRnpRNjYwKzVJT0RGTGhnU1JDZ3hhVVdlRkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzIxMzkzMTk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzEzNjM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWtGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBa0YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2NzRIcy9tWWxpRFNTcERneXhyV3ZjUE84WklBcGNyZEdPQllzMWluVm00PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwOTM1OTAyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
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

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
