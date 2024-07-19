import axios from 'axios';
import { useEffect, useState } from 'react'
import React from 'react'
import toast  from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


function UpdatePlant() {

  const { id } = useParams();

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("0")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const UpdatePlant = async () => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}` , {
      name: name,
      price: price,
      category: category,
      image: image,
      description: description
    })

    toast.success(response.data.message)


  }

  const loadPlant = async (id) => {
    if (!id) {
      return
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
    const plantData =response.data.data

    const { name, image, price, category, description } = plantData

    setName(name)
    setImage(image)
    setCategory(category)
    setPrice(price)
    setDescription(description)
  }

  useEffect(() => {
      loadPlant(id)

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

        <img src={image} className='PlantImg' alt='Img' />

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



        <button type='button' onClick={UpdatePlant} >Update Plant</button>
      </form>
      <br /><br />

      <Link to='/'>Show All plants</Link>
    <Toaster/>
    </div>
  )
}

export default UpdatePlant
