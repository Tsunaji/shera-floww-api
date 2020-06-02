const db = require("../models");
const SaleOrder = db.saleOrder;
const Op = db.Sequelize.Op;
const { validationResult, query } = require('express-validator');

// Retrieve all SaleOrder from the database.
exports.findAll = (req, res) => {
    SaleOrder.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sale order."
            });
        });
};

// Retrieve all SaleOrder from the database.
exports.search = (req, res) => {

    const create_date = req.query.create_date || null;
    const from_create_date = req.query.from_create_date || null;
    const to_create_date = req.query.to_create_date || null;

    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    var condition = {
        [Op.or]: [
            { CreateDate: create_date },
            { CreateDate: { [Op.between]: [from_create_date, to_create_date] } }
        ]
    }
    SaleOrder.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sale order."
            });
        });
};

// Retrieve all SaleOrder from the database.
exports.validate = (method) => {
    switch (method) {
        case 'search': {
            return [
                query('create_date', 'Invalid create date').isISO8601().optional(),
                query('from_create_date', 'Invalid from create date').isISO8601().optional(),
                query('cto_reate_date', 'Invalid to create date').isISO8601().optional(),
            ]
        }
    }
};