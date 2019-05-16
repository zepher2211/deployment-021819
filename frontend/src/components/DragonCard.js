import React from 'react'
import { Link } from 'react-router-dom'


const DragonCard = ({ name, description, image, id, atWar, shiftDragon }) =>  (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <img width="100" src={image} /><br/>
        <button onClick={() => shiftDragon(id)}>{atWar ? 'Send Home' : 'Send to War'}</button>
        <Link to={`/edit-dragon/${id}`} >Edit Dragon</Link>
    </div>
)

export default DragonCard