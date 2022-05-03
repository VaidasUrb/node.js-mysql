// /products-visus produktus
// /products/add-prides produktus
// /products/delete-istrins
// /products/edit-redaguos


const express = require('express');
const router = express.Router();
const databaseConnection = require('../lib/database');


router.get('/products', function (req, res, next) {
    databaseConnection.query('SELECT * FROM`products`', function (err, rows) {
        if (error) {
            req.flash('eorr', err);
            res.render('products', { data: '' });
        } else {
            res.render('products', { data: rows }); // { data:rows} yra sql uzklausos rezultatas JSON formatu
        }
    });
});

module.exports = router;