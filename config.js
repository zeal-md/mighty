const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "tere" ;  
global.video= "tere" ;
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


global.devs = "94775541868" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94775541868";




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
global.read_status = process.env.AUTO_READ_STATUS || "tere"
global.save_status = process.env.AUTO_SAVE_STATUS || "tere"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_15_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICA5MixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXU2dVMyT1hKWFlCd052V09DbXlzenZRNDdLMXVXZWFwSzhjaUNPOUNYaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0s5UDdXVi1TM1NZM251NGJLU2R2d1wiLFxuICBcInBob25lSWRcIjogXCI1ODA5NDYzMC02MWU1LTRkMzAtYWU0Yi0zNmE3MzU0NzQ4NzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNDcsXG4gICAgICAyMjQsXG4gICAgICA2NyxcbiAgICAgIDE5LFxuICAgICAgMTk0LFxuICAgICAgMTM1LFxuICAgICAgMjA2LFxuICAgICAgMTQyLFxuICAgICAgMjUwLFxuICAgICAgNDcsXG4gICAgICAxNjksXG4gICAgICA0NixcbiAgICAgIDI1NCxcbiAgICAgIDEyMixcbiAgICAgIDEyNSxcbiAgICAgIDE2MyxcbiAgICAgIDM5LFxuICAgICAgMTU0LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE4OCxcbiAgICAgIDY0LFxuICAgICAgNDcsXG4gICAgICAxOTMsXG4gICAgICA3NixcbiAgICAgIDEyNixcbiAgICAgIDE3NSxcbiAgICAgIDMwLFxuICAgICAgMTQ3LFxuICAgICAgMjMyLFxuICAgICAgMjQyLFxuICAgICAgMjIyLFxuICAgICAgMTE1LFxuICAgICAgMjQyLFxuICAgICAgMTU3LFxuICAgICAgMTU3LFxuICAgICAgMTkyLFxuICAgICAgOTYsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaMVlYN0NQNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzU1NDE4Njg6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLar9m+INiy2YbZiiDZh9in2KbZitiq2Yog2YXYs9iv2LNcIixcbiAgICBcImxpZFwiOiBcIjE3MjkwMzA1MjA4MzIyOTo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbU11UGdFRU1HdzRMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVnNkxSZWN5N2NUZ0NCd0xaendTR2M4eEp0dkhXVlJNS0NOR05yNFFJd1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0VmczZHWW1CRzhmaUJPZXNQK0t4b3JjdnJlckJEVFJ1MFVVS0dlVkFDNVV4WnRSTTVJMnp4UXdUUkxQOTd5Q01ucWtNTUw1VGFaQ0VMNHdqYlR6REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVjNYVnBzUGJ0WitPV2R2WG5CWXNEZjhteWpmN0Z1Y2xJa2VGejRPcGJwQ0J0UW9sS2hsWmdWOGt6Q3NWTC9HZUcxSWZwVTh0WldUNzNQdUh3dXJLZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzU1NDE4Njg6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQzNzE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREZYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5cXYrL2xjWHh5MTFBNmp5dTVyNUs4cldDcnZUWm5kTDF1cDhMZUdGSWJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjYzMTkxMTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI0MzcyMzU1NFwifSIKfQ=="  // PUT your SESSION_ID 


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
