import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CarsService from '../services/CarsService';

const AddCar = () => {
    const years = [];
    const engines = ['diesel', 'petrol', 'eletric', 'hybrid'];
    const  [brand, setBrand] = useState('')
    const  [model, setModel] = useState('')
    const [year, setYear] = useState()
    const [maxSpeed, setMaxSpeed] = useState('')
    const [numberOfDoors, setNumberOfDoors] = useState('')
    const [isAutomatic, setIsAutomatic] = useState(false)
    const [engine, setEngine] = useState(engines[0])

    const carParams = useParams()

    let history = useHistory();

    for (let i = 0; i <= 28; i++) {
        years.push(i + 1990)
    }

    const handleBrand = (e) => {
        
       setBrand(e.target.value);
    }

    const handleModel = (e) => {
        setModel(e.target.value)
    }

    const handleYear = (e) => {
        
        setYear(e.target.value)
        
    }

    const handleMaxSpeed = (e) => {
        setMaxSpeed(e.target.value)
    }

    const handleNumberOfDoors = (e) => {
        setNumberOfDoors(e.target.value)
    }

    const handleIsAutomatic = (e) => {
        setIsAutomatic(!!e.target.value)
    }

    const handleEngine = (e) => {
        setEngine(e.target.value)
    }

    const handlePreview = () => {
        alert(JSON.stringify({
            brand: brand,
            model: model,
            year: year,
            maxSpeed: maxSpeed,
            numberOfDors: numberOfDoors,
            isAutomatic: isAutomatic,
            engine: engine
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            CarsService.add({
                brand: brand,
                model: model,
                year: year,
                maxSpeed: maxSpeed,
                numberOfDoors: numberOfDoors,
                isAutomatic: isAutomatic,
                engine: engine
            })

        history.push('/cars')        
    }

    CarsService.get(carParams.id)

    if(year === undefined) {
        setYear(1990)
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-8">
                <h1>Add new Car</h1><br />
                <form onSubmit={handleSubmit}>
                    <input required minLength={2} onChange={(e) => handleBrand(e)} value={brand} type="text" name='brand' placeholder='brand' className="form-control" /><br />
                    <input required minLength={2} onChange={(e) => handleModel(e)} type="text" name='model' placeholder='model' className="form-control"  /><br />
                    <label htmlFor="year">Year: </label><select required onChange={(e) => handleYear(e)} className='form-control' name="year" id="year">
                        { years.map((year, index) => (
                            <option key={index} className="form-control">{year}</option>
                        )) }
                    </select><br />
                    <input onChange={(e) => handleMaxSpeed(e)}  type="number" name='maxSpeed' placeholder='max speed' className="form-control" /><br />
                    <input required onChange={(e) => handleNumberOfDoors(e)}  type="number" name='numberOfDoors' placeholder='number of doors' className="form-control" /><br />
                    <label htmlFor="isAutomatic">Is automatic gear box?</label><input onChange={(e) => handleIsAutomatic(e)} type="checkbox" name='isAutomatic' id='isAutomatic' /><br /><br />
                    <label>Engine?</label><select onChange={handleEngine} name="engine" className='form-control'>
                        {engines.map((engine, index) => (
                            <option required key={index} className='form-control' value={engine}>{engine}</option>
                            ))}
                    </select><br />
                    <button type="submit" className="btn btn-success btn-sm">Add</button>
                    <button type="reset" className="btn btn-danger btn-sm">Reset</button>
                    <button type='button' onClick={() => handlePreview()} className="btn btn-info btn-sm">Preview</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddCar