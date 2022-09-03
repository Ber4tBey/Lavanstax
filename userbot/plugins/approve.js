const fs = require("fs")
module.exports.run = async (bot, message, args,match) => {
    let ann = message.chat.users
  const chatt = []
  ann.each(user => chatt.push(user.username))
   let idd = (chatt[0])
   let warn1 = { 
    toplam: 0,
};
  let fileExists = fs.existsSync(`./${idd}.json`); 
  if (!fileExists) {
    
    let dataa = JSON.stringify(warn1);
    fs.writeFileSync(`${idd}.json`, dataa);
  }
   const data = fs.readFileSync(`./${idd}.json`,
   {encoding:'utf8', flag:'r'});
    pardata = JSON.parse(data)
  
    if (pardata.approve == "true") {
        await message.chat.sendMessage("Bu kullanıcı size zaten mesaj gönderebiliyor.")
        return false;
    } else {
        let warn1 = { 
            toplam : 0,
            approve: "true"
        };
        let dataa = JSON.stringify(warn1);
        fs.writeFileSync(`${idd}.json`, dataa); 
        
        return await message.chat.sendMessage("Artık bana mesaj gönderebilirsin.")
    }
}

module.exports.config = {
    command: "approve",
    description: `DM onaylar`
}
