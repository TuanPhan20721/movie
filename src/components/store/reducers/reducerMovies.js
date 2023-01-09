import * as Types from '../types';
const reducerMoviesInitialState = {
    NetflixOriginals: null,
}
const reducerMovies=(state = reducerMoviesInitialState,action)=>{
    const {type,payload} = action
    switch(type){
        case Types.GET_NETFLIX_ORIGINALS:
            return {...state,NetflixOriginals:payload}
        default:
            return state
    }
}
export default reducerMovies;