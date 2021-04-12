const router = require('express').Router();

const { Child } = require('../../models');

const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req,res) => {
    try {
        const newChild = await Child.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newChild);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;