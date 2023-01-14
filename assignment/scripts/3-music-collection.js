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
      { name: "Clan in da Front", duration: "4:33" },
      { name: "Wu-Tang-7th Chamber", duration: "6:05" },
    ])
  )
);
console.log(
  addToCollection(
    "Sunshine Kitty",
    "Tove Lo",
    "2014",
    (tracks = [
      { name: "Equally Lost", duration: "2:15" },
      { name: "Are U gonna tell her?", duration: "2:40" },
      { name: "Shifted", duration: "3:12" },
    ])
  )
);
console.log(
  addToCollection(
    "Damaged",
    "Black Flag",
    "1981",
    (tracks = [
      { name: "Room 13", duration: "2:07" },
      { name: "Damaged I", duration: "3:51" },
      { name: "Life of Pain", duration: "2:53" },
    ])
  )
);
console.log(
  addToCollection(
    "My War",
    "Black Flag",
    "1984",
    (tracks = [
      { name: "Can't Decide", duration: "5:22" },
      { name: "Nothing Left Inside", duration: "6:34" },
      { name: "My War", duration: "3:46" },
    ])
  )
);
console.log(
  addToCollection(
    "Reachin' (A New Refutation of Time and Space)",
    "Digable Planets",
    "1993",
    (tracks = [
      { name: "Last of the Spiddyocks", duration: "4:28" },
      { name: "Where I'm From", duration: "4:35" },
      { name: "Rebirth of Slick (Cool Like Dat)[Explicit]", duration: "4:21" },
    ])
  )
);
console.log(
  addToCollection(
    "Arntor",
    "Windir",
    "1999",
    (tracks = [
      { name: "Byrjing", duration: "3:17" },
      { name: "Arntor, ein Windir", duration: "6:56" },
      { name: "Kong Hydnes haug", duration: "6:36" },
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
    );
    console.log(" 1. ", "Name: ", tracks[0].name, "Duration:", tracks[0].duration);
    console.log(" 2. ", "Name: ", tracks[1].name, "Duration:", tracks[1].duration);
    console.log(" 3. ", "Name: ", tracks[2].name, "Duration:", tracks[2].duration); //console log
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
