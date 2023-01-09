import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MoviesRow from "./MoviesRow";
import { getNetflixOriginals } from "../store/actions";
const movies = [
    "https://www.themoviedb.org/t/p/w220_and_h330_face/y85e9oCVtgXSt1HfP9ZLZvr6AWs.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/dKjjVuPawiREBYjREb3U5SCtfrt.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/j1yqOSVVskSYpYreNT0VeD1S3Dq.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/bxp5IUY05jLGeZ5bW85W2NF6Rgi.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/v9gijQNMhZjGSglOh0nFpfFHhC0.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/yuY9mNG8EgYBwDZKH4RFJHRoAUp.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/jGmC7aMqoLU0ALRKHkz3pQVV1pg.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/oAT0oFl0GWeIjpo1WnF601GFpwm.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/1a48bfLQm57ByADdw05uRMoFCZc.jpg"
    ];
function Contents(props) {
    const dispatch = useDispatch();
    const {NetflixOriginals} = useSelector(state=>state.infoMovies);
    useEffect(()=>{
        dispatch(getNetflixOriginals());
    },[dispatch]);

    console.log(NetflixOriginals);

    return (  
    <div>
        {/* <MoviesRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true}/> */}
        <MoviesRow movies={movies} title="Netflix Originals" isNetflix={true}/>
        <MoviesRow movies={movies} title="Trending Movies"/>
        <MoviesRow movies={movies} title="Top Rated Movies"/>
        <MoviesRow movies={movies} title="Action Movies"/>
        <MoviesRow movies={movies} title="Comedy Movies"/>
        <MoviesRow movies={movies} title="Horror Movies"/>
        <MoviesRow movies={movies} title="Romance Movies"/>
        <MoviesRow movies={movies} title="Documentaries"/>
    </div>
    );
}

export default Contents;