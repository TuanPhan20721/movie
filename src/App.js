import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/pages/Search';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
