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


global.devs = "923066566599" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923066566599";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_28_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA5MixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImU5KzlteHRXa3dRMDkwbkluVitKNEQvWjBMU2FERnVSUkp0SjA2ejMxZmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY2NTY2NTk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERTU1RUIxRDFEMkYzRTMxOTY2N0Q3MkYwMTlCRDNGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwNjM2OTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjY1NjY1OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0ODc0MjM5ODU4NkU5QUM5QzYyMzNCREFGRDU5NjFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDA2MzY5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxT1VKSDBvWVNBR1BHOHk2YjJQY1J3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkN2NhMWY1LTExY2MtNGZhYi04M2M5LWUwYzdjZjU0NjUzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxNDUsXG4gICAgICA1LFxuICAgICAgMjEwLFxuICAgICAgMjA3LFxuICAgICAgMTA2LFxuICAgICAgMTIyLFxuICAgICAgMzIsXG4gICAgICAxNzksXG4gICAgICAxNjUsXG4gICAgICAxOTEsXG4gICAgICAxODIsXG4gICAgICA1NSxcbiAgICAgIDEwNixcbiAgICAgIDM0LFxuICAgICAgMjAxLFxuICAgICAgMTY0LFxuICAgICAgMTkwLFxuICAgICAgMjIsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAyOSxcbiAgICAgIDg5LFxuICAgICAgMjM2LFxuICAgICAgMTMzLFxuICAgICAgMjU1LFxuICAgICAgMjQ4LFxuICAgICAgMTUsXG4gICAgICA1MixcbiAgICAgIDMsXG4gICAgICA5MyxcbiAgICAgIDEzNCxcbiAgICAgIDIsXG4gICAgICA4MCxcbiAgICAgIDExNSxcbiAgICAgIDcxLFxuICAgICAgMTk2LFxuICAgICAgMTI2LFxuICAgICAgNjcsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN05aTkc2RTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NjU2NjU5OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTc1NjIxODA0MDczNzE6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEzrHOus+FzrHOsdC4IGTOsSDQvM+F0LhkzrE+8J+lt/Cfj7tcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTEYzdm9GRU1hdG1MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhPdDlVRnpucnY3UkNreGZlcDVIZzFaZjhxbGtQL1N2TjhzZ1owclhNREE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnBabTZyWTg1TWtDeHBTdWFZdlY5M0pIS3ZiQlJSNkxqUnA1WU5JbnI2K05jSkhCZ0Y2dzF0czRRdHg2ZU1EWnhxYXZ6Q3RXalFCUzluYS9MVTB4Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmE3S3JPdXNNc0tvL3VkOFZEZmkza0l3TmJoZWtvWnVybGlWQm04VCswK1M1U0wwOURiZ0h6TkE1TXYvcHJSalRnZFVqdjd4WG41ckNkZnJZQ0Z5REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY2NTY2NTk5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDYzNjkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDlvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQOW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMTjlWWHF3UWtFRDBhVUI5VXlkTXdpaG5OQ0ZaaVIrc3l0SUIvZWtObWFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTk1Nzg4MDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA2MzY5MjY0MFwifSIKfQ=="  // PUT your SESSION_ID 


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
