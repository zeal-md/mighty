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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_14_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOUcraklwVFVOQWxEbitycERLSEVqL1B4Q0RvdUR0enM0cjVXZllZWW14dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTc2NzIwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2MzE0RjNFQzM0RTA0OUE2ODQ2MUE3RUU5N0Y5OEQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk5NDQ3MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQQVJTbFp0eFFBS0hXMFZYUHNYbFl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY3NWMyNjZhLTM0ZGMtNGUxZi04YWMwLTk5MWRmMzVlM2U0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyMDAsXG4gICAgICAzNSxcbiAgICAgIDEwMixcbiAgICAgIDE4MixcbiAgICAgIDE2NixcbiAgICAgIDE2MixcbiAgICAgIDYwLFxuICAgICAgMTMwLFxuICAgICAgMTE5LFxuICAgICAgMjMsXG4gICAgICA1NCxcbiAgICAgIDU4LFxuICAgICAgMjE5LFxuICAgICAgMzEsXG4gICAgICA2MixcbiAgICAgIDIzOSxcbiAgICAgIDE2MyxcbiAgICAgIDI5LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDE1MixcbiAgICAgIDExOCxcbiAgICAgIDE5NCxcbiAgICAgIDk1LFxuICAgICAgMjEzLFxuICAgICAgMTU1LFxuICAgICAgNjcsXG4gICAgICAzOCxcbiAgICAgIDIyOSxcbiAgICAgIDk1LFxuICAgICAgMTEwLFxuICAgICAgNTcsXG4gICAgICAxNjQsXG4gICAgICAyMDksXG4gICAgICAyMjYsXG4gICAgICAxNDMsXG4gICAgICAxNjUsXG4gICAgICA2MyxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM4RVFWOVNSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeXp1ZXNIRU55UWxMUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhJeUZmVGJLMk1RaTNta21PQWRoSVQ3YjdFTngwTHVHMnllYkc2KzJYVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHdYTHhrZmhoSVBxYzFIb09FZjhORFZTTUxzOGI2T2RpeFlIcnBmdVk3K0hBRkZuS1piS0Jqa1crd0tubnQ3WUZHbVVadHRhdkQ4SkM2dDA4cmdSQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2xNWmZGbjNHOFpXNGxDd25kQ21lbTNEbGZUa1Q3NDNoVnRxWTlxQk8zd05hSTN1amxMbFd6UVdLWFRSL1ZmRElhRmxadVVOVTBCYWZiako0dVl5akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk5NDQ2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1PUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU9QLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMkltSHF3QmZxUVdPUi9Tckh2ZU0ydkMzMkhQM0lYTFVkODY3MC85SURLVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA0MzgzODg0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTA2MTIyMzg0OVwifSIKfQ=="  


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
