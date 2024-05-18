const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nuttynut074@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ GPT 4.0" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "16399990192";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "16399990192,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_50_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxRzBCbnkyOFk5S0lPcjRuNUp6L3RxeEUrQ1hadldUUHYxd3RuMS96aHhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE2Mzk5OTkwMTkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTY3QTJEMTlCQTkxQzZBQjFDOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYwNjkwNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNjM5OTk5MDE5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FCQjEyN0ExQzA0RUM0NkY2MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MDY5MDU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBsc0E1RnRWUlVpX2tjenhmTndNN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWM5MDViNDMtMmVmOS00ZTAxLWFkMjUtNGU2MDY1MGVmNjY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDIyMyxcbiAgICAgIDU3LFxuICAgICAgODYsXG4gICAgICAxODcsXG4gICAgICAxOTUsXG4gICAgICA3LFxuICAgICAgMTU2LFxuICAgICAgMTMwLFxuICAgICAgMjQyLFxuICAgICAgMTU5LFxuICAgICAgNjksXG4gICAgICA1MixcbiAgICAgIDcxLFxuICAgICAgMjYsXG4gICAgICAyMCxcbiAgICAgIDEyMCxcbiAgICAgIDE3MixcbiAgICAgIDEzNixcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDI0NixcbiAgICAgIDg1LFxuICAgICAgMTY4LFxuICAgICAgNjIsXG4gICAgICAyNTQsXG4gICAgICAxNzUsXG4gICAgICAxNDYsXG4gICAgICAxOTQsXG4gICAgICAxNTgsXG4gICAgICAxOTgsXG4gICAgICA3LFxuICAgICAgNjIsXG4gICAgICAyMzksXG4gICAgICAyMDUsXG4gICAgICAxNjksXG4gICAgICAxNSxcbiAgICAgIDIwNyxcbiAgICAgIDYzLFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3k2b2QwSUVMVEZwTElHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjcDQxUCswRHpXM1UrUU1WazVsRzJSNms5T095SUk5TjQwajFrMDc3dlFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBWdmNwcmIxUFhoVWtCMk85YXljMC9heVFMY1ZOQmFjUllnbGJJZE1uS1pMSGxrYVZGTjgwalVNYmtCUUFTZ0QxbG1ackRlMDh6ZWwxdmVKTlpPS0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRaeE1ZbDducXEvQWFYNnBJd3VGcDkzNDM2eEliRWJVdno1eERaZENKaDNuM1VjREU3WWZBc254QzByazZMVHM0ajc2RnI2YlZ2b0s4TWlUVXgrSmp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTYzOTk5OTAxOTI6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM0NTgzNDQ1ODA3MTU0OjIyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCThp0g8JOGnyDwk4aeIPCThp0g8JOGn1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTYzOTk5OTAxOTI6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjA2OTA0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1ndVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWd1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFdRUHVQUGw0Q1hCTTJWc0FnOHp3SUtHSXdFdXlhTFhvYzdIR3RuU2sxcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzQzMDY2OTI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQzMTE4NzEwNjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZ3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvSSsxVVpBbmIxLzVaUDRPVjd5SEpTd28yQ0MzWVd6L0JqT1dicUhSWUhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzNDMwNjY5MjQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDMsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwNjg5NTgwNzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GPT 4.0",
  ownername:process.env.OWNER_NAME|| "Joel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "QYsYRLF7uTtXDAyD7fZksfWm",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "523207867133db1f9a0f4db6a4d6a945";
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
