import Video from "./Video";

function Videos({videos, pathname, currentUser}) {
  return(
    <div className={pathname === "/" ? "VideoContainer" : "userVideoContainer"}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <Video key={video.id} video={video} currentUser={currentUser} />
        ))
      ) : (
        <>
          <h2>No Videos Found</h2>
        </>
      )}
    </div>
  )
}

export default Videos;