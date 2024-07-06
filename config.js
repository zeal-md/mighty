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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_35_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2tobXRVejhVeERMU09ENW9UblpvV3NJWXQyMTlTdldSL0FIVGsvemNkTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUNWZ1J2dVlTWjZHYVd3N0N3VTZMQVwiLFxuICBcInBob25lSWRcIjogXCI4OGVhMDhjOS0xMzc0LTQ3NDMtYTU4Ny1lZjQwZTdjZTk5NjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgNjcsXG4gICAgICAxMDcsXG4gICAgICAxMjYsXG4gICAgICAxNTUsXG4gICAgICA4NyxcbiAgICAgIDIyMCxcbiAgICAgIDc3LFxuICAgICAgMTkyLFxuICAgICAgMTgwLFxuICAgICAgMTk2LFxuICAgICAgMTYyLFxuICAgICAgMzIsXG4gICAgICAxMDQsXG4gICAgICAxMixcbiAgICAgIDUyLFxuICAgICAgMjEyLFxuICAgICAgMjUyLFxuICAgICAgMTA5LFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDg0LFxuICAgICAgOTAsXG4gICAgICAxNTQsXG4gICAgICA5MSxcbiAgICAgIDI2LFxuICAgICAgMTE1LFxuICAgICAgMzYsXG4gICAgICAxMjIsXG4gICAgICAxNjgsXG4gICAgICA1OCxcbiAgICAgIDIxMyxcbiAgICAgIDE0MixcbiAgICAgIDE3MyxcbiAgICAgIDQyLFxuICAgICAgMTE1LFxuICAgICAgMixcbiAgICAgIDIxMSxcbiAgICAgIDQyLFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNKQlZUTDE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM3MDA0OTc0ODY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTQwMzg3NDUyMDcwMTA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONmoxdXdDRU51RHBMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkUxZGM1THk4azJaWGVMakNCSzFqYnV4K3hDMStUM3E3L0tzY1ZTdHZOalE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHlUdElFU0lGNlBDa29qRlVEYURGMVdUUW4ybXZET0Y2RFF2UDV6dVlmT0RVb2hJT1hEeFlZQlVkRURnMVZlM05BNWRocFBzMjQ5eGFNK2N0bHhFQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYklIVk1BbXhNeHJwbUpZTWN1bXpjOTVYYXpHRGJEUk5qSWRPcFUweUxFSzZRTjFRZU56VEJiVTFZVm9icEZNcXFEbU1Ca1Q5cG9nb1FCV2lKUzNyZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNzAwNDk3NDg2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjU0OTQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHJHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEckcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDcG8wRmZkTmxvU0hXMG5ZRzdZQmlYMmF0RXNzWHN3VklNNVp2WGwyTklFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2NDc3NjkyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUwMTM3MDIxMVwifSIKfQ=="  // PUT your SESSION_ID 


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
