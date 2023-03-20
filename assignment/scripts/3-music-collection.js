console.log('***** Music Collection *****')

//global variables
let collection = [];

//Function to create an album object using input params -> title, artist, year published
//add it to the collection
//and return the album
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }

    collection.push(album);

    return album;
}



//-----------TESTS-----------//

//Testing addToCollection()
console.log('Adding new album ->', addToCollection('The Forever Story', 'JID', 2022));
console.log('Adding new album ->', addToCollection('Rags', 'EARTHGANG', 2017));
console.log('Adding new album ->', addToCollection('From Austin', 'Zach Bryan', 2022));
console.log('Adding new album ->', addToCollection('Wondering Why', 'The Red Clay Strays', 2022));
console.log('Adding new album ->', addToCollection('Antifractals','Subtronics', 2022));
console.log('Adding new album ->', addToCollection('An Insatiable High', 'Masayoshi Takanaka', 1977));
console.log('The Collection ->',  collection);

