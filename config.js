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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM21hclhLMDJNdDhnL3d4dUJEZTV2QWY4aWNtVkFPdjNCQUpVNzdNb1dwdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVUlaVVhPZTVRUlN0QWJwN24zYjBqZ1wiLFxuICBcInBob25lSWRcIjogXCJlYjgwZTgwNS1lZWEwLTQwODQtOGUxNC05MTU4Zjg0MWM3OWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMTk5LFxuICAgICAgMzUsXG4gICAgICAxMTUsXG4gICAgICAxNDgsXG4gICAgICA3OCxcbiAgICAgIDI0NSxcbiAgICAgIDIwMSxcbiAgICAgIDYzLFxuICAgICAgMTUsXG4gICAgICA3MixcbiAgICAgIDEyNixcbiAgICAgIDEwOCxcbiAgICAgIDMzLFxuICAgICAgMTc4LFxuICAgICAgMTI0LFxuICAgICAgMzMsXG4gICAgICA5NyxcbiAgICAgIDEwMSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE1LFxuICAgICAgMjcsXG4gICAgICA1NSxcbiAgICAgIDIwMSxcbiAgICAgIDEzMyxcbiAgICAgIDIxMSxcbiAgICAgIDg5LFxuICAgICAgMTYxLFxuICAgICAgMzAsXG4gICAgICAyMTUsXG4gICAgICAyMjUsXG4gICAgICAxMjQsXG4gICAgICAyMjcsXG4gICAgICAxMTUsXG4gICAgICAxNjcsXG4gICAgICAxNzgsXG4gICAgICAyNCxcbiAgICAgIDc4LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkFSN1BKU1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY2NzE4NzUwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHVsYWtzaGFuYVwiLFxuICAgIFwibGlkXCI6IFwiMjYwMjQ1MzcyODAxMTczOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042RDVzOEpFTFcwb2JJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibHVjRUxueGY0WVIveFVzbzM1Q2MyUW1IR0VtWEl5UUZzOUtMblN4L1FtUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzQ1U4TmYrblE0d3lrQk03Ni9jZ2RLbElBeUlETGRIT3NtS2o4dk54bWRMMjdkZDhpUkM5dTQraDBpOTh4TTdCMC9kQ3JhMkxRUnU0NzBaTDJUQXlnQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIYy93eksxZWx0ZlRQeVlLb05mZkVFMEkwWUhGVjU1RlpFT2htM25EZ2pJNlVuLzE0MzZaOElFUjZQZGFaQ2YrbnI0WnFTL0diOHRmSnRjZ0dYSTBBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NjcxODc1MDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MDE3NzE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlhuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWG4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrTTBWdEt4Wi80V25zR0FrVjFFNUhVUE03bUxGYVhqa0xEOXQyNkY3aHVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1ODMyNjU3NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTg1NzgwNjUxNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
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
