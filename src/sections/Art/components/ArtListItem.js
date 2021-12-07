import SubjectList from "./SubjectList"

function ArtListItem({art}) {
    return (
        <li>
            <div className="frame">
            <img
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist_title ? art.artist_title : "N/A"}</p>

            <SubjectList subjectTitles={art.subject_titles}/>
        </li>
    )
}

export default ArtListItem