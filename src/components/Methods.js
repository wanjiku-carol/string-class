import React from 'react';

import * as stringMethods from './stringclass.js';
import { Result } from './Result.js';


export class Methods extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: "", value: "?", response: ""};
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    
    handleChangeName(e){
        this.setState({name: e.target.value});
    }
    
    handleClick() {
        const newString = String(stringMethods[this.state.value](this.state.name));
        this.setState({response: newString});
    }

    render(){
        return (
            <div>
                <div className="input-div">
                    <div>
                        <p><b>Enter string:</b></p>
                        <input id="string-input" type="text" name={this.state.name} onChange={this.handleChangeName}/>
                    </div>
                    <div>
                        <p><b>Select method</b></p>
                        <select
                            className="select-options"
                            onChange={event => this.setState({ value: event.target.value })}
                            value={this.state.value}
                        >
                            {Object.keys(stringMethods).map((method, index) => {
                                return <option key = {index} className="options" value={method}>{method}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <button className="btn-result" onClick={this.handleClick}>Get Result</button>
                    </div>
                </div>
                <Result value={this.state.response}/>
            </div>
        );
    }
}
