/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


const Language = require("../../language")
const Lang = Language.getString('afk');
const config = require('../../config')
const db = require('quick.db')
module.exports.run = async (bot, msg, args) => {
    if(msg.author.id !== bot.user.id) return;  
    ak = await db.fetch('isAfk') 
    if (ak){

        await msg.chat.sendMessage('Zaten afk sın')
    }
        await db.set('isAfk','true')
const sebep = args[0];
        
        await msg.delete();
        if (args[0]){
          let sebep = args.join(" ");
          await db.set('reason',sebep)
            msg.chat.sendMessage(Lang.IM_AFK + '\n'+ Lang.REASON + ' ' + sebep)
        
        }else {
            
            msg.chat.sendMessage(Lang.IM_AFK)
        }

    
            
            
    }
    
module.exports.config = {
    command: "afk",
    description: `${Lang.AFK_DESC}`
}