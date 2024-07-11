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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255782365586";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_42_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvbDdhTVhYUW85dkVlY1cva2F4U2p5Vm5NK2wzSW9Xcnp5TzNYdnVNYkVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGb3BGWUMwUlRRQ1Y2Rm9MWF9HOVpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjZWI1MjBjLTg2NjgtNGZhNi04Mjg3LWQyNGRhYTgwNTBhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA4NCxcbiAgICAgIDIxMSxcbiAgICAgIDE5MCxcbiAgICAgIDI0NixcbiAgICAgIDQ5LFxuICAgICAgMTQ0LFxuICAgICAgOTUsXG4gICAgICAyMDEsXG4gICAgICAxOTAsXG4gICAgICAxOTksXG4gICAgICA4NyxcbiAgICAgIDE3OSxcbiAgICAgIDIzNCxcbiAgICAgIDYyLFxuICAgICAgMTYyLFxuICAgICAgMTk3LFxuICAgICAgMTU1LFxuICAgICAgMTMyLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgNTgsXG4gICAgICAzMCxcbiAgICAgIDYsXG4gICAgICAxNzUsXG4gICAgICAyMzEsXG4gICAgICA1NSxcbiAgICAgIDYwLFxuICAgICAgMTU1LFxuICAgICAgMTI0LFxuICAgICAgNixcbiAgICAgIDEsXG4gICAgICAxMDYsXG4gICAgICAxOTMsXG4gICAgICA4LFxuICAgICAgMixcbiAgICAgIDE0NyxcbiAgICAgIDE0MixcbiAgICAgIDQxLFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkVCTDVFNUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc4MjM2NTU4NjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgwMDYyNjExNjMyMTg2OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DQzZZVURFTWUvd2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQThFWTcvKzRrajlQY1lEV3RyZFh5cG1ZMStpOVJCYXhxY3dJVHB2WmdEMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTYXBxcGhFR2pkQ0xBeHNiZUdDRXA2R2szN1dtZTdsbWVwTlFldjYzY0ptaTNxRFFNbTIxRUxHSVFob1VwbzFXWWdSRU41eHhwNmhVZ21MT21qcXNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZRzJqTWtVN0kyWkZLdkxrNkxZVlNPL1JrVnN5a2g2QWNQSEJkejRqVDhTWDZKNU1HMUpDYjAybkNqdVRKM1dQTTBoOSszK0lIVXVRSHpsRVV2QW5Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3ODIzNjU1ODY6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3Mzc3Mzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
