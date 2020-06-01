const db = require("../models");
const SaleOrder = db.saleOrder;
const Op = db.Sequelize.Op;

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