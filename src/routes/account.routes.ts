import express from 'express';
import { createAccount } from '../controllers/account.controllers';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const response = await createAccount(req.body);

    const { statusCode, message, payload } = response;

    return res.status(statusCode).json({ statusCode, message, payload });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

export default router;
