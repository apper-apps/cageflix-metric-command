// Mock data for Nicholas Cage movies
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const mockMovies = [
  {
    "Id": 1,
    "id": 1,
    "title": "National Treasure",
    "poster_path": "/o8QhHpYqQAFfhqhUiaBjCi0zYaN.jpg",
    "backdrop_path": "/o8QhHpYqQAFfhqhUiaBjCi0zYaN.jpg",
    "release_date": "2004-11-19",
    "overview": "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away during the American Revolutionary War.",
    "vote_average": 6.6,
    "popularity": 85.4,
    "genre_ids": [12, 28, 53],
    "original_language": "en",
    "runtime": 131,
    "trailer_key": "mcf4tXYjaxo"
  },
  {
    "Id": 2,
    "id": 2,
    "title": "Face/Off",
    "poster_path": "/q6y0Go1Y55T6raRFa7RcEOZ2IVf.jpg",
    "backdrop_path": "/q6y0Go1Y55T6raRFa7RcEOZ2IVf.jpg",
    "release_date": "1997-06-27",
    "overview": "In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind.",
    "vote_average": 7.1,
    "popularity": 76.2,
    "genre_ids": [28, 80, 18],
    "original_language": "en",
    "runtime": 138,
    "trailer_key": "BIyvSKCnBnk"
  },
  {
    "Id": 3,
    "id": 3,
    "title": "Con Air",
    "poster_path": "/qowXx3sJLkZhC4FHK5bDuDfE4Uw.jpg",
    "backdrop_path": "/qowXx3sJLkZhC4FHK5bDuDfE4Uw.jpg",
    "release_date": "1997-06-05",
    "overview": "Newly-paroled ex-con and former U.S. Ranger Cameron Poe finds himself trapped in a prisoner-transport plane when the passengers seize control.",
    "vote_average": 6.7,
    "popularity": 79.8,
    "genre_ids": [28, 53, 80],
    "original_language": "en",
    "runtime": 115,
    "trailer_key": "ueMzmUCTqgs"
  },
  {
    "Id": 4,
    "id": 4,
    "title": "The Rock",
    "poster_path": "/3xgLCmNOq2Lk3LfJTjkSkz7nNqg.jpg",
    "backdrop_path": "/3xgLCmNOq2Lk3LfJTjkSkz7nNqg.jpg",
    "release_date": "1996-06-07",
    "overview": "FBI chemical warfare expert Stanley Goodspeed is sent on an urgent mission with a former British spy, John Patrick Mason, to stop Gen. Francis X. Hummel from launching chemical weapons on Alcatraz Island into San Francisco.",
    "vote_average": 7.3,
    "popularity": 88.1,
    "genre_ids": [28, 53, 12],
    "original_language": "en",
    "runtime": 136,
    "trailer_key": "313VW1llub4"
  },
  {
    "Id": 5,
    "id": 5,
    "title": "Gone in 60 Seconds",
    "poster_path": "/lFsJJjnGcNhewSIM9XBTaHsI2et.jpg",
    "backdrop_path": "/lFsJJjnGcNhewSIM9XBTaHsI2et.jpg",
    "release_date": "2000-06-09",
    "overview": "A retired master car thief must come back to the industry and steal fifty cars with his crew in one night to save his brother's life.",
    "vote_average": 6.4,
    "popularity": 71.5,
    "genre_ids": [28, 80, 53],
    "original_language": "en",
    "runtime": 118,
    "trailer_key": "1HE9lPtJEEc"
  },
  {
    "Id": 6,
    "id": 6,
    "title": "Leaving Las Vegas",
    "poster_path": "/nLYnLrV4GIbykfUgzXyPsXOCDIh.jpg",
    "backdrop_path": "/nLYnLrV4GIbykfUgzXyPsXOCDIh.jpg",
    "release_date": "1995-10-27",
    "overview": "Ben Sanderson, an alcoholic Hollywood screenwriter who lost everything because of his drinking, arrives in Las Vegas to drink himself to death.",
    "vote_average": 7.3,
    "popularity": 62.3,
    "genre_ids": [18, 10749],
    "original_language": "en",
    "runtime": 111,
    "trailer_key": "KoFQ4PwbW7s"
  },
  {
    "Id": 7,
    "id": 7,
    "title": "Ghost Rider",
    "poster_path": "/7f7YMcEAqKtQ6j7XMVa5ZeAYKEa.jpg",
    "backdrop_path": "/7f7YMcEAqKtQ6j7XMVa5ZeAYKEa.jpg",
    "release_date": "2007-02-16",
    "overview": "In order to save his dying father, young stunt cyclist Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted Roxanne Simpson.",
    "vote_average": 5.5,
    "popularity": 68.7,
    "genre_ids": [28, 14, 53],
    "original_language": "en",
    "runtime": 114,
    "trailer_key": "7lVqyNJgGXs"
  },
  {
    "Id": 8,
    "id": 8,
    "title": "National Treasure: Book of Secrets",
    "poster_path": "/6glR1kBOp6qWJRokS4kDa2LyMfV.jpg",
    "backdrop_path": "/6glR1kBOp6qWJRokS4kDa2LyMfV.jpg",
    "release_date": "2007-12-21",
    "overview": "Benjamin Franklin Gates and Abigail Chase re-team with Riley Poole and, now armed with a stack of long-lost pages from John Wilkes Booth's diary, Ben must follow a clue left there to prove his ancestor's innocence in the assassination of Abraham Lincoln.",
    "vote_average": 6.4,
    "popularity": 74.9,
    "genre_ids": [12, 28, 53],
    "original_language": "en",
    "runtime": 124,
    "trailer_key": "tz7NmKomXXE"
  },
  {
    "Id": 9,
    "id": 9,
    "title": "Lord of War",
    "poster_path": "/t8oOPOaL99VpQUmOdxHd6KI8Knn.jpg",
    "backdrop_path": "/t8oOPOaL99VpQUmOdxHd6KI8Knn.jpg",
    "release_date": "2005-09-16",
    "overview": "Yuri Orlov is a globetrotting arms dealer and, through some of the deadliest war zones, he struggles to stay one step ahead of a relentless Interpol agent.",
    "vote_average": 7.3,
    "popularity": 65.2,
    "genre_ids": [80, 18],
    "original_language": "en",
    "runtime": 122,
    "trailer_key": "UUFoKRjB8wU"
  },
  {
    "Id": 10,
    "id": 10,
    "title": "Adaptation",
    "poster_path": "/eyY8M3SnGM6Pn59LLUNh7OSnLh.jpg",
    "backdrop_path": "/eyY8M3SnGM6Pn59LLUNh7OSnLh.jpg",
    "release_date": "2002-12-06",
    "overview": "A lovelorn screenwriter becomes desperate as he tries and fails to adapt 'The Orchid Thief' by Susan Orlean into a film.",
    "vote_average": 7.4,
    "popularity": 58.9,
    "genre_ids": [35, 18],
    "original_language": "en",
    "runtime": 115,
    "trailer_key": "Qz2vvzPNeJk"
  },
  {
    "Id": 11,
    "id": 11,
    "title": "Pig",
    "poster_path": "/lHLc6xa8WOmHFzyaTT8xRhUAI8w.jpg",
    "backdrop_path": "/lHLc6xa8WOmHFzyaTT8xRhUAI8w.jpg",
    "release_date": "2021-07-16",
    "overview": "A truffle hunter who lives alone in the Oregon wilderness must visit Portland to find the mysterious person who stole his beloved foraging pig.",
    "vote_average": 6.9,
    "popularity": 45.3,
    "genre_ids": [18, 53],
    "original_language": "en",
    "runtime": 92,
    "trailer_key": "NJR8_A3WgZs"
  },
  {
    "Id": 12,
    "id": 12,
    "title": "Mandy",
    "poster_path": "/vhf8klCBbE8iCYDAx8dKh17jzKK.jpg",
    "backdrop_path": "/vhf8klCBbE8iCYDAx8dKh17jzKK.jpg",
    "release_date": "2018-09-14",
    "overview": "Pacific Northwest. 1983 AD. Outsiders Red Miller and Mandy Bloom lead a loving and peaceful existence. When their pine-scented haven is savagely destroyed by a cult led by the unhinged Jeremiah Sand, Red is catapulted into a phantasmagorical journey filled with bloody vengeance and laced with fire.",
    "vote_average": 6.4,
    "popularity": 41.7,
    "genre_ids": [27, 53, 28],
    "original_language": "en",
    "runtime": 121,
    "trailer_key": "rI054ow6KJk"
  },
  {
    "Id": 13,
    "id": 13,
    "title": "Willy's Wonderland",
    "poster_path": "/6Zqgbr9NKVyUaIJd4jPSsXb7rTe.jpg",
    "backdrop_path": "/6Zqgbr9NKVyUaIJd4jPSsXb7rTe.jpg",
    "release_date": "2021-02-12",
    "overview": "When his car breaks down, a quiet loner agrees to clean an abandoned family fun center in exchange for repairs. He soon finds himself waging war against possessed animatronic mascots while trapped inside Willy's Wonderland.",
    "vote_average": 6.0,
    "popularity": 38.9,
    "genre_ids": [27, 28, 53],
    "original_language": "en",
    "runtime": 88,
    "trailer_key": "KdDIHXy3duI"
  },
  {
    "Id": 14,
    "id": 14,
    "title": "Color Out of Space",
    "poster_path": "/1Y7KRdIIXBSGnXzjOLyZnHa26Gp.jpg",
    "backdrop_path": "/1Y7KRdIIXBSGnXzjOLyZnHa26Gp.jpg",
    "release_date": "2019-09-07",
    "overview": "The Gardner family moves to a remote farmstead in rural New England to escape the hustle of the 21st century. They are busy adapting to their new life when a meteorite crashes into their front yard, melts into the earth, and infects both the land and the properties of space-time with a strange, otherworldly colour.",
    "vote_average": 6.0,
    "popularity": 36.4,
    "genre_ids": [27, 878, 53],
    "original_language": "en",
    "runtime": 111,
    "trailer_key": "jVkw4bwRh8g"
  },
  {
    "Id": 15,
    "id": 15,
    "title": "Spider-Man: Into the Spider-Verse",
    "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "backdrop_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "release_date": "2018-12-14",
    "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
    "vote_average": 8.4,
    "popularity": 92.1,
    "genre_ids": [16, 28, 12, 35, 878],
    "original_language": "en",
    "runtime": 117,
    "trailer_key": "tg52up16eq0"
  },
  {
    "Id": 16,
    "id": 16,
    "title": "Raising Arizona",
    "poster_path": "/fJWHNqGJPHMiXpnKsL5I3sBQ4Uj.jpg",
    "backdrop_path": "/fJWHNqGJPHMiXpnKsL5I3sBQ4Uj.jpg",
    "release_date": "1987-03-20",
    "overview": "When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family's quintuplets, their lives become more complicated than they anticipated.",
    "vote_average": 7.1,
    "popularity": 44.8,
    "genre_ids": [35, 80],
    "original_language": "en",
    "runtime": 94,
    "trailer_key": "PdDWkTbslyc"
  },
  {
    "Id": 17,
    "id": 17,
    "title": "Kick-Ass",
    "poster_path": "/inTOaWn1vWPV3hWNCLLmUyWGr20.jpg",
    "backdrop_path": "/inTOaWn1vWPV3hWNCLLmUyWGr20.jpg",
    "release_date": "2010-04-16",
    "overview": "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
    "vote_average": 7.2,
    "popularity": 67.3,
    "genre_ids": [28, 35, 80],
    "original_language": "en",
    "runtime": 117,
    "trailer_key": "YSXlLnJJG-Y"
  },
  {
    "Id": 18,
    "id": 18,
    "title": "Moonstruck",
    "poster_path": "/v1IW47vXDrxbEtx9d4tYq8A5eYm.jpg",
    "backdrop_path": "/v1IW47vXDrxbEtx9d4tYq8A5eYm.jpg",
    "release_date": "1987-12-18",
    "overview": "37-year-old Italian-American widow Loretta Castorini believes she is unlucky in love, and so accepts a marriage proposal from her boyfriend Johnny, even though she doesn't love him. When she meets his estranged younger brother Ronny, an emotional and passionate man, she finds herself drawn to him.",
    "vote_average": 7.0,
    "popularity": 39.2,
    "genre_ids": [35, 18, 10749],
    "original_language": "en",
    "runtime": 102,
    "trailer_key": "q9kOdG7yOG4"
  },
  {
    "Id": 19,
    "id": 19,
    "title": "Wild at Heart",
    "poster_path": "/1cJbsqkRdx4yfqQ0ZYKwqYC1q9Z.jpg",
    "backdrop_path": "/1cJbsqkRdx4yfqQ0ZYKwqYC1q9Z.jpg",
    "release_date": "1990-08-17",
    "overview": "Sailor Ripley and Lula Fortune are a couple on the run from Lula's psychopathic ex-lover and the crooked cops who work for her gangster mother. Their odyssey takes them through the Deep South into a world of violence and bizarre characters.",
    "vote_average": 7.2,
    "popularity": 42.6,
    "genre_ids": [80, 18, 53],
    "original_language": "en",
    "runtime": 125,
    "trailer_key": "k6Egh9i77JY"
  },
  {
    "Id": 20,
    "id": 20,
    "title": "The Wicker Man",
    "poster_path": "/8BVyE8zUOkgJP8rGSE83yl8b2i2.jpg",
    "backdrop_path": "/8BVyE8zUOkgJP8rGSE83yl8b2i2.jpg",
    "release_date": "2006-09-01",
    "overview": "A sheriff investigating the disappearance of a young girl from a small island discovers there's a larger mystery to solve among the island's secretive, neo-pagan community.",
    "vote_average": 3.8,
    "popularity": 35.7,
    "genre_ids": [27, 9648, 53],
    "original_language": "en",
    "runtime": 102,
    "trailer_key": "e6i2WRreARo"
  }
]

export const movieService = {
  getAll: async () => {
    await delay(350)
    return [...mockMovies]
  },
  
  getById: async (id) => {
    await delay(200)
    const movie = mockMovies.find(m => m.Id === parseInt(id))
    if (!movie) throw new Error('Movie not found')
    return { ...movie }
  },
  
  searchByTitle: async (title) => {
    await delay(300)
    return mockMovies.filter(movie => 
      movie.title.toLowerCase().includes(title.toLowerCase())
    )
  },
  
  getByGenre: async (genreId) => {
    await delay(300)
    return mockMovies.filter(movie => 
      movie.genre_ids.includes(genreId)
    )
  }
}