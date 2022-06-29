import { useState, useEffect } from "react";
import Videos from "../components/Videos";

function Home({pathname, currentUser}) {
  const [videos, setVideos] = useState([])
  const [nineVideos, setNineVideos] = useState([])
  const [filteredVideos, setFilteredVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")

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

  function handleSearch(event) {
    event.preventDefault()

    const filteredVideos = videos.filter( video => {
      if(video.title.toLowerCase().includes(search)) return video
      else if(video.user.username === search) return video 
    })

    setFilteredVideos(filteredVideos)
  }

  let renderedVideos = filteredVideos.length > 0 ? filteredVideos : nineVideos

  return(
    <>
      <div className="Search">
        <form onSubmit={handleSearch}>
          <label>🔍</label>
          <input type="text" placeholder="Search videos and users" value={search} onChange={(event) => setSearch(event.target.value)} />
          <button className="button">Search</button>
        </form>
      </div>
      {!isLoading ? (
        <Videos videos={renderedVideos} pathname={pathname} currentUser={currentUser} />
      ) : (
        <h2 style={{textAlign: "center"}}>Loading...</h2>
      )}
    </>
  )
}

export default Home;