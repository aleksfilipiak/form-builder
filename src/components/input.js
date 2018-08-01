import React, {Component} from "react";
import AddDeleteBtns from "./add_sub_input";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lvl: 1,
            counter2: 0,
            klasa: this.props.class,
            number: this.props.number,
            inputs: [],
            typeOfAnswer: this.props.typeOfAnswer,
            condition: ''
        }
        // this.deleteInput = this.deleteInput.bind(this)
    }

    doneClicked = () => {
        console.log("działa2");
        this.setState({
            counter2: this.state.counter2 + 1
        })
    };
    giveInputConst = () => {
        console.log(`counter 2: ${this.state.counter2}`);
        const inputs = [];
        for (let i = 0; i < this.state.counter2; i++) {
            if (this.state.counter2 - i === 1) {
                this.state.inputs.push(<Input number={this.state.number + i + 100}
                                              key={this.state.number + i + 100}
                                              class={this.state.klasa + 1}/>)
            }
        }
        console.log(this.state.inputs);
        return this.state.inputs
    };
    // deleteInput = (num) => {
    //
    //     // console.log(this.state.inputs);
    //     console.log("del działa");
    //     if(this.state.counter2 >=1) {
    //         for (let i = 0; i < this.state.counter2; i++) {
    //             console.log("kliknięty obiekt del");
    //             console.log(this.giveInputConst()[i].props.number - 100)
    //         }
    //     }
    //
    //     // const newInputs = this.giveInputConst().filter(input => {
    //     //     console.log(input.props.number);
    //     //     return input.props.number !== number;
    //     // })
    //
    //     // console.log(newInputs);
    //     // let newInputsthis = this.state.inputs;
    //     this.giveInputConst().forEach(function (value) {
    //         num = value.key
    //     })
    //     this.setState(prevState => ({
    //         inputs: prevState.inputs.filter(el => el !== num)
    //     }))
    //
    // };

    selectedValue = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
        console.log(event.currentTarget.value);
    };

    conditioning = () =>{
        if (this.props.typeOfAnswer === "text"){
            return <select name="" id="typeOfAnswer" className='form-control col-6'>
                <option value='equals'>Equals</option></select>
        }
        if (this.props.typeOfAnswer === "number"){
            return <select name="" id="typeOfAnswer" className='form-control col-6'>
                <option value="equals">Equals</option>
                <option value="lessThen">Less then</option>
                <option value="greaterThen"> Greater then</option></select>
        }
        if (this.props.typeOfAnswer === "radio"){
            return <select name="" id="typeOfAnswer" className='form-control col-6'>
                <option value="equals">Equals</option>
            </select>
        }
    };

    conditioningValue =() =>{
        if (this.props.typeOfAnswer === "text"){
            return <input type="text" className="form-control col-6 "/>
        }
        if (this.props.typeOfAnswer === "number"){
            return <input type="number" className="form-control col-6"/>
        }
        if (this.props.typeOfAnswer === "radio"){
            return <select name="" id="typeOfCondition" className='form-control col-6'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        }
    };


    render() {
        return (
            <div className={`classLvl${this.props.class}`}>
                <div>
                    <h4>{this.props.number}</h4>
                    <form action="" className="group-form">
                        <div className="form-row">
                            <label htmlFor="" className="col">Condition</label>
                            {this.conditioning()}
                            {/*<input value="zalezy od poprzedniego" className="form-control col"/>*/}

                            {this.conditioningValue()}
                        </div>
                        <label htmlFor="">Question</label>
                        <input type="text" className="form-control"/>
                        <label htmlFor="">Type</label>
                        <select id="typeOfAnswer"
                                className="form-control mb-3"
                                onChange={this.selectedValue}
                                value={this.state.typeOfAnswer}>
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="radio">Yes/No</option>
                        </select>
                    </form>
                    <AddDeleteBtns adding={this.doneClicked}
                                   deleting={this.deleteInput}
                    />
                </div>
                <div>
                    {this.giveInputConst()}
                </div>
            </div>
        )
    }
}