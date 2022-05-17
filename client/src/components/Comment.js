function Comment({comment}) {
  return(
    <ul>
      <li>
        <p>{comment.text}</p>
        <p style={{fontWeight: 500}}>{comment.user_name}</p>
      </li>
    </ul>
  )
}

export default Comment;