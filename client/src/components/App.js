import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import "../styles/Video.css";
import "../styles/Header.css";
import "../styles/Form.css";
import Header from "./Header";
import Home from "../pages/Home";
import VideoProfile from "../pages/VideoProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));

    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  console.log({user})

  return (
      <div className="App">
        <Header user={user} />
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
            </Route>
            <Route path="/hello">
              <h1>Page Count: {count}</h1>
            </Route>
            <Route path="/signup">
              <Signup onLogin={setUser} />
            </Route>
            <Route path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Route path="/:id">
              <VideoProfile user={user} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
