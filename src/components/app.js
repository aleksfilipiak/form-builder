import React from "react";
import FirstInput from "./first_input"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter0: 0,
            firstInputs: []
        }
    }

    doneClickedFirst = () => {
        this.setState({
            counter0: this.state.counter0 + 1
        });
    };
    addFirstInput = () => {
        for (let i = 0; i < this.state.counter0; i++) {
            if (this.state.counter0 - i === 1) {
                this.state.firstInputs.push(<FirstInput key={i} number={0}/>)
            }
        }
        return <div>{this.state.firstInputs}</div>
    };


    render() {
        return <div>
            <h1>Form builder</h1>
            <button className="btn btn-primary" onClick={this.doneClickedFirst}>Add Input</button>
            {this.addFirstInput()}
            <button onClick={this.addFormToBase} className="btn btn-primary mt-3">Add Form</button>
        </div>
    }
}