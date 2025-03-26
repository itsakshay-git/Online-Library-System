import { createSlice } from "@reduxjs/toolkit";
import { images } from "../constant";

// Initial state with some dummy books
const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: `${images.thegreatgatsbybird}`,
      category: "Fiction",
      rating: 4.5,
      description:
        "Set in the roaring twenties, The Great Gatsby follows the mysterious millionaire Jay Gatsby as he pursues his dream of rekindling a lost love with Daisy Buchanan. Through the eyes of the novel’s narrator, Nick Carraway, readers experience the lavish parties, moral decay, and deep loneliness hidden beneath the surface of the American Dream. Fitzgerald’s masterpiece explores themes of wealth, love, ambition, and the illusion of happiness. Gatsby’s relentless pursuit of a past that can never be reclaimed ultimately leads to a tragic downfall, serving as a powerful critique of materialism and the idea that success equals fulfillment.",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: `${images.tokillamockingbird}`,
      category: "Fiction",
      rating: 4.8,
      description:
        "This timeless novel tells the story of Scout Finch, a young girl growing up in a racially divided Southern town during the 1930s. Her father, Atticus Finch, is a lawyer defending a Black man wrongly accused of assaulting a white woman. Through Scout’s eyes, we witness the harsh realities of prejudice and injustice while also learning about compassion and integrity. Harper Lee masterfully explores themes of morality, empathy, and the loss of innocence. The novel remains a powerful commentary on social issues, encouraging readers to stand up for what is right even when the world stands against them.",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      image: `${images.the1984}`,
      category: "Sci-Fi",
      rating: 4.7,
      description:
        "George Orwell’s 1984 presents a terrifying vision of a totalitarian future where the government controls every aspect of life. The story follows Winston Smith, a man trapped in a world of constant surveillance, mind control, and propaganda. As he begins to question authority and seeks love and truth, he realizes that rebellion comes at a steep price. The novel introduces concepts like 'Big Brother,' 'thoughtcrime,' and 'doublethink,' which remain relevant today. Orwell’s work warns against the dangers of unchecked political power, making 1984 a chilling yet essential read.",
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      image: `${images.dune}`,
      category: "Sci-Fi",
      rating: 4.6,
      description:
        "Set in a distant future, Dune tells the epic tale of Paul Atreides, a young noble who finds himself caught in a power struggle over the desert planet Arrakis, the only source of a valuable substance called spice. As Paul embraces his destiny, he becomes a messianic figure for the planet’s oppressed people. The novel blends politics, religion, ecology, and adventure into a rich, immersive narrative. Frank Herbert’s masterpiece is not just a thrilling space epic but also a deep exploration of leadership, prophecy, and the unintended consequences of power.",
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: `${images.thehobbit}`,
      category: "Fantasy",
      rating: 4.8,
      description:
        "J.R.R. Tolkien’s The Hobbit is a timeless fantasy adventure that follows Bilbo Baggins, a reluctant hero who embarks on a quest with a group of dwarves to reclaim their homeland from the dragon Smaug. Along the way, Bilbo discovers courage he never knew he had and comes into possession of a powerful ring. The novel is a charming blend of adventure, humor, and rich world-building, setting the stage for The Lord of the Rings. At its heart, The Hobbit is a tale about stepping out of one's comfort zone and embracing the unknown.",
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: `${images.thecatcherintherey}`,
      category: "Fiction",
      rating: 4.3,
      description:
        "J.D. Salinger’s The Catcher in the Rye follows Holden Caulfield, a disillusioned teenager navigating the challenges of growing up. After being expelled from prep school, Holden wanders through New York City, searching for meaning in a world he sees as phony. His cynical outlook masks deep loneliness and a longing for genuine connection. Through Holden’s rebellious voice, Salinger explores themes of identity, alienation, and mental health. The novel resonates with anyone who has ever felt lost, misunderstood, or resistant to the pressures of adulthood.",
    },
    {
      id: 7,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      image: `${images.davinci}`,
      category: "Mystery",
      rating: 4.4,
      description:
        "Dan Brown’s The Da Vinci Code is a fast-paced thriller that follows symbologist Robert Langdon as he unravels a secret buried within famous works of art and religious history. After a murder at the Louvre, Langdon and cryptologist Sophie Neveu race to uncover hidden messages left by Leonardo da Vinci, leading them to an ancient society and a mystery that could shake the foundations of Christianity. Packed with historical intrigue, codes, and conspiracy theories, The Da Vinci Code is an electrifying read that keeps readers guessing until the very end.",
    },
    {
      id: 8,
      title: "Sherlock Holmes: A Study in Scarlet",
      author: "Arthur Conan Doyle",
      image: `${images.sherlockholmes}`,
      category: "Mystery",
      rating: 4.7,
      description:
        "The first novel to introduce the world to Sherlock Holmes, A Study in Scarlet follows Dr. John Watson as he meets the eccentric yet brilliant detective. When a man is found murdered with a cryptic message written in blood, Holmes uses his remarkable deductive skills to unravel a complex mystery that spans continents. Arthur Conan Doyle crafts a gripping detective story filled with logical reasoning, suspense, and the first glimpse of Holmes’ iconic investigative methods. This novel lays the foundation for one of literature’s most beloved characters.",
    },
    {
      id: 9,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      image: `${images.harrypotter}`,
      category: "Fantasy",
      rating: 4.9,
      description:
        "The first book in J.K. Rowling’s legendary series introduces readers to Harry Potter, an orphan who discovers he is a wizard on his eleventh birthday. Invited to attend Hogwarts School of Witchcraft and Wizardry, Harry befriends Ron and Hermione and uncovers the truth about his parents’ mysterious past. Along the way, he encounters magical creatures, learns spells, and faces the dark wizard Voldemort, who seeks immortality. Filled with adventure, friendship, and wonder, this novel captures the magic of childhood imagination and sets the stage for an unforgettable journey.",
    },
    {
      id: 10,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      image: `${images.stevejobs}`,
      category: "Biography",
      rating: 4.6,
      description:
        "Walter Isaacson’s Steve Jobs is an intimate biography of the visionary co-founder of Apple. Based on exclusive interviews with Jobs and those closest to him, the book explores his rise from a college dropout to one of the most influential figures in technology. Jobs’ relentless pursuit of perfection, his struggles, and his revolutionary ideas in personal computing, animation, and design are all captured in detail. This biography reveals both the brilliance and flaws of a man who changed the way the world interacts with technology, offering valuable lessons in creativity, leadership, and innovation.",
    },
    {
      id: 11,
      title: "The Martian",
      author: "Andy Weir",
      image: `${images.martian}`,
      category: "Sci-Fi",
      rating: 4.7,
      description:
        "Andy Weir’s The Martian is a gripping sci-fi survival story about astronaut Mark Watney, who is stranded alone on Mars after his crew assumes he is dead. With limited supplies, he must rely on his ingenuity, engineering skills, and an indomitable sense of humor to survive in the harsh Martian environment. Meanwhile, NASA and his crewmates scramble to devise a rescue mission. The novel blends science, suspense, and humor, making for an engaging and scientifically grounded read that showcases the resilience of the human spirit.",
    },
    {
      id: 12,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      image: `${images.loardofthering}`,
      category: "Fantasy",
      rating: 4.9,
      description:
        "J.R.R. Tolkien’s The Lord of the Rings is an epic fantasy masterpiece that follows Frodo Baggins, a humble hobbit tasked with destroying the One Ring, an artifact of immense power forged by the dark lord Sauron. Accompanied by a diverse fellowship, he embarks on a perilous journey across Middle-earth, facing dark forces, treacherous landscapes, and his own inner struggles. The novel explores themes of friendship, heroism, and the corrupting nature of power, solidifying its place as one of the greatest fantasy sagas ever written.",
    },
    {
      id: 13,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      image: `${images.sapiens}`,
      category: "Non-Fiction",
      rating: 4.7,
      description:
        "Yuval Noah Harari’s Sapiens takes readers on an insightful journey through human history, from the emergence of Homo sapiens to the present day. Harari explores how cognitive, agricultural, and technological revolutions have shaped societies, economies, and beliefs. By examining key moments in human development, the book challenges our understanding of history, questioning why certain civilizations thrived and others disappeared. Engaging and thought-provoking, Sapiens offers a broad yet detailed perspective on the forces that have shaped the modern world.",
    },
    {
      id: 14,
      title: "Educated",
      author: "Tara Westover",
      image: `${images.educated}`,
      category: "Biography",
      rating: 4.8,
      description:
        "Tara Westover’s Educated is a powerful memoir about her journey from a strict, survivalist upbringing in rural Idaho to earning a PhD from Cambridge University. Raised in a family that eschewed formal education and modern medicine, she didn’t step into a classroom until she was 17. Through sheer determination, she teaches herself enough to get into college and eventually breaks free from her past. The book explores themes of resilience, self-discovery, and the transformative power of education, making it a deeply moving and inspiring read.",
    },
    {
      id: 15,
      title: "Gone Girl",
      author: "Gillian Flynn",
      image: `${images.gonegirl}`,
      category: "Mystery",
      rating: 4.6,
      description:
        "Gillian Flynn’s Gone Girl is a psychological thriller that unravels the dark complexities of marriage, lies, and media manipulation. When Amy Dunne goes missing on her fifth wedding anniversary, suspicion falls on her husband, Nick. As the media frenzy grows, shocking secrets and twists emerge, challenging the reader’s perception of truth. Flynn masterfully alternates between Nick’s perspective and Amy’s diary entries, creating a tension-filled narrative that keeps readers guessing until the final page. With its sharp writing and unexpected turns, Gone Girl redefines the modern thriller.",
    },
    {
      id: 16,
      title: "Brave New World",
      author: "Aldous Huxley",
      image: `${images.bravenewworld}`,
      category: "Sci-Fi",
      rating: 4.5,
      description:
        "Aldous Huxley’s Brave New World is a visionary dystopian novel set in a future where society is engineered for stability, efficiency, and pleasure. People are genetically bred into rigid castes, and emotions, individuality, and deep relationships are discouraged. Instead, citizens are pacified with consumerism, instant gratification, and a drug called Soma. The story follows Bernard Marx and John the Savage as they struggle against this supposedly utopian world. Through its sharp satire and philosophical depth, Brave New World critiques the dangers of technological advancements and the loss of human identity in the pursuit of a controlled, pleasure-driven existence.",
    },
    {
      id: 17,
      title: "Atomic Habits",
      author: "James Clear",
      image: `${images.atomichabit}`,
      category: "Non-Fiction",
      rating: 4.8,
      description: "James Clear’s Atomic Habits is a powerful self-improvement guide that explains how small changes can lead to remarkable results. Using behavioral science and real-world examples, Clear breaks down how habits are formed and provides practical strategies for building good habits, breaking bad ones, and making long-term improvements. He introduces concepts like habit stacking, identity-based habits, and the four-step habit loop, making it easy for readers to apply these lessons in their daily lives. Whether you want to be more productive, healthier, or disciplined, Atomic Habits provides a clear roadmap to lasting change.",
    },
    {
      id: 18,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      image: `${images.subtleartofnotgivingfuck}`,
      category: "Non-Fiction",
      rating: 4.4,
      description: "Mark Manson’s The Subtle Art of Not Giving a Fck* is a brutally honest, no-nonsense self-help book that challenges conventional positivity. Manson argues that life’s struggles are inevitable, so instead of trying to avoid pain, we should choose our struggles wisely. With humor and bluntness, he encourages readers to focus only on what truly matters, let go of unnecessary worries, and embrace discomfort as a path to growth. The book offers refreshing, counterintuitive wisdom on happiness and fulfillment, making it a must-read for those tired of clichéd self-help advice.",
    },
    {
      id: 19,
      title: "Dracula",
      author: "Bram Stoker",
      image: `${images.dracula}`,
      category: "Mystery",
      rating: 4.7,
      description: "Bram Stoker’s Dracula is the classic horror novel that introduced the world to Count Dracula, the most famous vampire in literature. Told through journal entries, letters, and newspaper clippings, the novel follows Jonathan Harker’s journey to Transylvania, where he encounters the eerie and sinister Count. As Dracula spreads his dark influence to England, Professor Van Helsing and a group of determined allies must stop him before it’s too late. Filled with gothic horror, suspense, and timeless themes of fear and seduction, Dracula remains a cornerstone of vampire fiction.",
    },
    {
      id: 20,
      title: "Frankenstein",
      author: "Mary Shelley",
      image: `${images.frankenstein}`,
      category: "Sci-Fi",
      rating: 4.6,
      description: "Mary Shelley’s Frankenstein is a groundbreaking novel that explores the consequences of unchecked ambition and scientific discovery. Victor Frankenstein, a young scientist, creates a sentient creature through an unholy experiment. However, horrified by his own creation, he abandons it, leading to tragic consequences. As the creature seeks revenge and understanding, the novel raises deep questions about humanity, responsibility, and isolation. Combining elements of horror, science fiction, and philosophy, Frankenstein is not just a tale of a monster but a profound reflection on the dangers of playing god.",
    },
    {
      id: 21,
      title: "The Shining",
      author: "Stephen King",
      image: `${images.shining}`,
      category: "Mystery",
      rating: 4.7,
      description: "Stephen King’s The Shining is a psychological horror masterpiece that explores madness, isolation, and the supernatural. Jack Torrance, a struggling writer and recovering alcoholic, accepts a winter caretaker job at the eerie Overlook Hotel, bringing his wife, Wendy, and his gifted son, Danny. As a snowstorm traps them inside, the hotel’s dark history begins to take hold of Jack, driving him into madness. Meanwhile, Danny, who possesses psychic abilities known as 'the shining,' senses the hotel's malevolent forces. With its gripping tension, unforgettable characters, and chilling atmosphere, The Shining remains one of the greatest horror novels of all time.",
    },
    {
      id: 22,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: `${images.alchemist}`,
      category: "Fiction",
      rating: 4.7,
      description: "Paulo Coelho’s The Alchemist is a timeless philosophical novel about destiny, dreams, and personal growth. It follows Santiago, a young shepherd who embarks on a journey across the desert in search of a hidden treasure. Along the way, he encounters a series of mentors, including a king, a crystal merchant, and an alchemist, each teaching him valuable life lessons. The novel emphasizes the idea that when we pursue our true calling, the universe conspires to help us achieve it. With its poetic storytelling and profound wisdom, The Alchemist has inspired millions to follow their dreams.",
    },
    {
      id: 23,
      title: "The Road",
      author: "Cormac McCarthy",
      image: `${images.TheRoad}`,
      category: "Fiction",
      rating: 4.5,
      description:
        "Cormac McCarthy’s The Road is a haunting and deeply moving post-apocalyptic novel about survival, love, and resilience. In a world devastated by an unnamed catastrophe, a father and his young son journey across a barren landscape, struggling to find food and avoid dangerous survivors. With nothing but their bond and a pistol for protection, they push forward toward the coast, clinging to the hope of a better future. Written in McCarthy’s signature minimalist style, The Road is a powerful meditation on human endurance, the fragility of civilization, and the enduring strength of love.",
    },
    {
      id: 24,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      image: `${images.TheNameoftheWind}`,
      category: "Fantasy",
      rating: 4.8,
      description: "Patrick Rothfuss’s The Name of the Wind is a richly woven fantasy novel that tells the story of Kvothe, a legendary figure known for his extraordinary skills in magic and music. The novel follows his early years as a gifted child, his struggles as an orphan, and his journey to the prestigious University, where he seeks knowledge about the mysterious Chandrian, the beings responsible for his family’s death. With lyrical prose, a compelling protagonist, and a detailed magical world, The Name of the Wind is an unforgettable tale of ambition, adventure, and destiny.",
    },
    {
      id: 25,
      title: "The Midnight Library",
      author: "Matt Haig",
      image: `${images.TheMidnightLibrary}`,
      category: "Fiction",
      rating: 4.6,
      description: "Matt Haig’s The Midnight Library is a thought-provoking novel about regret, choices, and second chances. The story follows Nora Seed, a woman who, feeling overwhelmed by her failures, decides to end her life. However, she wakes up in a mystical library where each book represents a different life she could have lived. Guided by a wise librarian, she explores these alternate realities, discovering how each choice could have led to a completely different future. The Midnight Library is an uplifting and heartwarming story that encourages readers to embrace the present and find meaning in their own lives."
    },
    {
      id: 26,
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      image: `${images.AstrophysicsforPeopleinaHurry}`,
      category: "Non-Fiction",
      rating: 4.6,
      description: "Neil deGrasse Tyson’s Astrophysics for People in a Hurry is a fascinating and accessible guide to the universe, designed for readers with limited time but an insatiable curiosity about the cosmos. In this book, Tyson breaks down complex astrophysical concepts—such as black holes, dark matter, and the Big Bang—into digestible, engaging explanations. He explores humanity’s place in the vast universe, touching on philosophical and scientific questions that have intrigued astronomers for centuries. With his signature wit and clarity, Tyson makes space science both informative and entertaining, making this book perfect for anyone who wants to understand the mysteries of the cosmos without diving into dense scientific jargon.",
    },
    {
      id: 27,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: `${images.PrideandPrejudice}`,
      category: "Fiction",
      rating: 4.8,
      description: "Jane Austen’s Pride and Prejudice is one of the most beloved classic novels of all time, blending romance, wit, and social commentary. The story follows Elizabeth Bennet, an intelligent and independent young woman, as she navigates issues of class, marriage, and personal pride. When she meets the wealthy and seemingly arrogant Mr. Darcy, their initial misunderstandings and prejudices create tension, but as the story unfolds, they both undergo profound personal growth. Austen’s sharp observations on 19th-century society, combined with her masterful storytelling, make Pride and Prejudice a timeless exploration of love, character, and societal expectations.",
    },
    {
      id: 28,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      image: `${images.TheSilentPatient}`,
      category: "Mystery",
      rating: 4.6,
      description: "Alex Michaelides’s The Silent Patient is a gripping psychological thriller filled with suspense and unexpected twists. The story follows Alicia Berenson, a famous painter who inexplicably shoots her husband and then refuses to speak a single word. Her silence turns her into a mystery, fueling public fascination and speculation. Theo Faber, a determined psychotherapist, becomes obsessed with uncovering the truth and helping Alicia find her voice. As he digs deeper into her past, shocking revelations come to light. With its intense psychological depth and a jaw-dropping twist ending, The Silent Patient keeps readers hooked until the very last page.",
    },
    {
      id: 29,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      image: `${images.TheGirlwiththeDragonTattoo}`,
      category: "Mystery",
      rating: 4.6,
      description: "Stieg Larsson’s The Girl with the Dragon Tattoo is an electrifying mystery-thriller featuring one of the most compelling heroines in modern fiction. Mikael Blomkvist, an investigative journalist, is hired to solve a decades-old disappearance in the powerful Vanger family. His search leads him to Lisbeth Salander, a brilliant but troubled hacker with a dark past. Together, they uncover a web of secrets, corruption, and danger that puts their lives at risk. With its intricate plot, deep character development, and relentless tension, The Girl with the Dragon Tattoo is a must-read for fans of crime fiction and suspense.",
    },
    {
      id: 30,
      title: "The Wright Brothers",
      author: "David McCullough",
      image: `${images.TheWrightBrothers}`,
      category: "Biography",
      rating: 4.7,
      description: "David McCullough’s The Wright Brothers is a riveting biography that brings to life the incredible journey of Wilbur and Orville Wright, the pioneers of aviation. With meticulous research and compelling storytelling, McCullough chronicles their struggles, failures, and groundbreaking achievements that led to the first successful powered flight. From their humble bicycle shop in Dayton, Ohio, to the historic flights at Kitty Hawk, North Carolina, the book captures the determination and ingenuity that changed the world forever. The Wright Brothers is an inspiring testament to perseverance, innovation, and the power of human ambition.",
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
