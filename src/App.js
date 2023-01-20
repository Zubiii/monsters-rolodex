import { Component } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log("Monsters => ", this.state.monsters);
          }
        )
      );
  }

  onSearchChnage = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() };
    });
  };

  render() {
    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onSearchChnageHandler={this.onSearchChnage} placeholder="Search Monsters" />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
