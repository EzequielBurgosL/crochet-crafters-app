import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { v1Router } from './api/v1';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

app.use('/api/v1', v1Router);

export { app };
