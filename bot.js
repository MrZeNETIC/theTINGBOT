const Discord = require('discord.js');
const client = new Discord.Client();





client.on('ready', () => {
    console.log('I am ready!');
    //client.User.setGame('.help for a list of commands')
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
    	message.channel.send('Well my good sir, you see Ting is the best of us all, \nHe is the lord, at everything, trully brings out the best in all of us \n...Even though sometimes he does leave us to become a ghost-ting :joy: \nThat and he loves burritos :burrito:');
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
