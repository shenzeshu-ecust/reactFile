import React, { Component } from 'react';
// import Demo from './components/1_setState'
// import Demo from './components/2_hooks/index'
// import Demo from './components/3_Fragment'
// import Demo from './components/4_Context'
// import Demo from './components/5_组件优化'
// import Demo from './components/6_renderProps'
// import Demo from './components/7_发布订阅/index'
import Demo from './components/8_redux/noRedux'






class App extends Component {
    render() {
        return (
            <>
                <Demo a={100}/>
            </>
        );
    }
}

export default App;