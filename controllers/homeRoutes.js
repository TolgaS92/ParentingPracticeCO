const router = require('express').Router();

const { User, Child } = require('../models');

const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll(req.body);
        const users = userData.map((user) => user.get({ plain: true }));
        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
            logged_name: req.session.logged_name,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }
    /* console.log(req.session); */
    res.render('login');
});


router.get('/sleepchart', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Child }],
        });
        const user = userData.get({ plain: true });
        res.render('sleepchart', {
            ...user,
            logged_in: req.session.logged_in,
            logged_name: req.session.logged_name
        });
    } catch (error) {
        res.status(500).json(err);
    }
});


/* router.get('/', withAuth, async (req,res) => {
    try {
        const childData = await Child.findByPk(req.session.user_id, {
            include: [{ model: User }],
        });
        const child = childData.get({ plain: true });
        res.render('profile', {
            ...child,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
}); */
module.exports = router;
