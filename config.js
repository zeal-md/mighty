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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237650564445";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237620396732";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_56_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9XU0Y0T0xwTUMzbGxwVXl2K21ON1AyRFJjM2RNR216TmdqZS8wVWdnSEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImw2amFtR3NUUnNhTFpzZk44VlZEWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTYzYzM4YjktYzMxYy00Mzk1LTlmMTUtNzljOWUxY2EwOTY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDIzMSxcbiAgICAgIDIzMSxcbiAgICAgIDE3NSxcbiAgICAgIDE0OCxcbiAgICAgIDEzNyxcbiAgICAgIDc3LFxuICAgICAgMjA4LFxuICAgICAgMjQ5LFxuICAgICAgODUsXG4gICAgICAyMixcbiAgICAgIDIzMyxcbiAgICAgIDgwLFxuICAgICAgODcsXG4gICAgICAyMDMsXG4gICAgICA5NixcbiAgICAgIDI0MSxcbiAgICAgIDEyMSxcbiAgICAgIDU5LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgNzQsXG4gICAgICA0MixcbiAgICAgIDI1LFxuICAgICAgMTUwLFxuICAgICAgMTIyLFxuICAgICAgODUsXG4gICAgICAxNDYsXG4gICAgICAyNDgsXG4gICAgICAxMDcsXG4gICAgICA0MyxcbiAgICAgIDQ3LFxuICAgICAgMTE2LFxuICAgICAgMjEsXG4gICAgICA0NixcbiAgICAgIDI0OSxcbiAgICAgIDc4LFxuICAgICAgMzUsXG4gICAgICAxOTMsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENk1RWEhEMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjIwMzk2NzMyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTY4NjU3OTg4MDA5Mzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYNWswd1FuL0tzdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaVcvb2VuSnZMSkJUbXhJWU0yaGhtNkt1ZTh4TDA2WlB6NWNVUkt4dE1HQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDSXowYkpRRmJtZjFKelNRNzF4OTIyaVd4OEJCdEpUWmNqdEVVZituQjdHNVB2aGJNNEtTRHRMekZSVmgwbG9tMUhoakFsU21PNHZzYkI1UDVFbWxCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwbUt5d0RORUczZXVod1loUXZCTXJsTWxDbVlRMmI4ckdhSlNZTFVFRVpsNlM1OWxhcUpVUUR6b1kzMldXM0NmRGdhdUYxRVptVlJCeXplakRNcDVCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2MjAzOTY3MzI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQwMDE2NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
