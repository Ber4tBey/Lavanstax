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
    
    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return message.chat.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                mesaj += '**' + plugin.dataValues.name + '**: ' + plugin.dataValues.url + '\n';
            }
        );
        return message.chat.sendMessage(mesaj);
    }


}
module.exports.config = {
    command: "plugins",
    description: `${Lang.PLUGIN_DESC}`
}
