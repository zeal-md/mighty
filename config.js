const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://kingsdata.com.ng/register/?ref=KINGSDATA"                       // put your app url here,
global.email ="kingjoj180gmail.com"
global.location="Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://kingsdata.com.ng/register/?ref=KINGSDATA";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaUeNsz9MF96qPZuUR2Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaUeNsz9MF96qPZuUR2Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.google.com/search?q=king+joj&client=ms-android-samsung-ss&sca_esv=604514bc2b352c86&udm=2&biw=412&bih=837&sxsrf=ADLYWII78ubYCBWzUt_JF0ZM4Mu_oH2Shw%3A1719202376451&ei=SPJ4ZtSFG8SrhbIPueqqqAQ&oq=king+joj&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIghraW5nIGpvajIFEAAYgAQyBhAAGAcYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHkiMFlDyEljyEnAAeACQAQCYAe8CoAGxBKoBBzAuMS4wLjG4AQPIAQD4AQGYAgKgAs0EwgIEECMYJ5gDAOIDBRIBMSBAiAYBkgcFMi0xLjGgB-wE&sclient=mobile-gws-wiz-serp#vhid=pC_JXuabMMC6KM&vssid=mosaicraw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+2349039923664" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039923664";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349039923664,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349039923664,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_22_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICA2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR3eEwwM3FjOUVLN3IwNDVwZi9LcXBCQXo1V2JqU04vZC9tTitFaXhJd009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzOTkyMzY2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTg3OTM0Q0UzMkU4NkJFMUU4MDBEMUFFN0FEMkMzQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjAyOTUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRYOHZXOURUVGUyb3ZRdldHdEs4cUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjY0NTU1NjAtNjdkOC00MDU1LWJjNDQtMDQ0MDU4YWQ2MWY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDU0LFxuICAgICAgNzEsXG4gICAgICAxMTMsXG4gICAgICAyNCxcbiAgICAgIDE3NCxcbiAgICAgIDk3LFxuICAgICAgNDEsXG4gICAgICAzNSxcbiAgICAgIDEyNSxcbiAgICAgIDc1LFxuICAgICAgMjEsXG4gICAgICA0OCxcbiAgICAgIDExMixcbiAgICAgIDYsXG4gICAgICA5NCxcbiAgICAgIDgwLFxuICAgICAgMjEsXG4gICAgICA5MixcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxNzYsXG4gICAgICAyNDEsXG4gICAgICAxOTcsXG4gICAgICA0LFxuICAgICAgMTA0LFxuICAgICAgMTEyLFxuICAgICAgMSxcbiAgICAgIDE3OCxcbiAgICAgIDI0NCxcbiAgICAgIDIzNixcbiAgICAgIDE3MSxcbiAgICAgIDIyMyxcbiAgICAgIDE2MixcbiAgICAgIDksXG4gICAgICAxNDgsXG4gICAgICAyMzUsXG4gICAgICAyMzgsXG4gICAgICAxODIsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSDRaUVZaTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzOTkyMzY2NDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRhbGsgVG8gS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiMTk1NTc1NzgxNzg5NzU4OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liYnJNc0dFUC9vNDdNR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNk12QVVUQ001cW13UUU4dGc5ZUNGUlI5NUREV1ZQcTI1TjBVcXhCbEhsQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSdjY1MGZ5RnR0cXlRTTdMbmluSDl1dUY1UnBiU05YbHdPaDNFSlJ4MlY5b1JNM3NkMXJPdHljcWpaVkNwV2htQTFNY1FJWjhvRHRmMExRNjlncFBEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFeXpZcEViWWxCQ2NvK0FRRHRsR3VLRXVsdGttOVJ5aXVCSXFEY2cxcC90S2EzVlVxQ0ZOcHk1T0VNYk93QTBzODUvZkxuSmtpKzJ0QzVoc05iNjdnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5OTIzNjY0OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyMDI5NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcGlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1waS5qc29uIjogIntcImtleURhdGFcIjpcIkJHUlF0T0lVclJQbFB3clFGVVNVWmp1ZXVvMWpzVU1DdHJiREpMV2NMVTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2ODYzMTY4NixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5MDkyMDkwMzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JOJ",
  packname: process.env.PACK_NAME || "KING JOJ",
  botname : process.env.BOT_NAME  || "KING",
  ownername:process.env.OWNER_NAME|| "It'x King",


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
