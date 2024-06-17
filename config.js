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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94756161894";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_09_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICA0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJ1elg5ZG9yUHFyR0hsa0Z6QlZQUGRzQit4NVFJY0FDWEhTT09lZnpxMUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhhV0ZlY2RjVFcybkVYb2hfMTRMY2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTZhZGI0NWEtOWYxMS00OTc2LWE1MzktN2NiNWIzZDJlMWY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjIzLFxuICAgICAgODksXG4gICAgICAxOTYsXG4gICAgICAyMTksXG4gICAgICA5OSxcbiAgICAgIDEyOSxcbiAgICAgIDI1MSxcbiAgICAgIDEzOCxcbiAgICAgIDk5LFxuICAgICAgNjQsXG4gICAgICAxNDEsXG4gICAgICAxNTksXG4gICAgICAxMTQsXG4gICAgICAyMzgsXG4gICAgICAyNTMsXG4gICAgICAxNDEsXG4gICAgICAyMDgsXG4gICAgICAxNjcsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxNzgsXG4gICAgICAxMzcsXG4gICAgICA4MCxcbiAgICAgIDk1LFxuICAgICAgMjgsXG4gICAgICAxNTIsXG4gICAgICAxMTIsXG4gICAgICAyMDMsXG4gICAgICAxNjAsXG4gICAgICAxOTYsXG4gICAgICA4MyxcbiAgICAgIDI1NSxcbiAgICAgIDEwLFxuICAgICAgNDgsXG4gICAgICAyNDQsXG4gICAgICA0NCxcbiAgICAgIDEwNCxcbiAgICAgIDEwMSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpEV0RRV003XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1NjE2MTg5NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSc6pyx4bSHyoBcXG5cXG5cXG7wnZCBXFxuXFxuXFxuXFxuXFxuXFxu8J2QiFxcblxcblxcblxcblxcblxcbvCdkI1cXG5cXG5cXG5cXG5cXG5cXG7wnZCNXFxuXFxuXFxuXFxuXFxuXFxu8J2QgFxcblxcblxcblxcblxcblxcbvCdkIHwnZCS8J2Qi1xcblxcblxcblxcblxcblxcbvCdkI7wnZCF8J2QhfCdkIjwnZCC8J2QgPCdkItcIixcbiAgICBcImxpZFwiOiBcIjIyNzA0OTYzNzcyODQ0NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2cHFyVUVFUHlKdjdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3Y3YVZyZkNzdEtBclllaUpTRHIwY3RxM1FWdldCV2JxMkROYmVUbzlVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvWGtuVVptZ0NJZ3RGaWpQbjZHbjJWNHlpdEg3RDNiSlU0eWxDeDZ1K3EyWU1XZVFHSWUzMUg0NW9GNmRNaFo5cUZVK1ZiM1hLWGxKYVBrVDJSVGxCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRZ25VVVdJN0tPdlZiUm95LzZlWTFSUkl0UzBSNEVuekRQclVxdndHUUIweWVqUW5Ea1Vxdm45cU8xUVZRSGJrUXFsT2lnbG9HSkIreG0rNXZiZzJBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NjE2MTg5NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjAwOTYwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
