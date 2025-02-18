export interface QuizOption {
  text: string;
  personality: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface PersonalityResult {
  name: string;
  title: string;
  description: string;
  image: string;
}

export const introText = `When you think of Shiva, how do you picture him? Dancing in ecstasy or sitting utterly still? Amidst the snowy peaks of Himalayas or the ancient temples of Kashi? As a radiantly beautiful being, or in a fearsome and ferocious form?

Being so multifaceted, it's no surprise that Shiva has also attracted a kaleidoscope of followers from all walks of life. His OG entourage ranged from hardcore spiritual seekers in states of utmost devotion to wild beings with an otherworldly appearance. This Mahashivratri, you too can be a part of Shiva's Squad, whatever kind you are!

Take this fun quiz to discover which member of Shiva's Squad you might relate with the most. Don't forget to share your results!`;

export const questions: QuizQuestion[] = [
  {
    question: "You'd like to be remembered for your:",
    options: [
      { text: "Gracefulness and caring nature", personality: "Parvati" },
      { text: "Steadfastness and patience", personality: "Nandi" },
      { text: "Wisdom and intellect", personality: "Ganapati" },
      { text: "Exuberance and spontaneity", personality: "Ganas" },
      { text: "Devotion and dedication", personality: "Saptarishis" },
      { text: "Strength and power", personality: "Kartikeya" }
    ]
  },
  {
    question: "People sometimes complain you are:",
    options: [
      { text: "Too codependent", personality: "Parvati" },
      { text: "Too slow to take action", personality: "Nandi" },
      { text: "Too much of a prankster", personality: "Ganapati" },
      { text: "Too wild and unpredictable", personality: "Ganas" },
      { text: "Too focused on your work", personality: "Saptarishis" },
      { text: "Too quick to anger", personality: "Kartikeya" }
    ]
  },
  {
    question: "What do you do when things aren't going your way?",
    options: [
      { text: "Seek support from those you look up to", personality: "Parvati" },
      { text: "Just wait it out – this too shall pass", personality: "Nandi" },
      { text: "Find a creative way to remove the obstacles", personality: "Ganapati" },
      { text: "Why get upset? Just forget about it!", personality: "Ganas" },
      { text: "Stay focused – you'll reach your goal no matter how long it takes", personality: "Saptarishis" },
      { text: "Fight hard for what you think is right", personality: "Kartikeya" }
    ]
  },
  {
    question: "Describe yourself and your best friend:",
    options: [
      { text: "You're so close that you're basically joined at the hip", personality: "Parvati" },
      { text: "You're always there for them and never get bored when they are nearby", personality: "Nandi" },
      { text: "You love discussing books and having long philosophical conversations – while sharing a snack, of course", personality: "Ganapati" },
      { text: "You're always telling inside jokes no one else can understand", personality: "Ganas" },
      { text: "You live far apart now, but you're proud of each other's accomplishments", personality: "Saptarishis" },
      { text: "You argue a lot, but only because you care so much", personality: "Kartikeya" }
    ]
  },
  {
    question: "Pick a set of emojis:",
    options: [
      { text: "🪷🤱👩‍❤️‍👨🥻🥰🤝🦚", personality: "Parvati" },
      { text: "😶🧍🐮⏳🕛🕓🕙", personality: "Nandi" },
      { text: "✍️🍰🤭🧠🐁🍛📚", personality: "Ganapati" },
      { text: "🥳👹🥂🤪🐙🕺🛸", personality: "Ganas" },
      { text: "🙂‍↕️🙏🏻🌎🛕🧘📿👣", personality: "Saptarishis" },
      { text: "💪🔥🏹⚔️⚖️🏆🏃", personality: "Kartikeya" }
    ]
  },
  {
    question: "Your dream job:",
    options: [
      { text: "A parent", personality: "Parvati" },
      { text: "Getting paid to just sit there", personality: "Nandi" },
      { text: "A renowned scholar", personality: "Ganapati" },
      { text: "No work, all play", personality: "Ganas" },
      { text: "A world teacher", personality: "Saptarishis" },
      { text: "A martial arts master", personality: "Kartikeya" }
    ]
  }
];

export const personalityResults: Record<string, PersonalityResult> = {
  "Parvati": {
    name: "Parvati",
    title: "The Compassionate Nurturer",
    description: "Gentleness is your greatest strength and you are a nurturer at heart, just like Parvati! Shiva's wife and his first disciple, Parvati is known for her benevolence, compassion, strength and an intense love that can even turn ferocious. When she expressed her desire to learn the science of yoga from Shiva, he simply included her as a part of himself, taking on the form of Ardhanarishvara – a perfect balance of masculine and feminine.",
    image: "/images/characters/Parvati.webp"
  },
  "Nandi": {
    name: "Nandi",
    title: "The Steadfast Companion",
    description: "Patience is your best quality, and you're always content to \"just be\" (without falling asleep of course), just like Nandi! This bull, often depicted in sculptures outside of Shiva temples, has been called Shiva's closest accomplice. His quality of waiting is held as a great virtue, as this ability to simply remain alert and wait without any expectation is the key to receptivity. In the Yogic culture, Nandi is a symbol of meditativeness.",
    image: "/images/characters/Nandi.webp"
  },
  "Ganapati": {
    name: "Ganapati",
    title: "The Wise Scholar",
    description: "You always have a book in one hand, a snack in the other, and a few tricks up your sleeve, just like Ganapati! Ganapati, or Ganesha, is revered as a remover of obstacles. He gained his distinctive appearance when Shiva cut off his head and then replaced it with the head of a gana. Famed for his insatiable appetite, he is celebrated on Ganesh Chaturti with delicious treats. But beyond his big belly, Ganapati also boasts an impressive brain. He is admired for his wisdom and for transcribing the epic Mahabharat using his own tusk.",
    image: "/images/characters/Ganpati.webp"
  },
  "Ganas": {
    name: "The Ganas",
    title: "The Boisterous Band",
    description: "Your life is bursting with joy from within, even though no one else understands you, just like the ganas! The ganas are Shiva's gang of celestial companions. They speak to Shiva in a cacophony of sounds that no one else around can understand, and their appearance is similarly inscrutable – they are often described as distorted, with boneless limbs sprouting from odd places on their bodies. This truly motley crew can be found intoxicated and dancing exuberantly with Shiva.",
    image: "/images/characters/Ganas.webp"
  },
  "Saptarishis": {
    name: "The Saptarishis",
    title: "The Devoted Disciple",
    description: "You are a true seeker with a single-pointed focus, willing to do whatever it takes for as long as it takes, just like the Saptarishis! These seven sages proved themselves worthy of receiving Shiva's knowing after 84 years of intense sadhana. After Shiva transmitted 112 tools for transformation to them, they set out in different directions across the globe, raising human consciousness around the planet. Their impact can still be seen and felt in the consecrated spaces they created and in more subtle ways that have seeped into the daily life of the cultures they touched.",
    image: "/images/characters/Saptarishi.webp"
  },
  "Kartikeya": {
    name: "Kartikeya",
    title: "The Invincible Warrior",
    description: "You value bravery and strength, and you're always willing to stand up for what you think is right, just like Kartikeya! Shiva's son is known by many names, including Muruga, Kumara, Skanda, and Subrahmanya. He is revered as a powerful warrior. Though he never held a kingdom, he fought across the continent seeking to wipe out injustice before finally realizing that violence is not the answer.",
    image: "/images/characters/Kartikeya.webp"
  }
};