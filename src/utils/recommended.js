import { images } from "../constant"

const recommendedBooks = [
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
]

export default recommendedBooks;