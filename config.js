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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_57_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFURU81OVNaaDAyd29RM1pacmdFRVVWNS9LeWlqNHVOVmhlLzA0SHIwZTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdYOHl2QWdyU0NHV29HSlIzaHdrSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzc5MjRiNjUtMTZjYy00MmI0LWIxZDUtNjcxZWNkYWMxODZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgOTIsXG4gICAgICAxOTYsXG4gICAgICAxMjIsXG4gICAgICA2MyxcbiAgICAgIDIzNyxcbiAgICAgIDQsXG4gICAgICAxMzIsXG4gICAgICAxODgsXG4gICAgICAyMTgsXG4gICAgICAxMixcbiAgICAgIDE4NCxcbiAgICAgIDIzNCxcbiAgICAgIDEwLFxuICAgICAgNjUsXG4gICAgICAyNDcsXG4gICAgICAyMjUsXG4gICAgICAxMzcsXG4gICAgICAxNTcsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMjM2LFxuICAgICAgMTc3LFxuICAgICAgMjAyLFxuICAgICAgMTUzLFxuICAgICAgMTM1LFxuICAgICAgMjI1LFxuICAgICAgMTg1LFxuICAgICAgMTA1LFxuICAgICAgOTIsXG4gICAgICAyMDcsXG4gICAgICAxMDksXG4gICAgICAxNDUsXG4gICAgICAyMDgsXG4gICAgICA1MCxcbiAgICAgIDQ0LFxuICAgICAgNjgsXG4gICAgICA0MCxcbiAgICAgIDc5LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkpQRkwyRUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc2Mjc5Mzc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NoX0dyYXBoaWNzZGVzaWduLkZyYW1lcyBMdGRcIixcbiAgICBcImxpZFwiOiBcIjE3OTg3MzIzMDM3NzE3OToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZk1wczhGRU9EV3lyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9WaWNlNCt6YSt4WHdSSnpWc0crWnRLYVhVdnJvcjhtcDhVcG1ySDRxams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT0NGdVl0ZDZMcEFnVS9OZFR5NUcydDVQNGNXZU8rZ1l2ZXdJb1lCcndoL2o4S083TWYwVFhWV2tSdEw0eHN1RDAxRC8zTW9uN1E4NFhUWWtMeDZsQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0FuKzE0SjFrQWJYYWN2Y1F1MjdnaGJvUWlCaUpOdkhrTGNyTmM3TTh2cllXY1dsUVBiRzc0TWFYcGdxR3FqSnRhM0Rnc3lvOHdUVnJCNnZFTVhVQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NzYyNzkzNzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc5MTAxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
