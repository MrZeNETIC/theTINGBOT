const Discord = require('discord.js');
const client = new Discord.Client();

var memes = [
    "https://i.pinimg.com/originals/eb/8a/38/eb8a385b4555ba3e66463d02cc2b5a94.jpg",
    "https://pics.me.me/priest-do-you-take-my-man-as-your-hubby-girl-5369999.png",
    "https://pics.me.me/when-you-buy-rice-krispies-mans-not-hot-michael-bapaah-27576125.png",
    "https://pics.me.me/when-youre-showing-someone-a-video-and-they-tap-the-20604920.png",
    "https://pics.me.me/when-you-holla-at-a-peng-ting-and-her-friends-10591348.png"
];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	} else if (message.content === '!help') {
    	message.reply('This bot is still under development, however available commands inclue the folllowing:');
        message.channel.sendMessage(' !help: list commands \n memes pls: gives a link to a meme \n ping: replies with pong');
  	} else if (message.content === 'memes pls') {
        var meme = Math.random() * (2 - 0) + 0;
    	message.channel.send("Here's you a meme!",{files[memes[meme]]});
  	} else if (message.content === 'please') {
    	message.reply('no');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
