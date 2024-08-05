import React from 'react';
import Sidebar from './Sidebar';
import PopulationChart from './PopulationChart'; // Ensure this component is correctly imported
import PopulationList from './PopulationList';

const Dashboard = () => {
    return (
      <div>
    <div style={{
      display: 'flex',
          height: '100vh', 
      
    }}>
      <Sidebar />
      <div style={{
        flex: 1, 
        padding: '10px', 
        boxSizing: 'border-box', 
          }}>
              
        
        <PopulationChart />
        
          </div>
          
      </div>
      <PopulationList/></div>
  );
};

export default Dashboard;
