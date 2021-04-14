const router = require('express').Router();
const { User } = require('../models');
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
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;



