import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../contents/Contents";
import Intro from "../intro/intro";
import MoviesDetail from "../MoviesDetail/MoviesDetail";

function Home(props) {
    const {MovieDetail} = useSelector(state => state.infoMovies)
    const [isShowMovieDetail,setIsShowMovieDetail] = useState(false);
    
    useEffect(()=>{
        setIsShowMovieDetail(MovieDetail? true:false)
    },[MovieDetail])
    return (
        <div>
        <Intro/>
        <Contents/>
        <MoviesDetail movie= {MovieDetail} showModal={MovieDetail ? true : false}/>
        </div>
      );
}

export default Home;