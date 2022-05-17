import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/Video.css";
import "./styles/Header.css";
import Header from "./Header";
import Videos from "./Videos";
import VideoProfile from "./VideoProfile";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/hello">
            <h1>Page Count: {count}</h1>
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
