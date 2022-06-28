import axios from "axios";

class CarsService {
    cars = []

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
}

export default new CarsService()