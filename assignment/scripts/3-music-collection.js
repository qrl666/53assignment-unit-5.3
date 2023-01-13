console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };//object
  collection.push(newAlbum);
  return newAlbum;
}//function

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
    );//console log 
  }//for of
}//function

showCollection(collection);

function findByArtist(artist, array) {
  let albumsByArtist = [];
  for (element of array) {
    if (artist === element.artist) {
      albumsByArtist.push(element);
    }//if statement
  }//for of
  return albumsByArtist;
}//function

console.log("In findByArtist: ", findByArtist("Black Flag", collection));
console.log("In findByArtist: ", findByArtist("Meshuggah", collection));

function search(searchObject, array) {
  let albumsBySearch = [];
  if (searchObject === undefined || Object.keys(searchObject).length === 0){
    return collection
  }
  for (element of array) {
    if (searchObject.artist === element.artist && searchObject.year === element.yearPublished) {
      albumsBySearch.push(element);
    } //if 
  }//for of
  return albumsBySearch;
}//function

console.log("In search: ", search({ artist: "Black Flag", year: "1984" }, collection));
console.log("In search: ", search({ artist: "Meshuggah", year: "1999" }, collection));
console.log("In search: ", search({ artist: "Meshuggah", year: "2014" }, collection));
console.log("In search: ", search());
console.log("In search: ", search({}));
