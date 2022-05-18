import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/Video.css";
import "../styles/Header.css";
import "../styles/Form.css";
import Header from "./Header";
import Videos from "../pages/Videos";
import VideoProfile from "../pages/VideoProfile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

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
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/:id">
            <VideoProfile />
          </Route>
          <Route path="/">
            <Videos />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
