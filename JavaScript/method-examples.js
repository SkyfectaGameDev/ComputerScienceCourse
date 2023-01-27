// ----- Example of Commenting Out -----

// ----- String Methods -----
console.log("Hello World");                             // Example of printing a string to terminal.
console.log("String length".length);                    // Example of finding the amount of cahracters in a string and printing them out.
console.log("Slice".slice(1,3));                        // Example of using slice to lift the characters between the indexed positions out.
console.log("Substring".substring(2,5));                // Example of using substring to lift the characters between the indexed positions out into its own new string.
console.log("Substring".substr(2,5));                   // Example of using substr to lift out the characters starting at the indexed position in the first parameter, followed by the amount of letters from that position in the second parameter.
console.log("Replace".replace("e", "5"));               // Example of how to replace the first chosen character with a replacement character.
console.log("Replace All".replaceAll("l", "p"));        // Example of using replaceAll to replace all of the stated characters in the string with another.
console.log("force to uppercase".toUpperCase());        // Example of how to force all letters in a string to be uppercase.
console.log("FORCE TO LOWERCASE".toLowerCase());        // Example of how to force all letters in a string to be lowercase.
console.log("concat".concat("Example"));                // Example of using concat to add on to the beginning of a string.
console.log(" Trim ".trim());                           // Example of using trim to remove blank spaces from the beginning and end of a string.
console.log(" Trim Start".trimStart());                 // Example of using trimStart to remove the blank spaces from the start of a string.
console.log("Trim End ".trimEnd());                     // Example of using trimEnd to remove the blank spaces from the end of a string.
console.log("Pad Start".padStart(12, "_"));             // Example of using padStart to increase the amount of characters to the number desired using the character(s) given by adding to the start of the string.
console.log("Pad End".padEnd(12, "_"));                 // Example of using padEnd to increase the amount of characters to the number desired using the character(s) given by adding to the end of the string.
console.log("Char At".charAt(3));                       // Example of using charAt to read a character from a string from the selected index position.
console.log("Char Code At".charCodeAt(3));              // Example of using charCodeAt to read the character code of the character from the selected index position in a string.
console.log("Split".split(""));                         // Example of using split to seperate a string into an array of individual characters.
console.log("Includes".includes("p"));                  // Example of using includes to return a boolean that states whether or not the string includes the selected character.
console.log("Starts With".startsWith("S"));             // Example of using startsWith to return a boolean that states whether or not the string starts with the selected character.
console.log("Ends With".endsWith("h"));                 // Example of using endsWith to return a boolean that states whether or not the string ends with the selected character.
console.log("Index Of".indexOf("e"));                   // Example of using indexOf to locate the first index position of the stated character within a string.
console.log("The Last Index Of".lastIndexOf("e"));      // Example of using lastIndexOf to locate the last index position of the stated character within a string.
console.log("Match".match(/[A-Z]/g));                   // Unsure
console.log("Begin Search".search("e"));                // Example of using search to locate the index position of the stated character.
console.log("Repeat".repeat(3));                        // Example of using repeat to expand the string to repeat itself by the number of times stated.

console.log();


// ----- Number Methods -----
console.log(128);                                       // Example of printing a number to terminal.
console.log((128).toString());                          // Example of converting a number to a string.
console.log((128).toExponential(5));                    // Example of converting a number to an exponential notation.
console.log((128).toFixed(2));                          // Example of printing a number with the specified amount of decimal places.
console.log((128).toPrecision(4));                      // Example of printing a number with the specified amount of places overall, both full and decimal.
console.log((128).valueOf())                            // Example of printing the value of the input number.

console.log();

// ----- Other Methods -----
console.log(true);                                      // Example of printing out a boolean type variable set to "true".
console.log(false);                                     // Example of printing out a boolean type variable set to "false".