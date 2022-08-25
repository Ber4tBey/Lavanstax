
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
        await message.chat.sendMessage("Bu kullanıcı size zaten mesaj gönderebiliyor.")
        return false;
    } else {
        await Db.PermitDB.create({ uid: idd});
        return await message.chat.sendMessage("Artık bana mesaj gönderebilirsin.")
    }
}

module.exports.config = {
    command: "approve",
    description: ``
}