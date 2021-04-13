const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const profileRoutes = require('./profileRoute');
const childPofile = require('./childProfileRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/childprofile', childPofile);

module.exports = router;