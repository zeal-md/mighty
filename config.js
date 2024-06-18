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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761299352";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_10_11_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlh2NGliZVpYcE5XazVPNVNCczcvMk9ZTm9iYk5UcXJXYVRlcTY0dlJ0bEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5HU2NPdUM0UWdtcHVLeV8tbWZxOFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTg1YzY3NDMtODNmMC00MTEyLTg1NDYtNzgwN2ZhMmY3ZjRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDE2MixcbiAgICAgIDE1MyxcbiAgICAgIDE5NyxcbiAgICAgIDIzLFxuICAgICAgMTU5LFxuICAgICAgMTg4LFxuICAgICAgMTY5LFxuICAgICAgMTIzLFxuICAgICAgNDIsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICA5MyxcbiAgICAgIDU0LFxuICAgICAgNTIsXG4gICAgICA5MixcbiAgICAgIDgyLFxuICAgICAgMTIyLFxuICAgICAgOTQsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyNDAsXG4gICAgICAyNDcsXG4gICAgICAxOTUsXG4gICAgICAyMDYsXG4gICAgICAyNCxcbiAgICAgIDEyMSxcbiAgICAgIDIyNyxcbiAgICAgIDkzLFxuICAgICAgMTg0LFxuICAgICAgMjA2LFxuICAgICAgMTc1LFxuICAgICAgNDAsXG4gICAgICAxNzIsXG4gICAgICAxMzEsXG4gICAgICAxNTgsXG4gICAgICA0MSxcbiAgICAgIDkyLFxuICAgICAgMjUyLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU3NjVSUUdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MTI5OTM1Mjo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzMTUzOTkyOTA5MDQwOjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDYWp0MEVFSzI2eGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1pHdGpSZUdES1dZMjNPb0xkMWJZc3hiUEJCQkRrT3IrU3VFZWlWZHdDbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRanhVaEF6QjM3NjFlcjJvTEVQS0JwRjZkbWhqcDZwSzVzQ01HWSt4anNtK2ZaSmZmRUlLTG1yV3laUmFnZ0FTS3F2dzJ3MnVKWmY4L1ozR3hmQnZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJET1Q3WkNDYmVUejFoTjJTbTg0WnhybFVYckt6MkorQWUwelZYeFk0dXpNYlBXSEZBVFZWeEJCVmRHMDVFVWRvSW9DbVpNRmhxcTVCV3NXWWRHcmFpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MTI5OTM1Mjo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcwNTQ1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU14MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXgwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkRpdWNiV3REYUoxS2p2V0VWNHZoTjJoaEg4bmFsWWdsVWt2b2U3RVRDbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MDA5Njc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=


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
