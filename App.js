// backend/App.js

import express from 'express';
import userRoutes from './routes/userRoutes.js';
import documentRoutes from './routes/documentRoutes.js';
import dotenv from "dotenv";
import connect from "./config/database.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
connect();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);

export default app;

