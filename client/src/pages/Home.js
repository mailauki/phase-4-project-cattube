import { useState, useEffect } from "react";
import Videos from "../components/Videos";
import Search from "../components/Search";

function Home({pathname, currentUser}) {
  const [videos, setVideos] = useState([])
  const [nineVideos, setNineVideos] = useState([])
  const [filteredVideos, setFilteredVideos] = useState([])
  const [alphaVideos, setAlpha] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/videos")
      .then((r) => {
        if (r.ok) {
          setIsLoading(false)
          r.json().then((data) => {
            setVideos(data)
            setNineVideos(data.sort(() => 0.5 - Math.random()).slice(0, 9))
          })
        }
      })
  }, [])

  let renderedVideos = filteredVideos.length > 0 && filteredVideos.length !== videos.length ? filteredVideos : nineVideos

  function handleAlpha() {
    if(alphaVideos.length === 0) {
      fetch("/alpha")
      .then((r) => r.json())
      .then((data) => {
        setAlpha(data)
      })
    }
    else setAlpha([])
  }

  return(
    <>
      <Search videos={videos} onSearch={setFilteredVideos} />
      <button className="button" style={{padding: 10, margin: 10}} onClick={handleAlpha}>{`Alphabetical ${alphaVideos.length > 0 ? "Off" : "On"}`}</button>

      {!isLoading ? (
        <Videos videos={alphaVideos.length > 0 ? alphaVideos : renderedVideos} pathname={pathname} currentUser={currentUser} />
      ) : (
        <h2 style={{textAlign: "center"}}>Loading...</h2>
      )}
    </>
  )
}

export default Home;