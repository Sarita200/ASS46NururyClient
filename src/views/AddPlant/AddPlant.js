import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'


function AddPlant() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("0")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const addPlant = async () =>{
    if(!name || !category || !price || !image || !description){
      toast.error("Please Enter All Details")
    return
  }

  const response =await axios.post(`${process.env.REACT_APP_API_URL}/plant` ,{
    name :name,
    category :category,
    price :price,
    image : image,
    description :description
  })

  toast.success(response.data.message)

  setName("")
  setCategory("")
  setPrice("")
  setImage("")
  setDescription("")
}

   
  return (
    <div>
      <h1>Add Plant</h1>

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



        <button type='button' onClick={addPlant}>Add Plant</button>
      </form>
      <br/><br/>

      <Link to='/'>Show All plants</Link>

      <Toaster/>
    </div>
  )
}

export default AddPlant
