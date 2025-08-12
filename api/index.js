import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectMongoDB } from '../src/infrastructure/mongodb/mongodbClient.js';
import userRoute from '../src/interface/routes/userRoute.js';
import { swaggerUi, swaggerSpec } from "../src/infrastructure/swagger/swaggerConfig.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Backend Express is Running ' });
});


app.use('/api', userRoute);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
connectMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
