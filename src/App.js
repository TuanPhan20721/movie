import { useSelector } from 'react-redux';
import './App.css';
import Contents from './components/contents/Contents';
import Intro from './components/intro/intro';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import Navbar from './components/Navbar/navbar';

function App() {
  const {MovieDetail} = useSelector(state => state.infoMovies)
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Contents/>
        <MoviesDetail movie= {MovieDetail} showModal={MovieDetail ? true : false}/>
    </div>
  );
}

export default App;
