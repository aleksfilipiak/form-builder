import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FirstInput from "./first_input"

export default class App extends React.Component {
constructor (props){
    super(props);
    this.state={
        counter0: 0,
        firstInputs: []
    }
}

    doneClickedFirst = () =>{
    console.log("RUN doneClickedFirst");
        this.setState({
            counter0: this.state.counter0 + 1
        })
        console.log("counter0:" + this.state.counter0);
    };
    addFirstInput = () => {
console.log("RUN addFirstInput");
console.log("counter0: " + this.state.counter0);
        const firstInputs =[];
        for (let i=0; i<this.state.counter0; i++){
            if (this.state.counter0 - i === 1 ){
                this.state.firstInputs.push(<FirstInput key={i} number = {0}/>)
            }

        }
        console.log(`inputy typu first oraz END addFirstInput`);
        console.log(this.state.firstInputs);
        return <div>{this.state.firstInputs}</div>
    };

    render() {
        console.log("RUN render z app.js");
        return <div>
            <h1>Form builder</h1>
            <button className="btn btn-primary" onClick={this.doneClickedFirst}>Add Input</button>
            {this.addFirstInput()}
        </div>
    }
}

