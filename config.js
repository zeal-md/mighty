const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\  
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ayodejiayanfeoluwanimi@gmail.com"
global.location="Ologunfe,Awoyaya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2348122441244" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348122441244";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348122441244";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348122441244";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348122441244,2348122441244";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_31_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRRWp4YVQ3bWZHeWo1eW80YzNQbGk3V3E1Z2N5VGN5RGpkNXljbEd5aXRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjI0NDEyNDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQwRjBDNkVCNUZBMEZBMjE2OTkzRTdGNkIwMzA5Mjg2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzM5NjY4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhMXVBTk1XMVJQU2RGNDY5bjdnZ1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQxMzQ2NDJmLTM5NjktNDFjZC1hODNjLWIzYmNkNjNlNjE3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICA1NixcbiAgICAgIDI0NSxcbiAgICAgIDE5OSxcbiAgICAgIDE0MyxcbiAgICAgIDIwMixcbiAgICAgIDAsXG4gICAgICAyMTgsXG4gICAgICA3OCxcbiAgICAgIDIzMyxcbiAgICAgIDIwMSxcbiAgICAgIDE0NixcbiAgICAgIDEsXG4gICAgICAxODQsXG4gICAgICAxNDIsXG4gICAgICAxNDQsXG4gICAgICAxNDQsXG4gICAgICAxNSxcbiAgICAgIDIyNyxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxNDUsXG4gICAgICA5MyxcbiAgICAgIDcsXG4gICAgICAxNjYsXG4gICAgICAyMTAsXG4gICAgICAxNjAsXG4gICAgICAxMTQsXG4gICAgICAxMjUsXG4gICAgICAxNjAsXG4gICAgICAxMjksXG4gICAgICAyMDQsXG4gICAgICAxNixcbiAgICAgIDI4LFxuICAgICAgNjYsXG4gICAgICA2MyxcbiAgICAgIDQyLFxuICAgICAgMTI3LFxuICAgICAgMTc5LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkpHNUszVzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjI0NDEyNDQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5NDgyNDc4MDA2Mjc4OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXkxMjN4eDRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYTJtNnNCRUwrM2diRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBLTnkxY3ZwUFBVMjE5TkZtVkFYTG1XK2dNbjJrTUl4VDRiUnlpcjl1M1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2hRRDRhTEtZY25BbEROOEdQdUZJc1diQU9LdFdhcEs2eDU5K3VYeUpXeHV4SGdXaFBmMXdwQ2VCajhBNndaK2FiSklCN3c2UXVTZmV6TTFKbDEvQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibFRrTTJUd0Q3TmRnbHlUZlFybEFYeFA1K3RSN0RjQXJ5Rk5OTXdQei93WGRsU3RJNkN1UmoxMC92SVUrdkdOWU1LQjVhMDBWODB2OE9YOXh3alF5aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMjQ0MTI0NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTMzOTY2NzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxYSS5qc29uIjogIntcImtleURhdGFcIjpcIjR5QUY5UjhiMnA3OW5ZbzBMUnMvUGhDc2YybnRHdHhYRk5Ta2wwd0diZ3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU5MDYyMjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMzOTY2NzkyNjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ay bot",
  ownername:process.env.OWNER_NAME|| "Ay bot",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
