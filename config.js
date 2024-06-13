const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="fuchkamomobiriyani@gmail.com"
global.location="Kolkata,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ TANAY BOT" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919641777234";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,919641777234";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919641777234,919XXXXXXXXX";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_46_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVGWDlnZk9KOTlVTThMUGNWMEsvb01rOS9acWFCVno3KzFaZUxVcFF2Q2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NjQxNzc3MjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNjgyQjk0RUFDM0IyMzBFOEU3RkM3NEQ5QzIxQ0UyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgyODYzNzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk2NDE3NzcyMzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4NkZFMjE5OUU5QjJDQTFEMzJBNEM5Q0MzOUU1RTQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI4NjM3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKRjJhUFBLbFFSbXYzZHd2X3JCenpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3NGJhZWViLTYxNzYtNGViZi05MDE5LTRiNjc4NDkwNjYyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxNzcsXG4gICAgICA4NSxcbiAgICAgIDc1LFxuICAgICAgMTgxLFxuICAgICAgMjExLFxuICAgICAgMTM1LFxuICAgICAgMTI3LFxuICAgICAgMTE2LFxuICAgICAgMjE0LFxuICAgICAgMTExLFxuICAgICAgMjEyLFxuICAgICAgOTksXG4gICAgICAyMjUsXG4gICAgICAxMDEsXG4gICAgICAxMTAsXG4gICAgICAxNCxcbiAgICAgIDIxMCxcbiAgICAgIDE3NyxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAzLFxuICAgICAgMTQ3LFxuICAgICAgMTAxLFxuICAgICAgMTM0LFxuICAgICAgNTEsXG4gICAgICAxMzQsXG4gICAgICAxNTEsXG4gICAgICAyMjYsXG4gICAgICAyNTMsXG4gICAgICAxMzQsXG4gICAgICAyMTEsXG4gICAgICA1OSxcbiAgICAgIDE3MSxcbiAgICAgIDE1LFxuICAgICAgMjE3LFxuICAgICAgNjEsXG4gICAgICA5NSxcbiAgICAgIDE3NSxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFIWkw4NVJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk2NDE3NzcyMzQ6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEc3BcIixcbiAgICBcImxpZFwiOiBcIjQyNjY2NjA3ODI5MTYwOjY4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082dzdFRVFwZkNyc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia0ppMGIxZ3RrWVdYRXozTXdRcWVvQWJ5MzAxWVIxTmNjY2ZQTk81bDBXST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmYXpEcXdsVS9iT0w3MnVSclptVkdVR3ZvS0wxN214ZWZZT2FVUldPMjhna1JsMmNCb2h3U2NsdXlRUjRmZWJMRXNHV1hKRE5QOSt5OFdueVNQTE1BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWYVdZdUo5c0ZqUU5kU3JXYW5haXBkem91RmpqR2RJZkpabnp0OUdyQ1k4dUJ6c216RFhIcDY3a3JaU3EwbGxwdUNhTks0algxOVdwRnRVWXVqUDFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk2NDE3NzcyMzQ6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Mjg2Mzc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0RtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRG0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPeGhKMzZ5QkpnN2dEODMzYXl1d2Q3Y3BHVzcrV1dka3lVNGdLN29uV1JNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODA5MDYwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4Mjg2Mzc2Njg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TANAY 727",
  ownername:process.env.OWNER_NAME|| "TANAY BOT",


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
