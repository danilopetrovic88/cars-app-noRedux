import axios from "axios";
import AddCar from "../components/AddCar";

class CarsService {

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:3000'
        })

    }

    async getAll() {
        try {
            const {data} = await this.httpClient.get('/api/cars')
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    
    add(car) {
        axios.post('http://localhost:3000/api/cars', car)
            .then(res => res.data)
            .catch(err => console.log(err))
    }

    get(id) {
       let carForEdit =  axios.get(`http://localhost:3000/api/cars/${id}`)
        .then(res => res.data)
        .catch(err => err)
    }

    // edit(id, car) {
    //     this.httpClient.put(`/api/cars/${id}`, car)
    //     .then(res => res.data)
    //     .catch(err => console.log(err))
    // }
}

export default new CarsService()