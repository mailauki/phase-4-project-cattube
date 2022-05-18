function Login() {
  return(
    <div className="Login">
      <h1>Login</h1>
      <form className="Form">
        <div className="formInput">
          <label>Username</label>
        <input type="text" />
        </div>
        <div className="formInput">
          <label>Password</label>
        <input type="password" />
        </div>
        <button className="formInput button">Login</button>
      </form>
    </div>
  )
}

export default Login;