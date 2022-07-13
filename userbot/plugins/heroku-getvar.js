/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


const Config = require('../../config');
const Heroku = require('heroku-client');
const Language = require('../../language');
const Lang = Language.getString('heroku');
const heroku = new Heroku({
    token: Config.API_KEY
});
let baseURI = '/apps/' + Config.APP_NAME;


exports.run = async(client, message, args) => {
    let mesaj =  args.join(' ');
    
    
    if (mesaj === '') return message.chat.sendMessage(Lang.KEY_VAL_MISSING);
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (mesaj.trim() == vr) return message.chat.sendMessage((vr + " : " + vars[vr]));
        }
        message.chat.sendMessage(Lang.NOT_FOUND);
    }).catch(async (error) => {
        message.chat.sendMessage(error.message);
    });
    

};





module.exports.config = {
  command: "getvar",
  description: `${Lang.GETVAR_DESC}`
}