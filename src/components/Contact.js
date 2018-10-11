import React, { Component } from 'react'
import './Contact.css';



class Contact extends Component {
    state ={
       showContactInfo: false,
       icon: "fas fa-sort-down"
       
    };

    onShowClick = () => {
        this.setState({
            showContactInfo : !this.state.showContactInfo
        })
        if(this.state.showContactInfo){
            this.setState({
                icon : "fas fa-sort-down"
            })
        }else{
            this.setState({
                icon: "fas fa-caret-up"
            })
        }
    }

    deleteClick = () => {
        this.props.deleteClickHandler();
    }
    
   
    
    render() { 
        // const {name, email, phone } = this.props.contact;
       
        const { showContactInfo } = this.state;
       
        return (  
            <div className ="contactCard" >
           
            {this.props.contact.text1 == null ? null : <div >
            
            <div className = "card - card-body mb-3">
             <h4>{this.props.contact.text1} <i onClick = {this.onShowClick} className={this.state.icon} style={{cursor:'pointer'}}></i>
                        <i onClick = {this.deleteClick} className="fas fa-times ml-1" style={{cursor:'pointer', float:'right',color:'red'}}></i>
             
             </h4>
             {showContactInfo ? <ul className ="list-group">
                 <li className = "list-group-item">Email: {this.props.contact.text2}</li>
                 <li className = "list-group-item">Phone: {this.props.contact.text3}</li>
             </ul> : null }
             
            </div> 
            </div> }
            </div>
        );
    }
}


 
export default Contact;