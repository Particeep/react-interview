import { movies$ } from "../movies";

export class Api {
  async getMovies() {
    return await movies$
  }
}

const api = new Api()

export default api