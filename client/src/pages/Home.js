import { useState, useEffect } from "react";
import Videos from "../components/Videos";

function Home({pathname, currentUser}) {
  const [randomNineVideos, setRandomNineVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [keyword, setKeyword] = useState("")
  const [searchedVideos, setSearchedVideos] = useState([])

  useEffect(() => {
    // fetch("/videos")
    //   .then((r) => {
    //     if (r.ok) {
    //       setIsLoading(false)
    //       r.json().then((data) => {
    //         setRandomNineVideos(data.sort(() => 0.5 - Math.random()).slice(0, 9))
    //       })
    //     }
    //   })

    fetch("/random_nine_videos")
    .then((r) => {
      if (r.ok) {
        setIsLoading(false)
        r.json().then((data) => {
          setRandomNineVideos(data)
        })
      }
    })
  }, [])

  function handleSearch(event) {
    event.preventDefault()

    fetch(`/search/${keyword}`)
    .then((r) => r.json())
    .then((data) => setSearchedVideos(data))
  }

  let renderedVideos = searchedVideos.length > 0 && keyword !== "" ? searchedVideos : randomNineVideos

  return(
    <>
      <form style={{ marginBottom: 10}}>
        <input type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
        <button onClick={handleSearch} >Search</button>
      </form>

      {!isLoading ? (
        <Videos videos={renderedVideos} pathname={pathname} currentUser={currentUser} />
      ) : (
        <h2 style={{textAlign: "center"}}>Loading...</h2>
      )}
    </>
  )
}

export default Home;