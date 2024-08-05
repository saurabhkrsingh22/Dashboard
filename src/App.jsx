// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PopulationList from './Task/PopulationList';
import PopulationChart from './Task/PopulationChart';

import Sidebar from './Task/Sidebar';
import Dashboard from './Task/Dashboard';

const App = () => (
  <Provider store={store}>
   <div>
      {/* <Sidebar/>
      <PopulationChart/>
      <PopulationList/> */}
      <Dashboard/>
   </div>
  </Provider>
 
 
);

export default App;
