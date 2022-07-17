/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

const Language = require('../../language');
const Lang = Language.getString('_owen');
const Lavan = require('../../bot')
PREFIX = "."
module.exports.run = async (bot, message, args) => {
    const data = [];
    const { commands, config } = bot;
    const configg = require("../../config")
  
    
    if (!args.length) {
        data.push(Lang.COMMAND + '\n');
        data.push(commands.map(command => `⚡${command.config.command}`).join('\n'));
        data.push(`\n\n${Lang.COMINFO}`);
        
        return message.chat.sendMessage(data.toString())
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
        return message.chat.sendMessage(Lang.NOFOUND);
    }

    data.push(Lang.COMMAND1 + ` ${command.config.command}\n` );

    //if (command.alternative) data.push(LANG.ALTERNATE `${command.aliases.join(', ')}`);
    if (command.config.description) data.push(Lang.ALTERNATE + ` ${command.config.description} \n`);
    if (command.config.usage) data.push(Lang.USE + ` ${PREFIX}${command.config.command} ${command.config.usage}`);

    
    
    message.chat.sendMessage(data.toString());
    }


module.exports.config = {
    command: 'lavanstax',
    alias: 'lavan',
    description: 'Tüm komutlarımı veya belirli bir komutla ilgili bilgileri listeleyin.',
    usage: '[komut adı]',
    cooldown: 5
}
