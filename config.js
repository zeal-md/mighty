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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757106395";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_03_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRNck1pSHRid1pJSXdTTTNRWm9ndDk5MkE4SjNsTStNQXdrd0NDR3BaVFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpaQnliOEhCU1ZPZlM5cVd4QnROZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjc5ODcwODktYmQxMS00MjdjLWFjOTEtMGQ2YTQyYzczN2ZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDg0LFxuICAgICAgNTQsXG4gICAgICAyMzMsXG4gICAgICA3MCxcbiAgICAgIDIyMyxcbiAgICAgIDE1NixcbiAgICAgIDE2LFxuICAgICAgNjIsXG4gICAgICAxMDgsXG4gICAgICAyMjEsXG4gICAgICA2OSxcbiAgICAgIDIxOSxcbiAgICAgIDIxMixcbiAgICAgIDIyNixcbiAgICAgIDE4NSxcbiAgICAgIDEzLFxuICAgICAgMTAyLFxuICAgICAgMTEsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTg5LFxuICAgICAgMjUsXG4gICAgICA0LFxuICAgICAgMTQ1LFxuICAgICAgMTIwLFxuICAgICAgNjYsXG4gICAgICAyMTgsXG4gICAgICAxNDEsXG4gICAgICAxNjcsXG4gICAgICAyMzksXG4gICAgICA2OCxcbiAgICAgIDM0LFxuICAgICAgMTc0LFxuICAgICAgOTgsXG4gICAgICAyNDQsXG4gICAgICA3OCxcbiAgICAgIDE3NixcbiAgICAgIDcsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRS1g1MUxOTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU3MTA2Mzk1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MDE1OTczMzEyMTE0Mjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LU254d1ErWnZOdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWszR0sraUdQYnN5cVBmL2VEN0I4OVRRT0xxTFZNenM5bGFlZ2crK29GQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3bU1ZeHo2Rll4bzd0RkVSK2ZEMURxVVJ6YW1xbndnU2VCbGhVU0VXVFBhVlQ0MjQvVnZGM1hKSzB0UkJ4Z2FDbXczTU1OYnJGdmx0ODZTc3B3UllDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5YXBXM1lCV01JMjIyKzhPQUlZQ3J1SFp1elFmVDZYM1J5UHczVUJhaG1BV3ZHbXVZdm1WNHFZZkVBR1lOYmJZbFBMTnd6akI5TS9GeklQaWpxeklqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTcxMDYzOTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5Mjk3OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQQklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBCSS5qc29uIjogIntcImtleURhdGFcIjpcIlZPYThmVUxqeC93MHJkb3RMMVdDczl4MmZxbW5XM3duM0JtcllsUHV5bXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTkyMzA1NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4OTY3MjI4NzFcIn0iCn0="  // PUT your SESSION_ID 


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
