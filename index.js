const TelegramBot = require('node-telegram-bot-api');

const token = '7940352807:AAH0QJeQIl4Uo94LoiJz14Z9dmx8RbxGgxU';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const name = msg.from.first_name;

  const welcomeMessage = `
*Hades188 Admin Bot* 🤖
Selamat Datang ${name} di *HADES188*! 🃏


🌟Produk Unggulan:
🎰 Slot Online
🎲 Casino Live
🏆 Sportsbook
🕹️ Arcade Game

🎯 Keunggulan Kami:
✅ Peluang menang tinggi & fair play
🎁 Promo & bonus harian menarik
💬 Layanan pelanggan responsif 24/7


Ketik /menu untuk mulai atau pilih tombol di bawah ini untuk akses cepat!
`;

  const options = {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{ text: ' Login', url: 'https://daftarhades.com' }],
        [{ text: ' Link Alternatif', url: 'https://t.ly/hades188akses' }],
        [
          { text: '📞 Hubungi CS', url: 'https://t.me/hades188_official' },
          { text: '👥 Grup Resmi ', url: 'https://t.me/Hades188_Group_Resmi' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, welcomeMessage, options);
});

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;

  const keyboard = {
    reply_markup: {
      keyboard: [
        ['📱 Unduh APK Resmi HADES188'],
        ['🎁 Lihat Promo & Bonus Terbaru'],
        ['🎯 Cek Bocoran Slot Gacor Hari Ini']
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  };

  bot.sendMessage(chatId, 'Pilih salah satu menu di bawah ini:', keyboard);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (text.includes('bocoran') || text.includes('rtp')) {
    bot.sendMessage(chatId, '📊 Bocoran Slot Gacor Hari Ini:\nhttps://t.ly/Hades188RTP');
  } else if (text.includes('promo') || text.includes('bonus')) {
    bot.sendMessage(chatId, '🎁 Promo Hari Ini:\nhttps://t.ly/PromoHades188');
  } else if (text.includes('login') || text.includes('daftar') || text.includes('apk')) {
    bot.sendMessage(chatId, '📱 Download APK & Daftar:\nhttps://t.ly/APKHADES');
  }
});


