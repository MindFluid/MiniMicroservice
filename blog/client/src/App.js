import React, { Component } from 'react';
import PostCreate from './PostCreate';
import Posts from './Posts';


class App extends Component {
    render() {
        return <div className="container">
            <h2>MicroService Blog App</h2>
            <PostCreate />
            <hr />
            <Posts/>
        </div>
    }
}
export default App;