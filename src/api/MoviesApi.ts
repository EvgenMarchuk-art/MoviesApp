import axios from 'axios';
import { URL, API_KEY, TRAILER, VIDEO } from "../servises/const";

export const fetchMovies = (page: number): Promise<any> => {
  const request = {
    method: 'GET' as any,
    url: URL + API_KEY + `&page=${page}`,
  };
  return axios.request(request);
};

export const fetchTrailer = (id: number): Promise<any> => {
  const request = {
    method: 'GET' as any,
    url: TRAILER + id + VIDEO + API_KEY,
  };

  console.log(request)
  return axios.request(request);
};
