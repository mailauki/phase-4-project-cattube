import { useState } from "react";
import { useHistory } from "react-router";

function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user))
          history.push("/")
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
  }

  return(
    <div className="Login">
      <h1>Login</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="formInput">
          <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="formInput">
          <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="formInput button" type="submit">Login</button>
        {errors ? (
          <div className={errors.length > 0 ? "Errors" : ""}>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  )
}

export default Login;