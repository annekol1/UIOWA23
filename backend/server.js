const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

var sampleData = [];


app.get('/', (req, res) => {
  res.send('Default Hello World');
});

app.get('/home', (req, res) => {
  res.send('Homepage send');
});

app.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send(name);
});

app.get('/data', (req, res) => {
    res.json(sampleData);
  });
  
app.post('/receive-json', (req, res) => {
  const receivedData = req.body;
  sampleData.push(receivedData);
  res.json({ message: 'JSON data received and saved successfully', data: receivedData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});