import React, { Component } from 'react'
import './AddContact.css';

class AddContact extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name: this.props.txtName,
            email: this.props.txtEmail,
            phone: this.props.txtPhone,
            showAddContact: false,
            icon: "fas fa-plus-circle"
        } 
    }
    
    onShowAddContact = () => {
     this.setState({
         showAddContact: !this.state.showAddContact
     })
     if(this.state.showAddContact){
        this.setState({
            icon : "fas fa-plus-circle"
        })
    }else{
        this.setState({
            icon: "fas fa-arrow-circle-up"
        })
    }
    }
    
   
    onNameChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    onEmailChange = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    onPhoneChange = (e) => {
        this.setState({
            phone : e.target.value
        })
    }

    onSubmit = (item1, item2, item3) => {
    if(item1.length > 0 && item2.length > 0 && item3.length > 0){
       this.props.addNewForm(item1, item2, item3);
       this.setState({
           name: '',
           email: '',
           phone: ''
       });
        }
   }

    render() { 
        const { showAddContact } = this.state;
        const {name, email, phone} = this.state;
        return ( 
            <div className = "AnimateCard">
            <div className = "card mb-3">
            
              <div className="card-header">Add Contact<i id="btnAnimate" onClick = {this.onShowAddContact} className={this.state.icon} style={{cursor:'pointer', float:'right'}}></i></div>
               
                  {showAddContact ? <div className ="card-body">
                    <div >
                        <div className = "form-group">
                          <label htmlFor = "name">Name</label>
                          <input 
                             type = "text"
                             name ="name"
                             className = "form-control form-control-lg" 
                             placeholder="Enter Name.."
                             value = {name}
                             onChange={this.onNameChange}/>
                        </div>
                        <div className = "form-group">
                          <label htmlFor = "email">Email</label>
                          <input 
                             type = "text"
                             name="email"
                             className = "form-control form-control-lg" 
                             placeholder="Enter Email.."
                             value= {email}
                             onChange={this.onEmailChange}/>
                        </div>
                        <div className = "form-group">
                          <label htmlFor = "phone">Phone Number</label>
                          <input 
                             type = "text"
                             name="phone"
                             className = "form-control form-control-lg" 
                             placeholder="Enter Phone Number.."
                             value={phone}
                             onChange={this.onPhoneChange}/>
                        </div>
                        <button onClick={() => this.onSubmit(this.state.name,this.state.email,this.state.phone)}
                        className = "btn btn-block" 
                        >Submit</button>

                    </div>
        </div> : null}

            </div>
            </div>
         );
    }
}
 
export default AddContact;