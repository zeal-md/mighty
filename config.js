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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_40_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRElueGZ1V0REN2Jtbkt4eS93aHAya3F2RjBvaXJjOGZoeUtwcGdhVzZIRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2OTcyNTU2NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBNkI0NTA5QzJBRDAwQTZCMkQ3NEJDRThBMzY1MTAyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYxNTIyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY5NzI1NTY1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEQ4Q0FGQ0I5MzU0N0ExQzE0QkUxN0IyNThBMURGNzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjE1MjIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpNcE81c29IUzYyNXAzRFNnWG5PVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTUyZGRhZmQtNDU0NC00OTRkLWEwZWYtODQ5ODJhZWU3OWYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMjksXG4gICAgICAxNjIsXG4gICAgICAxNTIsXG4gICAgICAxMTYsXG4gICAgICAzMCxcbiAgICAgIDE4NSxcbiAgICAgIDksXG4gICAgICAzNCxcbiAgICAgIDQ2LFxuICAgICAgMTQ1LFxuICAgICAgOTIsXG4gICAgICA5MSxcbiAgICAgIDExOSxcbiAgICAgIDQ3LFxuICAgICAgMTk1LFxuICAgICAgNDMsXG4gICAgICAxNjcsXG4gICAgICAyMDUsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTU5LFxuICAgICAgOTUsXG4gICAgICAxNTQsXG4gICAgICAxNDQsXG4gICAgICAxNjEsXG4gICAgICAxODUsXG4gICAgICAxNzYsXG4gICAgICAyMDEsXG4gICAgICAxMjksXG4gICAgICAxMTUsXG4gICAgICAxNjcsXG4gICAgICAyMjMsXG4gICAgICA3NCxcbiAgICAgIDc3LFxuICAgICAgMTY3LFxuICAgICAgMzUsXG4gICAgICA1OCxcbiAgICAgIDM3LFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpNQjRKOUpaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTcyNTU2NTY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlawg8J2Wk/CdlorwnZacIPCdlofwnZaa8J2WmPCdlo7wnZaT8J2WivCdlpjwnZaYIPCdlpPwnZaG8J2WkvCdloouLlwiLFxuICAgIFwibGlkXCI6IFwiMTYxMDMxNjk1NDAxMDU2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0wvNGEwRUVLMkN1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJub3RxWm1qV0p3cjM4b2lDWjAvTkg5Y2lmS09QSEErbGpKZWI2MjRvUDE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdGVjcwSGhDeXJRSXRCTmh0NFdzdXZZS3VTVFUrR1Zzd2plaG5MSGlRbTNQMEcyaHlnT1hJZzN0L2l5WHhnUFl6NVBpVllUdVFxMXphcDh1aVFoWER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhXU0UrMHlRb1hEZ25aNVdkRzArRmJCTVd5aWtVQkVscFpqTUd3bVdIU2F3RS9UU0tEVEV5Vy9ZaWtXR3hlUDFWY2xHYWF1SzAvYVgwLzM0MzJLQmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY5NzI1NTY1NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTUyMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQ0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxDRy5qc29uIjogIntcImtleURhdGFcIjpcImFJN0dBQVJZV3lyVno2Tjk5aE9vNnhNK1pjTThteXlkTDQ3OHBkYUZPbUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2OTcxOTI2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjE1MjE4MDgxXCJ9Igp9"  // PUT your SESSION_ID 


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
