import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Errors from "../components/Errors";

function EditVideo({pathname}) {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [url, setUrl] = useState()
  const [errors, setErrors] = useState([])
  const history = useHistory()
  let id = pathname.split("/")[2]

  useEffect(() => {
    fetch(`/videos/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setTitle(data.title)
        setDescription(data.description)
        setUrl(data.url)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/${id}/edit`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, url})
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => history.push("/me"))
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
          <p className="label">(optional)</p>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-input">
          <label>Video URL</label>
          <p className="label">Recomended to use embed url.</p>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <button className="form-input button" type="submit">Update</button>
        <Errors errors={errors} />
      </form>
    </div>
  )
}

export default EditVideo;