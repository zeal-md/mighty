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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_50_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODksXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicFhyZEdOS1lxdnZJcjEvVzJtSXhlVXRicFo4VlN2UXFnaEdPN3RxNVJtST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMzLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMzLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX29RNXJkYjVUMW1MZnB5aXdydEZGZ1wiLFxuICBcInBob25lSWRcIjogXCJjYTU5ZDA5NC1hM2I2LTRhYTItYTRiZC02MDhhMjljM2Q0NjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxNTAsXG4gICAgICA4MixcbiAgICAgIDUsXG4gICAgICAxOTgsXG4gICAgICA4OCxcbiAgICAgIDEwMSxcbiAgICAgIDEzNCxcbiAgICAgIDIzMCxcbiAgICAgIDgsXG4gICAgICAxOTgsXG4gICAgICA1NCxcbiAgICAgIDI3LFxuICAgICAgMTc2LFxuICAgICAgNDUsXG4gICAgICAxMTMsXG4gICAgICA1MSxcbiAgICAgIDIwNSxcbiAgICAgIDcsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTY4LFxuICAgICAgNTAsXG4gICAgICA5MSxcbiAgICAgIDE5MixcbiAgICAgIDE3MyxcbiAgICAgIDgwLFxuICAgICAgOTksXG4gICAgICAxMzEsXG4gICAgICAyNDYsXG4gICAgICAxNzgsXG4gICAgICA4NixcbiAgICAgIDE3LFxuICAgICAgMTk1LFxuICAgICAgMjEwLFxuICAgICAgMjQsXG4gICAgICAxMTksXG4gICAgICAxMjMsXG4gICAgICA4MixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlNVjROM01WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc2NzIwNjg6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTI2OTE3ODY0NjY3MTo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeXp1ZXNIRVBYQm03UUdHQjBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhJeUZmVGJLMk1RaTNta21PQWRoSVQ3YjdFTngwTHVHMnllYkc2KzJYVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRlM5MktVOFdkTHptNW14dTVTOEp5U3ZBNWtqYzl5Yy92SE1iMGZhdjR3QVUvRnFTTVBZRmFNMlBndG8vS3RkSEtKTkZFajBHVnBKTjg4MGJialZuQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZkE0S2hSYmR1dnFTbDRCcmpXeU82WWNIQ0IzM2g1amVYY0JQWXF3Mi96U3VQL0lQWENXcXo4TFprcStSdmhCa29KSVZkWjV6SkZpcTdoVk91bWJlaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3NjcyMDY4OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDExNTQ0OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k29promax",
  packname: process.env.PACK_NAME || "k29promax",
  botname : process.env.BOT_NAME  || "k29promax",
  ownername:process.env.OWNER_NAME|| "k29promax",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
