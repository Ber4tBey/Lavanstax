/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



const Lavan = require("../../bot")
const config = require("../../config")
const Language = require('../../language');
const Lang = Language.getString('system_stats');
module.exports.run = async (bot, message, args) => {

    var randomstring = arr => arr[Math.floor(Math.random() * arr.length)];
    ALIVE_STR = randomstring([
        "Userbotunuz çalışıyor ve sana bişey demek istiyor... Seni seviyorum❤️  ",
        "🎆 Endişelenme! Seni yanlız bırakmam. Lavanstax çalışıyor.",
        "⛈️ Elimden gelenin en iyisini yapmaya hazırım. ",
        "✨ Lavanstax sahibinin emirlerine hazır...  ",
        "Lavanstax Çalışıyor.  ",
        "Benimi Aramıştın ❓ Ben Buradayım Merak Etme  ",
        "Hey beni mi aramıştın? Ben buradayım merak etme! sadece kodlarıma göz atıyordum...",
        "Botunuz çöktü lütfen yeniden kurun!\nHahahaha sadece şaka yapıyorum dynom bitene kadar başının belasıyım...",
        "Geliştiricilerim bana dünyada ilk olduğumu söylediler, gerçekten öyle miyim?\nAhhhh beni mi arıyordun bende tam arkadaşlarımla konuşuyordum... Merak etme seni yalnız bırakmam ben buradayım <3."

    ])
    await message.chat.sendMessage(ALIVE_STR)

     
    }

module.exports.config = {
    command: "alive",
    description: `${Lang.ALIVE_DESC}`
}

