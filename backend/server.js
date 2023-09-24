const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let sampleData = {
  temperature: '',
  humidity: '',
  weather: '',
  groundPressure: '',
  rain: '',
  windspeed: ''
};


fs.readFile('data.json', 'utf8', (err, data) => {
  if (!err) {
    try {
      sampleData = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});

app.get('/', (req, res) => {
  res.send('Default Hello World');
});

app.get('/home', (req, res) => {
  res.send('Homepage send');
});

app.get('/data', (req, res) => {
  res.json(sampleData);
});

app.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send(name);
});

app.post('/receive-json', (req, res) => {
  const receivedData = req.body;
  sampleData = receivedData;
  
  // Save the received data to data.json
  fs.writeFile('data.json', JSON.stringify(sampleData), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to data.json:', err);
    } else {
      console.log('JSON data received and saved successfully');
    }
  });

  res.json({ message: 'JSON data received and saved successfully', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});