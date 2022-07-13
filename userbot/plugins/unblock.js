/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



module.exports.run = async(client, message,args) => {

          let mesaj = args.join(' ');
       message.delete();
    {
      client.fetchUser(mesaj).then((user) => user.unblock());
      message.chat.sendMessage("Engelin kaldırıldı.")
    }
    
  };

  
    module.exports.config = {	
      command: `unblock`,
      description: "Engellemiş olduğun instagram hesabının engelini kaldırır.",
        
    }
