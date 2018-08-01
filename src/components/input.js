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
            inputs: []
        }
        this.deleteInput = this.deleteInput.bind(this)
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
            if (this.state.counter2 > 0) {
                this.state.inputs.push(<Input number={this.state.number + i + 100} key={this.state.number + i +100 }
                                              class={this.state.klasa + 1}/>)
            }
        }
        console.log(`nowe inputy: ${this.state.inputs}`)
        console.log(this.state.inputs);
        return this.state.inputs
    };
    deleteInput = (num) => {
        // if(this.state.counter2 >=1) {
        //     for (let i = 0; i < this.state.counter2; i++) {
        //         console.log(this.giveInputConst()[i].props.number)
        //     }
        // }

        // const newInputs = this.giveInputConst().filter(input => {
        //     console.log(input.props.number);
        //     return input.props.number !== number;
        // })
        // console.log(newInputs);
        // this.state.inputs = newInputs
        this.giveInputConst().forEach(function (value) {
            num = value.key
        })
        this.setState(prevState => ({
            inputs: prevState.inputs.filter(el => el != num)
        }))

    };

    render() {
        return (
            <div className={`classLvl${this.props.class}`}>
                <div>
                    <h4>{this.props.number}</h4>
                    <form action="" className="group-form">
                        <div className="form-row">
                            <label htmlFor="" className="col">Condition</label>
                            <input value="zalezy od poprzedniego" className="form-control col"/>
                            {/*<select name="" id=""></select>*/}
                            <input type="text" value="zalezu od poprzedniego" className="form-control col"/>
                        </div>
                        <label htmlFor="">Question</label>
                        <input type="text" className="form-control"/>
                        <label htmlFor="">Type</label>
                        <select name="" id="typeOfAnswer" className="form-control mb-3">
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