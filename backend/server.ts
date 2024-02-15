import express, { Express, Request, Response } from 'express';
import { __port__ } from './config/constants';
import { connectDB } from './config/db';

connectDB();

const app: Express = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Go To Movies api with typescript mumbo jumbo and express');
});

app.listen(__port__, () => {
  console.log(`[server]: Server is running at http://localhost:${__port__}`);
});
