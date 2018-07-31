import React , {Component} from "react"

export default class AddDeleteBtns extends React.Component {

    handleClicked = () => {
       if( typeof this.props.adding === 'function'){
           this.props.adding()
       } else {
            console.log('WTF??');
       }
    };

    render() {
        return (
            <div className="mb-3">
                <button className="btn btn-primary mr-3" onClick={this.handleClicked}>Add Sub-Input</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    }
}
