/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


const Config = require('../../config');
const Heroku = require('heroku-client');
const got = (...args) => import('got').then(({default: got}) => got(...args));
const Language = require('../../language');
const Lang = Language.getString('heroku');
const Langg = Language.getString('afk');
const heroku = new Heroku({
    token: Config.API_KEY
});
let baseURI = '/apps/' + Config.APP_NAME;

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " " + Langg.HOUR + ", " : " " + Langg.HOUR + ", ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " " + Langg.MINUTE + ", " : " " + Langg.MINUTE + ", ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " " + Langg.SECOND : " " + Langg.SECOND) : "";
    return hDisplay + mDisplay + sDisplay; 
}


module.exports.run = async (bot, message, args) => {
    heroku.get('/account').then(async (account) => {
        url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
        headers = {
            "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
            "Authorization": "Bearer " + Config.API_KEY,
            "Accept": "application/vnd.heroku+json; version=3.account-quotas",
        }
        await got(url, {headers: headers}).then(async (res) => {
           const resp = JSON.parse(res.body);
           total_quota = Math.floor(resp.account_quota);
           quota_used = Math.floor(resp.quota_used);         
           percentage = Math.round((quota_used / total_quota) * 100);
           remaining = total_quota - quota_used;
           message.chat.sendMessage(
                Lang.DYNO_TOTAL + (secondsToHms(total_quota)) +
                Lang.DYNO_USED + secondsToHms(quota_used) +  
                Lang.PERCENTAGE + percentage +
                Lang.DYNO_LEFT + secondsToHms(remaining)
           );
        }).catch(async (err) => {
            message.chat.sendMessage(err.message);     
        });        
    });
};

module.exports.config = {
     command: "dyno",
     description: `${Lang.DYNO_DESC}`
}