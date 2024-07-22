
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22373633513";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_28_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Y0ErankyczgxcVVWQlZaK1NOVWN6c1hiQTRXTTkydlhuQ09wWXRxdmxNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDR2FnSFF6LVRJcWFJc181V1NxREdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM2OTYxNTAwLTEwMjMtNGI3OC04NGY3LTYyMGUyNDllZDY4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTkyLFxuICAgICAgMTksXG4gICAgICAyMDMsXG4gICAgICA3OCxcbiAgICAgIDI0MSxcbiAgICAgIDI5LFxuICAgICAgODgsXG4gICAgICA3LFxuICAgICAgNjIsXG4gICAgICAxODMsXG4gICAgICAxMDgsXG4gICAgICA2OCxcbiAgICAgIDI0NixcbiAgICAgIDExMSxcbiAgICAgIDE0MyxcbiAgICAgIDI0OSxcbiAgICAgIDY4LFxuICAgICAgODAsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgNzgsXG4gICAgICAxNDAsXG4gICAgICA0OCxcbiAgICAgIDE4NixcbiAgICAgIDIwNCxcbiAgICAgIDE1NCxcbiAgICAgIDcxLFxuICAgICAgMjMxLFxuICAgICAgNzQsXG4gICAgICAyNDYsXG4gICAgICA4MSxcbiAgICAgIDcsXG4gICAgICAxNjQsXG4gICAgICAxMzYsXG4gICAgICAzMSxcbiAgICAgIDEzNCxcbiAgICAgIDU2LFxuICAgICAgNTQsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUExRzhWUThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzczNjMzNTEzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQwMjg3MjE2NDc3Njk6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJUMG9JQkVKR1IrclFHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtU2lSdGI5UzNXNGlDRjJtdG1sRUxOTllKYVVOek5wMTkySEs0QWVRa0hvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRKYVNxQ3crSnZtZjhETHYwZ3ZIRC8weVlMRTJCOENWNjJueCsxbVh4TUowZ1NwS216U1NSOFNXeExIWjU4ZGdoZlkxQmg5VDJnU0orNi80N1owZkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInloRkhnZEdxOWJ5cjNDOW9mZDd0WHhWTm9xQjdUbWpKenVoK0ZZTDA2VUIrZ3NiUWxXOCtCY3RoNGJSV3dNVVg0b0NZKzBJVmJSYitMckY3THFCVEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzczNjMzNTEzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY2NTY4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9TOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1M4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMm5neFc1MWwrTDRzSkRZVXdCVU1qdkt2MzMxd3dqakR4cWtHc2wwYmpCST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzM5ODM5ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "√",
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
