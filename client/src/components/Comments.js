import { useState } from "react";
import Comment from "../components/Comment";

function Comments({comments, id, currentUser}) {
  const [newComment, setNewComment] = useState("")
  const [errors, setErrors] = useState([])


  function handleSumbit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text: newComment, user_id: currentUser.id, video_id: id})
    })
     .then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
     })
    console.log({text: newComment, user_id: currentUser.id, video_id: id})
  }

  return(
    <div className="Comments">
      <h4>Comments</h4>
      <form className="addComment" onSubmit={handleSumbit}>
        <input type="text" placeholder="add a new comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="sumbit" className="addButton">+</button>
      </form>
      <div className={errors.length > 0 ? "Errors" : ""}>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
      {comments ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <>
          <p>No Comments Found</p>
        </>
      )}
    </div>
  )
}

export default Comments;