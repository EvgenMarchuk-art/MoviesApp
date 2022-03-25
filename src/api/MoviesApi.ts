import axios from 'axios';
import { URL, API_KEY, TRAILER, VIDEO, SEARCH, SEARCH_KEY } from "../servises/const";

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


  return axios.request(request);
};

export const fetchSearch =(searchName:string):Promise<any> =>{
  const request ={
    method: 'GET' as any,
    url: SEARCH + searchName + SEARCH_KEY
  }
  return axios.request(request);
}
