import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarsService from '../services/CarsService'

const AppCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        async function getCars() {
    
          try {
            const {data} = await CarsService.getAll()
            
            setCars(data)
          } catch (error) {
            console.log(error)
          }
        } 
    
        getCars()
      }, [])

  return (
        <ul>
            { cars && cars.length > 0 ? cars.map((car) => (
                <ul key={car.id} style={{ "marginBottom": "1rem" }}>
                    <li>Brand: {car.brand}</li>
                    <li>Model: {car.model}</li>
                    <li>Year: {car.year}</li>
                    <li>MaxSpeed: {car.maxSpeed}</li>
                    <li>Automatic: {car.isAutomatic}</li>
                    <li>Engine: {car.engine}</li>
                    <li>Dors: {car.numberOfDoors}</li>
                    <li> <Link to={`/edit/${car.id}`} id={car.id} className='btn btn-warning btn-sm'>Edit</Link> </li>
                </ul>
            )) : 'No cars to show' }
        </ul>
  )
}

export default AppCars