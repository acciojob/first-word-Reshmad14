function firstWord(str) {
  // your code here
  str = str.trim();

    // Find index of first space
    const spaceIndex = str.indexOf(' ');

    // If no space found, return entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Return substring from start to first space
    return str.substring(0, spaceIndex);


}

// Do not change the code below
const str = prompt("Enter String:");
alert(firstWord(str));
