import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Videos from "../components/Videos";
import Lists from "../components/Lists";
import User from "../components/User";

function UserProfile({currentUser, pathname, onLogout}) {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let username = pathname.split("/")[1]

  useEffect(() => {
      pathname === "/me" ? (
        fetch("/me")
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setIsLoading(false)
                setUser(user)
              })
            }
          })
      ) : (
        fetch(`/${username}`)
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setIsLoading(false)
                setUser(user)
              })
            }
          })
      )
  }, [pathname])

  return(
    <>
      {!isLoading ? (
        <div className="Profile">
          <User user={user} currentUser={currentUser} onLogout={onLogout} />
          <div className="user-content">
            <div className="user-videos">
              <div className="add-video">
                <h4>Videos</h4>
                {pathname === "/me" ? <Link to="/new"><button className="add-button button">+</button></Link> : <></>}
              </div>
              <Videos videos={user.videos} pathname={pathname} currentUser={currentUser} />
            </div>
            <Lists followees={user.followees} likes={user.likes} />
          </div>
        </div>
      ) : (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </>
  )
}

export default UserProfile;