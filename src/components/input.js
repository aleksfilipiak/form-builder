import React, {Component} from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.delClicked = this.delClicked.bind(this)
        this.state = {
            lvl: 1,
            counter2: 0,
            class: this.props.class,
            number: this.props.number,
            inputs: [],
            typeOfAnswer: this.props.typeOfAnswer,
            condition: this.props.condition,
            question: '',
            typeOfCond: this.props.typeOfCond,
            delClicked: false,
            loaded: 0
        }
    }


    doneClicked = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
            delClicked: false
        });
    }

    componentDidMount() {

        this.baseUrl = `http://localhost:3001/inputs`;
        const example = {
            id: this.state.number,
            class: this.state.class,
            typeOfAnswer: this.state.typeOfAnswer,
            condition: this.state.condition,
            question: this.state.question,
            typeOfCond: this.state.typeOfCond,
            children: [...this.state.inputs]
        };

        fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(example),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok)
                    return res.json();
                else
                    throw new Error('bład POST');
            })
            .then(() => console.log('post klika sie'))
            .catch(err => console.log(err));

    };

    delClicked = () => {


        this.setState({
            delClicked: true,
            loaded: this.state.loaded + 1,
            counter2: 0
        });
        if (this.state.delClicked === true) {
            {
                this.deleteInput()
            }
        }
    };

    handleDelete = () => {
        if (typeof this.props.deleting === 'function') {
            this.props.deleting()
        } else {
            console.log("wtf?");
        }
    };

    giveInputConst = () => {
        if (this.state.delClicked === false) {
            for (let i = 0; i < this.state.counter2; i++) {
                if (this.state.counter2 - i === 1) {
                    this.state.inputs.push(<Input number={this.state.number + i + 100}
                                                  key={this.state.number + i + 100}
                                                  class={this.state.class + 1}
                                                  typeOfAnswer={this.state.typeOfAnswer}
                                                  contidion={this.state.condition}
                                                  deleting={this.delClicked}/>)
                }
            }
        }
        console.log("gieInputConst");
        return this.state.inputs
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.delClicked !== nextProps.delClicked) {
            this.deleteInput(nextProps.delClicked)
        }
    }

    deleteInput = (index) => {

        const newInputs = this.state.inputs;
        newInputs.splice(index, 2);
        this.setState({
            inputs: [...newInputs]
        });
        return this.state.inputs
    };

    changeHandlerInput = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    };

    conditioning = () => {
        if (this.props.typeOfAnswer === "text") {
            return <select id="typeOfCond"
                           className='form-control col-6'
                           value={this.state.typeOfCond}
                           onChange={this.changeHandlerInput}>
                <option value='equals'>Equals</option>
            </select>
        }
        if (this.props.typeOfAnswer === "number") {
            return <select id="typeOfCond"
                           className='form-control col-6'
                           value={this.state.typeOfCond}
                           onChange={this.changeHandlerInput}>
                <option value="equals">Equals</option>
                <option value="lessThen">Less then</option>
                <option value="greaterThen"> Greater then</option>
            </select>
        }
        if (this.props.typeOfAnswer === "radio") {
            return <select id="typeOfCond"
                           className='form-control col-6'
                           value={this.state.typeOfCond}
                           onChange={this.changeHandlerInput}>
                <option value="equals">Equals</option>
            </select>
        }
    };

    conditioningValue = () => {
        if (this.props.typeOfAnswer === "text") {
            return <input type="text"
                          id="condition"
                          className="form-control col-6"
                          value={this.state.condition}
                          onChange={this.changeHandlerInput}/>
        }
        if (this.props.typeOfAnswer === "number") {
            return <input type="number"
                          id="condition"
                          className="form-control col-6"
                          value={this.state.condition}
                          onChange={this.changeHandlerInput}/>
        }
        if (this.props.typeOfAnswer === "radio") {
            return <select id="condition"
                           className='form-control col-6'
                           value={this.state.condition}
                           onChange={this.changeHandlerInput}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        }
    };

    wannaDelete = () => {
        this.state.inputs.map(item => console.log(item.key));
        console.log(this.state.inputs);
    }

    render() {
        console.log("render");
        return (
            <div className={`classLvl${this.props.class}`}>
                <h4>{this.props.number}</h4>
                <form action="" className="group-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="" className="input-group-text">Condition</label>
                            {this.conditioning()}
                            {this.conditioningValue()}
                        </div>
                    </div>
                    <label htmlFor="">Question</label>
                    <input type="text" className="form-control"
                           id='question'
                           onChange={this.changeHandlerInput}
                           value={this.state.question}/>
                    <label htmlFor="">Type</label>
                    <select id="typeOfAnswer"
                            className="form-control mb-3"
                            onChange={this.changeHandlerInput}
                            value={this.state.typeOfAnswer}>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="radio">Yes/No</option>
                    </select>
                </form>
                <div className="mb-3">
                    <button className="btn btn-primary mr-3"
                            onClick={this.doneClicked}>Add Sub-Input
                    </button>
                    <button className="btn btn-danger"
                            onClick={() => this.handleDelete()}>Delete
                    </button>
                </div>
                {this.giveInputConst()}
                {this.wannaDelete()}
            </div>
        )
    }
}