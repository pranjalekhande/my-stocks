import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import jwt from 'jsonwebtoken';

import { v4 as uuidv4 } from 'uuid';
import stockRoutes from './routes/stockRoutes.js';
import { authenticateToken } from './middleware/auth.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/stocks', authenticateToken, stockRoutes);



// Token generation route
app.post('/api/token', (req, res) => {
  const uuid = uuidv4();
  const token = jwt.sign({ uuid }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


