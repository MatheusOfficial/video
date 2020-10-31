const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    if (!message.member.roles.find("name", "♨️・ PΞИG Commanders")) {//KAYIT SORUMLUSU ROL ADINIZ
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`♨️・ PΞИG Commanders*\` **Rolüne Sahip Olman Lazım** ')//KAYIT SORUMLUSU ROL ADINIZ
            .then(m => m.delete(5000));
    }  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!member) return message.channel.send(`**${message.author.username}, Üzgünüz, demek istediğiniz kullanıcıyı bulamıyorum**!`);
  const isim = args[1]
  const iisim = args[2]
  const yas = args.slice(3).join('')
  
  if(!isim) return message.reply("Bir İsim Yazmalısın.")
  
  return member.guild.member(member).setNickname("Tagınız "+isim+" "+iisim+"").catch(err => ("İsmin ayarlanırken bir hata oluştu.!"))
  message.reply("Başarıyla Teyit Edildi.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '2isim',
  description: '.isim @etiket [ISIM] [YAŞ].',
  usage: '2isim'
};