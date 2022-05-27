import Video from "./Video";

function Videos({videos, currentUser, pathname}) {
  return(
    <div className={pathname === "/" ? "video-container" : "user-video-container"}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <Video key={video.id} video={video} currentUser={currentUser} pathname={pathname} />
        ))
      ) : (
        <>
          <h2>No Videos Yet</h2>
        </>
      )}
    </div>
  )
}

export default Videos;