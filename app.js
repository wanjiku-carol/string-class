import ReactDOM from 'react-dom';
import React from 'react';

import { Header } from './src/components/Header';
import { Intro } from './src/components/Intro';
import { Methods } from './src/components/Methods';
import { Result } from './src/components/Result';

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
            return(
                [<Header />,
                <Intro />,
                <Methods />]
            );
    }

}

ReactDOM.render(<App />, document.getElementById("app"));