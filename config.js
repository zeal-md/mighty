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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_12_56_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxscDlrU0tFVEQrMHZNTnA1ZmdnYVV4NjBjVlpYcVlsbnRYZndkdkFMRTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1zV0pYeGsxU2gyRFpBUTRQQk5NSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjc1ZGY0NWQtNDdhMS00OGI4LWE2MDUtNTI2ZmIzMDkyMjkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDI1MyxcbiAgICAgIDMxLFxuICAgICAgMTU5LFxuICAgICAgOTgsXG4gICAgICAxMjgsXG4gICAgICAyNyxcbiAgICAgIDE3NyxcbiAgICAgIDE1NixcbiAgICAgIDIyLFxuICAgICAgMyxcbiAgICAgIDQzLFxuICAgICAgMjUwLFxuICAgICAgMTQsXG4gICAgICAwLFxuICAgICAgMjEsXG4gICAgICA4MCxcbiAgICAgIDU1LFxuICAgICAgMTgxLFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgOTEsXG4gICAgICA3MSxcbiAgICAgIDQxLFxuICAgICAgMTI3LFxuICAgICAgMTQ2LFxuICAgICAgMjI0LFxuICAgICAgMTI0LFxuICAgICAgNixcbiAgICAgIDU0LFxuICAgICAgMTYwLFxuICAgICAgMTY3LFxuICAgICAgMTI2LFxuICAgICAgMyxcbiAgICAgIDQyLFxuICAgICAgMzcsXG4gICAgICAyMCxcbiAgICAgIDE3NixcbiAgICAgIDEwMixcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjEzRk1INjZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTcwNDMzNDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk5NzEyMTAzNzg0NDUyOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdteTAwUThiL0hzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaejF3RVNsWWdoLzAxRlQweHVkNDA0RjBYSEdScmZuazkwTDdiT3Aydm5ZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVIa0xSbDU2dFQ5TEJFTnFFVFlSdHhTdm44VnFuMmthNHVtSlg1Q1hYUG5CSUdDQjhVQTFxdnhVR1hBaGhLSU1NdWtqN3Q5QXU0QzJVSmxoZkxJbkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjM0WHdKZ3JhMVNOZ0lzM2tFWS9zMFgwdXlXeHA2Rm40Y2VtS2ptZVZ2ZmZJcDRtbE1qRElaeHN6cmYwdUxOTWFxdGt1b2h4VkNhazhtbVpQYjVUZkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1NzA0MzM0OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY0MTc4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYvcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRi9xLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
