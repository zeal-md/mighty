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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"2FH5UWrJawBR4+DQUGiLxphfbfOzjJNq6YhTXA3972Q="},"public":{"type":"Buffer","data":"4d9N3F5uumSTNtjQ5aCrXIi11vHK9BUm6PvdhibJA34="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OHh3irTRculXGNf/14xXquUbeV/8frcJR6G3WMIAY2w="},"public":{"type":"Buffer","data":"VIL8HCnOgWX1lOAlhY7QXo6kajMb4+qlIigo8CYTxmI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aBn5yoaJLjeoevS/fenyN4yHGEcmjjQcJttt/b8Ou2g="},"public":{"type":"Buffer","data":"wsQTVK9MDK55H/BEzIWA5lr+8aqs9ujbddyUDsrMTXo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yON7qwylvOgINr5k6L331KhMQTyLnH2L83Vl7MGBN1U="},"public":{"type":"Buffer","data":"ccH3Gj1GlN9zDMOn9Xx1bfiaPSKeyyP1rlKB+glcLHc="}},"signature":{"type":"Buffer","data":"LA7cV1LAwbpKn7Py/xnayg6ARGx6pRIcvnWodaOfjPJV0TUE/wyFOhN/2ZRlvPPe1WnM2d2SpiY6ZiOsm8oaCg=="},"keyId":1},"registrationId":189,"advSecretKey":"rdLx3yBzXkrRI1MXvi7pzme2xajwgC8tkMKr8KnQrX0=","processedHistoryMessages":[{"key":{"remoteJid":"212708869993@s.whatsapp.net","fromMe":true,"id":"BD242E92491BF78D7583BD32C740EE6B"},"messageTimestamp":1720038658},{"key":{"remoteJid":"212708869993@s.whatsapp.net","fromMe":true,"id":"C6D1AFBA9BDD9CF58A0BFDF6E471E6ED"},"messageTimestamp":1720038663}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"C7Bu0yJQQpWbLIxASmNaAw","phoneId":"81fc4df4-8218-4aa6-b089-b5d375f1a48d","identityId":{"type":"Buffer","data":"WNOtvjcqcmHeQnxlV07ylVNQ17A="},"registered":true,"backupToken":{"type":"Buffer","data":"haAV/dikkoio9IxX6xQTXmaGAuQ="},"registration":{},"pairingCode":"E6MRQZEC","me":{"id":"212708869993:16@s.whatsapp.net","name":"bot amirni","lid":"154949870690457:16@lid"},"account":{"details":"CKmY/GcQ+emWtAYYAiAAKAA=","accountSignatureKey":"ZdCuZ0uRp+oha0updAs57FpisM5vyZPiIDnuLi4x6C4=","accountSignature":"y7oZbY2v1FBogq/7/XIiTQTrC+yEstsmuI9vr/iNIgQ5bkpoLpgdbg5xf5jH6plVyyJHSPNhJ0TLRqjvCq5GCQ==","deviceSignature":"heMCdOlwY/nN4ifOPb1OHWEpywTUNLpxBQ9qb5En0dO+KZv9DqCVZWZipQ9Fq0keFbhsRRslwpFMMJZJDTjUDQ=="},"signalIdentities":[{"identifier":{"name":"212708869993:16@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWXQrmdLkafqIWtLqXQLOexaYrDOb8mT4iA57i4uMegu"}}],"platform":"smba","lastAccountSyncTimestamp":1720038653,"myAppStateKeyId":"AAAAAEoL"}"  // PUT your SESSION_ID 


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
