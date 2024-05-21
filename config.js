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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255685555307";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255685555307,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_07_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAzMSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHYwMDR0eUJreUFnU3RCcWplaGdKaHJiVFJpMUdOY0NIVkM4OGhWajR1ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2ODU1NTUzMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGRUExOUVGQjYxNDQ0QzU2MTJGODNCNkY2OEFEOUFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjMxNDg1MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhRUdLaGV5VFF4U3M4Q3ZRVUYzMFZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4NTNjNmY3LWZkYzktNDUxMC1iMzk0LTY5YjA3NjA1ODhkZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxMjIsXG4gICAgICAxNSxcbiAgICAgIDE5OCxcbiAgICAgIDExNixcbiAgICAgIDEwMyxcbiAgICAgIDI0OCxcbiAgICAgIDE3LFxuICAgICAgMjI4LFxuICAgICAgMTc1LFxuICAgICAgMTcyLFxuICAgICAgODYsXG4gICAgICAyMTMsXG4gICAgICAxODQsXG4gICAgICAxMTcsXG4gICAgICA0NCxcbiAgICAgIDE1MyxcbiAgICAgIDg2LFxuICAgICAgMzMsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMjMzLFxuICAgICAgMTA2LFxuICAgICAgNCxcbiAgICAgIDE1OSxcbiAgICAgIDEyNixcbiAgICAgIDY0LFxuICAgICAgMjQ4LFxuICAgICAgNDMsXG4gICAgICAyMjAsXG4gICAgICAxMTcsXG4gICAgICA3MixcbiAgICAgIDEzOSxcbiAgICAgIDM3LFxuICAgICAgMTQ4LFxuICAgICAgNzQsXG4gICAgICAyMjAsXG4gICAgICAxNTQsXG4gICAgICA1MyxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBaNkVaTUQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODU1NTUzMDc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNDg1MzA3ODkyMTM1MjoyNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJtYXN0ZXIgZmFyIGJvefCfkYrwn6SeXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmpoZ1pBQkVOdkZzN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKN0laVldGOVMrMFJ0clNhQjY1RFMvamlYZ1ZJUXFVN0lWZjhiamwxdzE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktpMUFJNXFsYk9KRkREQUlsU1oxZi9hUFRUR3NsMzhZSlhTaUViNkEzLzIydFFHYWZiRVIzVk5UZDJWTG1BMDU0czA1TDMxMTllYzg1Zy9LOXA5d0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxnRmpaMnRKbituOXNvUCtpSlpQWVJ0cXN2S1g1UnA1YUdUb2dxa0ozSTZqbXRVeGJEYUlSRVVpQW5SVzJzekhsanRHZjlyR3B4amRIL1ExOUtUbERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY4NTU1NTMwNzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYzMTQ4NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFbTVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVtNS5qc29uIjogIntcImtleURhdGFcIjpcIndyZEhuZlhJR2RORCt1bGZuSFZrOXUrVzc4U1d4OHk2UTN6d0IyZkM5b3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzAyMDE4NzEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
