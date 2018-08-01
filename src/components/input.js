import React, {Component} from "react";
import AddDeleteBtns from "./add_sub_input";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lvl: 1,
            counter2: 0,
            klasa: this.props.class,
            number: this.props.number
        }
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
                inputs.push(<Input number={this.state.number + i + 100} key={i} class={this.state.klasa + 1} />)
            }
            ;
        }
        return <div>{inputs}</div>
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
                    />
                </div>
                <div>
                    {this.giveInputConst()}
                </div>
            </div>
        )
    }
}