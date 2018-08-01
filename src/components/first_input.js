import React, {Component} from "react";
import AddDeleteBtns from "./add_sub_input";
import Input from "./input"


export default class First_input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lvl: 0,
            counter: 0,
            classLvl: 0,
            number: 100,
            inputs: []
        }
    }

    doneClicked = () => {
        console.log(`counter przy doneClicked: ${this.state.counter}`);
        this.setState({
            counter: this.state.counter + 1,
        });

    };


    giveInputConst = () => {
        console.log(`counter 0: ${this.state.counter}`);

        const inputs = [];
        for (let i = 0; i < this.state.counter; i++) {
            if (this.state.counter - i === 1) {
                this.state.inputs.push(<Input number={this.state.number + i} class={this.state.classLvl + 1} key={this.state.number+ i}/>)
            }
            ;
        }
        console.log("z firsta inputy");
        console.log(this.state.inputs);
        return this.state.inputs
    };

    render() {
        return (
            <div className={`classLvl${this.state.classLvl}`}>
                <form className="form-group ">
                    <label>Question</label>
                    <input type="text" className="form-control"/>
                    <label>Type</label>
                    <select name="" id="typeOfAnswer" className="form-control mb-3">
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="radio">Yes/No</option>
                    </select>
                </form>
                <AddDeleteBtns adding={this.doneClicked}/>
                <div>
                    {this.giveInputConst()}
                </div>

            </div>
        )
    }
}