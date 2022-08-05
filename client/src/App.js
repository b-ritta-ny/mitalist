import { useState, useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import Favorites from "./pages/Favorites";
import Navbar from './components/Navbar';
import Login from './pages/Login';
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
    fetch("/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

    return (
      <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites">
            <Favorites user={user} setUser={setUser} />
          </Route>
          <Route exact path="/login">
            <Login user={user} onLogin={setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
    )
  
}



  

export default App;
