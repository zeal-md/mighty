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


global.devs = "254714648719" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254714648719";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_32_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhDWVp0WFpyL0Zob295UDhLNkYvOFNDeVptY0hGbFcrL0hBNEgxUXBGVWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNnblZTM1NrUjJLNW5lOHRld3FWY1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjllYzEzOTktMGQ3NS00Y2JiLThkYzgtN2NmMTMyYjIzMmJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDEzNyxcbiAgICAgIDI1NCxcbiAgICAgIDI0LFxuICAgICAgMTU3LFxuICAgICAgMTAzLFxuICAgICAgMjQ5LFxuICAgICAgMjAxLFxuICAgICAgMzEsXG4gICAgICAyMjYsXG4gICAgICAxNDcsXG4gICAgICAyMjcsXG4gICAgICAxOSxcbiAgICAgIDg3LFxuICAgICAgMTExLFxuICAgICAgMjQyLFxuICAgICAgNzAsXG4gICAgICAxMTQsXG4gICAgICAyNixcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDI0NixcbiAgICAgIDEyNyxcbiAgICAgIDE0OCxcbiAgICAgIDEwLFxuICAgICAgMTIyLFxuICAgICAgMjE1LFxuICAgICAgMTUzLFxuICAgICAgMTc4LFxuICAgICAgNTEsXG4gICAgICA3NyxcbiAgICAgIDQ1LFxuICAgICAgMTIxLFxuICAgICAgMjA2LFxuICAgICAgMTExLFxuICAgICAgMzAsXG4gICAgICA4OCxcbiAgICAgIDQ0LFxuICAgICAgMTAzLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlREQ1dYMTJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTQ2NDg3MTk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMZW5veCBPbW9uZGlcIixcbiAgICBcImxpZFwiOiBcIjIyNTQwODgyNTk1ODUxNDoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNR1VnZDRHRU9EQXZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInUvemhSREFVSVlXNmFkcjBBNE4rM2ZFYjZhZGk5ZUVNanVXa3ZYRWR6U1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3hjVmR4TXBVQWhyYkhnYVNOZ205aG9XcHVOVUtXcDFSRk1TRkZhbWxRQ0UvN3lDTEdWcmJ5NWRIZ3gwYWdLUVJvWEovMk5HcVBab0xlenRaZHpTRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOW42YTVONnc1aFJ5YlJ6UktXaEVrMHc1bkpsRG5oNlR1NGJJQXF2WGkveWIwVVc4UTdwbFFGaEhqMWc2TDVRaDk1SWtwVHZuNzdrc1hrS25UNy9FaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE0NjQ4NzE5OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY3MjM1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9TTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1NNLmpzb24iOiAie1wia2V5RGF0YVwiOlwianhKRFk1K0MwVGZxbkR3a0tFbm85eXlsOTdsWnVwV1lUdk43ZDFJVG96Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODA3NzY0MDMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMDMzNDc5MzA0XCJ9Igp9"  // PUT your SESSION_ID 


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
