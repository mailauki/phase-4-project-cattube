import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/Video.css";
import "./styles/Header.css";
import Header from "./Header";
import Videos from "./Videos";
import VideoProfile from "./VideoProfile";

function App() {
  // const [count, setCount] = useState(0);
  // const [videos, setVideos] = useState([{title: "no title", description: "no description", url: "https://www.youtube.com/watch?v=W86cTIoMv2U"}]);

  // useEffect(() => {
    // fetch("/hello")
    //   .then((r) => r.json())
    //   .then((data) => setCount(data.count));

  //   fetch("/videos")
  //     .then(res => res.json())
  //     .then(data => setVideos(data))
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/videos/:id" component={VideoProfile}>
            {/* <VideoProfile /> */}
          </Route>
          <Route path="/videos" component={Videos}>
            {/* <Videos videos={videos} /> */}
          </Route>
          {/* <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
