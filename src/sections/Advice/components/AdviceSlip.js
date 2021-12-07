function AdviceSlip({slip, fetchNewSlip, addToFavourites}) {
    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{slip.advice}</p>
            <button onClick={() => fetchNewSlip()}>Get More Advice</button>
            <button onClick={() => addToFavourites(slip)}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip