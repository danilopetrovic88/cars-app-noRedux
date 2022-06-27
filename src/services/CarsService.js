import axios from "axios";

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
}

export default new CarsService()