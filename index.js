const testPublisher = require('./mqtt_publisher');
const testSubscriber = require('./mqtt_subscriber');

function start() {
    console.log('Starting MQTT Publisher...');
    testPublisher.start();
    console.log('Starting MQTT Subscriber...');
    testSubscriber.start();
}
start();
