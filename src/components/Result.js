import React from 'react';

export class Result extends React.Component{
    render(){
        return(
            <div className="textarea-div">
                <div>
                    <p><b>Result:</b></p>
                </div>
                <textarea className="text-area" rows="10" value={this.props.value}></textarea>
            </div>
        );
    }
}
