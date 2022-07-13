/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

     module.exports.run = async(client, message,args) => {
          let mesaj = args.join(' ');
       message.delete();
    {
      client.fetchUser(mesaj).then((user) => user.block());
      message.chat.sendMessage("Bunu yapmak istemezdim ama bunu bana yaptırmaya mecbur bıraktın seni engelledim.")
    }
    
  };
	
        
    

  module.exports.config = {
    command: `block`,
    description: "Belirttiğiniz kullanıcıyı engeller.",
  }