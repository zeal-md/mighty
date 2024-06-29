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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349116730300";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_05_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhQWGNYU05zdjdoWDQ2a1FQNnVnRFgzYmYwRHdaN0hmZjZJS3htcnhiVU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImw1bGhUV3JJUnVXb3ZNejAyTEp4YlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWZhNzRjZDctYzg3OS00ZjNkLWJkYTItOTVkNTVkMDIyODI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDMsXG4gICAgICAyMjYsXG4gICAgICA0MixcbiAgICAgIDE4MCxcbiAgICAgIDE5OSxcbiAgICAgIDIxNyxcbiAgICAgIDkwLFxuICAgICAgMTk3LFxuICAgICAgMTEwLFxuICAgICAgNDYsXG4gICAgICA2OCxcbiAgICAgIDcyLFxuICAgICAgNjQsXG4gICAgICAxNSxcbiAgICAgIDIwNixcbiAgICAgIDUyLFxuICAgICAgMTkyLFxuICAgICAgMjM2LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgNzksXG4gICAgICAzOCxcbiAgICAgIDk5LFxuICAgICAgMTA2LFxuICAgICAgMjI2LFxuICAgICAgMjMsXG4gICAgICAyMDAsXG4gICAgICAxODcsXG4gICAgICAxMTYsXG4gICAgICAyNDgsXG4gICAgICAxMjEsXG4gICAgICA5OCxcbiAgICAgIDc4LFxuICAgICAgOCxcbiAgICAgIDYxLFxuICAgICAgMTQ3LFxuICAgICAgMTg2LFxuICAgICAgNjgsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUg2QlIxRjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTY3MzAzMDA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJ1YmUgTWVkaWFcIixcbiAgICBcImxpZFwiOiBcIjEyMDY2MzE5NzA5ODEwMjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqTHQrOEZFTEtwZ0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWkZwRHpzdnFUMlVzK0FiaFg2VTdWV01ObkxraHFMMVNsWDlMb0d3YVIxdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLMmp0Z3VjY0M3T1pxdHJRZnE1VndPbnNEeFVQNmx4TU1JTXJvUmJwR1dlTkFYbEJIV092MzUxUVU4dWJKSHJWVFVLME1aelJNczdYRVozQ05wbWREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFNHhSNk9qYktsWHMvWlAxNHNjQnRxRGtPNTRRNEZMM2k5WVFROWtWVnBBZk5tU1VXREloM0gvdW5ZbDQxMHV0MkJOa09mY3lGTjFYQTRIWGpaeFdBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE2NzMwMzAwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjY5OTQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3pTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPelMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNM1NWOTlJYjVMWVhFcnhRZ2VjQVplUUkvOUFVZkI2UUJmWDhwcVpsM3c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzU4NzE5MjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2Njk5MTE2MTVcIn0iCn0=
"  // PUT your SESSION_ID 


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
