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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_13_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9xUFdpWWZrZm41SE84L2d3cnFML0Z6ZVZNUkRlbTBGSjZKOVdxK0F6THM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM5Nzc0MjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NzE0Nzg3MTNCNzI5NkRFMEVDN0U1NkJFOUUxMEUwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NDE2MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidVRmWDZ2TWlSSnVyaXhZTGpmRXZzd1wiLFxuICBcInBob25lSWRcIjogXCIyZGU3OGNhMi1lNjkxLTQwZjYtODIzZC1iNjBhN2U2M2IzNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyMzYsXG4gICAgICAxNjQsXG4gICAgICAyMDksXG4gICAgICA2OCxcbiAgICAgIDE0MSxcbiAgICAgIDIxMixcbiAgICAgIDQwLFxuICAgICAgMjA2LFxuICAgICAgNzgsXG4gICAgICAxLFxuICAgICAgMzYsXG4gICAgICA4NSxcbiAgICAgIDIsXG4gICAgICAxOTQsXG4gICAgICAyNDMsXG4gICAgICAyMjAsXG4gICAgICAzLFxuICAgICAgMjQ0LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxNTcsXG4gICAgICAxNzAsXG4gICAgICAxNTUsXG4gICAgICAxMjgsXG4gICAgICAxMzUsXG4gICAgICAyMzUsXG4gICAgICAzOSxcbiAgICAgIDIwOSxcbiAgICAgIDEzMSxcbiAgICAgIDIzOCxcbiAgICAgIDIyMixcbiAgICAgIDIyOSxcbiAgICAgIDUxLFxuICAgICAgOTEsXG4gICAgICA3MixcbiAgICAgIDIzMSxcbiAgICAgIDExMixcbiAgICAgIDIxOCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFMUhZRjRBN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM5Nzc0MjI0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4Nzc4OTM0MTY4Mzc5OTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtSTBjSUNFTFhEdGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEVIaDN3V3lmTVdDU25VRGdOSlpmWkpnRFpVWFVUdXROS3VreW1NZTJ5ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4N3JhdEFZTFNIeHlNQ3VRbFZzLzVJdTdlTEg3Tm5ha0VaMVVyVjNidFRua2FTV3RpckJFSlBjd1FnUkRueWhKNlJIVGtUMHdsdW5Gdnh0dkxMc0tBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjK0JXN1czZkE5bFhQalRJL2hLVCtGK3dOajM0S0pYS3pyR3FydWxPelp0RXhBd21KNFZJaFV0d1pZTHZJblpNZ1g4U3drb042dnRVdmpEb2dTQTRoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMzk3NzQyMjQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTQxNjI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmQvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCZC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
