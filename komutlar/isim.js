const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   message.channel.send(' **Değiştirdim Mesajınız.** ')//DEĞİŞTİRDİM MESAJINIZ
  
    if (!message.member.roles.find("name", "Kayıt Sorumlusu Rolünün Adı")) {//KAYIT SORUMLUSU ROL ADINIZ
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`Kayıt Sorumlusu Rolünün Adı*\` **Rolüne Sahip Olman Lazım** ')//KAYIT SORUMLUSU ROL ADINIZ
            .then(m => m.delete(5000));
    }  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!member) return message.channel.send(`**${message.author.username}, Üzgünüz, demek istediğiniz kullanıcıyı bulamıyorum**!`);
  const isim = args[1]
  const yas = args.slice(2).join('')
  
  if(!isim) return message.reply("Bir İsim Yazmalısın.")

  return member.guild.member(member).setNickname("Tagınız"+isim+"").catch(err => ("İsmin ayarlanırken bir hata oluştu.!"))//TAG DEĞİŞECEK
  message.reply("Başarıyla Teyit Edildi.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'isim',
  description: '.isim @etiket [ISIM] [YAŞ].',
  usage: 'isim'
};