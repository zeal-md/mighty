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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347011582396";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_43_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZXMGdNb05DYStWdmRaNjZHcGhtd0U3ZTBPWXRONjVsRlhoejBYbTFkSDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjI2M2ZsQVA3UW1PeTh0dFJ4dVNUZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmJmNDQ4ODUtMjU1Ni00NmY5LTgyZWYtODdjYzMwNGYzNzE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDY5LFxuICAgICAgODQsXG4gICAgICAyNDIsXG4gICAgICA0NSxcbiAgICAgIDc1LFxuICAgICAgMjI2LFxuICAgICAgNyxcbiAgICAgIDE5MSxcbiAgICAgIDIyLFxuICAgICAgMTMzLFxuICAgICAgMTkyLFxuICAgICAgMjU0LFxuICAgICAgNTAsXG4gICAgICA1MCxcbiAgICAgIDE3NixcbiAgICAgIDExNixcbiAgICAgIDIzOSxcbiAgICAgIDIwOCxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICA1OCxcbiAgICAgIDEzNyxcbiAgICAgIDY0LFxuICAgICAgMTM3LFxuICAgICAgMTM0LFxuICAgICAgMTM0LFxuICAgICAgNjMsXG4gICAgICA4LFxuICAgICAgMTU1LFxuICAgICAgMTI4LFxuICAgICAgMTM5LFxuICAgICAgNjQsXG4gICAgICAxOTAsXG4gICAgICAxMjMsXG4gICAgICA5MixcbiAgICAgIDIwMyxcbiAgICAgIDk1LFxuICAgICAgMTEsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktETEg0SDFRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDExNTgyMzk2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGb2xhd3VubWlcIixcbiAgICBcImxpZFwiOiBcIjExODY2MTgwOTQ0Mjk5NzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016dzA5WURFS0xPdDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWxVM1VzME1YQWl5VCtnUi9RZFdVcmVqeHNSejBPVnNUSzcxNWR2MGtEND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxNk1qRDBvR0Y0QVg5bFdoSFhlUUt2andBa3pUbUlXZlUwUG1BeGl0dnVTS1BXVDZPM0VUSEtzYnRNVTNEb21aNzVjOHJjN1oxalZ3bzI3eGdNckJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSMHhpejYyUXRpREVOVkZOUTVWOXBaYjJob21NM1JrMW94R2JFTEVrdHErenVZZDBBUUV0MzgrcDJ4VWZXZkVzYjNUSUpuSnp1WWhWZllmMmIvMElBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDExNTgyMzk2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU3NTc4MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "lunar",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-47682641-f7fe-4016-bb9d-4c17da79a5fb",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "lunar",
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
