// ----- Holiday Destinations Activity -----
let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]

console.log("My favourite Holiday Destinations:", favHolidayDestinations);
console.log();

// ----- Favourite Movies Activity -----
let favMovies = [
    "Forrest Gump",
    "Back to the Future",
    "Pulp Fiction"
]

console.log("Original list:", favMovies);
console.log(`One of my favourite movies is ${favMovies[0]}.`);
favMovies[1] = "Terminator 2";
console.log("Updated list:", favMovies);
console.log()

// ----- Testing out Array Methods -----
console.log("Pop:", favMovies.pop());                                               // Example of using pop to remove the last value in an array and returning it.
console.log("Shift:", favMovies.shift());                                           // Example of using pop to remove the first value in an array and returning it.
console.log("Splice:", favMovies.splice(1, 0, "Zodiac", "Baby Driver"));            // Example of using splice to input the desired amount of elemnents at the desired position. The second number parameter can be used to remove the items from that position before placing new ones.
console.log("Slice:", favMovies.slice(0, 1));                                       // Example of using slice to select a part of the array, and returning it as a new array.
console.log("Unshift:", favMovies.unshift("The Social Network", "Ghostbusters"));   // Example of using unshift to add new elements at the beginning of the array.
//console.log("Map:", favMovies.map(1));                                            // Requires function, not yet covered.
console.log("Final list:", favMovies);
console.log();

// ----- Favourite Songs Activity -----
let favSongs = [
    "Speak - Gates",
    "Lies - Pale Waves",
    "Wild Flowers - FC&TR"
]

console.log("My favourite songs:", favSongs);
favSongs.unshift("In Camera - Yumi Zouma", "Vice - Lisbon");
favSongs.pop();
console.log("Updated list:", favSongs);