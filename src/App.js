import luffy from './luffy.webp';
import zoro from './zoro.webp';
import sanji from './sanji.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Straw Hat Pirates Page</h1>
        <img src={zoro} className="img-logo" alt="logo" />
        <img src={luffy} className="img-logo" alt="logo" />
        <img src={sanji} className="img-logo" alt="logo" />
        <p>
          Straw Hat Pirates
        </p>
        <a
          className="App-link"
          href="https://onepiece.fandom.com/wiki/One_Piece"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About The Crew
        </a>
      </header>
    </div>
  );
}

export default App;
