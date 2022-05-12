import Video from "./Video"

function Videos({videos}) {
  return(
    <div className="VideoContainer">
      {videos.map(video => <Video video={video}/>)}
    </div>
  )
}

export default Videos;