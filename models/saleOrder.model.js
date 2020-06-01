const tableConfig = require('../config/tableConfig');

module.exports = (sequelize, Sequelize) => {
    const SaleOrder = sequelize.define('FLOWW_SALE_ORDER', {
        SalesDocument: Sequelize.STRING,
        CreateDate: Sequelize.DATEONLY,
        UpdateDate: Sequelize.DATEONLY,
        YourReference: Sequelize.STRING,
        CstPurchaseOrderNo: Sequelize.STRING,
        RequestedDeliveryDate: Sequelize.DATEONLY,
        VKBUR: Sequelize.STRING,
        SaleItemCode: Sequelize.DECIMAL(6, 0),
        MaterialNo: Sequelize.STRING,
        SOLDTO_TITLE_NAME: Sequelize.STRING,
        SOLDTO_NAME: Sequelize.STRING,
        SOLDTO_ADR1: Sequelize.STRING,
        SOLDTO_ADR2: Sequelize.STRING,
        SOLDTO_ADR3: Sequelize.STRING,
        SOLDTO_STREET_NAME: Sequelize.STRING,
        SOLDTO_COUNTRY: Sequelize.STRING,
        SOLDTO_DISTINCT: Sequelize.STRING,
        SOLDTO_POST_CODE: Sequelize.STRING,
        SHIPTO_TITLE_NAME: Sequelize.STRING,
        SHIPTO_NAME: Sequelize.STRING,
        SHIPTO_ADR1: Sequelize.STRING,
        SHIPTO_ADR2: Sequelize.STRING,
        SHIPTO_ADR3: Sequelize.STRING,
        SHIPTO_STREET_NAME: Sequelize.STRING,
        SHIPTO_COUNTRY: Sequelize.STRING,
        SHIPTO_DISTINCT: Sequelize.STRING,
        SHIPTO_POST_CODE: Sequelize.STRING
    },
        tableConfig
    );
    return SaleOrder;
};