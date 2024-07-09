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
global.disablepm = process.env.DISABLE_PM || "true"
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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_02_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODVNMkFWWm5aVDdMRjRHaUVER09XM0pXMEpWR1VJZ1BWRlNFUTc1ckRBTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidFpmUjBKajRTRGVTOElhajFjNDRDd1wiLFxuICBcInBob25lSWRcIjogXCIzNmRlMWNkMy0zY2I0LTRmM2UtYTQ1Yi0xMzA3MDQ3ZGVkZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgNjYsXG4gICAgICAyMDQsXG4gICAgICAyMDYsXG4gICAgICAxNzgsXG4gICAgICA4OSxcbiAgICAgIDkzLFxuICAgICAgODIsXG4gICAgICA2NyxcbiAgICAgIDcxLFxuICAgICAgNTMsXG4gICAgICAxNjQsXG4gICAgICAxODMsXG4gICAgICAxMzEsXG4gICAgICAxNTAsXG4gICAgICA3NyxcbiAgICAgIDIxNixcbiAgICAgIDgwLFxuICAgICAgMjYsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICA5OCxcbiAgICAgIDcsXG4gICAgICAyMjksXG4gICAgICA0OCxcbiAgICAgIDEyNyxcbiAgICAgIDI1MCxcbiAgICAgIDgwLFxuICAgICAgNTMsXG4gICAgICA1OSxcbiAgICAgIDEyOSxcbiAgICAgIDEwMyxcbiAgICAgIDE3MCxcbiAgICAgIDE1MCxcbiAgICAgIDE2MCxcbiAgICAgIDIyOCxcbiAgICAgIDcxLFxuICAgICAgMTcyLFxuICAgICAgMjE2LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJQQkdGRTlKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTcxNDM1NzY1OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDk3MTA1NzMzMjMwNzo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRHprUDhFRUtPVnRMUUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVQK0E0WTFhSXpudmMzS2c1ZFlBNEl0a2N5ZVV1SlBUSTlXcEdFbzFIUkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1JTSTBmWFRCUXNUQ2Z2SUJGMmJlV1F2UXNzS0JZU0NLbG1Ha2x3SCtmY1FRc1pkTjc3bmRWa1V2NC93R3AyaWtBakpwUFo3a1dMalFleDlZWlRxQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUEZKS1ZiL2FEODdqT0cwRnRzSWpyYlZac1RpdWt5anl4Si9tckZFVzFseFAvWlJBNkhjUk5JVmYzREdPZU1Dc2xvU1FvODBOYWpFUkVhRTBienRDaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE3MTQzNTc2NTo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUxOTMzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
