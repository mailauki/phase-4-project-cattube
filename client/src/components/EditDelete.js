import { useHistory } from "react-router-dom";

function EditDelete({video, currentUser}) {
  const history = useHistory()

  function handleEdit() {
    history.push(`/videos/${video.id}/edit`)
  }

  function handleDelete(e) {
    fetch(`/${video.id}/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(e.target.parentNode.parentNode.parentNode.parentNode.remove())
  }

  return(
    <div className="EditDelete">
      <button className="button" onClick={handleEdit}>Edit</button>
      <button className="button" onClick={handleDelete}>X</button>
    </div>
  )
}

export default EditDelete;