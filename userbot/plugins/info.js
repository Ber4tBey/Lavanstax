/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/
const Language = require("../../language")
const Lang = Language.getString('user');
module.exports.run = async(client, message,args) => {
    message.delete();
   
    let mesaj = args.join(' ');
    if (mesaj.length < 1) return message.reply(Lang.INFO_NEED);
    message.delete();
    message.chat.sendMessage(Lang.GET_INFO).then(() => {
        client.fetchUser(mesaj).then((user) =>
    
        message.chat.sendMessage(
    `${Lang.NAME} ${user.fullName}
     ${Lang.USERNAME} ${user.username}
    ID: ${user.id}
    ${Lang.BİOGRAPHY}\n${user.biography}
    ${Lang.FOLLOWER} ${user.followerCount}
    ${Lang.FOLLOW} ${user.followingCount}
    ${Lang.VERIFY} ${user.isVerified}
    ${Lang.PRIVATE} ${user.isPrivate}
    ${Lang.POST} ${user.mediaCount}
`)
    )
    }) 

}

module.exports.config = {
command: 'info',
description: `${Lang.INFO_DESC}`,
}
