/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

     module.exports.run = async(client, message,args) => {
        let mesaj = args.join(' ');
        message.delete();
        message.chat.sendMessage('Bilgiler alınıyor...').then(() => {
            client.fetchUser(mesaj).then((user) =>
            message.chat.sendMessage(
        `Tam İsim: ${user.fullName}
        Kullanıcı Adı: ${user.username}
        ID: ${user.id}
        Biyografi:\n${user.biography}
        Takipçi: ${user.followerCount}
        Takip: ${user.followingCount}
        Onaylı: ${user.isVerified}
        Gizli: ${user.isPrivate}
        Paylaşım: ${user.mediaCount}
`)
        )
        })

    }

module.exports.config = {
    command: 'info',
    description: 'Kişi hakkında bilgi verir.',
}