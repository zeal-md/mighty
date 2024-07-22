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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtZVFudXliSUpLbTBiR1Rma09WajRxODQwSHRxcVN1bGV3UEVFNG45SW1BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFa0FzTkg2dVFDbTYzV2RjMVJzQVZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhNWEzZTc0LTc3MGYtNGM2MC1hM2Q1LWZkMjQyNWQ3YzRlNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyMDIsXG4gICAgICAyMTYsXG4gICAgICA2MCxcbiAgICAgIDIyNSxcbiAgICAgIDIxMCxcbiAgICAgIDU1LFxuICAgICAgMjI5LFxuICAgICAgMTY0LFxuICAgICAgMjU0LFxuICAgICAgMTk5LFxuICAgICAgMjA3LFxuICAgICAgMTg3LFxuICAgICAgNzEsXG4gICAgICA0NyxcbiAgICAgIDQ1LFxuICAgICAgMzMsXG4gICAgICAyMTEsXG4gICAgICA5NSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyMTUsXG4gICAgICA5LFxuICAgICAgMTA3LFxuICAgICAgMTMzLFxuICAgICAgMjM0LFxuICAgICAgMjUwLFxuICAgICAgMjMsXG4gICAgICAxMCxcbiAgICAgIDE3OCxcbiAgICAgIDUwLFxuICAgICAgNyxcbiAgICAgIDI1NCxcbiAgICAgIDIsXG4gICAgICAxMDcsXG4gICAgICAyMyxcbiAgICAgIDYyLFxuICAgICAgMTc1LFxuICAgICAgMjksXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaktsNElFRUxTUStyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpEQ3ovdG9nZC9TTHpXam9iRmlKNkVlZElBVEo0LzFqUDFBWG5zNHBPVzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUWxHVzZzRmdmY3EzVS83VExXZlFuQXd5dEFyK3N1YmxHOEpKUFo5eERVQnhUWFByQWNKQURCOFAzZTRJVUpvaHcrMU1LbHk3R2t2SVhzMU1MUkFiQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibXZPV2syR2g0QjQrTFA1a2JCYXpEYkRrc0NiZ3lFb1FKZ0l4SEFjK2FoUTRtQS9QWms1aUpEd3ZabWhzOUFuNDFDczBsazhVQWNXcFkyVmNsQ0NDaUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNjYxMDU4NzM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDIyNzU4NjY0MjMzMjM6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI2NjEwNTg3Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NjU1OTRcbn0iCn0="  // PUT your SESSION_ID 


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
