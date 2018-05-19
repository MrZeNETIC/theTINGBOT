const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'save me') {
    	message.reply('no you');
  	}
});


client.login(process.env.BOT_TOKEN);
