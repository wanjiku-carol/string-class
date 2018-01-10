export class stringClass{
    constructor(name){
        this.name = name;
    }
    wordCheck(){
        /*Check if the string is empty */
        if(!this.name){
            return "There must be a string";
        }
    }

    hasVowels(){
        /*Checks if the string contains vowels*/
        let vowels = ['a','e','i','o','u'];
        let nameSplit = this.name.split("");
        for(let i=0; i<vowels.length; i++){
            if(nameSplit.filter(letter => letter === vowels[i])){
                return true;
            }
        }
        
    }

    toUpper(inputString){
        /*Converts a string to uppercase */
        this.inputString = inputString;
        let newString = [];
        for(let word of this.inputString.split(" ")){
            let resultVar = "";
            for(let i = 0; i < word.length; i++) {
                resultVar += String.fromCharCode(word.charCodeAt(i) & 223);
            }
            newString.push(resultVar);
        }
        if(newString.join(" ") === this.inputString){
            return "String is already in uppercase";
        }else {
            return newString.join(" ");
        }
    }

    toLower() {
        /*Converts a string to lowercase */
        let newString = [];
        for(let word of this.name.split(" ")){
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
        if(newString.join(" ") === this.name){
            return "String already in lowercase";
        } else{
            return newString.join(" ");
        }
    }

    ucFirst(){
        /*Converts the first letter of a string to uppercase*/
        let splitName = this.name.charAt(0);

        return (this.toUpper(splitName)+ this.name.substr(1) + "?");
    }

    isQuestion(){
        /*Checks if string is a question */
        if(this.name.includes("?")){
            return true;
        } else{
            return false;
        }
    }

    in(){
        /*Returns a list of the words in the string, as an array */
        if(this.name instanceof Array){
            return "This is already an array";
        } else{
            if(this.name.includes(" ")){
                return this.name.split(" ");
            } else{
                return this.name.split("");
            }
        }
        
    }

    wordCount(){
        /*Returns the number of words in the string */
        return this.name.split(" ").length;
    }
    
    toCurrency(){
        /*Returns a currency representation of the String */
        let currencyString = Number(this.name);
        if(typeof currencyString === "number" && !isNaN(currencyString)){
            return currencyString.toLocaleString();
        } else{
            return "This is not a number";
        }
    }

    fromCurrency(){
        /*Returns a number representation of the Currency String */
        let currencyString = this.name.replace(/\,/g,'');
        if(!isNaN(Number(currencyString))){
            return currencyString;
        } else{
            return "This is not a number"; 
        }
    }

    inverseCase(){
        /*Returns each letter in the string as an inverse of its current case */
        let regexpUpper = /^[A-Z]/;
        let splitString = this.name.split("");
        let inverseString = splitString.map(function(word){
            if(regexpUpper.test(word) === true){
                return word.toLowerCase();
                
            } else{
                return word.toUpperCase();
            }
        });
        return inverseString.join("");

    }

    alternatingCase(){
        /*Returns the letters in alternating cases */
        let words = this.name.toLowerCase().split("");
        for (let index = 0; index < words.length; index += 2) {
            words[index] = words[index].toUpperCase();
        }
        return words.join("");
    }

    getMiddle(){
        /*Returns the character(s) in the middle of the string */
        let position;
        let length;
        if(this.name.length % 2 === 1) {
            position = this.name.length / 2;
            length = 1;
        } else {
            position = this.name.length / 2 - 1;
            length = 2;
        }
        let result = this.name.substring(position, position + length);
        return result;
    }

    numberWords(){
        /*Returns the numbers in words */
        let numbers = {0: "and",1:"one",2:"two",3:"three",4:"four",
        5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
        let splitNumber = this.name.toLocaleString().split(",");
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
    }

    isDigit(){
        /*Returns true if the string is a digit */
        let splitName = this.name.split("");
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

    doubleCheck(){
        /*Checks for double characters in strings */
        if((this.name.match(/[^\w\s]|(.)(?=\1)/gi, "")) !== null){
            return true;
        }
        else{
            return false;
        }
    }
 
}
