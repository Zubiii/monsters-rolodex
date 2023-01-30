import { useEffect, useState } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filterMonsters, setFilterMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(()=> {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilterMonsters)
  }, [monsters, searchField])

  const onSearchChnage = (event) => {
    setSearchField(event.target.value.toLowerCase())
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onSearchChnageHandler={onSearchChnage} placeholder="Search Monsters" />
      <CardList monsters={filterMonsters} />
    </div>
  )
}

export default App;
