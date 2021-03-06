const router = require('express').Router();
const { SleepChart } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const sleepData = await SleepChart.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.redirect('/profile');
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const sleepData = await SleepChart.update(
            {
                ...req.body,
                user_id: req.session.user_id,
                /* date_created: req.body.date_created,
                am_wake_time: req.body.am_wake_time,
                nap1: req.body.nap1,
                nap_time_in_bed: req.body.nap_time_in_bed,
                nap_time_asleep: req.body.nap_time_asleep,
                nap_time_awake: req.body.nap_time_awake,
                nap_total_duration: req.body.nap_total_duration,
                bedtime: req.body.bedtime,
                bed_time_time_in_bed: req.body.bed_time_time_in_bed,
                bedtime_time_asleep: req.body.bedtime_time_asleep,
                bedtime_total_duration: req.body.bedtime_total_duration,
                feed: req.body.feed */
            },
            {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(sleepData);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', withAuth, async (req,res) => {
    try {
        const deleteSleepData = await SleepChart.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(deleteSleepData);
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;