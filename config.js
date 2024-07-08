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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254789467801";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_47_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZUo0cmFYY2tpbEYxT1lOREd1QnNkR1ppOGQ5d3VYNW5uYkg1Rlh2UmYxWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRkhKU1IweHBScjJzVl9rdlBuSm11d1wiLFxuICBcInBob25lSWRcIjogXCIzYzQ5OWRiZC1mOGI3LTRhYjQtYTRiZS05MDU2ODNjMmU0N2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAxMzgsXG4gICAgICAyMjAsXG4gICAgICAxNjAsXG4gICAgICA5MSxcbiAgICAgIDIyNCxcbiAgICAgIDExMixcbiAgICAgIDEyMSxcbiAgICAgIDEyMixcbiAgICAgIDE5NixcbiAgICAgIDIzOCxcbiAgICAgIDE0NixcbiAgICAgIDQ5LFxuICAgICAgMTk0LFxuICAgICAgMTUxLFxuICAgICAgMTIyLFxuICAgICAgNTQsXG4gICAgICAxNTYsXG4gICAgICA0NyxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDIxNCxcbiAgICAgIDIzNyxcbiAgICAgIDIzMyxcbiAgICAgIDEyMixcbiAgICAgIDIzNSxcbiAgICAgIDcsXG4gICAgICA2NCxcbiAgICAgIDksXG4gICAgICAyNTMsXG4gICAgICA3MixcbiAgICAgIDExMCxcbiAgICAgIDM1LFxuICAgICAgMTEyLFxuICAgICAgMjM0LFxuICAgICAgMTE1LFxuICAgICAgOCxcbiAgICAgIDI0MCxcbiAgICAgIDE1MixcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWkxFWjFDUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzg5NDY3ODAxOjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVEogR0VPUkdFXCIsXG4gICAgXCJsaWRcIjogXCIzMTA0ODczODA2NjYyMTo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM1k5OHNHRU8vM3I3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldNZzIwSGpmWm5YaEdSNFdYek53UUovZUUvclpQWWFua2QzWlRRK2U4VlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSEczSEpqWVdwYmZCa1I1enU4OVdwMWJFV09RNkk0YTZJYk1JcHBDUDV0SGRQVUtIVmxQckp6ZVNJOElEQUlmNFpRMEJOYm1vY01nTWtFTTNhZFRXQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTFaQkQ5VlRYNHhYd0tJcWNiR25CQ1dSZWtaeXFyQUpLd1BNRFlVUHdaSzJaMnNMM25iZVJTOVpFZCtVbU0xZktJVDY2WWorRUYvVmViRm1nYVFyQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg5NDY3ODAxOjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NTAwMzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
