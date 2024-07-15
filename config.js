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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_54_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMUtjakZ4VWNqR2FaRjc4UXNrNFlOb3JQVS9SVTNHRkIxbWNRVmVmbkYxOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNTg0NjQyMTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwNTRBMjkwRTBCQUNENkE1MTlGQ0RCRUI5NjU5RjM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTAxMjA1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA1ODQ2NDIxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0M4ODAxNjk0QzE1MDc5ODEzNThEQkM1ODNGNTc5NzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDEyMDYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlDUEhTdzA2UXdPSHE3R3BQT3pVNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDU1N2EwMzMtNGJhOC00OGU0LTg1ZmItZjZiZDU0YzJiOGFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTMwLFxuICAgICAgMjI5LFxuICAgICAgNjEsXG4gICAgICAxNTQsXG4gICAgICAxNTYsXG4gICAgICAyMDQsXG4gICAgICAyMDcsXG4gICAgICAyMzgsXG4gICAgICA2NyxcbiAgICAgIDE5OSxcbiAgICAgIDMwLFxuICAgICAgMTA4LFxuICAgICAgNDEsXG4gICAgICAxNDksXG4gICAgICAzOSxcbiAgICAgIDM2LFxuICAgICAgMTkxLFxuICAgICAgODksXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTg3LFxuICAgICAgMTMyLFxuICAgICAgMTg1LFxuICAgICAgMjIzLFxuICAgICAgMTEzLFxuICAgICAgMTIwLFxuICAgICAgMTMyLFxuICAgICAgMTk2LFxuICAgICAgMjM3LFxuICAgICAgMTk0LFxuICAgICAgMTA1LFxuICAgICAgMixcbiAgICAgIDksXG4gICAgICA1NSxcbiAgICAgIDg0LFxuICAgICAgNzcsXG4gICAgICAxNTMsXG4gICAgICAxMjEsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0hQN041Q0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA1ODQ2NDIxNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NDM0MzM0MTI4OTU3OTo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImx1Y2t5bmJwXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdveFpZSEVOYWUwclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWY3JXSDJmS3JiM0IzVXQ3QUkxa2EwelhkVnBldE9yWTJJQ1lqUWRpemljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJpTVptd0lRYWRsd1JqanBCZ0wyK1A5RVg0enprNCtuVUl5cXJMTmhLWGYzZlYyOHBmaFV1NkdLYlJ6K2dTT1NOWDl4WG5uNHh4SkV5VGFZY0N5OUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZjUGFTa0ZnM05OQmZUK0hZMzZxajBuMU5MeHhFOUk5YUI1RkVVOEFEWmdVTWZFMnNTb0dVRStOOS9NQVlNb2JWLytEZUtzOFhrejdzK3Yyd202bUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1ODQ2NDIxNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDEyMDU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG5IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIbkguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4eHFEQTZpaExTVWpudnhweEhrUG5WZDFJUDhvRU10R3VhYUZ4RjZOUzF3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjYzMjEyNjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTAxMjA1ODcwOVwifSIKfQ=="  // PUT your SESSION_ID 


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
