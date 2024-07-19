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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_27_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICA0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgODcsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBSMU9XVTRieGZYZ2RRNUpacWF3UUtaNFNDUER4YXIxdlA2RElWVUc1dmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQyMzQwNzk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RDM2QzQ3MzU5Qzg4NzlGNjM2QkI0MTVCNEYwRThEQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzOTIwNzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWF9WR2loTTJSVktFWG5odnlkcTVZd1wiLFxuICBcInBob25lSWRcIjogXCIyNDY2NWYxNS1hNjBkLTRlZTMtYTkyMy1lNjFkM2FhMWNjYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTI5LFxuICAgICAgMTUyLFxuICAgICAgOCxcbiAgICAgIDE0OCxcbiAgICAgIDE4MSxcbiAgICAgIDE4MyxcbiAgICAgIDE5NixcbiAgICAgIDI5LFxuICAgICAgOTUsXG4gICAgICA5MSxcbiAgICAgIDU2LFxuICAgICAgMTExLFxuICAgICAgMjM3LFxuICAgICAgMTIwLFxuICAgICAgMjEsXG4gICAgICA5NSxcbiAgICAgIDE2MyxcbiAgICAgIDE0MCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAyMzksXG4gICAgICAxMjYsXG4gICAgICAxMjYsXG4gICAgICAxMTcsXG4gICAgICA1OCxcbiAgICAgIDcsXG4gICAgICAyMTIsXG4gICAgICA1NSxcbiAgICAgIDM2LFxuICAgICAgMTI2LFxuICAgICAgMjUwLFxuICAgICAgMTE0LFxuICAgICAgMTk4LFxuICAgICAgMTA4LFxuICAgICAgMzksXG4gICAgICA1MyxcbiAgICAgIDExNixcbiAgICAgIDE0NixcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBTkY0NDY5TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQyMzQwNzk3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjA4MjY0ODk3NjE5NzY6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE8xajdVRkVMaTM2YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNZ2YwKzZBaUhFU2pLblBEeXVWSXBIaG9xZkpsbmFianhaTVpsVGdHbHdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJGTGoxejhwTFNrZGs3RDhpdG83ZWNjTlhVbllCeWxXVXNNeWhXVHZ4YjRoVWN5RnNMVExFZ1d3YTdXTSttOUZhM01vRmtMWUs0M0JjQkNaeGk5Z0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImF6WHZGVXFVejkvVUpmcFkzT3ZsM1hYMllQUXh2cTlsOE1pemZGQU1saXRHdlRiU2JqOWVMamkrTDYvWGN1UVRSNS93bDZxS0ZyZjNGQXBtLzQ2a0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MjM0MDc5NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzkyMDYyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
