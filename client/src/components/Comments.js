import { useState } from "react";
import Comment from "../components/Comment";
import Errors from "../components/Errors";

function Comments({comments, id, onComment}) {
  const [newComment, setNewComment] = useState("")
  const [errors, setErrors] = useState([])

  function handleSumbit(e) {
    e.preventDefault()

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text: newComment, video_id: id})
    })
      .then((r) => {
        onComment(newComment)
        setNewComment("")
        if (r.ok) {
          r.json().then((data) => console.log(data))
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
  }

  return(
    <div className="Comments">
      <h4>Comments</h4>
      <form className="add-comment" onSubmit={handleSumbit}>
        <input type="text" placeholder="add a new comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="sumbit" className="add-button button">+</button>
      </form>
      <Errors errors={errors} />
      {comments ? (
        comments.length > 0 ? (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          )).reverse()
        ) : (
          <>
            <p>No Comments Yet</p>
          </>
        )
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  )
}

export default Comments;