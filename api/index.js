import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from '../src/infrastructure/mongodb/mongodbClient.js';
import userRoute from '../src/interface/routes/userRoute.js';


dotenv.config();
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/api', userRoute);

const PORT = process.env.PORT || 3000;
connectMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
