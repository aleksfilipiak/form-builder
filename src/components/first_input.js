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
            condition: "",
            question: ''
        }
    }

    doneClicked = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    giveInputConst = () => {
        for (let i = 0; i < this.state.counter; i++) {
            if (this.state.counter - i === 1) {
                this.state.inputs
                    .push(<Input number={this.state.number + i}
                                 class={this.state.classLvl + 1}
                                 key={this.state.number + i}
                                 typeOfAnswer={this.state.typeOfAnswer}
                                 condition={this.state.condition}/>)
            }
        }
        return this.state.inputs;
    };

    selectedValue = (event) => {
        event.preventDefault();
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
    };
    changeHandlerInput = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    };

    render() {
        return (
            <div className={`classLvl${this.state.classLvl}`}>
                <form className="form-group ">
                    <label>Question</label>
                    <input type="text"
                           className="form-control"
                           value={this.state.question}
                           onChange={this.selectedValue}
                           id="question"/>
                    <label>Type</label>
                    <select id="typeOfAnswer"
                            className="form-control mb-3"
                            onChange={this.changeHandlerInput}
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