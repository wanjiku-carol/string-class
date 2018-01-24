import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { sinon, spy } from 'sinon';

import * as stringMethods from '../src/components/stringclass.js';

configure({ adapter: new Adapter() });

describe('function hasVowels', function(){
    it('Returns true if string has a vowel', function(){
        const noName = stringMethods['hasVowels']("test string");
        expect(noName).to.be.true;
    });

    it('Returns false if string has a vowel', function(){
        const noName = stringMethods['hasVowels']("gghhjjk");
        expect(noName).to.be.false;
    });
});

 describe('function toUpper', function(){
    it('Returns the string in uppercase', function(){
        const testUpper = stringMethods['toUpper']("happy");
        expect(testUpper).to.equal('HAPPY');
    });

    it('Returns message if string was already in uppercase', function(){
        const alreadyUpper = stringMethods['toUpper']("HAPPY");
        expect(alreadyUpper).to.equal("String is already in uppercase");
    });
});

describe('function toLower', function(){
    it('Returns string in lowercase', function(){
        const testLower = stringMethods['toLower']("SCIENCE");
        expect(testLower).to.equal("science");
    });
    it('Returns message if string was already in lowercase', function(){
        const alreadyLower = stringMethods['toLower']("behavioural science");
        expect(alreadyLower).to.equal("String already in lowercase");
    });
});

describe('function ucFirst', function(){
    it('Returns first letter of the string in uppercase', function(){
        const firstLetter = stringMethods['ucFirst']("hippopotamus");
        expect(firstLetter).to.equal("Hippopotamus");
    });
    it('Returns message if first letter is already in uppercase', function(){
        const alreadyUC = stringMethods['ucFirst']("Hello");
        expect(alreadyUC).to.equal('The first letter is already in uppercase');
    })
});

describe('function isQuestion', function(){
    it('Returns true if string is question', function(){
        const questionString = stringMethods['isQuestion']("How are you?");
        expect(questionString).to.be.true;
    });
    it('Returns false if string not question', function(){
        const questionString = stringMethods['isQuestion']("How are you");
        expect(questionString).to.be.false;
    });
});

describe('function isIn', function(){
    it('Returns the string as an array', function(){
        const arrayString = stringMethods['isIn']("This is a string");
        expect(arrayString).to.be.an('array').that.includes('This', 'is', 'a', 'string' );
        expect(arrayString).to.have.length(4);
    });
    it('Returns the string as an array', function(){
        const arrayString = stringMethods['isIn']("Yes");
        expect(arrayString).to.be.an('array').that.includes('Y', 'e', 's' );
        expect(arrayString).to.have.length(3);
    });
    it('Returns message if string is already an array', function(){
        const arrayString = stringMethods['isIn'](["This is a string"]);
        expect(arrayString).to.equal("This is already an array");
    });
});

describe('function wordCount', function(){
    it('returns the number of words in string', function(){
        const numberWords = stringMethods['wordCount']("Hello sir");
        expect(numberWords).to.equal(2);
    });
});

describe('function toCurrency', function(){
    it('Returns string converted to currency form', function(){
        const stringCurrency = stringMethods['toCurrency']("35876569");
        expect(stringCurrency).to.equal("35,876,569");
    });
    it('Returns message if string not a number', function(){
        const stringCurrency = stringMethods['toCurrency']("thirty 3");
        expect(stringCurrency).to.equal("This is not a number");
    });
});

describe('function fromCurrency',function(){
    it('Returns number representation of string', function(){
        const stringCurrency = stringMethods['fromCurrency']("35,876,569");
        expect(stringCurrency).to.equal("35876569");
    });
    it('Returns message if string is not number', function(){
        const stringCurrency = stringMethods['fromCurrency']("thirty 3");
        expect(stringCurrency).to.equal("This is not a number");
    });
});

describe('function inverseCase', function(){
    it('Returns string with inversed case', function(){
        const reverseString = stringMethods['inverseCase']("Hello World");
        expect(reverseString).to.equal("hELLO wORLD");
    });
});

describe('function alternateCase', function(){
    it('Returns string in alternated case', function(){
        const alternateString = stringMethods['alternatingCase']("Hello World");
        expect(alternateString).to.equal("HeLlO WoRlD");
    });
});

describe('function getMiddle', function(){
    it('Returns middle characters of string', function(){
        const middleString = stringMethods['getMiddle']("gangrene");
        expect(middleString).to.equal("gr");
    });
});

describe('function numberWords', function(){
    it('Returns numbers in words', function(){
        const numberString = stringMethods['numberWords']("3425");
        expect(numberString).to.equal("three four two five");
    });

    it('Returns message if string is not a number', function(){
        const numberString = stringMethods['numberWords']("Thirty");
        expect(numberString).to.equal("This is not a number");
    });
});

describe('function isDigit', function(){
    it('Returns true if string is a single digit', function(){
        const digitString = stringMethods['isDigit']("3");
        expect(digitString).to.be.true;
    });
    it('Returns false string is more than one digit', function(){
         const digitString = stringMethods['isDigit']("34");
        expect(digitString).to.be.false;
    });
    it('Returns a message if string is not a number', function(){
         const digitString = stringMethods['isDigit']("t");
        expect(digitString).to.equal("This is not a number");
    });
});
describe('function doubleCheck', function(){
    it('Returns true if string contains double characters', function(){
        const doubleCharacter = stringMethods['doubleCheck']("Hello You!!");
        expect(doubleCharacter).to.be.true;
    });
    it('Returns false if string does not contain double characters', function(){
        const doubleCharacter = stringMethods['doubleCheck']("Hi");
        expect(doubleCharacter).to.be.false;
    });
});
