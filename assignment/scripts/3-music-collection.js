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

function showCollection(array){

console.log("Number of ablums: ", array.length)

for (element of array){
   console.log(element.title + " by " + element.artist + " published in year " + element.yearPublished)
}
}

showCollection(collection)

function findByArtist(artist){
    
}