import express from 'express'

const router = express.Router();
router.use('/todo/api/v1.0', require('./Api/api'))

module.exports = router;