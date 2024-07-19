import React from 'react'
import "./PlantCard.css"

function PlantCard({_id , name , category , image , price , description}) {
  return (
    <div className='plantCard'>
      <h1 className='plantTitle'>{name}</h1>
      <p className='PlantPrice'>Price : {price}</p>
      <img src={image} className='PlantCardImg'/>

      <div>
        <button type='button' className='action-btn editBtn'> Edit</button>

        <button type='button' className='action-btn deleteBtn'>Delete</button>
      </div>
    </div>
  )
}

export default PlantCard
