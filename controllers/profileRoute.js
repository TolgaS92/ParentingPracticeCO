const router = require('express').Router();

const { User, SleepChart, Child } = require('../models');

const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [ { model: Child } ],
        });
        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in,
            logged_name: req.session.logged_name
        });
    } catch (error) {
        res.status(500).json;
    }
});

/* router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const postData = await SleepChart.findByPk(req.params.id, {
            include: [{ all: true }],
        });
        const post = postData.get({ plain: true });
        res.render('edit', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
}); */

router.get('/newchild', withAuth, (req, res) => {
    try {
        if(req.session.logged_in) {
            res.render('newchild-form',{
                logged_in: req.session.logged_in
            });
            return;
        }
        res.redirect('/profile');
    } catch (error) {
        res.status(500).json(error);
    }
    
});

module.exports = router;