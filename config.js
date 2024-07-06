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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013100204";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2349013100204";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2349013100204";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_29_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkt2UTUreDREdkp6NDEvZEg5NXdPRWlLSHJCZlV6b1dJTWJhd2VJZktFSXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklWcHRYcWI0U1dxNkxSZFAxMTNReUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmQ3NTUyYjMtNTdmYS00ZjI3LTkzNjYtOTdhNmUzMWNhM2ZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDE1NSxcbiAgICAgIDIxLFxuICAgICAgMjU0LFxuICAgICAgNDIsXG4gICAgICA2MyxcbiAgICAgIDY3LFxuICAgICAgMTQ5LFxuICAgICAgNjIsXG4gICAgICAxMTQsXG4gICAgICA5MixcbiAgICAgIDE0NSxcbiAgICAgIDQsXG4gICAgICA5LFxuICAgICAgMjYsXG4gICAgICA2NixcbiAgICAgIDUwLFxuICAgICAgMjE1LFxuICAgICAgMTQwLFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjQ4LFxuICAgICAgOTQsXG4gICAgICAxNDcsXG4gICAgICA1NSxcbiAgICAgIDE4NSxcbiAgICAgIDQ4LFxuICAgICAgMTE0LFxuICAgICAgMTIyLFxuICAgICAgMjU1LFxuICAgICAgMTU0LFxuICAgICAgNzYsXG4gICAgICA0MSxcbiAgICAgIDIyMSxcbiAgICAgIDI1MixcbiAgICAgIDIwOCxcbiAgICAgIDEyNCxcbiAgICAgIDI1MCxcbiAgICAgIDE0MSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU0S1o4SzhTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMTAwMjA0OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODI2Mzk0NDA5NjU4NzY6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dacFMwUWxZbWV0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1YjMrYjFQMktXd1NIS3VyejJ0OEhuZ2ZxT29UUWIxWTZid3k0V3JJd1I0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNBNmFQMXNLMHk0dmFyTkpxMHJSUy9sd1RJYXlybExHSTk3VjNNRURVcTEzclB5TTFNeG0xR1BuSWVmNUl2bXR5S2Q0VlhaQTZZbGJoajNiNGFNNER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJnRFhISGRPWk9uSENMb3ZYR3VrVzk5TjhTT1VVL0ZvNDVIdHJrMURSd3Y0QnFhM3duTEZlblNteWtULzhha0JhQ3RTWkR5VDBNWkU2SytvT21SNUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMxMDAyMDQ6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTU3MzM3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "iceking",
  packname: process.env.PACK_NAME || "iceking",
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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
