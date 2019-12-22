import React, { Component } from 'react';
import {CardList} from './COMPONENTS/card_list/C_card_list'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    
    this.state = 
    {
      monsters:[]
    }
  }

  /* #region componentDidMount je lifeCycle metod */
  //Mount ili mounting je kada react stavlja odnosno renderuje komponentu u DOM prvi put
  /*
    componentDidMount je Ugradjena funkcija klase Component koja se izvrsava kada se
    vrsi mounting komponente u kojoj se nalazi.
  */
  /* #endregion */
  componentDidMount()
  {
    //adresa sa tutorijala koja vraca neke podatke
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(users => this.setState({monsters: users}));        
  }

  render(){
    return (
      <div className="App">
        <CardList name="Ivan">{
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }</CardList>
        
      </div>
    );
  }
}

export default App;
