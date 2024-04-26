# MQTT Node.js Project

This project demonstrates how to use MQTT (Message Queuing Telemetry Transport) with Node.js to publish and subscribe to sensor data, and store the data in a MongoDB database.

## Prerequisites

Before running this project, make sure you have the following installed on your system:

- Node.js
- MongoDB

## Setup

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Run the MQTT publisher and subscriber by running `node mqtt_publisher.js` and `node mqtt_subscriber.js` respectively.

## Project Structure

- `mqtt_publisher.js`: Node.js script to publish random sensor data to an MQTT broker.
- `mqtt_subscriber.js`: Node.js script to subscribe to sensor data from an MQTT broker and store it in MongoDB.
- `database.js`: Module to handle MongoDB database operations.

## License

This project is licensed under the [MIT License](LICENSE).
