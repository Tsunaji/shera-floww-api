// This will load our .env file and add the values to process.env
require('dotenv').config({ silent: true });

const config = {
    MSSQL_DATABASE: process.env.MSSQL_DATABASE || process.env.APPSETTING_MSSQL_DATABASE,
    MSSQL_USER: process.env.MSSQL_USER || process.env.APPSETTING_MSSQL_USER,
    MSSQL_PASSWORD: process.env.MSSQL_PASSWORD || process.env.APPSETTING_MSSQL_PASSWORD,
    MSSQL_HOST: process.env.MSSQL_HOST || process.env.APPSETTING_MSSQL_HOST
};

module.exports = config;