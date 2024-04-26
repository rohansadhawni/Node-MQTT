const mqtt = require('mqtt');
const broker = 'mqtt://test.mosquitto.org';
const topic = 'test';

function startSubscriber() {
    const client = mqtt.connect(broker);

    client.on('connect', () => {
        console.log('Connected to MQTT broker');

        client.subscribe(topic, (err) => {
            if (!err) {
                console.log('Subscribed to topic:', topic);
            }
        });
    });

    client.on('message', (topic, message) => {
        console.log('Received message on topic', topic, ':', message.toString());
    });
}

module.exports = { start: startSubscriber };
