/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/




const simpleGit = require('simple-git');
const git = simpleGit()
const fs = require("fs")
const Language = require('../../language');
const Lang = Language.getString('updater');
const Heroku = require('heroku-client');
const Config = require('../../config');
const exec = require('child_process').exec;
const { PassThrough } = require('stream');


const heroku = new Heroku({ token: Config.API_KEY })
module.exports.run = async (bot, message, args) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return message.chat.sendMessage(
            
            Lang.UPDATE
        );        
    } else {
        var degisiklikler = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
      
        message.chat.sendMessage(
            degisiklikler + '```'
        
        ); 
    }}






module.exports.config = {
    command: "update",
    description: `${Lang.UPDATER_DESC}`
}