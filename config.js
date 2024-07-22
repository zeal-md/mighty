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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_22_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlB0OUZiampLdDg4b29BRHhHaUVIaFdreHhIY1JjU3JQN2I2akhjZ1BkTmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlBUzYydHp4Uy1TZlRlZVF2b2dzZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY1NDhiNjctYzE5My00MzBjLWJiNDMtNjAxMTM5NzYyODJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDU0LFxuICAgICAgMTUsXG4gICAgICAxMzIsXG4gICAgICAxNjUsXG4gICAgICAzNCxcbiAgICAgIDIyNyxcbiAgICAgIDQxLFxuICAgICAgMjA5LFxuICAgICAgMzEsXG4gICAgICAyMTUsXG4gICAgICAxOTcsXG4gICAgICAxMzQsXG4gICAgICA5MyxcbiAgICAgIDI1MixcbiAgICAgIDE2MCxcbiAgICAgIDEzNyxcbiAgICAgIDIwMixcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAyNDksXG4gICAgICAxOTIsXG4gICAgICA5MCxcbiAgICAgIDE4NSxcbiAgICAgIDE5NSxcbiAgICAgIDYyLFxuICAgICAgMTcyLFxuICAgICAgMjUwLFxuICAgICAgOTksXG4gICAgICA3NyxcbiAgICAgIDIyNSxcbiAgICAgIDYwLFxuICAgICAgMTI1LFxuICAgICAgMTkwLFxuICAgICAgMTE2LFxuICAgICAgNTksXG4gICAgICAyMixcbiAgICAgIDEyOSxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCRUgyQUZES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDAxODE0NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMyMDMxOTkyMjk5NTgyOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055ZndxVUlFUDI1K2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnRKSyttYXNCdmh4VnMvOE94YlIxcFJISU9tYjY3T2M3NXR3WDdyZUZUST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6WnBFODRWb2xKU2VyUjBNZnlkVjQxQjRqQkhKOEVteFBjT1lKbG56S0R0OXE0VEZVUUhaSjBkYU1ZQVRWYWxraSs2Tlppb2V1QVlQY1FmUTJJQVJpdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGM2NISGladWREc1BDNFJ1ZXVwb0FUWUFERjRwT2lZMkhrRmNhZ0RNRFFVWWtOV0p0K2o2T0U3cVpNcjZsQnZhY3hIcHZqWUF0bnZPUHorOG9NdXNDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0MDE4MTQ3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY1NDUyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJhdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmF1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRks2R3NKVU1aTkxoZkJMTkNhOU5tWHplMDlYUGVrdFlXTlNjalJ5NTUzMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjI2MTYzNjc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2NTQ1MzQ4NTFcIn0iCn0="  // PUT your SESSION_ID 


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
