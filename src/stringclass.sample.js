class stringClass{
    constructor(name){
        super(name);
        let name = this.name;

    }
    hasVowels(){
        if(typeof this.name === "string"){
            return true;
        }
    }
    toUpper(word){
        if(this.name.hasVowels === true){
            let resultVar = "";
            for(let i = 0; i < this.name.length; i++) {
                resultVar += String.fromCharCode(str.charCodeAt(i) & 223);
            }
            return resultVar;
        }
    }
    toLower() {
        if (name.hasVowels === true){
        let resultVar = '';

        for (let i = 0; i < this.name.length; i++) {
            // get the code of the current character
            let code = this.name.charCodeAt(i)

            // check if it's within the range of capital letters
            if (code > 64 && code < 91) {

            // if so, add a new character to the result string
            // of the character from our code, plus 32
            resultVar += String.fromCharCode(code + 32)
            } else {

                // otherwise, just add the current character
            resultVar += this.name.charAt(i)
            }
        }
        return resultVar
        }
        }
    ucFirst(){
        return this.name.charAt(0).toUpper;
    }
    isQuestion(){

    }
    in(){

    }
    wordCount(){

    }
 
}