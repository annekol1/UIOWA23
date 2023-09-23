import React, { Component } from 'react';
import './App.css';
import data from './data/data.json'; //imports json

//bar graph 1
return (
  <LineChart width={500} height={300} data={data}>
   <XAxis dataKey="name" />
   <YAxis />
   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
 )
export default App;