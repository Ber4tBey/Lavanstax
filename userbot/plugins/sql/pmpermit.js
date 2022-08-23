/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/


const config = require('../../../config');
const { DataTypes } = require('sequelize');

const PermitDB = config.DATABASE.define('Pmpermit', {
    uid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
});
 PermitDB.sync();

module.exports = { PermitDB: PermitDB};
