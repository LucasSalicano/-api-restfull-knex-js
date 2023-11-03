var express = require('express');
var apiRouterV1 = express.Router();

var products = [
    {
        "id": 1,
        "brand": "Brand A",
        "description": "Product from Brand A",
        "price": 100.00
    },
    {
        "id": 2,
        "brand": "Brand B",
        "description": "Product from Brand B",
        "price": 75.50
    },
    {
        "id": 3,
        "brand": "Brand C",
        "description": "Product from Brand C",
        "price": 120.99
    },
    {
        "id": 4,
        "brand": "Brand D",
        "description": "Product from Brand D",
        "price": 45.25
    },
    {
        "id": 5,
        "brand": "Brand E",
        "description": "Product from Brand E",
        "price": 199.99
    }
]


apiRouterV1.get('/products', function (req, res, next) {
    res.json(products);
});

apiRouterV1.post('/products', function (req, res, next) {
    let product = req.body;
    let lastId = products[products.length - 1].id;
    product['id'] = lastId + 1;
    products.push(product);

    res.status(201).json(product);
});

apiRouterV1.delete('/products/:id', function (req, res, next) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            error: 'Missing id'
        });
    }

    const product = products.find(p => p.id === parseInt(id))
    if (!product) {
        return res.status(404).json({
            error: 'Product not found'
        });
    }
    products.splice(products.indexOf(product), 1)
    res.status(204).send();
});

apiRouterV1.put('/products/:id', function (req, res, next) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            error: 'Missing id'
        });
    }

    const product = products.find(p => p.id === parseInt(id))
    if (!product) {
        return res.status(404).json({
            error: 'Product not found'
        });
    }

    const indexOf = products.indexOf(product);
    products[indexOf].brand  = req.body.brand;
    products[indexOf].description  = req.body.description;
    products[indexOf].price  = req.body.price;
    res.json(products[indexOf]);
});

apiRouterV1.get('/products/:id', function (req, res, next) {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({
            error: 'Missing id'
        });
    }

    const product = products.find(p => p.id === parseInt(id))
    if (!product) {
        return res.status(404).json({
            error: 'Product not found'
        });
    }

    res.json(product);
});

module.exports = apiRouterV1;
