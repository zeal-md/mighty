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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : 075265733




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  //  SUHAIL_12_34_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYxLFxuICAgICAgICA5NyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIms5Y1hsTkNvRzRjME1nbmphanp1NGo0WW1JczJOZ3JtbW83Q1hWTjh5VDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdQRzAwdkJDUVp5bHBvR3p5WEkza0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDZiY2E4NjAtNDZkNy00MjhkLTgyMmYtZTJkNWEyYTc3NTljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjEsXG4gICAgICAxMjcsXG4gICAgICAyNDUsXG4gICAgICAxMzksXG4gICAgICAzOCxcbiAgICAgIDQ4LFxuICAgICAgMTM3LFxuICAgICAgNzAsXG4gICAgICA3NCxcbiAgICAgIDEzMyxcbiAgICAgIDIxNyxcbiAgICAgIDc0LFxuICAgICAgMTY1LFxuICAgICAgMjAzLFxuICAgICAgMTQ3LFxuICAgICAgMjUsXG4gICAgICA5NixcbiAgICAgIDIxOSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxMDQsXG4gICAgICA3NyxcbiAgICAgIDEyNixcbiAgICAgIDIxOCxcbiAgICAgIDE4NSxcbiAgICAgIDUxLFxuICAgICAgMTE0LFxuICAgICAgMTY3LFxuICAgICAgMjAzLFxuICAgICAgMjM4LFxuICAgICAgNjEsXG4gICAgICAxMDYsXG4gICAgICAyNDIsXG4gICAgICAxNCxcbiAgICAgIDIxMCxcbiAgICAgIDIyMixcbiAgICAgIDg3LFxuICAgICAgNjUsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVzJNUEVKTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMyNzUyNjU3MzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIml0el9CaWxs4oCifuKAokdhdOKCrFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMTY0MzU4NTgyNDg4OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmoydnJvRUVOQ2ZrYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlN0ZqREtsOHdHMjB0MEVQOXNHMDNvVVNXUHlzeWZrU3NnZnJ0blN0bVh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxuRGN2bjQ4ZWc2TGFBUTlWbUVMUnVMdVJoam1ITzV5U0MzTEJCc21QNVBGVEZzMklnUVFIMVpwTmEraFpnMmRseCttTVhtWisvcExDMmNhVUg0eUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpLT3Z6a0tzVlRCQTFuK1NPNHFSYUQ5UXpnaW5QcEl3ZEJ4ZzdFa05ETzNyVjB0WisvaExEblEzUUl1T0VRclFuOGNkSXd1SDlkbCtHdnJGZXhsUkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMjc1MjY1NzMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4NTAwNjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9


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
