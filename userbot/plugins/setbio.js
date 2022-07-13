/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


    module.exports.run = async(client, message,args) => {
          let mesaj = args.join(' ');
       message.delete();
    {
      client.user.setBiography(mesaj)
      message.chat.sendMessage("Biyografim başarıyla değiştirildi.")
    }
    
  };
	
        
    
  module.exports.config = {
    command: `setbio`,
    description: "Biyografinizi değiştirir.",
  }