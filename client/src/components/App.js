import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../styles/Video.css";
import "../styles/Header.css";
import "../styles/Form.css";
import "../styles/User.css";
import "../styles/Lists.css";
import "../styles/Comments.css";
import Header from "./Header";
import Home from "../pages/Home";
import VideoProfile from "../pages/VideoProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";
import AddVideo from "../pages/AddVideo";
import EditVideo from "../pages/EditVideo";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  let pathname = useLocation().pathname

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user))
        }
      })
  }, [])

  return (
      <div className="App">
        <Header currentUser={currentUser} pathname={pathname} />

        <div className="Content">
          <Switch>
            <Route path="/signup">
              <Signup onLogin={setCurrentUser} />
            </Route>
            <Route path="/login">
              <Login onLogin={setCurrentUser} />
            </Route>
            <Route path="/new">
              <AddVideo />
            </Route>
            <Route path="/videos/:id/edit">
              <EditVideo pathname={pathname} />
            </Route>
            <Route path="/videos/:id">
              <VideoProfile currentUser={currentUser} pathname={pathname} onLogout={setCurrentUser} />
            </Route>
            <Route path="/me">
              <UserProfile currentUser={currentUser} pathname={pathname} onLogout={setCurrentUser} />
            </Route>
            <Route path="/:username">
              <UserProfile currentUser={currentUser} pathname={pathname} />
            </Route>
            <Route path="/">
              <Home pathname={pathname} currentUser={currentUser} />
            </Route>
          </Switch>
        </div>
      </div>
  );
}

export default App;
