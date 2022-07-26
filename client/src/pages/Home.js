import { useState, useEffect } from "react";
import Videos from "../components/Videos";

function Home({pathname, currentUser}) {
  const [randomNineVideos, setRandomNineVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/videos")
      .then((r) => {
        if (r.ok) {
          setIsLoading(false)
          r.json().then((data) => {
            setRandomNineVideos(data.sort(() => 0.5 - Math.random()).slice(0, 9))
          })
        }
      })
  }, [])

  return(
    <>

      {!isLoading ? (
        <Videos videos={randomNineVideos} pathname={pathname} currentUser={currentUser} />
      ) : (
        <h2 style={{textAlign: "center"}}>Loading...</h2>
      )}
    </>
  )
}

export default Home;