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
    if (message.content === 'who is ting') {
    	message.reply('Well my good sir, you see ting is the best of us all He is the lord, at everything, trully brings out the best in all of us');
  	}
});

client.on('message', message => {
    if (message.content === '.help') {
    	message.reply('This bot is still under development, however available commands inclue the folllowing:');
        message.channel.sendMessage(' .help: list commands \n memes pls: gives a link to a meme \n ping: replies with pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
