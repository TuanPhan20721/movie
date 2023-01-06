import './App.css';
import Contents from './components/contents/Contents';
import Intro from './components/intro/intro';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Contents/>
    </div>
  );
}

export default App;
