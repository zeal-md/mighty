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


global.devs = "2349013100204" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013100204";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_51_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYyLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRKNEhJU2dyYXF5ZmlUNHV1c2hKWm5oRExZb29hUUtBZ2hXaCsyZkVMeU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVZcHN3T1NKUTItN09XbFRkR21femdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjc4NTA5NzYtZTRiMy00NzRlLThmMzgtYmYwMDFhZDM3MDhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDIyMCxcbiAgICAgIDE1OCxcbiAgICAgIDE3OCxcbiAgICAgIDI0LFxuICAgICAgMTY4LFxuICAgICAgMTY0LFxuICAgICAgNDgsXG4gICAgICA0MyxcbiAgICAgIDIzMSxcbiAgICAgIDQsXG4gICAgICAxNzksXG4gICAgICAwLFxuICAgICAgNzksXG4gICAgICAxMSxcbiAgICAgIDI0OCxcbiAgICAgIDEwNixcbiAgICAgIDI0MyxcbiAgICAgIDEwMixcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICA1MSxcbiAgICAgIDE1MSxcbiAgICAgIDQ3LFxuICAgICAgMTEwLFxuICAgICAgMTI3LFxuICAgICAgOTQsXG4gICAgICAyMzksXG4gICAgICA4MSxcbiAgICAgIDEwNyxcbiAgICAgIDI1MCxcbiAgICAgIDE2NyxcbiAgICAgIDEwMyxcbiAgICAgIDIzOSxcbiAgICAgIDc1LFxuICAgICAgMTgsXG4gICAgICAyMzEsXG4gICAgICAyMzksXG4gICAgICAxODMsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVdKMUE2S1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTMxMDAyMDQ6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MjYzOTQ0MDk2NTg3Njo3NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR1pwUzBRK2RlenRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInViMytiMVAyS1d3U0hLdXJ6MnQ4SG5nZnFPb1RRYjFZNmJ3eTRXckl3UjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUitQSUZWRXVPeVRicmVOSW5pdEtlbEQrQktFQTQ1QXBSeXF4RGMvdTBFZGJqTXJYSDl3Z3hnblNMTFFBcWRYWEJtdE5INWpMWTAySGlOSlNvYkxpQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmJRaEo5V2dzV3QwVTlHSi9ZOTdVUzdKaHNCc01EWVNITjF0dGxrWjNhVzRlQTFJYzVIalNFU0tkS3VvMk5VWUd0OWxUSk0ycHQvbnFZYW8yd1dFQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzEwMDIwNDo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MTE0ODVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "iceking",


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
