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
            inputs: [],
            typeOfAnswer: "text",
            condition: ""
        }
    }

    doneClicked = () => {
        console.log("RUN doneClicked w firstInpucie");

        this.setState({
            counter: this.state.counter + 1,
        });
        console.log(`counter: ${this.state.counter}`);
    };


    giveInputConst = () => {
        console.log("RUN giveInputConst Z FIRSTA");
        console.log(`counter: ${this.state.counter}`);;

        const inputs = [];
        for (let i = 0; i < this.state.counter; i++) {
            if (this.state.counter - i === 1) {
                this.state.inputs.push(<Input number={this.state.number + i}
                                              class={this.state.classLvl + 1}
                                              key={this.state.number + i}
                                              typeOfAnswer={this.state.typeOfAnswer}
                                              condition={this.state.condition}/>)
            }
        }
        console.log("z firsta inputy oraz END giveInputConst Z FIRSTA");
        console.log(this.state.inputs);
        return this.state.inputs;
    };

    selectedValue = (event) => {
        event.preventDefault();
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    };

    render() {
        console.log("RUN render Z FIRSTA");
        return (
            <div className={`classLvl${this.state.classLvl}`}>
                {/*<h3>{this.props.number}</h3>*/}
                <form className="form-group ">
                    <label>Question</label>
                    <input type="text" className="form-control"/>
                    <label>Type</label>
                    <select id="typeOfAnswer"
                            className="form-control mb-3"
                            onChange={this.selectedValue}
                            value={this.state.typeOfAnswer}>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="radio">Yes/No</option>
                    </select>
                </form>
                <AddDeleteBtns adding={this.doneClicked}/>
                {this.giveInputConst()}
            </div>
        )
    }
}