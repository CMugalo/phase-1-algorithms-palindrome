function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  }
  return false;
}
isPalindrome("chris");

/* 
  Add your pseudocode here
  1. function name is isPalindrome
  2. It takes one argument, a string
  3. It returns true if string is palindrome
  4. It returns false if string is not palindrome
  5. Function, for now, only deals with lowercase strings that are all letters

  HOW TO SOLVE THE PROBLEM
  1. Create the function body template with "string" as the parameter
  2. Work out which method reverses a string
  3. The block body should have an if statement i.e. if (string === reversedstring) return true. else, return false
  4. Test the function with racecar, abba, robot and ab as string arguments
*/

/*
  Add written explanation of your solution here

  1. I will call three methods on the passed string argument i.e. 
        i. .split(""), which will split the string into individual characters in the array,
        ii. .reverse(), which will reverse the array with the individual split characters from the string,
        iii. .join(""), which will join the individual split characters in the reversed array
  2. I will then declare a variable and assign the reversed string as it's value
  3. Next, I'll pass an if statement which will compare the passed string argument and it's reversed version. If  they are strictly equal, it will return true, and false if otherwise. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  /*

  const testFunction = "Antelope"
  console.log()
   */
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
