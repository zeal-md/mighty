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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_55_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXdTJzY1RZaUpSRHlEYVVTZkMyRm1tWmtkS0hTYXZSa2NqVkg0dndNWk5VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNzY3MjA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDJGM0E5REFGNzM5OEJCMzk2MkNBMzVGQTdCQUUwNzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTg4OTU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE3NjcyMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNzFDOEQxNUU3MEUzOTlCNjIwNjcwQUU3M0QwMkEzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5ODg5NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjI5U3RWeU1USEsxS0I5QlZIYXc4d1wiLFxuICBcInBob25lSWRcIjogXCJmNGQ1ODg3ZC0yZjYyLTQyNDgtYmYyNy02ZjgxZTZjMDQ4YjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICA4NSxcbiAgICAgIDE5MSxcbiAgICAgIDIzLFxuICAgICAgNzQsXG4gICAgICAxMTMsXG4gICAgICAxOTEsXG4gICAgICA4MCxcbiAgICAgIDExMSxcbiAgICAgIDMwLFxuICAgICAgMjEsXG4gICAgICAyNDQsXG4gICAgICAxNTcsXG4gICAgICA3MixcbiAgICAgIDI1MixcbiAgICAgIDI0OCxcbiAgICAgIDg2LFxuICAgICAgMjUwLFxuICAgICAgMzAsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxNzEsXG4gICAgICA4MyxcbiAgICAgIDYsXG4gICAgICA4NSxcbiAgICAgIDU4LFxuICAgICAgMTU2LFxuICAgICAgODAsXG4gICAgICAxNzQsXG4gICAgICAyNTAsXG4gICAgICAxNTgsXG4gICAgICAyMzAsXG4gICAgICAxNDksXG4gICAgICAyMzUsXG4gICAgICAyMzcsXG4gICAgICA1NixcbiAgICAgIDIyNyxcbiAgICAgIDEzMixcbiAgICAgIDExNixcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhGUjlQOEY3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo0M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLMjlwcm9tYXhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeXp1ZXNIRUpMaDFyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhJeUZmVGJLMk1RaTNta21PQWRoSVQ3YjdFTngwTHVHMnllYkc2KzJYVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0E3c0pScml6M1ZRbVJ4djlSZ29XSDgveFZ5alhyYlYvN1pLU2dsRmRrZklvaDFmdk5YU0F3UTEwUVpwamVnS0h3NWVJYmpYSGowejJhdGJLaFJDQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic2s4K1J2TDZtSkx5NVBSS2VKd2M3enV1aWxKaFhvYWhBSGVoeklHdVExUTBkd2xmVkZkQ1cxMHBZMWI0Uy80eFBPRU1RdmxKeEdjcDZnc2crVjlxQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODk4ODk1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1PT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU9PLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUg0WWhCZzArZFFjeFRDcnpuRjBIcmU2RDYzZ1FlWkFVaEtab1JsQ2N5RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA0MzgzODg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5ODg5NTI0NDJcIn0iCn0="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


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
