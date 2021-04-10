const router = require('express').Router();
const { SleepChart } = require('../../models');


router.post('/', async (req,res) => {
    try {
        const sleepData = await SleepChart.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.redirect('/profile')
    } catch (error) {
        res.status(500).json(error);
    }
});