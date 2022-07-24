/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



const Language = require('../../language');
const Lang = Language.getString('spotify');
const config = require('../../config')


const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
    await message.delete();
    let mesaj = args.join(' ');
    if (mesaj == 'on'){
    ak = await db.fetch('spotify') 
 if (ak){
        await message.chat.sendMessage(Lang.ALREADY_ON)
        return;
    }   
    if (!config.SPOTIFY_TOKEN){
        await message.chat.sendMessage(Lang.SPO_KEY)
        return;
    }
        await db.set('spotify','true')
        await message.chat.sendMessage(Lang.SUCC_ON)
    } else if (mesaj == 'off'){
    akoff = await db.fetch('spotify') 
    if (!akoff) {
        await message.chat.sendMessage(Lang.ALREADY_OFF) 
        return;
    }
        db.delete('spotify')
        await message.chat.sendMessage(Lang.SUCC_OFF)
        await bot.user.setBiography(config.DEFAULT_BIO)
} else {
    await message.chat.sendMessage(Lang.WR_CMD)
}}
  

module.exports.config = {
    command: "spotify",
    alias: "chatbot",
    description: `${Lang.VECTOR_DESC}`,
    usage: 'on/off'
}
