import React , {Component} from "react"

export default class AddDeleteBtns extends React.Component {

    handleClicked = () => {
       if( typeof this.props.adding === 'function'){
           this.props.adding()
       } else {
            console.log('WTF??');
       }
    };

    handleDelete = () =>{
        if(typeof this.props.deleting === 'function'){
            this.props.deleting(this.props.number)
        }else{
            console.log("wtf?");
        }
    };

    render() {
        return (
            <div className="mb-3">
                <button className="btn btn-primary mr-3" onClick={this.handleClicked}>Add Sub-Input</button>
                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}
