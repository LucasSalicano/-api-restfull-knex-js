/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('products').del()
    await knex('products').insert([
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
            },
            {
                "id": 6,
                "brand": "Brand F",
                "description": "Product from Brand F",
                "price": 50.00
            },
            {
                "id": 7,
                "brand": "Brand G",
                "description": "Product from Brand G",
                "price": 89.95
            },
            {
                "id": 8,
                "brand": "Brand H",
                "description": "Product from Brand H",
                "price": 29.99
            },
            {
                "id": 9,
                "brand": "Brand I",
                "description": "Product from Brand I",
                "price": 149.50
            },
            {
                "id": 10,
                "brand": "Brand J",
                "description": "Product from Brand J",
                "price": 69.99
            }
        ]
    );
};
