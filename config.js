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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+61 485 975 445";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_10_53_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkpXbTVxbnFKaG9zeXkxRm9xL1ZwQ3Y3K0dzaUZCRlZmUFVZalVRVitQQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MTQ4NTk3NTQ0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FBOTMyQjk5QzI5NTgwNkYzNDIxMDIzNjI1RDBFMzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MDUzNjExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjE0ODU5NzU0NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAwQTQzQUU5Qzc1OEJGMzE2NDcyODQ4NUMzOTE5ODM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTA1MzYxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDZmNJUFpHdVRqT204Vlp0TzRsOVNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNiYThmZjYxLTBkYWQtNDdkMS1iOWI4LTdiNDVmMzgyNjQ4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxNjUsXG4gICAgICAxNTEsXG4gICAgICAxOTYsXG4gICAgICAyOSxcbiAgICAgIDEwOSxcbiAgICAgIDE4MCxcbiAgICAgIDgxLFxuICAgICAgMjE5LFxuICAgICAgMTc4LFxuICAgICAgMjE4LFxuICAgICAgMTI0LFxuICAgICAgOTksXG4gICAgICAyNTAsXG4gICAgICA0OCxcbiAgICAgIDQ5LFxuICAgICAgMjM1LFxuICAgICAgMTg2LFxuICAgICAgNTYsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA3MCxcbiAgICAgIDIwMCxcbiAgICAgIDI0NCxcbiAgICAgIDIwNixcbiAgICAgIDExOCxcbiAgICAgIDE5NCxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDMxLFxuICAgICAgMjA5LFxuICAgICAgNTUsXG4gICAgICA2MixcbiAgICAgIDY0LFxuICAgICAgOCxcbiAgICAgIDEwNSxcbiAgICAgIDk1LFxuICAgICAgMjUxLFxuICAgICAgMTY5LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktOSktDRVE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2MTQ4NTk3NTQ0NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Y624Y6v4oSz4oSwIOGOvuKEsSDhj4bihIvihJvhjr7ihJXihLDQhVwiLFxuICAgIFwibGlkXCI6IFwiOTM3MzM4MTkyODU3MTE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWFM4YzhERUtUYTJyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdwMlMrdWEwM0ovdTh3WW9yWFJ4a2tlMlpBMUxubnhhVjBwbkI2bWx4MVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic0g5LzlPTzFTL1dwK0hPenlpUHNhckhwZjllZk45dEV6OVA0QnFmY0RiL1IxelBiN3YxcVNNczZyK3BjdmFIOTNwR2xVSXFlRGVmT0dyd3hmWmxoQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHl4VFIvQkxEUTU0dE5PUmRhaUdTcG1zVDFsMndmdW51TENLV2NxdVZwY3J6RmxKVStzNnF6R3AydVI4K0M1N1FVZjBKU2ZJbGZJTGtsVmF4NlhvaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjE0ODU5NzU0NDU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTA1MzYwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVJUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUlRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ1NqMGF1Vk9aRk53S2J4Nk1DOGdRQUFXRk10RjM0d3IwQ3h5dDhTVnJiaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzI4NDMyNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTA1MzYwOTgwOFwifSIKfQ==


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
