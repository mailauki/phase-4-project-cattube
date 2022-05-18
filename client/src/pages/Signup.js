function Signup() {
  return(
    <div className="Signup">
      <h1>Signup</h1>
      <form className="Form">
        <div className="formInput">
          <label>Username</label>
        <input type="text" />
        </div>
        <div className="formInput">
          <label>Password</label>
        <input type="password" />
        </div>
        <div className="formInput">
          <label>Password Confirmation</label>
        <input type="password" />
        </div>
        <button className="formInput button">Signup</button>
      </form>
    </div>
  )
}

export default Signup;