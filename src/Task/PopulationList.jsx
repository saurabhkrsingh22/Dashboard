import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopulation } from '../store/populationSlice';

const PopulationList = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.population);

  useEffect(() => {
    dispatch(fetchPopulation());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ overflowX: 'auto', padding: '100px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px',textAlign:'center' }}>Population Data</h2>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Year</th>
              {data.map((item) => (
                <th key={item.ID} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  Population
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Population</td>
              {data.map((item) => (
                <td key={item.ID} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {item.Population}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Year</td>
              {data.map((item) => (
                <td key={item.ID} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {item.Year}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PopulationList;
