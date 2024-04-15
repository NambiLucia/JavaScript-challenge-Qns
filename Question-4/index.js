/*Write a function named firstPalindrome which takes a parameter: words. Given an array of string words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

//function palindrome(str){



function firstPalindrome(words){
    //loop through to access each word using words[i]
   for(let i=0; i<words.length; i++) {
    let oneWord =words[i];
  
    let palindrome=true;

    for( let m=0; m<oneWord.length/2;m++){
        if(oneWord[m] !== oneWord[oneWord.length -1 -m]){
            palindrome=false;
            
        }
    }

        if(palindrome){
            return oneWord;
        }
    }

   }  





console.log(firstPalindrome(["car","ada","racecar"]));












































/*function palindrome(str) {
    // Convert the string to an array of characters
    const characters = s.split('');
    // Create a reversed version of the array
    const reversedCharacters = characters.slice().reverse();
    // Convert the reversed array back to a string
    const reversedString = reversedCharacters.join('');
    // Compare the original string with the reversed string
    return s === reversedString;
}





// function to check if word in list is a palindrome
function isPalindrome(s) {
    // Convert the string to an array of characters
    const characters = s.split('');
    // Create a reversed version of the array
    const reversedCharacters = characters.slice().reverse();
    // Convert the reversed array back to a string
    const reversedString = reversedCharacters.join('');
    // Compare the original string with the reversed string
    return s === reversedString;
}

function firstPalindrome(words) {
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
}
*/