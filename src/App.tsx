import SearchBar from './components/SearchBar';
import Weather from './features/weather/Weather';

const App = () => {
  return (
    <div className='container'>
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <Weather />
    </div>
  );
};

export default App;
