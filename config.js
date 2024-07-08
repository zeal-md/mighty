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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnWjJOenNVUmtRZzk3b3BtV0xzaHhXV0dZeEwwTUw4OHpHaWtqbHF4bHM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjI4NDQ3NzAwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjVCRjc3M0VCMjQxRkEwMDI0MUFEMjNDOUY2OEFFNDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDY3MTE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm52UXdDVWNRUlFTZEx4OEZfNEwxNlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGM4OTkzNDYtNTM1YS00NjNjLTkzNTMtZGM1OGUzN2ViYjNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDEwMyxcbiAgICAgIDQwLFxuICAgICAgMTUwLFxuICAgICAgMTM0LFxuICAgICAgMjI4LFxuICAgICAgMjQ2LFxuICAgICAgMTUzLFxuICAgICAgMTIwLFxuICAgICAgODgsXG4gICAgICAyMzAsXG4gICAgICAyMjEsXG4gICAgICAyMixcbiAgICAgIDIwMCxcbiAgICAgIDE4OSxcbiAgICAgIDI0NCxcbiAgICAgIDU4LFxuICAgICAgMTY1LFxuICAgICAgMTg1LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMjQ2LFxuICAgICAgODUsXG4gICAgICAxMjIsXG4gICAgICAxODAsXG4gICAgICA5OCxcbiAgICAgIDc0LFxuICAgICAgMTY2LFxuICAgICAgMjMwLFxuICAgICAgMTEyLFxuICAgICAgMTYyLFxuICAgICAgMjAxLFxuICAgICAgMTM0LFxuICAgICAgMjAyLFxuICAgICAgMTg4LFxuICAgICAgMjEzLFxuICAgICAgMTg0LFxuICAgICAgMTg3LFxuICAgICAgODMsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTRYWEhCR1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjI4NDQ3NzAwOTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTE2MjcwMzkwOTA5Mjo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfmI7wn5mPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHo1ODdNR0VLZjlzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXZTEvSFZ3VUJKNUc5RjFTV2FkYmZwMUZ1SW5nSlVLZW9sbDg3RkxTU0ZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxXQXFDc3hyTHBmT0lwV0pkL2gwYXZRaU55T3lnbzErRkRFOFF2QjBQMWpKRE9xK21lczFLSThXYjYxWWRQK01PNXNRbG9NZVpMNG0zbDk0UFdmSUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjE2NEcvK0pUc2xBQnBQanRjT1dKc0l6L1pTSGV6NHBSRktIMDZsbkdXN2tFKzBTdXhVY1ZSMjY5VjFvak9GVExEV3BqWEFvbGNpcFZPS0JHSklHdUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjI4NDQ3NzAwOTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY3MTE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSW5tXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJbm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTSlUrUDk0VzEya2ZSU0pnNldVWmYvSUF0TTJ0dlVIWmdrTjdnTzU5VVBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTk0NjcyNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQ2NzExNTE5NFwifSIKfQ=="  // PUT your SESSION_ID 


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
