const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const prefix = "/";
const client = new Client ({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { ActivityType } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

client.on("ready", () => {
    console.log("SIRHB Is Online and Active");

    client.user.setActivity('~help', { type: ActivityType.Listening });
    client.user.setStatus('online');

})
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply({content: 'Yeah. GG bro'});
	}
	if (commandName === 'help') {
		await interaction.reply({ embeds: [helpembed], ephemeral: true });
	}
	if (commandName === 'faq') {
		await interaction.reply({ embeds: [faqembed], ephemeral: true });
	}
	if (commandName === 'releasedate') {
		await interaction.reply({ embeds: [releasedateembed], ephemeral: true });
	}
	if (commandName === 'whois') {
        await interaction.reply({ embeds: [whoisembed], ephemeral: true });
    }
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split (/ +/);
    const command = args.shift().toLowerCase();

    //message array
    const messageArray = message.content.split (" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //Commands
//Help Directory
  if (command === 'help') (
    message.channel.send({ embeds: [helpembed] })
  )
//FAQ Command
  if (command === 'faq') (
      message.channel.send({ embeds: [faqembed]}) //Make this tomorrow
  ) 
//Release Date
    if (command === 'releasedate') (
        message.channel.send({ embeds: [releasedateembed] })
    )
 //Who is SIRHB   
    if (command === 'whois') (
        message.channel.send({ embeds: [whoisembed] })
   )
//Q1: What is this place?
    if (command === 'whatisthis') (
        message.channel.send({ embeds: [whatisthisembed] })
    )
//Q2: Mage Help 1 - How to get a mage class
    if (command === 'magehelp') (
        message.channel.send ({ embeds: [magehelpembed] })
    )
})
//Embed Section

//Help Directory Embed
const helpembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('SIRHB Help Directory')
	.setURL('https://axion-network.fandom.com/wiki/Axion_Network_Wiki')
	.setDescription('**Use my prefix followed by the question and I will reply with some help!** *Questions must be asked without spaces between the words*')
	.setThumbnail('https://i.imgur.com/Akc3akA.png')
	.addFields(
		{ name: 'Server', value: '**Release Date**\n*say "~releasedate"*\n**Who Is SIRHB**\n*say "~whois"* ', inline: true },
		{ name: 'Minecraft', value: '**Knight Help**\n*say "~knighthelp"*\n**Warrior Help**\n*say "~warriorhelp*\n**Mage Help**\n*say "~magehelp"* ', inline: true },
		{ name: 'Website & Store', value: 'Some shit there', inline: true },
	)
	.setTimestamp()
	.setFooter({ text: 'SIRHB by xTekker#1728', iconURL: 'https://i.imgur.com/Akc3akA.png' });

// FAQ command embed
const faqembed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('F.A.Q')
    .setURL('https://axion-network.fandom.com/wiki/Axion_Network_Wiki')
    .setThumbnail('https://i.imgur.com/Akc3akA.png')
    .addFields(
        { name: 'Server FAQ', value: 'Currently being populated', inline: true },
        { name: 'Minecraft FAQ', value: 'Currently being populated', inline: true },
    )
.setTimestamp()
.setFooter({ text: 'SIRHB by xTekker#1728', iconURL: 'https://i.imgur.com/Akc3akA.png' });

//Releasedate command embed
const releasedateembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.addFields(
		{ name: 'Release Date?', value: 'Why are you in such a rush, mortal?'},
    )
	.setTimestamp()
	.setFooter({ text: 'SIRHB by xTekker#1728', iconURL: 'https://i.imgur.com/Akc3akA.png' });
    
//Whois command embed
const whoisembed = new EmbedBuilder()
	.setColor(0x0099FF)
	.addFields(
		{ name: 'Who Am I?', value: 'My designated Idenifier is Slightly Intelligent Really Helpful Bot or SIRHB for short, I was created by Tekker for the sole purpose ~~of ending the human race~~ of helping the users of Axion Network, I have been programmed with a vast knowledge bank, Seriously, you should see my backend code. ||Its a mess||.', inline: true },
	)
	.setTimestamp()
	.setFooter({ text: 'SIRHB by xTekker#1728', iconURL: 'https://i.imgur.com/Akc3akA.png' });

//Whatisthis command embed
const whatisthisembed = new EmbedBuilder()
    .setColor(0x0099FF)
    .addFields(
        { name: 'What is this?', value: 'This is Axion Network, The home of Elysium Survival. A unique take on Minecrafts survival game mode, with hand crafted features inspired by some of the teams favourite games, such as Diablo, Fable and Baulders Gate', inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'SIRHB by xTekker#1728', iconURL: 'https://i.imgur.com/Akc3akA.png' });

//magehelp command embed with drop down menu
const magehelpembed = new EmbedBuilder()
    .setColor(0x0099FF)
    .addFields(
        { name: 'You need some help with the Mage Class, Hero? Use the drop down menu to select the issue.', value: 'It is what it is. figure it out yaself fam', inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'SIRHB by xTekker#1728', iconURL: 'https://i.imgur.com/Akc3akA.png' });
    


client.login ("Token Here")
