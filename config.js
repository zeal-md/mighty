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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_58_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlljSzJQZnVuejdxeG1Felg4bUlKemd5djNIWUlmYzVpSzBKZlUveDNxST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWERYTU5rTnNTTmVvWVA3MkUwQXpPUVwiLFxuICBcInBob25lSWRcIjogXCIxZTllMWMzNy1mZmQwLTQwYzktYTk5Ni0wMjc3ZGZiMmIwOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjQ4LFxuICAgICAgMzMsXG4gICAgICAxMDEsXG4gICAgICAyNDYsXG4gICAgICA5MSxcbiAgICAgIDI0NSxcbiAgICAgIDE2MixcbiAgICAgIDIzMixcbiAgICAgIDY3LFxuICAgICAgOTIsXG4gICAgICAxMDIsXG4gICAgICA4MixcbiAgICAgIDEzMixcbiAgICAgIDE4LFxuICAgICAgMTUzLFxuICAgICAgMjE2LFxuICAgICAgMTk0LFxuICAgICAgODEsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTEsXG4gICAgICAyMjIsXG4gICAgICAxMTcsXG4gICAgICA3NyxcbiAgICAgIDE0MyxcbiAgICAgIDIzMCxcbiAgICAgIDIyOCxcbiAgICAgIDQsXG4gICAgICAzMyxcbiAgICAgIDE2MyxcbiAgICAgIDE4MSxcbiAgICAgIDE5NSxcbiAgICAgIDE0NixcbiAgICAgIDUyLFxuICAgICAgMTQsXG4gICAgICAxMTYsXG4gICAgICAxMzUsXG4gICAgICAxNDQsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkoyREpaNEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzM1NTI2MTQ6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTQ3OTM4Njk0MzcxMTo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYngzckVDRU1YMXZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpuZGlIZ01haDh2Ykp1aExNSE43R2pqb2Ixc2t4K2RpMlgxaTZpUDlsVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemFTbWZSUVIyYlVLcHBkbWNlV0VIa2xvNU5LOFBoaEZDQ1M0R20zdUNoWGRxNmlDOE16ZU10UTlzVjZjVWZodlZYeUM1K1RqOThNQ3BRaEdaWmNtQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicE95YnNWZzhZVXJyWEIxYVRRNUxQaWk5Z0hidjRGT1FJWTFRWXlPL0s4WkhwdE5xT3ZwS1RUUno1VEVCSUFad2JscVVQUXNmMVprUnF6RGNDRTQrZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMzU1MjYxNDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2OTU0OTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
