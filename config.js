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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_28_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1za1Q3bjYwNjRJVE93SitqTVZKMW5DQ1pDL3VOMVZzMnhpK1FrLzZkUXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJRc3ZWdEIxUU5tRHBDUlpJOWlLY1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjlkMzNkNTUtMmY0Yy00MTBmLTkzOTMtNGQwZDBhNjIyMDgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDIyMyxcbiAgICAgIDE0MyxcbiAgICAgIDExNSxcbiAgICAgIDI0NSxcbiAgICAgIDIyOSxcbiAgICAgIDExNSxcbiAgICAgIDE0MCxcbiAgICAgIDIxMSxcbiAgICAgIDgwLFxuICAgICAgNTEsXG4gICAgICAxNTcsXG4gICAgICAxNDEsXG4gICAgICA3NSxcbiAgICAgIDI0MyxcbiAgICAgIDI0NSxcbiAgICAgIDQ0LFxuICAgICAgMTE2LFxuICAgICAgNDksXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxODIsXG4gICAgICAxODcsXG4gICAgICAyMTAsXG4gICAgICAxOTIsXG4gICAgICAxMzksXG4gICAgICAxMTAsXG4gICAgICAxODEsXG4gICAgICAxNDksXG4gICAgICAxNTksXG4gICAgICAxMzMsXG4gICAgICAyMjAsXG4gICAgICA3OSxcbiAgICAgIDE4NSxcbiAgICAgIDMwLFxuICAgICAgMjcsXG4gICAgICA3MCxcbiAgICAgIDE0NixcbiAgICAgIDE4NyxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUEdRRDFGWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjAyODAyNzI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ8fuKAouKAon58XCIsXG4gICAgXCJsaWRcIjogXCIxMzMyNzMwNTMyOTg3OTM6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJ2cmE4R0VNWFIxN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvTXZZcmdMd012V3NFclU1RkVMeFJKK2w2ZGpGeDEyMlo2ZSt4MTZUalJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJFZTU1UjBzcjRDMG0xblNGUHpFZkkzdGRWWDNWL2RQV3laVHJxQWo3MUpJemJZUFA4c1J5a1k3YXcrK1dhWG5tMEtQcWp2dFN5a0s1LzdkQXJTd0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB5akRBREU2eXQyaDhRNytIMHJucmgvZGRZQk5TL1F5TUxwRUphMlhRZWw1MmJmTnBQeHhBZFY1UXh3WEYzOFhLVnM1UjZPRDJ0NmRiKzl5WGp3SkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIwMjgwMjcyOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTEwMDQ4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBrQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGtCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV1lwNC9ZVjRGM2tHMVQwb2tBS0ZxSmdKRTJNZW4ya2NwZ1RLYnBQdWJGMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA5OTIyMTg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
