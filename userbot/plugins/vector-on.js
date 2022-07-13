/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



const Language = require('../../language');
const Lang = Language.getString('vector');



const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
    await message.delete();
    let mesaj = args.join(' ');
    if (mesaj == 'on'){
    ak = await db.fetch('vector') 
 if (ak){
        await message.chat.sendMessage(Lang.ALREADY_ON)
        return;
    }
        await db.set('vector','true')
        await message.chat.sendMessage(Lang.SUCC_ON)
    } else if (mesaj == 'off'){
    akoff = await db.fetch('vector') 
    if (!akoff) {
        await message.chat.sendMessage(Lang.ALREADY_OFF) 
        return;
    }
        db.delete('vector')
        await message.chat.sendMessage(Lang.SUCC_OFF)
} else {
    await message.chat.sendMessage(Lang.WR_CMD)
}}
  

module.exports.config = {
    command: "vector",
    alias: "chatbot",
    description: `${Lang.VECTOR_DESC}`,
    usage: 'on/off'
}