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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_04_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkJrYWlEUzN5SnBWaGZzYWVTcnJyS3UzRjArbXVON2Z5Rk5KVFZEWmFxYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNDc3NDU0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZDRUU3QzdGOThFNDEwMzhGQjA0MzhBMDZCNTA4OEQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI5MzQ5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0Nzc0NTQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTRBNTIzOTA2N0IzRUE2OUVEQzE4RkQ3MUJBM0Y3MkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjkzNDk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtsYnNFdVlrUkdxcU4zWTV5MDFkTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2UyMWE4NzctOTlmNS00NzUxLTk5YTctYTk1ODAzZTRkNWNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMTcyLFxuICAgICAgMjgsXG4gICAgICAxNzgsXG4gICAgICA2MyxcbiAgICAgIDM3LFxuICAgICAgMTkxLFxuICAgICAgMTk5LFxuICAgICAgMTU1LFxuICAgICAgNjEsXG4gICAgICA2MSxcbiAgICAgIDE4NixcbiAgICAgIDIsXG4gICAgICAyMjYsXG4gICAgICAxODQsXG4gICAgICAyMDgsXG4gICAgICAxMTEsXG4gICAgICAxNDIsXG4gICAgICA4LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDk0LFxuICAgICAgMjA3LFxuICAgICAgMTAxLFxuICAgICAgOSxcbiAgICAgIDk0LFxuICAgICAgMTExLFxuICAgICAgNDcsXG4gICAgICAyMzEsXG4gICAgICA1MCxcbiAgICAgIDIxOCxcbiAgICAgIDM5LFxuICAgICAgOTEsXG4gICAgICA0NSxcbiAgICAgIDE5OCxcbiAgICAgIDIsXG4gICAgICA3MSxcbiAgICAgIDUwLFxuICAgICAgNTIsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3V0ROMTYxVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQ3NzQ1NDE3OjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzIwNjk4MTE3MDM5MTc6OTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RJb01zRUVLNjE0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTOXEvckRXTFpJektNTTduemZIVHpFTXVvRW5HQ3FKZmh5dE05K1JlRWxJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNWZEZXd01IRjlMbGlIZVJzTGRKV091NFhOa3hsNTZTWXU4UWtIN2J1MEhjWS9SckwzS3JxS29RYWx4ak14REFQZG1JcDk0R0NFeksxMnJHUkVBZEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRGYUVIS0o0eXJhZFI5bFVzQk5HWnJwcUhIRXczNldXVXV0MG4xbEtkaHZ2ZGlkNmoyNDg0Y1V0Skp1QmVxaG9CVDc4czIzWnJxamdseXZxVXpMWkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0Nzc0NTQxNzo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjkzNDg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEExXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMQTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWbWdGaEcvRFBFeGdjaEdhRFVTNlNGOXZlWVBsemVDN3VYZ3lMdllSRkljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzE1NjE4MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI5MzQ4OTQxMlwifSIKfQ=="  // PUT your SESSION_ID 


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
