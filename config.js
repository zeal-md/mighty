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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252684594173";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_36_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdzYkQxYmtYQkNjaVkvZnZRTW9iT0xzeS8rU1hkcG9qUTg3M0VadjkzT1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndGX0tTZUdXU05XMndmTDZrZ3l1MkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTc4YjhhNTItYTk5NS00NzhmLWE1NWQtNzYyNzczMzMxNjEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIwOCxcbiAgICAgIDIzOSxcbiAgICAgIDIzMCxcbiAgICAgIDcwLFxuICAgICAgMzAsXG4gICAgICAxOTMsXG4gICAgICAxOTMsXG4gICAgICAxODMsXG4gICAgICA1NCxcbiAgICAgIDE2MCxcbiAgICAgIDQsXG4gICAgICAxMjIsXG4gICAgICAxNDksXG4gICAgICAyMjYsXG4gICAgICAxMDcsXG4gICAgICAxNjMsXG4gICAgICAyMzYsXG4gICAgICAyMzcsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICA5MyxcbiAgICAgIDExOSxcbiAgICAgIDE1NyxcbiAgICAgIDg2LFxuICAgICAgMTI3LFxuICAgICAgMTI1LFxuICAgICAgNCxcbiAgICAgIDE1LFxuICAgICAgNjUsXG4gICAgICAyNTQsXG4gICAgICA3NSxcbiAgICAgIDIwNixcbiAgICAgIDcsXG4gICAgICA2NyxcbiAgICAgIDIzOCxcbiAgICAgIDIyNSxcbiAgICAgIDI0OCxcbiAgICAgIDE1MyxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJEVlRRNlhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODQ1OTQxNzM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTSElRINi52KjYryDYp9mE2LHYrdmF2YZcIixcbiAgICBcImxpZFwiOiBcIjEzMzM0NjQ1MzY0MzM0MDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWFE2VElRaDVMTHRBWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm0vMXk3eHlHMmlySmZLRzBzakFNVnZESWhCYWZBNVpGYzJCUUNnV0ErRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFNPb011bWNqQWc5K3N4UXlubWt4UFY2d1ZJY3FhOCtNWmlPYVFnMUlwaE5uMEl2cmlnS3BCeWFwd1BYVGU1Z1ljL0RBaEFJa3JPblFLZDFxa2tjQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiellKWXF4amhtMWp0RmFPUGF3aXBiTVhYTnF0Si9QZnNndEhjOWtDWmNGQ0hJaU5oeEI1ejA1YlB1RitkOTdWT2Z5VWZOOURSZ28ya3BnKzdka1dqaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjg0NTk0MTczOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODk1NzU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGNIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQY0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtTFU0Y1lYUzBkdlRuSm5kUjJvYUJpZnZIUWZhMmppLzVPSEhkclptcUNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjU4ODI1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SHIQ ABDiRAHMAN",


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
