const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Islamabad";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Beast JaTT" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923047726428";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923047726428";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923047726428,923047726428";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_42_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLTnVNRk0yMXlZWjRBblNDekhNL0JIMlgzQnJtd251WVZmSmpSV0t2ZFprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA0NzcyNjQyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNENDMDQwNDUzOEMyOThBNjRFRDAyRTZCNjdCNDM5REFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTY4NTI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0hDVzJZc3VUeE9nOFVQRmZDNGxFd1wiLFxuICBcInBob25lSWRcIjogXCJjZjM1ZmNlMS04MzgxLTQ3NzctODQ3YS1kNWIzZGRkZjE3Y2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTU2LFxuICAgICAgMTgsXG4gICAgICAyMzYsXG4gICAgICAzMSxcbiAgICAgIDI1MixcbiAgICAgIDI0OSxcbiAgICAgIDI0MCxcbiAgICAgIDQ0LFxuICAgICAgODcsXG4gICAgICAyMjksXG4gICAgICA5OCxcbiAgICAgIDEyOSxcbiAgICAgIDIwOCxcbiAgICAgIDMwLFxuICAgICAgMTkxLFxuICAgICAgMTI5LFxuICAgICAgMyxcbiAgICAgIDIxOSxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxNzMsXG4gICAgICAyNSxcbiAgICAgIDIxNixcbiAgICAgIDIyMSxcbiAgICAgIDIxOSxcbiAgICAgIDExMSxcbiAgICAgIDIwNSxcbiAgICAgIDIwNixcbiAgICAgIDg5LFxuICAgICAgMTMyLFxuICAgICAgMTMzLFxuICAgICAgOCxcbiAgICAgIDIzNCxcbiAgICAgIDIwMSxcbiAgICAgIDgsXG4gICAgICA2OSxcbiAgICAgIDgyLFxuICAgICAgNjIsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFSM01EWjEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDc3MjY0Mjg6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCD8J2QqPCdkI/wnZCeIPCdkIHwnZ+O8J2QmCDwnZCB8J2QnvCdkIDwnZCs8J2QkyDwnZCM8J2QmvCdkItp8J2QilwiLFxuICAgIFwibGlkXCI6IFwiNzEwODIyMjg4NDY2MzQ6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZkZ3ZVSEVNZVZ0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuZjkvRjVhZ0hwSUxmYkF5cFB0Zko5TktpVy9Ea2lYMnI2TUZtdWlCWUV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRYcUNBMWtUeTVGWmczOTdKc3JCNTFYZHlRUWtMT0c3UzIrV2lVVTkwQnFIdktodUlNOFdQNCszYnFySVczd24wQlZCZm1WRnRSaHdBR25uUWExUUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRoRGxISktvblhGZWJMVkxRcEkrMXNkTGcxNEFEWFlVQXkyNlltR3ZtNWtBQjZxWk03RnY1SGRubVF5dnZQelQrRTBVTlVxb0gvUWdqWWRXVTA5akFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA0NzcyNjQyODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU2ODUyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUplMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmUwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU0hkNUptcG91cTNWdERrbjdSYWZtbmdpRzVQSmNqNkdTczk4YXQ3dVRmTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI0NDUxNTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1Njg1MjY5MDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BeAsT",
  ownername:process.env.OWNER_NAME|| "BeAsT Maلik",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BeAsT Maلik"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
