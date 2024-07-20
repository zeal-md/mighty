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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_01_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWR0cC9YaGZhamxjUkxjd1NhQ285WnlyRjlIODJoOU1yZC92VzhaeFAxaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODk2MjQ0ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOTUzNjdFQzRBNzYxRUMxQzc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ4MDQ3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXUEtYQTRmNlFXZTlQX2h2ei1Fa3NnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkMjJmOTczLTE5MGMtNDE3ZS04NzE5LTAxYmJmNzNiZTViZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAyMzMsXG4gICAgICA0NixcbiAgICAgIDI0MSxcbiAgICAgIDY3LFxuICAgICAgMTgsXG4gICAgICAxMTgsXG4gICAgICA3NyxcbiAgICAgIDk2LFxuICAgICAgNDEsXG4gICAgICAzNyxcbiAgICAgIDE5MSxcbiAgICAgIDExMCxcbiAgICAgIDE1NCxcbiAgICAgIDQ0LFxuICAgICAgMTM0LFxuICAgICAgMTg2LFxuICAgICAgMjA0LFxuICAgICAgMjMxLFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAwLFxuICAgICAgMTY5LFxuICAgICAgMjIwLFxuICAgICAgMTc5LFxuICAgICAgODUsXG4gICAgICAxMjQsXG4gICAgICA4MixcbiAgICAgIDY0LFxuICAgICAgMTAwLFxuICAgICAgMjUzLFxuICAgICAgMTAzLFxuICAgICAgNTIsXG4gICAgICAzNCxcbiAgICAgIDIxMixcbiAgICAgIDIxNSxcbiAgICAgIDE2OCxcbiAgICAgIDM1LFxuICAgICAgMjM1LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSM0NTSFRWQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg5NjI0NDg5OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDYwMjA3Njc5MjQ0NDQ6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT2ZmaWNpYWwgSnVpY2VyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUM1dTQ4S0VJenE3clFHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUTWdGcjk5Yk9GaFdmTkdyNzdaeGdNd2Q3RGhGOU55VzNadE56Uk5HRmpFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZFS081bkxXZ0RTcjczczlaSmRxVldhR28wTnF5UUJtTTVtOGVWSU1XTFl5YUc2UTVkMFBJanEydVJWOFNLL0s4Y21BYnR6amM5c3J4TEVuVGJaU0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0wRnRxb0JHQnJpUnpFMGdwbEhVa0NaM00xWWphR0FjK1FYYWxxOStoS3U3d0Mxb3BiWkdHMk02cFMyN0UweUp6YkN1dlV1YUpnbGE0TkExZG9Dd0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4OTYyNDQ4OToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDgwNDY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2kzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhYmg4K1JDd0dSaXdTVTBETVM3UmdFeTBxdlhjMzBpOWlnTXhtWjhJSytzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3MTY3ODU3OTIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDMsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDI5MDc2NDM5XCJ9Igp9"  // PUT your SESSION_ID 


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
