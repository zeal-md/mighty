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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923436062975";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_57_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitWbUNObytqMU9YVWVLSVNJTHZtNWV2amdFY21WVHQ0ejg4cTFCSnBaanM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9GV2VRZzZrU29pUDRLZklaYUxOeGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQyMmY1YzEtOTJlYy00YjQzLTk0MjItNWU5MWIyMzNhYzUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMCxcbiAgICAgIDExNixcbiAgICAgIDIxMixcbiAgICAgIDU5LFxuICAgICAgNDIsXG4gICAgICAxNjYsXG4gICAgICAxMTIsXG4gICAgICAyMzUsXG4gICAgICA1MyxcbiAgICAgIDg5LFxuICAgICAgMjE5LFxuICAgICAgMjAyLFxuICAgICAgMjA3LFxuICAgICAgMjExLFxuICAgICAgMTQ5LFxuICAgICAgNjQsXG4gICAgICAxODAsXG4gICAgICAyNDUsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyMjUsXG4gICAgICAxOTQsXG4gICAgICA3LFxuICAgICAgMjMwLFxuICAgICAgNSxcbiAgICAgIDI1MSxcbiAgICAgIDQ2LFxuICAgICAgMTk2LFxuICAgICAgNDgsXG4gICAgICAxOTMsXG4gICAgICA4NyxcbiAgICAgIDEzMCxcbiAgICAgIDIsXG4gICAgICA1MCxcbiAgICAgIDIyMSxcbiAgICAgIDc0LFxuICAgICAgNTAsXG4gICAgICAxMTEsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZVkFZRjZCMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6NjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmV5eGFzRUVNQ2k1TFFHR0EwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInluVEtXeHJLZGtZOU0yTmxkVDl1MlZ2V2dmdjJyVEVPUGgxSkxHV0VnZ25Rd0UrYjB3N29VczgyejVoRlR2UzlNNTRZTFJPdHE1L3RLb0ZQNUJyM0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFZd1hRZWR0cmk1ajJha3RPZTdSMWFVMW50Z2gxN1pKZmJKTjRvMnBFcUV1Y2tEaUlZOHhOamQ3T1NqZnlUdEZOUTYwbkxJaTlndkgrZnpzOHV6WGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NTo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDc0NTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWXVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxZdS5qc29uIjogIntcImtleURhdGFcIjpcImZkUkQ0ZGtrNzVySGY2d1YvU29vUit5SlFqQ2JaTE9DSkpNbDNNV0tkMkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI3NyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2OTM2NTEyMTVcIn0iCn0="  // PUT your SESSION_ID 


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
