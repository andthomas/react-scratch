import React, { Component } from "react";
import "./App.less";
import { hot } from "react-hot-loader";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> React Scratch </h1>
            </div>
        );
    }
}

export default hot(module)(App);