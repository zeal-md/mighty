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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18763834999"
  
  ";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_49_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdNekxJbU1NY0hSTnpxU0t1THJYZHhWeEpFQTJER1I1TEdmOStUOHo4STg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTg3NjM4MzQ5OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZBNjA1QUMwQzEwNDQwRDQ1ODM5RkEzRDI4QTEzRUFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwMzM1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYUDNQcXJZa1FTS2ROSDYwcXRGWWJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzZWU5NjFhLWQ1M2EtNDdlMi1iNjFiLTk2Yjg1YjBmMTk1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDY1LFxuICAgICAgMjAzLFxuICAgICAgMjA1LFxuICAgICAgMjA0LFxuICAgICAgMTkyLFxuICAgICAgMjUyLFxuICAgICAgMjQsXG4gICAgICA3OCxcbiAgICAgIDE0LFxuICAgICAgMTg1LFxuICAgICAgNzYsXG4gICAgICAwLFxuICAgICAgMjEsXG4gICAgICAzNSxcbiAgICAgIDEwMixcbiAgICAgIDI0NyxcbiAgICAgIDEwNyxcbiAgICAgIDE2MCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxMDIsXG4gICAgICAxNzUsXG4gICAgICA0MCxcbiAgICAgIDg4LFxuICAgICAgNTcsXG4gICAgICAxOTAsXG4gICAgICAzMSxcbiAgICAgIDc1LFxuICAgICAgMjM3LFxuICAgICAgMTM4LFxuICAgICAgMTY5LFxuICAgICAgMTYzLFxuICAgICAgOTksXG4gICAgICA3NSxcbiAgICAgIDkxLFxuICAgICAgMjksXG4gICAgICAxMzUsXG4gICAgICAyMDcsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRE0zWlRMNEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4NzYzODM0OTk5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiW/CdkL/wnZup8J2RiPCdm6rwnZuqIPCdm6jwnZul8J2RivCdm6vwnZuv8J2RjPCdm69dXCIsXG4gICAgXCJsaWRcIjogXCIyNjQ3NzE4ODI1MDAzNDc6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXkxcWM4SEVLK0M1TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXeHNKTGt1T3NIQjR0ODF4cmN0MzFmQzdKbzZVNnFVcEY2bVFNOGNvWjJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInY5ZG4ySjg3QUVNREVUNS8rcVBtNmJkL3JxYmdVSkhEQmxYbXZ2amJjL3hWeC94SzRsSUhBMGtsenJlZzNMbm1BQm9iR3pGSk9VVXFEVFJocGJXOEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkI0NGc0ZUk5NzVBYmhRY0ozRHpzSUJXK0dnUVlLZjZhc2tZc096d2hwc1hIcFBLaWhmc1pndTJmWldvL25uWUZ1cS9ISHVKSWZkdTZQem0yTDRBY0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NzYzODM0OTk5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMwMzM0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVIelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUh6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUWdDNGhNRVNsWEJCZkM5ZG5oOXdWaGpiSVVxQmhwS2FDOWZqbU9NdktvND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ1NDAxODA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMDMzNTA1ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "suhail",
  ownername:process.env.OWNER_NAME|| "suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Suhail"  ).toUpperCase(),



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
