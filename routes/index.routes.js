const express = require('express');
const router = express.Router();
const metricRoutes = require('./metric.routes');
router.use('/metric', metricRoutes);

module.exports = router;
