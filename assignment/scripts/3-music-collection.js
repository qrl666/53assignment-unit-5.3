console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newAlbum);
  return newAlbum;
}

console.log(addToCollection("Enter the Wu-Tang", "Wu-Tang Clan", "1993"));
console.log(addToCollection("Sunshine Kitty", "Tove Lo", "2014"));
console.log(addToCollection("Damaged", "Black Flag", "1981"));
console.log(addToCollection("My War", "Black Flag", "1984"));
console.log(
  addToCollection(
    "Reachin' (A New Refutation of Time and Space)",
    "Digable Planets",
    "1993"
  )
);
console.log(addToCollection("Arntor", "Windir", "1999"));

console.log(collection);

function showCollection(array) {
  console.log("Number of ablums: ", array.length);

  for (element of array) {
    console.log(
      element.title +
        " by " +
        element.artist +
        " published in year " +
        element.yearPublished
    );
  }
}

showCollection(collection);

function findByArtist(artist, array) {
  let albumsByArtist = [];
  for (element of array) {
    if (artist === element.artist) {
      albumsByArtist.push(element);
    }
  }
  return albumsByArtist;
}

console.log(findByArtist("Black Flag", collection));
console.log(findByArtist("Meshuggah", collection));

function search({ artist: artist, year: yearPublished }, array) {
    let albumsBySearch = [];
    for (element of array){ 
        if (artist == element.artist || yearPublished == element.yearPublished){
            albumsBySearch.push(element)
        }
    }
    return albumsBySearch
}

console.log(search({ artist: "Black Flag", year: "1993" }, collection));
console.log(search({ artist: "Meshuggah", year: "2001" }, collection));