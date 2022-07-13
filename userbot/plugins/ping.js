/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



module.exports.run = async(client, message,args) => {
	
        
	message.delete();   
	const start = Date.now();
        message.chat.sendMessage("📊 Pinginiz ölçülüyor...").then(() => {
	const diff = (Date.now() - start);
	message.chat.sendMessage(`📊 Ping : ${diff} ms.`);
        })
    
		};

module.exports.config = {
	command: `ping`,
	
}