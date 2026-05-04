const emoji = ["❤", "💘", "✔", "💯", "🆗", "🎇", "👑", "🥇", "🏆", "⭐", "👍"];

const getRandomEmoji = () => {
  const randomEmojiIndex = Math.floor(Math.random() * emoji.length);
  const randomEmoji = emoji[randomEmojiIndex];

  return randomEmoji;
};

export { getRandomEmoji };
