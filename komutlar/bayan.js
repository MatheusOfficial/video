const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
// 12. SATIRDA 2. ROL VAR
  
const tag = "𐌸"; // TAGINIZ (BAŞA GELECEK) 
  
const kayıtlı = message.guild.roles.find(r => r.id === "771324162970484757"); // ERKEK ROLÜNÜN İDSİ
const kayıtlı2 = message.guild.roles.find(r => r.id === "771324162970484757"); // ERKEK ROLÜNÜN İDSİ
const unregister = message.guild.roles.find(r => r.id === "771324165340659714"); // UNREGİSTER ROLÜNÜN İDSİ
  
  
  
  
  
  
  
  
  const log = message.guild.channels.find(c => c.id === "771324326225117204"); // KAYIT KANALININ İDSİ
  const genelchat = message.guild.channels.find(c => c.id === "771324356021714954"); // GENEL SOHBET KANALININ İDİSİ
  const dogrulandi = client.emojis.find(emoji => emoji.name === "mavtk"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM)
  if(!message.member.roles.array().filter(r => r.id === "771324153134448650")[0]) { // KAYIT YAPAN ROLÜN İDSİ
    
    



    
    
    return message.channel.send("Kayıt Yapabilmek İçin `Kayıt Sorumlusu` Rolüne Sahip Değilsiniz.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const apexcode = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    apexcode.setNickname(`${tag} ${nick} | ${yas}`)
     apexcode.addRole(kayıtlı)
         apexcode.addRole(kayıtlı2)
    apexcode.removeRole(unregister)
    apexcode.setNickname(`${tag} ${nick} | ${yas}`)
    apexcode.removeRole(unregister)
    
    
    
    
    
    
    
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`Kayıt Tamamlandı !`)
    .setDescription(`
Kayıt Eden <@${message.author.id}>
Verilen Rol <@&${kayıtlı.id}>
Alınan Rol ${unregister}
Yeni İsmin ${tag} ${nick}'${yas}
Kayıt Eden  ${message.author.username}
`)
    .setColor("BLACK")
    log.send(embed)
    message.react(dogrulandi)
    
        const agla = new Discord.RichEmbed()
        genelchat.send(`<@${apexcode.user.id}> **Pengiablr Sunucumuzda Aramıza Hoş Geldin, Keyifli Vakitler Geçirmeni Dileriz.**`)      


  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "girl", "grl"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   
