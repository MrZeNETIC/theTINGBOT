const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'please') {
    	message.reply('no');
  	}
});

client.on('message', message => {
    if (message.content === 'memes pls') {
    	message.reply('A link cuz idk how to image, https://www.google.ca/search?q=ting+meme&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiyqfOM2JLbAhUrrlQKHS6eDtUQ_AUICigB&biw=1920&bih=974#imgrc=iBr3usWYc4rIsM:');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('This bot is still under development, however available commands inclue the folllowing:');
        message.channel.sendMessage(' !help: list commands \n memes pls: gives a link to a meme \n ping: replies with pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
