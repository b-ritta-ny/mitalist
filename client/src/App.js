import { useState, useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from "./components/home/Home";
import AnimeList from "./pages/AnimeList"
import Favorites from "./pages/Favorites";

// import Auth from "./components/Auth";

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  // if (user) return <AnimeList user={user} setUser={setUser} />

    return (
      <div className="App">
        <Router>
          <Navbar user={user} setUser={setUser} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/my-anime">
                <AnimeList user={user} setUser={setUser}/>
              </Route>
            </Switch>
        </Router>
      </div>
    )
  
}



  

export default App;
