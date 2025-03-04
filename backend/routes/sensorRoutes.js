const express = require('express');
const router = express.Router();

// Mock data (Replace with actual MongoDB data)
const sensorData = [
  { id: 1, type: "Temperature", value: 26.5 },
  { id: 2, type: "Pressure", value: 102.1 },
  { id: 3, type: "Vibration", value: 1.5 }
];

// Route to get all sensors
router.get('/sensors', (req, res) => {
  res.json(sensorData);
});

// Route to get a specific sensor by ID
router.get('/sensors/:id', (req, res) => {
  const sensor = sensorData.find(s => s.id == req.params.id);
  if (sensor) res.json(sensor);
  else res.status(404).json({ message: "Sensor not found" });
});

module.exports = router;
