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
    console.log("counter firsta działa");
        this.setState({
            counter0: this.state.counter0 + 1
        })
    };
    addFirstInput = () => {

        const firstInputs =[];
        for (let i=0; i<this.state.counter0; i++){
            if (this.state.counter0 - i === 1 ){
                this.state.firstInputs.push(<FirstInput key={i}/>)
            }

        }
        console.log(`inputy typu first`);
        console.log(this.state.firstInputs);
        return <div>{this.state.firstInputs}</div>
    };

    render() {
        return <div>
            <h1>Form builder</h1>
            <button className="btn btn-primary" onClick={this.doneClickedFirst}>Add Input</button>
            {this.addFirstInput()}
        </div>
    }
}

