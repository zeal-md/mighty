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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221760263631";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_51_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJLbTZkMStlQy9pM1BiczhkRWJ3Z1Jkc0xFKzNkaDljeWcwK2NkTDA5Mlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9nTkxiV2VKU0JHZHVCVWIyWWxFX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzExMzliMmMtNjdiNi00MDAwLWEwNjEtZWQ2ZWVhNWE0M2Q3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDQsXG4gICAgICA3NCxcbiAgICAgIDE1MixcbiAgICAgIDEzMCxcbiAgICAgIDIwOSxcbiAgICAgIDE5NyxcbiAgICAgIDYsXG4gICAgICA4MCxcbiAgICAgIDU4LFxuICAgICAgMTU1LFxuICAgICAgMTE4LFxuICAgICAgMjU0LFxuICAgICAgODksXG4gICAgICAxNDMsXG4gICAgICAxMzQsXG4gICAgICAxMjksXG4gICAgICA0NixcbiAgICAgIDIzOCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDExNSxcbiAgICAgIDE5NCxcbiAgICAgIDIyMCxcbiAgICAgIDEwOSxcbiAgICAgIDM0LFxuICAgICAgOSxcbiAgICAgIDE1OSxcbiAgICAgIDE4OCxcbiAgICAgIDEyNyxcbiAgICAgIDE5NCxcbiAgICAgIDI3LFxuICAgICAgMTM3LFxuICAgICAgMjQ4LFxuICAgICAgMjUsXG4gICAgICAxNzgsXG4gICAgICAyNDgsXG4gICAgICAyNTIsXG4gICAgICAxOTYsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFdLNTY0TUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc2MDI2MzYzMTo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuOCpOODkOODqeODkuODni7wnZCB8J2QovCdkJzwnZCo8J2QpvCdkJrwnZCr8J2QriDwnZCS8J2QofCdkKjwnZCg8J2QrvCdkKfwnZCaxKtcIixcbiAgICBcImxpZFwiOiBcIjgzOTY2Nzc4NDA5MTU5Ojk2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPRXY5c0hFS3FUZ2JRR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2ZkVDBRbndaMU04aThWU3J5UHNZeEI0TFlYK1dONlBiYWhQdFNsSjZFVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKZWMxRWZieVloRWJVcTUybjZkY1dZWU9OM3pFNGp2L3A1NmF5cHJEOG5Hd1JiVFRDY0pMcEdaTDFXalZsZ0Y0N0dtWEYxUllRTGorMHVUT00yU2ZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvSERldXZTNU1vUG8yT2xJU0syY0lzUy9keGI3SGFpRHdzOG1EaW8yMEZhVzI0MDByNkJSZExDMDk5aUlEY3I4OENqakZ6YVlCZVFndGJFL3BpeTlDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3NjAyNjM2MzE6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2ODM1MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNMEZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0wRi5qc29uIjogIntcImtleURhdGFcIjpcIm55WGNOUDdlcHdRRlVGSjlmS0ZaWkdtY2pROFpRd0RKa3BDQ1hNQzExYUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MDkyMTc3OCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Bicomaru Shogunaī",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "bicom lab",


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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_fc684773c50c51d94ce06651d6274392a83108cb44449628";
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
