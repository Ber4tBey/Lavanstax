/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

const fs = require('fs');
const Db = require('./sql/plugin');
const Config = require('../../config');
const Language = require('../../language');
const Lang = Language.getString('_plugin');
const Heroku = require('heroku-client');

const heroku = new Heroku({
  token: Config.API_KEY
});

let baseURI = '/apps/' + Config.APP_NAME;
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
        await message.chat.sendMessage( Lang.DELETED);
        await heroku.delete(baseURI + '/dynos').catch(async (error) => {
         message.chat.sendMessage(error.message);
    });
    }
};
        

module.exports.config = {
    command: "remove",
    description: `${Lang.REMOVE_DESC}`
}
