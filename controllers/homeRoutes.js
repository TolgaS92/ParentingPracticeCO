const router = require('express').Router();

const { User, Child } = require('../models');

const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});


router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Child }],
        });
        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(err);
    }
});


router.get('/', withAuth, async (req,res) => {
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
})
module.exports = router;
