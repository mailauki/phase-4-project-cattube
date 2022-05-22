import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import Lists from "../components/Lists";
import User from "../components/User";

function UserProfile({currentUser, pathname}) {
  let { id }= useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
      pathname === "/users/me" ? (
        fetch(`/users/${currentUser.id}`)
          .then((r) => r.json())
          .then((data) => setUser(data))
      ) : (
        fetch(`/users/${id}`)
          .then((r) => r.json())
          .then((data) => setUser(data))
      )
  }, [currentUser])

  return(
    <>
      {user ? (
        <div className="Profile">
          <User user={user} currentUser={currentUser} pathname={pathname} />
          <div className="userContent">
            <Lists followees={user.followees} likes={user.likes} />
            <div className="userVideos">
              <div className="addVideo">
                <h4>Videos</h4>
                {pathname === "/users/me" ? <button className="addButton">+</button> : <></>}
              </div>
              {user.videos ? <Videos videos={user.videos} pathname={pathname} /> : <p>No Videos Yet</p>}
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