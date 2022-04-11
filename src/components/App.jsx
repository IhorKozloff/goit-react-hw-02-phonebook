import React, { Component } from "react";

import { Title } from 'components/Title/Title';
// import { getAllByTitle } from "@testing-library/react";


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
    name: '',
    number: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {name, number} = event.currentTarget.elements;
    

    const newContact = {
      name: name.value,
      number: number.value,
      id: Math.random()
    };
    
    
    this.setState(prevState => {

    for (const item of prevState.contacts) {
      return item.name.toLowerCase() === newContact.name.toLowerCase() 
      ? alert(`${item.name} is already in contacts`) 
      : {contacts: [...prevState.contacts, newContact]}
    }

      
    })
    event.currentTarget.reset();
  }

onFilterChange = (event) => {


  this.setState({filter: event.currentTarget.value})
}


onDeleteBtn = (event) => {
if (event.target.nodeName !== "BUTTON") {
  return
} else {
  const idOfLi = event.currentTarget.id;
  console.log(idOfLi)
  console.log(this.state.contacts)

  this.setState(prevState => {

    const check = prevState.contacts.filter(item => item.id !== idOfLi);
    console.log(check)
    

   return {contacts: check}
  
                      
  });
  
}

}

  render () {
    // console.log(this.state)
    
    return (
      <>
        <Title text={"Phonebook"}/>

        <form name='myFirstReactForm' onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label htmlFor="number">
            Tel
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit" name="btn">Add contact</button>
        </form>

        <label>
            Find contacts by name
            <input type="text" onChange={this.onFilterChange}>
            
            </input>
          </label>

        <Title text={"Contacts"}/>
        <ul>
          {
            this.state.contacts.map(({id, name, number}) => { 
              if (name.toLowerCase().includes(this.state.filter.toLowerCase())) {
                return (
                  <li key={id} id={id} onClick={this.onDeleteBtn}>
                    {name}: {number}
                    <button type="button">Delete</button>
                  </li>
                )
              } 
                
            })
          }
        </ul>
      </>
    )
  };
};


