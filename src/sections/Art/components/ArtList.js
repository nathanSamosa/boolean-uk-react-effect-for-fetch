import { useEffect, useState } from "react"
import ArtListItem from "./ArtListItem"

function ArtList() {

    const [artList, setArtList] = useState([])
    const fields = ["image_id", "title", "artist_title", "subject_titles"]

    useEffect(async() => {
        const result = await fetch(`https://api.artic.edu/api/v1/artworks?fields=${fields.join(",")},?limit=12`)
        const response = await result.json()
        setArtList(response.data);
    }, [])

    return (
        <ul className="art-list">
          {artList.map(art => 
            <ArtListItem key={artList.indexOf(art)} art={art}/> 
          )}
      </ul>
    )
}

export default ArtList