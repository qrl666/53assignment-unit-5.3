console.log("***** Music Collection *****");

let collection = [];

function addToCollection(title, artist, yearPublished){
let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
}
collection.push(newAlbum)
return newAlbum
}

console.log(addToCollection("Enter the Wu-Tang", "Wu-Tang Clan", "1993"))
console.log(collection)