import React, { Component } from "react";

import { Title } from 'components/Title/Title';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

handleSubmit = (event) => {
  event.preventDefault();

 
  const name = event.currentTarget.elements.name.value;

  const newContact = {
    name,
    id: Math.random()
  };
  

  this.setState(prevState => {
    return {
      contacts: [...prevState.contacts, newContact]
    }
  })
  event.currentTarget.reset();
}


  render () {
    console.log(this.state)
    return (
      <>
        <Title text={"Phonebook"}/>

        <form name='myFirstReactForm' onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" name="btn">Add contact</button>
        </form>


        <Title text={"Contacts"}/>
        <ul>
          {this.state.contacts.map(({id, name}) => {
            return (
              <li key={id}>
                {name}
              </li>
            )
          })}
        </ul>
      </>
    )
  };
};
