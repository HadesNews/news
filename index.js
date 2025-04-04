
const TelegramBot = require('node-telegram-bot-api');


const bot = new TelegramBot('7536290975:AAE8iG5aoJ75NAtmRnWX7ToEj5mrWQtGxow', { polling: true });


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🎉 Selamat datang di *NARA188*!\n\nRasakan kemudahan bermain, akses cepat, dan layanan terbaik bersama bot resmi *NARA188*.', {
    parse_mode: 'Markdown'
  });
});


bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;
  const keyboard = {
    reply_markup: {
      keyboard: [
        ['📲 Akses APK & Daftar Akun'],
        ['🎁 Cek Promo & Bonus Spesial'],
        ['🎯 Info Bocoran Slot Gacor']
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  };
  bot.sendMessage(chatId, '📌 Pilih layanan yang kamu butuhkan di bawah ini:', keyboard);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (text.includes('bocoran') || text.includes('rtp')) {
    bot.sendMessage(chatId,
      '🎯 *Bocoran Slot Hari Ini:*\n\n🔥 Rekomendasi RTP tertinggi:\nhttps://t.ly/RTPNARA',
      { parse_mode: 'Markdown' }
    );
  } else if (text.includes('promo') || text.includes('bonus')) {
    bot.sendMessage(chatId,
      '🎁 *Promo Eksklusif NARA188:*\n\n- Bonus Levelup\n- Bonus Share wd\n\n➡️ Cek selengkapnya: https://t.ly/promonara188',
      { parse_mode: 'Markdown' }
    );
  } else if (text.includes('login') || text.includes('daftar') || text.includes('apk')) {
    bot.sendMessage(chatId,
      '📲 *Daftar & Mainkan Sekarang:*\n\nDownload APK Resmi NARA188:\nhttps://t.ly/apknara',
      { parse_mode: 'Markdown' }
    );
  }
});
