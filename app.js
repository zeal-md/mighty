"name":"GOATED BOT-MD",
  "description":"A simple WhatsApp bot developed by Jackim Tech",
  "keywords":["bot","node","baileys","whatsapp"],
  "logo":"https://telegra.ph/file/4f4c328780a0034e9b4ac.png",
  "repository":"https://github.com/jackim-10/Goated-Bot-Md",
  "succes_url":"/",
  "stack":"container",
  "env":{
    "PREFIX":
    {
      "description":"choose your prefix of bot",
      "value":".",
      "required":true
    },
    "AUTO_READ_STATUS":
    {
      "description":"Your contact status will be read automatically(type yes to activate or no to deactivate ; don't write in capital letter)",
      "value":"yes",
      "required":false
    }, "AUTO_DOWNLOAD_STATUS":
    {
      "description":"Your contact status will be download automatically and send to you(type yes to active or no to deactive ; don't write in capital letter)",
      "value":"no",
      "required":false
    }
    ,
     "PM_PERMIT" :
     {
      "description":"Other user can't use your bot in pm (type yes to activate or no to deactivate ; don't write in capital letter)",
      "value":"no",
      "required":false
    }
    ,
    "BOT_NAME" : {
       
      "description":"put A name for your bot",
      "value":"GOATED BOT-MD",
      "required":false

    } ,
     "BOT_MENU_LINKS" : {
    
      "description":"add one or many link for your bot menu  ; eg : url1,url2,url3.....",
      "value":"https://telegra.ph/file/4f4c328780a0034e9b4ac.png",
      "required":false
       
     },
    "PUBLIC_MODE":
    {
      "description":"type yes to put your bot on public mode or no to put it on private mod",
      "value":"no",
      "required":false
    }
	,
    "HEROKU_API_KEY": {
    "description": "insert your heroku api-key (this is optionnal)",
     "required" :false
    },
   "HEROKU_APP_NAME": {
    "description": "insert your heroku APP NAME (this is optionnal)",
     "required" :false
    }  
	  ,
    "SESSION_ID":
    {
      "description":"put your session ID , make sure it starts with eyJub2I...",   
      "value":"",
      "required": true

    },
    "OWNER_NAME":
    {
    
    "desc": "Your Name",
    "required": false,
    "value": "◤✞𝐉𝐚𝐜𝐤𝐢𝐦 𝐓𝐞𝐜𝐡™✞◥"
  },
    "OWNER_NUMBER":
  {
    
    "desc": "Your number , dont put '+' and put you area code(exemple of togo '228')",
    "required":false,
    "value": "254712143384"
  },
    "WARN_COUNT":
  {
    "desc": "this is the limit of warn for warning commandes",
    "required": false,
    "value": "3"
  },
  "STARTING_BOT_MESSAGE":
  {
    "description": "if you don't want startting-bot-message put no else put yes",
    "required": true,
    "value": "yes"
  },
  "PRESENCE":{
    "description":"Mark your presence: 1 to indicate that you are online even if you are not. 2 to indicate that you are currently typing a message. 3 to indicate that you are currently recording an audio. Or leave the field blank to indicate your real state.",
    "value":"",
    "required": false
  }  
  },
 
  "formation": {
		"worker": {
			"quantity": 1,
			"size": "basic"
		}
	},

  "addons":[
    {
      "plan":"heroku-postgresql"
    }
  ]
}
