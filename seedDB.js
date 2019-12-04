const { mongooseConnect } = require("./src/resources");
const { News , ResearchPaper , Song , Movie , Book } = require("./src/models");

const seedSong = {
  title : "Yellow Submarine",
  artist : "The Beatles",
  duration : "3:27",
  coverImgUrl : "",
  genre : ["Pop", "Rock"],
  spotifyUrl : "https://www.spotify.com"
}

const seedResearchPaper = {
  title : "The use Of Quantum Physics in Machine Learning",
  category : ["Technology", "Quantum Physics"],
  author : "Bruno Ferraz",
  url : "http://mmrc.amss.cas.cn/tlb/201702/W020170224608150244118.pdf",
  numPages : 5
}

const seedNews = {
  title : "New Element Discovered in Mars",
  category : ["Space", "Technology"],
  mediaType : "article",
  publicationDate : Date.now(),
  url : "https://www.nytimes.com/2019/12/03/us/politics/impeachment-trump-intelligence-committee.html",
  firstParagraph : "The House Intelligence Committee concluded that President Trump tried to “use the powers of his office to solicit foreign interference on his behalf in the 2020 election.”",
  coverImgUrl : "https://static01.nyt.com/images/2019/12/03/us/politics/03dc-impeach-sub/03dc-impeach-sub-videoSixteenByNine3000-v4.jpg",
  source: "The New York Times"
}

const seedMovie = {
  title: "Start the Revolution Without Me",
  type: "movie",
  imdbId: "tt0066402",
  poster: "https://m.media-amazon.com/images/M/MV5BODM2MzE3NmMtNmE2ZS00OGI2LWI5NTEtNWNlNzMxZjZhNzc0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
  actors: "Gene Wilder, Donald Sutherland, Hugh Griffith, Jack MacGowran",director: "Bud Yorkin",
  genre: ["Comedy", "History"],
  imdbRating: "6.5",
  lang: "English",
  plot: "Two mismatched sets of identical twins, one aristocrat, one peasant, mistakenly exchange identities on the eve of the French Revolution.",
  releaseDate: "14 Aug 1970",
  runtime: "90 min"
}

const seedBook = {
  title : "The Adventures of Huckleberry Finn",
  author : "Mark Twain",
  datePublished : Date.now(),
  genre : ["Adventure"],
  numPages : 232,
  ISBN : "ISBN 978-85-333-0227-3",
  plot : "Huckleberry finn goes on an adventure to find his lost friend, Tom Sawyer. An awe-inspirng novel that wil keep you turning the page."
}

function seedDB () {
  mongooseConnect();
  setTimeout(() => {
    News.create(seedNews)
    .then(res => { console.log("created news") });
    Song.create(seedSong)
    .then(res => { console.log("created song") });;
    ResearchPaper.create(seedResearchPaper)
    .then(res => { console.log("created research paper") });;
    Movie.create(seedMovie)
    .then(res => { console.log("created movie") });;
    Book.create(seedBook)
    .then(res => { console.log("created book") });;
  }, 5000)
};

seedDB();