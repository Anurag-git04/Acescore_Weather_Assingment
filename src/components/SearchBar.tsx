import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { fetchWeather } from '../features/weather/weatherSlice';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
      setCity('');
    }
  };

  return (
    <div className='m-3 d-flex gap-2'>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        className='form-control'
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch} className='btn btn-primary'>Search</button>
    </div>
  );
};

export default SearchBar;
