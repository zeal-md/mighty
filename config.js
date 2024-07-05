const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Africa/Tanzania."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255742695219";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRFU0Q3hJeVRSM3NYOWdCVVJEUXdrLzlZS0VESk51Ny9mNEIvL1psQ2FOWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjNDb2hpVmFRSnUwNDZ2TndrMEZEQVwiLFxuICBcInBob25lSWRcIjogXCI0ODhjMTllNi1mMGY4LTRmNDAtYjNlNy1mNmYzMTc3ZmE0YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTc0LFxuICAgICAgMSxcbiAgICAgIDE2MSxcbiAgICAgIDE3NixcbiAgICAgIDI0MSxcbiAgICAgIDExOSxcbiAgICAgIDczLFxuICAgICAgNDgsXG4gICAgICA4MCxcbiAgICAgIDIyMyxcbiAgICAgIDMxLFxuICAgICAgMjAxLFxuICAgICAgODIsXG4gICAgICA5MixcbiAgICAgIDIxOCxcbiAgICAgIDEzNyxcbiAgICAgIDQxLFxuICAgICAgMTA5LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDEyMixcbiAgICAgIDkxLFxuICAgICAgMjE5LFxuICAgICAgMjMxLFxuICAgICAgMTYwLFxuICAgICAgMTMzLFxuICAgICAgMTQ4LFxuICAgICAgMTQ5LFxuICAgICAgODYsXG4gICAgICA3MSxcbiAgICAgIDYwLFxuICAgICAgOTUsXG4gICAgICAyMDEsXG4gICAgICAyNTQsXG4gICAgICA3OSxcbiAgICAgIDE1OCxcbiAgICAgIDEwMCxcbiAgICAgIDQxLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ4Sjg4WDhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDI2OTUyMTk6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTU4Mjc5MzQwMjQzOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppS3hQZ0hFUCtlb0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVJnb0tHemE1Um9qYUgyTHhZZGFtQkZlaTZ2ZGpULzFMdkRIamdwcGUyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCdkVmNDd4bVl5a2lQSmxMTVczZVMyK3NmSlVjQXM5dnlpaE5CK1ZuMWdmZU9HV3dXQUN4WjJYdEgwOUxpcCtqNTJjMW5Cekl3c09QcHlzVWdoazNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5em4vWGVBaCs0eWlkMmRnQU9PYmZtMFMrb3A0cEZkblNwcENCTm8ydWYrK0dpaUVIdlhnSERpdWxzQTZsaHAzS1BONWRwQnhUS3JrYVhrV0tidW5DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDI2OTUyMTk6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTkyOTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRm43XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGbjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVdUtMQjVGRGNBa1JLcURTUFlIV1d3UGNrbWVLdnI4Ukcwb25UWXJXREtRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzE4MjE4NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxOTI4NzcyMjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Raphaa",
  ownername:process.env.OWNER_NAME|| "Raphaa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  // aitts_Voice_Id : process.env.AITTS_ID || "37",
  // ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
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
