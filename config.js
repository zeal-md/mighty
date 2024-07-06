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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_49_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGYXkvWVFLL0p4YUZ2TnN4MDQ3WHBuTlk3TFlSVUttSHVzdTdnQlZZdk5FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjQyNTAxMzE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NjFENjZDNUM2QTQ5NkQxNjkyMEMxRkI5QTlDQzA5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyOTE3NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzY0MjUwMTMxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkZGNThENzNERTg2QUZEQjA3QkJCNEI0MjcyQTNCNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjkxNzcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNpNnY5V3Z5UkV1UHdjRW1qZlFnR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDk4ZDAyZGEtM2Y3YS00M2NkLWE1ODUtYTc0MmI4OGNlYTg3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDIzLFxuICAgICAgMTc0LFxuICAgICAgMTQ3LFxuICAgICAgMjMxLFxuICAgICAgMjAxLFxuICAgICAgMTcxLFxuICAgICAgMTE2LFxuICAgICAgMTIxLFxuICAgICAgMTAxLFxuICAgICAgMTk5LFxuICAgICAgMTAsXG4gICAgICAyMjcsXG4gICAgICAxNjcsXG4gICAgICA3MixcbiAgICAgIDIxNCxcbiAgICAgIDEsXG4gICAgICAyMDcsXG4gICAgICA3NCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDE3LFxuICAgICAgMTIxLFxuICAgICAgNjUsXG4gICAgICAxMDcsXG4gICAgICAyMDUsXG4gICAgICAxMDcsXG4gICAgICA1NixcbiAgICAgIDE0MSxcbiAgICAgIDE3MCxcbiAgICAgIDIyOCxcbiAgICAgIDIwNixcbiAgICAgIDE5MCxcbiAgICAgIDE4MixcbiAgICAgIDIsXG4gICAgICAzOCxcbiAgICAgIDg2LFxuICAgICAgNzMsXG4gICAgICAxMDcsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTZWMUc2MlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjQyNTAxMzE0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hhbWJmbGl4XCIsXG4gICAgXCJsaWRcIjogXCIyNDI5NzA5OTc4ODMwMjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdit1dmtCRUxHanByUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNkdi9YbVlCbWIzTnFhbU84Z2Y4YmQ0cXpnWnpuTWUyVnB1NkhKTlBnd1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNnNkUlp2SHNEbjNxNmtPMjJRWjZhR2JDRDRNOEZEamJvUS9ldURITy81ZmVOLzFsUnVTdDBCU29PampISDJpNzdWWXc1QWwwS1FXVU5MamRNUGRJQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSG56SnVITFZwWi9uU1lTTXF1VmZKTnFPd3BHRlE0K2c3ZzFONThlZk9ISEt3dzFQRVZHQ0x5UFlSL2JTYmJORU82N0kxN1psZGxaUjh3QlExdUloQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NDI1MDEzMTQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjkxNzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXFUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrQkliMHZmU2IyR1VVOWlKTFp2aHpsYTBaQ1gxbk42bVNTU1V4a0JqZmo0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyMzE1NzMwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjkxNzY5MzIyXCJ9Igp9"  // PUT your SESSION_ID 


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
