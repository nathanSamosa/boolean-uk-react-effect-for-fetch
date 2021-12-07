import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import InitFavourites from "./initFavourites"
import FavouriteSLipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const [favouriteSlips, setFavouriteSlips] = useState(InitFavourites)
  const [slip, setSlip] = useState("")

  const fetchNewSlip = async() => {
    const result = await fetch(`https://api.adviceslip.com/advice`)
    const response = await result.json()
    setSlip(response.slip)
  }

  useEffect(() => fetchNewSlip(), []);

  const addToFavourites = advice => {
    !favouriteSlips.filter(slip => slip.id === advice.id).length
      ? setFavouriteSlips([...favouriteSlips, advice])
      : alert("Already exists in favourites")
  }

  return (
    <section>
      <h2>Advice Section</h2>

      <AdviceSlip 
        slip={slip}
        fetchNewSlip={fetchNewSlip}
        addToFavourites={addToFavourites}
      />

      <FavouriteSLipsList
        favouriteSlips={favouriteSlips}
      />
      
    </section>
  )
}

export default AdviceSection
