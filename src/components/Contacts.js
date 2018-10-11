import React, { Component } from 'react'
import Contact from './Contact';
import AddContact from '../AddContact';


class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {
                
                    name: "",
                    email: "",
                    phone: ""
                }],
                nextId: 0
        }
    }

    deleteContact = (id) => {
        this.setState({
            contacts : this.state.contacts.filter((contact)=> contact.id !== id)
          });
      
    }
    
    addNewFORM = (txtName,txtEmail,txtPhone) =>{
       
        let contacts = this.state.contacts.slice();
        contacts.push({id: this.state.nextId, text1: txtName, text2:txtEmail, text3:txtPhone});
        this.setState({
            contacts: contacts,
            nextId: this.state.nextId + 1
        });
        
        

    }
    
    render() { 
        const {contacts} = this.state;
        return ( 
            <div>
             <AddContact txtName ='' txtEmail='' txtPhone='' addNewForm = {this.addNewFORM}/>
             
             {contacts.map((contact, index) => {
                 return( 
                 <Contact 
                    
                    key={contact.id} 
                    contact = {contact}
                    deleteClickHandler = {() => this.deleteContact(contact.id)}>
                 </Contact>);
             } ) }
            </div>
         );
    }
}
 
export default Contacts;