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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMjAsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpzcDhYYWNVUlMzVUdoS2RJMnU1eS9hZmp2N2lMSDJ1MHM2cWk4bGZBVDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MTcwMDUwODA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTU0QzI5RTA4MTI2NjQ3MjFBNTREOUIwNkQ3QUM3MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MDc3MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTk9YLVVpMklTVk9XT3NRdG1zN1VnZ1wiLFxuICBcInBob25lSWRcIjogXCIwNjVkYzJiYy0yYzJiLTRmZmQtOGEzYy03NDYyZGZkZjhmNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA5NCxcbiAgICAgIDEzMCxcbiAgICAgIDIxNSxcbiAgICAgIDE4NSxcbiAgICAgIDIxMixcbiAgICAgIDk0LFxuICAgICAgMjUyLFxuICAgICAgMjA2LFxuICAgICAgMjMxLFxuICAgICAgNTksXG4gICAgICAxOSxcbiAgICAgIDExLFxuICAgICAgMTYyLFxuICAgICAgMjQ5LFxuICAgICAgMTc0LFxuICAgICAgMTEyLFxuICAgICAgNyxcbiAgICAgIDE1LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTg5LFxuICAgICAgMTg5LFxuICAgICAgMTUsXG4gICAgICAxNjUsXG4gICAgICA4MCxcbiAgICAgIDExMCxcbiAgICAgIDkwLFxuICAgICAgMTU3LFxuICAgICAgMTA3LFxuICAgICAgMzgsXG4gICAgICAxNDYsXG4gICAgICAxMTcsXG4gICAgICAxOTUsXG4gICAgICAxMjcsXG4gICAgICAyMzksXG4gICAgICAyNDQsXG4gICAgICAxMDQsXG4gICAgICA0NCxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZFVDVZRFJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxNzAwNTA4MDU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDhUzEklhfQsOCQsOcXCIsXG4gICAgXCJsaWRcIjogXCIzMTUxMjY2MTY1MTU5NjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMjE1L1FIRUlYVnY3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklPeGQzSzhESmszQ0Z4UFNkZElQZy9nYjJQN3pZaHBLUjE3OHF0Nm9pZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3VDUXRBdSt6bHhFRVpFQjNWaldmZ1Z1allDcC84eFZ1WS8vSWhZWmdGeDdsUXFCcUwrbXpMd2s0Q1dNSTc4YnFJay9xZ3FOekxlL0lmSFJVeW45Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2FrMFlOTFFWYlVKZEdxYlV5OUJIam1CVTAxVUYyMGhxeWxtd2poR0UyZFhZU04xOFpEaDFIKzYzWVBWZjVUK25wQXMyOGd0dGJObjRyR2tmdy9HakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MTcwMDUwODA1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MDc3MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQeU1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB5TS5qc29uIjogIntcImtleURhdGFcIjpcIjdCRVBxTzNISkhPS3AvVy9qOVk3RVZBQS9aMDFPYjZnNlc3UjF5dGZKR0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyNDAxMjIxOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
