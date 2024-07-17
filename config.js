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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙃𝙀𝙈𝙄" 


global.devs = "2348063961342" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348063961342";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/94c5a65a45e7a5afec68c.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_34_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFLM1VjQVUwTDFxTkMxUDR5aG11a2ZwOUZUaURxK2lUbUk5OVVUM2ZtZGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg0dWdkVmh5UWF5YVd5OUpRMjFaN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzg3MWM4MTEtYTQ5Yy00MGNhLWIyYzMtNmFkYzllY2IyZmI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTMwLFxuICAgICAgODAsXG4gICAgICAxNTksXG4gICAgICA5NixcbiAgICAgIDI0MyxcbiAgICAgIDE3NCxcbiAgICAgIDQ2LFxuICAgICAgMTQ2LFxuICAgICAgMzcsXG4gICAgICAxMjUsXG4gICAgICA2NixcbiAgICAgIDE3MyxcbiAgICAgIDE5NSxcbiAgICAgIDQyLFxuICAgICAgMjEwLFxuICAgICAgNTEsXG4gICAgICA5OCxcbiAgICAgIDU4LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDEwMixcbiAgICAgIDExOSxcbiAgICAgIDY2LFxuICAgICAgMTMzLFxuICAgICAgNjQsXG4gICAgICAxMTgsXG4gICAgICAyNTQsXG4gICAgICAxMjgsXG4gICAgICAxNjUsXG4gICAgICAyMTUsXG4gICAgICAxMDksXG4gICAgICA0NSxcbiAgICAgIDIyMyxcbiAgICAgIDIyNSxcbiAgICAgIDE5NyxcbiAgICAgIDE5OSxcbiAgICAgIDExNyxcbiAgICAgIDE4NixcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFcwNU5ZQ0VPTFY0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxcjBkVFFjY2hUeDlUdVRuZExKU0dXTUd6OG83RnJrOW1xcm9FZldOZkZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlMzQlRYZUdCcXNSOEkrNUsxZm5aMldzVDB0RWJoUjFUWnhLYlVGb2hKRHlKYi9FcTRKWHVKcjRQYkVJSUVXWC94S05ISWd4d24yamlYWkp5MnNNNkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZOYXY4dkYrZkZpRmNRUmpJdW1laUo3ekp3Zkxoejc0QUxJYzJtWkd1V3M2aW04MHIrd0JmQlRjelJkOTZTQ01SK0lFTlMvT0s2MDdKaC9VditXUkJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2Mzk2MTM0Mjo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1Njk0NTI5MjEyNjQ5OjY3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2Mzk2MTM0Mjo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNDg0ODZcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙃𝙀𝙈𝙄G̶̛̱͙͖̟̙̔̇̎̓̔r̸̛̛̹̫̥̭͔̹̝̔͒̔̊̓ę̶̙̯̊̈́̈́̄͌̃ÿ̴̡̯̦̰́͌̏̆́̆̌̂』```", //
 
  author : process.env.PACK_AUTHER|| "𝙆𝙃𝙀𝙈𝙄",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙆𝙃𝙀𝙈𝙄-𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "𝙆𝙃𝙀𝙈𝙄",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙆𝙃𝙀𝙈𝙄"  ).toUpperCase(),



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
