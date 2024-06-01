const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://MaximeBot:MaximeBot@cluster0.i6vryfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Maxime" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
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


global.SESSION_ID = process.env.SESSION_ID || 
 "SUHAIL_11_23_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDksXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNqWXlTdk9OSDhMN2RVNlltN1FlUWRSZjliT1JITFE3ZlpKNnJaNk9BYk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjIxMDI1NTIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQUI4MjM2NUU0MzBGQUI5RDIyQzlCQjFENkYxQTQ3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcxNTQ1OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2MjEwMjU1MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdERUJFQzZBMENDNzI0MEU3Q0E4ODY1QTA4NTY0NkY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzE1NDYwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzYyMTAyNTUyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEJEQTY3MEZDQ0U2QkYwQUE4REY4RDZCQTg0Q0FEMDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MTU0NjAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJKYVBjRnI0UzJ1RlNjNGFNMHAyM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDhmNjliNjUtY2M4NC00OGQxLWI0NWMtMTI5MGZjZjU4NTZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjUwLFxuICAgICAgMjgsXG4gICAgICAxMzIsXG4gICAgICA3MSxcbiAgICAgIDIwMyxcbiAgICAgIDEwMyxcbiAgICAgIDQwLFxuICAgICAgODQsXG4gICAgICA2MCxcbiAgICAgIDEzMixcbiAgICAgIDExNyxcbiAgICAgIDY4LFxuICAgICAgMTk0LFxuICAgICAgMTc0LFxuICAgICAgMTM5LFxuICAgICAgMTQ1LFxuICAgICAgMjMzLFxuICAgICAgNDcsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTE2LFxuICAgICAgMTQsXG4gICAgICAxODIsXG4gICAgICAxMDYsXG4gICAgICAyMzgsXG4gICAgICAzMSxcbiAgICAgIDYxLFxuICAgICAgOSxcbiAgICAgIDIxNSxcbiAgICAgIDIxNixcbiAgICAgIDIxNCxcbiAgICAgIDE1MCxcbiAgICAgIDIxMyxcbiAgICAgIDIyNCxcbiAgICAgIDE2NyxcbiAgICAgIDAsXG4gICAgICAxNTgsXG4gICAgICAxMjksXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZnEydWNCRUtEbTVySUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZVVjY4VWNDZHJhUkMvbTdHSVROWVltRDFmZURUVHJqZ3J2ZXNEQ3dVaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQjJ2TUlHZURmbmNPcU9MY0d5dXFlNWJ4M0VLK0p3QmNDTnh4QVVUbytmSEJ3ZWVudWZMb01aUjBRcU9yMXJzUGdmaXMxK2VSMVA4T3ZDempsQ2hxQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmdkeFBoaG80NVA4T0lxbzluM3NSMTh1U2JGWkJOLzVpcE15TmZRVFlzTzhpK2EySkV1ZFNXYmFsS3VXSHdReDdEc2pzVmJoMDVzMVQrVUJYTU1XQnc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2MjEwMjU1MjE6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MzkzNjQyNjIxMzU2MToxOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNYXhpbWUgQm908J+kllwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjIxMDI1NTIxOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTU0NTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTYxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmUy9qZENsNkpXUW1QRlpIZGdFUGd4WUxML2tKVDM4YjFTWllYK2g2VkpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4NTkzMDMyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MTU0NDgxNTEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Maxime 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n "),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Maxine Bot",
  ownername:process.env.OWNER_NAME|| "Maxime",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "maximebot",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
