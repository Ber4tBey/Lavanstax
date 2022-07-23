/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


const fs = require('fs');
const Db = require('./sql/plugin');

const Language = require('../../language');
const Lang = Language.getString('_plugin');

const got = (...args) => import('got').then(({default: got}) => got(...args));





module.exports.run = async (bot, message, args,match) => {
    
    let mesaj = args[0];
    //let plugin_name =  args.slice(1).join(' ');
    if (mesaj === '') return message.chat.sendMessage(Lang.NEED_URL + '.install https://gist.githubusercontent.com/Ber4tBey/d125fdf9d66f22b445fae2376e91708d/raw/')
    
    try {
        var url = new URL(mesaj);
    } catch {
        return message.chat.sendMessage(Lang.INVALID_URL);
    }
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }
    var response = await got(url);
    if (response.statusCode == 200) {
       
        var plugin_nam = response.body.match(/command\.*: ["'](.*)["'].*/);
        var plugin_name = plugin_nam[1]
        fs.writeFileSync('./userbot/plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('./userbot/plugins/' + plugin_name + '.js');
            return message.chat.sendMessage(Lang.INVALID_PLUGIN);
        }

        await Db.installPlugin(url, plugin_name);
        message.chat.sendMessage(Lang.INSTALLED);
    }
     
    }

module.exports.config = {
    command: "install",
    description: `${Lang.INSTALL_DESC}`
}
