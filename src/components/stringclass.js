
function wordCheck(name){
    /*Check if the string is empty */
    if(!name || name === ""){
        return "Please add a string"; 
    } else{return true;}
}

function hasVowels(name){
    /*Checks if the string contains vowels*/
    if(wordCheck(name)=== true){
        let vowels = ['a','e','i','o','u'];
        let nameSplit = name.split("");
        for(let word of nameSplit){
            for(let vowel of vowels){
                if(word === vowel){
                    return true;
                }
            }
        }
        return false;
    }
    
}

function toUpper(name){
    /*Converts a string to uppercase */
     if(wordCheck(name)=== true){
        let newString = [];
        for(let word of name.split(" ")){
            let resultVar = "";
            for(let i = 0; i < word.length; i++) {
                resultVar += String.fromCharCode(word.charCodeAt(i) & 223);
            }
            newString.push(resultVar);
        }
        if(newString.join(" ") === name){
            return "String is already in uppercase";
        }else {
            return newString.join(" ");
        }
    }
    
}

function toLower(name) {
    /*Converts a string to lowercase */
    if(wordCheck(name)=== true){
        let newString = [];
        for(let word of name.split(" ")){
            let resultVar = "";
            for (let i = 0; i < word.length; i++) {
                let code = word.charCodeAt(i);
                if (code > 64 && code < 91) {
                    resultVar += String.fromCharCode(code + 32);
                } else {
                    resultVar += word.charAt(i);
                }
            }
            newString.push(resultVar);
        }
        if(newString.join(" ") === name){
            return "String already in lowercase";
        } else{
            return newString.join(" ");
        }
    }
    
}

function ucFirst(name){
    /*Converts the first letter of a string to uppercase*/
    if(wordCheck(name)=== true){
        let splitName = name.charAt(0);
        if(toUpper(splitName)!== "String is already in uppercase"){
            return (toUpper(splitName)+ name.substr(1));
        } else{ return "The first letter is already in uppercase";}
    }
}

function isQuestion(name){
    /*Checks if string is a question */
    if(wordCheck(name)=== true){
       if(name.includes("?")){
        return true;
        } else{
            return false;
        } 
    }
    
}

function isIn(name){
    /*Returns a list of the words in the string, as an array */
    if(wordCheck(name)=== true){
       if(name instanceof Array){
        return "This is already an array";
        } else{
            if(name.includes(" ")){
                return name.split(" ");
            } else{
                return name.split("");
            }
        } 
    }
    
    
}

function wordCount(name){
    /*Returns the number of words in the string */
    if(wordCheck(name)=== true){
        return name.split(" ").length;
        
    }
}

function toCurrency(name){
    /*Returns a currency representation of the String */
    if(wordCheck(name)=== true){
        let currencyString = Number(name);
        if(typeof currencyString === "number" && !isNaN(currencyString)){
            return currencyString.toLocaleString();
        } else{
            return "This is not a number";
        }
    }
}

function fromCurrency(name){
    /*Returns a number representation of the Currency String */
    if(wordCheck(name)=== true){
        let currencyString = name.replace(/\,/g,'');
        if(!isNaN(Number(currencyString))){
            return currencyString;
        } else{
            return "This is not a number"; 
        }
    }
}

function inverseCase(name){
    /*Returns each letter in the string as an inverse of its current case */
    if(wordCheck(name)=== true){
        
        let regexpUpper = /^[A-Z]/;
        let splitString = name.split("");
        let inverseString = splitString.map(function(word){
            if(regexpUpper.test(word) === true){
                return word.toLowerCase();
                
            } else{
                return word.toUpperCase();
            }
        });
        return inverseString.join("");
    }

}

function alternatingCase(name){
    /*Returns the letters in alternating cases */
    if(wordCheck(name)=== true){
        
        let words = name.toLowerCase().split("");
        for (let index = 0; index < words.length; index += 2) {
            words[index] = words[index].toUpperCase();
        }
        return words.join("");
    }
}

function getMiddle(name){
    /*Returns the character(s) in the middle of the string */
    if(wordCheck(name)=== true){
        
        let position;
        let length;
        if(name.length % 2 === 1) {
            position = name.length / 2;
            length = 1;
        } else {
            position = name.length / 2 - 1;
            length = 2;
        }
        let result = name.substring(position, position + length);
        return result;
    }
}

function numberWords(name){
    /*Returns the numbers in words */
    if(wordCheck(name)=== true){
        if(!isNaN(Number(name))){
            let numbers = {0: "and",1:"one",2:"two",3:"three",4:"four",
            5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
            let splitNumber = name.toLocaleString().split(",");
            let listNums = [];
            for(let i=0; i<splitNumber.length; i++){
                let splitSubNums = splitNumber[i].split("");
                for(let ind=0; ind<splitSubNums.length; ind++){
                    for(let key in numbers){
                        if(Number(splitSubNums[ind])===Number(key)){
                        let newNum = numbers[key];
                        listNums.push(newNum);
                        }
                    }
                }
            }
            return listNums.join(" ");
        } else {return "This is not a number";}
    }
}

function isDigit(name){
    /*Returns true if the string is a digit */
    if(wordCheck(name)=== true){ 
        let splitName = name.split("");
        if(splitName.length>1){
            return false;
        } else {
            for(let digit of splitName){
                if(isNaN(Number(digit))){
                    return "This is not a number";
                } else{
                    return true;
                }
            }
                
        }
    }
        
}

function doubleCheck(name){
    /*Checks for double characters in strings */
    if(wordCheck(name)=== true){
        if((name.match(/[^\w\s]|(.)(?=\1)/gi, "")) !== null){
            return true;
        }
        else{
            return false;
        }
    }
}

export { hasVowels, toUpper, toLower, ucFirst, isQuestion, isIn, 
        wordCount, toCurrency, fromCurrency, inverseCase, alternatingCase, getMiddle, 
        numberWords, isDigit, doubleCheck }