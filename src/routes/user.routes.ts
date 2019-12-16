import express from 'express';
import { create } from '../controllers/user.controller';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { statusCode, message, payload } = await create(req.body);
    return res.status(statusCode).json({ statusCode, message, payload });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Internal Server Error' });
  }
});

export default router;
