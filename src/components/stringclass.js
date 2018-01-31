const wordCheck = (name) => {
  /* Check if the string is empty */
  if (!name || name === '') {
    return 'Please add a string';
  }
};

const hasVowels = (name) => {
  /* Checks if the string contains vowels */
  if (wordCheck(name) !== 'Please add a string') {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const nameSplit = name.split('');
    for (const word of nameSplit) {
      for (const vowel of vowels) {
        if (word === vowel) {
          return true;
        }
      }
    }
    return false;
  } return wordCheck(name);
};

const toUpper = (name) => {
  /* Converts a string to uppercase */
  if (wordCheck(name) !== 'Please add a string') {
    const newString = [];
    for (const word of name.split(' ')) {
      let resultVar = '';
      for (let i = 0; i < word.length; i++) {
        resultVar += String.fromCharCode(word.charCodeAt(i) & 223);
      }
      newString.push(resultVar);
    }
    if (newString.join(' ') === name) {
      return 'String is already in uppercase';
    }
    return newString.join(' ');
  } return wordCheck(name);
};

const toLower = (name) => {
  /* Converts a string to lowercase */
  if (wordCheck(name) !== 'Please add a string') {
    const newString = [];
    for (const word of name.split(' ')) {
      let resultVar = '';
      for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if (code > 64 && code < 91) {
          resultVar += String.fromCharCode(code + 32);
        } else {
          resultVar += word.charAt(i);
        }
      }
      newString.push(resultVar);
    }
    if (newString.join(' ') === name) {
      return 'String already in lowercase';
    }
    return newString.join(' ');
  } return wordCheck(name);
};

const ucFirst = (name) => {
  /* Converts the first letter of a string to uppercase */
  if (wordCheck(name) !== 'Please add a string') {
    const splitName = name.charAt(0);
    if (toUpper(splitName) !== 'String is already in uppercase') {
      return (toUpper(splitName) + name.substr(1));
    } return 'The first letter is already in uppercase';
  }
};

const isQuestion = (name) => {
  /* Checks if string is a question */
  if (wordCheck(name) !== 'Please add a string') {
    if ((name.slice(-1)) === '?') {
      return true;
    }
    return false;
  } return wordCheck(name);
};

const isIn = (name) => {
  /* Returns a list of the words in the string, as an array */
  if (wordCheck(name) !== 'Please add a string') {
    if (name instanceof Array) {
      return 'This is already an array';
    }
    const splitName = name.includes(' ') ? name.split(' ') : name;
    return splitName;
  } return wordCheck(name);
};

const wordCount = (name) => {
  /* Returns the number of words in the string */
  if (wordCheck(name) !== 'Please add a string') {
    return name.split(' ').length;
  }
};

const toCurrency = (name) => {
  /* Returns a currency representation of the String */
  if (wordCheck(name) !== 'Please add a string') {
    const currencyString = Number(name);
    if (typeof currencyString === 'number' && !isNaN(currencyString)) {
      return currencyString.toLocaleString();
    }
    return 'This is not a number';
  } return wordCheck(name);
};

const fromCurrency = (name) => {
  /* Returns a number representation of the Currency String */
  if (wordCheck(name) !== 'Please add a string') {
    const currencyString = name.replace(/\,/g, '');
    if (!isNaN(Number(currencyString))) {
      return currencyString;
    }
    return 'This is not a number';
  } return wordCheck(name);
};

const inverseCase = (name) => {
  /* Returns each letter in the string as an inverse of its current case */
  if (wordCheck(name) !== 'Please add a string') {
    const regexpUpper = /^[A-Z]/;
    const splitString = name.split('');
    const inverseString = splitString.map((word) => {
      if (regexpUpper.test(word) === true) {
        return word.toLowerCase();
      }
      return word.toUpperCase();
    });
    return inverseString.join('');
  } return wordCheck(name);
};

const alternatingCase = (name) => {
  /* Returns the letters in alternating cases */
  if (wordCheck(name) !== 'Please add a string') {
    const words = name.toLowerCase().split('');
    for (let index = 0; index < words.length; index += 2) {
      words[index] = words[index].toUpperCase();
    }
    return words.join('');
  } return wordCheck(name);
};

const getMiddle = (name) => {
  /* Returns the character(s) in the middle of the string */
  if (wordCheck(name) !== 'Please add a string') {
    let position;
    let length;
    if (name.length % 2 === 1) {
      position = name.length / 2;
      length = 1;
    } else {
      position = name.length / 2 - 1;
      length = 2;
    }
    const result = name.substring(position, position + length);
    return result;
  } return wordCheck(name);
};

const numberWords = (name) => {
  /* Returns the numbers in words */
  if (wordCheck(name) !== 'Please add a string') {
    if (!isNaN(Number(name))) {
      const numbers = {
        0: 'and',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
      };
      const splitNumber = name.toLocaleString().split(',');
      const listNums = [];
      for (let i = 0; i < splitNumber.length; i++) {
        const splitSubNums = splitNumber[i].split('');
        for (let ind = 0; ind < splitSubNums.length; ind++) {
          for (const key in numbers) {
            if (Number(splitSubNums[ind]) === Number(key)) {
              const newNum = numbers[key];
              listNums.push(newNum);
            }
          }
        }
      }
      return listNums.join(' ');
    } return 'This is not a number';
  } return wordCheck(name);
};

const isDigit = (name) => {
  /* Returns true if the string is a digit */
  if (wordCheck(name) !== 'Please add a string') {
    const splitName = name.split('');
    if (splitName.length > 1) {
      return false;
    }
    for (const digit of splitName) {
      if (isNaN(Number(digit))) {
        return 'This is not a number';
      }
      return true;
    }
  } else { return wordCheck(name); }
};

const doubleCheck = (name) => {
  /* Checks for double characters in strings */
  if (wordCheck(name) !== 'Please add a string') {
    if ((name.match(/[^\w\s]|(.)(?=\1)/gi, '')) !== null) {
      return true;
    }

    return false;
  } return wordCheck(name);
};

export { hasVowels, toUpper, toLower, ucFirst, isQuestion, isIn,
  wordCount, toCurrency, fromCurrency, inverseCase, alternatingCase, getMiddle,
  numberWords, isDigit, doubleCheck };
