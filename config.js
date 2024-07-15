const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://im_dev099:Devilff7@cluster0.piv10wd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "918509647308" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918509647308";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_43_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTFNvcXliVGFTSzNjcCszK2FVMWRWb0MxWTRQUG9senVPVzF0dTJ5NUZ6UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk2NDc1ODUxMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk2NkY2MDdGMDYyMjkzQ0UzREM5QzMyRjM3QTA4QkI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTAxNDk5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTY0NzU4NTEwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EyRkVFNjA2NTU2RDUyRjk5OUVBMkI2QkU4RjU0MDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDE1MDAwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjY1WEtock54VE5xQkIzX2QtVVZQYndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmYyOWIxMmMtMDc3ZC00NGQ1LWFjOTYtZTI5Mjk2OWY0OGE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMjIwLFxuICAgICAgMjE1LFxuICAgICAgOTQsXG4gICAgICAxMTksXG4gICAgICAxNjQsXG4gICAgICAxMTEsXG4gICAgICAxNyxcbiAgICAgIDE1MixcbiAgICAgIDcxLFxuICAgICAgMjgsXG4gICAgICAxNTgsXG4gICAgICAxMDQsXG4gICAgICAzLFxuICAgICAgMjQ1LFxuICAgICAgMTkyLFxuICAgICAgMjM0LFxuICAgICAgMTYsXG4gICAgICAzLFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE4NSxcbiAgICAgIDEwOCxcbiAgICAgIDE5LFxuICAgICAgMTIsXG4gICAgICAyMjYsXG4gICAgICAyMzIsXG4gICAgICA4MSxcbiAgICAgIDE4NixcbiAgICAgIDIxOSxcbiAgICAgIDk3LFxuICAgICAgMTUzLFxuICAgICAgMTE3LFxuICAgICAgMjA0LFxuICAgICAgMTAwLFxuICAgICAgOTgsXG4gICAgICAxODEsXG4gICAgICAxOTEsXG4gICAgICAxNTQsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdUk3NXdFRU5HMTByUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInN5WDEzWEVIZi81VEdLY3RzTHcwTEVmMGNaQnVCLzZLRVNCbWdZWEQvam89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibCtNbzdaMkpVNk1JMDZBZ3lZek5oc0pENW1pN3NVTUZTMEVpcUlqc1ZrT1BmVllCSDhmQ01JSTd2WGJiTUVjZk82Z3laN1l1WWJNbUxsTlQ1YXZPQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUVdDRmlyUUxjTzNJSndpL3F4bGorSWpVVTdNZHZlNFQwaVh6L1c3RlBudS9RVWNBZ09TWjJQWXhteEdyN1lOUXRiL0UzUXh1QnFBaW0xZGlSZUJBQUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk2NDc1ODUxMDk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwMjE2MDU5NTAyNzIxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiw5fNnMOX44WkICAgIMOXzZzDl1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NjQ3NTg1MTA5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDE0OTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWt2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNa3YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkVTFFanpCSG8xZnBFQzJEQ0pJdndGTmVYcmcxWWEvWkd4Z0JsQWgvMk9VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzQyODE3NTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTAxNDk5NzgxM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Devil-MD",


  errorChat : process.env.ERROR_CHAT || "", : process.env.KOYEB_API  || "false",

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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
