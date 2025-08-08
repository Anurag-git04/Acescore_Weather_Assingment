import { useAppSelector } from '../../hooks';

const Weather = () => {
  const { data, loading, error, history } = useAppSelector((state) => state.weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <div className='d-flex gap-3 w-40%'>
      <div className='card p-3'>
        <h2 className="card-title">Weather in {data.location.name}</h2>
        <p>Temperature: {data.current.temp_c}°C</p>
        <p>Humidity: {data.current.humidity}%</p>
        <p>Condition: {data.current.condition.text}</p>
      </div>

      <div className='card p-3'>
        <h3>Search History</h3>
        <ul>
          {history.map((city, idx) => (
            <li key={idx}>{city.location.name} - ({city.current.temp_c}°C)</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Weather;
