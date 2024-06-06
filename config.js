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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; //SUHAIL_12_58_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyLFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSY0JydjJDakFJampLV25TNUZiNlU3alhWN2Z3Y0dwTEJqRGRvTVZxTGhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmUTk5NUF2ZFN4aVlaWF9Ea1FOVnNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ1MjZjZGFjLTUzNTEtNDdkZC04MjA3LWZkNzY5MjgwNGU5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyMzQsXG4gICAgICAxNTEsXG4gICAgICAyNTMsXG4gICAgICA2NCxcbiAgICAgIDEwNyxcbiAgICAgIDE3NCxcbiAgICAgIDIzNSxcbiAgICAgIDEyLFxuICAgICAgMTAxLFxuICAgICAgNzEsXG4gICAgICAxNjMsXG4gICAgICAyOSxcbiAgICAgIDIwNyxcbiAgICAgIDE0MCxcbiAgICAgIDEwOSxcbiAgICAgIDE1MyxcbiAgICAgIDE4MSxcbiAgICAgIDE0OSxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDEzLFxuICAgICAgNTYsXG4gICAgICAxNDMsXG4gICAgICAxMDYsXG4gICAgICA5NSxcbiAgICAgIDEwNyxcbiAgICAgIDIzNSxcbiAgICAgIDExMixcbiAgICAgIDQ0LFxuICAgICAgMSxcbiAgICAgIDE4NCxcbiAgICAgIDEwNyxcbiAgICAgIDEzNCxcbiAgICAgIDE5NyxcbiAgICAgIDY1LFxuICAgICAgNjUsXG4gICAgICAyNDksXG4gICAgICAxMyxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SkJUVEYxQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Nzc1MjQxMjY5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFbnRyZXByZW5ldXJcIixcbiAgICBcImxpZFwiOiBcIjg3MjY1NTQ4MjM0NzgyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1gzeCtvSEVQZmtock1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxNFBWWkMzdCtKOUNtWXVEVldyUHA2cHRwWkhPdVBVNU45Q1VUVE9CZGxVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjEvTHMrcHpndDNuWERCcTg4YndxMFdEcTBSQ3JXeGNnclFBRVFPYlJaYVhOSk42WVpjb3RXb2JoU1lmS1hqM01wdUhITW1hbW9iaTBJTVlXV1h0WUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVWVDN2ck5JRXpZNE5WOE85QXBSaWN3VjBrY3VOZ0h4TU9RWFNmMUE4VEVwaFppKzVLTVc1WHpnWkY1V0YvaVR0b2FQK0p6NitjRjYwYnBuTkRpM2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc3NTI0MTI2OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzY3ODcxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
