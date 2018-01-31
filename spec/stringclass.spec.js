import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { expect } from 'chai';

import * as stringMethods from '../src/components/stringclass';

configure({ adapter: new Adapter() });

describe('function wordCheck', () => {
  it('Returns a message if no word is added', () => {
    const nowWord = stringMethods.hasVowels('');
    expect(nowWord).to.equal('Please add a string');
  });
});

describe('function hasVowels', () => {
  it('Returns true if string has a vowel', () => {
    const noVowel = stringMethods.hasVowels('test string');
    expect(noVowel).to.be.true;
  });

  it('Returns false if string does not have vowel', () => {
    const noVowel = stringMethods.hasVowels('gghhjjk');
    expect(noVowel).to.be.false;
  });
});

describe('function toUpper', () => {
  it('Returns the string in uppercase', () => {
    const testUpper = stringMethods.toUpper('happy');
    expect(testUpper).to.equal('HAPPY');
  });

  it('Returns message if string was already in uppercase', () => {
    const alreadyUpper = stringMethods.toUpper('HAPPY');
    expect(alreadyUpper).to.equal('String is already in uppercase');
  });
});

describe('function toLower', () => {
  it('Returns string in lowercase', () => {
    const testLower = stringMethods.toLower('SCIENCE');
    expect(testLower).to.equal('science');
  });
  it('Returns message if string was already in lowercase', () => {
    const alreadyLower = stringMethods.toLower('behavioural science');
    expect(alreadyLower).to.equal('String already in lowercase');
  });
});

describe('function ucFirst', () => {
  it('Returns first letter of the string in uppercase', () => {
    const firstLetter = stringMethods.ucFirst('hippopotamus');
    expect(firstLetter).to.equal('Hippopotamus');
  });
  it('Returns message if first letter is already in uppercase', () => {
    const alreadyUC = stringMethods.ucFirst('Hello');
    expect(alreadyUC).to.equal('The first letter is already in uppercase');
  });
});

describe('function isQuestion', () => {
  it('Returns true if string is question', () => {
    const questionString = stringMethods.isQuestion('How are you?');
    expect(questionString).to.be.true;
  });
  it('Returns false if string not question', () => {
    const questionString = stringMethods.isQuestion('How are you');
    expect(questionString).to.be.false;
  });
  it('Returns false if question mark is not at the end of a word', () => {
    const questionString = stringMethods.isQuestion('H?ow a?er you.');
    expect(questionString).to.be.false;
  });
});

describe('function isIn', () => {
  it('Returns the string as an array', () => {
    const arrayString = stringMethods.isIn('This is a string');
    expect(arrayString).to.be.an('array').that.includes('This', 'is', 'a', 'string');
    expect(arrayString).to.have.length(4);
  });
  it('Returns the word if string is one word', () => {
    const arrayString = stringMethods.isIn('Yes');
    expect(arrayString).to.equal('Yes');
  });
  it('Returns message if string is already an array', () => {
    const arrayString = stringMethods.isIn(['This is a string']);
    expect(arrayString).to.equal('This is already an array');
  });
});

describe('function wordCount', () => {
  it('returns the number of words in string', () => {
    const numberWords = stringMethods.wordCount('Hello sir');
    expect(numberWords).to.equal(2);
  });
});

describe('function toCurrency', () => {
  it('Returns string converted to currency form', () => {
    const stringCurrency = stringMethods.toCurrency('35876569');
    expect(stringCurrency).to.equal('35,876,569');
  });
  it('Returns message if string not a number', () => {
    const stringCurrency = stringMethods.toCurrency('thirty 3');
    expect(stringCurrency).to.equal('This is not a number');
  });
});

describe('function fromCurrency', () => {
  it('Returns number representation of string', () => {
    const stringCurrency = stringMethods.fromCurrency('35,876,569');
    expect(stringCurrency).to.equal('35876569');
  });
  it('Returns message if string is not number', () => {
    const stringCurrency = stringMethods.fromCurrency('thirty 3');
    expect(stringCurrency).to.equal('This is not a number');
  });
});

describe('function inverseCase', () => {
  it('Returns string with inversed case', () => {
    const reverseString = stringMethods.inverseCase('Hello World');
    expect(reverseString).to.equal('hELLO wORLD');
  });
});

describe('function alternatingCase', () => {
  it('Returns string in alternated case', () => {
    const alternateString = stringMethods.alternatingCase('Hello World!');
    expect(alternateString).to.equal('HeLlO WoRlD!');
  });
});

describe('function getMiddle', () => {
  it('Returns middle characters of string', () => {
    const middleString = stringMethods.getMiddle('gangrene');
    expect(middleString).to.equal('gr');
  });
});

describe('function numberWords', () => {
  it('Returns numbers in words', () => {
    const numberString = stringMethods.numberWords('3425');
    expect(numberString).to.equal('three four two five');
  });

  it('Returns message if string is not a number', () => {
    const numberString = stringMethods.numberWords('Thirty');
    expect(numberString).to.equal('This is not a number');
  });
});

describe('function isDigit', () => {
  it('Returns true if string is a single digit', () => {
    const digitString = stringMethods.isDigit('3');
    expect(digitString).to.be.true;
  });
  it('Returns false string is more than one digit', () => {
    const digitString = stringMethods.isDigit('34');
    expect(digitString).to.be.false;
  });
  it('Returns a message if string is not a number', () => {
    const digitString = stringMethods.isDigit('t');
    expect(digitString).to.equal('This is not a number');
  });
});
describe('function doubleCheck', () => {
  it('Returns true if string contains double characters', () => {
    const doubleCharacter = stringMethods.doubleCheck('Hello You!!');
    expect(doubleCharacter).to.be.true;
  });
  it('Returns false if string does not contain double characters', () => {
    const doubleCharacter = stringMethods.doubleCheck('Hi');
    expect(doubleCharacter).to.be.false;
  });
});
