import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Videos from "./Videos"

function App() {
  const [count, setCount] = useState(0);
  const [videos, setVideos] = useState([{title: "no title", description: "no description", url: "https://www.youtube.com/watch?v=W86cTIoMv2U"}]);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));

    fetch("/videos")
      .then(res => res.json())
      .then(data => setVideos(data))
  }, []);

  console.log(videos)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>

        {/* <div>
          {videos.forEach(video => <div><h3>{video.title}</h3><p>{video.description}</p></div>)}
        </div> */}
        {/* <div>
          <iframe src={videos[1].url} frameborder="0"/>
          <h3>{videos[1].title}</h3>
          <p>{videos[1].description}</p>
        </div> */}
        <Videos videos={videos} />
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/W86cTIoMv2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
