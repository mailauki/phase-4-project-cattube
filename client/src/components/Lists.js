function Lists({followees}) {
  return(
    <div className="Lists">
      <div>
        <h4>Following</h4>
        {followees ? (
          followees.length > 0 ? (
            followees.map(followee => (
              <div key={followee.id} className="items">
                <p>{followee.username}</p>
                <p>{followee.videos_total}</p>
              </div>
            ))
          ) : (
            <p>Not Following Anyone</p>
          )
        ) : (
          <p>Not Following Anyone</p>
        )
        }
      </div>
      <div>
        <h4>Liked Videos</h4>
        <p>Not Liked Any Videos</p>
      </div>
    </div>
  )
}

export default Lists;