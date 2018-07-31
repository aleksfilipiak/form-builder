import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FirstInput from "./first_input"

export default class App extends React.Component {
constructor (props){
    super(props);
    this.state={
        firstInputClicked: false
    }
}

    addFirstInput = () => {
        this.setState({
            firstInputClicked: true
        })
    };

    render() {
        return <div>
            <h1>Form builder</h1>
            {this.state.firstInputClicked === true && <FirstInput className="mb-3"/> }
            <button className="btn btn-primary" onClick={this.addFirstInput}>Add Input</button>
        </div>
    }
}

