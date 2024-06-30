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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_37_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDk2LFxuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2pCMkRXQWxCVVJPZm5HWFF4ZmlHakxTVXpJSy9ZV042UWszZTlOSHRZND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3NjAyNjM2MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJBQjUwNkNBRjFFQjgzNEZGNTYyNjA0QzI0NjU2Njk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTcwNDI1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJib2JRNEhUeFNTNmlhRnAyRjRpQkd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzZmM5NmU0LWUxYzItNDhlNS1iZGYzLTgzYzJjMjEzN2VjNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICA2MyxcbiAgICAgIDc1LFxuICAgICAgMjQyLFxuICAgICAgMTQwLFxuICAgICAgMTUsXG4gICAgICAxNzMsXG4gICAgICAzMyxcbiAgICAgIDE3NSxcbiAgICAgIDE1LFxuICAgICAgMTM0LFxuICAgICAgMTA3LFxuICAgICAgMTUwLFxuICAgICAgNTIsXG4gICAgICA1NixcbiAgICAgIDcsXG4gICAgICAxNTQsXG4gICAgICAzMyxcbiAgICAgIDcwLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxODcsXG4gICAgICAxOTUsXG4gICAgICAxNjUsXG4gICAgICA2MCxcbiAgICAgIDE1MixcbiAgICAgIDIzNixcbiAgICAgIDEwNCxcbiAgICAgIDYsXG4gICAgICAxMixcbiAgICAgIDE4MSxcbiAgICAgIDg2LFxuICAgICAgMTQsXG4gICAgICAxMTUsXG4gICAgICAxMTgsXG4gICAgICAxMTQsXG4gICAgICA2MSxcbiAgICAgIDI5LFxuICAgICAgMTI1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0tUU1FDOVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc2MDI2MzYzMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44Kk44OQ44Op44OS44OeLvCdkIHwnZCi8J2QnPCdkKjwnZCm8J2QmvCdkKvwnZCuIPCdkJLwnZCh8J2QqPCdkKDwnZCu8J2Qp/CdkJrEq1wiLFxuICAgIFwibGlkXCI6IFwiODM5NjY3Nzg0MDkxNTk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV0V2OXNIRUxtMWdyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdmZFQwUW53WjFNOGk4VlNyeVBzWXhCNExZWCtXTjZQYmFoUHRTbEo2RVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNENFMHowai9YOG9CYWNwWnAwNStaYUZ4b1J1ck5NaVMvdEhlSWlKUmRTN3hISWxmMHVXa1ArVGFDU2ZvR0tiRWZOcm40NE1rbzVXY0hyTHA3aW9FRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTE0vRXppMTZlUnc5R2EyY0M0WE52SlljZTdVRnZnM0hHa1hiUk8yRnRNV3c1ZDByOFhucmV2N2pYRWN4U2ZqWC9EQndyTGJCQ1dwSDNWMjFVZjlXanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzYwMjYzNjMxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3MDQyNTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNMGdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0wZy5qc29uIjogIntcImtleURhdGFcIjpcIkVZWkdxWGgvOEVHQWdJYUE0MFE4YTNMQWZVNWtHTWIwQ0xncVd5UEFzK2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MDkyMTc4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzA0MjU2NDQ0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "?",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bicomaru Shogunaī",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Bicom",


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
