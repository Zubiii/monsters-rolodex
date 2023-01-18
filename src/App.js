import { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(
        () => {
          return { monsters: users }
        },
        () => {
          console.log("Monsters => ", this.state.monsters)
        }
      ))
  }

  onSearchChnage = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() }
    })
  }

  render() {

    const filterMonsters = this.state.monsters.filter((monster) =>  {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input type="search" placeholder='Monster Search' onChange={this.onSearchChnage} />
        {
          filterMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
