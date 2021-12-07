function FavouriteSLipsList({favouriteSlips}) {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
            {favouriteSlips.map(slip =>
                <li key={slip.id}>
                    {slip.advice}
                </li>
            )}
            </ul>
        </section>
    )
}

export default FavouriteSLipsList