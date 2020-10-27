import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
const PORT = 3333;

// Configuration to allow different domains
app.use(cors());

// Configuration for JSON
app.use(express.json());

// Configuração de arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

// Route configuration
app.use(routes);

// Errors
app.use(errorHandler);

// Starts the server
app.listen(PORT);