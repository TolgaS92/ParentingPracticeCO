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
                user_id: req.session.user_id
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