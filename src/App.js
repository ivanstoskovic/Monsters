import React, { Component } from 'react';
import {CardList} from './COMPONENTS/card_list/C_card_list'
import {SearchBox} from './COMPONENTS/searchBox/C_searchBox'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    
    this.state = 
    {
      monsters:[],
      serachField: ''
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

  handleChange = (e) => {
    this.setState({serachField: e.target.value})
  }

  render(){
    const { monsters, serachField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(serachField.toLowerCase()))
    return (
       <div className="App">
         <h1>Monster Rolodex</h1>
         <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
         <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

//   <input type='serach' placeholder='search monsters' onChange={
      //       e => {
      //         /* SETSTATE JE ASINHRONA METODA I AKO ZELIMO REZULTAT DA SACEKAMO DA GA VRATI 
      //            ONDA DALJE IZVRSAVANJE TREBA DA SE POZIVA U DRUGOM PARAMETRU FUNKCIJE. U OVOM
      //            SLUCAJU JE console.log FUNKCIJA ALI NARAVNO MOZEMO PROSLEDITI I SOPSTVENU FUNKCIJU.
      //            OVO JE BITNO JER AKO POSMATRAMO ZAKOMENTARISANI PRIMER ISPOD, NJEGOVO IZVRSAVANJE 
      //            NECE BITI OCEKIVANO, I U KONZOLI NECE SE PRIKAZATI POSLEDNJI UNESENI KARAKTER U INPPUT POLJE
      //            JER SE PRVO IZVRSI console.log A TEK ONDA SE SETUJE STATE ASINHRONO. ZATO AKO JE BITAN  REDOSLED IZVRSAVANJA
      //            I NEOPHODNI SU NAM PODACI KOJE VRACA SETSTATE ONDA TREBAMO UKLJUCITI I DRUGI PARAMETAR KAKO JE I REGULARNO URADJENO 
      //              */
      //             /*
      //               this.setState({serachField: e.target.value});
      //               console.log(this.state);


      //               this.setState({serachField: e.target.value}, () => console.log(this.state));
      //             */
      //         this.setState({serachField: e.target.value}, () => console.log(this.state));
      //       }
      //     }
      //   />

