<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Xiao" src="https://i.goopics.net/PO1L4.png">

# [Insta.js](https://npmjs.com/@ber4tbey/insta.js)

💬 Object-oriented library to interact with Instagram! Based on **[instagram-private-api](https://github.com/dilame/instagram-private-api)**, it is very similiar to **[discord.js](https://npmjs.com/discord.js)**.

## Installation
```
npm install @ber4tbey/insta.js
```

## Example

Here is a simple ping command made with the library:

```js
const Insta = require('@ber4tbey/insta.js');

const client = new Insta.Client();

client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return

    message.markSeen();

    if (message.content === '!ping') {
        message.reply('!pong');
    }
});

client.login('username', 'password');
```
## Owner
[![Androz2091](https://github.com/Androz2091.png?size=100)](https://github.com/Androz2091) 
---|
[Androz](https://t.me/Androz2091)   
Author

## Maintainers
[![Ber4tbey](https://github.com/Ber4tbey.png?size=100)](https://github.com/Ber4tbey) 
---|
[Ber4tbey](https://t.me/Ber4tbey)   
Maintainer 

## Credits

🧡 Big thanks to **[Nerixyz](https://github.com/Nerixyz)** and **[dilame](https://github.com/dilame)** for their libraries.* [Androz2091](https://github.com/Androz2091)
