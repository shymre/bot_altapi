const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Ho� geldin **' + username + '**! Buraya arkada�lar�n� davet edebilir ve onlarla oyun oynayabilir, yeni arkada�lar edinip onlarla oyunlar oynay�p sohbet edebilirsin!');
};
