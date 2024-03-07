const { Sequelize, DataTypes } = require('sequelize');
const appcontroller=require("../controller/appcontroller")

const express = require('express');
const router = express.Router();

router.get('/get-expense',appcontroller.getExpense )
router.post('/add-expense',appcontroller.postExpense );
router.put('/edit-expense/:id',appcontroller.putExpense );
router.delete('/delete-expense/:id',appcontroller.DeleteExpense);
module.exports= router