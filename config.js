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


global.devs = "254743982206" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743982206";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254743982206,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_32_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFRUlaN1BTdkxySThuN0orbVZZMUhhSVdnaU9oZHQ2YXlZUjJZN21rU0pjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0Mzk4MjIwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTI2RkU4NDAwM0VGMjhFMEYyNDY0NENCMDlGQ0Q2MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzMzOTQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJSMEh6UjRqVHRDVzhlTUFYeWRpYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjZlZmVmNjUtMmQ4Zi00OTlhLWI3N2UtOTBkMjJiMjRjYzdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDg5LFxuICAgICAgMjM2LFxuICAgICAgMTUyLFxuICAgICAgMjUyLFxuICAgICAgNDMsXG4gICAgICAyNDksXG4gICAgICAyMTAsXG4gICAgICAyMSxcbiAgICAgIDE3NCxcbiAgICAgIDY4LFxuICAgICAgMTQ4LFxuICAgICAgNDUsXG4gICAgICAyNDQsXG4gICAgICAxNTksXG4gICAgICA1OSxcbiAgICAgIDExMyxcbiAgICAgIDI0MSxcbiAgICAgIDYxLFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTg0LFxuICAgICAgMTM3LFxuICAgICAgMzcsXG4gICAgICAxNyxcbiAgICAgIDIxNixcbiAgICAgIDM4LFxuICAgICAgOTksXG4gICAgICA3NCxcbiAgICAgIDIxMixcbiAgICAgIDE5LFxuICAgICAgMTEsXG4gICAgICAxNjcsXG4gICAgICAxMzUsXG4gICAgICAxMTEsXG4gICAgICAyNTEsXG4gICAgICAyNDUsXG4gICAgICAxODcsXG4gICAgICAxNzQsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlhLQkxFRjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0Mzk4MjIwNjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJlcmFcIixcbiAgICBcImxpZFwiOiBcIjI2MDk1ODMzNzM4MDQyODoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNVHg5Tm9HRVBQc3FMUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRPcVVvc3MwUjZWeUpFOWtNSWM2ZzBrV3duUkhGaHp3RUR3akZMZU9weEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEtBMUt2dDZSeU9RanA5bGM2SThvdXY1eE1kRi9icnIzeEpBcko2bEMxbjc5aXMwQ2pvVXNFWUl3alVCYksxZGdxMFZkbXdhQ3JBWUdtWG1nZERHRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1A1ZWp2eiszSXY2aWM0RG5TWWVmQ2RQb1hESlJjd3RCWFIxb1BPRlVwbnpIa2ZpenBPSy9wL0FwUEhvRlNiYlo2TnN1blZQL2ZscFVlMVVRcDRXRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzOTgyMjA2OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMzM5NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVydS5qc29uIjogIntcImtleURhdGFcIjpcIkNOR3ZocEtXZXJLdWNHMVQ1cjgvTTl1L2VLMUo5emN5WGMrVUlkVzZvNE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwMTI3MTQ5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BERA TECH",
  packname: process.env.PACK_NAME || "bera tech",
  botname : process.env.BOT_NAME  || "BERA TECH",
  ownername:process.env.OWNER_NAME|| "BERA TECH",


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
