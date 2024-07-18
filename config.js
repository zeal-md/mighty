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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,237695752818";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "237695752818,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_09_31_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTBIbnNvb2tSVmEwODZVNmNzQ09MNWQ2QlgvUkJ5ZnpqK2dDeG5WbjVpbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDY0alAwaHVTc0tvZDdKRVVsYUlOZ1wiLFxuICBcInBob25lSWRcIjogXCJlNWQwZTY5Yy1kMDgyLTQ0NzItYmJiYi03MjY5MTg2YTk2NDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMjQ2LFxuICAgICAgMTQ5LFxuICAgICAgOTMsXG4gICAgICAyMixcbiAgICAgIDIyOSxcbiAgICAgIDk4LFxuICAgICAgNDgsXG4gICAgICAxOTQsXG4gICAgICAyMzMsXG4gICAgICAyNTMsXG4gICAgICAxMDksXG4gICAgICA5NSxcbiAgICAgIDkyLFxuICAgICAgMjQzLFxuICAgICAgMTc3LFxuICAgICAgMTMxLFxuICAgICAgNTcsXG4gICAgICAxNjUsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTU0LFxuICAgICAgNTIsXG4gICAgICA2MSxcbiAgICAgIDM5LFxuICAgICAgMTg2LFxuICAgICAgMTQyLFxuICAgICAgOTUsXG4gICAgICAxMjQsXG4gICAgICAyMDEsXG4gICAgICAyNSxcbiAgICAgIDIyMyxcbiAgICAgIDI2LFxuICAgICAgODMsXG4gICAgICA5NixcbiAgICAgIDE2LFxuICAgICAgMTc4LFxuICAgICAgMzUsXG4gICAgICAyMSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQMW41c0JFTm1ueGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibTFzeU1kT1RjV2lrelJwMjM0cE9qTitrK2dHWWhia0NueHF4MHBxOVBEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRaDc3MGoyZ2pwdXdHTDNhM1BBYVEvbDB6bTladDh4aTN4dGhMVXBBRXpuUjZMTWhUYXJaeENpZHZuNTRadDdCWis1dTlWbGtHVkJITDNWRjIxbEdnUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxT2l4bUpHOFdMdzNLcS9oUitHRjBLbkswN0IwTGJINnA2Rm9IUUMzcForaUJGb0xxY2luQVJ5VGVDeWwwK0M3MkZYcGtHaHpUOXBLMjh0UmtleG1oUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5NTc1MjgxODo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQxODQ2OTI5ODIwMTo4MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NTc1MjgxODo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzAzMDczXG59Igp9


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
