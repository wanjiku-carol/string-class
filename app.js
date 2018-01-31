import React from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/Header';
import Intro from './src/components/Intro';
import Methods from './src/components/Methods';

class App extends React.Component{
    render(){
        return(
        <div>
            <Header />
            <Intro />
            <Methods />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
