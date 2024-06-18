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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlaZkxNZCtGN2dESFc4Z2JDRk1RaW5DSjZ1MGE4YmxTbnJ5dWdwZEtVSWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzkyOTYwOTUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzQ2MDUxMUNBOTdDMDM3RDRGOEY4OEY2MTk2NDc0M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3MTk0MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkU4ODh1MmxRY092LTZfMndiWTkyd1wiLFxuICBcInBob25lSWRcIjogXCI0MDRiMWNmOS0zNjVjLTQ2MDgtOGRiYy1jNjljOTc3MDlkMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAyMjQsXG4gICAgICAxMzgsXG4gICAgICAyMDUsXG4gICAgICA0NSxcbiAgICAgIDIxMSxcbiAgICAgIDQ1LFxuICAgICAgMTE2LFxuICAgICAgNjYsXG4gICAgICAyNTAsXG4gICAgICA1NixcbiAgICAgIDI0MCxcbiAgICAgIDk4LFxuICAgICAgMTA2LFxuICAgICAgMTUxLFxuICAgICAgNjQsXG4gICAgICA1MSxcbiAgICAgIDk2LFxuICAgICAgMjAyLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAxMDgsXG4gICAgICAzMixcbiAgICAgIDY4LFxuICAgICAgMzksXG4gICAgICAxMixcbiAgICAgIDE0OSxcbiAgICAgIDI1LFxuICAgICAgMTg4LFxuICAgICAgMTgzLFxuICAgICAgMTk3LFxuICAgICAgMTczLFxuICAgICAgMTA1LFxuICAgICAgOTEsXG4gICAgICAxNDUsXG4gICAgICAyMjgsXG4gICAgICAxNDgsXG4gICAgICAyMzgsXG4gICAgICAyMjQsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkJMVFlNN1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5Mjk2MDk1MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQFN1c3BlY3RlZCByaWNoIGtpZFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMjU0NTE5MzgyMDg2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW1UaDhjRkVMV254ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWam96WVlyNjRtWnE4V0kxT1NRZGFuRUpwQmlzUlFrY3hkWUJZYldGRW5NPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm96Y3NFbSttWDIzbExhUmdjYjFtM2FBV3IxWGQzdnhSZ3pxd3Q5S1FHTVJscU5LeDBIVWxRUVAzdDVyR21JcVVwSFhBbnpCd05wZVRSTldNVUVtT0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjh0Y25vcVdJZ2g5RzFoay9BOXZGTEdGSldDVVAvTW1KcnJzTlQ0VkNkVHZnanRhTTVhelliaXVoRStPek1MYno3cEFxeFc2c0JtOTJHcGVDTmxRYkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5Mjk2MDk1MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcxOTQxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpDT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkNPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQXJ6bk8zZjhITEhLU2NKaUhqOGtKMTYwejBNWDFaRzBvTjZSZWNoalBtOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDkxMTkyMjY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3MTk0MjA4MjNcIn0iCn0="  // PUT your SESSION_ID 


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
