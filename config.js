const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "tere" ;  
global.video= "tere" ;
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
global.read_status = process.env.AUTO_READ_STATUS || "tere"
global.save_status = process.env.AUTO_SAVE_STATUS || "tere"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_18_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKV1dUR3BaamROVG84RzZGUk9DNGk1cUhiTkpGYlNreGpYQ1Nyd3g1NEhnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHQkZhTXB0M1FRU2JCeUhZUFg4MENBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4OTg0YjNmLWRhMTktNDYzOC05M2ZhLThlNTYzMThiYWZmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA4MCxcbiAgICAgIDUzLFxuICAgICAgODAsXG4gICAgICAxOTUsXG4gICAgICAzMCxcbiAgICAgIDIwLFxuICAgICAgMjUwLFxuICAgICAgNDgsXG4gICAgICAyMTYsXG4gICAgICAyMTIsXG4gICAgICAyNCxcbiAgICAgIDI1NSxcbiAgICAgIDEyMyxcbiAgICAgIDYxLFxuICAgICAgNDIsXG4gICAgICAxLFxuICAgICAgMjgsXG4gICAgICAxMzQsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDE2MyxcbiAgICAgIDEwNixcbiAgICAgIDIxNSxcbiAgICAgIDE1MixcbiAgICAgIDIzMyxcbiAgICAgIDEzMixcbiAgICAgIDUyLFxuICAgICAgMTIzLFxuICAgICAgMTc5LFxuICAgICAgMTU4LFxuICAgICAgMjEzLFxuICAgICAgODcsXG4gICAgICAxMDksXG4gICAgICA5OCxcbiAgICAgIDE5NixcbiAgICAgIDE2MSxcbiAgICAgIDgzLFxuICAgICAgNzEsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0JBQlBDWlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1NTQxODY4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2q/ZviDYstmG2Yog2YfYp9im2YrYqtmKINmF2LPYr9izXCIsXG4gICAgXCJsaWRcIjogXCIxNzI5MDMwNTIwODMyMjk6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkRwK1lBQ0VLZloyTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrMGFuVXoxTDk3T3ZRTTMwRWVpRitsUEhabTByWjF3N1YwSWpYU0cvQkdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInl4c2tTWXNIOXVFcGJBYjFqY0dNVzNDeDJ5Ym5sTEpPb1pxcU9ZUXA3VmYvS0hQRkhTRm0rdjBteDd6TElmdGFsVHFTWUdwNFFwcmJUQ3ozaE1TdkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNOU241V2p5cXJLc0Fwa0NUSlhHeUFjQlphTVpXSXRoZ0xtOHJjdFRqYjJDZksreGd2SGF4aWRBMFZ1TVYrZzQvOWhBQ0pqdmRrNEJXWkxDcUM0UEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1NTQxODY4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTE3ODY2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
