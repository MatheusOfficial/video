const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('guildMemberAdd', async (member) => {

  let kayıt = client.guilds.get(`759093254607470592`).channels.get(`771324324404527134`)
let memberinfo = {}

  memberinfo.discord = moment.utc(member.guild.members.get(member.id).user.createdAt).format(`DD/MM/YYYY`)
  memberinfo.sunucu = moment.utc(member.guild.members.get(member.id).joinedAt).format(`DD/MM/YYYY`) 
  kayıt.send(`<@&771324153134448650> İlgilenir misniz ?`)
  let apexcode = new Discord.RichEmbed()
  .setColor(`#000001`)
  .setTitle(`𐌸 P Ξ N G I A B L Я #Geliyorr`)
  .setDescription(`✨ Hoş geldin, ${member.user} \nSeninle birlikte **${member.guild.memberCount}** kişi olduk.\n
🔊 Ses Teyit Odasına Geçermsin :3
 🌹 Tagımızı Almaya Ne Dersin **𐌸**
🎈 <@&771324153134448650> Rolündeki Yetkililer Seninle İlgilenicektir


📌 **Hesap Bilgilerin**
📌 Hesap Oluşturma Tarihi ${memberinfo.discord}
📌 Sunucu Katılım Tarihi ${memberinfo.sunucu} 
📌 Sunucu Katılım Sıran ${member.guild.memberCount} /  ${member.guild.memberCount}
`)
  .setFooter('Dark 💖 𐌸 P Ξ N G I A B L Я ')
  .setImage(`https://cdn.discordapp.com/attachments/767412050305482773/770698827174379530/giphy-2.gif`)
  kayıt.send(apexcode)
});
//  .addField(`Hesap oluşturma tarihi:`, memberinfo.discord, true)
//  .addField(`Sunucu katılım tarihi:`, memberinfo.sunucu, true)