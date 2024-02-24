import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  console.log('get all users');
  res.status(200).json({ data: 'get all users' });
});

router.post('/register', (req, res) => {
  console.log(req.body);
});

router.post('/login', (req, res) => {
  console.log(req.body);
});

export default router;
