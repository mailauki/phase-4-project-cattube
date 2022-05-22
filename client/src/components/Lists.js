import Likes from "../components/Likes";
import Following from "../components/Following";

function Lists({followees, likes}) {
  return(
    <div className="Lists">
      <Following followees={followees} />
      <Likes likes={likes} />
    </div>
  )
}

export default Lists;