import React from 'react';

export default function Intro() {
  return (
    <div className="paragraph-box">
      <p>Using Prototype Oriented Programming, methods, procedures and instance attributes are added to the String class to support more string manipulation features. Listed below are a list of the methods to be add to the string class.</p>
      <span className="unordered-list">
        <ul>
          <li><b>hasVowels (typeof Boolean):</b> Returns true if the string contains vowels.</li>
          <li><b>toUpper (typeof String):</b> Returns the String in question but with all characters in upper cases as applicable.</li>
          <li><b>toLower (typeof String):</b> Returns the String in question but with all characters in their lower cases as applicable. </li>
          <li><b>ucFirst (typeof String):</b> Returns the String in question but changes the First Character to an Upper case.</li>
          <li><b>isQuestion (typeof Boolean):</b> Return true if the string is a question (ending with a question mark). </li>
          <li><b>in:</b> Returns a list of the words in the string, as an Array.</li>
        </ul>
      </span>
      <span className="unordered-list">
        <ul>
          <li><b>wordCount (typeof Number):</b> Returns the number of words in the string.</li>
          <li><b>toCurrency (typeof String):</b> Returns a currency representation of the String</li>
          <li><b>fromCurrency (typeof Number):</b> Returns a number representation of the Currency String</li>
          <li><b>inverseCase (typeof String):</b> Returns each letter in the string as an inverse of its current case</li>
          <li><b>alternatingCase (typeof String):</b> Returns the letters in alternating cases.</li>
        </ul>
      </span>
      <span className="unordered-list">
        <ul>
          <li><b>getMiddle (typeof String):</b> Returns the character(s) in the middle of the string</li>
          <li><b>numberWords (typeof String):</b> Returns the numbers in words</li>
          <li><b>isDigit (typeof Boolean):</b> Returns true if the string is a digit(one number)</li>
          <li><b>doubleCheck (typeof Boolean):</b> Returns true if a string contains double characters(including whitespace character)</li>
        </ul>
      </span>
    </div>
  );
}

