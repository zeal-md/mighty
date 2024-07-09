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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInk3NUtFSXdMOHA1NnpadUl4VHF5V3JVY2kwbGpaVStiUldyMlp1WDFFekk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9yRkhZSXRYUWZDNDRaa2hqU0VCR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDQ5NDFhYjEtOTAxMi00OGFkLWE0ODMtM2JiM2IyODhlNTA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDk1LFxuICAgICAgMTU4LFxuICAgICAgMjM0LFxuICAgICAgNjAsXG4gICAgICAyLFxuICAgICAgMTI2LFxuICAgICAgMTg3LFxuICAgICAgMjM0LFxuICAgICAgMTIyLFxuICAgICAgMTMzLFxuICAgICAgMTMzLFxuICAgICAgNDcsXG4gICAgICA2OCxcbiAgICAgIDQxLFxuICAgICAgMjQ0LFxuICAgICAgMzksXG4gICAgICAxNTAsXG4gICAgICAxODUsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA0NyxcbiAgICAgIDExMyxcbiAgICAgIDgsXG4gICAgICAxNDEsXG4gICAgICAyNDgsXG4gICAgICAxOTAsXG4gICAgICA0OCxcbiAgICAgIDUzLFxuICAgICAgMTcsXG4gICAgICAxNDMsXG4gICAgICA5LFxuICAgICAgMTY3LFxuICAgICAgMTE5LFxuICAgICAgNTEsXG4gICAgICAyNTEsXG4gICAgICAxOTgsXG4gICAgICA2NSxcbiAgICAgIDExNSxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxV1FEN1c4UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxODAwMTU2OTo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzcxOTc0MzY2ODM0NDo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLL3dsK0lERUltcnRiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNrb1lWYml5MSsrUzB2alM5WHhjd1JaanV0cDBZUGJOZmxCOTRRVWhNQk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiekNYa1RBQmJBV1BiVlREOUdtWUNtbE5TNjkwTUp3Q1lBbE5TbVIvcFZwWW5TWXhaUWhvQzVrZzBvbnBGSlpHZk9KeDdWM1EzZ1FtbDdhQVRIem14QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid3k5SVNGaTE3VGpPSitCMXRyT1ZrbDlORXcwRVg3MThvM1dvVnNSNkhzWjV5bmhXbUViaHVTM21Nd2FLZDJBdTJMNWxIa2VxcDVCZUdnWmxCMnloREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxODAwMTU2OTo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTM4NTA4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
