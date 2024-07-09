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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_56_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNHN6N2s3ME8zWUMwYy83Kzd3b3IyQ2Iva2Z4UUpoU0hpZVMxQktkZ3hDQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MTE0MDYyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0MyNjdCQUNFRTZGNzYyNTQxRUM1QzUzQjU2NDMwQjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTA4MjAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdIU0Z1UmtZUTZ1dmExWG5BbnAtUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTY5ZDM3MGYtMzYxOC00MjI2LTgwY2UtMWZmZjVjYWI1YmNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxODIsXG4gICAgICAyMSxcbiAgICAgIDE2MCxcbiAgICAgIDY4LFxuICAgICAgMjIzLFxuICAgICAgNjEsXG4gICAgICAxNzcsXG4gICAgICAyMTQsXG4gICAgICAxOTUsXG4gICAgICAyNDEsXG4gICAgICAxNzMsXG4gICAgICAxMjAsXG4gICAgICAzMixcbiAgICAgIDcyLFxuICAgICAgMjQ5LFxuICAgICAgNTIsXG4gICAgICAxNDQsXG4gICAgICAxNDgsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDEyOSxcbiAgICAgIDE0OCxcbiAgICAgIDE2OSxcbiAgICAgIDk3LFxuICAgICAgMTI2LFxuICAgICAgNTAsXG4gICAgICA0OSxcbiAgICAgIDI0MixcbiAgICAgIDg5LFxuICAgICAgMjksXG4gICAgICA3LFxuICAgICAgMTAwLFxuICAgICAgMzYsXG4gICAgICAyMjEsXG4gICAgICAxNDgsXG4gICAgICA1NSxcbiAgICAgIDE0MixcbiAgICAgIDkwLFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVRSREVaTFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQxMTQwNjIwOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZgvCdmYPwnZmK8J2ZjvCdmY9cIixcbiAgICBcImxpZFwiOiBcIjI0MjI0OTA5MDc0NDQzNzo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdXZyTFVERUtLK3M3UUdHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRXckVFWjR3WEdwRnVycCtzNi9ubm91d0tNeHZDTU0wOWNDN1EyR1NyMGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLzhVTko0S09CQURZTFhhU2FnOUJZcDNPNWNNMEl4VmFtWWRmU2daRStNbGtmWlZrOE90OWlmamhGWU5rdXc0eVRucCtBQ1owTmUvZjQwcnJoZzZJQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRDhTUTkzcnJvVm1kdUZwZUVSOWp3RGduTHpSeTBNYzdXdXltNC9PdVRlRWdKc1ZJNXBLVFFuS01CdU1oU1ArTkk2b2dZU0dCWTlaY3hqNlJId0JZQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDExNDA2MjA6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTA4MTk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1JnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxa2xGK3BVbWNNdnVrVW5YMjFyOWpLL0RGaWh1UTRzcWRiVnU4OGJHcW1vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxNzE4MjM0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
