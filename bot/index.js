const Discord = require('discord.js');
const bot = new Discord.Client();

//Variables
var prefix = '-';
var version = 'V1';
var invite = 'https://discordapp.com/oauth2/authorize?client_id=262219689286041601&scope=bot&permissions=2146958463';
var ball = ['Yes','No doubt about it','Try again','signs point to yes','I say no','No chance','Dont think so'];
var Trick = ['```***Force a card*** \nTo force a card get the card on top of deck and look at it put back on top of deck then walk to someone \nget the cards and tell them when to stop whilst flicking them down \nWhen they say stop pretend to grab that card but with your thumb flick top card out, they now have the card you want```']
var RB = Math.floor(Math.random () * ball.length);
bot.on("guildCreate" , guild => {
   guild.defaultChannel.sendMessage('Hello! thanks for inviting me to' + ' Say help or -cmd to start, to invite me to your own server use this link ' + invite + ' also join https://discord.gg/NbTXEAZ')
});

const newUsers = [];

bot.on("guildMemberAdd", (member) => {
  console.log('I was addded to a guild')
  const guild = member.guild;
  if(!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.user.id, member.user);

  if(newUsers[guild.id].size > 1) {
    var userlist = newUsers[guild.id].map(u => u.mention()).join(" ");
    guild.channels.get(guild.id).sendMessage("Welcome our new users!\n"+userlist);
    newUsers[guild.id] = new Discord.Collection();
  }

bot.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if(newUsers[guild.id].exists("id", member.user.id)) newUsers.delete(member.user.id);
});

});

bot.on('ready', () =>{
    console.log('I am ready!')
});



//hello

bot.on('message', (message) => {
if (message.content == '-hi'){
   message.channel.sendMessage('Hey,' +message.author.username);
}


//MyName
if (message.content == '-MyName'){
   message.channel.sendMessage('Your name is ' + message.author.username);
}


//ping


if (message.content == '-ping'){
   message.channel.sendMessage('Pong');
}


//info

if (message.content == '-info'){
   message.channel.sendMessage('AlexLikesToCode is the owner of this bot, it is fairly new');
}


//command


if (message.content == '-cmd'){
   message.channel.sendMessage('```The commands so far are: \n-join - Send link to add bot to your server \n-info - gives info on bot \n-roll - rolls random number 1- 100 \n-ping Ping Pong \n-hi - replys Hello \n-MyName - replys your name \n-owner - tells you owners name \n-8ball - Digital 8ball \n-BotChat invites to botchat \n-version - tells you the version \n-Prune (amount) - deletes the amount of messages asked to \n-CardTrick - Say this for how to do a card trick or to do with cardtricks```');
}
if (message.content == '-modcmd'){
   message.channel.sendMessage('```So far the mod commands are: -prune - used to delete messages in bulk maximum number allowed to delete at once is 100 say something like -prune 20 (number amount to delete)```');
}

//help


if (message.content == 'help'){
   message.author.sendMessage('```***lowRanks***\n The prefix is - and say -cmd in the guild chat for lsit of commadns \n***Mods*** \nTo allow yourself/others to use bot commadns such as prune make a role called Mods \nFor a list of mod commands type -modcmd in guild chat!```');
}



//join


if (message.content == '-join'){
   message.channel.sendMessage('Use this link to invite me https://discordapp.com/oauth2/authorize?client_id=262219689286041601&scope=bot&permissions=2146958463');
}


//secret command

if (message.content == '-Harambe'){
   message.author.sendMessage('OMG SECRET COMMAND OMG OMG OMG OMG screenshot you doing this command then PM to AlexLikesToCode for a custom command!');
}


//owner


if (message.content == '-owner'){
   message.channel.sendMessage('`the owner is AlexLikesToCode`');
}


//Version

if (message.content == '-version'){
   message.channel.sendMessage('`This bot is currenty in V1`');
}

//BotChat
if (message.content == '-BotChat'){
   message.channel.sendMessage('join https://discord.gg/NbTXEAZ');
}

//ban


//8ball
if (message.content.startsWith("-8ball")) {
message.channel.sendMessage(ball[Math.floor(Math.random () * ball.length)]);
}
//RollNumber


if (message.content.startsWith("-roll")) {
message.channel.sendMessage(Math.floor(Math.random() * 100));
};


//PruneMessages

    if (message.content.startsWith("-prune")) {
     let modRole = message.guild.roles.find("name","Maker");
     let gawfRole = message.guild.roles.find("name","Mods");
      let args = message.content.split(" ").slice(1);
     if(message.member.roles.has(modRole.id) || message.member.roles.has(gawfRole.id)) {
       if (parseInt(args[0]) > 100) {message.reply(`\`Cannot delete more than 100 messages at once\``); return;}
       message.channel.fetchMessages({limit: args[0]}).then(msgs => {
           message.channel.bulkDelete(args)
           function _pinned(message) {
               if (message.pinned) return false;
               else return true;
           }
           
       });
   }
   }

//cardtrick1

if (message.content.startsWith("-CardTrick")) {
message.channel.sendMessage(Trick[Math.floor(Math.random () * Trick.length)]);
}



})
    bot.login("MjYyMjE5Njg5Mjg2MDQxNjAx.C0GM8w.TnEegH_L5GPotFWKsUhKseqjDVI");