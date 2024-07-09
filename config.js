const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254742516027" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_42_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDkyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2WmZNUFNOaFdNd1lOOVpXSWIxZTBFU2tDaGFlQ01yY21OZGQ4NWRXZTBBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWZkFwaU9PNVJqNkdkajd6N2oyN1B3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3MjhkY2U3LTQzZTUtNDY0MC1iOWI4LWI1NDMzYmVhMjFjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDE3MSxcbiAgICAgIDExNCxcbiAgICAgIDE0NixcbiAgICAgIDEzMixcbiAgICAgIDIzMyxcbiAgICAgIDE2MCxcbiAgICAgIDEwMixcbiAgICAgIDE1MyxcbiAgICAgIDY0LFxuICAgICAgMzEsXG4gICAgICAxNTksXG4gICAgICAyNDEsXG4gICAgICAyMDUsXG4gICAgICAzLFxuICAgICAgMTc2LFxuICAgICAgMixcbiAgICAgIDE5NSxcbiAgICAgIDE1OSxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDQsXG4gICAgICAxMCxcbiAgICAgIDExNSxcbiAgICAgIDQ0LFxuICAgICAgMTkzLFxuICAgICAgODcsXG4gICAgICA0NSxcbiAgICAgIDExOCxcbiAgICAgIDEzMCxcbiAgICAgIDExMyxcbiAgICAgIDE5MSxcbiAgICAgIDk3LFxuICAgICAgNjMsXG4gICAgICAxNDYsXG4gICAgICA3OSxcbiAgICAgIDEzMCxcbiAgICAgIDEzOSxcbiAgICAgIDI1MSxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOWjNWVEczQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQyNTE2MDE3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQG5haXJvYmlfX3RlZW5zX19nYWxsZXJ5XCIsXG4gICAgXCJsaWRcIjogXCI5NTYwNjQ0MTgxMjA2MjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZk1wM3NRcU1TMHRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJLa1VCNXpZY0FmTldwNytTM1hqKzdhREpTZ1N5WHZRWksyRjlOTXY3UW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU3FRMU5oNXY2MGdrbUk0MEo4dXVhQVFIU052VG9IQm5HRm93UWFLdnpOMTRnb3A1U28ybVdYNzZpK0FKN1BURGk1UTIzS0FXeFRTbXRTZ3UvUERIQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUlFLRGpCWklWYU85c0ZlV0FxNUFLWk55NGRKdi9ydnJ0Z3ZML3pIaU5vbS9GY3dFM2tLYWlTVEpjamQzRXA0TXpJSDY1c0NyOGxjVG11Z2dXbG8zQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQyNTE2MDE3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUyNTM1NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "maXwrld" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Nairobi teens gallery",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Nairobi teens gallery",
  ownername:process.env.OWNER_NAME|| "dias MaXwrld",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
