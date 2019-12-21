var express = require('express');
var router = express.Router();
var score = require('../models/score');

router.get('/:searchText', function (req, res, next) {
    score.find({ name: { $regex: new RegExp(req.params.searchText) } })
        .then((s) => {
            if (s.length == 0)
                res.status(404).json({ message: 'No result found' })
            else
                res.status(200).json(s)
        })
        .catch((e) => res.status(404).json(e));

    // score.aggregate([{ $match: { name: { $regex: new RegExp(req.params.searchText) } } }])
    //     .then((s) => {
    //         if (s.length == 0)
    //             res.status(404).json({ message: 'No result found' })
    //         else
    //             res.status(200).json(s)
    //     })
    //     .catch((e) => res.status(404).json(e));
});

module.exports = router;
