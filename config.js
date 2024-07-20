const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="xdacity@gmail.com"
global.location="Lagos,nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Feranmi245/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GJ5SGZWZ9wk3OcUwo20gG5";
global.website=process.env.GURL || "https://chat.whatsapp.com/GJ5SGZWZ9wk3OcUwo20gG5" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5cd34db4564750eee3f0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿✊" 


global.devs = "2348022159244" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348022159244";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348022159244";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_22_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0bytPMFJhSFBIdTU4ZUxpVHZrSThzTXFsMVY2T1Z3dlNwc0lIZmMzYkxrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDc3MzI2MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQTY2QjhDNkMxNUYwMjhEQzc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ0OTMzOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDc3MzI2MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRjgxQzE0RjQxN0ZERUE4QjRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ0OTM0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQXzhpdzZYS1JQeUVZVUtDQlJydFlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNhZjUyYjljLWVmY2ItNDliNC1iYjRhLTUwMTBjY2UzY2RhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyMjQsXG4gICAgICAyMzcsXG4gICAgICAyNDIsXG4gICAgICA4NCxcbiAgICAgIDcwLFxuICAgICAgMTUwLFxuICAgICAgNjgsXG4gICAgICAyMjgsXG4gICAgICAxNDIsXG4gICAgICAyMjIsXG4gICAgICAzMixcbiAgICAgIDE0LFxuICAgICAgMTEsXG4gICAgICAxNzcsXG4gICAgICAzLFxuICAgICAgMTQ1LFxuICAgICAgMTEzLFxuICAgICAgODEsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTIsXG4gICAgICA0MSxcbiAgICAgIDE1MixcbiAgICAgIDY2LFxuICAgICAgMjMwLFxuICAgICAgNDMsXG4gICAgICA5MCxcbiAgICAgIDEyMyxcbiAgICAgIDE5NSxcbiAgICAgIDEyNyxcbiAgICAgIDQzLFxuICAgICAgMjUzLFxuICAgICAgMjQ1LFxuICAgICAgNDMsXG4gICAgICAxNDEsXG4gICAgICAzMixcbiAgICAgIDE0NixcbiAgICAgIDIxOSxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFHSE44N0JIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ3NzMyNjA2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmxvb2QtV29ya1wiLFxuICAgIFwibGlkXCI6IFwiMTgxMjk5NzEzMTQ3MDY1OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmYXhJNFBFUFgyN0xRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0RQMHFYRTdNamFoNVNBN2VId3hrdnJEcEZYVG1OODduMkpVbXprNzB3WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNbnhZN1JxaURGTTRJcXpDT2VMRCtrOE92WjdvbjJiVHRyOU1HdThHMnFmaDl6dXBUbzVIRnlCOWFjUFlZVFBIVDhudUZXOThFUklkWk1oVmtyeWJDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqOEdjVU9LRXFjclVJZURzRkNnWXZBOVQ0K3g3UWVwdk5RT1QzNnd6YzJQRzdCTWIrVzVSWXQvcThNVVNObzlDeXhFSWIzWXFKcG1idlAzTE9vM0FBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ3NzMyNjA2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NDkzMzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNjJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2Mi5qc29uIjogIntcImtleURhdGFcIjpcIlBudklydEFENlk1SytWQ1BwUVFjZ3luR2Ftc1Jyc0RMVWlPNDJLWWgvTXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDA1NzAxNzcxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDM3NzM0NjAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗜𝗔𝗠𝗫𝗗𝗔-𝗧𝗵𝗲 𝗷𝗼𝗸𝗲𝗿```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",
  packname: process.env.PACK_NAME || "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲",
  botname : process.env.BOT_NAME  || "𝐀𝐧𝐭𝐢𝐬𝐨𝐜𝐢𝐚𝐥 𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "ᗰᗴᏞᎢᏆᑎᏀ ᑭ❣️ᏆᑎᎢ",


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
