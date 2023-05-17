// /Question 1
function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return str === str.split('').reverse().join('');
  }
  
  console.log(isPalindrome("dad")); // Output: true
  console.log(isPalindrome("madam")); // Output: true
  console.log(isPalindrome("civic")); // output true

  

// Question 2
  // function areAnagrams(str1, str2) {
  //   str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  //   str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  //   if (str1.length !== str2.length) {
  //     return false;
  //   }
  
  //   const charMap1 = getCharFrequencyMap(str1);
  //   const charMap2 = getCharFrequencyMap(str2);

  //   for (let char in charMap1) {
  //     if (charMap1[char] !== charMap2[char]) {
  //       return false;
  //     }
  //   }
  
  //   return true;
  // }
  
  // function getCharFrequencyMap(str) {
  //   const charMap = {};
  
  //   for (let char of str) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }
  
  //   return charMap;
  // }

  // console.log(areAnagrams("abcd", "dabc")); // Output: true
  // console.log(areAnagrams("hello", "olleh")); // Output: true
  // console.log(areAnagrams("abc", "bac")); // Output: false

  

//Question 3
  // function isBlank(str) {
    
  //   return str.trim() === '';
  // }
  
  // // Example usage
  // console.log(isBlank("")); // Output: true
  // console.log(isBlank("   ")); // Output: true
  // console.log(isBlank("   christopher   ")); // Output: false
  



//Question 3

  // function protect_email(email) {
   
  //   const [username, domain] = email.split("@");
   
  //   const protectedUsername = username.substring(0, 3) + "...";
  
  //   return protectedUsername + "@" + domain;
  // }
  // console.log(protect_email("robin_singh@example.com"));
  // // Output: robin...@example.com



//Question 4
  // function reverseWords(str) {
    
  //   if (typeof str !== 'string') {
  //     return "It must be a string.";
  //   }

  //   const words = str.split(' ');
  
  //   const reversedWords = words.map(word => word.split('').reverse().join(''));
  //   const reversedString = reversedWords.join(' ');
  
  //   return reversedString;
  // }

  // console.log(reverseWords("abc")); // Output: "cba"
  // console.log(reverseWords("JavaScript Exercises")); // Output: "tpircSavaJ sesicrexE"
  // console.log(reverseWords("1234")); 

  

  