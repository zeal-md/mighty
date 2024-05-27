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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_34_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwZTdzV2hNRmgwcG5wckxyMVdFWWFoOHg2d2pUa0tGVFZKUVZKbngwaVNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzE3MDg5NjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4M0MzRURBRUMxNDIzMjFDRTQ0NTMyMTExQkYzM0NENlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY4Mjc2NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNzA4OTY5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTMyN0M0Q0U0NzBFNTNCNzc0QzMxMTBBRDM3RkFFRjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2ODI3Njc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInItNGt2ODFMUi1LeGI1U1ZybFRSNkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDE2OGY4OTEtMmE4MC00MGNjLWI2NDctYTFiOWFlYWU5ZmNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE3MCxcbiAgICAgIDEzMyxcbiAgICAgIDcsXG4gICAgICA1MyxcbiAgICAgIDExNSxcbiAgICAgIDU5LFxuICAgICAgMjQzLFxuICAgICAgMjQsXG4gICAgICAyMjQsXG4gICAgICA5NCxcbiAgICAgIDM4LFxuICAgICAgMTI1LFxuICAgICAgMjIzLFxuICAgICAgMCxcbiAgICAgIDIwMyxcbiAgICAgIDE4MixcbiAgICAgIDEyOCxcbiAgICAgIDIwNyxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDQxLFxuICAgICAgMjEyLFxuICAgICAgMjE1LFxuICAgICAgMjUwLFxuICAgICAgMjE3LFxuICAgICAgMjM2LFxuICAgICAgNjIsXG4gICAgICAxNzQsXG4gICAgICAxMzIsXG4gICAgICAxNTIsXG4gICAgICAyMDIsXG4gICAgICAxNjksXG4gICAgICAyMDMsXG4gICAgICA3MixcbiAgICAgIDE1LFxuICAgICAgMTc0LFxuICAgICAgMzMsXG4gICAgICAyMixcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEN0hMSzlHVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTcwODk2OTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk4NzI4NTg5Nzc5MTUyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHkxZ3QwQkVKYnMwcklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDUUxlVXJMamdjQ0VHOFBTU1hDQi9PTFoxTG8yUlJ1c1BZYWVOYU0waGpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitURHc4UEt6QnVyd1pzbXZhVTFGTm1KUlBYL0dhcUtncmxwRHlOaE90NWpRc2MrZHV0bzNHNytjTmM5N0c2Z05WOUMzaE4raDF0SGNFbnNzYnZkOERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlnRTBjYnZZVitVQnlzdE5zdVREU3FBb3hDeTlDYWlTeVc2SEJVWlhBTEFVNmJiTmFUSUlhM0UyZVJ2cFlZd0s1V0IxMHh0R25yWkFZV29sNGxMbkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE3MDg5NjkwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODI3NjczXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "gagananirun",
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
