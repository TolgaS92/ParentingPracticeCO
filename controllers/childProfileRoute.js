const router = require('express').Router();
const { User, SleepChart } = require('../models');
const withAuth = require('../utils/auth');

router.get("/:id", withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{ all: true }],
        });
        const user = userData.get({ plain: true });
        /* res.json(user); */
        res.render('child-profile', {
            ...user,
            logged_in: req.session.logged_in,
            logged_name: req.session.logged_name
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const sleepData = await SleepChart.findByPk(req.params.id, {
            include: [{ all: true }],
        });
        const sleepchart = sleepData.get({ plain: true });
        res.render('sleepchart-edit', {
            sleepchart,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;



