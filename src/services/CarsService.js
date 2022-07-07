import axios from 'axios';

class CarService {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8000/api',
    });
  }

  async getAll() {
      const { data } = await this.client.get('cars');

      return data;

    return [];
  }

  async add(newCar) {
      const { data } = await this.client.post('cars', newCar);

      return data;


    return null;
  }

  async delete(carId) {
      const { data } = await this.client.delete(`cars/${carId}`);

      return data;

    return {};
  }

  async get(id) {
      const { data } = await this.client.get(`cars/${id}`);

      return data;

    return {};
  }

  async edit(id, newCar) {
      const { data } = await this.client.put(`cars/${id}`, newCar);

      return data;

    return null;
  }
}

export default new CarService();