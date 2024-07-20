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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923194745038";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_14_19_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY1JxbjJTR21Gb0lGdU5FT0ZTWFpONUZCTTUzejJwTlhOTkszWk5tc2orZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNWl5WmF0bXNUbEtqc0FFN1A4TFBCZ1wiLFxuICBcInBob25lSWRcIjogXCIxNTY3OTViYi0zMDIwLTRlNDAtOGI5My05ZWQ5NGFmNTNmMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxODAsXG4gICAgICAyNyxcbiAgICAgIDIzMSxcbiAgICAgIDExLFxuICAgICAgMTEyLFxuICAgICAgNDQsXG4gICAgICAyMTYsXG4gICAgICAxMzksXG4gICAgICAxMTQsXG4gICAgICA5MCxcbiAgICAgIDE1OSxcbiAgICAgIDIwMixcbiAgICAgIDE0OSxcbiAgICAgIDIxMixcbiAgICAgIDExOCxcbiAgICAgIDE1OCxcbiAgICAgIDQ1LFxuICAgICAgMjQyLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjQ4LFxuICAgICAgMTEsXG4gICAgICAxNDMsXG4gICAgICAyNSxcbiAgICAgIDk5LFxuICAgICAgMTg5LFxuICAgICAgMTE4LFxuICAgICAgMjUwLFxuICAgICAgMjgsXG4gICAgICAxMDcsXG4gICAgICA5LFxuICAgICAgNzEsXG4gICAgICA1MixcbiAgICAgIDIwNixcbiAgICAgIDYwLFxuICAgICAgMjQ5LFxuICAgICAgMzYsXG4gICAgICAxMzEsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRk5GTUNKUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk0NzQ1MDM4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDkcOF8JOGqSBMT0ZFUiDwk4aqXFxuIOGsieGtsOGugeGks1xcbiDhrInhrbDhroHhpLMgXFxu4ayJ4a2w4a6B4aSzXFxuIOGsieGtsOGugeGks1xcbiDhrInhrbDhroHhpLMgXFxu4ayJ4a2w4a6B4aSzIFxcbuGsieGtsOGugeGks1xcbiDhrInhrbDhroHhpLMgXFxu4ayJ4a2w4a6B4aSzXCIsXG4gICAgXCJsaWRcIjogXCI1MzQxNjk3ODA3NTY5ODo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0puSTFNZ0RFT2lPNzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRUZucXhFVkRFYmZwQUFMVzNEQ3pRa25ZakVOVmNBQThmcVJXcWUycXQxYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCbDlaS2lDODRsV1grb0hySk4xbHY2MTJJMVlDZmlRRFhNNmcvUy85dk1MSk9HSjAyL2MvMTIzc0FiejA1Z1UvT3dRZUlseXVtMVdncjNaVy9KZENCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzY3h6dlpsYVR5cHlzakRrVVJEaGErSXVHYllKSVl3MWw0L1dRMC9TOStGUldxOWl4OThxRno1YXJLSkdpbFcwT2lMNEZUWTErd05HeUtwSEdvSGVEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTQ3NDUwMzg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDg1MTY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2tKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDa0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsalUvUkhvVE5Kdi9QU0g2TXNwdGYyTXRoL2pYcGdudHV4Qk1CK1V4WDlBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1NzY4NjgwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDY2NDA0Mjg3XCJ9Igp9


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
