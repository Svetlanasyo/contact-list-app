import React, {Component} from 'react';
import './formComponent.css'


export class CreateFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            age: '',
            image: '',
            id:''
        }
        this.onCreate = this.props.onCreate;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.onCreate(this.state);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="general-form">
            <input type="text" 
                    placeholder="Enter name" 
                    onChange={(event) => this.setState({name: event.target.value})}/>
            <input type="text" 
                    placeholder="Enter Phone Number"
                    onChange={(event) => this.setState({phoneNumber: event.target.value})}/>
            <input type="text" 
                    placeholder="Enter age" 
                    onChange={(event) => this.setState({age: event.target.value})}/>
            <input type="text" 
                    placeholder="https://someurl"
                    onChange={(event) => this.setState({image: event.target.value})}/>

            <button type="submit">Create</button>
            </form>
        )
    }
}