import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
import Auth from "./components/Auth";

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

  if (user) {
    <div>
      <h2>Welcome, {user.username}!</h2>;
      <Navbar />
    </div>
  } else {
    return (
      // <BrowserRouter>
        // <div className="App">
          // <Switch>
          // <Route path="/login">
          <div>            
            <Auth setCurrentUser={setUser} />

            {/* <Login onLogin={setUser} /> */}
          </div>
          // </Route>
            // <Route path="/testing">
              // <h1>Test Route</h1>
            // </Route>
            // {/* <Route path="/">
              // <h1>Page Count: {count}</h1>
            // </Route> */}
      //     </Switch>
      //   </div>
      // </BrowserRouter>
    );
  }
}



  

export default App;
