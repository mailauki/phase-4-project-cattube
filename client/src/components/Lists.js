import Likes from "../components/Likes";
import Following from "../components/Following";

function Lists({followees, likedVideos}) {
  return(
    <div className="Lists">
      <Following followees={followees} />
      <Likes likedVideos={likedVideos} />
    </div>
  )
}

export default Lists;