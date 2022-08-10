/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/
const Language = require("../../language")
const Lang = Language.getString('user');

     module.exports.run = async(client, message,args) => {
          let mesaj = args.join(' ');
          if (mesaj.length < 1) return message.chat.sendMessage(Lang.FOLLOW_NEED)
       message.delete();
    {
      client.fetchUser(mesaj).then((user) => user.follow());
      message.chat.sendMessage(Lang.FOLLOWED)
    }
    
  }
  
	
        
    

  module.exports.config = {
    command: `follow`,
    description: `${Lang.FOLLOW_DESC}`,
  }