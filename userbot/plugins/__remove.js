/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../../language');
const Lang = Language.getString('_plugin');



module.exports.run = async (bot, message, args,match) => {
    let mesaj = args.join(' ');
    if (mesaj === '') return  message.chat.sendMessage(Lang.NEED_PLUGIN);
    var plugin = await Db.PluginDB.findAll({ where: {name: mesaj} });
    if (plugin.length < 1) {
        return message.chat.sendMessage( Lang.NOT_FOUND_PLUGIN);
    } else {
        await plugin[0].destroy();
        delete require.cache[require.resolve('./' + mesaj + '.js')]
        fs.unlinkSync('./userbot/plugins/' + mesaj + '.js');
        return message.chat.sendMessage( Lang.DELETED);
    }
};
        

module.exports.config = {
    command: "remove",
    description: `${Lang.REMOVE_DESC}`
}