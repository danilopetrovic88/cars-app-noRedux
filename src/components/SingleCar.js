import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import CarsService from '../services/CarsService';

const SingleCar = () => {
    const [car, setCar] = useState({})
    const {id} = useParams();

    useEffect(() => {
        const fetchCar = async () => {
            const data = await CarsService.get(id);
            setCar(data)
        }

        if(id) {
            fetchCar()
        }

    }, [id]);

    if(!car) {
        <Redirect to={'/cars'} />
    }
  return (
    <div className='container'>
        <h2>Single Car Page</h2>
        <div className='card'>
            <div className='card-header'>
                <p className='p-2'>Brand: {car.brand}</p>
            </div>
            <div className='card-body'>
            <p className='p-2'>Model: {car.model}</p>
            <p className='p-2'>Year: {car.year}</p>
            <p className='p-2'>Engine: {car.engine}</p>
            </div>
            <div className='card-footer'>
            <p className='p-2'>Is Automatic?: {car.isAutomatic}</p>
            <Link to={'/cars'} className='btn btn-info'>Back to cars</Link>
            </div>
        </div>
    </div>
  )
}

export default SingleCar