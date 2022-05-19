import { NavLink, Link } from "react-router-dom";

function Header({currentUser, pathname}) {
  return(
    <div className="Header">
      <Link to="/">
        <h1>CatTube</h1>
      </Link>
      {currentUser ? (
        <div className="user">
          <NavLink to="/users/me">
            <p>{currentUser.username}</p>
          </NavLink>
        </div>
      ) : (
        (() => {
          switch (pathname) {
            case "/login":
              return (
                <div className="user">
                  <NavLink to="/signup">
                    <p>Signup</p>
                  </NavLink>
                </div>
              )
            case "/signup":
              return (
                <div className="user">
                  <NavLink to="/login">
                    <p>Login</p>
                  </NavLink>
                </div>
              )
            default:
              return (
                <div className="user">
                  <NavLink to="/login">
                    <p>Login</p>
                  </NavLink>
                  <p>/</p>
                  <NavLink to="/signup">
                    <p>Signup</p>
                  </NavLink>
                </div>
              )
          }
        })()
      )}
    </div>
  )
}

export default Header;