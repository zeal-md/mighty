const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
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


global.devs = "94740888404" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94740888404";




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
global.readcmds = process.env.READ_COMMAND || "ture"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "ture"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_41_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWZvellTbnNkc3J4b0JQNzFXZU5pTGxxUDhmTWo3ZjZwUEFqNTVQc2JwYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MDg4ODQwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzAyMkU2MDEzRTNFOTI4NzA2MEJEQjYzQ0NDRjUxODNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTE1Njc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDA4ODg0MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZCRjMwOTA3OEJBM0Q5NzVCRTA0REVGODBERjk0RDcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTExNTY3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwdGdDc0l6LVJfYTFKN1VrcXMxNmxBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE0MDAyOGM2LWI5Y2EtNDFlNS04OGY0LWFjZjJjN2FmMDQ4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAyMDcsXG4gICAgICA1LFxuICAgICAgMTk3LFxuICAgICAgMTg4LFxuICAgICAgMTU5LFxuICAgICAgMTg5LFxuICAgICAgNixcbiAgICAgIDkxLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAxODgsXG4gICAgICAyNCxcbiAgICAgIDIyMyxcbiAgICAgIDE2NyxcbiAgICAgIDEyMSxcbiAgICAgIDQ0LFxuICAgICAgMTMxLFxuICAgICAgOTQsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgOTQsXG4gICAgICAxNTgsXG4gICAgICAzMSxcbiAgICAgIDE5NixcbiAgICAgIDE1NixcbiAgICAgIDIzMCxcbiAgICAgIDE1MCxcbiAgICAgIDExNyxcbiAgICAgIDExNCxcbiAgICAgIDE4MSxcbiAgICAgIDE0LFxuICAgICAgMTgsXG4gICAgICAxMTgsXG4gICAgICAxNzMsXG4gICAgICAyMzIsXG4gICAgICAyMjksXG4gICAgICA1MixcbiAgICAgIDE2OCxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhBNEpLRVhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MDg4ODQwNDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDQzODkwMDcxNDMwNDM6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1gxaXNjRUVKZkkyTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvZGc4dnpNZEtSV2VpcWNhOEZkbzlnR2M3c05yTTErU2lmZjU4RHdtRmlnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBsM1I0REwzakw5aHhDVnFSNXJtNFV5T3luSnMwY0svdGVaYmtMYmw4Z3dSK1BPK3FhaHo1K05BN2xGdkY1a0hiVFF0S3RXOHUzTzFOSHk2RzExcUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtBYUR5WHoxdUZicE4yeVYwcmVRVldLL2pLVHg2WHpiRW51RFpFYWlXYlhaMU5XTnR5VkJNZzlOdWRDQjRJckJiL29YaHZtY3hKUDhrOGJUQ001NkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQwODg4NDA0OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTE1Njc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
