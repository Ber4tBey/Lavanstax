
const Db = require('./sql/pmpermit');
const Heroku = require('heroku-client');







module.exports.run = async (bot, message, args,match) => {
    let ann = message.chat.users
    const chatt = []
    ann.each(user => chatt.push(user.id))
   idd = (chatt[0])
 
    var aprv = await Db.PermitDB.findAll({
        where: {uid: idd}
    });
    
    if (aprv.length >= 1) {
        await aprv[0].destroy();
        await message.chat.sendMessage("Artık mesaj gönderemez")
        return false;
    } else {
        await message.chat.sendMessage("Zaten Mesaj gönderemiyor")
    }
    
}

module.exports.config = {
    command: "disapprove",
    description: ``
}