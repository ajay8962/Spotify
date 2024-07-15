import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';


// app config
const app = express();
const port = process.env.PORT ;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors({
    origin: ["https://spotify-19eg.vercel.app","https://spotify-9tfy.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));



//initialize the app
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);

app.get('/', (req, res) => res.send("API is running"));


// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));