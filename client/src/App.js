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
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  if (user) return <Home user={user} setUser={setUser} />

    return (
      <div className="App">
        <Router>
          <Navbar user={user} setUser={setUser} />
            <Switch>
              <Route exact path="/">
                <AnimeList />
              </Route>
              <Route exact path="/my-anime">
                <AnimeList/>
              </Route>
            </Switch>
        </Router>
      </div>
    )
  
}



  

export default App;
