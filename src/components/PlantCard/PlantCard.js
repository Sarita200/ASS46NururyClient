import React from 'react'
import "./PlantCard.css"
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'



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
        <Link className='action-btn editBtn' to ={`/update/${_id}`}> Edit</Link>

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
