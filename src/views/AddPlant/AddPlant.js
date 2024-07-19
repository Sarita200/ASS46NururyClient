import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'


function AddPlant() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const addPlant = async () => {
    if (!name || !category || !price || !image || !description) {
      toast.error("Please Enter All Details")
      return
    }

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
      name: name,
      category: category,
      price: price,
      image: image,
      description: description
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
      <h1 className='PageTitle'>Add Plant</h1>

      <form>
        <div className='formContainer'>
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

          <img src={image} className='PlantImg' />

          <input
            type='text'
            placeholder='Enter Plant image url'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='PlantInput'
            alt='IMG'
          />


          <input
            type='number'
            placeholder='Enter Plant Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='PlantInput'
          />

          <input
            type='text'
            placeholder='Enter Plant Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='PlantInput'
          />

          <button type='button' onClick={addPlant} className='showAllPlantsBtn'>Add Plant</button><br/><br/>
          <Link to='/' className='showAllPlantsBtn'>Show All plants</Link>
        </div>
      </form>
      <br /><br />

      <div className='ShowBtnContainer'>
      
      </div>

      <Toaster />
    </div>
  )
}

export default AddPlant
