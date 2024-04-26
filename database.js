// Import the MongoClient from MongoDB
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017';
// Database name and collection name
const dbName = 'mqtt_data';
const collectionName = 'sensor_data';

// Function to insert data into MongoDB
async function insertData(data) {
    try {
        // Connect to MongoDB
        const client = await MongoClient.connect(mongoUrl);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        
        // Insert data into MongoDB collection
        const result = await collection.insertOne(data);
        console.log('Data inserted into MongoDB:', result.ops);
        
        // Close MongoDB connection
        client.close();
        return result.ops;
    } catch (error) {
        console.error('MongoDB insert error:', error);
        throw error;
    }
}

module.exports = {
    insertData
};
