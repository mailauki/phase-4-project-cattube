import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";

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

  function handleFollow() {
      let following

      if(currentUser) {
        following = {follower_id: user.id, followee_id: currentUser.id}
      }
      else {
        following = {follower_id: user.id, followee_id: currentUser}
      }

      console.log(following)

      fetch("/follow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(following),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => console.log(data))
          } else {
            r.json().then((err) => console.log(err.errors))
          }
        })
  }
  
  // console.log({currentUser})

  return(
    <>
      {user ? (
        <div className="Profile">
          <div className="creator">
            <h2>{user.username}</h2>
            <p>{user.followers_total} followers</p>
            <p>{user.videos_total} videos</p>
            {pathname === "/users/me" ? <button>Logout</button> : <button onClick={handleFollow}>Follow</button>}
          </div>
          <div className="userContent">
            <div className="Lists">
              <div>
                <h4>Following</h4>
                {user.followees ? (
                  user.followees.length > 0 ? (
                    user.followees.map(followee => (
                      <div className="items">
                        <p>{followee.username}</p>
                        <p>{followee.videos_total}</p>
                      </div>
                    ))
                  ) : (
                    <p>Not Following Anyone</p>
                  )
                ) : (
                  <p>Not Following Anyone</p>
                )
                }
              </div>
              <div>
                <h4>Liked Videos</h4>
                <p>Not Liked Any Videos</p>
              </div>
            </div>
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