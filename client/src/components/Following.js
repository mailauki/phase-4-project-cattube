function Following({followees}) {
  return(
    <div className="Following">
      <h4>Following</h4>
      {followees ? (
        followees.length > 0 ? (
          followees.map(followee => (
            <div key={followee.id} className="items">
              <h5>{followee.username}</h5>
              <p>{followee.videos_total} videos</p>
            </div>
          ))
        ) : (
          <p className="none">Not Following Anyone</p>
        )
      ) : (
        <p className="none">Not Following Anyone</p>
      )
      }
    </div>
  )
}

export default Following;