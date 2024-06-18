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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_44_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpMUlhGR1hmY29Hcm5IS1lUZVVTZk1pWVVyUGFVLzlmU1BHM3BvZlgvNXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzg0NDc2NjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RjZDMkU5RjA3Q0QwMzM5MjRFRkE5MjZFQkM4NTFFQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3MTgyNzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYnlGQXhmbjBTMTI3a2dydERkdTc4UVwiLFxuICBcInBob25lSWRcIjogXCI1NmI4MmYzYS0xZjdjLTRlNDAtYjYzNS03NDVhZmJlM2M4MTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgOTMsXG4gICAgICAyOSxcbiAgICAgIDE1MSxcbiAgICAgIDE2OCxcbiAgICAgIDI1NCxcbiAgICAgIDMyLFxuICAgICAgOTgsXG4gICAgICAyNDIsXG4gICAgICAxNjQsXG4gICAgICAzOSxcbiAgICAgIDE1MCxcbiAgICAgIDEwNyxcbiAgICAgIDE3MSxcbiAgICAgIDg5LFxuICAgICAgNDUsXG4gICAgICAyMzUsXG4gICAgICAyNSxcbiAgICAgIDE4NixcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAzMSxcbiAgICAgIDE3MSxcbiAgICAgIDY1LFxuICAgICAgMTUyLFxuICAgICAgOTMsXG4gICAgICAxNDksXG4gICAgICAxMzEsXG4gICAgICA5NyxcbiAgICAgIDIyNixcbiAgICAgIDIwNyxcbiAgICAgIDEyNyxcbiAgICAgIDEzMCxcbiAgICAgIDIyOCxcbiAgICAgIDI2LFxuICAgICAgNTEsXG4gICAgICAyMzksXG4gICAgICAzLFxuICAgICAgMTAwLFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhHTFZMNUw1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODQ0NzY2ODI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU5NDAzNTA4ODk1Nzg1OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGZkeHZrQkVMYWV4ck1HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrc1ZPRHBNRi9jaFBFbGhod3RxMFlyMHkyUi9hM25nR3JwVzFWQXZPUkNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNFK3hoN1hPcHJwTUJVMWZva1JreEhub3luaFlzR29aT3Q2bEdvRjArYjRENWRBOTg5N29nRXlHajhqL2FkaWVFUXFzazlxUmtaQjlnWHFtR3dqbkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh0TkF2SVNKQXhpaE5WNHFFYVBDNGZiajV6Mk9ISWU3dHJWNzJ6R09mSmdnTDVobG9BNzVpV1dKczRWUGc2WFA2ajVJN2ptajVKNmN4d3k3eDJOdERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc4NDQ3NjY4Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcxODI2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNmUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2ZSLmpzb24iOiAie1wia2V5RGF0YVwiOlwic1p6L2hQUDVYQmVlaXk5RkpKd0pqM0Y5bFRtODlVL2dNTFNMVVNJZ3V5az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MjMzNDk2ODcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE2MDU3MDQ2MTcwXCJ9Igp9"  // PUT your SESSION_ID 


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
