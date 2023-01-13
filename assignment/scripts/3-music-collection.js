console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  }; //object
  collection.push(newAlbum);
  return newAlbum;
} //function

console.log(
  addToCollection(
    "Enter the Wu-Tang",
    "Wu-Tang Clan",
    "1993",
    (tracks = [
      { name: "Bring da Ruckus", duration: "4:10" },
      { name: "Clan in da Front", time: "4:33" },
      { name: "Wu-Tang-7th Chamber", time: "6:05" },
    ])
  )
);
console.log(
  addToCollection(
    "Sunshine Kitty",
    "Tove Lo",
    "2014",
    (tracks = [
      { name: "Equally Lost", time: "2:15" },
      { name: "Are U gonna tell her?", time: "2:40" },
      { name: "Shifted", time: "3:12" },
    ])
  )
);
console.log(
  addToCollection(
    "Damaged",
    "Black Flag",
    "1981",
    (tracks = [
      { name: "Room 13", time: "2:07" },
      { name: "Damaged I", time: "3:51" },
      { name: "Life of Pain", time: "2:53" },
    ])
  )
);
console.log(
  addToCollection(
    "My War",
    "Black Flag",
    "1984",
    (tracks = [
      { name: "Can't Decide", time: "5:22" },
      { name: "Nothing Left Inside", time: "6:34" },
      { name: "My War", time: "3:46" },
    ])
  )
);
console.log(
  addToCollection(
    "Reachin' (A New Refutation of Time and Space)",
    "Digable Planets",
    "1993",
    (tracks = [
      { name: "Last of the Spiddyocks", time: "4:28" },
      { name: "Where I'm From", time: "4:35" },
      { name: "Rebirth of Slick (Cool Like Dat)[Explicit]", time: "4:21" },
    ])
  )
);
console.log(
  addToCollection(
    "Arntor",
    "Windir",
    "1999",
    (tracks = [
      { name: "Byrjing", time: "3:17" },
      { name: "Arntor, ein Windir", time: "6:56" },
      { name: "Kong Hydnes haug", time: "6:36" },
    ])
  )
);

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
    ); //console log
  } //for of
} //function

showCollection(collection);

function findByArtist(artist, array) {
  let albumsByArtist = [];
  for (element of array) {
    if (artist === element.artist) {
      albumsByArtist.push(element);
    } //if statement
  } //for of
  return albumsByArtist;
} //function

console.log("In findByArtist: ", findByArtist("Black Flag", collection));
console.log("In findByArtist: ", findByArtist("Meshuggah", collection));

function search(searchObject, array) {
  let albumsBySearch = [];
  if (searchObject === undefined || Object.keys(searchObject).length === 0) {
    return collection;
  }
  for (element of array) {
    if (
      (searchObject.artist === element.artist &&
        searchObject.year === element.yearPublished) ||
      (searchObject.artist === element.artist &&
        searchObject.year === undefined) ||
      (searchObject.artist === undefined &&
        searchObject.year === element.yearPublished)
    ) {
      albumsBySearch.push(element);
    } //if
  } //for of
  return albumsBySearch;
} //function

console.log(
  "In search: ",
  search({ artist: "Black Flag", year: "1984" }, collection)
);
console.log(
  "In search: ",
  search({ artist: "Meshuggah", year: "1999" }, collection)
);
console.log(
  "In search: ",
  search({ artist: "Meshuggah", year: "2014" }, collection)
);
console.log("In search: ", search());
console.log("In search: ", search({}));
console.log("In search: ", search({ artist: "Black Flag" }, collection));
