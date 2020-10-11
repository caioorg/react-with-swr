import useSWR from "swr";
import axios from "axios";

/* 

  - SUPORTE PARA O AXIOS

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const useFetchAxios = (url) => { 
  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error }
}

*/

export const useFetch = (url) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  return { data, error };
};
