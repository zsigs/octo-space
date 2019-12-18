const { mongooseConnect } = require("./src/resources");
const { News , ResearchPaper , Song , Movie , Book } = require("./src/models");

const seedSong = [
  {
    title : "Yellow Submarine",
    artist : "The Beatles",
    duration : "3:27",
    coverImgUrl : "",
    genre : ["Pop", "Rock"],
    spotifyUrl : "https://www.spotify.com"
  },
  {
    title : "Last Nite",
    artist : "The Strokes",
    duration : "3:18",
    coverImgUrl : "",
    genre : ["Psychedelic Rock", "Rock"],
    spotifyUrl : "https://www.spotify.com"
  },
  {
    title : "Brasil Pandeiro",
    artist : "Novos Baianos",
    duration : "4:45",
    coverImgUrl : "",
    genre : ["Samba", "Brazilian"],
    spotifyUrl : "https://www.spotify.com"
  },
  {
    title : "Rap God",
    artist : "Eminem",
    duration : "6:12",
    coverImgUrl : "",
    genre : ["Rap", "Pop"],
    spotifyUrl : "https://www.spotify.com"
  },
]

const seedResearchPaper = [
  {
  title : "The use Of Quantum Physics in Machine Learning",
  category : ["Technology", "Quantum Physics"],
  author : "Bruno Ferraz",
  url : "http://mmrc.amss.cas.cn/tlb/201702/W020170224608150244118.pdf",
  numPages : 5
  },
  {
    title : "The language of Trees",
    category : ["Technology", "Sustainability", "Nature"],
    author : "Cleméntine Frie",
    url : "http://mmrc.amss.cas.cn/tlb/201702/W020170224608150244118.pdf",
    numPages : 8
  },
  {
    title : "Using Data to predict Sporting Results",
    category : ["Technology", "Data", "Sports", "Science"],
    author : "Martin Consul",
    url : "http://mmrc.amss.cas.cn/tlb/201702/W020170224608150244118.pdf",
    numPages : 3
  },
]

const seedNews = [
  {
    title : "New Element Discovered in Mars",
    category : ["Space", "Technology"],
    mediaType : "article",
    publicationDate : Date.now(),
    url : "https://www.nytimes.com/2019/12/03/us/politics/impeachment-trump-intelligence-committee.html",
    firstParagraph : "New recently discovered element on Mars can be the solution to Global warming, suggests recent imagery, taken from the Mars Rover.",
    coverImgUrl : "https://static01.nyt.com/images/2019/12/03/us/politics/03dc-impeach-sub/03dc-impeach-sub-videoSixteenByNine3000-v4.jpg",
    source: "The New York Times"
  },
  {
    title : "Trump Suffers from Severe Oposition",
    category : ["Politics", "America", "Humanity"],
    mediaType : "article",
    publicationDate : Date.now(),
    url : "https://www.nytimes.com/2019/12/03/us/politics/impeachment-trump-intelligence-committee.html",
    firstParagraph : "The House Intelligence Committee concluded that President Trump tried to “use the powers of his office to solicit foreign interference on his behalf in the 2020 election.”",
    coverImgUrl : "https://static01.nyt.com/images/2019/12/03/us/politics/03dc-impeach-sub/03dc-impeach-sub-videoSixteenByNine3000-v4.jpg",
    source: "The New York Times"
  },
  {
    title : "NY Giants Guarantees Position at the Rose Bowl Finals",
    category : ["Sports", "Football", "Giants"],
    mediaType : "article",
    publicationDate : Date.now(),
    url : "https://www.nytimes.com/2019/12/03/us/politics/impeachment-trump-intelligence-committee.html",
    firstParagraph : "After a tough season, the New York Giants finally guarantee a spot at the playoffs of the Rose Bowl that will happen late December.",
    coverImgUrl : "https://static01.nyt.com/images/2019/12/03/us/politics/03dc-impeach-sub/03dc-impeach-sub-videoSixteenByNine3000-v4.jpg",
    source: "The New York Times"
  },
]

const seedMovie = [
  {
    title: "Start the Revolution Without Me",
    type: "movie",
    imdbId: "tt0066402",
    poster: "https://m.media-amazon.com/images/M/MV5BODM2MzE3NmMtNmE2ZS00OGI2LWI5NTEtNWNlNzMxZjZhNzc0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    actors: "Gene Wilder, Donald Sutherland, Hugh Griffith, Jack MacGowran",
    director: "Bud Yorkin",
    genre: ["Comedy", "History"],
    imdbRating: "6.5",
    lang: "English",
    plot: "Two mismatched sets of identical twins, one aristocrat, one peasant, mistakenly exchange identities on the eve of the French Revolution.",
    releaseDate: "14 Aug 1970",
    runtime: "90 min"
  },
  {
    title: "Into the Sunset",
    type: "movie",
    imdbId: "tt0066402",
    poster: "https://m.media-amazon.com/images/M/MV5BODM2MzE3NmMtNmE2ZS00OGI2LWI5NTEtNWNlNzMxZjZhNzc0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    actors: "Pierce Brosnan, Sandra Bullocks",
    director: "Martin Scorcesse",
    genre: ["Comedy", "Action", "Romance"],
    imdbRating: "8.5",
    lang: "English",
    plot: "A tale of burglary, romance and action. A married couple in seek of one of the three missing diamonds from king Louis`s collection.",
    releaseDate: "14 Aug 1970",
    runtime: "90 min"
  },
  {
    title: "Friends",
    type: "series",
    imdbId: "tt0066402",
    poster: "https://m.media-amazon.com/images/M/MV5BODM2MzE3NmMtNmE2ZS00OGI2LWI5NTEtNWNlNzMxZjZhNzc0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    actors: "Chase Cassidy, Jennifer Aniston, Nate silverman",
    director: "Alex Trienman",
    genre: ["Comedy", "Feel-good"],
    imdbRating: "9.2",
    lang: "English",
    plot: "Three young men and three young women -- of the BFF kind -- live in the same apartment complex and face life and love in New York.",
    releaseDate: "14 Aug 1970",
    runtime: "90 min"
  }
]

const seedBook = [
  {
    title : "The Adventures of Huckleberry Finn",
    author : "Mark Twain",
    datePublished : Date.now(),
    genre : ["Adventure"],
    numPages : 232,
    ISBN : "ISBN 978-85-333-0227-3",
    plot : "Huckleberry finn goes on an adventure to find his lost friend, Tom Sawyer. An awe-inspirng novel that wil keep you turning the page."
  },
  {
    title : "21 Lessons for the 21st Century",
    author : "Yuval Noah Harari",
    datePublished : Date.now(),
    genre : ["Technology", "Innovation", "Futuristic"],
    numPages : 453,
    ISBN : "ISBN 769-85-563-3345-4",
    plot : "Yuval guides us through his theory on how technology and innovation will change humanity forever."
  },
  {
    title : "Thinking Fast and Slow",
    author : "Daniel Kahneman",
    datePublished : Date.now(),
    genre : ["Philosophy", "Psychology", "Economics"],
    numPages : 321,
    ISBN : "ISBN 66-85-554-7237-7",
    plot : "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think."
  },
]

function seedDB () {
  mongooseConnect();
  setTimeout(() => {
    News.insertMany(seedNews)
    .then(res => { console.log("created news") });
    Song.insertMany(seedSong)
    .then(res => { console.log("created song") });;
    ResearchPaper.insertMany(seedResearchPaper)
    .then(res => { console.log("created research paper") });;
    Movie.insertMany(seedMovie)
    .then(res => { console.log("created movie") });;
    Book.insertMany(seedBook)
    .then(res => { console.log("created book") });;
  }, 5000)
};

seedDB();