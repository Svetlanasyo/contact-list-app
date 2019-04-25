import React, {Component} from 'react';
import { EditFormComponent } from '../editFormComponent/EditFormComponent';



export class ContactComponent extends Component {

    constructor() {
        super()
        this.state =
        {
            isOpened: false,
            isEdit: false
        }
    }

    handleOpened() {
        this.setState({
            isOpened : !this.state.isOpened
        })
    }

    handleEdit() {
        this.setState({
        isEdit : !this.state.isEdit
        }) 
    }

    render() {

        let detailedInfo = '';
        if(this.state.isOpened) {
            detailedInfo = (<React.Fragment>
            <div className="contact-number"> {this.props.phoneNumber} </div>
            <div className="contact-age"> {this.props.age} </div>
            </React.Fragment>
        )}

        let showEditForm = '';
        if(this.state.isEdit) {
            showEditForm = (<EditFormComponent name={this.props.name} 
                                                age={this.props.age} 
                                                phoneNumber={this.props.phoneNumber}
                                                id={this.props.id}
                                                onEdit={this.props.onEdit}
                                                image={this.props.image}/>)
        }

            return (
                <div>
                <li className="contact" onClick={this.handleOpened.bind(this)}>
                    <img className="contact-image" src={this.props.image} alt="" width="60px" height="60px" />
                    <div className="contact-info">
                        <div className="contact-name"> {this.props.name} </div>
                        {detailedInfo}
                    </div>   
                </li>
                <button className="editButton" onClick={this.handleEdit.bind(this)}>Edit</button>
                {showEditForm}
                </div>
            );
        
        
    }
}
