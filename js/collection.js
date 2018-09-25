class MovieSerie {
  constructor(name, type, genre, country, yearRelease) {
    this.name = name;
    this.type = type;
    this.genre = genre;
    this.country = country;
    this.yearRelease = yearRelease;
  }
}

let findGenre = (genre) => {
  for(element of collection) {
    if(element.genre === genre) {
      console.log(elem);
    }
  };
}

let collection = [];

let matrix = new MovieSerie('Matrix', 'Filme', 'Ação', 'EUA', 1999);

collection.push(matrix);