import React, { useState, useEffect } from 'react'
import CarsService from '../services/CarsService'

const AppCars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        async function getCars() {
    
          try {
            const cars = await CarsService.getAll()
            
            setCars(cars)
          } catch (error) {
            console.log(error)
          }
        } 
    
        getCars()
      }, [])

  return (
        <ul>
            { cars.map((car) => (
                <ul key={car.id}>
                    <li>Brand: {car.brand}</li>
                    <li>Model: {car.model}</li>
                    <li>Year: {car.year}</li>
                    <li>MaxSpeed: {car.maxSpeed}</li>
                    <li>Automatic: {car.isAutomatic}</li>
                    <li>Engine: {car.engine}</li>
                    <li>Dors: {car.numberOfDoors}</li>
                </ul>
            )) }
        </ul>
  )
}

export default AppCars