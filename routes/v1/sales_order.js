var express = require('express');
var router = express.Router();

const book = [
    {
        "id": "1",
        "name": "Game of thrones",
        "create_date": "2020-05-19"
    },
    {
        "id": "2",
        "name": "Clash of kings",
        "create_date": "2020-05-20"
    },
    {
        "id": "3",
        "name": "Harry Potter",
        "create_date": "2020-05-20"
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
    var bookByDate = book.filter(function (item) {
        return item.create_date === req.query.date;
    });
    res.json(bookByDate);

    // next();
});

/* GET users listing. */
router.get('/all', function (req, res, next) {
    res.json(book);
});

module.exports = router;