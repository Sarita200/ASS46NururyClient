import React from 'react'
import "./PlantCard.css"
import toast from 'react-hot-toast'
import axios from 'axios'



function PlantCard({ _id, name, category, image, price, description ,loadPlants}) {

  const deletePlant =async (plantID) =>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantID}`)

    toast.response(response.data.message)
    loadPlants();
}

  return (
    <div className='plantCard'>
      <h1 className='plantTitle'>{name}</h1>
      <p className='PlantPrice'>Price : {price}</p>
      <img src={image} className='PlantCardImg' />

      <div>
        <button type='button' className='action-btn editBtn'> Edit</button>

        <button
          type='button'
          className='action-btn deleteBtn'
          onClick ={()=>{
            deletePlant(_id)
          }}
          >
            Delete
        </button>
      </div>
    </div>
  )
}

export default PlantCard
