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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "212624855939" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212624855939";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212624855939,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"ULerTgVc4OBOJQbbPro+mklQlj+RwoWKHNYZDWgkxXk="},"public":{"type":"Buffer","data":"cDde23WaZq6PVa8e5cmjSEd2PSsdXSLZyPR8OqKlBDw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eNvaa9usyjwAlLUaVB+8VRjev7WoPTSeZMWK2I8jD24="},"public":{"type":"Buffer","data":"yHhtQSVioH+qiaomNQi/P2eN3+D/f0YlEeAvaQhVVDs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mJp7Gq+oGgonat35tBshHXYJ+hBYPGDmpl0WFaPGC08="},"public":{"type":"Buffer","data":"orXdU99NeDkUAuRJ7A9KYJK3mPjSF0ogNpHUg5LwdV8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IKp/nZ75I7uHTUrI4K+etVBoDHcrfNh6qf4JyJjWYEs="},"public":{"type":"Buffer","data":"RZQ/z7ZKbnwmfcITKejp7naOMl40h5XLD393MUnMXHY="}},"signature":{"type":"Buffer","data":"qKltTtMdCr8Z8/mXIXA3sR7EBzixx2/Fbsb4afvj2lKm9yCFvxpnAZSEcO/FeIfFYMzyfj0Ss3Iu3eVfd0KaDQ=="},"keyId":1},"registrationId":88,"advSecretKey":"oguZvGQxRQrqpCffHQgrN0Q5cPx+FokknOlm9FEZznI=","processedHistoryMessages":[{"key":{"remoteJid":"212624855939@s.whatsapp.net","fromMe":true,"id":"AA59A4E1530C469498A66270DABEFF99"},"messageTimestamp":1720042631}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"hl2xsk-oSxqjl8XHtw_jfw","phoneId":"b0278864-5845-4fdb-830c-e814a70a87f4","identityId":{"type":"Buffer","data":"qebSg9DJjycAi5mwpAVaOMYWr04="},"registered":true,"backupToken":{"type":"Buffer","data":"gH3YA3ONlo+JgBSh9ls1MwnLj2U="},"registration":{},"pairingCode":"1QBFYJZQ","me":{"id":"212624855939:15@s.whatsapp.net","name":"hamzaamirni"},"account":{"details":"CJeysOIEEPeIl7QGGAMgACgA","accountSignatureKey":"5iX865h+IM1Hnw2TlMvBA49xc3YLTcZvtsJtbmk4/R4=","accountSignature":"f1ONAkxiVulY11s4f/Fz7mRSKbfi7HUDoXnjpaE/jsGMr3SXr6ieOdZLLWGxU4mFtkCK66ncok7qeTg1xW0RBg==","deviceSignature":"jTqdBLW6K04YpYR/jzwDsjiKR+pIU/bh7/RCYCysrKy7GN0Ak3V7B5sjRdw8cb9IEofAWJ00jP02Bhyhp5FWBw=="},"signalIdentities":[{"identifier":{"name":"212624855939:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BeYl/OuYfiDNR58Nk5TLwQOPcXN2C03Gb7bCbW5pOP0e"}}],"platform":"smba","lastAccountSyncTimestamp":1720042621,"myAppStateKeyId":"AAAAAJZw"}"  // PUT your SESSION_ID 


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
