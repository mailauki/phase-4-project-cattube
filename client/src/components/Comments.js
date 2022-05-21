import { useState } from "react";
import Comment from "../components/Comment";
import Errors from "../components/Errors";

function Comments({comments, id, currentUser}) {
  const [newComment, setNewComment] = useState("")
  const [errors, setErrors] = useState([])


  function handleSumbit(e) {
    e.preventDefault()

    let comment

    if(currentUser) {
      comment = {text: newComment, user_id: currentUser.id, video_id: id}
    }
    else {
      comment = {text: newComment, user_id: currentUser, video_id: id}
    }

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then((r) => {
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
      <form className="addComment" onSubmit={handleSumbit}>
        <input type="text" placeholder="add a new comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <button type="sumbit" className="addButton">+</button>
      </form>
      <Errors errors={errors} />
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