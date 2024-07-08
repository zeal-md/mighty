const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923066566599";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923066566599,923066566599";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_19_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjY4UFBTaU52dUw5aE9ValJtZG5RNGZwckg1ZTlTRHIvalNYdllCcDNvNWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY2NTY2NTk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEOTA0MkYwNkI4M0I3MUZGOEZGOTI2REZDRDkzODZEMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMDQzODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjY1NjY1OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYyNzk1MTEyMTBEMjIyNTQ1NTY1OEIyMEVEQUIwM0FGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDMwNDM4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5VldNdm5zZFIzMkxuSjlDc2NYNkVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1MGE5N2ZlLTRlNDEtNGU0NC1hM2Q3LTUxZDg4YmJhZGUxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxNDEsXG4gICAgICAxNDIsXG4gICAgICAxNDEsXG4gICAgICAxNTcsXG4gICAgICAxMDUsXG4gICAgICAxMTcsXG4gICAgICAxNixcbiAgICAgIDE5MCxcbiAgICAgIDE1MixcbiAgICAgIDIzNSxcbiAgICAgIDk2LFxuICAgICAgNixcbiAgICAgIDQwLFxuICAgICAgMTI5LFxuICAgICAgMTY0LFxuICAgICAgMTIwLFxuICAgICAgMTIwLFxuICAgICAgMjEsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNTIsXG4gICAgICAxODgsXG4gICAgICAyMzAsXG4gICAgICAyMTcsXG4gICAgICA4NixcbiAgICAgIDExNixcbiAgICAgIDMxLFxuICAgICAgMTIwLFxuICAgICAgMTg0LFxuICAgICAgMixcbiAgICAgIDEyMCxcbiAgICAgIDQyLFxuICAgICAgNTgsXG4gICAgICAxMDAsXG4gICAgICA1OSxcbiAgICAgIDE1MixcbiAgICAgIDUxLFxuICAgICAgNDIsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDhOTlgyWlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NjU2NjU5OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTc1NjIxODA0MDczNzE6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEzrHOus+FzrHOsdC4IGTOsSDQvM+F0LhkzrE+8J+lt/Cfj7tcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUEYzdm9GRVBtRnA3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhPdDlVRnpucnY3UkNreGZlcDVIZzFaZjhxbGtQL1N2TjhzZ1owclhNREE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYVdjdGl1bVpqMGxlaWhYWkVjeTBCRGo1Zm1NdzFYN2lxOGdEd3RoMmUrd1RzOXhERk1zVjB2MDRFVDUyNnNNUnIxOWFWSkVLUVZyQW1vckFRenZWRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRjBnSUhmU2JSd1BrUjVleHNlL2M5dGl0bFVHNlVLSDFhTmltd1BZSE5vd3RqSXJJWlBkK0lGclhqWmpCd0tXTGhrQU9SZWJ0T3BReHBVWHZFWjFoZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY2NTY2NTk5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzA0MzgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0JNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFbzdBSGJhckU2RHdTOVBTdkZyN0ErNXZHY3ZZYUgzWndSblhpZEFzWmVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTk1Nzg4MDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDMwNDM4MjI0NlwifSIKfQ=="  // PUT your SESSION_ID 


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
