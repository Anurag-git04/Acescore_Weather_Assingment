import { useAppSelector } from '../../hooks';

const Weather = () => {
  const { data, loading, error, history } = useAppSelector((state) => state.weather);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-danger mt-4">Error: {error}</p>;
  if (!data) return null;

  return (
    <div className="container mt-4 w">
      
      <div className="card shadow-sm p-4 mb-4">
        <h2 className="card-title text-primary mb-3">
          Weather in {data.location.name}, {data.location.country}
        </h2>
        
        <div className="d-flex align-items-center justify-content-between flex-wrap">

          <div>
            <p className="mb-2"><strong>Temperature:</strong> {data.current.temp_c}°C</p>
            <p className="mb-2"><strong>Humidity:</strong> {data.current.humidity}%</p>
            <p className="mb-2"><strong>Condition:</strong> {data.current.condition.text}</p>
          </div>

          <div>
            <img
              src={`https://openweathermap.org/img/wn/${data.current.condition.icon}@4x.png`}
              alt={data.current.condition.text}
              className="img-fluid"
              style={{ maxWidth: '350px' }}
            />
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="mb-3">Search History</h4>
        {history.length > 0 ? (
          <ul className="list-group list-group-flush">
            {history.map((city, idx) => (
              <li key={idx} className="list-group-item">
                {city.location.name} - {city.current.condition.text} - {city.current.temp_c}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No search history yet.</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
