import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { movies$ } from "../../../movies";

const mockAxios = axios.create();
const mock = new MockAdapter(mockAxios);
mock.onGet("/api/v1/movies").reply(200, movies$);

const services = {
  movies: () => mockAxios.get("/api/v1/movies"),
};

export default services;
