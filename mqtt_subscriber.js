// Import the MQTT module and database module
const mqtt = require('mqtt');
const database = require('./database');

// MQTT broker URL
const brokerUrl = 'mqtt://test.mosquitto.org';

// Connect to MQTT broker
const client = mqtt.connect(brokerUrl);

// Handle successful MQTT connection
client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Subscribe to 'sensor/data' topic
    client.subscribe('sensor/data', (err) => {
        if (err) {
            console.error('Subscribe error:', err);
        } else {
            console.log('Subscribed to sensor/data');
        }
    });
});

// Handle incoming MQTT messages
client.on('message', (topic, message) => {
    // Parse message
    const data = JSON.parse(message.toString());
    console.log('Received message from', topic, ':', data);

    // Store data in MongoDB
    database.insertData(data);
});
