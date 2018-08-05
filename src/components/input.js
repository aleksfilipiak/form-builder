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

    // componentWillMount() {
    //     console.log("component will mount");
    //     this.deleteInput()
    // }
    //
    // componentDidMount() {
    //     console.log("component did mount");
    //     this.deleteInput()
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     console.log("component will receive props");
    //     if (nextProps.number, 200 !== this.props.number, 200) {
    //         this.setState({loaded: false})
    //         console.log("component will receive props and loaded: " + this.state.loaded);
    //     }
    // }
    //
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log( "shouldComponentUpdate");
    //     return  nextState.question !== this.state.question
    // }
    //
    // componentDidUpdate(){ console.log("component did update and "+"this.state. loaded" + this.state.loaded +" and this.state.counter2: "+ this.state.counter2)
    //     }
    //
    // componentWillUnmount (){ console.log("component will unmount");}


    doneClicked = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
            delClicked: false
        });
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
        return this.state.inputs
    };

    deleteInput = (index, e) => {
        if (this.state.delClicked === true) {
            const newInputs = this.state.inputs;
            newInputs.splice(index, 2);
            this.setState({
                inputs: [...newInputs]
            })
        }
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

    wannaDelete = () =>{
       this.state.inputs.map(item => console.log(item.key));
    }

    render() {
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