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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_13_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVdJL3g5TWlEV0FiZE9vRlZBZlV3cDdlM3lMMUQvcmZqUXYxSGtvY0p1QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMzI1MjcyMzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwQ0U1QTY5QTBFMTdDNzRBMTlCQzJGMDE1RTdCQzlBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ0NDM3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtOHNKV3pDM1JQU1N1WVo0dkJ6Q2Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5NWQ3MWU1LTgyZjQtNDBmZC05MTc2LWJjZDJmOWEwZTNkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICA2OSxcbiAgICAgIDEyOCxcbiAgICAgIDQwLFxuICAgICAgMTE0LFxuICAgICAgMjU0LFxuICAgICAgMjcsXG4gICAgICAyMTYsXG4gICAgICAxNzMsXG4gICAgICAxMjMsXG4gICAgICAyMzYsXG4gICAgICAyMTEsXG4gICAgICA4NCxcbiAgICAgIDIzNixcbiAgICAgIDIxNyxcbiAgICAgIDY3LFxuICAgICAgMjAzLFxuICAgICAgMTU5LFxuICAgICAgMzAsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDIwMixcbiAgICAgIDExLFxuICAgICAgMjEsXG4gICAgICAxMDEsXG4gICAgICAxMzYsXG4gICAgICAyMyxcbiAgICAgIDE0MCxcbiAgICAgIDE5OSxcbiAgICAgIDE1OSxcbiAgICAgIDY5LFxuICAgICAgMjA5LFxuICAgICAgMjMsXG4gICAgICAyMzksXG4gICAgICAxMjAsXG4gICAgICAyMDAsXG4gICAgICAyNDksXG4gICAgICAyMjgsXG4gICAgICA0OCxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTkpQWFBLTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjMyNTI3MjM0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2ODA5Njg5OTg1NDQ5NDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BuNHo5a0ZFTlBMcjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidU9pWmRPNy9lZ004OGlBR2hQb3VmdjExMUZxeUVTZkhwNmNrMzluNE0wND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDVmdISEd1WGJtOFgvbmVOVHFvbkxwNFUzcHF2OUNwbGErZ25VM2VBbUVWQlFJcjFDMTNaVUo5L21jcThaVjd6dEdnTzczMmxNTFJmYTgxVDk1ekNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMV1FRYzR3WkZ3Zm5MUmZtQnNxTmxtdFZaNkpzN2svZlJVQXh6WWp4ZVFrbXBlZ21DY3VXQlIxclZRVVpIdTJIMUFJYjdHSnVMbUpVcXBsaWt4U2FCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzI1MjcyMzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzI1MjcyMzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDQ0Mzc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXNpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNc2kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqcDRsTXN3aWEwVlQzeFFHTzZrVis2ZXAvNkNxcThDTkNPS2VYVnpIMWVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzAxMzM2MjQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQ0NDMxOTYxMFwifSIKfQ=="  // PUT your SESSION_ID 


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
