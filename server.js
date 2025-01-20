import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import path from 'path';
import userRoutes from './routes/userRoutes';
import blogRoutes from './routes/blogRoutes';

//env config
dotenv.config();

//mongodb connection
connectDB();

const __dirname = path.resolve();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, '/client/build')));

// Port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white
  );
});
