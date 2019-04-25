import React, {Component} from 'react';


export class EditFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            phoneNumber: this.props.phoneNumber,
            age: this.props.age,
            id: this.props.id,
            image: this.props.image
        }
        this.onEdit=this.props.onEdit
    }

    handleSubmit(event) {
        event.preventDefault();
        this.onEdit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="general-form">
            <input type="text" 
                    placeholder={this.props.name} 
                    onChange={(event) => this.setState({name: event.target.value})}/>
            <input type="text" 
                    placeholder={this.props.phoneNumber} 
                    onChange={(event) => this.setState({phoneNumber: event.target.value})}/>
            <input type="text" 
                    placeholder={this.props.age} 
                    onChange={(event) => this.setState({age: event.target.value})}/>

            <button type="submit">Save</button>
            </form>
        )
    }
}