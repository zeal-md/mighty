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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349025220287";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_44_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLYXBTMFRVSUxRMHVxaWdMN2JITzk2Vm5MTU5nWXM2V1FSVjF1c0haMmQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3dlVjX0NfMFJOSzY4c01aSW1DZkdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzYjVhNDQ0LWYzZTEtNGE5Zi1iNTMzLTc0ZGM0MDE2ODJjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDEzNCxcbiAgICAgIDgzLFxuICAgICAgMjE5LFxuICAgICAgMTYyLFxuICAgICAgMjI0LFxuICAgICAgMjE4LFxuICAgICAgODMsXG4gICAgICAxNzgsXG4gICAgICA4MixcbiAgICAgIDE5NyxcbiAgICAgIDIwMyxcbiAgICAgIDIwMCxcbiAgICAgIDEwMSxcbiAgICAgIDkzLFxuICAgICAgMjE5LFxuICAgICAgMTY1LFxuICAgICAgMTk4LFxuICAgICAgMTg4LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDIwNCxcbiAgICAgIDE3MixcbiAgICAgIDIzOSxcbiAgICAgIDI5LFxuICAgICAgNDksXG4gICAgICAxOCxcbiAgICAgIDIzMyxcbiAgICAgIDkyLFxuICAgICAgMTA2LFxuICAgICAgMTQ3LFxuICAgICAgNTMsXG4gICAgICAxNTAsXG4gICAgICAyMTcsXG4gICAgICAxNTYsXG4gICAgICAxNzMsXG4gICAgICAyNDQsXG4gICAgICAxNixcbiAgICAgIDAsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFFEVEtMNTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjUyMjAyODc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg5NTIwMDI4OTA5NTk3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmVWcnNnR0VKcnZxN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPRHFHY3EyWndzbmcyNGZ3aldjbjlnZExMUWZ6R2hFVHV0Rzc2WnRRS3l3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRZb2V2TllmWEhhL1Q4OUNsMU1CdS9CM2Z6RWFSankxa3FET2NFc3JMVHVjSzFOOXNHUy9mekI2KytzREh4QU9DQ1RLbnBLQkFyNVRheGwzWldtY0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVTTjAydEpGZERQNmZhMUhvZmtsZk9lNGZwU1VEZlRFNkJsTGpKZ3l1ekd5dENpTEpnYjFYeDk2ZFIzSU9mUWdMc3VabjdoeUtjWm5laXdJdlprQ0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjUyMjAyODc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI4NjIzOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
