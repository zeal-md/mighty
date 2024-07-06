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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349018001569";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_11_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxLFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYzLFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRjVnliUnk2MnMzZW9EbU5WdVhJb2M4RVU4S2Vub0padTJ2ajZxd0ZXanc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkkzdFR1Sk8xUXF1SlQwUk1sVEdMbWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQ4NWY0YzktOTVlYi00YTU0LWJhNzMtMzFmMThhODEzODExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMjEsXG4gICAgICAxNTIsXG4gICAgICAxMDMsXG4gICAgICAxNjUsXG4gICAgICA4MyxcbiAgICAgIDkwLFxuICAgICAgMTk1LFxuICAgICAgOTcsXG4gICAgICAxNzUsXG4gICAgICAyMzksXG4gICAgICAyNDgsXG4gICAgICA1MCxcbiAgICAgIDc3LFxuICAgICAgMTAzLFxuICAgICAgMTI0LFxuICAgICAgMjMxLFxuICAgICAgNCxcbiAgICAgIDE2LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDEwNSxcbiAgICAgIDIzLFxuICAgICAgMjI3LFxuICAgICAgODEsXG4gICAgICAxNTAsXG4gICAgICAxOTIsXG4gICAgICAyMTIsXG4gICAgICAxMDEsXG4gICAgICA3NCxcbiAgICAgIDEwOCxcbiAgICAgIDg0LFxuICAgICAgNzAsXG4gICAgICAxOTAsXG4gICAgICAxMjEsXG4gICAgICAxLFxuICAgICAgNzMsXG4gICAgICAyNDQsXG4gICAgICAxMjEsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEo3VEJENk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTgwMDE1Njk6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MTk3NDM2NjgzNDQ6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1h3bCtJREVPNmdwYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIza29ZVmJpeTErK1MwdmpTOVh4Y3dSWmp1dHAwWVBiTmZsQjk0UVVoTUJNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInIzK1RhVExWbHR2UUV3SUMwVTczQ3IyS01vMlZWTFhUdTJXOHY0WkhWUWpCWnhOT1NBMG5yWVJGRkxrTDdHc2cxQTJmVm96WG9Oc2FiMjZ3aWFtc0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhSWWl1c3dkaWYrNzZ0VTJFeENXL2F1enNvUDBKZGJmc1R3MjY1aWJYdGN4Y0xsYlZKMDY0bTlhOFJhZjBnNmRWVmZ5OEt4cWtvN1FLUlFPNklWbGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwMDE1Njk6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI3NTA3M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
