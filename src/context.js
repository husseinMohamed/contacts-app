import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
       case 'Delete Contact':
         return{
             ...state,
             contacts: state.contacts.filter(contact =>
                contact.id !== action.payload)
         }
         default:
          return state;
    }
}

export class Provider extends Component{
state = {
        contacts: [
        {
            id: 1,
            name: "Hussein ",
            email: "huss3inm@gmail.com",
            phone: '555-444-2222'
        },{
            id: 2,
            name: "Mohamed",
            email: "moh@gmail.com",
            phone: '888-333-2222'
        },{
            id: 3,
            name: "Dan",
            email: "dan@gmail.com",
            phone: '111-444-9999'
        }
    ]
    }
    render(){
        return(
            <Context.Provider value={this.state}>
             {this.props.children}
            </Context.Provider>
        );
    }

}

export const Consumer = Context.Consumer;
