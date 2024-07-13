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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ AK" 


global.devs = "92097982747" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923097982747";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_05_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMjA3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJUMTJaR3lpN2VLVDF6Umo4ZzllelEyOGdVTkUzSzgrbnJKcndHd050YzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk3OTgyNzQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMjQ3ODFBRjAwNDQzNDRDMkY5QTc2QzZDRDk2QzJGNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NzU5NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDctcDVPbGNRbzZKMVp2aXVJTFZaZ1wiLFxuICBcInBob25lSWRcIjogXCI0MjJhZjUwYy0yM2I3LTQxODAtYmUxZC0wZjRkOTE3ODg5ZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyMDUsXG4gICAgICA1NyxcbiAgICAgIDIwMyxcbiAgICAgIDE1OCxcbiAgICAgIDIxOCxcbiAgICAgIDIzMCxcbiAgICAgIDI4LFxuICAgICAgNDUsXG4gICAgICAzMSxcbiAgICAgIDI0LFxuICAgICAgOTgsXG4gICAgICAxNjgsXG4gICAgICAyMixcbiAgICAgIDExMixcbiAgICAgIDYwLFxuICAgICAgNzYsXG4gICAgICA0LFxuICAgICAgMjI3LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyLFxuICAgICAgMTE1LFxuICAgICAgMTU1LFxuICAgICAgMjI5LFxuICAgICAgMTczLFxuICAgICAgMTM4LFxuICAgICAgMTUxLFxuICAgICAgMTcxLFxuICAgICAgMjExLFxuICAgICAgMTgsXG4gICAgICAxMDIsXG4gICAgICA3LFxuICAgICAgOTEsXG4gICAgICAyNDIsXG4gICAgICAxNTYsXG4gICAgICAxNjgsXG4gICAgICAyMDcsXG4gICAgICAyMTMsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFFGVEtGNkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5Nzk4Mjc0Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQUtcIixcbiAgICBcImxpZFwiOiBcIjI3NDg1NjU0OTU4ODk5NTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01yOTJLVURFS2IzeWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUlnQkFiNDJPajRvd2FhaEI1OFo1MUlrRm84aTJhenVRVEVtalM0QlhuUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMK1MvaXg4OG9GT2Qyc0hMb3lsVENDNEdRQm56bHVsMUR6c3NyNk9SV1V1UFYySml0UDMwT0hNNkZLWTJrTENDOU96VnI4SW1EQmhQNEFsNXZjNEVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxdE9sTG9FbnhuMTBabncxY29lNkZvcE1NQXRldHBneEhiK2ZMOUc4MWpSSGszbGlUMEdaVGhCdm1rL09yMFBOVURlRXpzemh6a1ExbEdVWnBtaC9BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTc5ODI3NDc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODc1OTQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREhmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFESGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEdkRTOUFtSmR4dHVQRkNOeG55cCtHWkEwMjJDa1R6RDhPeDVpQW1yakRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4NDM1ODg1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODc1OTQ4OTM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "AK" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "AK",
  ownername:process.env.OWNER_NAME|| "ASAD KHALID",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "AK"  ).toUpperCase(),



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
