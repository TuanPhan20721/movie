import { useSelector } from 'react-redux';
import './App.css';
import Contents from './components/contents/Contents';
import Intro from './components/intro/intro';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import Navbar from './components/Navbar/navbar';
import Home from './components/pages/Home';
import SearchMovies from './components/SearchMovie/SearchMovies';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/pages/Search';
function App() {
  const {MovieDetail} = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
        {/* <Intro/>
        <Contents/>
        <MoviesDetail movie= {MovieDetail} showModal={MovieDetail ? true : false}/>
        <SearchMovies/> */}
        {/* <Home/> */}
    </div>
  );
}

export default App;
