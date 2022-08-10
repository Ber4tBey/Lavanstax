/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/
const Language = require("../../language")
const Lang = Language.getString('user');

module.exports.run = async(client, message,args) => {
	
        
      let mesaj = args.join(' ');
      message.delete();
      if (mesaj.length < 1) return message.chat.sendMessage(Lang.UNFOLLOW_NEED);
      client.fetchUser(mesaj).then((user) => user.unfollow());
      message.chat.sendMessage(Lang.UNFOLLOWED)
    
    
  };

module.exports.config = {	
  command: `unfollow`,
	description: `${Lang.UNFOLLOW_DESC}`,
    
}
