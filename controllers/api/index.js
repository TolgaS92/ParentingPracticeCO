const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sleepChartRoutes = require('./sleepchartRoute');
const childRoutes = require('./childRoute');



router.use('/users', userRoutes);
router.use('/sleepchart', sleepChartRoutes);
router.use('/child', childRoutes);

module.exports = router;