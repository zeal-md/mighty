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
global.caption = process.env.CAPTION || global.caption || "😈SR KHOKHAR😈" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923043649687";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_00_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhrWWJubjF0azdSalB5NmN0Z0dmSVZvZnNqUHA2eUZYSVQycnlRczZoRlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllPNzZaa3E1VDd5c2Q3N3gzZ3NEMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2VkY2QwNGYtOTRmOC00ZWFmLWI5M2UtZDUxZDVmYzVlNzNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDMxLFxuICAgICAgMTg3LFxuICAgICAgMzEsXG4gICAgICAyMTksXG4gICAgICAyMTMsXG4gICAgICAxMDgsXG4gICAgICAyNTMsXG4gICAgICAxNDIsXG4gICAgICAyNSxcbiAgICAgIDc3LFxuICAgICAgMTY5LFxuICAgICAgMTY2LFxuICAgICAgMTkxLFxuICAgICAgMTY0LFxuICAgICAgODgsXG4gICAgICAxMjAsXG4gICAgICAzOSxcbiAgICAgIDEyMCxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAxMjksXG4gICAgICAxOTYsXG4gICAgICA5NixcbiAgICAgIDE1MCxcbiAgICAgIDY4LFxuICAgICAgMjIsXG4gICAgICA3OSxcbiAgICAgIDI0MixcbiAgICAgIDE5OCxcbiAgICAgIDE4OSxcbiAgICAgIDE0OSxcbiAgICAgIDE0LFxuICAgICAgMTcsXG4gICAgICA4MyxcbiAgICAgIDIxNSxcbiAgICAgIDE1NCxcbiAgICAgIDYxLFxuICAgICAgMTgzLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJONlM3S1k3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDM2NDk2ODc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MTE0NzQ1ODE3OTIwODoxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLigKLinYjigKLwn5KUc8y3Ycy3bMy3Zcy3Zcy3bcy38J+SlOKAouKdiOKAouG1j8qw4bWS4bWPyrDhtYPKs+Kdo++4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3Uy91TUNFS1hMcTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3BCVXNIaFVMUWxkek1oRzJZWHlySHl2R0FrSW5veFBKRkpyb2J4c2tDQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2MzUzUmlPZVIzWk5KZzFMcVViT1JuRDEySVIra0x5OXZRZVdxUjRRdjc0NjFIZ2xyQ2poKzZTUUVHa09Fd0IzRzVOVTdZT0NWRm12MURyR3p5RjZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3b3VJNUNFcloyTnVoQkFacGU1V2xmbHRhckxmNHpsdmZUODkrTkU1eGM4OWVOTC9qWklORWNaMDk1RU1WeFNKMDRQeVRaS29mbWdKbUtTRGNyaG9EZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDM2NDk2ODc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzc4NzkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2M1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4RmxEL0dzekFIQ2EzYTcwRXRDUzVCUUN1NXk4STM5dCtSZHJwcDdJUjEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NjU2Mzk2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMzc4NzkzMjIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 👿SR KHOKHAR😈 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "👿SR KHOKHAR😈",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME || "👿SR KHOKHAR😈 "  ).toUpperCase(),



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
