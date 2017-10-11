import express from 'express';

const router = express.Router();

router.get('/bar', (res, req) => {
    res.send("foobar!");
})

export default router;