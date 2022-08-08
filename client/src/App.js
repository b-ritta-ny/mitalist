import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Navbar from './components/NavBar/NavBar';
import Login from './pages/Login';
import AnimeList from './pages/AnimeList';
import NewAnime from './pages/NewAnime';
import Favorites from './pages/Favorites';

function App() {
  const [user, setUser] = useState(null);
  const [animes, setAnimes] = useState([]);

  useEffect(() => { 
     //auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user)); 
      }
    });
  }, []);

  function handleAddAnime(anime) {
    const updatedAnimes = [...animes, anime];
    setAnimes(updatedAnimes);
}

  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites">
            <Favorites user={user} setUser={setUser} />
          </Route>
          <Route exact path="/signup">
            {/* <Signup user={user} setUser={setUser} />  */}
          </Route>
          <Route exact path="/login">
            <Login user={user} onLogin={setUser} />
          </Route>
          <Route exact path="/my-anime">
            <AnimeList user={user} setUser={setUser} />
          </Route>
          <Route exact path="/new">
            <NewAnime user={user} setUser={setUser} onAddAnime={handleAddAnime} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;