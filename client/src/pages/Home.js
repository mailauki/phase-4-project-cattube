import { useState, useEffect } from "react";
import Videos from "../components/Videos";

function Home({pathname, currentUser, onEdit, updatedVideo}) {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch("/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
  }, [])

  return(
    <Videos videos={videos} pathname={pathname} currentUser={currentUser} onEdit={onEdit} updatedVideo={updatedVideo} />
  )
}

export default Home;