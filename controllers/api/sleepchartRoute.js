const router = require('express').Router();
const { SleepChart } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const sleepData = await SleepChart.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(sleepData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;