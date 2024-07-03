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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_38_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYQjN0a2NNRUI3NjBzcDJySmtiaGFLS05TT1J1V01hVEcxVThXMks5QzNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEWU4tektFOVE3eTFhZWdQRzQ5RW9RXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0YmE3NDBhLWY0ZmUtNGJkOS1hYWQwLTVmYTFkNzZhMGQxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDI3LFxuICAgICAgMTAzLFxuICAgICAgMjMsXG4gICAgICAyMzMsXG4gICAgICAzNSxcbiAgICAgIDU0LFxuICAgICAgMTYxLFxuICAgICAgMjEyLFxuICAgICAgMTUsXG4gICAgICAyMjUsXG4gICAgICA1LFxuICAgICAgNjksXG4gICAgICAyMzAsXG4gICAgICA2MixcbiAgICAgIDE0MixcbiAgICAgIDE4NixcbiAgICAgIDkxLFxuICAgICAgMTYzLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAxMTcsXG4gICAgICA4NCxcbiAgICAgIDE4LFxuICAgICAgMjA4LFxuICAgICAgMjA2LFxuICAgICAgMTc1LFxuICAgICAgMTc3LFxuICAgICAgMTQ3LFxuICAgICAgMTQ1LFxuICAgICAgMzEsXG4gICAgICA2NCxcbiAgICAgIDk0LFxuICAgICAgMTg1LFxuICAgICAgMjM2LFxuICAgICAgNDksXG4gICAgICAyMjIsXG4gICAgICAyMyxcbiAgICAgIDEzMCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5VkE4SEZTQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzgzODczNDY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE5NzkwMzI5MTIxMjE6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaTduK0lFRVBUL2s3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklSTXBHNWRPLzIvUEpvaFBpdWsycndZQkgyTnlRUDBMdTloMVZWSkJjaUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieE95U0JyM1JTNG9iMnRsSWF6SHpCWDJkVEI2dTJXR1JBOTVOT01kRmxQbjZkSkQ1QkZrNFJBbkIvKzNvV2dqSEpJYXo5d0JNMXVMQVdES1dXOFBoaWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiblI2b24ya1J2VGptNTQ2UCt3bUF3akorSE9GSVBVTlF3OVdLUjRVZURoKzcwTGd4L2ZYVlRWOVpyVlBuOVZ4M2FGUllsOHAvQ044VzJ0TDV6dkdHQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzgzODczNDY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk5MjMxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0= "  // PUT your SESSION_ID 


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
