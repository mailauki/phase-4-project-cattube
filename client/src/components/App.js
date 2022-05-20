import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../styles/Video.css";
import "../styles/Header.css";
import "../styles/Form.css";
import "../styles/User.css";
import Header from "./Header";
import Home from "../pages/Home";
import VideoProfile from "../pages/VideoProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  let pathname = useLocation().pathname

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));

    fetch("/me")
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
  }, []);

  // console.log({currentUser})

  return (
      <div className="App">
        <Header currentUser={currentUser} pathname={pathname} />
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
            </Route>
            <Route path="/hello">
              <h1>Page Count: {count}</h1>
            </Route>
            <Route path="/signup">
              <Signup onLogin={setCurrentUser} />
            </Route>
            <Route path="/login">
              <Login onLogin={setCurrentUser} />
            </Route>
            <Route path="/users/me">
              <UserProfile currentUser={currentUser} pathname={pathname} />
            </Route>
            <Route path="/users/:id">
              <UserProfile currentUser={currentUser} pathname={pathname} />
            </Route>
            <Route path="/:id">
              <VideoProfile currentUser={currentUser} pathname={pathname} />
            </Route>
            <Route path="/">
              <Home pathname={pathname} />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
