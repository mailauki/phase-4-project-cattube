function Form() {
  return(
    <div className="LoForm">
      <form>
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

export default Form;