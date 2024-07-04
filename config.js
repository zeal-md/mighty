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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_39_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtcHdReHFIZ1p6SVFQTlhqRS9YbXFYd1AvQXAvQUtCVXllR3ZzalRUQlJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2b2dBaDFLUVF3cW4tZXF5OHNfUlNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFkOTg1YjM2LThiMDQtNDA1Mi05MWUzLTM3YmVhYTZiYzY2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMTYsXG4gICAgICA4OCxcbiAgICAgIDE4NyxcbiAgICAgIDE4MCxcbiAgICAgIDE1MyxcbiAgICAgIDE1NyxcbiAgICAgIDIzMCxcbiAgICAgIDEzNCxcbiAgICAgIDE0MixcbiAgICAgIDIwLFxuICAgICAgOTYsXG4gICAgICAyMDMsXG4gICAgICAxODgsXG4gICAgICAxMTEsXG4gICAgICA4MyxcbiAgICAgIDE0LFxuICAgICAgMTksXG4gICAgICAxNDAsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgNixcbiAgICAgIDkwLFxuICAgICAgNTQsXG4gICAgICAyMTksXG4gICAgICAxMSxcbiAgICAgIDE1NixcbiAgICAgIDIwMCxcbiAgICAgIDIwMyxcbiAgICAgIDcwLFxuICAgICAgNzAsXG4gICAgICAxNDUsXG4gICAgICAzMSxcbiAgICAgIDEzNCxcbiAgICAgIDE2OSxcbiAgICAgIDI0MyxcbiAgICAgIDIyNSxcbiAgICAgIDIxMSxcbiAgICAgIDEzNCxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMUUNRVlBZRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3NjcyMDY4OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODEyNjkxNzg2NDY2NzE6NjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXl6dWVzSEVQck9tTFFHR0JZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4SXlGZlRiSzJNUWkzbWttT0FkaElUN2I3RU54MEx1RzJ5ZWJHNisyWFRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9iRGJXSVZrZXUwV0sxVndObHJmLzQ1a2xpYXNmMTNHYmFqTG5VSEwwYW42YWlpTFVVT1pUanJzR2V6TFNSVGE4ZFQvTS9sUlBDS1I4QmwybER2UkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJEalZLUFhWME16VXJ1RUVYYWg5eGg1R1hwY0UvNFgzSHYvVk9JYlR2elVpUHVYbDl2d1NGY0xYbUlLc0szdFgxeTUwSWVXZlMycGJEMU8rbkd0RGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzY3MjA2ODo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNjc5NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNT2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1PYi5qc29uIjogIntcImtleURhdGFcIjpcIkVCeEt1SEhwWkQwMTlkM2c0R2VkdHg3c2V0MHBsbW9jLzlFbXBiR1FSeXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwNDM4Mzg4NCxcImN1cnJlbnRJbmRleFwiOjE2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEyLDE0LDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
