import { useState, useEffect } from "react";
import Videos from "../components/Videos";

function Home({pathname, currentUser}) {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/videos")
      .then((r) => {
        if (r.ok) {
          setIsLoading(false)
          r.json().then((data) => setVideos(data))
        }
      })
  }, [])

  return(
    <>
      {!isLoading ? (
        <Videos videos={videos} pathname={pathname} currentUser={currentUser} />
      ) : (
        <>
          <h2 style={{textAlign: "center"}}>Loading...</h2>
        </>
      )}
    </>
  )
}

export default Home;