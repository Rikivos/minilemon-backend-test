import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from '../src/infrastructure/mongodb/mongodbClient.js';

dotenv.config();
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 3000;
connectMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
