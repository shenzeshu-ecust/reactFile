import React, { Component } from 'react';
import Demo from './components/1_setState'
class App extends Component {
    render() {
        return (
            <div>
                <Demo a={100}/>
            </div>
        );
    }
}

export default App;