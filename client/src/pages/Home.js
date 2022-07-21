import { useState, useEffect } from "react";
import Videos from "../components/Videos";
import Search from "../components/Search";

function Home({pathname, currentUser}) {
  const [videos, setVideos] = useState([])
  const [nineVideos, setNineVideos] = useState([])
  const [filteredVideos, setFilteredVideos] = useState([])
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

  return(
    <>
      <Search videos={videos} onSearch={setFilteredVideos} />

      {!isLoading ? (
        <Videos videos={renderedVideos} pathname={pathname} currentUser={currentUser} />
      ) : (
        <h2 style={{textAlign: "center"}}>Loading...</h2>
      )}
    </>
  )
}

export default Home;