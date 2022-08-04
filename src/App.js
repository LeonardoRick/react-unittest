import './App.css';
import Async from './components/Async';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
