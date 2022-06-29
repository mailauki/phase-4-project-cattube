import { useState } from "react";

function Search({videos, onSearch}) {
  const [search, setSearch] = useState("")

  function handleSearch(event) {
    event.preventDefault()

    const filterVideos = videos.filter( video => {
      if(video.title.toLowerCase().includes(search)) return video
      else if(video.user.username === search) return video 
    })

    onSearch(filterVideos)
  }

  return(
    <div className="Search">
        <form onSubmit={handleSearch}>
          <label>🔍</label>
          <input type="text" placeholder="Search videos and users" value={search} onChange={(event) => setSearch(event.target.value)} />
          <button className="button">Search</button>
        </form>
      </div>
  )
}

export default Search;