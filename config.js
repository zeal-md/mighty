const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://MrRex:MrRex@cluster0.wmtvlx6.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/HWfZTksy/OIG4-Tuz-P.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348026733747" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348026733747";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/HWfZTksy/OIG4-Tuz-P.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_12_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk82ZUFVS2N4bFBJZ0pQbWREdHBlTXA4RUwyZDFZQURKdW5KcXM0SzdydDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRNaXZGd1V1UWVpRFI0Mi1BTGFmNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzE2MzdmZjAtMWI4OC00MGU0LTljNjItZGYzNDA4ZWM2MmQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDgyLFxuICAgICAgNzUsXG4gICAgICA2NSxcbiAgICAgIDE3NCxcbiAgICAgIDE5NSxcbiAgICAgIDIyMCxcbiAgICAgIDIyMyxcbiAgICAgIDMzLFxuICAgICAgMTQ4LFxuICAgICAgMjI5LFxuICAgICAgNDQsXG4gICAgICAyMzUsXG4gICAgICAxMjAsXG4gICAgICAxMTAsXG4gICAgICAxMzMsXG4gICAgICA3MCxcbiAgICAgIDcwLFxuICAgICAgOTEsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTIsXG4gICAgICAxNDMsXG4gICAgICAxODAsXG4gICAgICAxODcsXG4gICAgICA5OSxcbiAgICAgIDEzOCxcbiAgICAgIDIyOSxcbiAgICAgIDg2LFxuICAgICAgMjQzLFxuICAgICAgMTMyLFxuICAgICAgMTQyLFxuICAgICAgMjAwLFxuICAgICAgMjUzLFxuICAgICAgMjM5LFxuICAgICAgMTAzLFxuICAgICAgMTU4LFxuICAgICAgNyxcbiAgICAgIDIyNCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUFdYOEg4V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyNjczMzc0NzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKCrMK74oCU4oCU4oCU4oCU4oCUICDwnZCA8J2Qm/CdkKvwnZaG8J2Ql/CdlobwnZCsICDigJTigJTigJTigJTigJTCq+KCrFwiLFxuICAgIFwibGlkXCI6IFwiMjI4NjY4ODIzNjE3NTUwOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kyMytZVURFUFNUbTdRR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGhmbGVDYWF3aWk1TzhOK0MzcHVKZjQ5YXlkdm84RmREamtYdkkyVldVbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyZnF4QnYrdlhMVnhLL3ZLUjNNVE1QM1BRMmUrclczZWY1eWdVVFN3dFQwam1Maklwb1NRZlh5a1hqWk9FdmREbUg4TkdSZGpldXltUjEwd2k1Q1hBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJub3BvMjZ2R0tBY3VDNTJMVjI4TjI2VDBiMnRWTS9UTE1aaU1GRzVFblEwbWhLSU5FaTNHUEQyNWROY0c1eTY2OEdja2ZzamZSSUZ1dG5UUG1JTnRnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDI2NzMzNzQ3OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwOTU1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBxWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHFZLmpzb24iOiAie1wia2V5RGF0YVwiOlwibm1Hd2ZZazdJTXlwY29FemY4QzlPUkh3ODlnWHRWcHZ5RlJuWXF4dXlLRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTc3ODE2NDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Rex_Emperor",
  ownername:process.env.OWNER_NAME|| "Rex_Emperor",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Rex_Emperor"  ).toUpperCase(),



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
