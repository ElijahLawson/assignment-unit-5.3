console.log('***** Music Collection *****')

//global variables
let collection = [];

//Function to create an album object using input params -> title, artist, year published
//add it to the collection
//and return the album
function addToCollection(title, tracks, artist, yearPublished) {
    let album = {
        title: title,
        tracks: tracks,
        artist: artist,
        yearPublished: yearPublished

    }

    collection.push(album);

    return album;
}

//Function to take any collection, log the length, then log each album within the collection
function showCollection(collectArray) {
    console.log('Collection Length: ', collectArray.length);

    for (let album of collectArray) {
        console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
        for (let song in album.tracks) {
            let counter = Number(song) + 1
            console.log(`${counter}. ${album.tracks[song].trackName}: ${album.tracks[song].duration}`);
        }
    }

}

//Function to take an artist name and return an array of albums matching that artist name
function findByArtist(artist) {
    let results = [];

    for (let album of collection) {
        if (album.artist == artist) {
            results.push(album);
        }
    }

    return results;
}

//Search Function first checks validity of criteria search object, returns collection if invalid
//Otherwise, searches the collection based on the criteria, adding positive matches to results array
//and returns the results array.
function search(criteria) {

    let results = [];

    if (criteria == undefined || Object.keys(criteria).length == 0) {

        return collection;

    } else if (Object.keys(criteria).includes('trackName') == true) {

        for (let album of collection) {
            for (let track of album.tracks) {
                if (track.trackName == criteria.trackName) {
                    results.push(album);
                }
            }
        }

        return results;

    } else {
        
        for (let album of collection) {
            if (album.artist == criteria.artist && album.yearPublished == criteria.yearPublished) {
                results.push(album);
            }
        }

        return results;
    }
}

//-----------TESTS-----------//
let jidTracks = [
    {trackName: 'Galaxy', duration: '0:52'},
    {trackName: 'Raydar', duration: '3:24'},
    {trackName: 'Dance Now', duration: '3:47'}
]

let earthgangTracks = [
    {trackName: 'Meditate', duration: '4:38'},
    {trackName: 'Red Light', duration: '3:13'},
    {trackName: 'Legendari', duration: '5:22'}
]

let zachBryanTracks = [
    {trackName: 'Late July', duration: '2:58'},
    {trackName: 'Heavy Eyes', duration: '3:10'},
    {trackName: 'Mine Again', duration: '3:44'}
]

let theTreesTracks = [
    {trackName: 'Everglade March', duration: '3:49'},
    {trackName: 'Harvest', duration: '3:12'},
    {trackName: "Durin's Tower", duration: '3:11'}
]

let subtronicsTracks = [
    {trackName: 'O.P.U.S.', duration: '3:21'},
    {trackName: 'Spacetime', duration: '2:48'},
    {trackName: 'Take Flight VIP', duration: '4:50'}
]

let takanakaTracks = [
    {trackName: 'MALIBU', duration: '6:15'},
    {trackName: 'E.S.P.', duration: '4:11'},
    {trackName: 'SUNDROPS', duration: '5:10'},
]

//Testing addToCollection()
console.log('Adding new album ->', addToCollection('The Forever Story',jidTracks, 'JID', 2022));
console.log('Adding new album ->', addToCollection('Rags',earthgangTracks, 'EARTHGANG', 2017));
console.log('Adding new album ->', addToCollection('American Heartbreak', zachBryanTracks, 'Zach Bryan', 2022));
console.log('Adding new album ->', addToCollection('Harvest', theTreesTracks, 'Of The Trees', 2018));
console.log('Adding new album ->', addToCollection('Fractals', subtronicsTracks, 'Subtronics', 2022));
console.log('Adding new album ->', addToCollection('An Insatiable High', takanakaTracks, 'Masayoshi Takanaka', 1977));
console.log('The Collection ->',  collection);

//Testing showCollection
showCollection(collection);

//Testing findByArtist
console.log('Searching for artist JID -> The Forever Story album', findByArtist('JID'));
console.log('Searching for artist Kendrick Lamar -> []', findByArtist('Kendrick Lamar'));

//Testing search
let crit = {
    artist: 'Ray Charles',
    yearPublished: 1957
}
let nocrit = {};
let trackCrit = {trackName:'Spacetime'};

console.log(nocrit);
console.log('Adding new album ->', addToCollection('Ray Charles Greatest', 'Ray Charles', 1957));
console.log('Searching by criteria: artist: Ray Charles, year: 1957: ', search(crit));
console.log('Searching with empty criteria', search(nocrit));
console.log('Searching with no input', search());
console.log('Searching for track name Spacetime', search(trackCrit));