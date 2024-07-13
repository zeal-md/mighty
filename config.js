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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "684594173";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_13_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSMlhReGZHV0RZVFBGSktzZEdTTlVrYjZQc1NJU09vSkxxeksyUEFqL09RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjY4NDU5NDE3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0ZBMTQwMjc0NkU5MjIwMzMwOTlCNUIzMUY3RjIyNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODk3OTk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImV0UVZhOXZBUXBLRUh0OVZQNEdweUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjRlNWYzNzgtOTdhZC00OWQwLTk0ZGQtNzk1MDNmMWIwN2JkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDI0OSxcbiAgICAgIDE2MixcbiAgICAgIDkxLFxuICAgICAgMjEwLFxuICAgICAgMTc4LFxuICAgICAgMTQwLFxuICAgICAgNDIsXG4gICAgICA1LFxuICAgICAgMTkzLFxuICAgICAgMzQsXG4gICAgICAyMjQsXG4gICAgICAyLFxuICAgICAgMTEsXG4gICAgICAxODMsXG4gICAgICAzMSxcbiAgICAgIDExMixcbiAgICAgIDEzLFxuICAgICAgMjMzLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDgsXG4gICAgICAyMjEsXG4gICAgICAyMzksXG4gICAgICA3NyxcbiAgICAgIDEzNixcbiAgICAgIDIyOSxcbiAgICAgIDg1LFxuICAgICAgMjQ0LFxuICAgICAgMTU1LFxuICAgICAgNCxcbiAgICAgIDE4OSxcbiAgICAgIDU0LFxuICAgICAgMTI1LFxuICAgICAgMjI3LFxuICAgICAgMTQ0LFxuICAgICAgMTM1LFxuICAgICAgNTQsXG4gICAgICA3LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY0QUFCRTNNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODQ1OTQxNzM6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTSElRINi52KjYryDYp9mE2LHYrdmF2YZcIixcbiAgICBcImxpZFwiOiBcIjEzMzM0NjQ1MzY0MzM0MDoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWFE2VElReEtQTHRBWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm0vMXk3eHlHMmlySmZLRzBzakFNVnZESWhCYWZBNVpGYzJCUUNnV0ErRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYnVXcjdoUzJpL1lFODlWb0pBQW9CSlEva1BTUjVpV2p4S1NXdGtpelRTVTNGVzV4OS82dHlxOTJPT2JnRDZ4bXZQQm5JUlpCVlkycHBNVTU3eVMvQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid1Q0ZVFhQTBMbENvY0lEcEpxbE8yZWdDUUNvSTZxcEJtVit2T3piNUQ5VkZ5ZHRDWG8rRG1XckxtRXVrSFlPNFpVRVhUc0ZwY0VhS2xFNzFuSkM2akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjg0NTk0MTczOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODk3OTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGNQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQY1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpQXFQOGs0WkJEZ1NHb0JVeHNLTUZTMGd0SEZ2SnlaMk9sSjlmbE1RQTVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjU4ODI2MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwODk3OTgxNTIxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ABDiRAHMAN",


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
