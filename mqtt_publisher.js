// Import the MQTT module
const mqtt = require('mqtt');

// MQTT broker URL
const brokerUrl = 'mqtt://test.mosquitto.org';

// Connect to MQTT broker
const client = mqtt.connect(brokerUrl);

// Handle successful connection
client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Publish message
    setInterval(() => {
        // Generate random sensor data
        const data = {
            temperature: Math.floor(Math.random() * 50) + 1,
            humidity: Math.floor(Math.random() * 100) + 1
        };
        
        // Publish data to 'sensor/data' topic
        client.publish('sensor/data', JSON.stringify(data));
        console.log('Message sent:', data);
    }, 2000); // Publish message every 2 seconds
});

// Handle errors
client.on('error', (error) => {
    console.error('Error:', error);
});
