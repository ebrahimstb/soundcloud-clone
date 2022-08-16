import './App.css';
import Home from './components/Home';
import Playlist from './components/Playlist';
import Downloads from './components/downloads';

function App() {
  return (
    <div className="App">
      <div className='festos'>
        <Home />
        <Playlist />
      </div>
      <Downloads />
    </div>
  );
}

export default App;
