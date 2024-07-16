const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255742695219";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_07_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRFdjFaeW5VY1Y1RmlsOXZycFEwVU16bnBVZXpJSHhVWHVXcmhiNjBNd3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVXLUxfR2VhUlVlQVFoRk5BTlZRNEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWI3MzI5ODctODFjOS00YWIxLThkYjYtYmI0MGYyYmExMjk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDE0MSxcbiAgICAgIDI0NSxcbiAgICAgIDk1LFxuICAgICAgNDAsXG4gICAgICAxNTksXG4gICAgICAxNzcsXG4gICAgICAxNyxcbiAgICAgIDg3LFxuICAgICAgNTQsXG4gICAgICAyMTUsXG4gICAgICA2MCxcbiAgICAgIDEwOSxcbiAgICAgIDExNixcbiAgICAgIDIwMCxcbiAgICAgIDEzLFxuICAgICAgMjEsXG4gICAgICA0MSxcbiAgICAgIDc2LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDIyNixcbiAgICAgIDQxLFxuICAgICAgNSxcbiAgICAgIDE0OSxcbiAgICAgIDEwLFxuICAgICAgODgsXG4gICAgICAxMjQsXG4gICAgICAyNDMsXG4gICAgICAyMzEsXG4gICAgICAyMzYsXG4gICAgICAxNTgsXG4gICAgICAxOTAsXG4gICAgICA4NixcbiAgICAgIDI0NixcbiAgICAgIDEyMyxcbiAgICAgIDEwNixcbiAgICAgIDIzMyxcbiAgICAgIDE1MSxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZUSlAzTkMxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDI2OTUyMTk6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTU4Mjc5MzQwMjQzOjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qSzB0TUZFTGVaMnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjNKTEJtT0xkcXNiY05Fa2daYVpOMjVOdWo0QUUzZ1RmQ0FwMitFSld6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSVlJnMERINm8rMGxHM2t2c28wS3BSaS94NGtIVXhYeE5DVkp3WW81MFdYa1BBNWFSMldxdm9OVFhNM0lMdUFJQlUvNVNyUmdkdHNGYk9yNWVWQVVEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4V05weWR4REpycFVTUjJTZU8vUVMvTDQ2K2lpeHBFR3ZQK3haZVdTTHd1RFlwcFp0OUZRL2Z3MFladklhbnk5TzVjQU1jenFJL2FHRFRzSzRjMzRoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDI2OTUyMTk6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE0MjQ2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQwMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDAxLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWhQWHNFdklCYjdVUnR2aFVDRFpZUGpxckdlT1BUeUI2Wmd6Vll5SXRpWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE3NTkzOTU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Raphaa",


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
