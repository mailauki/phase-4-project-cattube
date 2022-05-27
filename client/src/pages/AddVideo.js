import { useState } from "react";
import { useHistory } from "react-router";
import Errors from "../components/Errors";

function AddVideo({newVideo}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/new", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, url})
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => console.log(data))
          history.push("/me")
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
  }

  return(
    <div className="AddVideo">
      <h1>Add a New Video</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Video Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-input">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-input">
          <label>Video URL</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <button className="form-input button" type="submit">Add</button>
        <Errors errors={errors} />
      </form>
    </div>
  )
}

export default AddVideo;