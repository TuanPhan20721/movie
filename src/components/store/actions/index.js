import axios from "axios";
import * as Types from '../types';

const API_KEY ='ac6e65fa613787f2a017c498a44ba521';
const BASE_URL = 'https://api.themoviedb.org/3';
export const getNetflixOriginals = () => async dispatch =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINALS,payload:result.data.result});
    } catch (error) {
        console.log('Get Netflix Api error: ',error);
    }
}