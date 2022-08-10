/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/
const Language = require("../../language")
const Lang = Language.getString('user');

    module.exports.run = async(client, message,args) => {
          let mesaj = args.join(' ');
          if (mesaj.length < 1) return message.reply(Lang.BIO_NEED);
       message.delete();
    {
      client.user.setBiography(mesaj)
      message.chat.sendMessage(Lang.BIOGRAPH_CHANG)
    }
    
  };
	
        
    
  module.exports.config = {
    command: `setbio`,
    description: `${Lang.BIOGRAPH_DESC}`,
  }