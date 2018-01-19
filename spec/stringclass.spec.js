// import Jasmine from 'jasmine';

// import { stringClass } from '../src/index';

// let jasmine = new Jasmine();
// jasmine.loadConfigFile('spec/support/jasmine.json');

// describe('Check if the string is empty', function(){
//     it('returns message string is empty', function(){
//         const noName = new stringClass("");
//         expect(noName.wordCheck()).toEqual("There must be a string");
//     });
// });

// describe('the hasVowels method returns true if the string contains vowels', function(){
//     const testVowels = new stringClass("We are happy").hasVowels();
//     it('returns true if vowel found', function(){
//         expect(testVowels).toBe(true);
//     });
// });

// describe('The toUpper method converts a string to uppercase', function(){
//     it('returns capital if conversion successful', function(){
//         const testUpper = new stringClass("we are happy").toUpper("we are happy");
//         expect(testUpper).toEqual('WE ARE HAPPY');
//     });
//     it('returns message if string was already in uppercase', function(){
//         const alreadyUpper = new stringClass("HAPPY").toUpper("HAPPY");
//         expect(alreadyUpper).toEqual("String is already in uppercase");
//     });
// });

// describe('The toLower method converts a string to lowercase', function(){
//     it('returns lowercase string if conversion successful', function(){
//         const testLower = new stringClass("BEHAVIOURAL SCIENCE").toLower();
//         expect(testLower).toEqual("behavioural science");
//     });
//     it('returns message if string was already in lowercase', function(){
//         const alreadyLower = new stringClass("behavioural science").toLower();
//         expect(alreadyLower).toEqual("String already in lowercase");
//     });
// });

// describe('ucFirst converts the first letter of a string to uppercase', function(){
//     it('returns true if conversion successful', function(){
//         const firstLetter = new stringClass("hippopotamus").ucFirst();
//         expect(firstLetter).toEqual("Hippopotamus?");
//     });
// });

// describe('The isQuestion returns true if string is a question', function(){
//     it('returns true string is question', function(){
//         const questionString = new stringClass("How are you?").isQuestion();
//         expect(questionString).toBe(true);
//     });
//     it('returns false if string not question', function(){
//         const questionString = new stringClass("How are you").isQuestion();
//         expect(questionString).toBe(false);
//     });
// });

// describe('The in method returns a list of the words in the string, as an array', function(){
//     it('returns true if string returned as array', function(){
//         const arrayString = new stringClass("This is a string").in();
//         expect(arrayString).toEqual(['This', 'is', 'a', 'string']);
//         expect(arrayString.length).toEqual(4);
//     });
//     it('returns true if string returned as array', function(){
//         const arrayString = new stringClass("Yes").in();
//         expect(arrayString).toEqual(['Y','e','s']);
//         expect(arrayString.length).toEqual(3);
//     });
//     it('returns message if string is already an array', function(){
//         const arrayString = new stringClass(["This is a string"]).in();
//         expect(arrayString).toEqual("This is already an array");
//     });
// });

// describe('The wordCount method returns the number of words in the string', function(){
//     it('returns true when word count is returned', function(){
//         const numberWords = new stringClass("Hello sir").wordCount();
//         expect(numberWords).toEqual(2);
//     });
// });

// describe('The toCurrency method returns a currency representation of the String', function(){
//     it('returns message if string not a number', function(){
//         const stringCurrency = new stringClass("thirty 3").toCurrency();
//         expect(stringCurrency).toEqual("This is not a number");
//     });
//     it('returns true if string is converted to currency form', function(){
//         const stringCurrency = new stringClass("35876569").toCurrency();
//         expect(stringCurrency).toEqual("35,876,569");
//     });
// });

// describe('The fromCurrency method returns a number representation of the Currency String',
// function(){
//     it('returns message if string is not number', function(){
//         const stringCurrency = new stringClass("thirty 3").fromCurrency();
//         expect(stringCurrency).toEqual("This is not a number");
//     });
//     it('returns true if number representation returned', function(){
//         const stringCurrency = new stringClass("35,876,569").fromCurrency();
//         expect(stringCurrency).toEqual("35876569");
//     });
// });

// describe('The inverseCase method returns each letter in the string as an inverse of its current case', 
// function(){
//     it('returns message if string empty', function(){
//         const reverseString = new stringClass("Hello World").inverseCase();
//         expect(reverseString).toEqual("hELLO wORLD");
//     });
// });

// describe('The alternateCase method returns the letters in alternating cases', function(){
//     it('returns true of alternated string returned', function(){
//         const alternateString = new stringClass("Hello World").alternatingCase();
//         expect(alternateString).toEqual("HeLlO WoRlD");
//     });
// });

// describe('The getMiddle method returns the character(s) in the middle of the string', function(){
//     it('returns true if character in middle returned', function(){
//         const middleString = new stringClass("gangrener").getMiddle();
//         expect(middleString).toEqual("r");
//     });
// });

// describe('The numberWords method returns the numbers in words', function(){
//     it('returns message if string is not a number', function(){
//         const numberString = new stringClass("3425").numberWords();
//         expect(numberString).toEqual("three four two five");
//     });
// });

// describe('The isDigit method returns true if the string is a digit', function(){
//     it('returns true if string is a single digit', function(){
//         const digitString = new stringClass("3").isDigit();
//         expect(digitString).toBe(true);
//     });
//     it('returns false string is more than one digit', function(){
//          const digitString = new stringClass("34").isDigit();
//         expect(digitString).toBe(false);
//     });
//     it('returns false string is more than one digit', function(){
//          const digitString = new stringClass("t").isDigit();
//         expect(digitString).toEqual("This is not a number");
//     });
// });
// describe('Checks for double characters in strings', function(){
//     it('Returns true if string contains double characters', function(){
//         const doubleCharacter = new stringClass("Hello You !!").doubleCheck();
//         expect(doubleCharacter).toBe(true);
//     });
//     it('Returns true if string contains double characters', function(){
//         const doubleCharacter = new stringClass("Helo You").doubleCheck();
//         expect(doubleCharacter).toBe(false);
//     })
// });
// jasmine.execute();
