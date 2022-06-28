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
        console.log(car); // Treba da zavrsim ovo kako je navedeno u zadatku
    }
}

export default new CarsService()