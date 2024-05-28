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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923258781715";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_28_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTczLFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNW8vajgweHBJdFVhaDUzdlZocHcrNWlxaUlaUm5aRnR5YnUzZE5nMTY3TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2pORjZCclhRcDJUNnZvUUJrTGhMUVwiLFxuICBcInBob25lSWRcIjogXCJhMGU1NTc5NS1mMGRmLTQxMGItYWRlNC03ZjBlMDFkNWQ0ZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxNzUsXG4gICAgICA4MCxcbiAgICAgIDE2NyxcbiAgICAgIDExOSxcbiAgICAgIDE3LFxuICAgICAgMTc0LFxuICAgICAgMTE4LFxuICAgICAgMjA1LFxuICAgICAgMTUwLFxuICAgICAgNDYsXG4gICAgICA2MyxcbiAgICAgIDksXG4gICAgICAyMTAsXG4gICAgICAxODAsXG4gICAgICAyMCxcbiAgICAgIDk2LFxuICAgICAgMTI1LFxuICAgICAgNzcsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgOTksXG4gICAgICA2OCxcbiAgICAgIDg2LFxuICAgICAgMTk4LFxuICAgICAgNCxcbiAgICAgIDQwLFxuICAgICAgMTM4LFxuICAgICAgOTQsXG4gICAgICA2NyxcbiAgICAgIDExNyxcbiAgICAgIDI4LFxuICAgICAgMTk5LFxuICAgICAgMTUsXG4gICAgICAxOCxcbiAgICAgIDE4OSxcbiAgICAgIDEyNyxcbiAgICAgIDM2LFxuICAgICAgOTIsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFaU1laTDZEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTg3ODE3MTU6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzE3NTczMTI0OTM3MDo3OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbUdrT1VCRUx1bzJMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhIMkJrS1FCVVBLTE5WekljSkg2NHQ0cWMrYUNPeGoxRUluaTRScEZ6M1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaXRlRkVkZ2hHLzdZdUZxNFJxWHQ5RCthTjUvOW1pYzhlMUUzYXo0b29mMGZGVzI2WC9tVTRCN2Nlakt4TjFaazVQWllFdjlldlAyRnVqSEord0llQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNDFodFlzd0ZHQktQcEsrQ3JsL3o4QS83K1ZRTXN5cUIzUVd0U3JvTWYzMTNhNUtiU0lJSEJJTzFDeWJ1d2YvNUNicmJNK0Urd1FmMGlpNHd3aytwZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjU4NzgxNzE1Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkxNzMxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5aSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlpJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2JKRWhjS1l4OW90RXB5YlRkdW15OGIvR0ZVOUF4QzFJUFgybHdJc2VaST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0ODA1MTA3NTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
