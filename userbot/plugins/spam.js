/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/
const Language = require("../../language")
const Lang = Language.getString('spammer');
module.exports.run = async(client, message,args) => {

        
          
          let sayi = args[0];
          let mesaj = args.slice(1).join(' ');
       
    if (mesaj.length < 1) return message.reply(Lang.NEED_WRD);
       message.delete();
    for (var i = 0; i < sayi; i++)
    {
      message.chat.sendMessage(mesaj);
    }
    
    };
	
        
    
    module.exports.config = {	
      command: `spam`,
      description: `${Lang.SPAMMER_DESC}`,
        
    }
