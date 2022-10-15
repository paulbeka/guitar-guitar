import axios from 'axios'

class GuitarAPI {
  constructor() {
    const baseUrl = "";
    this.axios = axios.create({
      baseUrl
    })
  }

  getGuitars() {
    return this.axios.get('localhost:5000/guitars');
  }
}

export default GuitarAPI