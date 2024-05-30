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
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_53_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIng0RVhjNndsV0tGNzRvZTVFWVNUYU1pMkcyS25YZnBYblhZT0g0QjdraFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9ya1RpYlhCUlRpQ2pWNV83OEFnWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWUwOTBhYWUtOGU4NS00MDZmLWFmYTAtMzViMzdiZjY2MGMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDI1MSxcbiAgICAgIDEwOCxcbiAgICAgIDI0OSxcbiAgICAgIDg4LFxuICAgICAgNDUsXG4gICAgICA4MyxcbiAgICAgIDEzNixcbiAgICAgIDY5LFxuICAgICAgMTksXG4gICAgICAxMzMsXG4gICAgICA4LFxuICAgICAgMjA5LFxuICAgICAgMTQyLFxuICAgICAgMTU5LFxuICAgICAgNjQsXG4gICAgICAxLFxuICAgICAgMjI2LFxuICAgICAgOSxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDEyMixcbiAgICAgIDEyNixcbiAgICAgIDI1NCxcbiAgICAgIDE2NyxcbiAgICAgIDE5MyxcbiAgICAgIDIxNCxcbiAgICAgIDE0MyxcbiAgICAgIDE1MixcbiAgICAgIDgwLFxuICAgICAgNyxcbiAgICAgIDcwLFxuICAgICAgMTgwLFxuICAgICAgMTUzLFxuICAgICAgMTg2LFxuICAgICAgMjQ0LFxuICAgICAgMTM1LFxuICAgICAgMjE5LFxuICAgICAgMTIxLFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlpWMVhNOTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5MjA4NDUwNDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTY1MDU3Njk0MTQ4NjE6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQQVNTV09SRCBIQUNLRURcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTDQ1YlFHRUl2ZTRySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRYNk81aUFSdm82WmJ4alBwVEd4K2wxbndPWmRHcWNFdUZVSG42SGhER3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVlIZDMvKzFKbU4xMGhSZEcwTENSbHJXd2RBWDRQNkh4NDI1UXJZN0cveXZRdFVoaE05Z1dWZUNRbFhYRjFseFJxLzhoZDZMaUNwUWJTamlCMjVKQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDUxNCs5d3I3SXBhd1NyMGFiNmZUWFZEbklCV3VaNkNBbWptOHkxbFN3SEc3eEdiYlc0QlJTYkp4RXJHSFNCOWtXNWNZdFlxVXZMSTVORlRpZ2pWQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTkyMDg0NTA0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzA4ODAxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI4TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjhMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUVONE9BbmEzMWxqUFZldDFwRjNGTWtGSGNVQjVKczZwam9DS2dPdnhybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzIxMzM0Nzg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE2Nzg0NDA2NTU5XCJ9Igp9"  // PUT your SESSION_ID 


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
