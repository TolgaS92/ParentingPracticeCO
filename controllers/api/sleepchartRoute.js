const router = require('express').Router();
const { SleepChart } = require('../../models');


router.post('/', async (req,res) => {
    try {
        const sleepData = await SleepChart.create(req.body);
        res.status(200).json(sleepData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;