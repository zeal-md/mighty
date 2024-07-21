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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/722c4fb7c652216083d50.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "13203096470";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252771584940";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/88a23bbb91d0b9fb81738.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_38_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ0NqTFpTSHdid1hmUGZjbHNodlJOTnRrUVY1ZTg0OThXakRHalhDWFkwST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib2VTV1BtOEtTdDI1ZHlqcmtjbjJzd1wiLFxuICBcInBob25lSWRcIjogXCI0ZjMwNGEyOC0zZmEyLTQxM2EtYjY1ZS1hOWMxNjE5YzY3MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMjA4LFxuICAgICAgNzUsXG4gICAgICAyMzAsXG4gICAgICAxMTAsXG4gICAgICAyNDIsXG4gICAgICAxNDksXG4gICAgICAyOCxcbiAgICAgIDI0OCxcbiAgICAgIDIxNyxcbiAgICAgIDU3LFxuICAgICAgNTEsXG4gICAgICAyMSxcbiAgICAgIDE3LFxuICAgICAgMjE2LFxuICAgICAgMSxcbiAgICAgIDYyLFxuICAgICAgNTAsXG4gICAgICAxODEsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDYyLFxuICAgICAgMTM5LFxuICAgICAgMjEwLFxuICAgICAgMTA4LFxuICAgICAgNzUsXG4gICAgICAyMDUsXG4gICAgICA4NixcbiAgICAgIDEyOSxcbiAgICAgIDUxLFxuICAgICAgMjE3LFxuICAgICAgNzUsXG4gICAgICA4NyxcbiAgICAgIDE5NSxcbiAgICAgIDMyLFxuICAgICAgNjgsXG4gICAgICAyMTYsXG4gICAgICAxMDEsXG4gICAgICA4NCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdQQzMxSDFCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI3NzE1ODQ5NDA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDM4OTkzMzA0OTg1NjM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcVE1Nk1CRU42OThyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJ1TzYyZmQrUEkwTVVJVFF3cXoxeU1OMXBWMVIwVjN0VVNKZC8wM3VnbDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRStEaXZXSWJSL3hoZEtQa3NERG1ZUCtYMVZnYWgrU1ZtTWZjUVBCMFBvb1NlMGtPWU1MS1lNakE0S2IvbkowaGpQMm5GVXVrL2puQzRiVTN5U0FiQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSCtzWGdxNGZXdUpGK0U5bDlRQ1d3aUJIQlV5VU5ycTY0eDFKTXorb0g2WG4rUCtPZ0E3QzNpaERsK1BzTGRXVDZrNExSeEJqZXY0QjVRMzZweWNwQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNzcxNTg0OTQwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTQwMzIyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Turkiyey",


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
