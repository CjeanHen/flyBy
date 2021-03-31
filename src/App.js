import './App.css';
import SearchForm from './components/SearchForm';
import Flights from './components/Flights';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Find your next flight.</h1>
      </header>
      <SearchForm />
      <Flights />
    </div>
  );
}

export default App;
