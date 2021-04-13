const router = require('express').Router();
const { User, SleepChart, Child } = require('../models');
const withAuth = require('../utils/auth');

router.get("/:id", withAuth, async (req, res) => {
    try {
        const postData = await SleepChart.findByPk(req.session.user_id, {
            include: [{ all: true }],
        });
        const post = postData.get({ plain: true });
        /* res.json(post); */
        res.render('child-profile', {
            post,
            logged_in: req.session.logged_in,
            user_id: req.session.id
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;