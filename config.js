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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e548c60375272c01182ff.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "8132770719";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8132770719";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_36_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICA4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYm55bytwZHA2QWRRd0ovVVJQUzJoY0JnVkRoa1V1UzRnbkRSNW1ickoraz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWkpjTFc5S0JSSnFKbVdEZHNiMG1Rd1wiLFxuICBcInBob25lSWRcIjogXCI0MTk0ZjQzNC0zZDUxLTRkZjgtOGJmMS01NmMzMWFiYWQxZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxODgsXG4gICAgICAxODUsXG4gICAgICAxMTYsXG4gICAgICA2LFxuICAgICAgMjE5LFxuICAgICAgMTE4LFxuICAgICAgMzQsXG4gICAgICAyMTksXG4gICAgICAxNzIsXG4gICAgICA1OSxcbiAgICAgIDg1LFxuICAgICAgNyxcbiAgICAgIDExMixcbiAgICAgIDI4LFxuICAgICAgMjE3LFxuICAgICAgODAsXG4gICAgICA3MyxcbiAgICAgIDE3NyxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDE4MixcbiAgICAgIDI0LFxuICAgICAgMTE2LFxuICAgICAgNjcsXG4gICAgICA1MixcbiAgICAgIDIzMCxcbiAgICAgIDE1MixcbiAgICAgIDE4MyxcbiAgICAgIDE2MyxcbiAgICAgIDI5LFxuICAgICAgMjAxLFxuICAgICAgMjM0LFxuICAgICAgNjMsXG4gICAgICA1NSxcbiAgICAgIDE1NCxcbiAgICAgIDE5NyxcbiAgICAgIDE5NCxcbiAgICAgIDk0LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQzNUVDWTg1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMyNzcwNzE5OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDk1NTI0MzkzMzc0OTo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTzdyWmdGRVBLQ203UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjUwL20vT01COUVVeEVMWk1IUXRmWG4yc0tRN2RueGk3S2lyb1BNYWJMM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVGIxcHpzcTIxUjVoUGJtb3QxUFdueXVSQzQxdXQzSlQvU1dnQXpMdmJXWGY5SXhvWTNMVll2KzdqN09oYWt5MEdEdVhVYkFKTTdaNld6REtZV2w2QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0pyaFhjc2taY2dWLzN0YXJlcU1EZXExWWU3NXRBQXZqei9OZW5EcDJ3Ni9jQWJpRy9wWSt6Tzl4K0FEUk02aDZNR1o2a05EMGYwdm03Y3FYaU03RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMjc3MDcxOTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwNzM4MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OFFICIAL BOT",
  ownername:process.env.OWNER_NAME|| "OFFICIAL_KY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "OFFICIAL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b609d9045dc207b50c24c04316394ed7";
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
