const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
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
global.caption = process.env.CAPTION || global.caption || "we are family" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255742695219";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_45_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS2Y5UHdrMzZTeEx6KzdhVmxKNlVrRW1uMFNkQ0RkTjBHMEtvbStwcS9YYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1FTcWpyMGtUMDZMYVhOR3BsZTBxZ1wiLFxuICBcInBob25lSWRcIjogXCI0Y2FiNTI2OS1jY2Q5LTQyZmQtYTM1YS1kNjA4OTdlMTVlMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjU0LFxuICAgICAgMTYzLFxuICAgICAgMjEsXG4gICAgICAxNzQsXG4gICAgICAxNDgsXG4gICAgICA1OSxcbiAgICAgIDIwMSxcbiAgICAgIDUzLFxuICAgICAgMjA0LFxuICAgICAgODgsXG4gICAgICAyNDMsXG4gICAgICAyNTEsXG4gICAgICAyNDEsXG4gICAgICAxNTUsXG4gICAgICAyMSxcbiAgICAgIDYzLFxuICAgICAgMTY5LFxuICAgICAgMjA1LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICA3NCxcbiAgICAgIDE4MSxcbiAgICAgIDE1NCxcbiAgICAgIDIxMSxcbiAgICAgIDEzNixcbiAgICAgIDEwNyxcbiAgICAgIDQ0LFxuICAgICAgMTA4LFxuICAgICAgOTcsXG4gICAgICA0OCxcbiAgICAgIDE0NSxcbiAgICAgIDEwOSxcbiAgICAgIDk5LFxuICAgICAgMjQ2LFxuICAgICAgMTU3LFxuICAgICAgMTU2LFxuICAgICAgMjIsXG4gICAgICAxNTAsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkJBRlJKMURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0MjY5NTIxOTo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1NTgyNzkzNDAyNDM6NTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RLMHRNRkVMdll6clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyM0pMQm1PTGRxc2JjTkVrZ1phWk4yNU51ajRBRTNnVGZDQXAyK0VKV3pZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlYaGJmYkE3azQ0dTFRd1lZSjVVanoxUG1jTHVWZHFtVFpldWcwSFlucXZ6Vm5wMmNneWx4bFRJdGI4ODU1VjlyeGhYa2VSMkhKNW1oRjc2bk1hVURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRteXRQM1lQcEJucG9rc3lwWWFxWVVObGZqeFZCaTBsTVRleHB2Q2x3REJkVWNDSVkvSU1SeG9ZQjJkMVJEaHF6MDBVdk9sNnJwcFdhb0x5bElDWkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0MjY5NTIxOTo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTUzOTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDBuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMG4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3YzVHeUwybFZYbk9GUjV3VmFEdVZLSlBVcFBINGUwQlBhWmtKS3RQbW1FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MTc1OTM5NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
