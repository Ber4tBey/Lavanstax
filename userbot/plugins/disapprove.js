const fs = require("fs")


module.exports.run = async (bot, message, args,match) => {
    let ann = message.chat.users
    const chatt = []
    ann.each(user => chatt.push(user.username))
   idd = (chatt[0])
 
   const data = fs.readFileSync(`./${chat_id}.json`,
   {encoding:'utf8', flag:'r'});
    pardata = JSON.parse(data)

    if (!pardata.approve) {
        
        await message.chat.sendMessage("Zaten mesaj gönderemiyor")
        return false;
    } else {
        let warn1 = { 
            toplam : 0,
            
            
        };
        let dataa = JSON.stringify(warn1);
        fs.writeFileSync(`${idd}.json`, dataa); 
        await message.chat.sendMessage("Artık mesaj gönderemezsin")
    }
    
}

module.exports.config = {
    command: "disapprove",
    description: `DM engeller`
}
