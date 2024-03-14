import React from 'react'
import MenuCard from './MenuCard'

const Choice = () => {
    const options = [
        {name:"Kids", image: "https://i.natgeofe.com/n/118961fb-4155-45af-b99b-8cfc855ccc62/Kids-Playing_Benefits-Sunshine_FAMILY_0322_2x1.jpg"},
        {name:"Adults", image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsummitcounseling.org%2Fthe-importance-of-community-for-young-adults%2F&psig=AOvVaw0WwSwUJt6599SMlgKqVW7m&ust=1710457844927000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMi746iu8oQDFQAAAAAdAAAAABAE"}
    ]
  return (
    <div>

    {options.map(curr=><MenuCard name={curr.name} image={curr.image} />)}

    </div>
  )
}

export default Choice