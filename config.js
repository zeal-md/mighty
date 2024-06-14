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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347070349998";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_20_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidFBoalZRbzVWb2lScDY2RzRhS3JPRzJ1Wmx3ZFdkYWExL0k2YW1zcDIvOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWlfbXdjVjVUT2FFb1B0WmVQbktNZ1wiLFxuICBcInBob25lSWRcIjogXCI3YjhmNjk5Ni1lZDU4LTRkYzktYTQ3NS1hM2FlNjhmOTc3YTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjIwLFxuICAgICAgMjUwLFxuICAgICAgMTE0LFxuICAgICAgMjQyLFxuICAgICAgMTcxLFxuICAgICAgMTA4LFxuICAgICAgMzEsXG4gICAgICAxNjEsXG4gICAgICAxMzgsXG4gICAgICA4NCxcbiAgICAgIDE1OCxcbiAgICAgIDE0NyxcbiAgICAgIDEzNixcbiAgICAgIDIyNCxcbiAgICAgIDE0NixcbiAgICAgIDE5NixcbiAgICAgIDE0MixcbiAgICAgIDEyOSxcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDIzMSxcbiAgICAgIDEsXG4gICAgICAxNDQsXG4gICAgICA0OCxcbiAgICAgIDIxOSxcbiAgICAgIDE0NCxcbiAgICAgIDEwOSxcbiAgICAgIDIxMyxcbiAgICAgIDQsXG4gICAgICA4LFxuICAgICAgMTAwLFxuICAgICAgMjA1LFxuICAgICAgMjI3LFxuICAgICAgNzksXG4gICAgICA5NyxcbiAgICAgIDQ0LFxuICAgICAgMTkzLFxuICAgICAgNDksXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyUURFQ1c1VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA3MDM0OTk5ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NjgxNTkyNjMxNzExNzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6WS9vNEZFUEhMc3JNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYytiRG1leXA1eUovenQ3bmpQUmNIZGFHTnh0d2R0cGxWSVBGZGpwWmZtaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCRGtJb1RoamN4QVVqTHp0QXovbng3Z2dmREMrUlo0ZWdWQlVSVlc5ejgrNmF0d24yTmkwdzVteVMzVkpTZHVXQWFVaEQ2TzVDdzVHb0k0UDdmcjNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMSFF0MDZLS3NyRmpJVzNzS2NvSGhXWUtPVlovZWlIZkNQcVZMLzZZS1BJTzFBa3FrZUFpaEtzeEptMDhGK0Yyai9UMDN6bGlHaHhhdmVQZ2dXSUZDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDcwMzQ5OTk4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Mzk2NDA2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
