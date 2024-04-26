const mqtt = require('mqtt');
const mongoose = require('mongoose');

const broker = 'mqtt://test.mosquitto.org';
const topic = 'test';

const mongoURI = 'mongodb+srv://karan1:pedalsup@savsani.1ox8rei.mongodb.net/mqtttest';

mongoose.connect(mongoURI);

const DataSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create model from schema
const DataModel = mongoose.model('Data', DataSchema);

// Function to save data to MongoDB
function saveData(temperature, humidity) {
    const newData = new DataModel({
        temperature,
        humidity
    });

    newData.save();
}

function startPublisher() {
    const client = mqtt.connect(broker);
    function publishData() {
        const temperature = Math.floor(Math.random() * 100); 
        const humidity = Math.floor(Math.random() * 100); 
        const data = {
            temperature,
            humidity
        };

        client.publish(topic, JSON.stringify(data));
        console.log('Published:', data);

        saveData(temperature, humidity);
    }

    client.on('connect', () => {
        console.log('Connected to MQTT broker');
        setInterval(publishData, 5000);
    });
}

module.exports = { start: startPublisher };
