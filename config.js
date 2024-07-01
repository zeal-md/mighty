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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23409162208200";



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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_39_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnTnA5TzlGZW9oblpUNEppdzZZOVRMQW1OVkY4Y3NNR09sRUFZZks3MHBzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3MENTVlZpeFNQU1VBVWIydTZod1hnXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzMzFkYzZkLTRiNDgtNGZjMy1iYjU1LWRmY2ZjNGIzMDExN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAyNDgsXG4gICAgICAxNTYsXG4gICAgICA4LFxuICAgICAgMjUsXG4gICAgICAxODEsXG4gICAgICAxMjIsXG4gICAgICAyNDAsXG4gICAgICA5MSxcbiAgICAgIDExNCxcbiAgICAgIDEzOSxcbiAgICAgIDE3MixcbiAgICAgIDQ4LFxuICAgICAgODQsXG4gICAgICAxNSxcbiAgICAgIDE4OCxcbiAgICAgIDc1LFxuICAgICAgOTYsXG4gICAgICAxMDYsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDI0LFxuICAgICAgMjA1LFxuICAgICAgMTQzLFxuICAgICAgMjMsXG4gICAgICAyMjEsXG4gICAgICAyMzMsXG4gICAgICAxMjEsXG4gICAgICA1MCxcbiAgICAgIDk2LFxuICAgICAgMTkyLFxuICAgICAgMTUwLFxuICAgICAgMTQsXG4gICAgICA2NSxcbiAgICAgIDE1NSxcbiAgICAgIDE1MyxcbiAgICAgIDQ1LFxuICAgICAgMTc5LFxuICAgICAgNjAsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUzVKSzhNQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MjIwODIwMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4MTAzMzY2MDc0NDcxOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2K2pyNEhFSUxnakxRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEV4N3R0Ri9HK29JYW4rQnVtZ3NGN1hsenBYbXdIaEtURUsrVmZxY2syaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrTXRFRlRFMkZpUmFuZGJNTGdIcFJBbGRlT1FuOHB0VWlEb3ZDdEVvQlBKdGxwdHB5OWUyQ0lEdzMzRW9zZVNOVGk2WSt5Y2UrVTdreXJtWXVtaHlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXNEpIM2YyNnRNU2xpVXpzbHlDZVJMN2NjeHJOc21Wc21ZY21WUkQyNVJLaXNwV2tMUEhiODZMVG5FQmRzZzVEeXlBYzR3bVIzR2d4SThjSVFpVnhBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYyMjA4MjAwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg3MzU0MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
