import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/Mariem-Artist';

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully!');
    return client.db('Mariem-Artist'); // Replace with your database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export { connectToDatabase };