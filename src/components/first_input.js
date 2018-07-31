import React, {Component} from "react";
import AddDeleteBtns from "./add_sub_input";
import Input from "./input"


export default class First_input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lvl: 0,
            counter: 0,
            counter1: 1
        }
    }

    doneClicked = () => {
        console.log("działa1");
        console.log(this.state.counter);
        this.setState({
            counter: this.state.counter + 1,
            counter1: this.state.counter1 + 1
        });

    };

    showCounter = () => {
        console.log(`counter 0: ${this.state.counter}`);
        console.log(`counter 1: ${this.state.counter1}`);
    }

    shouldComponentUpdate () {
        const giveInputConst = giveInputConst  (() =>{
            if (this.state.counter1 > this.state.counter && this.state.counter > 0) {
                return <Input/>
            }
        })
    }


    render() {

        return (

            <div>

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
                {this.giveInputConst}
                {this.showCounter()}
            </div>
        )
    }
}