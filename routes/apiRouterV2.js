var express = require('express');
const {development} = require("../knexfile");
var apiRouterV2 = express.Router();

const knex = require('knex')(development);

apiRouterV2.get('/products', function (req, res, next) {
    return knex.select('*').from('products')
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
});

apiRouterV2.post('/products', function (req, res, next) {
    let product = req.body;

    return knex.insert(product).into('products', product)
        .then(product => {
            res.status(201).send();
        })
        .catch(err => {
            res.status(500).json({
                error: "Failed to register product"
            });
        });
});

apiRouterV2.delete('/products/:id', function (req, res, next) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            error: 'Missing id'
        });
    }

    return knex.delete().from('products').where('id', id)
        .then(products => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
});

apiRouterV2.put('/products/:id', function (req, res, next) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            error: 'Missing id'
        });
    }

    return knex.update(req.body, ['id', 'description', 'brand', 'price']).from('products').where('id', id)
        .then(products => {
            res.json(products[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to update product'
            });
        });
});

apiRouterV2.get('/products/:id', function (req, res, next) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            error: 'Missing id'
        });
    }

    return knex.select('*').from('products').where('id', id)
        .then(products => {
            if (products.length === 0) {
                res.status(404).json({
                        error: 'Product not found'
                    }
                );
            }
            res.json(products[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
});

module.exports = apiRouterV2;
