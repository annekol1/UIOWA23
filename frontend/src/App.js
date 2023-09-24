import React from 'react';
import './App.css';
//import { sqlData } from './data';
//import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sensor Data</h1>
      </header>
          <div className="chart-light">
            <Line data={chartData} />
            <p> Moisture </p>
          </div>  
          <h2>Humidity graph</h2>
          <div className="chart-moisture">
            <Line data={chartData} />
            <p> Light </p>
          </div>  
          <h2>Light graph</h2>
          <div className="future-chart-temp">
            <Line data={chartData} />
            <p> Projected Tempurature </p>
          </div>
          <div className="future-chart-uv">
            <Line data={chartData} />
            <p> Projected UV Index </p>
          </div>
          <div className="future-chart-precip">
            <Line data={chartData} />
            <p> Projected Precipitation </p>
          </div> 
          <div class="pie">
            <span class="overlay"></span>
          </div>
       <main>
        <LineChart data={sqlData} /> 
      </main> 
  </div>
  );
}

export default App;