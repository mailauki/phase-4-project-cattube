import { useState } from "react";
import { useHistory } from "react-router";
import Errors from "../components/Errors";

function EditVideo({video}) {
  const [title, setTitle] = useState(video.title)
  const [description, setDescription] = useState(video.description)
  const [url, setUrl] = useState(video.url)
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/${video.id}/edit`, {
      method: "PATCH",
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
      <h1>Edit Video</h1>
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
        <button className="form-input button" type="submit">Update</button>
        <Errors errors={errors} />
      </form>
    </div>
  )
}

export default EditVideo;