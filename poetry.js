// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    return line[0];
    throw new Error('Implement the frontDoorResponse function');
  }
  /**
   * Format the password for the front-door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the front door password
   */
   
  export function frontDoorPassword(word) {
   // let firstLetter = word.slice(0,1);
   // let partA = firstLetter.toUpperCase();
   // let restOfWord = word.slice(1,6);
   // let partB = restOfWord.toLowerCase();
   // return partA + partB;
   return word.slice(0,1).toUpperCase() + word.slice(1,6).toLowerCase();
   throw new Error('Implement the frontDoorPassword function');
  }
  
  /**
   * Respond with the correct character, given the line of the
   * poem, if this were said at the back door.
   *
   * @param {string} line
   * @returns {string}
   */
   
  export function backDoorResponse(line) {
    // step-by-step down here
    // let cleanUp = line.trim();
    // let lastLetter = cleanUp.slice(-1);
    // let lastLetter = line.trim().slice(-1)
    // one liner fix down there
    return line.trim().slice(-1); 
    throw new Error('Implement the backDoorResponse function');
  }
  
  /**
   * Format the password for the back door, given the response
   * letters.
   *
   * @param {string} word the letters you responded with before
   * @returns {string} the back door password
   */
   
  export function backDoorPassword(word) {
    // thought process down here...
   // let newPass =  word.slice(0,1).toUpperCase() + word.slice(1,6).toLowerCase();
   // let part1= word.slice(0,1).toUpperCase();
   // let part2 = word.slice(1,6).toLowerCase();
   // let newPass = part1 + part2;
   // return newPass + "," + " " + "please";
    // here is a one-liner to rule them all. haha! takes longer to render it seems... 
    return word.slice(0,1).toUpperCase() + word.slice(1,6).toLowerCase() + "," + " " + "please";
    throw new Error('Implement the backDoorPassword function');
  }