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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_24_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGeU9NRThTWGNZR3pvd1oyWmk4bmZDMDAySUUyS0ZZbENRL3NQcHprMFkwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzOTc3NDIyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUU0RTcyQUQ1OUM1MDMxMDM1QzAxNEY1RkQwMjgwQjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjQzNDc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm42RlpmY2JCUmFxMzBJWHZ4dEJ0ZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWQ0ODBkOWYtZTk4ZS00YTA1LTk0NWEtZDY4ZmM2NGE2YzkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDIxLFxuICAgICAgMTAyLFxuICAgICAgMTY4LFxuICAgICAgMTM0LFxuICAgICAgMTA1LFxuICAgICAgMTExLFxuICAgICAgMTY0LFxuICAgICAgMjI1LFxuICAgICAgMTEwLFxuICAgICAgMjU1LFxuICAgICAgMTE0LFxuICAgICAgMTEzLFxuICAgICAgOTAsXG4gICAgICAzMSxcbiAgICAgIDcsXG4gICAgICAyMzYsXG4gICAgICAyMjEsXG4gICAgICAyMjAsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAyMTcsXG4gICAgICA4NixcbiAgICAgIDE2MixcbiAgICAgIDM1LFxuICAgICAgMTQzLFxuICAgICAgMTI4LFxuICAgICAgMjA2LFxuICAgICAgMjAxLFxuICAgICAgMTM4LFxuICAgICAgMjQsXG4gICAgICAyMjAsXG4gICAgICAyMixcbiAgICAgIDEwNSxcbiAgICAgIDE1NCxcbiAgICAgIDE4OSxcbiAgICAgIDQ2LFxuICAgICAgMTAzLFxuICAgICAgMjQ3LFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlNCUUZQQzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzOTc3NDIyNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODc3ODkzNDE2ODM3OTk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZUkwY0lDRUlxcW83UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxFSGgzd1d5Zk1XQ1NuVURnTkpaZlpKZ0RaVVhVVHV0Tkt1a3ltTWUyeTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY2tVSm9qOG0rK3g1RzBnMU9hOFREKzlXSXdYZStybFlBSUxQSEdGVi91bzdRbkxOWG5wajlGKzB6MXlIenExWnNtOXF1Vi9VNU5tZHdJNEZieXUrQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWFFOQUhIU2RONDFTeE1EYWtyaDAybUJJQ0NRQnRna0ZMYU1LcklMY2hMVEJ3Z2l1VDNmeEJQbGNneXg0TXR3SGpra3hXWGFqbzBOZFIyaHp5VXpDaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDM5Nzc0MjI0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI0MzQ3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJkN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmQ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUWhGZ3RoRjFQZlBRZm50YWpheUlmaGtHYVFjakJ2WmQ4YjhDN3NEeGdpVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzY2MTExMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI0MzQ3NTE5OVwifSIKfQ=="  // PUT your SESSION_ID 


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
