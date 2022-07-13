/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


const Lavan = require("../../bot")
const config = require("../../config")
const translatte = require('translatte');
const { from } = require("form-data");
const Language = require('../../language');
const Lang = Language.getString('scrapers');
DİL = config.LANG

module.exports.run = async (bot, message, args) => {
    let mesaj = args.join(' ');
    if (mesaj.length < 1) return message.chat.sendMessage(Lang.NEED_TR);

    translatte(mesaj, {from: 'auto' ,to: DİL}).then(ressam => {
      
        message.chat.sendMessage(('▶️ ' + Lang.LANG + ': ' + DİL + '\n'
        + '◀️ ' + Lang.FROM + ': ' + ressam.from.language.iso + "\n"
        + '🔎 ' + Lang.RESULT + ': ' + ressam.text ));
  })}

module.exports.config = {
    command: "trt",
    description: `${Lang.TRANSLATE_DESC}`,
    usage: `${Lang.TRANSLATE_USAGE}`
}