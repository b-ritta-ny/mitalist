import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Navbar from './components/NavBar/NavBar';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => { 
     //auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user)); 
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites">
            {/* <Favorites user={user} setUser={setUser} /> */}
          </Route>
          <Route exact path="/signup">
            {/* <Signup user={user} setUser={setUser} /> */}
          </Route>
          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route exact path="/animes">
            {/* <Anime user={user} setUser={setUser} /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;