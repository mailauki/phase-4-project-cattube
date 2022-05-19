import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";

function UserProfile({currentUser, pathname}) {
  let { id }= useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    pathname === "/users/me" ? (
      fetch(`/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    ) : (
      fetch(`/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    )
  }, [currentUser])

  return(
    <>
      {user ? (
        <div className="Profile">
          <div className="creator">
            <h2>{user.username}</h2>
            <p>## followers</p>
            <p>{user.videos_total} videos</p>
            {pathname === "/users/me" ? <button>Logout</button> : <button>Follow</button>}
          </div>
          <div className="userContent">
            <div className="Lists">
              <div>
                <h4>Following</h4>
                <p>Not Following Anyone</p>
              </div>
              <div>
                <h4>Liked Videos</h4>
                <p>Not Liked Any Videos</p>
              </div>
            </div>
            <div className="userVideos">
              <div className="addVideo">
                <h4>Videos</h4>
                <button className="addButton">+</button>
              </div>
              <Videos videos={user.videos} pathname={pathname} />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Content</div>
      )}
    </>
  )
}

export default UserProfile;