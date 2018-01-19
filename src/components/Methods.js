import React from 'react';

import { hasVowels, wordCheck, toUpper, toLower, ucFirst, isQuestion, isIn, 
        wordCount, toCurrency, fromCurrency, inverseCase, alternatingCase, getMiddle, 
        numberWords, isDigit, doubleCheck } from './stringclass.js';
        import { Result } from './Result.js';


export class Methods extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: "", value:"?", methods : ["hasVowels", "wordCheck", "toUpper", "toLower", "ucFirst", "isQuestion", 
            "isIn", "wordCount", "toCurrency", "fromCurrency", "inverseCase", 
            "alternatingCase", "getMiddle", "numberWords", "isDigit", "doubleCheck"]};
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        
        this.elements = this.state.methods.map( (method, index) => {
               return <option key = {index} className="options" value={method}>{method}</option>
           });
        
    }
    
    handleChangeName(e){
        this.setState({name: e.target.value});
    }
    
    handleClick(){
        let returnMethods= [hasVowels(this.state.name), wordCheck(this.state.name), toUpper(this.state.name), 
        toLower(this.state.name), ucFirst(this.state.name), isQuestion(this.state.name), isIn(this.state.name), 
        wordCount(this.state.name), toCurrency(this.state.name), fromCurrency(this.state.name), inverseCase(this.state.name),
        alternatingCase(this.state.name), getMiddle(this.state.name), numberWords(this.state.name), isDigit(this.state.name),
        doubleCheck(this.state.name)];
        for(let i=0; i<this.state.methods.length; i++){
            if(this.state.value === this.state.methods[i]){
                return returnMethods[i];
            }
        }
    }

    render(){
        
        return(
            <div className="input-div">
                <div>
                    <p><b>Enter string:</b></p>
                    <input id="string-input" type="text" name={this.state.name} onChange={this.handleChangeName}/>
                </div>
                <div>
                    <p><b>Select method</b></p>
                    <select className="select-options" onChange={event => this.setState({ value: event.target.value })}
          value={this.state.value}>
                        {this.elements}
                    </select>
                </div>
                <div>
                    <button className="btn-result" onClick={this.handleClick}>Get Result</button>
                </div>
            </div>
        );
    }
}
