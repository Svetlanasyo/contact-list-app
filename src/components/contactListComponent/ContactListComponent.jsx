import React, {Component} from 'react';
import {CONTACTS} from '../common';
import { ContactComponent } from './ContactComponent';
import './ContactListComponentStyles.css'
import { CreateFormComponent } from '../createContactFormComponent/CreateFormComponent';

export class ContactListComponent extends Component {

    constructor() {
        super()
        this.state =
        {
            displayedContacts: CONTACTS
        }
    }

    handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    }

    handleEdit(editContact) {
        let index = CONTACTS.findIndex((contact) => contact.id === editContact.id);
        CONTACTS.splice(index, 1, editContact);
        this.setState({
            displayedContacts: CONTACTS
        }) 
    }

    handleCreate(newContact) {
        CONTACTS.push(newContact)
        this.setState({
            displayedContacts: CONTACTS
        })
    }

    render() {
        return (
            <div className="contacts">
                <div className="create-form">
                    <CreateFormComponent onCreate={this.handleCreate.bind(this)}/>
                </div>
                <input type="text" className="search-field" onChange={this.handleSearch.bind(this)} placeholder="Search" />
                <ul className="contacts-list">
                    {
                       this.state.displayedContacts.map((el) => {
                            return <ContactComponent
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                age={el.age}
                                onEdit={this.handleEdit.bind(this)}
                            />;
                       })
                    }
                </ul>
            </div>
        );
    }
};
