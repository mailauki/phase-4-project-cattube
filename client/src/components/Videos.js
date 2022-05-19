import Video from "./Video";

function Videos({videos, pathname}) {
  return(
    <div className={pathname === "/" ? "VideoContainer" : "userVideoContainer"}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <Video key={video.id} video={video} pathname={pathname} />
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