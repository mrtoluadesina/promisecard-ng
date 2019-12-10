import express from 'express';

//Controllers
import { create } from '../controllers/promisecard.controller';

const router = express.Router();

// POST: /api/v1/promise
//Creates a promise card

router.post('/', async (req, res) => {
  try {
    const response = await create(req.body);
    const { status, message, payload } = response;

    return res.status(status).json({ statusCode: status, message, payload });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
      error: error.message,
    });
  }
});

export default router;
