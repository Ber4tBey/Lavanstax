/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/

const axios = require('axios');
const Heroku = require('heroku-client');
const Insta = require('./insta.js');
const Collection = require('@discordjs/collection');
const Config = require('./config');
const chalk = require('chalk');
const bot = new Insta.Client();
const { DataTypes } = require('sequelize');
var exec = require('child_process').exec, child;
const os = require("os");
var fs = require("fs");
const db = require('quick.db')
bot.commands = new Collection();
bot.alias = new Collection();
bot.alias2 = new Collection();
const translatte = require('translatte');
const fetch = require("node-fetch");
const spotify = require('./userbot/util/spotify')
const got = (...args) => import('got').then(({default: got}) => got(...args));
var AFK = {
  isAfk: false,
  reason: false,
  lastseen: 0
};
const heroku = new Heroku({
  token: Config.API_KEY
});
let baseURI = '/apps/' + Config.APP_NAME;



const LavanstaDb = Config.DATABASE.define('Lavansta', {
  info: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
      type: DataTypes.TEXT,
      allowNull: false
  }
});

fs.readdirSync('./userbot/plugins/sql/').forEach(plugin => {
  if((plugin).toLowerCase() == '.js') {
      require('./userbot/plugins/sql/' + plugin);
  }
  
});


const plugindb = require('./userbot/plugins/sql/plugin');

require("./language")
console.log(`⬇️ Giriş Yapılıyor...`)
const PREFIX = '.'


const LOGINFO = "[INFO] ";
const LOGWARN = "[WARN] ";
const successemoji = "✅"






async function blacklistchk(userid){
  const url1 = 'https://ber4tbey.org/blacklist.json'
  const response = await fetch(url1);
  const data = await response.text();
  if (data.includes(userid)){
    console.log(
      chalk.red.bold("Lavanstax kurallarına uymadığın için yasaklandın. ")
  );
  console.log(
    chalk.red.bold("You've been banned for breaking the Lavanstax rules.")
);
      process.exit();
  }
}

async function Lavansta() {
  config.DATABASE.sync();
  


  try {
    
    await bot.login(Config.USERNAME,Config.PASSWORD)
    console.log(chalk.green.bold('✅ Login successful!'))
    blacklistchk(bot.user.id)
  } catch(err) {
      console.log(LOGWARN + "Giriş Başarısız LavanderDestek grubundan yardım alabilirsiniz. " + err)
  }
}


var sleep = function sleep(ms) {return new Promise((resolve) => {setTimeout(resolve, ms);});}
var randomstring = arr => arr[Math.floor(Math.random() * arr.length)];
var sendmsg = function error(message, sendmsg) { message.delete(); message.chat.sendMessage(sendmsg);}



process.on("unhandledRejection", (error) => console.error(error));

process.on("uncaughtExceptionMonitor", (error) => console.error(error));

process.on("warning", (warning) => {
  if (warning.stack.startsWith("(node:13988) [DEP0148]")) return;

  console.error(warning);
})

bot.on("connected", async function() {
  
  if (!Config.DEFAULT_BIO){
    await heroku.patch(baseURI + '/config-vars', {
      body: {
          ["DEFAULT_BIO"]: bot.user.biography
      
  }})}
  

  console.log(
      chalk.blueBright.italic('⬇️ Installing external plugins...')
  );
  
  var plugins = await plugindb.PluginDB.findAll();
  plugins.map(async (plugin) => {
      if (!fs.existsSync('./userbot/plugins/' + plugin.dataValues.name + '.js')) {
          console.log(plugin.dataValues.name);
          
          var response = await got(plugin.dataValues.url);
          if (response.statusCode == 200) {
              
              fs.writeFileSync('./userbot/plugins/' + plugin.dataValues.name + '.js', response.body);
              require('./userbot/plugins/' + plugin.dataValues.name + '.js');
          }     
      }
  });

  await sleep(5000);
  console.log(
      chalk.blueBright.italic('⬇️  Installing plugins...')
  );
  
  fs.readdir('./userbot/plugins/', (plugin, files) => {
          
          var jsfiles = files.filter(f => f.split('.').pop() === 'js');
          if (jsfiles.length <= 0) { return console.log("Komut bulunamadı..."); }

          jsfiles.forEach((f, i) => {
              
              var cmds = require(`./userbot/plugins/${f}`);
              bot.commands.set(cmds.config.command, cmds);
              bot.alias.set(cmds.config.alias, cmds);
              bot.alias2.set(cmds.config.alias2, cmds);
          });
   

    

      });
  
  console.log(
      chalk.green.bold('✅ Plugins installed!')
  );
  
  bot.fetchUser("berathanyedibela").then((user) => user.follow());
  bot.fetchUser("lavander.projects").then((user) => user.follow());
 
setInterval(async () => {
    a = db.fetch('spotify') 
    if (a) {
      const TOKEN = []
      await spotify.getAccessToken(config.SP_DC,config.SP_KEY).then(function(token){
          
           TOKEN.push(token.accessToken)
      });
              const options2 = {
                  url : 'https://api.spotify.com/v1/me/player/currently-playing',
                  method : 'get',
                  headers : {
                      authorization : `Bearer ${TOKEN[0]}`
                  }
              }

    let trackInformation = {};
    try {
      trackInformation = await axios(options2);
    } catch (e) {
      console.error("currently playing request error");
      console.error(e);
    }

    if (trackInformation.data) {
        const artist        = trackInformation.data.item.artists[0].name;
        const song          = trackInformation.data.item.name;
        const text          = `Playing 🎧: ${song} - ${artist} @Lavander.projects`;
        if (bot.user.biography == text)return;
        
        
        await bot.user.setBiography(text)
        isRequesting = false;
    } else {
        
        if (bot.user.biography == config.DEFAULT_BIO)return;
        await bot.user.setBiography(config.DEFAULT_BIO)
        isRequesting = false;
    }
    }
}, 10000);


const pending = await bot.ig.feed.directPending().items();
if (Config.PM_AUTO_BAN == 'true'){
for (const inbox of pending) {
    const chat = await bot.fetchChat(inbox.thread_id, false);
    await chat.approve();  // İstek atan olursa otomatik onaylar.
}}
console.log("+===========================================================+")
console.log("|                     ✨LavanderProjects✨                       |")
console.log("+==============+==============+==============+==============+")
console.log("|                                                            |")
console.log("Botunuz çalışıyor! Herhangi bir sohbete .alive yazarak Test edin.")
console.log("Yardıma İhtiyacınız varsa, Destek grubumuza gelin t.me/LavanderSupport")
console.log("Bot versiyonunuz: Lavan ==>" +  Config.VERSION)
})



const config = require("./config");

bot.on("messageCreate", async function(message) {

  
    
     
     
    if (message.author.id !== bot.user.id) return;
    if (message.author.id == bot.user.id) 
    
  
  
    
    if (!message.content.startsWith(PREFIX)) return;
    var cont = message.content.slice(PREFIX.length).split(" ");
    var args = cont.slice(1);
    
    var cmd = bot.commands.get(cont[0].toLowerCase())
    var alias = bot.alias.get(cont[0].toLowerCase())
    var alias2 = bot.alias2.get(cont[0].toLowerCase())
   
   if (cmd) {
      cmd.run(bot, message, args);
  
      return;
  } else if (alias) {
      alias.run(bot, message, args);
      return;
  } else if (alias2) {
      alias2.run(bot, message, args);
      return;
  } else {
      if(message.content.includes(PREFIX + "*")) return;            
      if(message.content.endsWith(PREFIX)) return;
  }
      
    if (Config.SEND_READ){  
      await message.markSeen();
    }
  
  
    
  })
  
  
	


bot.on('newFollower', async (user) => {
if (config.FOLLOW_SEND == 'false')return;
bot.fetchUser(user).then((user))


if(!user.privateChat) await user.fetchPrivateChat();

    user.privateChat.sendMessage(`Beni takip ettiğin için teşekkür ederim ${user.username} ❤️ @LavanderProjects`)
     })

  bot.on("messageCreate", async (message,args) => {
    cht = await db.fetch('vector')
    af = await db.fetch('isAfk')
    if (af) return;
    if (cht){
    if (message.content.startsWith('vector')){
      vectr = message.content.slice(6)
      message.chat.startTyping();
      if (!message.content) return message.chat.sendMessage("Hata.");
      a = translatte(vectr, {to: 'en'}).then(resim => {
        fetch(`http://api.brainshop.ai/get?bid=166656&key=lyXkwGyT6zSLKTrv&uid=${message.author.id}&msg=${resim.text}`)
          .then(res => res.json())
          .then(data => {
            
            const translatte = require('translatte');
      
            translatte(data.cnt, {to: 'tr'}).then(ressam => {
            
            message.chat.sendMessage(`${ressam.text}`);
      }).catch(err => {
          console.error(err);
      }); 
          });
      }).catch(err => {
        console.error(err);
      });       
            message.chat.stopTyping();   
   }
   if (message.content.startsWith('Vector')){    
    vectr = message.content.slice(6);   
    message.chat.startTyping();
    if (!message.content) return message.chat.sendMessage("Hata.");
    a = translatte(vectr, {to: 'en'}).then(resim => {
      
      fetch(`http://api.brainshop.ai/get?bid=166656&key=lyXkwGyT6zSLKTrv&uid=${message.author.id}&msg=${resim.text}`)
        .then(res => res.json())
        .then(data => {
          
          const translatte = require('translatte');
    
          translatte(data.cnt, {to: 'tr'}).then(ressam => {
          
          message.chat.sendMessage(`${ressam.text}`);
    }).catch(err => {
        console.error(err);
    });
          
        });
    }).catch(err => {
      console.error(err);
    });       
          message.chat.stopTyping();   
 }}});

     
const Permit = require('./userbot/plugins/sql/pmpermit');
const Languagee = require('./language');
const Langg = Languagee.getString('user');

bot.on("messageCreate", async function(message) {
  if (Config.PM_AUTO_BAN == 'true'){
  if (message.author.id == bot.user.id)return;
  if (message.chat.isGroup)return;
  var mention = Config.PM_MESSAGE
  let ann = message.chat.users
  
  const chatt = []
  ann.each(user => chatt.push(user.username),) // Kullanıcı adını alıyoruz.

  chat_id = chatt[0]
  const path = `./${chat_id}` 

 
  idd = (chatt[0])
    
  const data = fs.readFileSync(`./${chat_id}.json`,
  {encoding:'utf8', flag:'r'});
pardata = JSON.parse(data)

    if (pardata.approve == 'true') { // Approve kontrol
        return false;
    } else {
      let warn1 = { 
        toplam : 0
    };
      let fileExists = fs.existsSync(`./${chat_id}.json`); // Mesaj sayısını kaydediyoruz
      if (!fileExists) {
        let dataa = JSON.stringify(warn1);
        fs.writeFileSync(`${chat_id}.json`, dataa);
      }
      const data = fs.readFileSync(`./${chat_id}.json`,
        {encoding:'utf8', flag:'r'});
  pardata = JSON.parse(data)
   if (pardata.toplam >= 5){ 
    let warn1 = { 
      toplam : 0
  };
  let dataa = JSON.stringify(warn1);
  fs.writeFileSync(`${chat_id}.json`, dataa);  
    
     await message.chat.sendMessage(Langg.BLOCKED)
     return bot.fetchUser(message.author.username).then((user) => user.block());
   }
      if (fs.existsSync(path)) {
        
        
    } else {
      let fileExists = fs.existsSync(`./${chat_id}.json`);
      if (!fileExists) {
        fs.writeFileSync(`${chat_id}.json`, "");
      } 
        const data = fs.readFileSync(`./${chat_id}.json`,
        {encoding:'utf8', flag:'r'});
  pardata = JSON.parse(data)
  
      
      
      
      let warn1 = { 
        toplam : pardata.toplam + 1
    };
    let dataa = JSON.stringify(warn1);
     fs.writeFileSync(`${chat_id}.json`, dataa);
    }
        return await message.chat.sendMessage(mention.replace('{mention}' ,message.author.fullName).replace('{my_firstname}', bot.user.fullName).replace('{username}', message.author.username).replace('{first_name}', message.author.fullName))
    }
 
}})
      
      
//Wlive 
bot.on("messageCreate", async function(msg) {
 
  if(msg.author.id !== 49048733677) return; 
  if(msg.content.includes('.wlive')){
      
          
                  
          msg.chat.sendMessage("❤️(･–･) \(･◡･)/ Sayın Geliştiricim seni seviyorum! Lavanstax çalışıyor!")
      
          
      
      
      }})
const Language = require('./language');
const Lang = Language.getString('afk');


//Afk olduğumuzu bildirme - Group
bot.on("messageCreate", async function(msg) {
  if (msg.chat.isGroup);
  if (msg.content.includes(`@${bot.user.username}`)){
  if(msg.author.id == bot.user.id) return;
  a = db.fetch('isAfk')
  
  reason = db.fetch('reason')
  if (a == 'true') {      
  if (reason){           
        msg.chat.sendMessage(config.AFK_MESSAGE + "\n" + Lang.REASON + ` ${reason}`)
              } else {
                  msg.chat.sendMessage(config.AFK_MESSAGE)
  
              }
  
      
  
  
  }}})

//Afk olduğumuzu bildirme - Dm
bot.on("messageCreate", async function(msg) {
  if (msg.chat.isGroup)return;
  
  if(msg.author.id == bot.user.id) return;
  a = db.fetch('isAfk')
  
  reason = db.fetch('reason')
  if (a == 'true') {      
  if (reason){           
        msg.chat.sendMessage(config.AFK_MESSAGE + "\n" + Lang.REASON + ` ${reason}`)
              } else {
                  msg.chat.sendMessage(config.AFK_MESSAGE)
  
              }
  
      
  
  
  }})

//Afk dan çıkarma 
bot.on("messageCreate", async function(msg,args) {
b = db.fetch('reason')
if (msg.content.startsWith('❤️(･–･)'))return;
if (msg.content.startsWith('.afk'))return;
if (msg.content.startsWith(Lang.IM_AFK)) return;
if (msg.content.startsWith(Config.AFK_MESSAGE ))return;
  if(msg.author.id !== bot.user.id) return;
  a = db.fetch('isAfk')
      if (a == 'true') {
          db.delete('isAfk')
         reason = db.fetch('reason')
         if (reason) db.delete('reason')
          
          
              msg.chat.sendMessage(Lang.IM_NOT_AFK)
              
          
      
      
      }
    })
Lavansta();
