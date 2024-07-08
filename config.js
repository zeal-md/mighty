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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_05_39_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkMybkFIem5rRVM2SzAyUy95YkZhQmhOV1ozQzJJeFNuaE9Xalc5c000N3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDgxNjQ1NTA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOTkwRTAzMjU2RjMxNDE4MTJEOUFCM0E3NURGQUU3NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MTcxNTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODE2NDU1MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYxQTVDOUYxOTFCRTEyM0VCODZCNURGREZCNEREOEYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQxNzE2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWZUdoRGUzNVRreXFMaDJQUi1GUUtnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjZDVlODgzLWVkN2YtNGNjZS04NjdiLTY4NWUxZjYzNDdhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDEyMixcbiAgICAgIDEzNixcbiAgICAgIDIxNSxcbiAgICAgIDIzNCxcbiAgICAgIDkxLFxuICAgICAgNTksXG4gICAgICAxNCxcbiAgICAgIDE5MixcbiAgICAgIDIwNyxcbiAgICAgIDE3NSxcbiAgICAgIDEzMSxcbiAgICAgIDE1MSxcbiAgICAgIDEzNSxcbiAgICAgIDUzLFxuICAgICAgMjM5LFxuICAgICAgOTcsXG4gICAgICA5NixcbiAgICAgIDExNSxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICA3NixcbiAgICAgIDI0OSxcbiAgICAgIDE4NCxcbiAgICAgIDI0NixcbiAgICAgIDE5NSxcbiAgICAgIDIyNixcbiAgICAgIDM3LFxuICAgICAgMTkyLFxuICAgICAgNDcsXG4gICAgICAxMjQsXG4gICAgICAxMjgsXG4gICAgICAyNDAsXG4gICAgICAyMyxcbiAgICAgIDEwOCxcbiAgICAgIDIxNCxcbiAgICAgIDEwMCxcbiAgICAgIDEzMixcbiAgICAgIDgwLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldEVldGQlo5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODE2NDU1MDQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRIWlwiLFxuICAgIFwibGlkXCI6IFwiNDg3Mzk3MjUwODY3NTY6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeUtrWlFIRUlMM3JiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJDaXVvcFRwaVcwanpCeWtkODRTSTVyNGdpN1ltd3Vpb1lXeGk3MjJhaFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieTNMOHZIblVJUEhsd0N4NE1ISnJMN3dMRUxBN3JNbjBYZjVObklFakpZdmtyQWlOaFFwWXNSdU9rWHFabWx6SWlvMm02K0tkcmtLODQ4OUVVSEpqQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnRoUDFRbElRUDh0SERVOFhvLzltaXN2cDVNNm8vTEwwVEdiNTgzZGxmZTRvVDYzVmVqK0V5ZVo5Nk1SZVZoWFkyYnV1MXlZZHZlUFFzd05jOHg4Z0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDgxNjQ1NTA0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDE3MTU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXlhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNeWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4TVpsaWlBQUltRXdNeWpZZVRvektZL0ltcFBvalZDOENEeDkvYnFLUjBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjEyNzExNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQxNzE1OTg0OVwifSIKfQ==|  ""  // PUT your SESSION_ID 


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
