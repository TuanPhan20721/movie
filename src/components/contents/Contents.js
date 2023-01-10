import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {FaArrowAltCircleUp} from "react-icons/fa";
import MoviesRow from "./MoviesRow";
import * as Action from "../store/actions";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrolly } from "../hook";
const ScrollToTop = ()=>{
    scroll.scrollToTop();
}
function Contents(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrolly();
    const {NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaties,
    } = useSelector(state=>state.infoMovies);
    useEffect(()=>{
        dispatch(Action.getNetflixOriginals());
        dispatch(Action.getTrendingMovies());
        dispatch(Action.getTopRatedMovies());
        dispatch(Action.getActionMovies());
        dispatch(Action.getComedyMovies());
        dispatch(Action.getHorrorMovies());
        dispatch(Action.getRomanceMovies());
        dispatch(Action.getDocumentaries());
    },[dispatch]);
    return (  
    <div>
        <MoviesRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true}/>
        <MoviesRow movies={TrendingMovies} title="Trending Movies"/>
        <MoviesRow movies={TopRatedMovies} title="Top Rated Movies"/>
        <MoviesRow movies={ActionMovies} title="Action Movies"/>
        <MoviesRow movies={ComedyMovies} title="Comedy Movies"/>
        <MoviesRow movies={HorrorMovies} title="Horror Movies"/>
        <MoviesRow movies={RomanceMovies} title="Romance Movies"/>
        <MoviesRow movies={Documentaties} title="Documentaries"/>
        <GoToTop   onClick={()=>ScrollToTop()}style = {{
                visibility: `${scrollY > 600 ? 'visible': 'hidden'}`
            }}>
            <FaArrowAltCircleUp/>
        </GoToTop>
    </div>
    );
}

export default Contents;
const GoToTop = styled.div`
position: fixed;
z-index: 10;
right: 70px;
font-size: xx-large;
bottom: 50px;
color: rgba(255,255,255,0.4);
transition: all 0.3s linear;

&:hover{
    color: rgba(255,255,255,0.8);
}
@media screen and (max-width:600px){
    right:40px;
}
`