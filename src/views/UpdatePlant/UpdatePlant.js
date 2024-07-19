import axios from 'axios';
import { useEffect, useState } from 'react'
import React  from 'react'

import { useParams } from 'react-router-dom'

function UpdatePlant() {

  const {id} = useParams();

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("0")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const UpdatePlant = ()=>{

  }

  const loadPlant =async () =>{
    if(!id){
      return
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
  }

  useEffect(() =>{
    if(id){
      loadPlant(id);
    }
  }, [id])


  return (
    <div>
        <h1>Update Plant :{id}</h1>

        <form>
        <input
          type='text'
          placeholder='Enter plant Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='PlantInput'
        />

        <input
          type='text'
          placeholder='Enter category of Plant'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='PlantInput'
        />

        <input
          type='number'
          placeholder='Enter Plant Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='PlantInput'
        />

        <img src={image} className='PlantImg'/>

        <input
          type='text'
          placeholder='Enter Plant image url'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='PlantInput'
        />


        <input
          type='text'
          placeholder='Enter Plant Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='PlantInput'
        />



        <button type='button' onAuxClick={UpdatePlant} >Update Plant</button>
      </form>
      <br/><br/>


    </div>
  )
}

export default UpdatePlant
